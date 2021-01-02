<template>
  <div>
    <div v-show="showcomment" class="input-group search-field my-4 insert_comment">
      <!--autofocus-->
      <input v-model="message" class="form-control border-left-0 border shadow-none" type="search"
             :placeholder="'نظر شمادر مورد این '+ChooseLang(type,ChooseFaType())+' چیست؟'"
      >
      <button class="btn rounded-pill btn-sm btn-secondary btn-send-comment" @click="saveComment">
        {{ $t('comment.send_comment') }}
      </button>
    </div>
    <div v-if="errorComment && showcomment" class="py-2" style="color:red;margin-top:-1rem">
      {{ errorComment }}
    </div>
    <div v-if="comments && showcomment" id="comments">
      <div v-for="(comment,index) in commentsData" :key="index" class="d-flex comment mb-3">
        <div class="avatar">
          <img class="rounded-circle" :src="comment.photo_url" alt="">
        </div>

        <!--           <div class="row">
            <div class="col-6"> -->
        <div class="d-flex flex-column align-items-start ml-2 ml-lg-4 border-bottom">
          <b class="mb-2 comment-title">{{ comment.name }}</b>
          <!--             </div>
            <div class="col-6"> -->
          <!--               <div v-if="comment.approve" class="text-right">
                <span class="comment-date"><a href="" @click.prevent="openComment(index)"> {{ $t('comment.reply') }}</a></span> -->

          <!--                 <div>
                  <div class="row">
                    <span class="col-3 small p-0 mt-1 text-right d-none d-md-inline"><span v-if="comment.vote_num!=0">({{ comment.vote_num }} {{ $t('comment.person') }})</span></span>

                    <a class="col-3 text-right p-0 text-success" @click="voteComment(comment.commentid,'directcomment',index,0,'up')"><i class="fa faa-tada animated" :class="{ 'fa-thumbs-up': comment.votedByUser && comment.vote==1,'fa-thumbs-o-up': !comment.votedByUser || comment.vote!=1 }" /></a>
                    <span class="col-3 text-center p-0" :class="{ 'text-danger': comment.votes<0,'text-success': comment.votes>0 }"><span>{{ comment.votes }}</span></span>

                    <a class="col-3 text-left text-danger p-0" @click="voteComment(comment.commentid,'directcomment',index,0,'down')"><i class="fa faa-tada animated" :class="{ 'fa-thumbs-down': comment.votedByUser && comment.vote!=1,'fa-thumbs-o-down': !comment.votedByUser || comment.vote==1 }" /></a>
                  </div> 
                </div> -->
          <!--               </div>
              <div v-else>
                در انتظار تایید مدیریت
              </div> -->
          <!--             </div>
          </div> -->
          <p class="comment-text" :class="{ 'font-italic': !comment.approve}">
            {{ comment.comment }}
          </p>
        </div>



        <!--         <div class="row">
          <div class="col-1">
          </div>
          <div class="col-11">
            <div v-if="commentBoxs[index]" class="input-group search-field my-4 insert_comment insert_comment2">
              <input v-model="message" class="form-control border-left-0 border shadow-none" type="search"
                     placeholder="نظر شمادر مورد این نظر چیست؟"
              >
              <button class="btn rounded-pill btn-sm btn-secondary btn-send-comment" @click="replyComment(comment.commentid,index)">
                {{ $t('comment.send_comment') }}
              </button>
            </div>
            <div v-if="errorReply" class="py-2" style="color:red;margin-top:-1rem">
              {{ errorReply }}
            </div>
          </div>
        </div> -->


        <div v-if="comment.replies">
          <div v-for="(replies,index2) in comment.replies" :key="index2" class="d-flex comment mb-3">
            <div class="avatar">
              <img class="rounded-circle" :src="replies.photo_url" alt="">
            </div>
            <div class="d-flex flex-column align-items-start ml-2 ml-lg-4 border-bottom">
              <b class="mb-2 comment-title">{{ replies.name }}</b>
              <p class="comment-text" :class="{ 'font-italic': !replies.approve}">
                {{ replies.comment }}
              </p>
            </div>
            <!--             <div v-if="replies.approve" class="">
              <span class="comment-date"><a href="" @click.prevent="replyCommentBox(index2)"> {{ $t('comment.reply') }}</a></span> -->

            <!--               <div>
                <div class="row">
                  <span class="col-3 small p-0 mt-1 text-right d-none d-md-inline"><span v-if="replies.vote_num!=0">({{ replies.vote_num }} {{ $t('comment.person') }})</span></span>

                  <a class="col-3 text-right p-0 text-success" @click="voteComment(replies.commentid,'replycomment',index,index2,'up')"><i class="fa faa-tada animated" :class="{ 'fa-thumbs-up': replies.votedByUser && replies.vote==1,'fa-thumbs-o-up': !replies.votedByUser || replies.vote!=1 }" /></a>
                  <span class="col-3 text-center p-0" :class="{ 'text-danger': replies.votes<0,'text-success': replies.votes>0 }"><span>{{ replies.votes }}</span></span>

                  <a class="col-3 text-left text-danger p-0" @click="voteComment(replies.commentid,'replycomment',index,index2,'down')"><i class="fa faa-tada animated" :class="{ 'fa-thumbs-down': replies.votedByUser && replies.vote!=1,'fa-thumbs-o-down': !replies.votedByUser || replies.vote==1 }" /></a>
                </div> 
              </div> -->
            <!--             </div>

            <div v-else>
              در انتظار تایید مدیریت
            </div> -->

            <!--             <div>
              <div v-if="replyCommentBoxs[index2]" class="input-group search-field my-4 insert_comment">
                <input v-model="message" class="form-control border-left-0 border shadow-none" type="search"
                       placeholder="نظر شمادر مورد این نظر چیست؟"
                >
                <button class="btn rounded-pill btn-sm btn-secondary btn-send-comment" @click="replyComment(comment.commentid,index)">
                  {{ $t('comment.send_comment') }}
                </button>
              </div>
              <div v-if="errorReply" class="py-2" style="color:red;margin-top:-1rem">
                {{ errorReply }}
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {



  props: {
    showcomment: Boolean,
    postid: {
        type: Number,
        default: 0
    },
    type: {
        type: String,
        default: null
    },
    name: {
        type: String,
        default: null
    },
    namefa: {
        type: String,
        default: null
    },
    precomments: {
        type: Number,
        default: 0
    },
    precommentsdata: {
        type: Array,
        default: null
    },
    preavatar: {
        type: String,
        default: null
    },
    preemail: {
        type: String,
        default: null
    },
    prefullname: {
        type: String,
        default: null
    }
  },

      data() {
      return {
          show_module: null,
          avatar: null,
          email: null,
          fullname: null,
 
           commentreplies: [],
 
           comments: 0,
 
           commentBoxs: [],
 
           message: null,
 
           replyCommentBoxs: [],
 
           commentsData: [],
 
           viewcomment: [],
 
           show: [],
 
           errorComment: null,
 
           errorReply: null,
 
           loading: false
      }
    },

      computed: {
          ...mapGetters({commentsloading: "comments/commentsloading"})
      },

    watch: {
      showcomment() {
        if (this.postid) {
          this.replyCommentBoxs=[]
          this.commentBoxs=[]
          this.show_module = true
          if(this.precomments==0)
            this.fetchComments()
          else{
               this.commentsData = this.precommentsdata
               this.avatar=this.preavatar
               this.email=this.preemail
               this.fullname=this.prefullname

               this.comments = 1
          }

        } else {
          this.show_module = false
        }
          }
      },



        
    methods: {

        ChooseLang(en,fa){
            if(fa && this.$i18n.locale=="fa")
                return fa
            else
                return en
        },
        ChooseFaType(){
            if(this.type=="movie")
                return 'فیلم'
            else if(this.type=="episode")
                return 'قسمت'
            else
                return 'سریال'
        },
       fetchComments() {
        this.$store.dispatch('comments/COMMENTS_SPINER_LOAD')

        var api_url=''

        if(this.$auth.loggedIn)
          api_url='/get/comments/'
        else
          api_url='/ghost/get/comments/'

          this.$axios.get(api_url+ this.postid).then((res) => {
            this.$store.dispatch('comments/COMMENTS_SPINER_CLEAN')
            if(res.status === 200){
               this.commentsData = res.data.data.comments
               this.avatar=res.data.data.avatar
               this.email=res.data.data.email
               this.fullname=res.data.data.name

               this.comments = 1
            }else{
              this.errorComment=res.data.message
            }
          }, (error) => {
            this.$store.dispatch('comments/COMMENTS_SPINER_CLEAN')
            this.errorComment=error.response.data.message
          })

       },
 
       showComments(index) {
 
           if (!this.viewcomment[index]) {
 
               this.$set(this.show, index, "hide")
 
               this.$set(this.viewcomment, index, 1)
 
           } else {
 
               this.$set(this.show, index, "view")
 
               this.$set(this.viewcomment, index, 0)
 
           }
 
       },
 
       openComment(index) {
 
 
           if (this.commentBoxs[index]) {

               this.$set(this.commentBoxs, index, 0)

           } else {

               this.$set(this.commentBoxs, index, 1)

           }
 
       },
 
       replyCommentBox(index) {
 
 
           if (this.replyCommentBoxs[index]) {

               this.$set(this.replyCommentBoxs, index, 0)

           } else {

               this.$set(this.replyCommentBoxs, index, 1)

           }
 
           
 
       },
 
       saveComment() {
 
        if (this.message != null && this.message != ' ') {
          this.errorComment = null
          this.loading=true


        if(!this.$auth.loggedIn)
          this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
        else{
          




          this.$axios.post('/comments', {
             post_id: this.postid,

             text: this.message,

             parent: 0,
             autor: this.fullname,
             email: this.email
          }).then((res) => {
            this.loading=false
            if(res.status === 200){
               if (res.data.status) {

                  this.commentsData.unshift({ "commentid": res.data.commentId, "name": res.data.autor, "comment": this.message, "votes": 0, "reply": 0, "photo_url": res.data.avatar, "vote_num": 0, "approve": 0, "replies": [] })

                   this.message = null

               }
            }else{
              this.errorComment=res.data.message
            }
          }, (error) => {
            this.loading=false
            this.errorComment=error.response.data.message
          })
}
        } else {
          this.errorComment = "لطفا نظر خود را وارد نمایید"
        }

       },
 
       replyComment(commentId, index) {
 
           if (this.message != null && this.message != ' ') {
 
               this.errorReply = null
 
            this.loading=true

        if(!this.$auth.loggedIn)
          this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
        else{
          

            this.$axios.post('/comments', {
               post_id: this.postid,

               text: this.message,

               parent: commentId,
               autor: this.fullname,
               email: this.email
            }).then((res) => {
              this.loading=false
              if(res.status === 200){
                 if (res.data.status) {

                     if (!this.commentsData[index].reply) {

                         this.commentsData[index].replies.unshift({ "commentid": res.data.commentId, "name": res.data.autor, "comment": this.message, "votes": 0,"photo_url": res.data.avatar,"vote_num": 0,"approve": 0 })

                         this.commentsData[index].reply = 1

                         this.$set(this.replyCommentBoxs, index, 0)

                         this.$set(this.commentBoxs, index, 0)

                     } else {

                         this.commentsData[index].replies.unshift({ "commentid": res.data.commentId, "name": res.data.autor, "comment": this.message, "votes": 0,"photo_url": res.data.avatar,"vote_num": 0,"approve": 0 })

                         this.$set(this.replyCommentBoxs, index, 0)

                         this.$set(this.commentBoxs, index, 0)

                     }

                     this.message = null

                 }
              }else{
                this.errorReply=res.data.message
              }
            }, (error) => {
              this.loading=false
              this.errorReply=error.response.data.message
            })

}
 
           } else {
 
               this.errorReply = "لطفا نظر خود را وارد نمایید"
 
           }
        }
 
       },
 
       voteComment(commentId, commentType, index, index2, voteType) {
 
            this.loading=true
 

        if(!this.$auth.loggedIn)
          this.$store.dispatch('login/SHOW_MODAL',{premessage: 'نیاز به ورود',premobile: null,preredirect: null,prerefresh: false})
        else{

            this.$axios.post('/comments/' + commentId + '/vote', {
               vote: voteType
            }).then((res) => {
              this.loading=false
              if(res.status === 200){
                 if (res.data) {

                     if (commentType == 'directcomment') {

                         this.commentsData[index].vote=res.data.data.vote
                         this.commentsData[index].vote_num=res.data.data.vote_num
                         this.commentsData[index].votes=res.data.data.votes
                         this.commentsData[index].votedByUser=1

                     } else if (commentType == 'replycomment') {
                         this.commentsData[index].replies[index2].vote=res.data.data.vote
                         this.commentsData[index].replies[index2].vote_num=res.data.data.vote_num
                         this.commentsData[index].replies[index2].votes=res.data.data.votes
                         this.commentsData[index].replies[index2].votedByUser=1
                     }

                 }
              }
            }, (error) => {
              this.loading=false

              if (commentType == 'replycomment') {
                this.errorReply=error.response.data.message
              }else{
                this.errorComment=error.response.data.message
              }

            })
          }
 
       },
 

    }



</script>