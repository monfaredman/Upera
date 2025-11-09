<template>
  <div id="checkcontainer">
    <div class="container-fluid">
      <h1 class="page-title mb-2">دسته بندی</h1>

      <!-- Loading Skeleton -->
      <div
        v-if="loading"
        class="row genre-link align-items-center mt-lg-3 mt-md-3 pt-lg-3 pt-md-3"
      >
        <div v-for="n in 12" :key="n" class="col-6 col-md-4 col-lg-3">
          <div class="category-box skeleton">
            <div class="skeleton-image"></div>
            <div class="skeleton-content">
              <div class="skeleton-title"></div>
              <div class="skeleton-icon"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Actual Content -->
      <div
        v-else
        class="row genre-link align-items-center mt-lg-3 mt-md-3 pt-lg-3 pt-md-3"
      >
        <div
          v-for="(item, index) in filtercontents"
          :key="index"
          class="col-6 col-md-4 col-lg-3"
        >
          <nuxt-link
            :to="{
              path: item.href,
            }"
            class="category-box"
          >
            <div class="category-image">
              <b-img
                v-bind="{
                  fluidGrow: true,
                  blank: true,
                  blankColor: '#bbb',
                  show: true,
                }"
                :src="
                  item.type === 'genre'
                    ? item.cover
                    : require(`@/assets/images/category/${item.cover}.png`)
                "
                :alt="item.fa"
                class="rounded category-img"
              />
            </div>

            <div class="category-content">
              <span v-if="item.fa" class="category-title">
                {{ item.fa }}
                <i class="fa fa-chevron-left" />
              </span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    let res
    res = await context.app.$axios.get(
      '/new_genres' + context.store.getters.filtercontents
    )

    return { data: res.data.genres }
  },
  data() {
    return {
      data: {},
      id: '',
      loading: true,
      categories: [
        {
          fa: 'بازیگر ایرانی',
          en: 'iranian-actors',
          href: '/casts/iranian-actors',
          cover: 'cast-ir-category',
        },
        {
          fa: 'بازیگر خارجی',
          en: 'foreign-actors',
          href: '/casts/foreign-actors',
          cover: 'cast-ir-category',
        },
        {
          fa: 'کارگردان',
          en: 'directors',
          href: '/casts/directors',
          cover: 'cast-category',
        },
        {
          fa: 'دوبله آپرا',
          en: 'opera-dubbing',
          href: '/lists/internal_studio',
          cover: 'dubbing-category',
        },
        {
          fa: 'انیمه',
          en: 'anime',
          href: '/lists/animation',
          cover: 'anime-category',
        },
        {
          fa: '۲۵۰ فیلم و سریال برتر',
          en: 'top-250-movies-series',
          href: '/lists/hot',
          cover: '250-category',
        },
        {
          fa: 'ویديو کست',
          en: 'videocast',
          href: '/lists/videocast',
          cover: 'cast-category',
        },
        {
          fa: 'اسکار',
          en: 'oscar',
          href: '/lists/oscar',
          cover: 'oscar-category',
        },
      ],
    }
  },
  head() {
    return { title: 'دسته بندی' }
  },
  computed: {
    filtercontents() {
      return [
        ...this.categories,
        ...this.data.map((genre) => ({
          fa: genre.fa,
          en: genre.en,
          cover: genre.cover || 'top_250_movies_series',
          type: 'genre',
        })),
      ]
    },
  },
  mounted() {
    // Simulate loading completion
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  methods: {
    toLowerCase(str) {
      return str.toLowerCase()
    },
  },
}
</script>

<style scoped>
.container-fluid {
  padding-top: 6rem;
  padding-bottom: 3rem;
}
.page-title {
  font-weight: 600 !important;
  font-size: 24px !important;
  text-align: right;
  color: #ffffff;
  text-align: right !important;
}

.category-box {
  display: block;
  border-radius: 12px;
  border: 1.96px solid #404040;
  background: #171717;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-decoration: none;
  height: 332px;
}

.category-box:hover {
  transform: translateY(-5px);
}

.category-box:hover .category-img {
  transform: scale(1.1);
  opacity: 1;
}

.category-box:hover .category-content {
  opacity: 0;
  transform: translateY(20px);
}

.category-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  overflow: hidden;
  border-radius: 12px;
  background: linear-gradient(
    0deg,
    #171717 0.15%,
    rgba(125, 125, 125, 0) 50.15%
  ) !important;
}

.category-img {
  width: 100%;
  object-fit: none;
  transition: all 0.3s ease;
  opacity: 0.7;
  background: linear-gradient(
    0deg,
    #171717 0.15%,
    rgba(125, 125, 125, 0) 50.15%
  ) !important;
}

.category-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px 17px 10px 15px;
  background: linear-gradient(
    180deg,
    transparent -1.85%,
    black 70.15%
  ) !important ;
  transition: all 0.3s ease;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.category-title {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.chevron-icon {
  font-size: 1.5rem;
  font-weight: bold;
}

.genre-link {
  margin: 0 -10px;
}

.col-xs-12,
.col-sm-6,
.col-md-4,
.col-lg-3 {
  padding: 10px;
}

/* Skeleton Styles */
.skeleton {
  position: relative;
  overflow: hidden;
}

.skeleton::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  animation: skeleton-loading 1.5s infinite;
  z-index: 10;
}

.skeleton-image {
  width: 100%;
  height: 100%;
  background: #2a2a2a;
  border-radius: 12px;
  position: absolute;
  top: 0;
  left: 0;
}

.skeleton-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px 17px 10px 15px;
  background: linear-gradient(180deg, transparent -1.85%, #1a1a1a 70.15%);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.skeleton-title {
  height: 16px;
  background: #404040;
  border-radius: 4px;
  flex: 1;
  margin-right: 10px;
}

.skeleton-icon {
  width: 16px;
  height: 16px;
  background: #404040;
  border-radius: 50%;
}

@keyframes skeleton-loading {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

@media (max-width: 2000px) {
  .category-box {
    height: 390px;
  }

  .category-box:hover .category-img {
    transform: scale(1.1);
    opacity: 0.8;
  }

  .category-img {
    object-fit: contain;
    padding: 20px;
  }
}

@media (max-width: 1440px) {
  .category-box {
    height: 320px;
  }
}
@media (max-width: 1200px) {
  .category-box {
    height: 300px;
  }
}
@media (max-width: 992px) {
  .category-box {
    height: 280px;
  }
}

@media (max-width: 768px) {
  .category-box {
    height: 100%;
  }
  .category-box {
    height: 180px;
  }

  .page-title {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .category-box {
    height: 200px;
    padding: 0 !important;
  }

  .category-title {
    font-size: 1rem;
    padding: 0 !important;
  }

  .category-title {
    font-size: 13px;
    padding: 0 !important;
  }

  .category-img {
    padding: 5px;
  }

  .skeleton-title {
    height: 14px;
  }

  .skeleton-icon {
    width: 14px;
    height: 14px;
  }
}
</style>
