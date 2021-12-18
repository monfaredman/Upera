<template>
  <div>
    <b-modal id="downloadLinks" ref="downloadLinks" :centered="false" hide-footer hide-header size="lg" :no-close-on-backdrop="true" :hide-backdrop="true" :no-close-on-esc="true" modal-class="modal-download-link" :static="true" no-enforce-focus>
      <div class="download-links">
        <div>
          <div class="download-links-info d-flex justify-content-center">
            <div class="download-links-title text-center ">
              <div class="traffic-hint mt-4 mb-3">
                حجم مصرف اینترنت شما تمام بها محاسبه می شود
              </div>

              <span class="text-white mx-2">
                {{ filename }}
              </span>
            </div>
          </div>
        </div>
        <div>
          <div class="download-links-body download-links-body2 download-links-0">
            <div id="download-links-items" class="download-links-items px-2">
              <div>
                <div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="d-flex h-100 align-items-end">
                        <div class="download-link">
                          <button class="btn btn-secondary btn-block" @click="LINK_DOWNLOAD()">
                            {{ $t('show.download') }}
                            <i class="icon-download" />
                          </button>
                        </div>
                        <div class="copy-link">
                          <button class="btn btn-copy btn-block" @click="COPY_DOWNLOAD()">
                            کپی لینک
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--                     <div class="row">
                      <div class="col-sm-12 mt-4">
                        <div class="h-100">
                          <div>
                            <button class="btn btn-outline-danger btn-block">
                              گزارش تخلف
                            </button>
                          </div>
                        </div>
                      </div>
                    </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
  export default {


  props: {
    show: Boolean,
  },

      data() {
      return {
        filename: '',
        md5: '',
        expires: ''
      }
    },


        mounted() {




      


                this.showModal()

                document.getElementsByClassName('modal-content')[0].removeAttribute('tabindex')





        if(document.getElementsByClassName('download-options-label').length)
        document.getElementsByClassName('download-options-label')[0].classList.remove('btn')


          document.body.classList.add('loaded')

        // if(this.$route.query.sub && this.$route.query.f){
        //   if(this.$route.query.s)
        //     window.location.href = 'https://'+this.$route.query.sub+'.igap.net'+this.$route.query.f+'&s='+this.$route.query.s
        //   else
        //     window.location.href = 'https://'+this.$route.query.sub+'.igap.net'+this.$route.query.f
        // }

        if(this.$route.query.f){
          this.filename=this.$route.query.f.split(/(\\|\/)/g).pop()
        }

        this.$axios.get('/ghost/getmd5').then((res) => {
          if(res.status === 200){
            this.md5 = res.data.md5
            this.expires = res.data.expires
          }
        })




        },


        
    methods: {
  Resize(e) {
    let vh = window.innerHeight * 0.01
    let element=document.getElementsByClassName('download-links')

    if(element.length)
      element[0].style.setProperty('--vh', `${vh}px`)
    
    return e
  },
  
    
      showModal() {
        this.$refs['downloadLinks'].show()



this.$refs['downloadLinks'].$on('shown', () => {
    window.addEventListener("resize", this.Resize)
    this.Resize('e')

})

          
      },
      hideModal() {
        this.$refs['downloadLinks'].hide()
        this.$emit("hide-modal", null)
        this.$store.dispatch("download/RESET_DOWNLOAD")
        document.getElementsByClassName('default')[0].classList.remove('blure')
      },

      LINK_DOWNLOAD() {

        if(!this.md5 || !this.expires)
          this.$axios.get('/ghost/getmd5').then((res) => {
            if(res.status === 200){
              this.md5 = res.data.md5
              this.expires = res.data.expires
            }
        })


        if(this.$route.query.sub && this.$route.query.f && this.$route.query.dl){
          if(this.$route.query.s)
            window.location.href = 'https://'+this.$route.query.sub+'.igap.net'+this.$route.query.f+'?s='+this.$route.query.s+'&dl='+this.$route.query.dl+'&mdr='+this.md5+'&expiresr='+this.expires
          else
            window.location.href = 'https://'+this.$route.query.sub+'.igap.net'+this.$route.query.f+'?dl='+this.$route.query.dl+'&mdr='+this.md5+'&expiresr='+this.expires
        }
      },
      COPY_DOWNLOAD() {
        if(!this.md5 || !this.expires)
          this.$axios.get('/ghost/getmd5').then((res) => {
            if(res.status === 200){
              this.md5 = res.data.md5
              this.expires = res.data.expires
            }
        })

        if(this.$route.query.sub && this.$route.query.f && this.$route.query.dl){
          var url
          if(this.$route.query.s)
            url = 'https://'+this.$route.query.sub+'.igap.net'+this.$route.query.f+'?s='+this.$route.query.s+'&dl='+this.$route.query.dl+'&mdr='+this.md5+'&expiresr='+this.expires
          else
            url = 'https://'+this.$route.query.sub+'.igap.net'+this.$route.query.f+'?dl='+this.$route.query.dl+'&mdr='+this.md5+'&expiresr='+this.expires

          this.copy(url)
        }

      },
 
    async copy(text) {
      try {
        await this.$copyText(text)
        this.$swal("لینک کپی شد", {
          icon: "success",
        })
      } catch (e) {
          this.$swal("لینک در دیوایس شما قابل کپی نیست.")
          return e
      }
    },

    },


}
</script>