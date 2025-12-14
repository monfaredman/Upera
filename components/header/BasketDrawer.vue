<template>
  <client-only>
    <transition name="basket-drawer-slide">
      <div v-if="visible" class="basket-drawer-overlay" @click.self="emitClose">
        <div class="basket-drawer">
          <div class="basket-drawer-header">
            <button class="close-button" @click="emitClose">
              <i class="fa fa-times" />
            </button>
          </div>
          <div class="basket-drawer-content">
            <BasketPopoverContent @close-popover="emitClose" />
          </div>
        </div>
      </div>
    </transition>
  </client-only>
</template>

<script>
import BasketPopoverContent from './BasketPopoverContent.vue'

export default {
  name: 'BasketDrawer',
  components: {
    BasketPopoverContent,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    visible(val) {
      if (!process.client) return
      document.body.style.overflow = val ? 'hidden' : ''
    },
  },
  beforeDestroy() {
    if (!process.client) return
    document.body.style.overflow = ''
  },
  methods: {
    emitClose() {
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
.basket-drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: flex-end;
}

.basket-drawer {
  width: 100%;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.basket-drawer-header {
  display: flex;
  justify-content: flex-end;
  padding: 16px 20px 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.basket-drawer-content {
  padding: 20px;
}

.basket-drawer-slide-enter-active,
.basket-drawer-slide-leave-active {
  transition: opacity 0.3s ease;
}

.basket-drawer-slide-enter,
.basket-drawer-slide-leave-to {
  opacity: 0;
}

/* Dark Mode Support */
.theme-dark .basket-drawer {
  background-color: #1f1f1f;
  color: white;
}

.theme-dark .basket-drawer-header {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.theme-dark .close-button {
  color: #fff;
}
</style>
