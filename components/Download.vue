<template>
  <div>
    <b-modal
      id="downloadLinks"
      ref="downloadLinks"
      :centered="staticmodal ? false : true"
      hide-footer
      hide-header
      size="xl"
      :no-close-on-backdrop="staticmodal ? true : false"
      :hide-backdrop="staticmodal ? true : false"
      :no-close-on-esc="staticmodal ? true : false"
      modal-class="modal-download-link"
      :static="staticmodal ? true : false"
      no-enforce-focus
    >
      <div class="download-links">
        <!-- <div class="download-links-poster" :style="'background-image: url(\'https://thumb.upera.shop/thumb?w=800&h=300&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/'+backdrop+'\')'"> -->

        <div
          class="download-links-poster download-links-poster2"
          :style="
            'background-image: url(\'https://thumb.upera.shop/thumb?w=800&h=412&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/' +
            backdrop +
            '\')'
          "
        >
          <div class="download-links-info d-flex align-items-center">
            <div class="download-links-thumbnail">
              <img
                class="download-links-thumbnail"
                :src="
                  'https://thumb.upera.shop/thumb?w=70&h=103&q=100&a=c&src=https://cdn.upera.shop/s3/posters/' +
                  posterf
                "
              />
            </div>
            <div
              v-if="type != 'episode'"
              class="download-links-title font-weight-bold"
            >
              <a href="" class="text-white" @click.prevent="Push(id, type)">
                {{ ChooseLang(name, namefa) }}
              </a>
            </div>
            <div v-else class="download-links-title font-weight-bold">
              <a href="" class="text-white" @click.prevent="Push(id, type)">
                {{
                  ChooseLang(itemdata.series_name, itemdata.series_name_fa)
                }} </a
              ><br />
              <h6 class="text-small">
                {{ ChooseLang(name, namefa) }}
              </h6>
            </div>
          </div>
          <button
            v-show="!staticmodal"
            type="button"
            class="close"
            @click="hideModal"
          >
            <i class="fas fa-times" />
          </button>
        </div>
        <!-- !owned && (!free || (free && (ftb || $route.query.force_to_buy))) &&  -->
        <!-- && (!free || ftb2) -->
        <div
          v-if="
            !cartloading &&
            Object.keys(downloadslist).length > 0 &&
            cart.length > 0 &&
            cart.some(function (el) {
              return downloadslist.some(function (el2) {
                return el.itemid === el2.id
              })
            })
          "
        >
          <div
            class="download-links-body"
            :class="{
              'download-links-body2':
                ($auth.loggedIn || !totalamount) && !lastseason,
            }"
          >
            <div v-if="lastseason" class="row py-4 download-options-wrapper">
              <div v-if="season_num > 1" class="col-sm-6">
                <b-dropdown block :text="seasontitle" variant="dark">
                  <b-dropdown-item
                    v-for="(item, index) in lastseason"
                    :key="index"
                    href="#"
                    :active="selectseriesid == index"
                    @click.prevent="
                      selectseries(index, lastseason[index][0].id)
                    "
                  >
                    فصل {{ index }}
                  </b-dropdown-item>
                </b-dropdown>
              </div>
              <div
                :class="{
                  'col-sm-6': season_num > 1,
                  'col-sm-12': season_num <= 1,
                }"
              >
                <b-dropdown
                  block
                  :text="episodetitle"
                  variant="outline-dark"
                  class="srmb"
                  :class="{
                    scrollable: episode_num > 20,
                    scrollable2: episode_num > 20 && staticmodal,
                  }"
                >
                  <b-dropdown-item
                    v-for="(item, index) in lastseason[selectseriesid]"
                    :key="index"
                    href="#"
                    :active="
                      type == 'episode' &&
                      itemdata.episode_number == item.episode_number
                    "
                    @click.prevent="selectepisode(item.id)"
                  >
                    قسمت {{ item.episode_number }}
                  </b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
            <div
              v-show="!$auth.loggedIn && totalamount"
              class="row download-options-wrapper"
              :class="{ 'py-4': !lastseason }"
            >
              <div class="col-12">
                <div class="position-relative">
                  <label for="premobile">{{ $t('new.enter_mobile') }}</label>
                  <b-form-input
                    id="premobile"
                    ref="focusMe"
                    v-model="mobile"
                    style="text-align: left !important"
                    name="mobile"
                    dir="ltr"
                    class="form-control large text-right mobile-input"
                    :placeholder="$t('download.enter_mobile')"
                    :title="$t('download.enter_mobile')"
                    autofocus
                    @keyup.enter="BUY"
                  />
                  <div v-if="typeof errors === 'string'" class="text-danger">
                    {{ errors }}
                  </div>
                  <div v-else-if="errors && errors.mobile" class="text-danger">
                    {{ errors.mobile[0] }}
                  </div>
                  <div v-else class="invalid-feedback">
                    {{ $t('new.enter_correctly') }}
                  </div>
                </div>
              </div>
            </div>

            <div
              id="download-links-items"
              class="download-links-items"
              :class="{
                'download-links-items2':
                  !$auth.loggedIn && totalamount && !lastseason,
                'download-links-season2':
                  !$auth.loggedIn && totalamount && lastseason,
                'download-links-season':
                  ($auth.loggedIn || !totalamount) && lastseason,
                'download-links-season-num2': season_num == 1,
              }"
            >
              <div class="col-12">
                <svg
                  v-if="buyloading"
                  id="L9"
                  class="svg-loader"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  enable-background="new 0 0 0 0"
                  xml:space="preserve"
                >
                  <path
                    data-v-28f0b4cb=""
                    fill="#373737"
                    d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                    transform="rotate(109.69 50 50)"
                  >
                    <animateTransform
                      data-v-28f0b4cb=""
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      dur="1s"
                      from="0 50 50"
                      to="360 50 50"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>

                <p v-if="message" class="text-danger">
                  {{ message }}
                </p>
              </div>
              <div>
                <div
                  v-for="(item, index) in cart"
                  :key="index"
                  class="download-links-item"
                >
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="row">
                        <div class="col-9">
                          <div class="download-quality font-weight-bold">
                            <a
                              href=""
                              @click.prevent="Push(item.id, item.type)"
                            >
                              {{ item.name }}
                            </a>
                          </div>
                          <div class="download-suitable">
                            {{ item.quality }}
                          </div>
                        </div>
                        <div
                          class="col-3 d-flex justify-end align-items-end text-right"
                        >
                          <div v-if="item.size" class="download-size">
                            {{ item.size }}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="d-flex h-100 align-items-end">
                        <div class="download-link">
                          <a
                            href=""
                            class="text-sm text-danger"
                            @click.prevent="
                              REMOVEFROMCART(item.itemid, item.amount)
                            "
                          >
                            حذف از سبد خرید
                          </a>
                        </div>

                        <div
                          class="copy-link"
                          :class="{
                            'text-right': staticmodal,
                            'text-left': !staticmodal,
                          }"
                        >
                          <span class="overlay_price font-weight-light"
                            ><span class="overlay_price_label position-relative"
                              ><i class="icon-toman" /></span
                            ><span>{{ charAt2(item.amount) }}</span
                            >.{{ substring2(item.amount) }}</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-show="screening.ekran"
                class="col-12 text-info text-justify pt-4"
              >
                توجه: به دلیل حفظ رعایت حقوق صاحبان اثر، فیلم‌های در حال اکران
                در سینما آنلاین قابل دانلود نیست.<br /><br />
                مدت زمان سانس {{ screening.ekran_hour }} ساعت
                <span v-show="screening.ekran_owned" class="text-danger"
                  ><br />زمان باقیمانده تا پایان سانس شما:
                  {{ screening.owned_period_end }} ساعت</span
                >
                <span class="text-danger"
                  ><br />آخرین روز اکران: {{ screening.ekran_period_end }}</span
                >
                <br /><br />
              </div>

              <div class="col-12">
                <p
                  v-show="totalamount && checkuser.tax"
                  class="col-12 text-danger small"
                >
                  + {{ totalamount * 0.1 }} {{ $t('download.toman') }} (10 درصد
                  مالیات بر ارزش افزوده)
                </p>
              </div>

              <header class="headline">
                <h5 class="title font-weight-bold pt-1">انتخاب روش پرداخت</h5>
              </header>
              <div
                v-if="$auth.loggedIn && typeof errors === 'string'"
                class="text-danger"
              >
                {{ errors }}
              </div>
              <div
                v-else-if="$auth.loggedIn && errors && errors.method"
                class="text-danger"
              >
                {{ errors.method[0] }}
              </div>

              <div class="col-12">
                <div class="row position-relative payment_methods">
                  <div class="container">
                    <!-- <div class="text-muted mb-2">انتخاب روش پرداخت:</div> -->
                    <div id="payment-1" class="option">
                      <input
                        id="payment1"
                        v-model="method"
                        type="radio"
                        name="card"
                        value="saman3"
                      />
                      <label for="payment1" aria-label="درگاه بانکی">
                        <span />

                        درگاه بانکی

                        <div class="card card--white card--sm">
                          <div class="card__chip" />
                          <div class="card__content">
                            <div class="card__text">
                              <div class="text__row">
                                <div class="text__loader" />
                                <div class="text__loader" />
                              </div>
                              <div class="text__row">
                                <div class="text__loader" />
                                <div class="text__loader" />
                              </div>
                            </div>
                            <div class="card__symbol">
                              <span />
                              <span />
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                    <!-- <b-tooltip target="payment-1" title="پرداخت با کلیه کارت های بانکی" placement="bottomleft" variant="primary" /> -->

                    <div id="payment-2" class="option">
                      <input
                        id="payment2"
                        v-model="method"
                        type="radio"
                        name="card"
                        value="directdebit"
                      />
                      <label for="payment2" aria-label="پرداخت خودکار">
                        <span />

                        پرداخت خودکار

                        <div class="card card--blue card--sm">
                          <div class="card__chip" />
                          <div class="card__content">
                            <div class="card__text">
                              <div class="text__row">
                                <div class="text__loader" />
                                <div class="text__loader" />
                              </div>
                              <div class="text__row">
                                <div class="text__loader" />
                                <div class="text__loader" />
                              </div>
                            </div>
                            <div class="card__symbol">
                              <span />
                              <span />
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                    <!-- <b-tooltip target="payment-2" title="خرید خودکار در آپرا بدون وارد کردن اطلاعات بانکی" placement="bottomleft" variant="success" /> -->

                    <div id="payment-5" class="option">
                      <input
                        id="payment5"
                        v-model="method"
                        type="radio"
                        name="card"
                        value="credit"
                      />
                      <label for="payment5" aria-label="اعتبار آپرا">
                        <span />

                        موجودی آپرا

                        <div class="card card--white card--sm">
                          <div class="card__chip" />
                          <img src="@/assets/img/logo.svg" />
                        </div>
                      </label>
                    </div>
                    <!-- <b-tooltip target="payment-5" title="خرید با اعتبار آپرا" placement="bottomleft" variant="dark" /> -->

                    <div id="payment-4" class="option">
                      <input
                        id="payment4"
                        v-model="method"
                        type="radio"
                        name="card"
                        value="tally"
                      />
                      <label for="payment4" aria-label="اعتبار تالی">
                        <span />

                        اعتبار تالی

                        <div class="card card--white card--sm">
                          <img src="@/assets/img/tally.png" />
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div v-show="false" class="col-12 p-4 text-right">
                <a href="tel:02191079979"
                  >تلفن پشتیبانی در ساعات اداری:‌ 02191079979</a
                ><br />
                <a href="tel:09022018555"
                  >تلفن پشتیبانی در ساعات غیر اداری:‌ 09022018555</a
                ><br />
                <a href="https://telegram.me/srmweb" target="_blank"
                  >تلگرام پشتیبانی</a
                >
              </div>
            </div>
            <div class="download-links-footer footer-1">
              <div class="download-links-item">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="font-weight-bold d-none d-sm-block">
                      {{ $t('download.amount_payable') }}:
                      <span v-if="checkuser.tax"
                        ><span class="overlay_price font-weight-light"
                          ><span class="overlay_price_label position-relative"
                            ><i class="icon-toman" /></span
                          ><span>{{
                            charAt2(totalamount + totalamount * 0.1)
                          }}</span
                          >.{{
                            substring2(totalamount + totalamount * 0.1)
                          }}</span
                        ></span
                      >
                      <span v-else
                        ><span class="overlay_price font-weight-light"
                          ><span class="overlay_price_label position-relative"
                            ><i class="icon-toman" /></span
                          ><span>{{ charAt2(totalamount) }}</span
                          >.{{ substring2(totalamount) }}</span
                        ></span
                      >

                      <svg
                        v-if="buyloading"
                        id="L9"
                        class="svg-loader"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        enable-background="new 0 0 0 0"
                        xml:space="preserve"
                      >
                        <path
                          data-v-28f0b4cb=""
                          fill="#373737"
                          d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                          transform="rotate(109.69 50 50)"
                        >
                          <animateTransform
                            data-v-28f0b4cb=""
                            attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            dur="1s"
                            from="0 50 50"
                            to="360 50 50"
                            repeatCount="indefinite"
                          />
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <button
                      v-if="buyloading"
                      class="btn btn-secondary btn-block"
                      type="button"
                      disabled
                    >
                      <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      /><span class="sr-only">Loading...</span>
                    </button>
                    <button
                      v-else-if="disable_button || !totalamount"
                      disabled
                      class="btn btn-secondary btn-block"
                    >
                      <span v-if="!screening.ekran">{{
                        $t('download.pay_download')
                      }}</span
                      ><span v-else>پرداخت و تماشا</span>

                      <i class="fa fa-money-bill pr-2" />
                    </button>

                    <button
                      v-else
                      class="btn btn-secondary btn-block"
                      @click="BUY"
                    >
                      <span v-if="!screening.ekran">{{
                        $t('download.pay_download')
                      }}</span
                      ><span v-else>پرداخت و تماشا</span>

                      <i class="fa fa-money-bill pr-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div
            class="download-links-body"
            :class="{
              'download-links-body2': !lastseason,
              'download-links-0': divcount == 0,
              'download-links-2': divcount == 2,
              'download-links-3': divcount == 3,
            }"
          >
            <div v-if="lastseason" class="row py-4 download-options-wrapper">
              <div v-if="season_num > 1" class="col-sm-6">
                <b-dropdown block :text="seasontitle" variant="dark">
                  <b-dropdown-item
                    v-for="(item, index) in lastseason"
                    :key="index"
                    href="#"
                    :active="selectseriesid == index"
                    @click.prevent="
                      selectseries(index, lastseason[index][0].id)
                    "
                  >
                    فصل {{ index }}
                  </b-dropdown-item>
                </b-dropdown>
              </div>
              <div
                :class="{
                  'col-sm-6': season_num > 1,
                  'col-sm-12': season_num <= 1,
                }"
              >
                <b-dropdown
                  block
                  :text="episodetitle"
                  variant="outline-dark"
                  class="srmb"
                  :class="{
                    scrollable: episode_num > 20,
                    scrollable2: episode_num > 20 && staticmodal,
                  }"
                >
                  <b-dropdown-item
                    v-for="(item, index) in lastseason[selectseriesid]"
                    :key="index"
                    href="#"
                    :active="
                      type == 'episode' &&
                      itemdata.episode_number == item.episode_number
                    "
                    @click.prevent="selectepisode(item.id)"
                  >
                    قسمت {{ item.episode_number }}
                  </b-dropdown-item>
                </b-dropdown>
              </div>
            </div>

            <div
              id="download-links-items"
              class="download-links-items"
              :class="{ 'download-links-season-num1': season_num == 1 }"
            >
              <div class="col-12">
                <svg
                  v-if="cartloading || downloadloading"
                  id="L9"
                  class="svg-loader"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  enable-background="new 0 0 0 0"
                  xml:space="preserve"
                >
                  <path
                    data-v-28f0b4cb=""
                    fill="#373737"
                    d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                    transform="rotate(109.69 50 50)"
                  >
                    <animateTransform
                      data-v-28f0b4cb=""
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      dur="1s"
                      from="0 50 50"
                      to="360 50 50"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>

                <span
                  v-if="!screening.ekran && !cartloading"
                  class="text-info h6 text-justify"
                  >حجم مصرفی: {{ fullrate_data.fa.title }}<br /><br
                /></span>
                <!-- !ftb2 &&  -->

                <!-- && trafficoo -->

                <span
                  v-if="
                    !ftb2 &&
                    !cartloading &&
                    traffic &&
                    !downloadslist.some(function (el) {
                      return el.owned === 1
                    })
                  "
                  class="text-justify"
                  >دسترسی بدون خرید، با اینترنت {{ operator_fullrate
                  }}<br /><button
                    class="btn btn-secondary text-right"
                    @click="SHOWAGAIN(0)"
                  >
                    بررسی اتصال اینترنت
                    <i class="fas fa-sync-alt" /></button
                  ><br />و یا خرید با اینترنت فعلی شما:<br /><br
                /></span>

                <span
                  v-if="screening.ekran && !cartloading"
                  class="text-info h6 text-justify"
                  >مصرف اینترنت جهت تماشای آنلاین
                  {{ fullrate_data.fa.title }} می باشد<br /><br
                /></span>

                <span
                  v-if="!cartloading && screening.ekran && presale"
                  class="text-danger h6 text-justify"
                  >برای تماشا از خانه، سانس سینمای آنلاین
                  {{ screening.ekran_hour }} ساعته است، طوری تنظیم کنید که
                  تماشای کامل فیلم را در سانس خود از دست ندهید.<br /><br
                /></span>

                <span
                  v-if="!cartloading && !presale && pass"
                  class="text-danger h6 text-justify"
                  >رمز پیش خرید:
                  <span class="text-primary">{{ pass }}</span> (مخصوص کسانی که
                  قبلا خرید کرده اند)<br /><br
                /></span>
              </div>
              <!-- && showlinks -->
              <div
                v-if="
                  !cartloading &&
                  Object.keys(downloadslist).length > 0 &&
                  (downloadslist.some(function (el) {
                    return el.owned === 1
                  }) ||
                    !cart.some(function (el) {
                      return downloadslist.some(function (el2) {
                        return el.itemid === el2.id
                      })
                    }))
                "
              >
                <div
                  v-for="(item, index) in downloadslist"
                  :key="index"
                  class="download-links-item"
                >
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="row">
                        <div v-if="screening.ekran" class="col-9">
                          <div class="download-quality font-weight-bold">
                            بلیط اکران
                          </div>
                          <div class="download-suitable">تماشای آنلاین</div>
                        </div>
                        <div
                          v-else-if="item.isfolder && type != 'series'"
                          class="col-9"
                        >
                          <div class="download-quality font-weight-bold">
                            {{ $t('download.all_qualities') }}
                          </div>
                          <div class="download-suitable">
                            {{ item.info }}
                          </div>
                        </div>
                        <div v-else class="col-9">
                          <div class="download-quality font-weight-bold">
                            {{ item.quality }}
                          </div>
                          <div v-show="showinfo" class="download-suitable">
                            {{ item.info }}
                          </div>
                        </div>
                        <div
                          class="col-3 d-flex justify-end align-items-end text-right"
                        >
                          <div v-if="item.isfolder == 0" class="download-size">
                            {{ item.size }}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      v-if="
                        item.owned == 1 &&
                        item.isfolder == 1 &&
                        !screening.ekran
                      "
                      class="col-sm-6"
                    >
                      <div class="d-flex h-100 align-items-end">
                        <div class="download-full-link">
                          <button class="btn btn-info btn-block">
                            خریداری شده
                            <i class="icon-download" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      v-else-if="item.owned == 1 && item.isfolder == 1"
                      class="col-sm-6"
                    >
                      <div class="d-flex h-100 align-items-end">
                        <div class="download-full-link">
                          <button
                            class="btn btn-secondary btn-block"
                            @click="EKRAN(screening.ekran_id)"
                          >
                            تماشا
                            <i class="icon-play" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div v-else-if="item.owned == 1" class="col-sm-6">
                      <div class="d-flex h-100 align-items-end">
                        <div class="download-link">
                          <button
                            class="btn btn-secondary btn-block"
                            @click="LINK_DOWNLOAD(item.id)"
                          >
                            {{ $t('show.download') }}
                            <i class="icon-download" />
                          </button>
                        </div>
                        <div class="copy-link">
                          <button
                            class="btn btn-copy btn-block"
                            @click="COPY_DOWNLOAD(item.id)"
                          >
                            کپی لینک
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      v-else-if="
                        cart.some(function (el) {
                          return el.itemid === item.id
                        })
                      "
                      class="col-sm-6"
                    >
                      <div class="d-flex h-100 align-items-end">
                        <div class="download-full-link">
                          <button
                            class="btn btn-secondary btn-block"
                            @click="REMOVEFROMCART(item.id, item.amount)"
                          >
                            {{ $t('download.cancel') }}
                            <i class="icon-download" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div v-else class="col-sm-6">
                      <div class="d-flex h-100 align-items-end">
                        <div class="download-link">
                          <button
                            class="btn btn-danger btn-block"
                            @click="
                              ADDTOCART(
                                item.id,
                                item.amount,
                                item.size,
                                item.quality
                              )
                            "
                          >
                            <span v-if="presale">{{
                              $t('download.presale')
                            }}</span
                            ><span v-else>{{ $t('download.buy') }}</span
                            ><span v-if="screening.ekran"> بلیط</span
                            ><span v-else> و دانلود</span>
                            <i
                              v-if="screening.ekran"
                              class="fa fa-ticket-alt pr-2"
                            />
                            <i v-else class="icon-download" />
                          </button>
                        </div>

                        <div
                          class="copy-link"
                          :class="{
                            'text-right': staticmodal,
                            'text-left': !staticmodal,
                          }"
                        >
                          <span class="overlay_price font-weight-light"
                            ><span class="overlay_price_label position-relative"
                              ><i class="icon-toman" /></span
                            ><span>{{ charAt2(item.amount) }}</span
                            >.{{ substring2(item.amount) }}</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="!cartloading && notes" class="col-12">
                <span class="text-info h6 text-justify"
                  ><br />{{ notes }}<br /><br
                /></span>
              </div>
            </div>
            <div
              v-if="!cartloading"
              class="download-links-footer"
              :class="{ 'footer-0': divcount == 0, 'footer-1': divcount == 1 }"
            >
              <div v-show="play_button" class="download-links-item">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="font-weight-bold d-none d-sm-block">
                      کیفیت متناسب با سرعت اینترنت
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <a
                      v-if="type == 'movie'"
                      href=""
                      class="btn btn-main btn-block"
                      @click.prevent="Push2(id, type)"
                    >
                      نمایش فیلم
                      <i class="icon-play" />
                    </a>
                    <a
                      v-else-if="type == 'series'"
                      class="btn btn-main btn-block"
                      href=""
                      @click.prevent="Push2(season[1][0].id, 'episode')"
                    >
                      نمایش قسمت اول سریال
                      <i class="icon-play" />
                    </a>
                    <a
                      v-else
                      href=""
                      class="btn btn-main btn-block"
                      @click.prevent="Push2(id, type)"
                    >
                      نمایش این قسمت
                      <i class="icon-play" />
                    </a>
                  </div>
                </div>
              </div>
              <div v-show="sub_button" class="download-links-item">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="font-weight-bold d-none d-sm-block">
                      دسترسی همزمان به ۳۰۰۰۰ عنوان فیلم و اپیزود
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <a
                      href=""
                      class="btn btn-main btn-block"
                      @click.prevent="UPERAPLUS(id, type)"
                    >
                      خرید اشتراک<span v-if="fullrate_data.rate == 1">
                        (حجم مصرفی: نیم بها)</span
                      >
                      <i class="fa fa-money-bill pr-2" />
                    </a>
                  </div>
                </div>
              </div>
              <div v-show="show_free" class="download-links-item">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="font-weight-bold d-none d-sm-block">
                      همه کیفیت ها
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <button
                      class="btn btn-secondary btn-block"
                      @click="SHOWAGAIN(0)"
                    >
                      دانلود رایگان
                      <i class="icon-download" />
                    </button>
                  </div>
                </div>
              </div>
              <div v-show="show_buy" class="download-links-item">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="font-weight-bold d-none d-sm-block">
                      خرید و دانلود
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <button
                      class="btn btn-danger btn-block"
                      @click="SHOWAGAIN(1)"
                    >
                      خرید و دانلود با حجم {{ fullrate_data.fa.alternative }}
                      <i class="fa fa-money-bill pr-2" />
                    </button>
                  </div>
                </div>
              </div>
              <div v-show="ussd" class="download-links-item">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="font-weight-bold d-none d-sm-block">
                      خرید با USSD
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <a :href="'tel:' + ussd" class="btn btn-danger btn-block">
                      خرید تکی از طریق هف هشتاد
                      <i class="fa fa-money-bill pr-2" />
                    </a>
                  </div>
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
import { mapGetters } from 'vuex'
export default {
  props: {
    show: Boolean,
    staticmodal: Boolean,
    owned: {
      type: Number,
      default: 0,
    },
    traffic: {
      type: Number,
      default: 0,
    },
    ir: {
      type: Number,
      default: 0,
    },
    // hour: {
    //     type: Number,
    //     default: 0
    // },
    trafficoo: {
      type: Number,
      default: 0,
    },
    vod: {
      type: Number,
      default: 0,
    },
    free: {
      type: Number,
      default: 0,
    },
    ftb: Boolean,
    id: {
      type: String,
      default: null,
    },
    posterf: {
      type: String,
      default: null,
    },
    backdrop: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    namefa: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
    redirect: {
      type: String,
      default: null,
    },
    season: {
      type: Object,
      default: null,
    },
    itemdata: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      payment_selected: 'radio1',
      payment_options: [
        { text: 'Radio 1', value: 'radio1' },
        { text: 'Radio 3', value: 'radio2' },
        { text: 'Radio 3 (disabled)', value: 'radio3', disabled: true },
        { text: 'Radio 4', value: 'radio4' },
      ],
      castShow: null,
      method: 'saman3',
      methods: [
        { text: 'درگاه بانکی', value: 'saman3' },
        { text: 'موجودی', value: 'credit' },
      ],
      mobile: null,
      login: 0,
      ftb2: 0,
      mref: 0,
      i: 0,
      downloadloading: false,
      message: null,
      premessage: null,
      buyloading: null,
      disable_button: false,
      operator_fullrate: 'همراه اول یا ایرانسل',
      season_num: 0,
      episode_num: 0,
      showinfo: true,
      lastseason: {},
      showBoxAnimation: false,
      selectseriesid: 1,
      seasontitle: 'فصل 1',
      episodetitle: 'قسمت ها',
      directdebit_payment_id: 0,
    }
  },

  computed: {
    ...mapGetters({ downloadslist: 'download/downloadslist' }),
    ...mapGetters({ cartloading: 'download/cartloading' }),
    ...mapGetters({ cart: 'download/cart' }),
    ...mapGetters({ presale: 'download/presale' }),
    ...mapGetters({ presale_date: 'download/presale_date' }),
    ...mapGetters({ pass: 'download/pass' }),
    ...mapGetters({ title_poster: 'download/title_poster' }),
    ...mapGetters({ screening: 'download/screening' }),
    ...mapGetters({ ussd: 'download/ussd' }),
    ...mapGetters({ fullrate_data: 'download/fullrate_data' }),
    ...mapGetters({ show_free: 'download/show_free' }),
    ...mapGetters({ play_button: 'download/play_button' }),
    ...mapGetters({ sub_button: 'download/sub_button' }),
    ...mapGetters({ show_buy: 'download/show_buy' }),
    ...mapGetters({ notes: 'download/notes' }),
    ...mapGetters({ totalamount: 'download/total_amount' }),
    ...mapGetters({ divcount: 'download/divcount' }),
  },

  watch: {
    show(val) {
      if (val !== null && this.show) {
        this.showModal()
      } else {
        this.hideModal()
      }
    },
    show_free() {
      this.checkdiv()
    },
    show_buy() {
      this.checkdiv()
    },
  },

  mounted() {
    // if(this.show){
    //             if (this.$auth.loggedIn) {
    //                 this.$store.dispatch("download/GET_DOWNLOAD", {id: this.id,type:this.type,quality:this.$route.query.quality,force_to_buy:this.$route.query.force_to_buy})
    //             } else {
    //                 this.$store.dispatch("download/GET_GHOST_DOWNLOAD", {id: this.id,type:this.type,quality:this.$route.query.quality,force_to_buy:this.$route.query.force_to_buy})
    //             }
    //             this.$route.query.quality=0
    //             this.$route.query.force_to_buy=0
    //   }

    this.mref = this.$cookiz.get('ref')

    if (this.checkuser.operator_fullrate) {
      this.operator_fullrate = this.checkuser.operator_fullrate
    }

    if (this.staticmodal) {
      this.showModal()

      document
        .getElementsByClassName('modal-content')[0]
        .removeAttribute('tabindex')
    }

    if (this.type == 'episode') {
      this.selectseriesid = this.itemdata.season_number
      this.seasontitle = 'فصل ' + this.selectseriesid
      this.episodetitle = 'قسمت ' + this.itemdata.episode_number
    } else if (this.type == 'series' && this.season) {
      this.selectseriesid = Object.keys(this.season)[0]
      this.seasontitle = 'فصل ' + this.selectseriesid
    }

    this.$refs['downloadLinks'].$on('hide', () => {
      window.removeEventListener('resize', this.Resize)
      this.$store.dispatch('download/RESET_DOWNLOAD')

      document.getElementsByClassName('default')[0].classList.remove('blure')
      this.$emit('hide-modal', null)
    })
    if (document.getElementsByClassName('download-options-label').length)
      document
        .getElementsByClassName('download-options-label')[0]
        .classList.remove('btn')

    document.body.classList.add('loaded')
  },

  methods: {
    Resize(e) {
      let vh = window.innerHeight * 0.01
      let element = document.getElementsByClassName('download-links')

      if (element.length) element[0].style.setProperty('--vh', `${vh}px`)

      return e
    },
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale == 'fa') return fa
      else return en
    },
    Push(id, type) {
      // if(this.$route.query.ref){
      //   return
      // }
      if (this.staticmodal || id != this.id) {
        // this.hideModal()

        this.$router.push({
          name: type + '-id',
          params: {
            id: id,
          },
        })
      }
    },
    UPERAPLUS(id, type) {
      // if(this.checkuser.subscription){
      this.$store.dispatch('subscription/SHOW_MODAL', {
        content_type: this.type,
        content_id: this.id,
      })
      return id + type
      // }else{
      //   var ref=this.$cookiz.get('refb')
      //   if(!ref || isNaN(ref))
      //     ref=0

      //   var url
      //   if(this.$route.query.ref)
      //     url='https://plus.upera.tv/'+type+'/'+id+'?force_subscription=1&ref='+this.$route.query.ref
      //   else if(ref)
      //     url='https://plus.upera.tv/'+type+'/'+id+'?force_subscription=1&ref='+ref
      //   else
      //     url='https://plus.upera.tv/'+type+'/'+id+'?force_subscription=1'

      //   window.location.href = url
      // }
    },
    sizeofobj(obj) {
      if (!obj) return 0
      var size = 0,
        key
      for (key in obj) {
        if ({}.propertyIsEnumerable.call(obj, key)) size++
      }
      return size
    },
    Push2(id, type) {
      // this.hideModal()
      this.$router.push({
        name: type + '-show-id',
        params: {
          id: id,
        },
      })
      // if(this.$route.query.ref){
      //   this.$router.push({
      //       name: type+"-show-id",
      //       params: {
      //           id: id
      //       },
      //       query: {
      //           ref: this.$route.query.ref
      //       }
      //   })
      // }else{
      //   this.$router.push({
      //       name: type+"-show-id",
      //       params: {
      //           id: id
      //       }
      //   })
      // }
    },
    charAt2(string) {
      string = String(string)
      var l = string.length
      if (l == 4) return string.substring(0, 1)
      else if (l == 5) return string.substring(0, 2)
      else return string.substring(0, 3)
    },
    substring2(string) {
      string = String(string)
      var l = string.length
      if (l == 4) return string.substring(1)
      else if (l == 5) return string.substring(2)
      else return string.substring(3)
    },
    showModal() {
      this.$refs['downloadLinks'].show()
      if (!this.staticmodal)
        document.getElementsByClassName('default')[0].classList.add('blure')

      if (window.innerHeight <= 500) {
        this.lastseason = null
      } else {
        this.lastseason = this.season
      }

      this.$refs['downloadLinks'].$on('shown', () => {
        window.addEventListener('resize', this.Resize)
        this.Resize('e')
        if (this.lastseason) {
          this.season_num = this.sizeofobj(this.lastseason)
          this.episode_num = this.sizeofobj(
            this.lastseason[this.selectseriesid]
          )
        }
      })

      if (!this.ftb) this.ftb2 = 0
      else this.ftb2 = 1

      if (this.ftb2 != 1 && this.$route.query.force_to_buy == 1) this.ftb2 = 1

      if (this.$auth.loggedIn) {
        this.$store.dispatch('download/GET_DOWNLOAD', {
          id: this.id,
          type: this.type,
          quality: this.$route.query.quality,
          force_to_buy: this.ftb2,
        })
      } else {
        this.$store.dispatch('download/GET_GHOST_DOWNLOAD', {
          id: this.id,
          type: this.type,
          quality: this.$route.query.quality,
          force_to_buy: this.ftb2,
        })
      }

      this.checkdiv()

      if (this.$route.query.quality) {
        this.showinfo = false
      }

      this.$route.query.quality = 0
      this.$route.query.force_to_buy = 0
    },
    hideModal() {
      this.$refs['downloadLinks'].hide()
      this.$emit('hide-modal', null)
      this.$store.dispatch('download/RESET_DOWNLOAD')
      document.getElementsByClassName('default')[0].classList.remove('blure')
    },

    ADDTOCART(itemid, amount, size, quality) {
      var name

      if (this.type == 'episode') {
        if (this.itemdata.season_number == 1)
          name =
            this.ChooseLang(
              this.itemdata.series_name,
              this.itemdata.series_name_fa
            ) +
            ',قسمت ' +
            this.itemdata.episode_number
        else
          name =
            this.ChooseLang(
              this.itemdata.series_name,
              this.itemdata.series_name_fa
            ) +
            ',قسمت ' +
            this.itemdata.episode_number +
            ' فصل ' +
            this.itemdata.season_number
      } else name = this.ChooseLang(this.name, this.namefa)

      this.$store.dispatch('download/ADD_NEW_TO_DOWNLOAD', {
        itemid: itemid,
        amount: amount,
        size: size,
        name: name,
        quality: quality,
        id: this.id,
        type: this.type,
        poster:
          'https://thumb.upera.shop/thumb?w=70&h=103&q=100&a=c&src=https://cdn.upera.shop/s3/posters/' +
          this.posterf,
      })

      document.getElementById('download-links-items').scrollTop = 0
    },
    REMOVEFROMCART(itemid, amount) {
      this.$store.dispatch('download/DELETE_FROM_DOWNLOAD', {
        itemid: itemid,
        amount: amount,
      })
      document.getElementById('download-links-items').scrollTop = 0
    },
    EKRAN(ekranid) {
      // this.hideModal()
      this.$router.push({
        name: 'ekran-id',
        params: {
          id: ekranid,
        },
      })
    },
    SHOWAGAIN(force_to_buy) {
      this.ftb2 = force_to_buy

      if (this.$auth.loggedIn) {
        this.$store.dispatch('download/GET_DOWNLOAD', {
          id: this.id,
          type: this.type,
          quality: 0,
          force_to_buy: force_to_buy,
        })
      } else {
        this.$store.dispatch('download/GET_GHOST_DOWNLOAD', {
          id: this.id,
          type: this.type,
          quality: 0,
          force_to_buy: force_to_buy,
        })
      }

      this.checkdiv()
    },
    checkdiv() {
      var free
      free = this.free
      if (this.show_free == 1) free = 0

      if (this.show_buy == 1) free = 1

      if (
        this.show_free == 0 &&
        (this.owned ||
          (free && this.vod) ||
          (this.vod && this.checkuser.access))
      ) {
        this.$store.dispatch('download/ADD_DIVCOUNT')
      } else {
        this.$store.dispatch('download/MIN_DIVCOUNT')
      }

      // && (!free || this.show_free==1)
      if (!this.owned && this.vod && !this.checkuser.access) {
        this.$store.dispatch('download/ADD_DIVCOUNT2')
      } else {
        this.$store.dispatch('download/MIN_DIVCOUNT2')
      }
    },
    DOWNLOAD(itemid) {
      this.downloadloading = true
      var api_url
      if (this.$auth.loggedIn) {
        api_url = '/get/download'
      } else {
        api_url = '/ghost/get/download'
      }
      var traffic_button
      if (this.fullrate_data.rate) {
        traffic_button = 'دانلود ' + this.fullrate_data.fa.title
      } else {
        traffic_button = 'دانلود'
      }

      var ref = this.$cookiz.get('ref')
      if (!ref || isNaN(ref)) ref = 0

      this.$axios
        .post(api_url, {
          itemid: itemid,
          ref: ref,
          content: this.$route.query.content,
        })
        .then(
          (res) => {
            this.downloadloading = false
            if (res.status === 200) {
              var dlsmbuttons = {
                back: {
                  text: this.$t('player.back'),
                  value: 'back',
                  closeModal: true,
                  className: 'swal-back',
                },
              }

              if (res.data.data.url2) {
                Object.assign(dlsmbuttons, {
                  dl2: {
                    text: 'لینک کمکی',
                    value: 'dl2',
                    closeModal: true,
                  },
                })
              }

              Object.assign(dlsmbuttons, {
                copy: {
                  text: 'کپی لینک',
                  value: 'copy',
                  closeModal: true,
                },
              })

              Object.assign(dlsmbuttons, {
                dl1: {
                  text: traffic_button,
                  value: 'dl1',
                  closeModal: true,
                  className: 'btn-success',
                },
              })

              this.$swal({
                title: this.ChooseLang(this.name, this.namefa) + '!',
                icon: 'success',
                dangerMode: false,
                buttons: dlsmbuttons,
              }).then((value) => {
                switch (value) {
                  case 'back':
                    this.$swal.close()
                    break

                  case 'dl1':
                    window.location.href = res.data.data.url
                    break

                  case 'dl2':
                    window.location.href = res.data.data.url2
                    break

                  case 'copy':
                    this.copy(res.data.data.url)
                    break
                  default:
                    this.$swal.close()
                    break
                }
              })
            } else {
              this.message = res.data.message
            }
          },
          (error) => {
            this.downloadloading = false
            return error
          }
        )
    },
    LINK_DOWNLOAD(itemid) {
      this.downloadloading = true
      var api_url
      if (this.$auth.loggedIn) {
        api_url = '/get/download'
      } else {
        api_url = '/ghost/get/download'
      }
      var ref = this.$cookiz.get('ref')
      if (!ref || isNaN(ref)) ref = 0

      this.$axios
        .post(api_url, {
          itemid: itemid,
          ref: ref,
          content: this.$route.query.content,
        })
        .then(
          (res) => {
            this.downloadloading = false
            if (res.status === 200) {
              window.location.href = res.data.data.url
            } else {
              this.message = res.data.message
            }
          },
          (error) => {
            this.downloadloading = false
            return error
          }
        )
    },
    COPY_DOWNLOAD(itemid) {
      this.downloadloading = true
      var api_url
      if (this.$auth.loggedIn) {
        api_url = '/get/download'
      } else {
        api_url = '/ghost/get/download'
      }
      var ref = this.$cookiz.get('ref')
      if (!ref || isNaN(ref)) ref = 0
      this.$axios
        .post(api_url, {
          itemid: itemid,
          ref: ref,
          content: this.$route.query.content,
        })
        .then(
          (res) => {
            this.downloadloading = false
            if (res.status === 200) {
              this.copy(res.data.data.url)
            } else {
              this.message = res.data.message
            }
          },
          (error) => {
            this.downloadloading = false
            return error
          }
        )
    },
    SHOW_MODAL_CREDIT() {
      this.$store.dispatch('credit/SHOW_MODAL', { prewallet: null })
    },
    HIDE_MODAL_CREDIT() {
      this.$store.dispatch('credit/HIDE_MODAL')
    },
    SHOW_MODAL_DIRECTDEBIT() {
      this.$store.dispatch('directdebit/SHOW_MODAL', {
        premobile: this.mobile,
        forsubscription: false,
        id: this.id,
        type: this.type,
        paymentid: this.directdebit_payment_id,
      })
    },
    HIDE_MODAL_DIRECTDEBIT() {
      this.$store.dispatch('directdebit/HIDE_MODAL')
    },
    BUY() {
      if (this.mobile) {
        this.mobile = this.mobile.replace(/۱/g, '1')
        this.mobile = this.mobile.replace(/۲/g, '2')
        this.mobile = this.mobile.replace(/۳/g, '3')
        this.mobile = this.mobile.replace(/۴/g, '4')
        this.mobile = this.mobile.replace(/۵/g, '5')
        this.mobile = this.mobile.replace(/۶/g, '6')
        this.mobile = this.mobile.replace(/۷/g, '7')
        this.mobile = this.mobile.replace(/۸/g, '8')
        this.mobile = this.mobile.replace(/۹/g, '9')
        this.mobile = this.mobile.replace(/۰/g, '0')
        this.mobile = this.mobile.replace(/\D/g, '')
      }

      var ref = this.$cookiz.get('ref')
      if (!ref || isNaN(ref)) ref = 0

      if (this.method == 'directdebit' && !this.$auth.loggedIn) {
        this.$store.dispatch('login/SHOW_MODAL', {
          premessage: this.premessage,
          premobile: this.mobile,
          preredirect: null,
          prerefresh: 'directdebit',
        })
      } else if (this.method == 'credit' && !this.$auth.loggedIn) {
        this.$store.dispatch('login/SHOW_MODAL', {
          premessage: this.premessage,
          premobile: this.mobile,
          preredirect: null,
          prerefresh: false,
        })
      }
      var api_url
      if (this.$auth.loggedIn) {
        api_url = '/get/buy'
      } else {
        api_url = '/ghost/get/buy'
      }
      this.buyloading = true
      this.$axios
        .post(api_url, {
          cart: this.cart,
          mobile: this.mobile,
          ekran: this.screening.ekran,
          callback_url: location.origin + '/callback?mobile=' + this.mobile,
          method: this.method,
          ref: ref,
        })
        .then(
          (res) => {
            this.buyloading = false
            if (res.status === 200) {
              if (res.data.data.login) {
                this.$store.dispatch('login/SHOW_MODAL', {
                  premessage: this.premessage,
                  premobile: this.mobile,
                  preredirect: null,
                  prerefresh: false,
                })
              } else if (this.method == 'directdebit') {
                if (res.data.data.payment_id) {
                  this.directdebit_payment_id = res.data.data.payment_id
                }
                if (res.data.data.showdirectdebitbox == 1)
                  this.SHOW_MODAL_DIRECTDEBIT()
                else {
                  localStorage.removeItem('_cart')
                  // if(!this.staticmodal)
                  // this.$router.replace({query: { force_download: 1 }})
                  this.$router.go()
                }
              } else if (this.method == 'credit') {
                localStorage.removeItem('_cart')
                if (this.$auth.loggedIn) {
                  // if(!this.staticmodal)
                  // this.$router.replace({query: { force_download: 1 }})
                  this.$router.go()
                } else {
                  this.$swal(
                    'لینک های دانلود پیامک شدند. لطفا جهت دسترسی از طریق سایت وارد سایت شوید',
                    {
                      icon: 'success',
                    }
                  )
                }
              } else {
                window.location.href = res.data.data.pay_url
              }
            } else {
              this.message = res.data.message
            }
          },
          (error) => {
            this.buyloading = false
            this.premessage = error.response.data.message
            if (error.response.data.login)
              this.$store.dispatch('login/SHOW_MODAL', {
                premessage: this.premessage,
                premobile: this.mobile,
                preredirect: null,
                prerefresh: false,
              })
            else if (
              (this.$auth.loggedIn ||
                (this.method != 'credit' && this.method != 'directdebit')) &&
              error.response.data.message
            ) {
              var dlsmbuttons = {
                back: {
                  text: 'ok',
                  value: 'back',
                  closeModal: true,
                  className: 'swal-back',
                },
              }

              if (this.method == 'credit') {
                Object.assign(dlsmbuttons, {
                  addcredit: {
                    text: 'افزایش موجودی آپرا',
                    value: 'addcredit',
                    closeModal: true,
                  },
                })
              }

              this.$swal({
                icon: 'error',
                title: error.response.data.message,
                dangerMode: true,
                buttons: dlsmbuttons,
              }).then((value) => {
                switch (value) {
                  case 'back':
                    this.$swal.close()
                    if (!this.$auth.loggedIn) this.$refs.focusMe.focus()
                    break

                  case 'addcredit':
                    this.SHOW_MODAL_CREDIT()
                    this.$swal.close()
                    break

                  default:
                    this.$swal.close()
                    if (!this.$auth.loggedIn) this.$refs.focusMe.focus()
                    break
                }
              })
            }
          }
        )
    },
    async copy(text) {
      try {
        await this.$copyText(text)
        this.$swal('لینک کپی شد', {
          icon: 'success',
        })
      } catch (e) {
        this.$swal('لینک در دیوایس شما قابل کپی نیست.')
        return e
      }
    },
    selectseries(id, num) {
      if (num && num != this.id) {
        // this.hideModal()

        this.$router.push({
          name: 'episode-download-id',
          params: {
            id: num,
          },
        })
        // if(this.$route.query.ref){
        //   this.$router.push({
        //       name:"episode-download-id",
        //       params: {
        //           id: num
        //       },
        //       query: {
        //           ref: this.$route.query.ref,
        //           content: this.$route.query.content
        //       }
        //   })
        // }else{
        //   this.$router.push({
        //       name:"episode-download-id",
        //       params: {
        //           id: num
        //       }
        //   })
        // }
      } else {
        this.selectseriesid = id

        this.seasontitle = 'فصل ' + id
      }
    },

    selectepisode(id) {
      if (id != this.id) {
        // this.hideModal()
        this.$router.push({
          name: 'episode-download-id',
          params: {
            id: id,
          },
        })
        // if(this.$route.query.ref){
        //   this.$router.push({
        //       name:"episode-download-id",
        //       params: {
        //           id: id
        //       },
        //       query: {
        //           ref: this.$route.query.ref,
        //           content: this.$route.query.content
        //       }
        //   })
        // }else{
        //   this.$router.push({
        //       name:"episode-download-id",
        //       params: {
        //           id: id
        //       }
        //   })
        // }
      }
    },
    lottery() {
      if (!this.$auth.loggedIn) {
        this.$store.dispatch('login/SHOW_MODAL', {
          premessage: this.premessage,
          premobile: this.mobile,
          preredirect: null,
          prerefresh: false,
        })
      } else {
        window.location.href = 'https://www.instagram.com/uperatv/'
      }
    },
  },
}
</script>
