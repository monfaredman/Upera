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
        await context.app.$axios.get('/getV2/episode/'+context.params.id)
        .then((result) => {
          res = result
        })
        .catch((e) => {
          context.redirect('/')
          return e
        })
     


     res.data.data.item=res.data.data.episode
     res.data.data.episode=null


    return {data:res.data.data}
  },

        data() {
            return {
              data:{}
            }
        }
}
</script>