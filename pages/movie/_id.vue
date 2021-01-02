<template>
  <div>
    <Item :data="data" type="movie" />
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
  	    res = await context.app.$axios.get('/get/movie/'+context.params.id)
  	 }else{
  	 	res = await context.app.$axios.get('/ghost/get/movie/'+context.params.id)
  	 }


     res.data.data.item=res.data.data.movie
     res.data.data.movie=null

     res.data.data.showtabs=1
     res.data.data.comments=0
     res.data.data.images=null



// res.data.data.casts = null
// res.data.data.directors = null
// res.data.data.producers = null

// res.data.data.files.backstage = 0 

// res.data.data.files.image = 1



// res.data.data.item.news= null

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
                          type: 'movie'
                      })
        	 }else{
        	 	  images = await context.app.$axios.post('/ghost/get/files', {
                          id: context.params.id,
                          content: 5,
                          hls: 1,
                          type: 'movie'
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