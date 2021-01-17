<template>
  <div id="checkcontainer" class="container-fluid">
    <div class="container mt-5 pt-lg-5 pt-md-5 mb-5 pt-1  faq-page">
      <h4 class="font-weight-bold h6 mt-5  pt-2">
        <span class="pl-2 title">{{ $t('new.faqTitle') }}</span>
      </h4>
      <div class="input-group search-field with-filter my-4 insert_comment search_box_container">
        <input v-model="search" class="form-control border-left-0 border shadow-none" type="text" autofocus :placeholder="$t('new.faq_search')">

        <button class="btn btn-sm  btn-send-comment">
          <i class="icon-search" />
        </button>
      </div>

      <div v-for="(item,index) in filteredList" :key="index" class="accordion">
        <h2 class="mb-1 mt-4 collapse-header">
          <b-button :id="'collapse-'+index" v-b-toggle="'accordion-' + index" variant="link">
            <i class="fa fa-plus pr-4" />
            <span>{{ item.a }}</span>
          </b-button>
        </h2>
        <b-collapse :id="'accordion-'+index" accordion="my-accordion" role="tabpanel" @shown="show(index)" @hide="hide(index)">
          <p class="pl-5 collapse-content">
            {{ item.q }}
          </p>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    let res
    res = await context.app.$axios.get('/faq')
    if(context.app.i18n.locale=="fa")
    return {data:res.data.data.faq}
    else
      return {data:res.data.data.faq_en}
  },
    data () {
      return {
        data:{},
        search: '',
      }
    },
  head() {

    return { title:  this.$t('new.faqTitle') }
  },
  computed: {
    filteredList() {
      return this.data.filter(data => {
        return data.a.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
    methods: {
    show(index) {
      var collapse=document.getElementById("collapse-"+index).getElementsByClassName("fa")

      if(collapse.length){
        collapse[0].classList.add('fa-minus')
        collapse[0].classList.remove('fa-plus')
      }
    },
    hide(index) {
      var collapse=document.getElementById("collapse-"+index).getElementsByClassName("fa")

      if(collapse.length){
        collapse[0].classList.add('fa-plus')
        collapse[0].classList.remove('fa-minus')
      }
    }
  }
}
</script>