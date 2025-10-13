<template>
  <div id="checkcontainer">
    <section class="page page-payment mt-5  pt-lg-5 pt-md-5 mb-5">
      <div v-if="!$auth.loggedIn" class="container-fluid">
        <section id="banner" class="mt-5 pt-5">
          <div class="container">
            <header class="headline mt-5">
              <h5 class="title font-weight-bold">
                {{ $t('new.account') }}
              </h5>
            </header>
            <div class="d-flex flex-column justify-content-center align-items-center">
              <img class="image-profile" src="@/assets/img/profile.png" alt="">
              <!--             <nuxt-link :to="{ path: 'login', query: { redirect: 'profile' }}" class="btn btn-lg btn-main px-4 px-md-4 py-md-2 my-2 mb-4">
              {{ $t('new.login_register') }}
            </nuxt-link> -->

              <a class="btn btn-lg btn-main px-4 px-md-4 py-md-2 my-2 mb-4" href="" @click.prevent="SHOW_MODAL();">
                {{ $t('new.login_register') }}
              </a>
              <p class="text-center h6 font-weight-normal">
                {{ $t('new.loginDescription') }}
              </p>
            </div>
          </div>
        </section>
      </div>
      <div v-else class="container-fluid">
        <div
          class="d-md-flex align-items-md-end justify-content-md-between payment-title-wrapper mt-3 mt-md-5 mb-3"
        >
          <div class="title">
            پرداخت ها
          </div>
          <div class="show-mobile mt-3">
            در حال حاضر موجودی کیف پول شما <span class="text-secondary">{{ wallet }}</span> است. با <span
              class="text-secondary" @click="SHOW_MODAL_CREDIT()"
            >پرداخت بانکی</span>
            می&zwnj;توانید اعتبار خود را افزایش دهید
          </div>
          <div class="d-md-flex hide-mobile">
            <button class="btn btn-primary-dark mr-2" @click="SHOW_MODAL_CREDIT()">
              افزایش موجودی <i class="icon-plus" />
            </button>
            <div class="btn btn-secondary-light">
              موجودی کیف پول: <span
                class="font-weight-bold"
              >{{ wallet }}</span>
            </div>
          </div>
        </div>
        <div class="table-responsive hide-mobile">
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>عنوان</th>
                <th>تاریخ</th>
                <th>مبلغ <span class="font-small">تومان</span></th>
                <th>توضیحات تکمیلی</th>
                <th>شناسه پیگیری</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in data" :key="index">
                <td>
                  <div class="text-fade text-center">
                    {{ item.for }}
                  </div>
                </td>
                <td>
                  <div class="text-fade text-center">
                    {{ item.date }}
                  </div>
                </td>
                <td>
                  <div class="text-right">
                    <span :class="{'slanted-danger':item.status=='completed'}">{{ item.amount | replace }}</span>
                  </div>
                </td>
                <td>
                  <div class="d-md-flex justify-content-between payment-desc-wrapper">
                    <div class="payment-desc">
                      درگاه {{ item.method }}
                    </div>
                    <div v-if="item.status!=='completed'" class="payment-desc-button">
                      <a :href="'/callback?payment_id='+item.transaction_id+'&payment_uri='+item.method+'&ref_num='+item.ref_num+'&check_it_again=1&purchase='+item.purchase" class="btn btn-sm btn-primary-dark">بررسی پرداخت</a>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="text-center text-fade">
                    {{ item.transaction_id | replace2 }}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="paymentAccardion" class="show-mobile accordion accordion-margin mb-4">
          <div v-for="(item,index) in data" :key="index" class="card">
            <div id="headingOne" class="card-header collapsed d-flex align-items-center justify-content-between"
                 data-toggle="collapse" data-target="#collapseOne"
            >
              <div class="font-weight-bold">
                <div class="text-fade">
                  {{ item.for }}
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div class="text-fade">
                  {{ item.date }}
                </div>
                <div class="font-weight-bold ml-3">
                  <span>{{ item.amount }}</span>
                </div>
                <i :id="'collapse-'+index" v-b-toggle="'accordion-' + index" class="icon-expand-arrow text-secondary ml-1" />
              </div>
            </div>
            <b-collapse :id="'accordion-'+index" accordion="my-accordion" role="tabpanel">
              <div class="card-body">
                <div class="text-fade mb-3">
                  شناسه پیگیری: {{ item.transaction_id | replace2 }}
                </div>
                <div class="d-flex justify-content-between payment-desc-wrapper">
                  <div class="payment-desc">
                    درگاه {{ item.method }}
                  </div>
                  <div v-if="item.status!=='completed'" class="payment-desc-button">
                    <a :href="'/callback?payment_id='+item.transaction_id+'&payment_uri='+item.method+'&ref_num='+item.ref_num+'&check_it_again=1&purchase='+item.purchase" class="btn btn-sm btn-primary-dark">بررسی پرداخت</a>
                  </div>
                </div>
              </div>
            </b-collapse>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

  export default {


        filters: {
            // Cut word
            replace(string) {
                 return string.replace(" تومان",'')
            },
            replace2(string) {
                 return string.replace("A00000000000000000000000000",'')
            }
        },

  async asyncData (context) {
  	let res
    let res2

  	if (context.app.$auth.loggedIn) {
  	    res = await context.app.$axios.get('/get/payments')
        res2 = await context.app.$axios.post('/get/my_wallet')

        return {data:res.data.payments,wallet:res2.data.data.my_credit}
  	 }


    
  },

        data() {
            return {
              data:{},
              wallet: '0 تومان'
            }
        },

  head() {

    return { title:  'پرداخت ها' }
  },

    methods: {
            HIDE_MODAL() {
              this.$store.dispatch('credit/HIDE_MODAL')
            },
            SHOW_MODAL_CREDIT() {
              this.$store.dispatch('credit/SHOW_MODAL',{prewallet: this.wallet})
            },
    SHOW_MODAL(){
      this.$store.dispatch('login/SHOW_MODAL',{premessage: null,premobile: null,preredirect: null,prerefresh: false})
    }
    },
  }
</script>