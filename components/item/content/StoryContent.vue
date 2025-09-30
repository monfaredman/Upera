<template>
  <div class="container-fluid" style="margin-bottom: 3.5rem">
    <div class="title mt-4 mb-3">
      {{ storyTitle }}
    </div>
    <p>
      {{ overviewText }}
      <span v-if="type === 'episode'">
        ({{ ChooseLang(data.item.name, data.item.name_fa) }})
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'StoryContent',
  props: {
    data: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    storyTitle() {
      return this.type === 'movie'
        ? this.$t('new.story')
        : this.$t('new.story2')
    },
    overviewText() {
      return this.ChooseLang(
        this.data.item.overview,
        this.data.item.overview_fa
      )
    },
  },
  methods: {
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      return en
    },
  },
}
</script>
