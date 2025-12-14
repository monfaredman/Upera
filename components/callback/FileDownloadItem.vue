<template>
  <div class="download-links-item">
    <div class="row">
      <div class="col-sm-6">
        <div class="row">
          <div class="col-9">
            <div class="font-weight-bold">
              {{ item.name }}
            </div>
            <div v-show="item.presale" class="download-suitable">
              تاریخ پخش: {{ item.presale_date }}
            </div>
          </div>
          <div class="col-3 d-flex justify-end align-items-end text-right">
            <div
              v-if="!item.screening.ekran && item.link2"
              class="download-size"
            >
              <a :href="item.link2"> لینک کمکی </a>
            </div>
          </div>
        </div>
      </div>

      <div v-if="item.screening.ekran" class="col-sm-6">
        <div class="d-flex h-100 align-items-end">
          <div class="download-full-link">
            <button
              class="btn btn-secondary btn-block"
              @click="$emit('watch', item.screening.ekran_id)"
            >
              تماشا
              <i class="icon-play" />
            </button>
          </div>
        </div>
      </div>

      <div v-else class="col-sm-6">
        <div class="d-flex h-100 align-items-end">
          <div class="download-link">
            <a :href="item.link1" class="btn btn-secondary btn-block">
              {{ $t('show.download') }}
              <i class="icon-download" />
            </a>
          </div>
          <div class="copy-link">
            <button
              class="btn btn-copy btn-block"
              @click="$emit('copy', item.link1)"
            >
              کپی لینک
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileDownloadItem',
  props: {
    item: {
      type: Object,
      required: true,
      validator: (value) => {
        return (
          value.name &&
          value.link1 &&
          value.screening &&
          typeof value.screening.ekran !== 'undefined'
        )
      },
    },
  },
}
</script>
