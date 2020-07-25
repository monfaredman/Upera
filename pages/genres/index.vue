<template>
  <div id="genre" class="mt-lg-5 pt-lg-5 mt-md-1 pt-md-1 pt-sm-3 pt-2 ml-lg-4 mr-lg-4">
    <div class="container-fluid">
      <div class="row align-items-center mt-3 mt-md-5 ml-2 ml-md-4">
        <div class="col-4 px-1">
          <div class="mr-md-5">
            <h3 class="title">
              فیلم ایرانی
            </h3>
            <h6 class="subtitle mb-0">
              Iranian
            </h6>
          </div>
        </div>
        <div class="col-8 p-lg-4 p-md-2 p-sm-0">
          <a href="#">
            <img src="@/assets/img/genre/NoPath - Copy (6)@3x.png" alt="">
          </a>
        </div>
      </div>
      <div class="row align-items-center mt-3 mt-md-5 ml-2 ml-md-4">
        <div class="col-4 px-1">
          <div class="mr-md-5">
            <h3 class="title">
              جدیدترین‌ها
            </h3>
            <h6 class="subtitle mb-0">
              New
            </h6>
          </div>
        </div>
        <div class="col-8 p-lg-4 p-md-2 p-sm-0">
          <a href="#">
            <img src="@/assets/img/genre/NoPath - Copy (3)@3x.png" alt="">
          </a>
        </div>
      </div>
      <div class="row align-items-center mt-3 mt-md-5 ml-2 ml-md-4">
        <div class="col-4 px-1">
          <div class="mr-md-5">
            <h3 class="title">
              محبوب ترین‌ها
            </h3>
            <h6 class="subtitle mb-0">
              Favorite
            </h6>
          </div>
        </div>
        <div class="col-8 p-lg-4 p-md-2 p-sm-0">
          <a href="#">
            <img src="@/assets/img/genre/NoPath - Copy (5)@3x.png" alt="">
          </a>
        </div>
      </div>
      <div class="row align-items-center mt-3 mt-md-5 ml-2 ml-md-4">
        <div class="col-4 px-1">
          <div class="mr-md-5">
            <h3 class="title">
              اکشن
            </h3>
            <h6 class="subtitle mb-0">
              Action
            </h6>
          </div>
        </div>
        <div class="col-8 p-lg-4 p-md-2 p-sm-0">
          <a href="#">
            <img src="@/assets/img/genre/actioin.png" alt="">
          </a>
        </div>
      </div>
      <div class="row align-items-center mt-3 mt-md-5 ml-2 ml-md-4">
        <div class="col-4 px-1">
          <div class="mr-md-5">
            <h3 class="title">
              سریال ایرانی
            </h3>
            <h6 class="subtitle mb-0">
              Iranian Series
            </h6>
          </div>
        </div>
        <div class="col-8 p-lg-4 p-md-2 p-sm-0">
          <a href="#">
            <img src="@/assets/img/genre/iranian-series.png" alt="">
          </a>
        </div>
      </div>
      <div class="row align-items-center mt-3 mt-md-5 ml-2 ml-md-4">
        <div class="col-4 px-1">
          <div class="mr-md-5">
            <h3 class="title">
              عاشقانه
            </h3>
            <h6 class="subtitle mb-0">
              Romance
            </h6>
          </div>
        </div>
        <div class="col-8 p-lg-4 p-md-2 p-sm-0">
          <a href="#">
            <img src="@/assets/img/genre/romance.png" alt="">
          </a>
        </div>
      </div>
      <div class="row align-items-center mt-3 mt-md-5 ml-2 ml-md-4">
        <div class="col-4 px-1">
          <div class="mr-md-5">
            <h3 class="title">
              کمدی
            </h3>
            <h6 class="subtitle mb-0">
              Comedy
            </h6>
          </div>
        </div>
        <div class="col-8 p-lg-4 p-md-2 p-sm-0">
          <a href="#">
            <img src="@/assets/img/genre/comedy.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
    }
  },

  methods: {
    loaduser() {
      this.$router.push(`/users/${this.id}`)
    },
  },
}
</script>
