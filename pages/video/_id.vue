<template>
  <div class="hamshahri">
    <div v-if="loadingPage" class="text-center p-5">
      <img src="/images/loading-white.gif" alt="Loading...">
    </div>
    <section v-else class="video-detail">
      <div class="container-fluid">
        <div class="video-content">
          <div class="row">
            <!-- ستون سمت چپ -->
            <div class="col-12 col-lg-8 mb-3 mb-lg-0">
              <div id="video-player" class="mb-4">
                <div class="video-wrapper">
                  <div v-if="!selectedVideo" class="no-video-placeholder">
                    <p>ویدیویی برای نمایش موجود نیست.</p>
                  </div>
                  <VideoPlayer
                    v-else
                    ref="hamshahri"
                    :key="selectedVideo.id"
                    playerid="hamshahri"
                    :stream="selectedVideo.stream"
                    :title="selectedVideo.title"
                    :poster-url="selectedVideo.image || '/images/default-poster.jpg'"
                    :vast-url="selectedVideo.vastUrl || ''"
                    :player-auto-play="true"
                    :show-auto-play-toggle="true"
                    :should-increment-views="true"
                    :videoid="selectedVideo.id"
                    videotype="video"
                    @ended="playNextVideo"
                  />
                </div>
              </div>
              <div v-if="selectedVideo" id="video-detail">
                <div class="video-info pb-1 mb-1 pb-md-4 mb-md-4">
                  <div class="d-flex mb-3">
                    <div class="flex-fill">
                      <div class="fs-lg-xx-large fw-bold">
                        {{ selectedVideo.title }}
                      </div>
                    </div>
                    <div class="flex-auto d-none d-md-block">
                      <div class="d-flex text-gray-600">
                        <span class="text-black">{{ selectedVideo.views }}</span>
                        <svg class="me-1" width="24" height="25" viewBox="0 0 24 25" fill="none"
                             xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0019 16.4022C9.61187 16.4022 7.67188 14.4622 7.67188 12.0722C7.67188 9.68219 9.61187 7.74219 12.0019 7.74219C14.3919 7.74219 16.3319 9.68219 16.3319 12.0722C16.3319 14.4622 14.3919 16.4022 12.0019 16.4022ZM12.0019 9.24219C10.4419 9.24219 9.17188 10.5122 9.17188 12.0722C9.17188 13.6322 10.4419 14.9022 12.0019 14.9022C13.5619 14.9022 14.8319 13.6322 14.8319 12.0722C14.8319 10.5122 13.5619 9.24219 12.0019 9.24219Z"
                            fill="#737373"
                          />
                          <path
                            d="M11.9981 21.0908C8.23812 21.0908 4.68813 18.8908 2.24812 15.0708C1.18813 13.4208 1.18813 10.7308 2.24812 9.07078C4.69812 5.25078 8.24813 3.05078 11.9981 3.05078C15.7481 3.05078 19.2981 5.25078 21.7381 9.07078C22.7981 10.7208 22.7981 13.4108 21.7381 15.0708C19.2981 18.8908 15.7481 21.0908 11.9981 21.0908ZM11.9981 4.55078C8.76813 4.55078 5.67813 6.49078 3.51813 9.88078C2.76813 11.0508 2.76813 13.0908 3.51813 14.2608C5.67813 17.6508 8.76813 19.5908 11.9981 19.5908C15.2281 19.5908 18.3181 17.6508 20.4781 14.2608C21.2281 13.0908 21.2281 11.0508 20.4781 9.88078C18.3181 6.49078 15.2281 4.55078 11.9981 4.55078Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-column-reverse flex-md-row align-items-lg-end flex-wrap gap-md-3">
                    <div
                      class="flex-fill w-100 d-flex d-md-block justify-content-between align-items-center w-md-auto"
                    >
                      <div v-if="video.channel" class="avatar-wrapper align-items-center">
                        <div class="avatar">
                          <nuxt-link :to="{ name: 'channel-channel', params: { channel: video.channel.cat_id }}">
                            <img :src="'https://cdn.upera.shop/s3/files/logos/'+video.channel.logo">
                          </nuxt-link>
                        </div>
                        <div class="avatar-caption text-nowrap">
                          <div class="fw-medium fs-lg-x-large text-gray-700 mb-1">
                            <nuxt-link :to="{ name: 'channel-channel', params: { channel: video.channel.cat_id }}" class="text-decoration-none text-reset">
                              {{ video.channel.persian_name }}
                            </nuxt-link>
                          </div>
                          <div class="fw-medium fs-small fs-lg-x-medium text-gray-700">
                            {{ video.channel.followers }} دنبال کننده
                          </div>
                        </div>
                      </div>


                      <button v-if="video.channel" class="btn btn-primary btn-sm d-inline-flex d-md-none" @click="toggleFollowChannel(video.channel.id)">
                        <svg class="ms-1" width="17" height="17" viewBox="0 0 17 17" fill="none"
                             xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.5026 1.40234C4.82927 1.40234 1.83594 4.39568 1.83594 8.06901C1.83594 11.7423 4.82927 14.7357 8.5026 14.7357C12.1759 14.7357 15.1693 11.7423 15.1693 8.06901C15.1693 4.39568 12.1759 1.40234 8.5026 1.40234ZM11.1693 8.56901H9.0026V10.7357C9.0026 11.009 8.77594 11.2357 8.5026 11.2357C8.22927 11.2357 8.0026 11.009 8.0026 10.7357V8.56901H5.83594C5.5626 8.56901 5.33594 8.34234 5.33594 8.06901C5.33594 7.79568 5.5626 7.56901 5.83594 7.56901H8.0026V5.40234C8.0026 5.12901 8.22927 4.90234 8.5026 4.90234C8.77594 4.90234 9.0026 5.12901 9.0026 5.40234V7.56901H11.1693C11.4426 7.56901 11.6693 7.79568 11.6693 8.06901C11.6693 8.34234 11.4426 8.56901 11.1693 8.56901Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span v-if="!video.isFollowing">دنبال کردن</span>
                        <span v-else>لغو دنبال</span>
                      </button>
                    </div>
                    <div
                      class="video-btn-wrapper flex-auto w-100 w-md-auto d-flex justify-content-between align-items-center pb-2 mb-1 pb-md-0 mb-md-0"
                    >
                      <div class="flex-auto d-md-none">
                        <div class="d-flex text-gray-600">
                          <span class="text-black">{{ selectedVideo.views }}</span>
                          <svg class="me-1" width="24" height="25" viewBox="0 0 24 25" fill="none"
                               xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.0019 16.4022C9.61187 16.4022 7.67188 14.4622 7.67188 12.0722C7.67188 9.68219 9.61187 7.74219 12.0019 7.74219C14.3919 7.74219 16.3319 9.68219 16.3319 12.0722C16.3319 14.4622 14.3919 16.4022 12.0019 16.4022ZM12.0019 9.24219C10.4419 9.24219 9.17188 10.5122 9.17188 12.0722C9.17188 13.6322 10.4419 14.9022 12.0019 14.9022C13.5619 14.9022 14.8319 13.6322 14.8319 12.0722C14.8319 10.5122 13.5619 9.24219 12.0019 9.24219Z"
                              fill="#737373"
                            />
                            <path
                              d="M11.9981 21.0908C8.23812 21.0908 4.68813 18.8908 2.24812 15.0708C1.18813 13.4208 1.18813 10.7308 2.24812 9.07078C4.69812 5.25078 8.24813 3.05078 11.9981 3.05078C15.7481 3.05078 19.2981 5.25078 21.7381 9.07078C22.7981 10.7208 22.7981 13.4108 21.7381 15.0708C19.2981 18.8908 15.7481 21.0908 11.9981 21.0908ZM11.9981 4.55078C8.76813 4.55078 5.67813 6.49078 3.51813 9.88078C2.76813 11.0508 2.76813 13.0908 3.51813 14.2608C5.67813 17.6508 8.76813 19.5908 11.9981 19.5908C15.2281 19.5908 18.3181 17.6508 20.4781 14.2608C21.2281 13.0908 21.2281 11.0508 20.4781 9.88078C18.3181 6.49078 15.2281 4.55078 11.9981 4.55078Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="d-flex gap-1 gap-md-3">
                        <button class="btn btn-light btn-sm" @click.prevent="modalsharing = !modalsharing">
                          <svg class="ms-1" width="18" height="19" viewBox="0 0 18 19" fill="none"
                               xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.5027 1.57031C12.9059 1.57031 12.3336 1.80737 11.9117 2.22932C11.4897 2.65128 11.2527 3.22357 11.2527 3.82031C11.2533 3.96179 11.2671 4.10289 11.2939 4.24181L5.95616 7.35356C5.62882 7.07567 5.22879 6.89723 4.80331 6.83935C4.37783 6.78146 3.94467 6.84654 3.55498 7.02689C3.16529 7.20725 2.83535 7.49534 2.60411 7.85719C2.37287 8.21899 2.25 8.63944 2.25 9.06881C2.25 9.49819 2.37287 9.91864 2.60411 10.2804C2.83535 10.6423 3.16529 10.9304 3.55498 11.1108C3.94467 11.2911 4.37783 11.3562 4.80331 11.2983C5.22879 11.2404 5.62882 11.0619 5.95616 10.7841L11.2939 13.8981C11.2671 14.0373 11.2533 14.1786 11.2527 14.3203C11.2509 14.835 11.425 15.3348 11.7462 15.737C12.0674 16.1391 12.5163 16.4195 13.0187 16.5315C13.521 16.6436 14.0466 16.5807 14.5082 16.3531C14.9699 16.1256 15.3399 15.747 15.557 15.2804C15.7741 14.8137 15.8252 14.2869 15.7019 13.7872C15.5785 13.2876 15.2882 12.845 14.8788 12.5329C14.4696 12.2209 13.9659 12.0581 13.4514 12.0714C12.9369 12.0849 12.4424 12.2736 12.0499 12.6066L6.71141 9.49256C6.7661 9.21394 6.7661 8.92744 6.71141 8.64881L12.0492 5.53781C12.3255 5.77174 12.6543 5.93549 13.0076 6.01517C13.3608 6.09484 13.7281 6.08809 14.0781 5.99547C14.4282 5.90285 14.7507 5.72711 15.0184 5.48318C15.286 5.23924 15.4908 4.93431 15.6153 4.5943C15.7399 4.25429 15.7806 3.88923 15.7339 3.53015C15.6872 3.17105 15.5545 2.82854 15.3471 2.5317C15.1397 2.23486 14.8638 1.99245 14.5426 1.82508C14.2215 1.65771 13.8648 1.57031 13.5027 1.57031Z"
                              fill="currentColor"
                            />
                          </svg>
                          <span class="d-none d-md-inline">اشتراک گذاری</span>
                        </button>
                        <button class="btn btn-light btn-sm" @click.prevent="ADD_WATCHLIST(video.id, 'ugc')">
                          <svg class="ms-1" width="12" height="16" viewBox="0 0 12 16" fill="none"
                               :class="{ 'text-primary': video.is_watchlist == 1, 'text-gray': !video.is_watchlist }" 
                               xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.7783 15.5703C10.5772 15.5681 10.3795 15.5183 10.2015 15.4248L5.97829 13.0691L1.79627 15.4151C1.6558 15.4914 1.50158 15.5391 1.34255 15.5555C1.18352 15.5719 1.02284 15.5567 0.869753 15.5105C0.71667 15.4644 0.57423 15.3884 0.45069 15.287C0.327158 15.1855 0.224963 15.0605 0.150015 14.9193C0.0555152 14.7369 0.004185 14.5352 0 14.3298V3.89583C0 1.78308 1.37101 0.570312 3.76051 0.570312H8.23804C10.629 0.570312 12.0008 1.73358 12.0008 3.76308V14.3186C12.0045 14.6466 11.8779 14.9628 11.6487 15.1976C11.4194 15.4323 11.1063 15.5663 10.7783 15.5703ZM5.97829 11.9823C6.15341 11.9822 6.32569 12.0272 6.47854 12.1128L10.6958 14.4648C10.7625 14.5008 10.9403 14.4491 10.9403 14.3193V3.76381C10.9403 2.36506 10.0313 1.65631 8.24029 1.65631H3.76275C1.06275 1.65631 1.06277 3.34158 1.06277 3.89583V14.3208C1.06483 14.3494 1.07272 14.3772 1.086 14.4026C1.10809 14.4383 1.14315 14.4641 1.18382 14.4746C1.2245 14.4851 1.26766 14.4794 1.30427 14.4588L5.48104 12.1151C5.63291 12.0296 5.80399 11.9839 5.97829 11.9823Z"
                              fill="currentColor"
                            />
                          </svg>
                          <span class="d-none d-md-inline">
                            {{ video.is_watchlist == 1 ? 'نشان شده' : 'نشان کردن' }}
                          </span>
                        </button>
                        <button class="btn btn-light btn-sm" @click.prevent="ADD_CLAP(video.id, 'ugc')">
                          <svg class="ms-1" width="18" height="19" viewBox="0 0 18 19" fill="none"
                               xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 16.307C8.7675 16.307 8.5425 16.277 8.355 16.2095C5.49 15.227 0.9375 11.7395 0.9375 6.58703C0.9375 3.96203 3.06 1.83203 5.67 1.83203C6.9375 1.83203 8.1225 2.32703 9 3.21203C9.8775 2.32703 11.0625 1.83203 12.33 1.83203C14.94 1.83203 17.0625 3.96953 17.0625 6.58703C17.0625 11.747 12.51 15.227 9.645 16.2095C9.4575 16.277 9.2325 16.307 9 16.307ZM5.67 2.95703C3.6825 2.95703 2.0625 4.58453 2.0625 6.58703C2.0625 11.7095 6.99 14.5595 8.7225 15.152C8.8575 15.197 9.15 15.197 9.285 15.152C11.01 14.5595 15.945 11.717 15.945 6.58703C15.945 4.58453 14.325 2.95703 12.3375 2.95703C11.1975 2.95703 10.14 3.48953 9.4575 4.41203C9.2475 4.69703 8.7675 4.69703 8.5575 4.41203C7.86 3.48203 6.81 2.95703 5.67 2.95703Z"
                              fill="currentColor"
                            />
                          </svg>
                          <span>{{ video.claps.total }}</span>
                        </button>
                        <b-dropdown
                          variant="link"
                          toggle-class="btn-sm border-0 text-decoration-none text-reset  no-caret"
                          no-caret
                        >
                          <template #button-content>
                            <svg
                              width="6"
                              height="23"
                              viewBox="0 0 6 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5.49995 19.7132C5.49995 18.4114 4.26874 17.3561 2.74997 17.3561C1.23121 17.3561 0 18.4114 0 19.7132C0 21.015 1.23121 22.0703 2.74997 22.0703C4.26874 22.0703 5.49995 21.015 5.49995 19.7132ZM5.49995 11.0717C5.49995 9.76988 4.26874 8.71456 2.74997 8.71456C1.23121 8.71456 0 9.76988 0 11.0717C0 12.3735 1.23121 13.4288 2.74997 13.4288C4.26874 13.4288 5.49995 12.3735 5.49995 11.0717ZM2.74997 0.0730495C4.26874 0.0730495 5.49995 1.12837 5.49995 2.43017C5.49995 3.73197 4.26874 4.78729 2.74997 4.78729C1.23121 4.78729 0 3.73197 0 2.43017C0 1.12837 1.23121 0.0730495 2.74997 0.0730495Z"
                                fill="currentColor"
                              />
                            </svg>
                          </template>

                          <b-dropdown-item link-class=" text-decoration-none text-reset" @click="openReportModal">
                            <svg
                              class="ms-2"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.6787 1C3.87298 1 2.76152 1.18123 2.08465 1.37325C1.74621 1.46926 1.51646 1.56827 1.36415 1.6495C1.29499 1.68639 1.24069 1.72339 1.19756 1.75424C1.1547 1.77622 1.11598 1.80729 1.08507 1.84424C1.05416 1.88119 1.03098 1.92397 1.01691 1.97004C1.01329 1.98136 1.01024 1.99285 1.00777 2.00448C1.00529 2.01633 1.00342 2.02829 1.00214 2.04033C1.00094 2.0513 1.00023 2.06233 1.00004 2.07337C1.00003 2.0743 1.00003 2.07524 1.00004 2.07618C1.00003 2.07735 1.00003 2.07852 1.00004 2.07969V11.7969V18.635C0.999362 18.6827 1.00817 18.73 1.02596 18.7743C1.04374 18.8185 1.07014 18.8588 1.10363 18.8928C1.13712 18.9267 1.17702 18.9537 1.22102 18.9721C1.26502 18.9905 1.31224 19 1.35993 19C1.40763 19 1.45485 18.9905 1.49885 18.9721C1.54285 18.9537 1.58275 18.9267 1.61624 18.8928C1.64972 18.8588 1.67613 18.8185 1.69391 18.7743C1.71169 18.73 1.72051 18.6827 1.71983 18.635V12.0521C1.81828 12.0064 1.96258 11.9251 2.51414 11.7864C3.20139 11.6135 4.25074 11.437 5.6787 11.437C7.07705 11.437 8.11802 11.7805 9.38593 12.1428C10.6538 12.505 12.1345 12.8766 14.3162 12.8766C16.835 12.8766 18.8121 11.7505 18.8121 11.7505C18.8677 11.7191 18.9138 11.6736 18.9459 11.6185C18.978 11.5634 18.9949 11.5008 18.9949 11.437V2.43959C18.995 2.37686 18.9786 2.3152 18.9475 2.26073C18.9164 2.20626 18.8716 2.16086 18.8176 2.12903C18.7635 2.09721 18.7021 2.08007 18.6394 2.0793C18.5766 2.07854 18.5148 2.09418 18.46 2.12468C18.1658 2.28814 16.4884 3.15938 14.3162 3.15938C12.5887 3.15938 11.3893 2.64824 10.1254 2.10851C8.86155 1.56879 7.5329 1 5.6787 1ZM5.6787 1.71979C7.38749 1.71979 8.57841 2.2307 9.84283 2.77067C11.1073 3.31063 12.4448 3.87918 14.3162 3.87918C16.2558 3.87918 17.5883 3.31503 18.2751 2.98225V11.2015C18.0253 11.3351 16.4458 12.1568 14.3162 12.1568C12.2152 12.1568 10.8348 11.8086 9.58345 11.4511C8.33208 11.0936 7.19553 10.7172 5.6787 10.7172C4.1915 10.7172 3.08175 10.9007 2.3384 11.0877C2.13727 11.1383 2.03075 11.1718 1.95039 11.2022C1.87003 11.2327 1.81583 11.2601 1.71983 11.2978V2.27862C1.82225 2.22493 1.9942 2.14783 2.28147 2.06634C2.87323 1.89846 3.92145 1.71979 5.6787 1.71979Z"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="0.6"
                              />
                            </svg>
                            گزارش تخلف
                          </b-dropdown-item>
                        </b-dropdown>
                        <button v-if="video.channel" class="btn btn-primary btn-sm d-none d-md-inline-flex" @click="toggleFollowChannel(video.channel.id)">
                          <svg class="ms-1" width="17" height="17" viewBox="0 0 17 17" fill="none"
                               xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.5026 1.40234C4.82927 1.40234 1.83594 4.39568 1.83594 8.06901C1.83594 11.7423 4.82927 14.7357 8.5026 14.7357C12.1759 14.7357 15.1693 11.7423 15.1693 8.06901C15.1693 4.39568 12.1759 1.40234 8.5026 1.40234ZM11.1693 8.56901H9.0026V10.7357C9.0026 11.009 8.77594 11.2357 8.5026 11.2357C8.22927 11.2357 8.0026 11.009 8.0026 10.7357V8.56901H5.83594C5.5626 8.56901 5.33594 8.34234 5.33594 8.06901C5.33594 7.79568 5.5626 7.56901 5.83594 7.56901H8.0026V5.40234C8.0026 5.12901 8.22927 4.90234 8.5026 4.90234C8.77594 4.90234 9.0026 5.12901 9.0026 5.40234V7.56901H11.1693C11.4426 7.56901 11.6693 7.79568 11.6693 8.06901C11.6693 8.34234 11.4426 8.56901 11.1693 8.56901Z"
                              fill="currentColor"
                            />
                          </svg>
                          <span v-if="!video.isFollowing">دنبال کردن</span>
                          <span v-else>لغو دنبال</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="video-caption pb-1 mb-2 mb-md-4">
                  <div class="row mb-3">
                    <!-- fs-lg-base line-clamp-2 -->
                    <div class="fs-medium">
                      <span v-if="!isExpanded">
                        {{ video.summary.length > maxLength ? video.summary.substring(0, maxLength) + '...' : video.summary }}
                      </span>
                      <span v-else>
                        {{ video.summary }}
                      </span>

                      <a 
                        v-if="video.summary.length > maxLength" 
                        class="text-gray-600 text-decoration-none fs-medium fs-lg-base cursor-pointer ms-2" 
                        @click.prevent="toggleExpand"
                      >
                        {{ isExpanded ? 'بستن' : 'مشاهده بیشتر...' }}
                      </a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-between fs-medium">
                    <div class="text-gray-600 fs-medium fs-lg-base">
                      <svg class="ms-1" width="20" height="21" viewBox="0 0 20 21" fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.9974 19.0299C5.05573 19.0299 1.03906 15.0133 1.03906 10.0716C1.03906 5.12995 5.05573 1.11328 9.9974 1.11328C14.9391 1.11328 18.9557 5.12995 18.9557 10.0716C18.9557 15.0133 14.9391 19.0299 9.9974 19.0299ZM9.9974 2.36328C5.7474 2.36328 2.28906 5.82161 2.28906 10.0716C2.28906 14.3216 5.7474 17.7799 9.9974 17.7799C14.2474 17.7799 17.7057 14.3216 17.7057 10.0716C17.7057 5.82161 14.2474 2.36328 9.9974 2.36328Z"
                          fill="#737373"
                        />
                        <path
                          d="M13.0948 13.3448C12.9865 13.3448 12.8781 13.3198 12.7781 13.2531L10.1948 11.7115C9.55312 11.3281 9.07812 10.4865 9.07812 9.74479V6.32812C9.07812 5.98646 9.36146 5.70312 9.70312 5.70312C10.0448 5.70312 10.3281 5.98646 10.3281 6.32812V9.74479C10.3281 10.0448 10.5781 10.4865 10.8365 10.6365L13.4198 12.1781C13.7198 12.3531 13.8115 12.7365 13.6365 13.0365C13.5115 13.2365 13.3031 13.3448 13.0948 13.3448Z"
                          fill="currentColor"
                        />
                      </svg>
                      {{ video.time }}
                    </div>
                    <div />
                  </div>
                </div>
                <Comments :id="video.id" type="ugc" />
              </div>
            </div>

            <!-- ستون سمت راست -->
            <div class="col-12 col-lg-4">
              <div v-if="video.playlist_videos.length" id="video-playlist" class="mb-4">
                <b-card no-body class="card-radius text-bg-gray h-100 border-light">
                  <!-- Card Header -->
                  <b-card-header class="d-flex align-items-center justify-content-between border-bottom-0 bg-transparent">
                    <div class="card-title">
                      <span>
                        {{ video.playlists[0].title_fa }}
                      </span>
                    </div>



                    <div class="form-check form-switch">
                      <input
                        id="playAll"
                        class="form-check-input"
                        type="checkbox"
                        :checked="autoPlay"
                        @change="toggleAutoplay"
                      >
                      <label class="form-check-label fw-bold" for="playAll">پخش خودکار</label>
                    </div>
                  </b-card-header>

                  <!-- Card Body -->
                  <b-card-body class="bg-white">
                    <div class="h-100 position-relative">
                      <div class="scrollable ">
                        <!-- Articles -->
                        <b-row
                          v-for="(video_item, index) in video.playlist_videos"
                          :key="index"
                          class="mb-2"
                          style="cursor: pointer;"
                        >
                          <b-col cols="6">
                            <nuxt-link :to="{ name: 'video-id', params: { id: video_item.id }}" class="text-decoration-none text-reset">
                              <img
                                :src="video_item.image"
                                class="d-block w-100 h-100 object-fit-cover rounded-4"
                                :alt="video_item.title"
                              >

                              <span
                                v-if="video_item.id === $route.params.id"
                                class="badge badge-live"
                              >
                                در حال پخش
                              </span>
                            </nuxt-link>
                          </b-col>
                          <b-col cols="6">
                            <div class="h-100 w-100 d-flex flex-column flex-wrap justify-content-between py-2 py-lg-3">
                              <nuxt-link :to="{ name: 'video-id', params: { id: video_item.id }}" class="text-decoration-none text-reset">
                                <div class="w-100">
                                  <div class="fw-medium fs-medium mb-1">
                                    {{ video_item.title }}
                                  </div>
                                  <div class="text-gray-700 fs-small">
                                    {{ video_item.summary }}
                                  </div>
                                </div>
                              </nuxt-link>
                              <div class="w-100">
                                <div class="text-gray-600 fs-light">
                                  {{ video_item.stats }}
                                </div>
                              </div>
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                    </div>
                  </b-card-body>
                </b-card>
              </div>
              <div v-if="video" id="video-similar">
                <div class="card card-radius text-bg-white h-100 border-0">
                  <div
                    class="card-header d-flex align-items-center justify-content-between border-bottom-0 bg-transparent"
                  >
                    <div class="card-title">
                      ویديوهای مشابه
                    </div>
                    <div v-if="!video.playlist_videos.length" class="form-check form-switch">
                      <input
                        id="playAll"
                        class="form-check-input"
                        type="checkbox"
                        :checked="autoPlay"
                        @change="toggleAutoplay"
                      >
                      <label class="form-check-label fw-bold" for="playAll">پخش خودکار</label>
                    </div>
                  </div>
                  <div class="card-body px-0 py-2 bg-white">
                    <div class="h-100 position-relative">
                      <div class="scrollable ">
                        <b-row
                          v-for="(video_item, index) in video.similar_videos"
                          :key="index"
                          class="mb-2"
                          style="cursor: pointer;"
                        >
                          <div class="col-7 col-lg-5">
                            <nuxt-link :to="{ name: 'video-id', params: { id: video_item.id }}">
                              <img
                                :src="video_item.image"
                                class="d-block w-100 h-100 object-fit-cover rounded-4"
                                :alt="video_item.title"
                              >
                              <span
                                class="position-absolute video-badge video-badge-bottom"
                              >04:02</span>
                            </nuxt-link>
                          </div>
                          <div class="col-5 col-lg-5">
                            <div class="h-100 w-100 d-flex flex-column flex-wrap justify-content-between py-2 py-lg-3">
                              <div class="w-100">
                                <div class="fw-medium fs-medium mb-1">
                                  <nuxt-link :to="{ name: 'video-id', params: { id: video_item.id }}" class="text-decoration-none text-reset">
                                    {{ video_item.title }}
                                  </nuxt-link>
                                </div>
                                <div class="text-gray-700 text-truncate fs-small">
                                  {{ video_item.summary }}
                                </div>
                              </div>
                            
                              <div class="text-truncate fw-light fs-small">
                                {{ video_item.stats }}
                              </div>
                            </div>
                          </div>
                        </b-row>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <client-only>
      <b-modal v-if="video" id="modal-sharing" v-model="modalsharing" centered hide-footer :title="'اشتراک گذاری'">
        <Socialsharing :mtitle="video.title" :description="video.summary" />
      </b-modal>
      <!-- Modal -->
      <b-modal
        id="report-modal"
        v-model="modalreporting"
        title="ارسال گزارش تخلف"
        ok-title="ارسال گزارش"
        cancel-title="لغو"
        @ok="sendReport"
      >
        آیا مطمئن هستید که می‌خواهید این گزارش را ارسال کنید؟
      </b-modal>
    </client-only>
  </div>
