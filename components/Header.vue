<template>
  <div>
    <div
      v-if="!itemmenu.includes($route.name)"
      class="d-flex header-mobile d-md-none"
    >
      <div class="show-mobile header-home">
        <nuxt-link
          to="/"
          class="header-link d-flex flex-column align-items-center justify-content-center text-nowrap active"
        >
          <i v-if="$config.envname == 'upera'" class="icon-upera-logo" />
          <i v-else class="icon-home" />
          <span>
            <i
              v-if="$config.envname == 'upera'"
              class="icon-upera-fa-logotype"
            />
            <span v-else>خانه </span>
          </span>
        </nuxt-link>
      </div>
      <div class="d-flex align-items-center h-full header-search">
        <nuxt-link
          to="/search"
          class="show-mobile header-link d-flex flex-column align-items-center justify-content-center text-nowrap"
        >
          <i class="icon-search-stroke" />
          <span>جستجو </span>
        </nuxt-link>
      </div>
      <div
        class="header-search header-links header-links-category d-md-flex align-items-center mr-md-2 mr-lg-3 h-full"
      >
        <nuxt-link to="/genres" class="d-flex align-items-center header-link">
          <i class="icon-categories" />
          <span class="ml-md-2">دسته&zwnj;بندی</span>
          <i class="icon-expand-arrow hide-mobile" />
        </nuxt-link>
      </div>

      <div v-if="$config.envname == 'upera'" class="header-search">
        <a
          href="/kids"
          class="show-mobile header-link d-flex flex-column align-items-center justify-content-center text-nowrap"
        >
          <i class="icon-kids-version" />
          <span>کودک </span>
        </a>
      </div>
      <div
        class="header-search header-links header-links-profile d-md-flex align-items-center mr-md-2 mr-lg-3 h-full"
      >
        <nuxt-link to="/profile" class="d-flex align-items-center header-link">
          <i class="icon-profile-setting" />
          <span class="ml-md-2">پروفایل</span>
        </nuxt-link>
      </div>
    </div>

    <header id="header" class="page-header">
      <div
        id="trigger-menu-wrapper"
        class="container-fluid trigger-menu-wrapper"
        :class="{ 'trigger-menu-wrapper2': bannerNav }"
      >
        <div
          class="d-flex justify-content-between align-items-center header trigger-menu w-full"
          :class="{ 'menu-open': MenuOpen }"
          @click="MenuOpen = !MenuOpen"
        >
          <div class="d-flex align-items-center h-full">
            <nuxt-link
              v-if="
                categories.includes($route.path) ||
                profile.includes($route.path)
              "
              to="/"
              class="logo logo_another_pages"
            >
              <i
                v-if="$config.envname == 'upera'"
                class="icon-upera-fa-logotype"
              />
              <i v-if="$config.envname == 'upera'" class="icon-upera-logo" />
              <img
                v-if="$config.envname == 'plus' && $colorMode.value == 'light'"
                :src="'https://cdn.upera.shop/s3/vods/' + checkuser.logo"
                :class="{ 'd-none d-md-block': bannerNav }"
                :alt="$config.name_fa"
              />
              <img
                v-if="$config.envname == 'plus' && $colorMode.value == 'dark'"
                :src="'https://cdn.upera.shop/s3/vods/' + checkuser.logo_dark"
                :class="{ 'd-none d-md-block': bannerNav }"
                :alt="$config.name_fa"
              />
            </nuxt-link>
            <nuxt-link v-else to="/" class="logo">
              <img
                v-if="$config.envname == 'upera'"
                src="@/assets/img/logo.svg"
                :class="{ 'd-none d-md-block': bannerNav }"
                :alt="$config.name_fa"
              />
              <img
                v-if="$config.envname == 'plus' && $colorMode.value == 'light'"
                :src="'https://cdn.upera.shop/s3/vods/' + checkuser.logo"
                :class="{ 'd-none d-md-block': bannerNav }"
                :alt="$config.name_fa"
              />
              <img
                v-if="$config.envname == 'plus' && $colorMode.value == 'dark'"
                :src="'https://cdn.upera.shop/s3/vods/' + checkuser.logo_dark"
                :class="{ 'd-none d-md-block': bannerNav }"
                :alt="$config.name_fa"
              />
              <img
                v-if="bannerNav && $config.envname == 'upera'"
                src="/images/logo-mobile.svg"
                class="d-md-none"
                :alt="$config.name_fa"
              />
              <img
                v-if="
                  bannerNav && $config.envname == 'plus' && checkuser.ref <= 2
                "
                src="@/assets/images/mobile.png"
                class="d-md-none"
                :alt="$config.name_fa"
              />
              <img
                v-if="
                  bannerNav && $config.envname == 'plus' && checkuser.ref > 2
                "
                :src="'https://cdn.upera.shop/s3/vods/' + checkuser.logo_dark"
                class="d-md-none"
                :alt="$config.name_fa"
              />
            </nuxt-link>

            <div class="d-none d-md-flex align-items-center h-full">
              <div
                class="category d-flex align-items-center h-full header-category-profile"
                :class="{ open: categoriesNav }"
                @mouseover="categoriesHover()"
                @mouseleave="categoriesleave()"
              >
                <div
                  class="header-links header-links-category d-md-flex align-items-center mr-md-2 mr-lg-3 h-full"
                >
                  <nuxt-link
                    to="/genres"
                    class="d-flex align-items-center header-link"
                  >
                    <span>{{ $t('new.categories') }}</span>
                    <i class="icon-expand-arrow" />
                    <!-- <i class="icon-expand-arrow hide-mobile" /> -->
                  </nuxt-link>
                </div>
                <ul
                  v-if="!profileNav"
                  class="container-fluid category-menu header-menu mega-menu hide-mobile"
                >
                  <!--           <i class="fas fa-angle-down angle" /> -->
                  <li>
                    <nuxt-link to="/genres">
                      {{ $t('new.genres') }}
                    </nuxt-link>
                  </li>
                  <!--                   <li>
                    <nuxt-link to="/lives">
                      {{ $t('new.lives') }}
                    </nuxt-link>
                  </li> -->
                  <li>
                    <nuxt-link to="/casts/iranian-actors">
                      {{ $t('new.iranianactors') }}
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/casts/foreign-actors">
                      {{ $t('new.foreignactors') }}
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/casts/directors">
                      {{ $t('new.directors') }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>

              <div class="header-search">
                <input
                  v-model="query"
                  class="header-search-input"
                  :placeholder="$t('new.search')"
                  type="text"
                  @keyup.enter="SEARCH"
                />
                <button class="header-search-submit" @click="SEARCH">
                  <i class="icon-search-stroke" />
                </button>
              </div>

              <div
                v-if="$config.envname == 'upera'"
                class="category header-buttons d-flex align-items-center h-full header-category-profile"
              >
                <div
                  class="header-links header-links-profile d-md-flex align-items-center mr-md-2 mr-lg-3 h-full"
                >
                  <a
                    href="/kids"
                    class="profile d-flex align-items-center header-link"
                  >
                    <i class="icon-kids-version" />
                    <span>کودک</span>
                  </a>
                </div>
              </div>

              <div
                class="category header-buttons d-flex align-items-center h-full"
                :class="{ open: profileNav }"
              >
                <div
                  class="header-links header-links-profile d-md-flex align-items-center mr-md-2 mr-lg-3 h-full"
                >
                  <ul
                    v-if="profileNav"
                    class="container-fluid category-menu profile_menu header-menu mega-menu hide-mobile"
                  >
                    <li>
                      <nuxt-link to="/profile"> لیست‌های من </nuxt-link>
                    </li>
                    <li v-show="showpayments">
                      <nuxt-link to="/payments"> پرداخت ها </nuxt-link>
                    </li>
                    <!--                                         <li>
                      <nuxt-link to="/profile/settings">
                        {{ $t('setting.app_setting') }}
                      </nuxt-link>
                    </li> -->
                    <!--                     <li v-if="checkuser.subscription==1">
                      <nuxt-link to="/profile/plans">
                        {{ $t('new.prices') }}
                      </nuxt-link>
                    </li> -->
                    <!--                   <li v-if="$i18n.locale=='fa'">
                    <nuxt-link to="/profile/internet">
                      {{ $t('new.internet') }}
                    </nuxt-link>
                  </li> -->
                  </ul>
                </div>
              </div>

              <!--    <div class="category header-buttons d-flex align-items-center h-full" :class="{ 'open': profileNav }">
                <div class="header-links header-links-profile d-md-flex align-items-center mr-md-2 mr-lg-3 h-full">
                  <nuxt-link to="/profile" class="profile d-flex align-items-center header-link">
                    <i class="icon-profile-setting ml-2" />

                    <span>{{ $t('new.profile') }}</span>
                  </nuxt-link>

                  <ul v-if="profileNav" class="container-fluid category-menu profile_menu header-menu mega-menu hide-mobile">
                    <i class="fas fa-angle-down angle" />
                    <li>
                      <nuxt-link to="/profile">
                        {{ $t('setting.profile') }}
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/payments">
                        پرداخت ها
                      </nuxt-link>
                    </li>                                     <li>
                      <nuxt-link to="/profile/settings">
                        {{ $t('setting.app_setting') }}
                      </nuxt-link>
                    </li>
                    <li v-if="checkuser.subscription==1">
                      <nuxt-link to="/profile/plans">
                        {{ $t('new.prices') }}
                      </nuxt-link>
                    </li>
                    <li v-if="$i18n.locale=='fa'">
                    <nuxt-link to="/profile/internet">
                      {{ $t('new.internet') }}
                    </nuxt-link>
                  </li>
                  </ul>
                </div>
              </div> -->
            </div>
          </div>

          <div class="header-buttons d-flex align-items-center h-full">
            <div
              class="header-links header-links-profile-setting d-md-flex align-items-center h-full ml-lg-1 mr-lg-1 dropdown float-left hide-mobile"
            >
              <b-link
                id="popover-settings"
                class="d-flex align-items-center header-link"
              >
                <i class="icon-setting ml-2" />
                <!-- <span>{{ $t('setting.app_setting') }}</span> -->
              </b-link>
              <b-popover
                id="popover-d-settings"
                target="popover-settings"
                triggers="hover"
                placement="bottom"
                fallback-placement="flip"
                boundary-padding="1"
              >
                <ul class="dropdown-menu show">
                  <li class="px-3 py-2">
                    <div class="tab-content active">
                      <div id="tabsetting" class="tab-pane active">
                        <!--                           <div class="d-flex align-items-center justify-content-between pb-2 border-bottom-gray">
                            <div class="d-flex align-items-center">
                              <div class="avatar avatar-sm ml-2">
                                <img src="images/users/unnamed.jpg">
                              </div>
                              <span class="text-black">امیر</span>
                            </div>
                            <a class="text-muted p-fs-larger">
                              <i class="icon-edit" />
                            </a>
                          </div> -->
                        <div
                          class="d-flex align-items-center justify-content-between pt-3 py-4 border-bottom-gray"
                        >
                          <div class="text-black">
                            <i class="fa fa-moon ml-2" />
                            حالت شب
                          </div>
                          <div class="custom-control custom-switch">
                            <input
                              id="nightMode"
                              type="checkbox"
                              class="custom-control-input"
                              :checked="$colorMode.value === 'dark'"
                              @change="nightmode($event.target.checked)"
                            />
                            <label
                              class="custom-control-label"
                              for="nightMode"
                            />
                          </div>
                        </div>
                        <!-- :class="{ 'border-bottom-gray' : $auth.loggedIn}" -->
                        <div
                          class="d-flex align-items-center justify-content-between py-4 pt-3 border-bottom-gray"
                        >
                          <div class="text-black">
                            <i class="fa fa-globe ml-2" />
                            زبان فارسی
                          </div>
                          <div class="custom-control custom-switch">
                            <input
                              id="language"
                              type="checkbox"
                              class="custom-control-input"
                              :checked="$i18n.locale === 'fa'"
                              @change="changelang()"
                            />
                            <label
                              class="custom-control-label"
                              for="language"
                            />
                          </div>
                        </div>
                        <div class="py-4 pt-3">
                          <div class="text-black pb-1">
                            فیلترگذاری ثابت محتوا
                          </div>
                          <FilterContents
                            :show="true"
                            :setting="true"
                            :savedata="true"
                            :no-top="false"
                            @execute_content_filtering="
                              execute_content_filtering
                            "
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </b-popover>
            </div>

            <div class="btn-app">
              <b-button
                v-if="
                  !content_subscription &&
                  checkuser.subscription != 1 &&
                  !$auth.loggedIn &&
                  $route.name !== 'login'
                "
                variant="second"
                class="d-flex align-items-center ml-2"
                @click="SHOW_MODAL_WITH_DIRECTDEBIT()"
              >
                <i class="fa fa-credit-card ml-2 hide-mobile" />
                پرداخت خودکار
              </b-button>
              <b-button
                v-else-if="
                  !content_subscription &&
                  checkuser.subscription != 1 &&
                  $auth.loggedIn
                "
                variant="second"
                class="d-flex align-items-center ml-2"
                @click="SHOW_MODAL_DIRECTDEBIT()"
              >
                <i class="fa fa-credit-card ml-2 hide-mobile" />
                پرداخت خودکار
              </b-button>
              <b-button
                v-if="
                  (content_subscription || checkuser.subscription == 1) &&
                  !$auth.loggedIn
                "
                variant="second"
                class="d-flex align-items-center ml-2"
                @click="SHOW_MODAL_WITH_SUBSCRIPTION()"
              >
                <i class="fa fa-credit-card ml-2 hide-mobile" />
                خرید اشتراک
              </b-button>
              <b-button
                v-else-if="
                  (content_subscription || checkuser.subscription == 1) &&
                  !checkuser.access
                "
                variant="second"
                class="d-flex align-items-center ml-2"
                @click="SHOW_MODAL_SUBSCRIPTION()"
              >
                <i class="fa fa-credit-card ml-2 hide-mobile" />
                خرید اشتراک
              </b-button>
              <b-button
                v-else-if="
                  (content_subscription || checkuser.subscription == 1) &&
                  checkuser.access
                "
                variant="second"
                class="d-flex align-items-center ml-2"
                @click="SHOW_MODAL_SUBSCRIPTION()"
              >
                <i class="fa fa-credit-card ml-2 hide-mobile" />
                تمدید اشتراک
              </b-button>
            </div>

            <!-- v-b-tooltip.hover :title="checkuser.days_period_to_end+' روز از اشتراک شما باقیمانده است'" variant="success" -->
            <!--             <nuxt-link v-if="checkuser.show_app" to="/app" class="btn btn-main py-1 px-lg-4">
              {{ $t('new.app') }}
            </nuxt-link> -->

            <nuxt-link
              v-if="checkuser.show_app && $auth.loggedIn"
              to="/app"
              class="btn btn-main show-mobile"
            >
              {{ $t('new.app') }}
            </nuxt-link>
            <b-button
              v-else
              variant="main"
              class="show-mobile"
              @click="SHOW_MODAL()"
            >
              {{ $t('nav.login') }}
            </b-button>

            <div
              v-if="$auth.loggedIn"
              class="header-links d-md-flex align-items-center h-full dropdown hide-mobile"
            >
              <!-- <b-link id="popover-profile" class="d-flex align-items-center btn btn-main"> -->
              <nuxt-link
                id="popover-profile"
                to="/profile"
                class="d-flex align-items-center btn btn-main"
              >
                <i class="fa fa-user ml-2" />
                <span>{{ $t('setting.profile') }}</span>
                <i class="fa fa-angle-down mr-2" />
              </nuxt-link>
              <b-popover
                id="popover-d-profile"
                target="popover-profile"
                triggers="hover"
                placement="bottomleft"
                fallback-placement="flip"
                boundary-padding="1"
              >
                <ul class="dropdown-menu show">
                  <li>
                    <ul class="nav flex-column">
                      <li class="nav-item">
                        <span
                          class="nav-link nav-link-divider d-flex align-items-center flex-wrap"
                        >
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="32"
                              height="32"
                              rx="16"
                              fill="#525252"
                            />
                            <path
                              d="M14.6453 26C14.38 25.9657 14.1128 25.948 13.8453 25.947C13.0575 25.9067 12.2737 25.8084 11.5003 25.653C9.83131 25.333 8.74131 24.763 8.27331 23.874C8.09271 23.5266 7.99767 23.1411 7.99611 22.7496C7.99454 22.3581 8.08649 21.9718 8.26431 21.623C8.72331 20.733 9.81331 20.155 11.5003 19.844C12.2743 19.6922 13.0578 19.594 13.8453 19.55C15.2849 19.4339 16.7316 19.4339 18.1713 19.55C18.9553 19.5957 19.7354 19.694 20.5063 19.844C22.1763 20.181 23.2653 20.733 23.7333 21.623C23.9064 21.9665 23.9965 22.3458 23.9965 22.7305C23.9965 23.1152 23.9064 23.4945 23.7333 23.838C23.2663 24.728 22.2193 25.315 20.4893 25.617C19.7186 25.7717 18.938 25.872 18.1533 25.917C17.427 25.9847 16.6976 26.0124 15.9683 26H14.6453ZM10.7513 11.4C10.7318 9.98801 11.2738 8.62605 12.258 7.61346C13.2423 6.60088 14.5883 6.02054 16.0003 6C17.4128 6.01975 18.7596 6.59975 19.7445 7.61242C20.7294 8.62508 21.2718 9.98749 21.2523 11.4C21.2715 12.8124 20.7291 14.1747 19.7442 15.1873C18.7593 16.1999 17.4127 16.78 16.0003 16.8C14.5884 16.7792 13.2425 16.1988 12.2583 15.1862C11.2741 14.1737 10.7321 12.8119 10.7513 11.4Z"
                              fill="white"
                            />
                          </svg>
                          <div class="pr-2">
                            <div class="font-weight-bold">
                              {{ checkuser.mobile }}
                            </div>
                            <div
                              v-show="checkuser.days_period_to_end"
                              class="p-fs-small mt-2"
                            >
                              {{ checkuser.days_period_to_end }} روز تا پایان
                              اشتراک
                            </div>
                          </div>
                        </span>
                      </li>
                      <li class="nav-item nav-item-padding">
                        <b-button
                          v-if="
                            !content_subscription &&
                            checkuser.subscription != 1 &&
                            !$auth.loggedIn &&
                            $route.name !== 'login'
                          "
                          variant="second"
                          class="d-flex align-items-center justify-content-center w-full"
                          @click="
                            SHOW_MODAL_WITH_DIRECTDEBIT()
                            $root.$emit('bv::hide::popover')
                          "
                        >
                          <i class="fa fa-credit-card ml-2" />
                          پرداخت خودکار
                        </b-button>
                        <b-button
                          v-else-if="
                            !content_subscription &&
                            checkuser.subscription != 1 &&
                            $auth.loggedIn
                          "
                          variant="second"
                          class="d-flex align-items-center justify-content-center w-full"
                          @click="
                            SHOW_MODAL_DIRECTDEBIT()
                            $root.$emit('bv::hide::popover')
                          "
                        >
                          <i class="fa fa-credit-card ml-2" />
                          پرداخت خودکار
                        </b-button>
                        <b-button
                          v-if="
                            (content_subscription ||
                              checkuser.subscription == 1) &&
                            !$auth.loggedIn
                          "
                          variant="second"
                          class="d-flex align-items-center justify-content-center w-full"
                          @click="
                            SHOW_MODAL_WITH_SUBSCRIPTION()
                            $root.$emit('bv::hide::popover')
                          "
                        >
                          <i class="fa fa-credit-card ml-2" />
                          خرید اشتراک
                        </b-button>
                        <b-button
                          v-else-if="
                            (content_subscription ||
                              checkuser.subscription == 1) &&
                            !checkuser.access
                          "
                          variant="second"
                          class="d-flex align-items-center justify-content-center w-full"
                          @click="
                            SHOW_MODAL_SUBSCRIPTION()
                            $root.$emit('bv::hide::popover')
                          "
                        >
                          <i class="fa fa-credit-card ml-2" />
                          خرید اشتراک
                        </b-button>
                        <b-button
                          v-else-if="
                            (content_subscription ||
                              checkuser.subscription == 1) &&
                            checkuser.access
                          "
                          variant="second"
                          class="d-flex align-items-center justify-content-center w-full"
                          @click="
                            SHOW_MODAL_SUBSCRIPTION()
                            $root.$emit('bv::hide::popover')
                          "
                        >
                          <i class="fa fa-credit-card ml-2" />
                          تمدید اشتراک
                        </b-button>
                        <!-- v-b-tooltip.hover :title="checkuser.days_period_to_end+' روز از اشتراک شما باقیمانده است'" variant="success" -->
                      </li>
                      <li class="nav-item nav-item-padding">
                        <div
                          class="d-flex align-items-center justify-content-between flex-wrap"
                        >
                          <div class="d-flex align-items-center">
                            <i class="icon-wallet" />
                            <div class="pr-2 disabled">
                              <div class="font-weight-bold">کیف پول</div>
                              <div class="p-fs-small mt-1">
                                <a
                                  class="text-black"
                                  @click="
                                    SHOW_MODAL_CREDIT()
                                    $root.$emit('bv::hide::popover')
                                  "
                                  >افزایش موجودی</a
                                >
                              </div>
                            </div>
                          </div>
                          <button
                            class="btn btn-secondary btn-sm"
                            @click="
                              SHOW_MODAL_CREDIT()
                              $root.$emit('bv::hide::popover')
                            "
                          >
                            {{ my_credit }}
                          </button>
                        </div>
                      </li>
                      <li class="nav-item">
                        <nuxt-link
                          class="nav-link d-flex align-items-center flex-wrap"
                          to="/profile"
                        >
                          <i class="fa fa-play-circle" />
                          <span class="pr-2">لیست‌های من</span>
                        </nuxt-link>
                      </li>
                      <li class="nav-item mt-2">
                        <nuxt-link
                          class="nav-link d-flex align-items-center flex-wrap"
                          to="/app"
                        >
                          <i class="icon-download" />
                          <span class="pr-2">دانلود اپلیکیشن</span>
                        </nuxt-link>
                      </li>
                      <li v-show="showpayments" class="nav-item mt-2">
                        <nuxt-link
                          class="nav-link d-flex align-items-center flex-wrap"
                          to="/payments"
                        >
                          <i class="fa fa-shopping-basket" />
                          <span class="pr-2">پرداخت ها</span>
                        </nuxt-link>
                      </li>
                      <li class="nav-item mt-2">
                        <b-link
                          class="nav-link d-flex align-items-center flex-wrap"
                          @click="logout()"
                        >
                          <i class="fa fa-sign-out-alt" />
                          <span class="pr-2">خروج از حساب کاربری</span>
                        </b-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </b-popover>
            </div>

            <b-button
              v-else
              variant="main"
              class="hide-mobile"
              @click="SHOW_MODAL()"
            >
              {{ $t('nav.login') }}
            </b-button>

            <!--             <b-button v-else-if="$route.name !=='login'" variant="main" class="py-1 px-lg-4" @click="logout()">
              {{ $t('nav.logout') }}
            </b-button> -->
          </div>
        </div>
      </div>
      <ul
        v-if="categories.includes($route.path)"
        class="d-md-none category-menu-mobile mt-5"
      >
        <li>
          <nuxt-link to="/genres">
            {{ $t('new.genres') }}
          </nuxt-link>
        </li>
        <!--         <li>
          <nuxt-link to="/lives">
            {{ $t('new.lives') }}
          </nuxt-link>
        </li> -->
        <li>
          <nuxt-link to="/casts/iranian-actors">
            {{ $t('new.iranianactors') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/casts/foreign-actors">
            {{ $t('new.foreignactors_mobile') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/casts/directors">
            {{ $t('new.directors') }}
          </nuxt-link>
        </li>
      </ul>
      <ul
        v-if="profile.includes($route.path)"
        class="container d-md-none category-menu-mobile category-menu-mobile-setting mt-5 pt-md-3 pt-lg-5 p- app_container_pricing_res"
      >
        <li class="mr-3">
          <nuxt-link to="/profile"> لیست‌های من </nuxt-link>
        </li>
        <li v-show="showpayments" class="mr-3">
          <nuxt-link to="/payments"> پرداخت ها </nuxt-link>
        </li>
        <li class="mr-3">
          <nuxt-link to="/profile/settings">
            {{ $t('setting.app_setting') }}
          </nuxt-link>
        </li>
        <!--         <li v-if="checkuser.subscription==1" class="mr-3">
          <nuxt-link to="/profile/plans">
            {{ $t('new.prices') }}
          </nuxt-link>
        </li> -->
        <!--         <li v-if="$i18n.locale=='fa'" class="mr-3">
          <nuxt-link to="/profile/internet">
            {{ $t('new.internet') }}
          </nuxt-link>
        </li> -->
      </ul>
    </header>
    <Login
      v-if="!$auth.loggedIn && $route.name !== 'login'"
      :show="showModal"
      :staticmodal="false"
      @hide-modal="HIDE_MODAL"
    />
    <Credit
      v-if="$auth.loggedIn"
      :show="showCreditModal"
      @hide-modal="HIDE_MODAL_CREDIT"
    />
    <Subscription
      :show="showSubscriptionModal"
      @hide-modal="HIDE_MODAL_SUBSCRIPTION"
    />
    <DirectDebit
      v-if="$auth.loggedIn"
      :show="showDirectDebitModal"
      @hide-modal="HIDE_MODAL_DIRECTDEBIT"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Login from '../components/Login'
import Credit from '../components/Credit'
import DirectDebit from '../components/DirectDebit'
import Subscription from '../components/Subscription'

export default {
  components: {
    Login,
    Credit,
    DirectDebit,
    Subscription,
  },

  data() {
    return {
      query: null,
      categoriesNav: false,
      profileNav: false,
      bannerNav: false,
      scrollCheckTimer: false,
      lastScrollTop: 0,
      lastScroll: 0,
      MenuOpen: false,
      showpayments: true,
      categories: [
        '/genres',
        '/lives',
        '/casts/iranian-actors',
        '/casts/foreign-actors',
        '/casts/directors',
      ],
      profile: [
        '/profile',
        '/payments',
        '/profile/settings',
        '/profile/plans',
        '/profile/internet',
      ],
      banner: [
        'index',
        'cast-id',
        'movie-id',
        'episode-id',
        'series-id',
        'genres-genre',
        'lives-live',
        'lists-list',
      ],
      itemmenu: [
        'callback',
        'movie-download-id',
        'episode-download-id',
        'ekran-id',
        'movie-id',
        'episode-id',
        'series-id',
      ],
    }
  },
  computed: {
    ...mapGetters({ showModal: 'login/showModal' }),
    ...mapGetters({ showCreditModal: 'credit/showModal' }),
    ...mapGetters({ showDirectDebitModal: 'directdebit/showModal' }),
    ...mapGetters({ showSubscriptionModal: 'subscription/showModal' }),
    ...mapGetters({ content_subscription: 'content_subscription' }),
    ...mapGetters({ my_credit: 'my_credit' }),
  },

  watch: {
    '$route.path': function () {
      this.Nav()

      document.body.classList.remove('scroll-up')
      document.body.classList.remove('scroll-down')
    },
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {
    this.Nav()
    window.addEventListener('scroll', this.handleScroll)

    if (this.$route.params.search) this.query = this.$route.params.search

    document.body.classList.add('hfixed')
    // document.body.classList.add("header-fixed")

    // document.body.classList.add("scroll-up")
  },
  methods: {
    categoriesHover() {
      if (this.profileNav) {
        this.profileNav = false
      }
    },
    categoriesleave() {
      this.Nav()
    },
    handleScroll(e) {
      var footer = document.getElementsByClassName('footer-sticky')

      if (footer.length) {
        if (
          document.documentElement.scrollTop + window.innerHeight >=
          document.documentElement.scrollHeight - 100
        ) {
          footer[0].classList.add('d-none')
        } else if (
          document.documentElement.scrollTop + window.innerHeight <
          document.documentElement.scrollHeight - 100
        ) {
          footer[0].classList.remove('d-none')
        }
      }
      var delta
      if (this.scrollCheckTimer) {
        clearTimeout(this.scrollCheckTimer)
      }

      var st = window.pageYOffset || document.documentElement.scrollTop
      if (st > this.lastScrollTop) {
        delta = 1
        // downscroll code
      } else {
        delta = -1
        // upscroll code
      }
      this.lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling

      this.scrollCheckTimer = setTimeout(() => {
        document.body.classList.remove('s-c')
        document.body.classList.remove('s-h')
        var goftino_w = document.getElementById('goftino_w')
        if (goftino_w) goftino_w.classList.remove('goftino_w_hide')

        // document.body.classList.add(delta > 0 ? 's-c' : 's-h')

        //console.log(document.documentElement.scrollHeight-document.documentElement.clientHeight)

        if (
          document.documentElement.scrollHeight -
            document.documentElement.clientHeight <=
          20
        ) {
          document.body.classList.add('s-h')
        } else if (
          window.innerHeight + window.pageYOffset >=
          document.body.offsetHeight
        ) {
          document.body.classList.add('s-c')
          if (goftino_w) {
            if (delta > 0) {
              goftino_w.classList.remove('goftino_w_hide')
            } else {
              goftino_w.classList.add('goftino_w_hide')
            }
          }
        } else {
          if (goftino_w) goftino_w.classList.add('goftino_w_hide')
          document.body.classList.add('s-h')
        }
      }, 200)

      let height = document.documentElement.scrollHeight
      if (
        height > 780 ||
        !document
          .getElementById('trigger-menu-wrapper')
          .classList.contains('trigger-menu-wrapper2')
      ) {
        var scroll = document.documentElement.scrollTop
        if (scroll >= 100) {
          document.body.classList.add('header-fixed-collapsed')
        }
        if (scroll >= 300) {
          document.body.classList.add('header-fixed')
        } else if (scroll == 0) {
          document.body.classList.remove('header-fixed')
          document.body.classList.remove('header-fixed-collapsed')
        }

        const currentScroll = window.pageYOffset

        if (currentScroll <= 10) {
          document.body.classList.remove('scroll-up')
          document.body.classList.remove('scroll-down')

          return
        }

        if (
          currentScroll > this.lastScroll &&
          !document.body.classList.contains('scroll-down')
        ) {
          // down
          document.body.classList.remove('scroll-up')
          document.body.classList.add('scroll-down')
        } else if (
          currentScroll < this.lastScroll &&
          document.body.classList.contains('scroll-down')
        ) {
          // up
          document.body.classList.remove('scroll-down')
          document.body.classList.add('scroll-up')
        }
        this.lastScroll = currentScroll
      } else {
        document.body.classList.remove('header-fixed')
        document.body.classList.add('header-fixed-collapsed')

        const currentScroll = window.pageYOffset

        if (currentScroll <= 10) {
          document.body.classList.remove('scroll-up')
          document.body.classList.remove('scroll-down')

          return
        } else {
          document.body.classList.add('scroll-down')

          return
        }
      }

      return e
    },
    Nav() {
      if (this.categories.includes(this.$route.path)) {
        this.categoriesNav = true
      } else {
        this.categoriesNav = false
      }

      if (this.profile.includes(this.$route.path)) {
        this.profileNav = true
      } else {
        this.profileNav = false
      }

      if (this.banner.includes(this.$route.name)) {
        this.bannerNav = true
      } else {
        this.bannerNav = false
      }
    },
    HIDE_MODAL() {
      this.$store.dispatch('login/HIDE_MODAL')
    },
    SEARCH() {
      if (this.query && this.query.length > 1) {
        this.$router.push({
          name: 'search-search',
          params: {
            search: this.query,
          },
        })
      }
    },
    changeroute() {
      if (this.$route.name === 'profile') {
        this.$router.push({
          name: 'login',
        })
      }
    },

    refresh() {
      this.$nuxt.refresh()
    },
    SHOW_MODAL() {
      this.$store.dispatch('login/SHOW_MODAL', {
        premessage: null,
        premobile: null,
        preredirect: null,
        prerefresh: false,
      })
    },
    SHOW_MODAL_WITH_DIRECTDEBIT() {
      this.$store.dispatch('login/SHOW_MODAL', {
        premessage: null,
        premobile: null,
        preredirect: null,
        prerefresh: 'directdebit',
      })
    },
    SHOW_MODAL_WITH_SUBSCRIPTION() {
      this.$store.dispatch('login/SHOW_MODAL', {
        premessage: null,
        premobile: null,
        preredirect: null,
        prerefresh: 'subscription',
      })
    },

    SHOW_MODAL_CREDIT() {
      this.$store.dispatch('credit/SHOW_MODAL', { prewallet: null })
    },
    HIDE_MODAL_CREDIT() {
      this.$store.dispatch('credit/HIDE_MODAL')
    },

    SHOW_MODAL_DIRECTDEBIT() {
      this.$store.dispatch('directdebit/SHOW_MODAL', {
        premobile: null,
        forsubscription: false,
        id: null,
        type: null,
        paymentid: 0,
      })
    },
    HIDE_MODAL_DIRECTDEBIT() {
      this.$store.dispatch('directdebit/HIDE_MODAL')
    },
    SHOW_MODAL_SUBSCRIPTION() {
      this.$store.dispatch('subscription/SHOW_MODAL', {
        content_type: '',
        content_id: '',
      })
    },
    HIDE_MODAL_SUBSCRIPTION() {
      this.$store.dispatch('subscription/HIDE_MODAL')
    },
    nightmode(e) {
      if (e == true) this.$colorMode.preference = 'dark'
      else this.$colorMode.preference = 'light'
    },
    async logout() {
      await this.$auth.logout()
      this.$router.go()
    },
    execute_content_filtering() {
      this.$router.go()
    },
    changelang() {
      if (this.$i18n.locale === 'en') {
        this.$i18n.setLocale('fa')
      } else {
        this.$i18n.setLocale('en')
      }
    },
  },
}
</script>
