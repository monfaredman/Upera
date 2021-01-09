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

  	context.redirect('https://web.upera.tv/USSDlink/'+context.params.fileid+'/'+context.params.userid+'/'+context.params.package)
  },
}
</script>