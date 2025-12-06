<template>
  <div v-if="mergedList && mergedList.length" class="cast-carousel">
    <swiper ref="castsSwiper" class="cast-swiper" :options="swiperOptions">
      <swiper-slide
        v-for="(person, index) in mergedList"
        :key="person.id || `${person._role}-${index}`"
        class="cast-slide"
      >
        <nuxt-link
          v-if="person && person.id"
          :to="{ name: 'cast-id', params: { id: person.id } }"
          class="cast-card-link"
        >
          <div class="cast-image-wrapper">
            <OptimizedImage
              :image-src="person.image"
              :alt="person.name"
              :width="200"
              :height="200"
              :thumb-options="{ w: 200, h: 200, q: 100, a: 't' }"
              type="casts"
              class="cast-image"
            />
          </div>
          <div class="cast-info">
            <span class="actor-name">
              {{ ChooseLang(person.name, person.name_fa) }}
            </span>
            <span
              v-if="
                person._role === 'casts' && showCharacters && person.character
              "
              class="character-name"
            >
              {{ ChooseLang(person.character, person.character_fa) }}
            </span>
            <span
              v-if="person._role === 'casts' && isAnimation"
              class="person-role"
              >صداپیشه</span
            >
            <span v-else class="person-role">{{
              roleLabel(person._role)
            }}</span>
          </div>
        </nuxt-link>
        <div v-else class="cast-card-link cast-card-static">
          <div class="cast-image-wrapper">
            <OptimizedImage
              :image-src="person.image"
              :alt="person.name"
              :width="200"
              :height="200"
              :thumb-options="{ w: 200, h: 200, q: 100, a: 't' }"
              type="casts"
              class="cast-image"
            />
          </div>
          <div class="cast-info">
            <span class="actor-name">
              {{ ChooseLang(person.name, person.name_fa) }}
            </span>
            <span
              v-if="
                person._role === 'casts' && showCharacters && person.character
              "
              class="character-name"
            >
              {{ ChooseLang(person.character, person.character_fa) }}
            </span>
            <span
              v-if="person._role === 'casts' && isAnimation"
              class="person-role"
              >صداپیشه</span
            >
            <span v-else class="person-role">{{
              roleLabel(person._role)
            }}</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import OptimizedImage from '@/components/item/common/OptimizedImage'
import 'swiper/css/swiper.css'

export default {
  name: 'CastGrid',
  components: {
    Swiper,
    SwiperSlide,
    OptimizedImage,
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
    characters: {
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
    title: {
      type: String,
      default: '',
    },
    showCharacters: {
      type: Boolean,
      default: true,
    },
    isAnimation: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 5.5,
        slidesPerGroup: 2,
        spaceBetween: 28,
        speed: 500,
        observer: true,
        observeParents: true,
        watchOverflow: true,
        freeMode: false,
        breakpoints: {
          1600: { slidesPerView: 9.5 },
          1400: { slidesPerView: 7 },
          1200: { slidesPerView: 7.5 },
          1024: { slidesPerView: 8.5 },
          768: { slidesPerView: 6.5 },
          576: { slidesPerView: 6.5 },
          376: { slidesPerView: 4.6 },
          0: { slidesPerView: 2.6 },
        },
      },
    }
  },
  computed: {
    // priority: directors, producers, writers, investors, casts, characters
    mergedList() {
      const mapWithRole = (arr, role) =>
        (arr || []).map((p) => ({ ...p, _role: role }))

      return [
        ...mapWithRole(this.directors, 'directors'),
        ...mapWithRole(this.producers, 'producers'),
        ...mapWithRole(this.writers, 'writers'),
        ...mapWithRole(this.investors, 'investors'),
        ...mapWithRole(this.casts, 'casts'),
        ...mapWithRole(this.characters, 'characters'),
      ]
    },
  },
  watch: {
    mergedList: {
      immediate: true,
      handler() {
        this.updateSwiper()
      },
    },
  },
  mounted() {
    this.updateSwiper()
  },
  methods: {
    updateSwiper() {
      this.$nextTick(() => {
        const instance = this.$refs.castsSwiper?.$swiper
        if (instance && instance.update) {
          instance.update()
        }
      })
    },
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      return en || ''
    },
    // return localized role label
    roleLabel(role) {
      const isFa = this.$i18n && this.$i18n.locale === 'fa'
      const labelsEn = {
        directors: 'Director',
        producers: 'Producer',
        writers: 'Writer',
        investors: 'Investor',
        casts: 'Cast',
        characters: 'Character',
      }
      const labelsFa = {
        directors: 'کارگردان',
        producers: 'تهیه‌کننده',
        writers: 'نویسنده',
        investors: 'سرمایه‌گذار',
        casts: 'بازیگر',
        characters: 'شخصیت',
      }
      const base = isFa ? labelsFa[role] || '' : labelsEn[role] || ''
      // Optionally show character role for casts in same locale (e.g. "بازیگر" or "Cast")
      return base
    },
  },
}
</script>

<style scoped>
.cast-carousel {
  position: relative;
  padding: 8px 0;
}

.cast-swiper {
  overflow: visible;
  padding-bottom: 12px;
}

.cast-slide {
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: auto;
}

::v-deep .swiper-container {
  padding: 0 20px;
}

::v-deep .swiper-wrapper {
  padding: 6px 0;
}

.cast-card-link,
.cast-card-static {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease, opacity 0.3s ease;
  width: 210px;
  color: black;
}

.cast-card-static {
  cursor: default;
}

.cast-card-link:hover {
  transform: translateY(-8px);
  opacity: 0.95;
}

.theme-dark .cast-card-link,
.theme-dark .cast-card-static {
  color: #f2f2f2;
}

.cast-image-wrapper {
  position: relative;
  width: 170px;
  height: 170px;
  margin-bottom: 14px;
  overflow: hidden;
  border-radius: 50%;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  padding: 0;
  border: 4px solid #fff;
  background-color: #f8f9fa;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

@media (min-width: 1200px) {
  .cast-image-wrapper {
    width: 150px;
    height: 150px;
  }
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

.cast-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 0 8px;
}

.actor-name {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 4px;
  line-height: 1.4;
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.character-name {
  font-size: 0.95rem;
  font-weight: 400;
  color: #6c757d;
  line-height: 1.4;
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-style: italic;
}

.person-role {
  display: block;
  margin-top: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  text-align: center;
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
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

:global(.theme-dark) .person-role {
  color: #adb5bd;
}

@media (min-width: 768px) {
  .cast-image-wrapper {
    width: 100px;
    height: 100px;
  }
  .actor-name {
    font-size: 0.875rem;
  }
  .character-name {
    font-size: 0.7rem;
  }
}
@media (min-width: 576px) and (max-width: 768px) {
  .cast-image-wrapper {
    width: 90px;
    height: 90px;
  }
  .actor-name {
    font-size: 0.875rem;
  }
  .character-name {
    font-size: 0.7rem;
  }
}

@media (max-width: 576px) {
  .cast-image-wrapper {
    width: 70px;
    height: 70px;
  }
  .actor-name {
    font-size: 0.785rem;
  }
  .character-name {
    font-size: 0.6rem;
  }
}
</style>
