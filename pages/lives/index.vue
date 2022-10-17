<template>
  <div id="checkcontainer">
    <div class="container-fluid mt-lg-5 mt-md-5 pt-lg-5 pt-md-5">
      <div class="row genre-link align-items-center mt-lg-3 mt-md-3 pt-lg-3 pt-md-3">
        <div v-for="(item,index) in data.lives" :key="index" class="col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-1">
          <nuxt-link :to="{ name: 'lives-live', params: { live: item.id }}">
            <b-img v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb',show:true}" :src="item.image" :alt="item.name_fa" class="rounded" />
            
            <div class="mt-2">
              <h6 class="mt-2 font-weight-normal">
                <div class="pt-2 float-left">
                  {{ item.name_fa }} - {{ item.name }}
                </div><b-button variant="primary" class="py-1 px-lg-4 float-right">
                  {{ $t('new.show') }}
                </b-button>
              </h6>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row align-items-center mt-2">
          <div class="col-lg-6 col-md-6" />
          <div class="col-lg-6 col-md-6">
            <b-img v-bind="{fluidGrow: true,blank: true,blankColor: '#bbb', width: '20%',show:true}" :src="data.program" class="rounded" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData (context) {
    let res
        res = await context.app.$axios.get('/lives')

        return {data:res.data.data}
    
  },
  data() {
    return {
      data:{},
      id: "",
    }
  },
  head() {

    return { title:  this.$t('new.lives') }
  }
}
</script>
