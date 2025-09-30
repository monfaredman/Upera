<template>
  <client-only>
    <countdown :left-time="presaleTimestamp * 1000">
      <div
        slot="process"
        slot-scope="{ timeObj }"
        class="d-flex align-items-center justify-content-center count-down-wrapper"
      >
        <CountdownUnit v-if="timeObj.d" :value="timeObj.d" unit="روز" />
        <CountdownUnit :value="timeObj.h" unit="ساعت" />
        <CountdownUnit :value="timeObj.m" unit="دقیقه" />
        <CountdownUnit :value="timeObj.s" unit="ثانیه" />
      </div>
    </countdown>
  </client-only>
</template>

<script>
import CountdownUnit from '@/components/item/showcase/CountdownUnit'

export default {
  name: 'PresaleCountdown',
  components: {
    CountdownUnit,
  },
  props: {
    presaleTimestamp: {
      type: Number,
      required: true,
    },
  },
}
</script>
