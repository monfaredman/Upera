<template>
<div>
    <section class="page page-payment mt-5  pt-md-3 pt-4 mb-5">
        <div class="container-fluid">
            <div
                class="d-md-flex align-items-md-end justify-content-md-between payment-title-wrapper mt-3 mt-md-5 mb-3">
                <div class="title">پرداخت ها</div>
                <div class="show-mobile mt-3">
                    در حال حاضر موجودی کیف پول شما <span class="text-secondary">۰ تومان</span> است. با <span
                        class="text-secondary" @click="showCreditModal=true">پرداخت بانکی</span>
                    می&zwnj;توانید اعتبار خود را افزایش دهید
                </div>
                <div class="d-md-flex hide-mobile">
                    <button class="btn btn-primary-dark mr-2" @click="showCreditModal=true">افزایش اعتبار <i class="icon-plus"></i></button>
                    <div class="btn btn-secondary-light">موجودی کیف پول: <span
                            class="font-weight-bold">۱۲.۰۰۰</span> تومان</div>
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
                        <tr>
                            <td>شارژ مستقیم</td>
                            <td>
                                <div class="text-fade text-center">۹۸/۱۲/۲۵</div>
                            </td>
                            <td>
                                <div class="text-right">
                                    <span>۱۰.۰۰۰</span>
                                </div>
                            </td>
                            <td>
                                <div class="d-md-flex justify-content-between payment-desc-wrapper">
                                    <div class="payment-desc">تاریخ اتمام اشتراک ۹۸/۱۲/۲۵</div>
                                </div>
                            </td>
                            <td>
                                <div class="text-center text-fade">۱۵۱۹۷۹۶۷</div>
                            </td>
                        </tr>
                        <tr>
                            <td>خرید اشتراک ۳ ماهه</td>
                            <td>
                                <div class="text-fade text-center">۹۸/۱۲/۲۵</div>
                            </td>
                            <td>
                                <div class="text-right">
                                    <span>۱۰.۰۰۰</span>
                                </div>
                            </td>
                            <td>
                                <div class="d-md-flex justify-content-between payment-desc-wrapper">
                                    <div class="payment-desc">تاریخ اتمام اشتراک ۹۸/۱۲/۲۵</div>
                                </div>
                            </td>
                            <td>
                                <div class="text-center text-fade">۱۵۱۹۷۹۶۷</div>
                            </td>
                        </tr>
                        <tr>
                            <td>پرداخت ناموفق</td>
                            <td>
                                <div class="text-fade text-center">۹۸/۱۲/۲۵</div>
                            </td>
                            <td>
                                <div class="text-right">
                                    <span class="slanted-danger">۱۰.۰۰۰</span>
                                </div>
                            </td>
                            <td>
                                <div class="d-md-flex justify-content-between payment-desc-wrapper">
                                    <div class="payment-desc">تاریخ اتمام اشتراک تاریخ اتمام اشتراک تاریخ اتمام اشتراک
                                        تاریخ اتمام اشتراک
                                        تاریخ اتمام اشتراک تاریخ اتمام اشتراک تاریخ اتمام اشتراک تاریخ اتمام اشتراک
                                        تاریخ اتمام اشتراک</div>
                                    <div class="payment-desc-button">
                                        <button class="btn btn-sm btn-primary-dark">بررسی پرداخت</button>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="text-center text-fade">۱۵۱۹۷۹۶۷</div>
                            </td>
                        </tr>
                        <tr>
                            <td>شارژ مستقیم</td>
                            <td>
                                <div class="text-fade text-center">۹۸/۱۲/۲۵</div>
                            </td>
                            <td>
                                <div class="text-right">
                                    <span>۱۰.۰۰۰</span>
                                </div>
                            </td>
                            <td>
                                <div class="d-md-flex justify-content-between payment-desc-wrapper">
                                    <div class="payment-desc">تاریخ اتمام اشتراک تاریخ اتمام اشتراک تاریخ اتمام اشتراک
                                        تاریخ اتمام اشتراک
                                        تاریخ اتمام اشتراک تاریخ اتمام اشتراک تاریخ اتمام اشتراک تاریخ اتمام اشتراک
                                        تاریخ اتمام اشتراک</div>
                                </div>
                            </td>
                            <td>
                                <div class="text-center text-fade">۱۵۱۹۷۹۶۷</div>
                            </td>
                        </tr>
                        <tr>
                            <td>پرداخت ناموفق</td>
                            <td>
                                <div class="text-fade text-center">۹۸/۱۲/۲۵</div>
                            </td>
                            <td>
                                <div class="text-right">
                                    <span class="slanted-danger">۱۰.۰۰۰</span>
                                </div>
                            </td>
                            <td>
                                <div class="d-md-flex justify-content-between payment-desc-wrapper">
                                    <div class="payment-desc">تاریخ اتمام اشتراک </div>
                                    <div class="payment-desc-button">
                                        <button class="btn btn-sm btn-primary-dark">بررسی پرداخت</button>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="text-center text-fade">۱۵۱۹۷۹۶۷</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="show-mobile accordion accordion-margin mb-4" id="paymentAccardion">
                <div class="card">
                    <div class="card-header collapsed d-flex align-items-center justify-content-between" id="headingOne"
                        data-toggle="collapse" data-target="#collapseOne">
                        <div class="font-weight-bold">شارژ مستقیم</div>
                        <div class="d-flex align-items-center">
                            <div class="text-fade">۹۸/۱۲/۲۵</div>
                            <div class="font-weight-bold ml-3">
                                <span>۱۰.۰۰۰ تومان</span>
                            </div>
                            <i class="icon-expand-arrow text-secondary ml-1"></i>
                        </div>
                    </div>
                    <div id="collapseOne" class="collapse">
                        <div class="card-body">
                            <div class="text-fade mb-3">شناسه پیگیری: ۱۵۱۹۷۹۶۷</div>
                            <div class="d-flex justify-content-between payment-desc-wrapper">
                                <div class="payment-desc">تاریخ اتمام اشتراک تاریخ اتمام اشتراک تاریخ اتمام اشتراک تاریخ
                                    اتمام اشتراک
                                    تاریخ اتمام اشتراک تاریخ اتمام اشتراک تاریخ اتمام اشتراک تاریخ اتمام اشتراک
                                    تاریخ اتمام اشتراک</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header collapsed d-flex align-items-center justify-content-between" id="headingTwo"
                        data-toggle="collapse" data-target="#collapseTwo">
                        <div class="font-weight-bold">خرید اشتراک ۳ ماهه</div>
                        <div class="d-flex align-items-center">
                            <div class="text-fade">۹۸/۱۰/۱۲</div>
                            <div class="font-weight-bold ml-3">
                                <span>۱۲.۰۰۰ تومان</span>
                            </div>
                            <i class="icon-expand-arrow text-secondary ml-1"></i>
                        </div>
                    </div>
                    <div id="collapseTwo" class="collapse">
                        <div class="card-body">
                            <div class="text-fade mb-3">شناسه پیگیری: ۱۵۱۹۷۹۶۷</div>
                            <div class="d-flex justify-content-between payment-desc-wrapper">
                                <div class="payment-desc">تاریخ اتمام اشتراک</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header collapsed d-flex align-items-center justify-content-between"
                        id="headingThree" data-toggle="collapse" data-target="#collapseThree">
                        <div class="font-weight-bold">پرداخت ناموفق</div>
                        <div class="d-flex align-items-center">
                            <div class="text-fade">۹۸/۳/۳</div>
                            <div class="font-weight-bold ml-3">
                                <span class="slanted-danger">۱۸.۹۰۰ تومان</span>
                            </div>
                            <i class="icon-expand-arrow text-secondary ml-1"></i>
                        </div>
                    </div>
                    <div id="collapseThree" class="collapse">
                        <div class="card-body">
                            <div class="text-fade mb-3">شناسه پیگیری: ۱۵۱۹۷۹۶۷</div>
                            <div class="d-flex justify-content-between payment-desc-wrapper">
                                <div class="payment-desc">تاریخ اتمام اشتراک تاریخ اتمام اشتراک تاریخ اتمام اشتراک تاریخ
                                    اتمام اشتراک
                                    تاریخ اتمام اشتراک تاریخ اتمام اشتراک تاریخ اتمام اشتراک تاریخ اتمام اشتراک
                                    تاریخ اتمام اشتراک</div>
                                    <div class="payment-desc-button">
                                        <button class="btn btn-sm btn-primary-dark">بررسی پرداخت</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Credit :show="showCreditModal" @hide-modal="HIDE_MODAL" />
</div>
</template>
<script>

import Credit from "../components/Credit"
  export default {
  components: {
    Credit
  },

  async asyncData (context) {
  	let res

  	if (context.app.$auth.loggedIn) {
  	    res = await context.app.$axios.get('/get/discover')
  	 }else{
  	 	res = await context.app.$axios.get('/ghost/get/discover')
  	 }
    return {data:res.data.data}
  },

        data() {
            return {
              data:{},
              showCreditModal: false
            }
        },

  head() {

    return { title:  'پرداخت ها' }
  },

    methods: {
            HIDE_MODAL() {
              this.showCreditModal=false
            },
    },
  }
</script>