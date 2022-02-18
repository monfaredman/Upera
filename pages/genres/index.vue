<template>
  <div id="genre" class="mt-lg-5 pt-lg-5 mt-md-1 pt-md-1 pt-sm-3 pt-2 ml-lg-4 mr-lg-4">
    <div class="container-fluid">
      <div v-for="(item,index) in data" :key="index" class="row align-items-center mt-3 mt-md-5 ml-2 ml-md-4">
        <div class="col-4 px-1">
          <nuxt-link :to="{ name: 'genres-genre', params: { genre: item.en.toLowerCase() }}">
            <div class="mr-md-5">
              <h3 class="title">
                {{ item.fa }}
              </h3>
              <h6 class="subtitle mb-0">
                {{ item.en }}
              </h6>
            </div>
          </nuxt-link>
        </div>
        <div class="col-8 p-lg-4 p-md-2 p-sm-0">
          <nuxt-link :to="{ name: 'genres-genre', params: { genre: item.en.toLowerCase() }}">
            <b-img v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',width: 988,height: 395,show:true}" :src="'https://thumb.upera.tv/thumb?w=988&h=395&q=100&src='+item.cover" :alt="item.fa" />
            <!-- <img loading="lazy" data-back="/images/988x395.png" :src="'https://thumb.upera.tv/thumb?w=988&h=395&q=100&src='+item.cover" :alt="item.fa"> -->
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData (context) {
    let res
        res = await context.app.$axios.get('/new_genres')

        return {data:res.data.genres}
    
  },
  data() {
    return {
      data:{},
      id: "",
    }
  },
  head() {

    return { title:  this.$t('new.genres') }
  }
}
</script>
