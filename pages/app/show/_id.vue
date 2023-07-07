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

    context.redirect({ name: 'movie-id', params: { id: context.params.id } })
  	//context.redirect('http://'+context.req.headers.host+'/movie/'+context.params.id)
  },
}
</script>