<template>
  <div class="text-center socialsharing">



  <ShareNetwork
      network="sms"
      :url="url"
      :title="mtitle"
      :description="description" class="btn btn-light py-2 my-2 mx-1"
    >
    <i class="fas fah fa-lg fa-sms px-2"></i>
    <span>پیامک</span>
  </ShareNetwork>

  <ShareNetwork
      network="whatsapp"
      :url="url"
      :title="mtitle"
      :description="description" class="btn btn-light py-2 my-2 mx-1"
    >
    <i class="fab fah fa-lg fa-whatsapp px-2"></i>
    <span>واتس اپ</span>
  </ShareNetwork>

  <ShareNetwork
      network="telegram"
      :url="url"
      :title="mtitle"
      :description="description" class="btn btn-light py-2 my-2 mx-1"
    >
    <i class="fab fah fa-lg fa-telegram px-2"></i>
    <span>تلگرام</span>
  </ShareNetwork>

  <ShareNetwork
      network="linkedin"
      :url="url"
      :title="mtitle" class="btn btn-light py-2 my-2 mx-1"
    >
    <i class="fab fah fa-lg fa-linkedin px-2"></i>
    <span>لینکدین</span>
  </ShareNetwork>


  <ShareNetwork
      network="skype"
      :url="url"
      :title="mtitle"
      :description="description" class="btn btn-light py-2 my-2 mx-1"
    >
    <i class="fab fah fa-lg fa-skype px-2"></i>
    <span>اسکایپ</span>
  </ShareNetwork>

  <ShareNetwork
      network="facebook"
      :url="url"
      :title="mtitle"
      :description="description" class="btn btn-light py-2 my-2 mx-1"
    >
    <i class="fab fah fa-lg fa-facebook px-2"></i>
    <span>فیسبوک</span>
  </ShareNetwork>

  <ShareNetwork
      network="twitter"
      :url="url"
      :title="mtitle" class="btn btn-light py-2 my-2 mx-1"
    >
    <i class="fab fah fa-lg fa-twitter px-2"></i>
    <span>توویتر</span>
  </ShareNetwork>


  <ShareNetwork
      network="pinterest"
      :url="url"
      :title="mtitle" class="btn btn-light py-2 my-2 mx-1"
    >
    <i class="fab fah fa-lg fa-pinterest px-2"></i>
    <span>پینترست</span>
  </ShareNetwork>

  <ShareNetwork
      network="email"
      :url="url"
      :title="mtitle"
      :description="description" class="btn btn-light py-2 my-2 mx-1"
    >
    <i class="fa fah fa-lg fa-envelope px-2"></i>
    <span>ایمیل</span>
  </ShareNetwork>

  </div>
</template>

<script>

export default {
  props: {
    mtitle: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
  },
  data() {
    return {
                url: '',
    }
  },
   mounted() {
        this.url=location.href
   }
}
</script>
