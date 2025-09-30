<template>
  <b-tab :title="$t('new.casts')">
    <div id="actor" class="mt-2">
      <div class="container-fluid pl-md-0 pr-md-0 row_actor_movie_container">
        <!-- Main Cast -->
        <CastGrid v-if="casts && casts.length" :casts="casts" title="" />

        <!-- Crew Sections -->
        <CrewSection
          :directors="directors"
          :producers="producers"
          :writers="writers"
          :investors="investors"
          :show-title="casts && casts.length > 0"
        />
      </div>
    </div>
  </b-tab>
</template>

<script>
import CastGrid from '@/components/item/content/cast/CastGrid'
import CrewSection from '@/components/item/content/cast/CrewSection'

export default {
  name: 'CastsTab',
  components: {
    CastGrid,
    CrewSection,
  },
  props: {
    casts: {
      type: Array,
      default: () => [],
    },
    directors: {
      type: Array,
      default: () => [],
    },
    producers: {
      type: Array,
      default: () => [],
    },
    writers: {
      type: Array,
      default: () => [],
    },
    investors: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
