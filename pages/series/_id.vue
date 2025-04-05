<template>
  <div>
    <Item :data="data" type="series" />
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

        await context.app.$axios.get('/getV2/series/'+context.params.id)
        .then((result) => {
          res = result
        })
        .catch((e) => {
          context.redirect('/')
          return e
        })
     res.data.data.item=res.data.data.series
     res.data.data.series=null

    return {data:res.data.data}
  },

        data() {
            return {
              data:{}
            }
        }
}
</script>