<template>
  <div class="content-statistics-container">
    <div class="content-statistics">
      <!-- Right side backdrop image -->
      <div class="backdrop-container">
        <img
          v-if="data.item.backdrop"
          :src="getBackdropUrl()"
          :alt="data.item.name_fa || data.item.name"
        />
      </div>
      <!-- Left side content -->
      <div class="content-info">
        <!-- Title -->
        <h2 class="content-title">{{ data.item.name_fa || data.item.name }}</h2>

        <!-- Genres and Age Rating as chips -->
        <div class="chips-container">
          <span
            v-for="(genreFa, genreKey) in data.item.new_genres"
            :key="genreKey"
            class="chip genre-chip"
          >
            {{ genreFa }}
          </span>
          <span v-if="data.item.age" class="chip age-chip">
            رده سنی {{ data.item.age }}
          </span>
          <span v-if="showSubtitle" class="chip subtitle-chip"> زیرنویس </span>
          <span v-if="showDubbed" class="chip dubbed-chip"> دوبله </span>
        </div>

        <!-- Description -->
        <p class="content-description">
          {{ data.item.overview_fa || data.item.overview }}
        </p>

        <!-- Crew Section (replacing Director) -->
        <div v-if="hasAnyCrew" class="crew-info">
          <span v-if="directors && directors.length > 0" class="crew-item">
            <span class="crew-label">کارگردان:</span>
            <span class="crew-names">
              <template v-for="(director, index) in directors">
                <nuxt-link
                  v-if="director && director.id"
                  :key="`director-${director.id}`"
                  :to="{ name: 'cast-id', params: { id: director.id } }"
                  class="crew-link"
                >
                  {{ director.name_fa || director.name }}
                </nuxt-link>
                <span v-else :key="`director-${index}`">{{
                  director.name_fa || director.name
                }}</span>
                <span
                  v-if="index < directors.length - 1"
                  :key="`director-sep-${index}`"
                  >،
                </span>
              </template>
            </span>
          </span>
          <span v-if="producers && producers.length > 0" class="crew-item">
            <span class="crew-label">تهیه کننده:</span>
            <span class="crew-names">
              <template v-for="(producer, index) in producers">
                <nuxt-link
                  v-if="producer && producer.id"
                  :key="`producer-${producer.id}`"
                  :to="{ name: 'cast-id', params: { id: producer.id } }"
                  class="crew-link"
                >
                  {{ producer.name_fa || producer.name }}
                </nuxt-link>
                <span v-else :key="`producer-${index}`">{{
                  producer.name_fa || producer.name
                }}</span>
                <span
                  v-if="index < producers.length - 1"
                  :key="`producer-sep-${index}`"
                  >،
                </span>
              </template>
            </span>
          </span>
          <span v-if="writers && writers.length > 0" class="crew-item">
            <span class="crew-label">نویسنده:</span>
            <span class="crew-names">
              <template v-for="(writer, index) in writers">
                <nuxt-link
                  v-if="writer && writer.id"
                  :key="`writer-${writer.id}`"
                  :to="{ name: 'cast-id', params: { id: writer.id } }"
                  class="crew-link"
                >
                  {{ writer.name_fa || writer.name }}
                </nuxt-link>
                <span v-else :key="`writer-${index}`">{{
                  writer.name_fa || writer.name
                }}</span>
                <span
                  v-if="index < writers.length - 1"
                  :key="`writer-sep-${index}`"
                  >،
                </span>
              </template>
            </span>
          </span>
          <span v-if="investors && investors.length > 0" class="crew-item">
            <span class="crew-label">سرمایه گذار:</span>
            <span class="crew-names">
              <template v-for="(investor, index) in investors">
                <nuxt-link
                  v-if="investor && investor.id"
                  :key="`investor-${investor.id}`"
                  :to="{ name: 'cast-id', params: { id: investor.id } }"
                  class="crew-link"
                >
                  {{ investor.name_fa || investor.name }}
                </nuxt-link>
                <span v-else :key="`investor-${index}`">{{
                  investor.name_fa || investor.name
                }}</span>
                <span
                  v-if="index < investors.length - 1"
                  :key="`investor-sep-${index}`"
                  >،
                </span>
              </template>
            </span>
          </span>
        </div>

        <!-- Teaser Button Row at End -->
        <div v-if="hasTeaser" class="teaser-button-row">
          <button class="teaser-button" @click="$emit('play-teaser')">
            <i class="far fa-play-circle"></i>
            <span>تماشای تیزر و تریلر</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentStatistics',
  props: {
    data: { type: Object, default: () => ({ item: {} }) },
    type: { type: String, default: '' },
    totalClaps: { type: [Number, String], default: 0 },
    episodeNum: { type: Number, default: 0 },
    seasonNum: { type: Number, default: 0 },
    directors: { type: Array, default: () => [] },
    producers: { type: Array, default: () => [] },
    writers: { type: Array, default: () => [] },
    investors: { type: Array, default: () => [] },
    medias: { type: Object, default: () => ({}) },
  },
  emits: ['play-teaser'],
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
    showSubtitle() {
      return !this.data.item?.ir && !this.data.item?.persian
    },
    showDubbed() {
      return this.data.item?.dubbed
    },
    hasTeaser() {
      return this.medias && this.medias.teaser === 1
    },
    hasAnyCrew() {
      return (
        (this.directors && this.directors.length > 0) ||
        (this.producers && this.producers.length > 0) ||
        (this.writers && this.writers.length > 0) ||
        (this.investors && this.investors.length > 0)
      )
    },
  },
  methods: {
    getBackdropUrl() {
      // Check if viewport is mobile (max-width: 767.98px)
      const isMobile = window.innerWidth <= 767.98

      if (isMobile) {
        // Use backdrop for mobile
        const backdrop = this.data.item.backdrop
        if (!backdrop) return ''
        return `https://thumb.upera.shop/thumb?w=375&h=300&q=100&a=c&zc=1&src=https://cdn.upera.shop/s3/backdrops/${backdrop}`
      } else {
        // Use poster for desktop
        const poster = this.data.item.poster
        if (!poster) return ''
        return `https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/${poster}`
      }
    },
  },
}
</script>

