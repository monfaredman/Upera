<template>
  <div class="row">
    <div class="col-12">
      <div class="d-flex align-items-center justify-content-center pt-5 pb-5">
        <svg
          id="loading"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            id="loading_circle"
            fill="none"
            stroke="#ff6f00"
            stroke-width="4"
            stroke-linecap="round"
            cx="60"
            cy="60"
            r="55"
          />
        </svg>
        <br />
      </div>
      <h5 class="text-center">{{ message }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    message: {
      type: String,
      default: 'در حال بررسی',
    },
  },
}
</script>

<style scoped>
#loading_circle {
  stroke-dasharray: 350;
  stroke-dashoffset: 350;
  animation: loading 2.5s linear forwards infinite;
}

#loading {
  animation: rotate 2s linear forwards infinite;
}

@keyframes loading {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
