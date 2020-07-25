<template>
  <div class="container-fluid mt-5  pt-md-3 pt-lg-5">
    <div class="search_main_container_reswidth">
      <!--------------  Search Box Show in small device ---------------->
      <div class="input-group search-field with-filter my-4 insert_comment search_box_container d-lg-none">
        <input class="form-control border-left-0 border shadow-none" type="search" autofocus placeholder="جستجوی فیلم، سریال، بازیگر...">

        <button class="btn btn-sm  btn-send-comment">
          <i class="icon-search" />
        </button>

        <a href="#" class="filter">
          <i class="icon-filter" />
        </a>
      </div>
      <!--------------  Search Box Show in small device ---------------->
      <!--------------  Search Badges ---------------->
      <div class="search_badge">
        <a href="#" class="badge badge-pill small font-weight-normal py-2 px-3 badge-secondary mb-2 mr-2 mr-lg-4">مناسب کودکان </a>
        <a href="#" onclick="searchResult()" class="badge badge-pill small font-weight-normal py-2 px-3 badge-secondary mb-2 mr-2 mr-lg-4">ایرانی</a>
        <a href="#" class="badge badge-pill small font-weight-normal py-2 px-3 badge-secondary mb-2 mr-2 mr-lg-4">دوبله</a>
        <a href="#" class="badge badge-pill small font-weight-normal py-2 px-3 badge-secondary mb-2 mr-2 mr-lg-4">زیرنویس</a>
        <a href="#" onclick="searchResult2()" class="badge badge-pill small font-weight-normal py-2 px-3 badge-secondary mb-2 mr-2 mr-lg-4">امتیاز +۸</a>
      </div>
      <!--------------  Search Badges ---------------->
      <!--------------  Search Tags ---------------->
      <div id="search-tags" class="mt-4 search-tags">
        <div class="tag mt-2">
          <i class="icon-close" />
          <span>سریال دل</span>
        </div>
        <div class="tag mt-2">
          <i class="icon-close" />
          <span>چهار انگشت</span>
        </div>
        <div class="tag mt-2">
          <i class="icon-close" />
          <span>جوکر</span>
        </div>
      </div>
      <!--------------  Search Tags ---------------->
      <header class="headline py-4">
        <h6 class="title">
          محبوبترین جستجوها
        </h6>
      </header>

      <!-------------- Popular Search ---------------->
      <!--رو اضافه کنینd-none اگر خواستین این قسمت رو حذف یا مخفی کنین فقط کافیه کلاس-->
      <div id="popular_search" class="d-flex flex-column align-start popular_search">
        <a href="#" class="clearfix text-dark">سریال دل</a>
        <a href="#" class="clearfix text-dark pt-4">چهار انگشت</a>
        <a href="#" class="clearfix text-dark pt-4">جوکر</a>
        <a href="#" class="clearfix text-dark pt-4">زندانی ها</a>
      </div>
      <!-------------- Popular Search ---------------->
      <!-------------- Movie Not Found ---------------->
      <!--رو اضافه کنینd-none اگر خواستین این قسمت رو حذف یا مخفی کنین فقط کافیه کلاس-->
      <div id="notFound" class="movie_notFound mt-5 ">
        <p>
          متاسفانه چیزی پیدا نکردیم. میتوانید به قسمت <a href="genre.html"><span>دسته ببندی</span></a>  سری
          بزنین یا <a href="genre.html"><span>درخواست اضافه کردن فیلم یا سریال</span></a> مورد نظرتون رو بدین.
        </p>
      </div>
      <!-------------- Movie Not Found ---------------->
    </div>


    <!--------------  Search Container ---------------->
    <!--رو اضافه کنینd-none اگر خواستین این قسمت رو حذف یا مخفی کنین فقط کافیه کلاس-->
    <div id="actor" class="search_collection">
      <div class="container-fluid pl-md-4 pr-md-5 mt-n5">
        <div class="row">
          <!--------------  Search Result -> foreach loop ---------------->
          <div class="col-4 col-xl-1 col-md-2 col-sm-3 mt-2 mt-lg-4">
            <a href="#" class="actor is-series">

              <img src="@/assets/img/slide-1/1.png" alt="">
              <img src="@/assets/img/slide-1/1.png" alt="">
              <img src="@/assets/img/slide-1/1.png" alt="">


              <span class="block">سریال دل</span>
            </a>
          </div>
          <!--------------  Search Result -> foreach loop ---------------->

          <div class="col-4 col-xl-1 col-md-2 col-sm-3 mt-2 mt-lg-4">
            <a href="#" class="actor">
              <img src="@/assets/img/actor/3.png" alt="">
              <span class="block">سیامک انصاری</span>
            </a>
          </div>
          <div class="col-4 col-xl-1 col-md-2 col-sm-3 mt-2 mt-lg-4">
            <a href="#" class="actor">
              <img src="@/assets/img/slide-1/2.png" alt="">
              <span class="block">چهار انگشت</span>
            </a>
          </div>
          <div class="col-4 col-xl-1 col-md-2 col-sm-3 mt-2 mt-lg-4">
            <a href="#" class="actor">
              <img src="@/assets/img/slide-1/5.png" alt="">
              <span class="block">تگزاس 2</span>
            </a>
          </div>
          <div class="col-4 col-xl-1 col-md-2 col-sm-3 mt-2 mt-lg-4">
            <a href="#" class="actor">
              <img src="@/assets/img/slide-1/4.png" alt="">
              <span class="block">زندانی ها</span>
            </a>
          </div>
          <div class="col-4 col-xl-1 col-md-2 col-sm-3 mt-2 mt-lg-4">
            <a href="#" class="actor">
              <img src="@/assets/img/actor/2.png" alt="">
              <span class="block">پیمان معادی</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--------------  Search Container ---------------->
  </div>
</template>