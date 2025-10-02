<template>
  <div>
    <!-- Main comment submission form -->
    <div class="input-group search-field my-4 insert_comment">
      <input
        v-model="message"
        class="form-control border-left-0 border shadow-none"
        type="search"
        :placeholder="
          'نظر شما در مورد این ' + ChooseLang(type, ChooseFaType()) + ' چیست؟'
        "
      />
      <button
        class="btn rounded-pill btn-sm btn-secondary btn-send-comment"
        @click="saveComment"
      >
        {{ $t('comment.send_comment') }}
      </button>
    </div>
    <div v-if="errorComment" class="py-2" style="color: red; margin-top: -1rem">
      {{ errorComment }}
    </div>

    <!-- Display comments -->
    <div v-if="commentsData && commentsData.length" id="comments">
      <div
        v-for="(comment, index) in commentsData"
        :key="comment.id"
        class="d-flex flex-column mb-3"
      >
        <CommentCard
          :userImage="comment.user.image"
          :userName="comment.user.name"
          :content="comment.content"
          :approved="comment.approved"
          :votes="comment.votes || 0"
          :showReplyButton="true"
          @upvote="
            voteComment(
              comment.id,
              COMMENT_TYPES.DIRECT,
              index,
              null,
              VOTE_TYPES.UP
            )
          "
          @downvote="
            voteComment(
              comment.id,
              COMMENT_TYPES.DIRECT,
              index,
              null,
              VOTE_TYPES.DOWN
            )
          "
          @reply="toggleReplyBox(comment.id)"
        >
          <!-- Reply form for the comment -->
          <div
            v-if="replyBoxes[comment.id]"
            class="input-group search-field my-4 insert_comment my-2 ml-5"
          >
            <input
              v-model="replyMessage[comment.id]"
              class="form-control border-left-0 border shadow-none"
              type="search"
              :placeholder="
                'نظر شما در مورد این ' +
                ChooseLang(type, ChooseFaType()) +
                ' چیست؟'
              "
            />
            <button
              class="btn rounded-pill btn-sm btn-secondary btn-send-comment"
              @click="sendReply(comment.id, index)"
            >
              ارسال پاسخ
            </button>
          </div>

          <!-- Display replies -->
          <div v-if="comment.replies && comment.replies.length" class="ml-5">
            <div
              v-for="(reply, rIndex) in comment.replies"
              :key="reply.id"
              class="d-flex flex-column mb-3"
            >
              <CommentCard
                :userImage="reply.user.image"
                :userName="reply.user.name"
                :content="reply.content"
                :approved="reply.approved"
                :votes="reply.votes || 0"
                :showReplyButton="false"
                @upvote="
                  voteComment(
                    reply.id,
                    COMMENT_TYPES.REPLY,
                    index,
                    rIndex,
                    VOTE_TYPES.UP
                  )
                "
                @downvote="
                  voteComment(
                    reply.id,
                    COMMENT_TYPES.REPLY,
                    index,
                    rIndex,
                    VOTE_TYPES.DOWN
                  )
                "
              />
            </div>
          </div>
        </CommentCard>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CommentCard from './CommentCard.vue'

// Constants
const API = Object.freeze({
  AUTH: '/comments-v2',
  GHOST: '/ghost/comments-v2',
})
const PAGINATION = Object.freeze({
  PAGE: 1,
  LIMIT: 10,
})
const VOTE_TYPES = Object.freeze({
  UP: 'up',
  DOWN: 'down',
})
const COMMENT_TYPES = Object.freeze({
  DIRECT: 'directcomment',
  REPLY: 'replycomment',
})

