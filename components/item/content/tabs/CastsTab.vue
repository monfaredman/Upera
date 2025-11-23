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
.container-fluid {
  padding-right: 0rem !important;
  margin: 0 41px;
}

.casts-tab-container {
  padding: 20px 0;
  background: white;
  border-radius: 8px;
  margin-top: -1rem !important;
}
.theme-dark .casts-tab-container {
  padding: 20px 0;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.02));
  border-radius: 8px;
  margin-top: -1rem !important;
}

.cast-section {
  margin-bottom: 32px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
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

@media (max-width: 1090) {
  .container-fluid {
    padding-right: 0rem !important;
    margin: 0 15px;
  }
}

@media (max-width: 767px) {
  .container-fluid {
    padding-right: 0rem !important;
    margin: 0 15px;
  }

  .casts-tab-container {
    padding: 12px 0;
    margin-top: 0 !important;
  }

  .section-title {
    font-size: 1.3rem;
    margin-bottom: 16px;
  }
}
</style>
