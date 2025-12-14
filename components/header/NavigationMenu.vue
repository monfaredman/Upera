<template>
  <div
    class="category d-flex align-items-center h-full header-category-profile"
    :class="{ open: isOpen }"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="header-links d-md-flex align-items-center mr-md-2 mr-lg-3 h-full"
      :class="linkClasses"
    >
      <nuxt-link
        :to="mainLink.to"
        class="d-flex align-items-center header-link"
        :class="mainLink.classes"
      >
        <i v-if="mainLink.icon" :class="mainLink.icon" />
        <span :class="{ 'ml-md-2': mainLink.icon }">{{ mainLink.text }}</span>
        <i
          v-if="hasDropdown"
          class="icon-expand-arrow"
          :class="{ 'hide-mobile': hideOnMobile }"
        />
      </nuxt-link>
    </div>

    <ul
      v-if="showMenu"
      class="container-fluid category-menu header-menu mega-menu hide-mobile"
      :class="menuClasses"
    >
      <li v-for="item in visibleMenuItems" :key="item.to">
        <nuxt-link :to="item.to">
          {{ item.text }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavigationMenu',
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
    linkClasses: {
      type: String,
      default: '',
    },
    menuClasses: {
      type: String,
      default: '',
    },
  },
  computed: {
    showMenu() {
      return this.menuItems.length > 0 && this.isOpen
    },
    hasDropdown() {
      return this.menuItems.length > 0
    },
    visibleMenuItems() {
      return this.menuItems.filter((item) => item.show !== false)
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