export default {
  components: {
    CommentCard,
  },
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
      // Maintain the open/close state of the reply form for each comment
      replyBoxes: {},
      // Maintain the reply text for each comment
      replyMessage: {},
      // expose constants for template use
      COMMENT_TYPES,
      VOTE_TYPES,
    }
  },
  computed: {
    ...mapGetters({ commentsloading: 'comments/commentsloading' }),
  },
  mounted() {
    this.fetchComments()
  },
  methods: {
    ChooseLang(en, fa) {
      return fa && this.$i18n.locale === 'fa' ? fa : en
    },
    ChooseFaType() {
      if (this.type === 'movie') return 'فیلم'
      else if (this.type === 'episode') return 'قسمت'
      else return 'سریال'
    },
    getApiUrl() {
      return this.$auth.loggedIn ? API.AUTH : API.GHOST
    },
    async fetchComments() {
      this.$store.dispatch('comments/COMMENTS_SPINER_LOAD')
      try {
        const { PAGE, LIMIT } = PAGINATION
        const res = await this.$axios.get(this.getApiUrl(), {
          params: { type: this.type, id: this.id, page: PAGE, limit: LIMIT },
        })
        if (res.status === 200 && res.data.status === 'success') {
          this.commentsData = res.data.comments.data
          this.avatar = res.data.avatar
          this.fullname = res.data.name
          this.errorComment = null
        } else {
          this.errorComment = res.data.message || 'خطا در دریافت نظرات'
        }
      } catch (error) {
        this.errorComment =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          'خطای شبکه'
      } finally {
        this.$store.dispatch('comments/COMMENTS_SPINER_CLEAN')
      }
    },
    async saveComment() {
      if (!this.message || this.message.trim() === '') {
        this.errorComment = 'لطفا نظر خود را وارد نمایید'
        return
      }
      this.errorComment = null

      if (!this.$auth.loggedIn) {
        this.$store.dispatch('login/SHOW_MODAL', {
          premessage: null,
          premobile: null,
          preredirect: null,
          prerefresh: false,
        })
        return
      }

      this.loading = true
      try {
        const res = await this.$axios.post(API.AUTH, {
          type: this.type,
          id: this.id,
          content: this.message,
          parent_id: null,
        })
        if (
          (res.status === 200 || res.status === 201) &&
          res.data.status === 'success'
        ) {
          this.commentsData.unshift(res.data.comment)
          this.message = null
        } else {
          this.errorComment = res.data.message || 'ثبت نظر ناموفق بود'
        }
      } catch (error) {
        this.errorComment =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          'خطای شبکه'
      } finally {
        this.loading = false
      }
    },
    toggleReplyBox(commentId) {
      const next = !this.replyBoxes[commentId]
      this.$set(this.replyBoxes, commentId, next)
      // Clear the reply text when toggling the reply form
      this.$set(this.replyMessage, commentId, '')
    },
    async sendReply(parentId, commentIndex) {
      const replyText = this.replyMessage[parentId]
      if (!replyText || replyText.trim() === '') {
        this.errorReply = 'لطفا پاسخ خود را وارد نمایید'
        return
      }
      this.errorReply = null

      if (!this.$auth.loggedIn) {
        this.$store.dispatch('login/SHOW_MODAL', {
          premessage: null,
          premobile: null,
          preredirect: null,
          prerefresh: false,
        })
        return
      }

      this.loading = true
      try {
        const res = await this.$axios.post(API.AUTH, {
          type: this.type,
          id: this.id,
          content: replyText,
          parent_id: parentId,
        })
        if (
          (res.status === 200 || res.status === 201) &&
          res.data.status === 'success'
        ) {
          if (!this.commentsData[commentIndex].replies) {
            this.$set(this.commentsData[commentIndex], 'replies', [])
          }
          this.commentsData[commentIndex].replies.unshift(res.data.comment)
          this.$set(this.replyMessage, parentId, '')
          this.$set(this.replyBoxes, parentId, false)
        } else {
          this.errorReply = res.data.message || 'ثبت پاسخ ناموفق بود'
        }
      } catch (error) {
        this.errorReply =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          'خطای شبکه'
      } finally {
        this.loading = false
      }
    },
    async voteComment(
      commentId,
      commentType,
      commentIndex,
      replyIndex,
      voteType
    ) {
      if (!this.$auth.loggedIn) {
        this.$store.dispatch('login/SHOW_MODAL', {
          premessage: 'نیاز به ورود',
          premobile: null,
          preredirect: null,
          prerefresh: false,
        })
        return
      }

      this.loading = true
      try {
        const res = await this.$axios.post(`${API.AUTH}/${commentId}/vote`, {
          vote: voteType,
        })
        if (res.status === 200 && res.data.status === 'success') {
          if (commentType === COMMENT_TYPES.DIRECT) {
            this.$set(this.commentsData[commentIndex], 'votes', res.data.votes)
          } else if (
            commentType === COMMENT_TYPES.REPLY &&
            this.commentsData[commentIndex]?.replies?.[replyIndex]
          ) {
            this.$set(
              this.commentsData[commentIndex].replies[replyIndex],
              'votes',
              res.data.votes
            )
          }
        }
      } catch (error) {
        const msg =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          'خطای شبکه'
        if (commentType === COMMENT_TYPES.REPLY) {
          this.errorReply = msg
        } else {
          this.errorComment = msg
        }
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
