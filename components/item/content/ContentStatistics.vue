<template>
  <div class="content-statistics-container">
    <div class="content-statistics">
      <!-- Right side backdrop image -->
      <div class="backdrop-container">
        <img
          v-if="data.item.backdrop"
          :src="getBackdropUrl(data.item.poster)"
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
            {{ data.item.age }}
          </span>
          <span v-if="showSubtitle" class="chip subtitle-chip"> زیرنویس </span>
        </div>

        <!-- Description -->
        <p class="content-description">
          {{ data.item.overview_fa || data.item.overview }}
        </p>

        <!-- Director -->
        <div v-if="directors && directors.length > 0" class="director-info">
          <span class="director-label">کارگردان:</span>
          <span class="director-name">{{
            directors.map((d) => d.name_fa || d.name).join('، ')
          }}</span>
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
    showSubtitle() {
      return !this.data.item?.ir && !this.data.item?.persian
    },
  },
  methods: {
    getBackdropUrl(backdrop) {
      if (!backdrop) return ''
      // Append .jpg extension to the backdrop filename
      return `https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/${backdrop}`
    },
  },
}
</script>

<style scoped>
.content-statistics {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 1356px;
  height: 232.2051239013672px;
  padding: 12px;
  gap: 12px;
  background: #525252;
  border-radius: 8px;
  opacity: 1;
  margin-top: -6rem;
}

.content-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
}

.content-title {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  line-height: 1.2;
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

.content-description {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.director-info {
  font-size: 14px;
  color: #ffffff;
}

.director-label {
  font-weight: 600;
  margin-left: 8px;
  color: rgba(255, 255, 255, 0.7);
}

.director-name {
  color: #ffffff;
}

.backdrop-container {
  flex-shrink: 0;
  width: 140px;
  height: 208.2051239013672px;
  border-radius: 8.38px;
  overflow: hidden;
  opacity: 1;
}

.backdrop-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8.38px;
}
</style>
