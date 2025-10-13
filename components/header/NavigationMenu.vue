<template>
  <div
    class="category d-flex align-items-center h-full header-category-profile"
    :class="{ open: isOpen }"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="header-links d-md-flex align-items-center mr-md-2 mr-lg-3 h-full"
    >
      <HeaderLink
        :to="mainLink.to"
        :icon="mainLink.icon"
        :text="mainLink.text"
        :additional-classes="mainLink.classes"
      />
    </div>
    <ul
      v-if="showMenu && !hideOnMobile"
      class="container-fluid category-menu header-menu mega-menu hide-mobile"
    >
      <li v-for="item in menuItems" :key="item.to">
        <nuxt-link :to="item.to">
          {{ item.text }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import HeaderLink from './HeaderLink.vue'

export default {
  name: 'NavigationMenu',
  components: {
    HeaderLink,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    mainLink: {
      type: Object,
      required: true,
      validator: (link) => ['to', 'text'].every((key) => key in link),
    },
    menuItems: {
      type: Array,
      default: () => [],
    },
    hideOnMobile: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showMenu() {
      return this.menuItems.length > 0 && this.isOpen
    },
  },
  methods: {
    handleMouseOver() {
      this.$emit('menu-hover')
    },
    handleMouseLeave() {
      this.$emit('menu-leave')
    },
  },
}
</script>
