<template>
  <button
    v-if="exist"
    :class="['btn', 'btn-main', { 'btn-block': block }]"
    @click="$emit('download')"
  >
    <span>
      <i class="fa fa-download pr-2" />
      <span>{{ label }}</span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'DownloadButton',
  props: {
    exist: { type: Boolean, default: false },
    label: { type: String, required: true },
    block: { type: Boolean, default: false },
  },
}
</script>
