<template>
  <div>
    <hr v-if="showDivider && hasVisibleCrew" />

    <div v-if="hasVisibleCrew" class="mt-md-2 small font-weight-bold">
      <h6 v-if="showTitle">
        {{ $t('new.other_casts') }}
      </h6>

      <CrewRole
        v-if="directors && directors.length"
        :role="$t('show.director')"
        :members="directors"
      />

      <CrewRole
        v-if="producers && producers.length"
        :role="$t('show.producer')"
        :members="producers"
      />

      <CrewRole
        v-if="writers && writers.length"
        :role="$t('show.writer')"
        :members="writers"
      />

      <CrewRole
        v-if="investors && investors.length"
        :role="$t('show.investor')"
        :members="investors"
      />
    </div>
  </div>
</template>

<script>
import CrewRole from '@/components/item/content/cast/CrewRole'

export default {
  name: 'CrewSection',
  components: {
    CrewRole,
  },
  props: {
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
    showTitle: {
      type: Boolean,
      default: false,
    },
    showDivider: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    hasVisibleCrew() {
      return (
        (this.directors && this.directors.length > 0) ||
        (this.producers && this.producers.length > 0) ||
        (this.writers && this.writers.length > 0) ||
        (this.investors && this.investors.length > 0)
      )
    },
  },
}
</script>
