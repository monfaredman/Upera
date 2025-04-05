<template>
  <div>
    <!-- فرم ارسال کامنت اصلی -->
    <div class="input-group search-field my-4 insert_comment">
      <input v-model="message" class="form-control border-left-0 border shadow-none" type="search"
             :placeholder="'نظر شما در مورد این ' + ChooseLang(type, ChooseFaType()) + ' چیست؟'"
      >
      <button class="btn rounded-pill btn-sm btn-secondary btn-send-comment" @click="saveComment">
        {{ $t('comment.send_comment') }}
      </button>
    </div>
    <div v-if="errorComment" class="py-2" style="color:red;margin-top:-1rem">
      {{ errorComment }}
    </div>

    <!-- نمایش کامنت‌ها -->
    <div v-if="commentsData && commentsData.length" id="comments">
      <div v-for="(comment, index) in commentsData" :key="comment.id" class="d-flex flex-column mb-3">
        <!-- نمایش اطلاعات کامنت اصلی -->
        <div class="d-flex comment">
          <div class="avatar">
            <img class="rounded-circle" :src="comment.user.image" alt="">
          </div>
          <div class="d-flex flex-column align-items-start ml-2 ml-lg-4 border-bottom flex-grow-1">
            <b class="mb-2 comment-title">{{ comment.user.name }}</b>
            <p class="comment-text" :class="{ 'font-italic': !comment.approved }">
              {{ comment.content }}
            </p>
            <div class="comment-actions d-flex align-items-center">
              <button class="btn btn-outline-success btn-sm" @click="voteComment(comment.id, 'directcomment', index, null, 'up')">
                <!-- در صورت استفاده از FontAwesome می‌توانید اینجا از <i class="fa fa-thumbs-up"></i> استفاده کنید -->
                👍
              </button>
              <span class="mx-2">{{ comment.votes || 0 }}</span>
              <button class="btn btn-outline-danger btn-sm" @click="voteComment(comment.id, 'directcomment', index, null, 'down')">
                <!-- در صورت استفاده از FontAwesome می‌توانید اینجا از <i class="fa fa-thumbs-down"></i> استفاده کنید -->
                👎
              </button>
              <button class="btn btn-outline-primary btn-sm mr-3" @click="toggleReplyBox(comment.id)">
                پاسخ
              </button>
            </div>
          </div>
        </div>
        <!-- فرم پاسخ برای کامنت -->
        <div v-if="replyBoxes[comment.id]" class="input-group search-field my-4 insert_comment my-2 ml-5">
          <input v-model="replyMessage[comment.id]" class="form-control border-left-0 border shadow-none" type="search"
                 :placeholder="'نظر شما در مورد این ' + ChooseLang(type, ChooseFaType()) + ' چیست؟'"
          >
          <button class="btn rounded-pill btn-sm btn-secondary btn-send-comment" @click="sendReply(comment.id, index)">
            ارسال پاسخ
          </button>
        </div>
        <!-- نمایش پاسخ‌ها -->
        <div v-if="comment.replies && comment.replies.length" class="ml-5">
          <div v-for="(reply, rIndex) in comment.replies" :key="reply.id" class="d-flex comment mb-3">
            <div class="avatar">
              <img class="rounded-circle" :src="reply.user.image" alt="">
            </div>
            <div class="d-flex flex-column align-items-start ml-2 ml-lg-4 border-bottom flex-grow-1">
              <b class="mb-2 comment-title">{{ reply.user.name }}</b>
              <p class="comment-text" :class="{ 'font-italic': !reply.approved }">
                {{ reply.content }}
              </p>


              <div class="comment-actions d-flex align-items-center">
                <button class="btn btn-outline-success btn-sm" @click="voteComment(reply.id, 'replycomment', index, rIndex, 'up')">
                  <!-- در صورت استفاده از FontAwesome می‌توانید اینجا از <i class="fa fa-thumbs-up"></i> استفاده کنید -->
                  👍
                </button>
                <span class="mx-2">{{ comment.votes || 0 }}</span>
                <button class="btn btn-outline-danger btn-sm" @click="voteComment(reply.id, 'replycomment', index, rIndex, 'down')">
                  <!-- در صورت استفاده از FontAwesome می‌توانید اینجا از <i class="fa fa-thumbs-down"></i> استفاده کنید -->
                  👎
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    type: { type: String, default: null },
    id: { type: String, default: null },
    name: { type: String, default: null },
    namefa: { type: String, default: null },
  },
  data() {
    return {
      avatar: null,
      fullname: null,
      commentsData: [],
      message: null,
      errorComment: null,
      errorReply: null,
      loading: false,
      // نگهداری وضعیت باز/بسته بودن فرم پاسخ هر کامنت
      replyBoxes: {},
      // نگهداری متن پاسخ برای هر کامنت
      replyMessage: {}
    }
  },
  computed: {
    ...mapGetters({ commentsloading: "comments/commentsloading" })
  },
  mounted() {
    this.fetchComments()
  },
  methods: {
    ChooseLang(en, fa) {
      return (fa && this.$i18n.locale === "fa") ? fa : en
    },
    ChooseFaType() {
      if (this.type === "movie") return 'فیلم'
      else if (this.type === "episode") return 'قسمت'
      else return 'سریال'
    },
    fetchComments() {
      this.$store.dispatch('comments/COMMENTS_SPINER_LOAD')
      const api_url = this.$auth.loggedIn ? '/comments-v2' : '/ghost/comments-v2'
      const page = 1
      const limit = 10
      this.$axios.get(api_url, {
        params: { type: this.type, id: this.id, page: page, limit: limit }
      })
      .then((res) => {
        this.$store.dispatch('comments/COMMENTS_SPINER_CLEAN')
        if (res.status === 200 && res.data.status === 'success') {
          // دریافت کامنت‌ها از ساختار paginate شده
          this.commentsData = res.data.comments.data
          this.avatar = res.data.avatar
          this.fullname = res.data.name
        } else {
          this.errorComment = res.data.message
        }
      })
      .catch((error) => {
        this.$store.dispatch('comments/COMMENTS_SPINER_CLEAN')
        this.errorComment = error.response.data.message
      })
    },
    saveComment() {
      if (this.message && this.message.trim() !== '') {
        this.errorComment = null
        this.loading = true
        if (!this.$auth.loggedIn) {
          this.$store.dispatch('login/SHOW_MODAL', { premessage: null, premobile: null, preredirect: null, prerefresh: false })
        } else {
          this.$axios.post('/comments-v2', {
            type: this.type,
            id: this.id,
            content: this.message,
            parent_id: null
          }).then((res) => {
            this.loading = false
            if ((res.status === 200 || res.status === 201) && res.data.status === 'success') {
              // اضافه کردن کامنت جدید به ابتدای لیست
              this.commentsData.unshift(res.data.comment)
              this.message = null
            } else {
              this.errorComment = res.data.message
            }
          }).catch((error) => {
            this.loading = false
            this.errorComment = error.response.data.message
          })
        }
      } else {
        this.errorComment = "لطفا نظر خود را وارد نمایید"
      }
    },
    toggleReplyBox(commentId) {
      this.$set(this.replyBoxes, commentId, !this.replyBoxes[commentId])
      // در صورت باز شدن فرم، متن قبلی پاک شود
      if (!this.replyBoxes[commentId]) {
        this.$set(this.replyMessage, commentId, '')
      }
    },
    sendReply(parentId, commentIndex) {
      const replyText = this.replyMessage[parentId]
      if (replyText && replyText.trim() !== '') {
        this.errorReply = null
        this.loading = true
        if (!this.$auth.loggedIn) {
          this.$store.dispatch('login/SHOW_MODAL', { premessage: null, premobile: null, preredirect: null, prerefresh: false })
        } else {
          this.$axios.post('/comments-v2', {
            type: this.type,
            id: this.id,
            content: replyText,
            parent_id: parentId
          }).then((res) => {
            this.loading = false
            if ((res.status === 200 || res.status === 201) && res.data.status === 'success') {
              if (!this.commentsData[commentIndex].replies) {
                this.$set(this.commentsData[commentIndex], 'replies', [])
              }
              // اضافه کردن پاسخ جدید به ابتدای لیست پاسخ‌ها
              this.commentsData[commentIndex].replies.unshift(res.data.comment)
              this.$set(this.replyMessage, parentId, '')
              this.$set(this.replyBoxes, parentId, false)
            } else {
              this.errorReply = res.data.message
            }
          }).catch((error) => {
            this.loading = false
            this.errorReply = error.response.data.message
          })
        }
      } else {
        this.errorReply = "لطفا پاسخ خود را وارد نمایید"
      }
    },
    voteComment(commentId, commentType, commentIndex, replyIndex, voteType) {
      this.loading = true
      if (!this.$auth.loggedIn) {
        this.$store.dispatch('login/SHOW_MODAL', { premessage: 'نیاز به ورود', premobile: null, preredirect: null, prerefresh: false })
      } else {
        this.$axios.post('/comments-v2/' + commentId + '/vote', { vote: voteType })
        .then((res) => {
          this.loading = false
          if (res.status === 200 && res.data.status === 'success') {
            if (commentType === 'directcomment') {
              this.commentsData[commentIndex].votes = res.data.votes
            } else if (commentType === 'replycomment') {
              this.commentsData[commentIndex].replies[replyIndex].votes = res.data.votes
            }
          }
        }).catch((error) => {
          this.loading = false
          if (commentType === 'replycomment') {
            this.errorReply = error.response.data.message
          } else {
            this.errorComment = error.response.data.message
          }
        })
      }
    }
  }
}
</script>
