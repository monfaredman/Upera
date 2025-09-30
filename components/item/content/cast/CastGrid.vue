<template>
  <div
    v-if="casts && casts.length"
    class="row row_actor_movie row_actor2_movie"
  >
    <div
      v-for="(actor, index) in casts"
      :key="actor.id || index"
      class="col-4 col-xl-1 col-md-2 col-sm-3 mt-2 mt-lg-4"
    >
      <nuxt-link
        v-if="actor && actor.id"
        :to="{ name: 'cast-id', params: { id: actor.id } }"
        class="actor2"
      >
        <OptimizedImage
          :image-src="actor.image"
          :alt="actor.name"
          :width="140"
          :height="140"
          :thumb-options="{ w: 140, h: 140, q: 100, a: 't' }"
          type="casts"
          class="rounded-circle"
        />
        <span class="block actor-name">
          {{ ChooseLang(actor.name, actor.name_fa) }}
        </span>
        <span v-if="actor.character" class="block character-name">
          {{ ChooseLang(actor.character, actor.character_fa) }}
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import OptimizedImage from '@/components/item/common/OptimizedImage'

export default {
  name: 'CastGrid',
  components: {
    OptimizedImage,
  },
  props: {
    casts: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
    showCharacters: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      return en || ''
    },
  },
}
</script>
