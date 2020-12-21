<template>
  <div>
    <div v-if="show_report" class="report-modal">
      <div id="modal" class="col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3">
        <div class="header">
          <span id="close" @click="CLOSE_REPORT()">
            <svg version="1.1" class="sm-exit-svg" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve"
            >
              <circle style="fill:#E21B1B;" cx="255.999" cy="255.999" r="255.999" />
              <g>
                <rect x="244.002" y="120.008" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0397 256.0022)" style="fill:#FFFFFF;" width="24" height="271.988" />
                <rect x="120.008" y="244.007" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0428 256.0035)" style="fill:#FFFFFF;" width="271.988" height="24" />
              </g>
            </svg>                    </span>
        </div>
        <div class="body">
          <h1>
            {{ $t('report.what_happening') }}
            <b v-if="this.$i18n.locale=='fa'" style="color:dodgerblue">؟</b>
            <b v-else style="color:dodgerblue">?</b>
          </h1>
          <div class="form-check">
            <label class="form-check-label">
              <input v-model="report_problem_type" class="custom-control-input2 form-check" name="radio_group_1" type="radio" value="1">
              <span class="custom-control-indicator" />
              <h4>{{ $t('report.labeling_problem') }}</h4>
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input v-model="report_problem_type" class="custom-control-input2 form-check" name="radio_group_1" type="radio" value="2">
              <span class="custom-control-indicator" />
              <h4>{{ $t('report.video_problem') }}</h4>
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input v-model="report_problem_type" class="custom-control-input2 form-check" name="radio_group_1" type="radio" value="3">
              <span class="custom-control-indicator" />
              <h4>{{ $t('report.sound_problem') }}</h4>
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input v-model="report_problem_type" class="custom-control-input2 form-check" name="radio_group_1" type="radio" value="4">
              <span class="custom-control-indicator" />
              <h4>{{ $t('report.caption_problem') }}</h4>
            </label>
          </div>


          <div class="textarea-details">
            <h3>{{ $t('report.more_details') }}</h3>
            <textarea v-model="report_details" :placeholder="$t('report.more_details')" cols="40" rows="6" />
          </div>
          <div class="my-2">
            <button v-if="! report_button" class="btn btn-warning" @click="SEND_REPORT">
              {{ $t('report.send') }}
            </button>
            <button v-if="report_button" class="btn btn-warning">
              <i id="btn-progress" /> Loading
            </button>
          </div>
        </div>
      </div>
    </div>

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
        name: 'MoviePlayer',


        beforeRouteLeave(to, from, next) {
            //this.$store.commit('FLOWPLAYER_DESTORY', 'movie')
            next()
            $( "body" ).removeClass('playerback')
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

        computed: {
            ...mapGetters({url: "player/url"}),
            ...mapGetters({suggestion: "player/suggestion"}),
            ...mapGetters({show_report: "player/show_report"}),
            ...mapGetters({next: "player/next"})
        },
        watch: {
            next(val) {
                if (val === 'movie') {
                    //this.$store.commit('FLOWPLAYER_DESTORY', 'movie')
                    this.$router.push({name: 'movie-show-id', params: {id: this.suggestion.id}})
                }
            }
        },

        mounted() {
        	$('body').removeClass('loaded')
            if (this.$auth.loggedIn) {
                this.guest=false
                this.$store.dispatch('player/LOAD_MOVIE_PLAYER', {id: this.$route.params.id, lg_backdrop: this.lg_backdrop, md_backdrop: this.md_backdrop,SRMdata: {}})
            }else{
                this.$store.dispatch('player/LOAD_GHOST_MOVIE_PLAYER', {id: this.$route.params.id, lg_backdrop: this.lg_backdrop, md_backdrop: this.md_backdrop,SRMdata: {},ekran_unique_id:this.$route.query.ekran_unique_id})
            }
        },
        methods: {
            SEND_REPORT() {

                        this.report_button = true
                        this.$axios.post('/create/report/movie', {
                            type: this.report_problem_type,
                            details: this.report_details,
                            id: this.$route.params.id
                        }).then((res) => {
                            if (res.data.status === 'success') {
                                this.report_button = false
                                this.CLOSE_REPORT()
                                this.$alertify.logPosition("top right")
                                this.$alertify.success('Successful Send, our team will check it soon')
                            }
                        }, (error) => {
                           this.report_button = false
                           return error
                        })

            },

            // When Colse video re-play video 
            CLOSE_REPORT() {
                this.$store.commit('player/CLOSE_REPORT')
            }
        },
    }
</script>