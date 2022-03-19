<template>
  <div>
    <Item :data="data" type="episode" />
  </div>
</template>
<script>
import Item from "@/components/Item"
    export default {
  components: {
    Item
  },

  async asyncData (context) {
    let res
    if (context.app.$auth.loggedIn) {
        await context.app.$axios.get('/get/episode/'+context.params.id)
        .then((result) => {
          res = result
        })
        .catch((e) => {
          context.redirect('/')
          return e
        })
     }else{
        await context.app.$axios.get('/ghost/get/episode/'+context.params.id)
        .then((result) => {
          res = result
        })
        .catch((e) => {
          context.redirect('/')
          return e
        })
     }


     res.data.data.item=res.data.data.episode
     res.data.data.episode=null

     res.data.data.showtabs=1
     res.data.data.comments=0
     res.data.data.images=null




  	 if(res.data.data.casts == null && res.data.data.directors == null && res.data.data.producers == null){
  	 	if(res.data.data.item.news!== null){

         let comments
      	 if (context.app.$auth.loggedIn) {
      	   comments = await context.app.$axios.get('/get/comments/'+res.data.data.item.news)
      	 }else{
      	   comments = await context.app.$axios.get('/ghost/get/comments/'+res.data.data.item.news)
      	 }

         res.data.data.commentsData = comments.data.data.comments
         res.data.data.avatar=comments.data.data.avatar
         res.data.data.email=comments.data.data.email
         res.data.data.fullname=comments.data.data.name
         res.data.data.comments=1
  	 	}else{
  	 		if(res.data.data.files.backstage !== 1 && res.data.data.files.image === 1){
          let images





        	if (context.app.$auth.loggedIn) {
        	    images = await context.app.$axios.post('/get/files', {
                          id: context.params.id,
                          content: 5,
                          hls: 1,
                          type: 'episode'
                      })
        	 }else{
        	 	  images = await context.app.$axios.post('/ghost/get/files', {
                          id: context.params.id,
                          content: 5,
                          hls: 1,
                          type: 'episode'
                      })
        	 }

            let images2=[]
            var i
            for (i = 0; i < images.data.data.images.length; ++i) {
              images2[i]=images.data.data.images[i].src
            }


            res.data.data.images=images2
  	 		}else if(res.data.data.files.musicvideo !== 1){
            res.data.data.showtabs=0
  	 		}
  	 	}
  	 }

     if(res.data.data.comments==0){
         res.data.data.commentsData = null
         res.data.data.avatar=null
         res.data.data.email=null
         res.data.data.fullname=null
     }

    return {data:res.data.data}
  },

        data() {
            return {
              data:{}
            }
        }
}
</script>