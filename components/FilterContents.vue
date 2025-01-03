<template>
  <div v-show="show" :class="{'container-fluid pt-2 pb-1 bg-filtermenu':!setting}">
    <div :class="{ 'mt-5 pt-lg-2 pt-md-2 pt-1': notop}">
      <b-button
        class="btn btn-block mb-1 d-sm-none"
        :class="{'btn-secondary':$colorMode.value=='dark','btn-dark btn-download':$colorMode.value!='dark','collapsed':visible}"
        :aria-expanded="visible ? 'true' : 'false'"
        aria-controls="collapse-filter"
        @click="visible = !visible"
      >
        <i class="icon-filter ml-2" /> <span>فیلتر</span>
      </b-button>
      <b-collapse id="collapse-filter" v-model="visible">
        <div :class="{'row':!setting}">
          <div class="col-sm">
            <b-form-select v-model="f_type" :options="f_types" :disabled="filter_loading" class="mb-1" @change="change_filter('f_type',f_type)" />
          </div>
          <div class="col-sm">
            <b-form-select v-model="country" :options="countries" :disabled="filter_loading" class="mb-1" @change="change_filter('country',country)" />
          </div>
          <div class="col-sm">
            <b-form-select v-model="lang" :options="langs" :disabled="filter_loading" class="mb-1" @change="change_filter('lang',lang)" />
          </div>
          <div class="col-sm">
            <b-form-select v-model="age" :options="ages" :disabled="filter_loading || disable_age" class="mb-1" @change="change_filter('age',age)" />
          </div>
          <div v-show="localshowgenres" class="col-sm">
            <b-form-select v-model="genre" :options="genres" :disabled="filter_loading" class="mb-1" @change="change_filter('genre',genre)" />
          </div>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    props: {
      show: Boolean,
      savedata: Boolean,
      showgenres: Boolean,
      notop: Boolean,
      setting: Boolean,
      listgenre: {
          type: String,
          default: null
      }
    },

      data() {
      return {
        f_type: 0,
        f_types: [{ text: 'فیلم و سریال', value: 0 }, { text: 'فیلم', value: 'movie' }, { text: 'سریال', value: 'series' }],
        country: 0,
        countries: [{ text: 'همه کشورها', value: 0 },{ text: 'ایرانی', value: 'IR' }, { text: 'خارجی', value: 'noIR' }],
        lang: 0,
        langs: [{ text: 'همه زبان ها', value: 0 },{ text: 'فارسی (دوبله)', value: 'persian' }, { text: 'زبان اصلی (زیرنویس)', value: 'nopersian' }],
        age: 0,
        ages: [{ text: 'همه سنین', value: 0 },{ text: 'زیر ۳ سال', value: 'G' }, { text: 'تا ۶ سال', value: 'TO-PG' }, { text: 'تا ۱۲ سال', value: 'TO-PG-13' }, { text: 'تا ۱۵ سال', value: 'TO-R' }, { text: 'تا ۱۸ سال', value: 'TO-X' }, { text: '۴ تا ۶ سال', value: 'PG' }, { text: '۷ تا ۱۲ سال', value: 'PG-13' }, { text: '۱۳ تا ۱۵ سال', value: 'R' }],
        genre: 0,
        genres: [{ text: 'همه ژانرها', value: 0 },{ text: 'اکشن', value: 'action' }, { text: 'ماجراجویی', value: 'adventure' }, { text: 'انیمیشن', value: 'animation' }, { text: 'بیوگرافی', value: 'biography' },
{ text: 'کمدی', value: 'comedy' },
{ text: 'جنائی', value: 'crime' },
{ text: 'مستند', value: 'documentary' },
{ text: 'درام', value: 'drama' },
{ text: 'خانوادگی', value: 'family' },
{ text: 'ابرقهرمانی', value: 'superhero' },
{ text: 'فانتزی', value: 'fantasy' },
{ text: 'تاریخی', value: 'history' },
{ text: 'ترسناک', value: 'horror' },
{ text: 'موزیکال', value: 'music' },
{ text: 'معمایی', value: 'mystery' },
{ text: 'عاشقانه', value: 'romance' },
{ text: 'علمی تخیلی', value: 'sci_fi' },
{ text: 'ورزشی', value: 'sport' },
{ text: 'هیجان انگیز', value: 'thriller' },
{ text: 'جنگی', value: 'war' }],
        localshowgenres: true,
        visible: true,
        disable_age: false,
        windowWidth: 0
      }
    },

      computed: {
          ...mapGetters({filter: "filter/data"}),
          ...mapGetters({filter_loading: "filter/filter_loading"})
      },


        mounted() {
          this.fetchGenres()
          if(window.innerWidth<=576)
            this.visible=false

          this.windowWidth=window.innerWidth
          window.addEventListener("resize", this.Resize)

          if(!this.setting){
            this.f_type=this.filter.f_type
            this.country=this.filter.country
            this.lang=this.filter.lang
            this.age=this.filter.age
          }
          if(this.$cookiz.get('filtercontents')){
            var filtercontents = new URLSearchParams(this.$cookiz.get('filtercontents'))
            filtercontents=Object.fromEntries([...filtercontents])

            if('f_type' in filtercontents)
              this.f_type=filtercontents.f_type
            if('country' in filtercontents)
              this.country=filtercontents.country
            if('lang' in filtercontents)
              this.lang=filtercontents.lang
            if('age' in filtercontents){
              this.age=filtercontents.age
              if(!this.setting){
                this.disable_age=true
              }
            }
          }
        },


        
    methods: {

    fetchGenres() {
      this.$axios.get('/genres')
        .then(response => {
          if (response.status === 200 && response.data.genres) {
            // Map the response to the expected format for the genres dropdown
            this.genres = [
              { text: 'همه ژانرها', value: 0 }, // Default option
              ...Object.entries(response.data.genres).map(([english_name, persian_name]) => ({
                text: persian_name,
                value: english_name.toLowerCase()
              }))
            ]
            this.localshowgenres = this.showgenres
            var listgenre=this.listgenre
            if(this.localshowgenres && listgenre){
              if(!this.genres.some(function(el){ return el.value === listgenre})){
                this.localshowgenres=false
              }else{
                this.genre=listgenre
              }
            }
          }
        })
        .catch(error => {
          console.error("Error fetching genres:", error)
        })
    },
        Resize(e) {
          
          if(window.innerWidth!=this.windowWidth){
            if(window.innerWidth<=576)
              this.visible=false
            else
              this.visible=true
        }
    return e
  },
      change_filter(filtertype,value){
        if(filtertype=='genre'){
          if(value==0){
            this.$router.push({
                name:"index"
            })
          }else{
            this.$router.push({
                name:"lists-list",
                params: {
                    list: value
                }
            })
         }
        }else{
          var newfilter={age: 0,lang: 0,country: 0,f_type: 0}

          newfilter.age=this.age
          newfilter.lang=this.lang
          newfilter.country=this.country
          newfilter.f_type=this.f_type


          this.$store.dispatch('filter/SET_FILTER',newfilter)

          var filter_str = []
          for (var p in this.filter){
            if(this.filter[p]!=0){
              filter_str.push(encodeURIComponent(p) + "=" + encodeURIComponent(this.filter[p]))
            }
          }
          filter_str='?'+filter_str.join("&")

          
          this.$store.dispatch('SET_FILTER_CONTENTS',filter_str)

          if(this.savedata){
            this.$cookiz.set('filtercontents', filter_str)
          }

          this.$emit("execute_content_filtering", null)
        }
      }
    },


}
</script>