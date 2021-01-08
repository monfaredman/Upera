<template>
  <div>
          <b-modal id="creditModal" ref="creditModal" centered hide-footer size="lg" modal-class="modal-download-link credit" title="افزایش موجودی">
            <div class="download-links">

<div class="download-links-body  download-links-body-header">
              <div class="download-links-items">


<div class="tenor tenor-m">
        <button class="btn btn-light text-secondary show-mobile text-center btn-block mb-3">پرداخت&zwnj;های قبلی</button>
        <div class="mt-sm-5 d-flex align-items-center justify-content-between border-bottom-md-gray pb-md-5">
            <div class="d-flex align-items-center justify-content-between w-sm-100">
                <div class="subtitle">موجودی فعلی:</div>
                <div class="font-weight-bold">۲۷۰۰۰ تومان</div>
            </div>
            <button class="btn btn-light text-secondary hide-mobile">پرداخت&zwnj;های قبلی</button>
        </div>
        <div class="mt-5 form-group d-md-flex align-items-center justify-content-between mb-md-5 form-inline">
            <label>مبلغ مورد نظر خود را وارد کنید</label>
            <input type="text" value="۲۳۰۰۰" class="form-control form-control-lg form-control-bk text-center mb-md-0" autofocus>
        </div>
        <div class="mb-3 mb-md-6 d-flex overflow-x-auto overflow-buttons">
            <button class="btn btn-light font-weight-bold text-nowrap">۱۰.۰۰۰ تومان</button>
            <button class="btn btn-light font-weight-bold text-nowrap">۲۰.۰۰۰ تومان</button>
            <button class="btn btn-light font-weight-bold text-nowrap">۳۰.۰۰۰ تومان</button>
        </div>
    </div>

</div>


            <div class="download-links-footer footer-1">
              <div class="download-links-item">
                <div class="row">
                  <div class="col-12">
                    <a href="" class="btn btn-danger btn-block">
                      پرداخت
                      <i class="fa fa-money-bill pr-2" />
                    </a>
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
    show: Boolean
  },

    data() {
      return {
        castShow: null,
        payment_method: "saman"
      }
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




        this.$refs['creditModal'].$on('hide', () => {
          window.removeEventListener('resize', this.Resize)
          $('.default').removeClass('blure')
          this.$emit("hide-modal", null)
        })

          $('body').addClass('loaded')



        },


        
    methods: {

      showModal() {
        this.$refs['creditModal'].show()
        $('.default').addClass('blure')

this.$refs['creditModal'].$on('shown', () => {
    window.addEventListener("resize", this.Resize)
    this.Resize('e')

})

      },
  Resize(e) {
    let vh = window.innerHeight * 0.01
    let element=document.getElementsByClassName('download-links')

    if(element.length)
      element[0].style.setProperty('--vh', `${vh}px`)
    
    return e
  },
      hideModal() {
        this.$refs['creditModal'].hide()
        this.$emit("hide-modal", null)
        $('.default').removeClass('blure')
      },
    },


}
</script>