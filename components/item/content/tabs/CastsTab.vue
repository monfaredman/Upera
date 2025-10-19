<template>
  <div id="actor" class="casts-tab-container">
    <div class="container-fluid">
      <!-- Main Cast -->
      <div v-if="casts && casts.length" class="cast-section">
        <h5 class="section-title">{{ $t('show.cast') }}</h5>
        <CastGrid :casts="casts" title="" />
      </div>
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

<style scoped>
.casts-tab-container {
  padding: 20px 0;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.02));
  border-radius: 8px;
  margin-top: -6rem !important;
}

.cast-section {
  margin-bottom: 32px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  padding: 0 12px;
  position: relative;
  display: inline-block;
}

/* Dark theme support */
:global(.theme-dark) .casts-tab-container {
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(255, 255, 255, 0.02)
  );
}

:global(.theme-dark) .section-title {
  color: #f2f2f2;
}

@media (max-width: 767px) {
  .casts-tab-container {
    padding: 12px 0;
  }

  .section-title {
    font-size: 1.3rem;
    margin-bottom: 16px;
  }
}
</style>
