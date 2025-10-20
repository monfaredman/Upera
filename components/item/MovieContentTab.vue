<template>
  <section class="movie-content-section">
    <div class="container-fluid">
      <div class="row align-items-center">
        <!-- Right side: Movie Backdrop Image (6/12) -->
        <div class="col-md-6 order-md-2 mb-4 mb-md-0">
          <div class="movie-backdrop-wrapper">
            <OptimizedImage
              :image-src="data.item.backdrop"
              :alt="ChooseLang(data.item.name, data.item.name_fa)"
              class="rounded movie-backdrop"
              :width="600"
              :height="338"
              :thumb-options="{ w: 600, h: 338, q: 95, a: 'c' }"
              type="backdrops"
              fluid-grow
            />
          </div>
        </div>

        <!-- Left side: Movie Info (6/12) -->
        <div class="col-md-6 order-md-1">
          <div class="movie-info-wrapper">
            <!-- 1. Movie Title -->
            <h3 class="movie-title mb-3">
              {{ ChooseLang(data.item.name, data.item.name_fa) }}
            </h3>

            <!-- 2. Movie Description -->
            <p class="movie-description mb-4">
              {{ ChooseLang(data.item.overview, data.item.overview_fa) }}
            </p>

            <!-- 3. Watch Button -->
            <div class="movie-action-wrapper">
              <button class="btn btn-watch" @click="handleWatch">
                <i class="icon-play mr-2" />
                مشاهده
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OptimizedImage from '@/components/item/common/OptimizedImage'

export default {
  name: 'MovieContentTab',
  components: {
    OptimizedImage,
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({ item: {} }),
    },
  },
  methods: {
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      return en
    },
    handleWatch() {
      // Emit event to parent component to handle play action
      this.$emit('play')
    },
  },
}
</script>

<style scoped>
.movie-content-section {
  padding: 2rem 0;
}

.movie-backdrop-wrapper {
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.movie-backdrop {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.movie-backdrop:hover {
  transform: scale(1.02);
}

.movie-info-wrapper {
  padding: 1rem;
}

.movie-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.3;
  margin-bottom: 1rem;
}

.movie-description {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1.5rem;
  max-height: 150px;
  overflow-y: auto;
}

.movie-description::-webkit-scrollbar {
  width: 6px;
}

.movie-description::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

.movie-description::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.movie-description::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}

.movie-action-wrapper {
  margin-top: 1.5rem;
}

.btn-watch {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(90deg, #ff7a18 0%, #af002d 100%);
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(175, 0, 45, 0.3);
  cursor: pointer;
}

.btn-watch:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(175, 0, 45, 0.4);
  background: linear-gradient(90deg, #ff8a2e 0%, #c0003d 100%);
}

.btn-watch:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(175, 0, 45, 0.3);
}

.btn-watch i {
  font-size: 1.2rem;
  margin-left: 0.5rem;
}

/* Responsive adjustments */
@media (max-width: 767.98px) {
  .movie-title {
    font-size: 1.5rem;
  }

  .movie-description {
    font-size: 0.95rem;
    max-height: 120px;
  }

  .btn-watch {
    width: 100%;
    padding: 0.85rem 1.5rem;
  }

  .movie-info-wrapper {
    padding: 0.5rem;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .movie-title {
    font-size: 1.6rem;
  }
}

section.movie-content-section {
  margin-top: -2rem !important;
}
</style>
