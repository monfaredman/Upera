<template>
  <div class="comments-container">
    <!-- Comment count header -->
    <div class="comments-count-header">
      {{ commentsData.length }} دیدگاه ثبت شده
    </div>

    <!-- Main comment submission form -->
    <div class="comment-input-wrapper">
      <div
        v-if="avatar"
        class="user-avatar"
        :style="{ backgroundImage: `url(${avatar})` }"
      ></div>
      <div v-else class="user-avatar user-avatar-placeholder">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
            fill="#D4D4D4"
          />
        </svg>
      </div>
      <div class="input-box-wrapper">
        <input
          v-model="message"
          class="comment-input"
          type="text"
          placeholder="نوشتن نظر"
        />
        <button class="comment-send-button" @click="saveComment">
          ارسال
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 10L17.5 3.33333L10.8333 18.3333L8.33333 11.6667L2.5 10Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="errorComment" class="error-message">
      {{ errorComment }}
    </div>

    <!-- Display comments -->
    <div v-if="commentsData && commentsData.length" id="comments">
      <div
        v-for="(comment, index) in commentsData"
        :key="comment.id"
        class="comment-item"
      >
        <CommentCard
          :userImage="comment.user.image"
          :userName="comment.user.name"
          :content="comment.content"
          :approved="comment.approved"
          :votes="comment.votes || 0"
          :showReplyButton="true"
          :timestamp="comment.created_at || comment.timestamp"
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
            class="comment-input-wrapper reply-input-wrapper"
          >
            <div
              v-if="avatar"
              class="user-avatar"
              :style="{ backgroundImage: `url(${avatar})` }"
            ></div>
            <div v-else class="user-avatar user-avatar-placeholder">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                  fill="#D4D4D4"
                />
              </svg>
            </div>
            <div class="input-box-wrapper">
              <input
                v-model="replyMessage[comment.id]"
                class="comment-input"
                type="text"
                placeholder="نوشتن نظر"
              />
              <button
                class="comment-reply-button"
                @click="sendReply(comment.id, index)"
              >
                ارسال پاسخ

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 10L17.5 3.33333L10.8333 18.3333L8.33333 11.6667L2.5 10Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Display replies -->
          <div
            v-if="comment.replies && comment.replies.length"
            class="replies-container"
          >
            <CommentCard
              v-for="(reply, rIndex) in comment.replies"
              :key="reply.id"
              :userImage="reply.user.image"
              :userName="reply.user.name"
              :content="reply.content"
              :approved="reply.approved"
              :votes="reply.votes || 0"
              :showReplyButton="false"
              :timestamp="reply.created_at || reply.timestamp"
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
      hasFetched: false, // Prevent duplicate fetches
      fetchCancelToken: null, // For canceling pending requests
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
  watch: {
    // Watch for changes in id/type props to refetch if needed
    id(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.hasFetched = false
        this.fetchComments()
      }
    },
    type(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.hasFetched = false
        this.fetchComments()
      }
    },
  },
  mounted() {
    if (!this.hasFetched) {
      this.fetchComments()
    }
  },
  beforeDestroy() {
    // Cancel any pending request when component is destroyed
    if (this.fetchCancelToken) {
      this.fetchCancelToken.cancel('Component destroyed')
      this.fetchCancelToken = null
    }
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
      // Prevent duplicate fetches
      if (this.hasFetched || !this.type || !this.id) {
        return
      }

      // Cancel any pending request
      if (this.fetchCancelToken) {
        this.fetchCancelToken.cancel('New request initiated')
      }

      // Create new cancel token
      const CancelToken = this.$axios.CancelToken
      this.fetchCancelToken = CancelToken.source()

      this.$store.dispatch('comments/COMMENTS_SPINER_LOAD')
      try {
        const { PAGE, LIMIT } = PAGINATION
        const res = await this.$axios.get(this.getApiUrl(), {
          params: { type: this.type, id: this.id, page: PAGE, limit: LIMIT },
          cancelToken: this.fetchCancelToken.token,
        })
        if (res.status === 200 && res.data.status === 'success') {
          this.commentsData = res.data.comments.data
          this.avatar = res.data.avatar
          this.fullname = res.data.name
          this.errorComment = null
          this.hasFetched = true // Mark as fetched
        } else {
          this.errorComment = res.data.message || 'خطا در دریافت نظرات'
        }
      } catch (error) {
        // Ignore if request was cancelled
        if (this.$axios.isCancel(error)) {
          return
        }
        this.errorComment =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          'خطای شبکه'
      } finally {
        this.$store.dispatch('comments/COMMENTS_SPINER_CLEAN')
        this.fetchCancelToken = null
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

<style scoped>
.comments-container {
  width: 100%;
  max-width: 1292px;
  margin: 0 auto;
}

/* Comment count header */
.comments-count-header {
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 24px;
  opacity: 1;
}

/* Comment input wrapper */
.comment-input-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
}

.reply-input-wrapper {
  margin-right: 58px;
  margin-top: 16px;
}

/* User avatar */
.user-avatar {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  opacity: 1;
  padding: 8px;
  flex-shrink: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.user-avatar-placeholder {
  background-color: #555555;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Input box wrapper */
.input-box-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1292px;
  height: 68px;
  opacity: 1;
  border-radius: 8px;
  border: 1px solid #d4d4d4;
  padding: 12px;
  background: #373737;
  gap: 12px;
}

/* Comment input */
.comment-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 16px;
  padding: 0;
}

.comment-input::placeholder {
  color: #999999;
}

/* Send button */
.comment-send-button {
  width: 125px;
  height: 44px;
  opacity: 1;
  border-radius: 8px;
  padding: 10px 24px;
  gap: 8px;
  background: #1b6be5;
  border: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease, transform 0.2s ease;
  flex-shrink: 0;
}
/* Send button */
.comment-reply-button {
  width: 150px;
  height: 44px;
  opacity: 1;
  border-radius: 8px;
  padding: 10px 24px;
  gap: 8px;
  background: #1b6be5;
  border: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease, transform 0.2s ease;
  flex-shrink: 0;
}

.comment-send-button:hover {
  background: #1557b8;
  transform: translateY(-1px);
}

.comment-send-button:active {
  transform: translateY(0);
}

.comment-send-button svg {
  margin-left: 4px;
}

/* Error message */
.error-message {
  color: #ff4444;
  font-size: 14px;
  margin-top: -16px;
  margin-bottom: 16px;
  padding-right: 58px;
}

/* Comments list */
#comments {
  margin-top: 32px;
}

.comment-item {
  margin-bottom: 24px;
}

.replies-container {
  margin-right: 58px;
  margin-top: 16px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .input-box-wrapper {
    max-width: 100%;
    height: auto;
    min-height: 68px;
    flex-direction: column;
    align-items: stretch;
    padding: 16px;
  }

  .comment-send-button {
    width: 100%;
  }

  .reply-input-wrapper {
    margin-right: 0;
    margin-left: 20px;
  }

  .replies-container {
    margin-right: 20px;
  }

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }

  .comments-count-header {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .comment-input-wrapper {
    flex-direction: column;
    align-items: stretch;
  }

  .user-avatar {
    align-self: flex-start;
  }

  .input-box-wrapper {
    width: 100%;
  }
}
</style>
