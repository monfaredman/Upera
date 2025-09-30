<template>
  <div
    class="statistics d-flex align-items-center justify-content-between container-fluid"
  >
    <StatisticsItem
      v-if="data.item.year"
      icon="icon-calendar"
      :label="`محصول سال`"
      :value="data.item.year"
    />

    <StatisticsItem
      v-if="data.item.rate"
      icon="icon-imdb"
      :label="`امتیاز`"
      :value="data.item.rate"
      suffix="از IMDB"
    />

    <AgeRatingItem v-if="data.item.age" :age-rating="data.item.age" />

    <StatisticsItem
      v-if="totalClaps"
      icon="icon-clap"
      :value="totalClaps"
      :suffix="`بار این ${contentTypeText} را پسندیده‌اند`"
    />

    <RuntimeItem
      v-if="showRuntime"
      :type="type"
      :runtime="data.item.runtime"
      :episode-num="episodeNum"
      :season-num="seasonNum"
    />
  </div>
</template>

<script>
import StatisticsItem from '@/components/item/content/StatisticsItem'
import AgeRatingItem from '@/components/item/content/AgeRatingItem'
import RuntimeItem from '@/components/item/content/RuntimeItem'

export default {
  name: 'ContentStatistics',
  components: {
    StatisticsItem,
    AgeRatingItem,
    RuntimeItem,
  },
  props: {
    data: { type: Object, default: () => ({ item: {} }) },
    type: { type: String, default: '' },
    totalClaps: { type: [Number, String], default: 0 },
    episodeNum: { type: Number, default: 0 },
    seasonNum: { type: Number, default: 0 },
  },
  computed: {
    contentTypeText() {
      const types = {
        movie: 'فیلم',
        episode: 'قسمت',
        series: 'سریال',
      }
      return types[this.type] || 'محصول'
    },
    showRuntime() {
      return this.type === 'series' || this.data.item.runtime
    },
  },
}
</script>
