<template>
  <component
    :is="isExternal ? 'a' : 'nuxt-link'"
    :to="to"
    :href="href"
    class="header-link d-flex align-items-center"
    :class="[
      flexColumn ? 'flex-column justify-content-center text-nowrap' : '',
      additionalClasses,
    ]"
  >
    <i v-if="icon" :class="icon" />
    <span v-if="text" class="ml-md-2" v-html="text" />
    <slot />
  </component>
</template>

<script>
export default {
  name: 'HeaderLink',
  props: {
    to: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    flexColumn: {
      type: Boolean,
      default: false,
    },
    isExternal: {
      type: Boolean,
      default: false,
    },
    additionalClasses: {
      type: String,
      default: '',
    },
  },
}
</script>
