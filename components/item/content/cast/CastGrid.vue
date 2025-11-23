<template>
  <div v-if="casts && casts.length" class="cast-grid-container">
    <div
      v-for="(actor, index) in casts"
      :key="actor.id || index"
      class="cast-card"
    >
      <nuxt-link
        v-if="actor && actor.id"
        :to="{ name: 'cast-id', params: { id: actor.id } }"
        class="cast-card-link"
      >
        <div class="cast-image-wrapper">
          <OptimizedImage
            :image-src="actor.image"
            :alt="actor.name"
            :width="150"
            :height="150"
            :thumb-options="{ w: 150, h: 150, q: 100, a: 't' }"
            type="casts"
            class="cast-image"
          />
        </div>
        <div class="cast-info">
          <span class="actor-name">
            {{ ChooseLang(actor.name, actor.name_fa) }}
          </span>
          <span v-if="actor.character" class="character-name">
            {{ ChooseLang(actor.character, actor.character_fa) }}
          </span>
        </div>
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

<style scoped>
.cast-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 24px 16px;
  padding: 16px 8px;
  margin: 0 auto;
}

.cast-image {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  border-radius: 50% !important;
}

::v-deep .cast-image img {
  border-radius: 50% !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
}

@media (min-width: 576px) {
  .cast-grid-container {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 32px 20px;
    padding: 24px 12px;
  }
}

@media (min-width: 768px) {
  .cast-grid-container {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 36px 24px;
  }
}

@media (min-width: 1200px) {
  .cast-grid-container {
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    gap: 5px;
  }
}

.cast-card {
  display: flex;
  justify-content: center;
}

.cast-card-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease, opacity 0.3s ease;
  width: 100%;
}

.cast-card-link:hover {
  transform: translateY(-8px);
  opacity: 0.9;
}

.cast-image-wrapper {
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 12px;
  overflow: hidden;
  border-radius: 50%;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  padding: 0;
  border: 3px solid #fff;
  background-color: #f8f9fa;
}

@media (min-width: 576px) {
  .cast-image-wrapper {
    width: 140px;
    height: 140px;
    margin-bottom: 14px;
  }
}

@media (min-width: 768px) {
  .cast-image-wrapper {
    width: 150px;
    height: 150px;
    margin-bottom: 16px;
  }
}

.cast-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 0 8px;
}

.actor-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: white;
  margin-bottom: 4px;
  line-height: 1.3;
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.character-name {
  font-size: 0.85rem;
  font-weight: 400;
  color: #6c757d;
  line-height: 1.3;
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-style: italic;
}

/* Dark theme support */
:global(.theme-dark) .actor-name {
  color: #f2f2f2;
}

:global(.theme-dark) .character-name {
  color: #adb5bd;
}

:global(.theme-dark) .cast-image-wrapper {
  border-color: #2c3e50;
  background-color: #1a1a1a;
}
</style>
