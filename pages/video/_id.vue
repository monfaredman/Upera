<template>
  <div>
    <!-- REPORT -->

    <div class="col-12 row" style="padding:0; margin: 0; height: 100%;">
      <div dir="ltr" class="col-12">
        <div id="flowplayer-player" class="is-closeable">
          <div id="my-player" class="fp-full fp-mute fp-edgy flowplayer" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>


	import {mapGetters} from 'vuex'

    export default {


        beforeRouteLeave(to, from, next) {
           	var playersm=window.jwplayer('my-player')
            if(document.getElementById("my-player") && playersm){
                playersm.remove()
            }
            next()
            document.body.classList.remove('playerback')
        },
		layout: "empty",
        data() {
            return {
                movie_title: '',
                active: '',
                show_suggestion: false,
                show_report_modal: false,
                report_problem_type: null,
                report_details: null,
                show_report_body: true,
                report_button: false,
                guest: true,
            }
        },
  head() {

    return { title: 'تماشای آنلاین' }
  },

        computed: {
            ...mapGetters({url: "player/url"}),
        },

        mounted() {
        	document.body.classList.remove('loaded')

        	if (this.$auth.loggedIn) {
            	this.guest=false
        	}

            this.$store.dispatch('player/LOAD_VIDEO', {guest:this.guest,id: this.$route.params.id,refi:this.$route.query.ref})
        },
        methods: {
        },
    }
</script>