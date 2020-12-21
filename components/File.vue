<template>
  <div>
    <b-modal id="FilePlayer" ref="FilePlayer" :centered="staticmodal ? false : true" hide-footer hide-header size="lg" :no-close-on-backdrop="staticmodal ? true : false" :hide-backdrop="staticmodal ? true : false" :no-close-on-esc="staticmodal ? true : false" :static="staticmodal ? true : false" no-enforce-focus modal-class="files">
      <div dir="ltr" class="col-12" style="padding:0; margin: 0; height: 100%;">
        <div id="flowplayer-files-player" class="is-closeable">
          <div v-show="filesloading" class="light-gallery__spinner">
            <div class="light-gallery__dot" style="border-color: rgba(0, 0, 0, 0.8);" /> <div class="light-gallery__dot" style="border-color: rgba(0, 0, 0, 0.8);" /> <div class="light-gallery__dot" style="border-color: rgba(0, 0, 0, 0.8);" />
          </div>

          <div v-show="!filesloading" id="files-exit-button" class="exit" @click="hideModal">
            <img src="/images/exit-icon.svg" alt="exit icon">
          </div>
          <div id="my-files-player" class="fp-full fp-mute fp-edgy flowplayer" />
          <b-dropdown v-show="!filesloading" id="dropdown-left" :text="$t('show.download')" variant="danger" class="mt-1 float-right">
            <b-dropdown-item v-for="(item, index) in download_files" :key="index" target="_blank" class="dropdown-item" :href="item">
              {{ index }}p
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {

        props: {
          show: Boolean,
          staticmodal: Boolean,
    content: {
        type: Number,
        default: 0
    },
    id: {
        type: String,
        default: null
    },
    backdrop: {
        type: String,
        default: null
    },
    backdropteaser: {
        type: String,
        default: null
    },
    name: {
        type: String,
        default: null
    },
    namefa: {
        type: String,
        default: null
    },
    type: {
        type: String,
        default: null
    }
        },


        computed: {
            ...mapGetters({filesloading: "player/filesloading"}),
            ...mapGetters({download_files: "player/download_files"})
        },
        watch: {
          show(val) {
            if (val !== null && this.show) {
              this.showModal()
            }else{
              this.hideModal()
            }
          },
        },

        mounted() {

          if (this.staticmodal) {
            this.showModal()
            $('.modal-content').removeAttr("tabindex")
          }

          this.$refs['FilePlayer'].$on('hide', () => {
            $('.default').removeClass('blure')
            this.$emit("hide-modal", null)
          })


          $('body').addClass('loaded')

        },


        
    methods: {

        ChooseLang(en,fa){
            if(fa && this.$i18n.locale=="fa")
                return fa
            else
                return en
        },
      showModal() {
        this.$refs['FilePlayer'].show()
        if(!this.staticmodal)
        $('.default').addClass('blure')


        this.$store.dispatch("player/LOAD_FILE_PLAYER", {loggedIn: this.$auth.loggedIn,id:this.id,type:this.type,content:this.content,backdrop:'https://thumb.contentpanel.click/thumb?w=1920&h=938&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+this.Chooseback(this.backdropteaser,this.backdrop),block_id:'my-files-player',name:this.ChooseLang(this.name,this.namefa)})

      },
            Chooseback(teaser,backdrop){
                if(teaser)
                    return teaser
                else
                    return backdrop
            },
      hideModal() {
        this.$refs['FilePlayer'].hide()
        this.$emit("hide-modal", null)
        $('.default').removeClass('blure')
      },

    },


}
</script>