<style scoped>
.content-statistics-container {
  width: 100%;
  padding: 0;
}

.content-statistics {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  max-width: 100%;
  min-height: 232px;
  max-height: 232px;
  height: 232px;
  padding: 12px;
  gap: 12px;
  background: #525252;
  border-radius: 8px;
  opacity: 1;
  margin: 0 41px;
}

.content-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.35) transparent;
}

.content-info::-webkit-scrollbar {
  width: 6px;
}

.content-info::-webkit-scrollbar-track {
  background: transparent;
}

.content-info::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.35);
  border-radius: 6px;
}

.content-info::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

.content-title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  line-height: 2.2;
}

.chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.chip {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
}

.genre-chip {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.age-chip {
  background: rgba(255, 193, 7, 0.2);
  color: #ffc107;
  border: 1px solid rgba(255, 193, 7, 0.4);
}

.subtitle-chip {
  background: rgba(33, 150, 243, 0.2);
  color: #2196f3;
  border: 1px solid rgba(33, 150, 243, 0.4);
}

.dubbed-chip {
  background: rgba(76, 175, 80, 0.2);
  color: #4caf50;
  border: 1px solid rgba(76, 175, 80, 0.4);
}

.content-description {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  overflow: visible;
}

.crew-info {
  font-size: 14px;
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}

.crew-item {
  display: inline-flex;
  gap: 4px;
}

.crew-label {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
}

.crew-names {
  color: #ffffff;
}

.crew-link {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.2s ease;
}

.crew-link:hover {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline;
}

.teaser-button-row {
  width: 100%;
  display: flex;
  justify-content: start;
  margin-top: 8px;
}

.teaser-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 32px;
  background: linear-gradient(135deg, #1b6be5 0%, #0d4fa3 100%);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(27, 107, 229, 0.3);
}

.teaser-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(27, 107, 229, 0.5);
  background: linear-gradient(135deg, #2575ed 0%, #1558b8 100%);
}

.teaser-button:active {
  transform: translateY(0);
}

.teaser-button i {
  font-size: 20px;
}

.backdrop-container {
  flex-shrink: 0;
  width: 140px;
  height: 208px;
  border-radius: 8px;
  overflow: hidden;
  opacity: 1;
}

.backdrop-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* Tablet responsive */
@media (max-width: 991.98px) {
  .content-statistics-container {
    padding: 0 0.75rem;
  }

  .content-statistics {
    margin: -4rem auto 0;
    min-height: 200px;
    max-height: 200px;
    height: 200px;
    padding: 10px;
    gap: 10px;
  }

  .content-title {
    font-size: 20px;
  }

  .backdrop-container {
    width: 120px;
    height: 180px;
  }

  .content-info {
    min-height: 0;
    height: 100%;
  }

  .content-description {
    font-size: 13px;
    overflow: visible;
  }

  .crew-info {
    font-size: 13px;
    gap: 12px;
  }

  .teaser-button {
    font-size: 14px;
    padding: 10px 28px;
  }

  .teaser-button i {
    font-size: 18px;
  }
}

/* Mobile responsive */
@media (max-width: 767.98px) {
  .content-statistics-container {
    padding: 0 0.5rem;
  }

  .content-statistics {
    flex-direction: column;
    margin: -3rem auto 0;
    padding: 12px;
    gap: 12px;
    min-height: auto;
    max-height: none;
    height: auto;
  }

  .backdrop-container {
    display: none !important;
  }

  .content-info {
    width: 100%;
    gap: 10px;
    height: auto;
    overflow-y: visible;
  }

  .content-title {
    font-size: 20px;
  }

  .chips-container {
    gap: 6px;
  }

  .chip {
    padding: 4px 10px;
    font-size: 12px;
  }

  .content-description {
    font-size: 13px;
    line-height: 1.5;
    overflow: visible;
  }

  .crew-info {
    font-size: 13px;
    gap: 10px;
  }

  .teaser-button-row {
    margin-top: 12px;
  }

  .teaser-button {
    width: 100%;
    font-size: 14px;
    padding: 12px 24px;
  }

  .teaser-button i {
    font-size: 18px;
  }
}

/* Small mobile responsive */
@media (max-width: 575.98px) {
  .content-statistics-container {
    padding: 0 0.25rem;
  }

  .content-statistics {
    margin: -2rem auto 0;
    padding: 10px;
    gap: 10px;
    border-radius: 6px;
  }

  .backdrop-container {
    display: none !important;
  }

  .content-title {
    font-size: 20px;
  }

  .chip {
    padding: 3px 8px;
    font-size: 11px;
    border-radius: 12px;
  }

  .content-description {
    font-size: 12px;
    overflow: visible;
  }

  .director-info {
    font-size: 12px;
  }

  .director-label {
    margin-left: 6px;
  }
}
</style>
