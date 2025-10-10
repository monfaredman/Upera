<template>
  <div>
    <!-- Regular Content Title -->
    <div v-if="itemType != 'episode'">
      <a
        href=""
        class="text-white"
        @click.prevent="
          $emit('title-click', { id: content.id, type: itemType })
        "
      >
        {{ chooseLang(content.name, content.name_fa) }}
      </a>
    </div>

    <!-- Episode Content Title -->
    <div v-else>
      <a
        href=""
        class="text-white"
        @click.prevent="
          $emit('title-click', { id: content.id, type: itemType })
        "
      >
        {{
          chooseLang(
            content.itemdata?.series_name,
            content.itemdata?.series_name_fa
          )
        }}
      </a>
      <br />
      <h6 class="text-small">
        {{ chooseLang(content.name, content.name_fa) }}
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentTitle',
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
    itemType: {
      type: String,
      default: '',
    },
  },
  methods: {
    chooseLang(en, fa) {
      if (fa && this.$i18n.locale == 'fa') return fa
      else return en
    },
  },
  emits: ['title-click'],
}
</script>