</template>
<script>import { mapGetters } from 'vuex'
import VideoPlayer from '~/components/VideoPlayer.vue'
import Comments from '~/components/Comments.vue'
import Socialsharing from "@/components/Socialsharing"


    export default {
  components: {
    VideoPlayer,
    Comments,
    Socialsharing
  },
  data() {
    return {
    video: {
      playlist_videos: [],
      similar_videos: [],
      claps: { total: 0, user: 0 },
      channel: null,
    },
      currentVideoIndex: 0, // Active video index,
    watchedVideos: [], // آرایه‌ای برای ذخیره ۱۰ ویدیوی اخیر
    maxWatchedVideos: 10, // حداکثر تعداد ویدیوهای ذخیره‌شده
      autoPlayAll: false, // Auto play toggle
      selectedVideo: null,
      isExpanded: false,
      maxLength: 300,

      loadingPage: true,
                modalsharing:false,
                modalreporting:false
    }
  },
  computed: {
    ...mapGetters({
      autoPlay: 'autoplay',
    })
  },
  async mounted() {

    try {
      const { data } = await this.$axios.get('/ghost/getVideoDetails/'+this.$route.params.id)
    this.selectedVideo = this.video = data.data || {}


      console.log(this.video)
    } catch (error) {
      console.error('Error fetching video data:', error)
    } finally {
      this.loadingPage = false // حذف لودینگ
    }
      const storedVideos = localStorage.getItem("watchedVideos")
  if (storedVideos) {
    this.watchedVideos = JSON.parse(storedVideos)
  }
  },
  methods: {
  toggleExpand() {
    this.isExpanded = !this.isExpanded // تغییر وضعیت نمایش
  },
    openReportModal() {
      this.modalreporting = !this.modalreporting
    },
    sendReport() {
      // this.$bvToast.toast('گزارش شما با موفقیت ارسال شد!', {
      //   title: 'موفقیت',
      //   variant: 'success',
      //   solid: true,
      // })

      this.$swal("گزارش شما با موفقیت ارسال شد!")
    },
  selectVideo(video) {

    this.selectedVideo = video
    this.$nextTick(() => {
      const playerElement = this.$refs[`hamshahri`]
      if (playerElement) {
        playerElement.$el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    })
  },
    async toggleFollowChannel(channelId) {
      if (!this.$auth.loggedIn) {
        this.$store.dispatch('login/SHOW_MODAL', {
          premessage: 'لطفا برای رأی دادن وارد شوید.',
          premobile: null,
          preredirect: null,
          prerefresh: false,
        })
        return
      }
      try {
        if (this.video.isFollowing) {
          await this.$axios.post(`/channels/${channelId}/unfollow`)
          this.video.isFollowing = false
        } else {
          await this.$axios.post(`/channels/${channelId}/follow`)
          this.video.isFollowing = true
        }
      } catch (error) {
        console.error('Error:', error.response.data.message || 'An error occurred')
      }
    },
    toggleAutoplay(event) {
      const isChecked = event.target.checked
      this.$store.dispatch('SET_AUTOPLAY', isChecked)
    },


     ADD_WATCHLIST(id, type) {
        if (this.$auth.loggedIn) {

      if (this.video.is_watchlist==0) {
        // Add true to data array
        this.video.is_watchlist = 1
      } else {
        // Add false to data array
        this.video.is_watchlist = 0

      }

      this.$axios.post('/create/watchlist', {id,type})
                } else {
                    this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})

                }
              
    },

     ADD_CLAP(id, type) {
        if (this.$auth.loggedIn) {

     this.video.claps.total++
this.video.claps.user++

      this.$axios.post('/add/clap', {id,type})
                } else {
                    this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})

                }
              
    },
  playNextVideo() {
    let videoList = this.video.playlist_videos.length > 0 ? this.video.playlist_videos : this.video.similar_videos

    if (videoList.length > 0) {

      const currentIndex = videoList.findIndex(v => v.id == this.$route.params.id)

      let nextVideo = null

      // ابتدا سعی می‌کنیم ویدیویی پیدا کنیم که قبلاً دیده نشده باشد
      for (let i = currentIndex + 1; i < videoList.length; i++) {
        if (!this.watchedVideos.includes(videoList[i].id)) {
          nextVideo = videoList[i]
          break
        }
      }

      // اگر ویدیوی جدیدی پیدا نشد، از اول لیست دنبال ویدیویی که در لیست اخیر نیست می‌گردیم
      if (!nextVideo) {
        for (let i = 0; i < videoList.length; i++) {
          if (!this.watchedVideos.includes(videoList[i].id)) {
            nextVideo = videoList[i]
            break
          }
        }
      }

      // اگر هنوز ویدیویی باقی مانده باشد، آن را پخش کن
      if (nextVideo) {
        // اضافه کردن ویدیو به لیست دیده‌شده‌ها
        this.watchedVideos.push(nextVideo.id)
        if (this.watchedVideos.length > this.maxWatchedVideos) {
          this.watchedVideos.shift() // حذف قدیمی‌ترین ویدیو در لیست
        }

        // ذخیره در localStorage برای نگه داشتن لیست بعد از تغییر صفحه
        localStorage.setItem("watchedVideos", JSON.stringify(this.watchedVideos))

        // رفتن به ویدیوی جدید
        this.$router.push({ name: "video-id", params: { id: nextVideo.id } })
      } else {
localStorage.removeItem("watchedVideos")
this.watchedVideos =[]
this.playNextVideo()
      }
    }
  }

,
  },

}
</script>