<template>
  <div>
    <section id="movie">
      <div class="banner mt-5">
        <div class="banner_container">
          لطفا منتظر بمانید
        </div>
      </div>
    </section>
  </div>
</template>
<script>
    export default {

  async asyncData (context) {
  const num = context.params.id
  const limit = num.length
  if (context.app.$cookiz.get('refb')!=num && limit < 11) {
    context.app.$cookiz.set('refb', num)

    const base = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    var res =  (base + '').indexOf(num.charAt(0), 0)

    var i
    for (i = 1; i < limit; i++) {
      res = 62 * res + (base + '').indexOf(num.charAt(i), 0)
    }

    context.app.$cookiz.set('ref', res)

  }
if(context.query.uri){
        	var uri = decodeURIComponent(context.query.uri)

        	uri=uri.replace('app/show', "movie/download")
        	uri=uri.replace('app/series/show', "series/download")
        	uri=uri.replace('app/episode/show', "episode/download")

        	context.redirect('http://'+context.req.headers.host+'/'+uri)
        }else{
			context.redirect('http://'+context.req.headers.host)
        }
  },
}
</script>