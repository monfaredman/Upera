<template>
  <div class="count-down count-down-invert text-center">
    <div class="count-down-num">
      {{ value }}
    </div>
    <div class="count-down-caption">{{ unit }}</div>
  </div>
</template>

<script>
export default {
  name: 'CountdownUnit',
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
  },
}
</script>
