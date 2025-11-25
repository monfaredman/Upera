<template>
  <b-container fluid class="p-0">
    <b-row no-gutters class="app-footer-row">
      <b-col
        v-for="(item, index) in footerItems"
        :key="item.title"
        cols="6"
        md="3"
        style="border: 0.8px solid #525252; border-bottom: none"
        class="p-4 app-highlight-col d-flex flex-column align-items-start"
        :style="{ backgroundColor: index % 2 === 0 ? '#404040' : '#373737' }"
      >
        <div class="icon-title-wrapper">
          <img :src="item.icon" height="40" />
          <h6 class="my-3" style="font-size: large; text-align: right">
            {{ item.title }}
          </h6>
        </div>
        <p class="!text-right">{{ item.description }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      footerItems: [
        {
          title: 'پشتیبانی از تمامی دستگاه‌ها',
          icon: require('@/assets/images/app/1.png'),
          description:
            'سازگاری با انواع دستگاه‌ها از جمله تلفن‌های هوشمند، تبلت‌ها، رایانه‌ها و تلویزیون امکان تماشای محتوا را در هر زمان و مکانی فراهم می‌کند.',
        },
        {
          title: 'صرفه جویی در هزینه',
          icon: require('@/assets/images/app/2.png'),
          description:
            'بجای هزینه‌ی ماهانه برای کل محتوا، در آپرا میتوانید فقط برای فیلمی که دوست دارید هزینه پرداخت کنید.',
        },
        {
          title: 'محتوای متنوع و کامل',
          icon: require('@/assets/images/app/3.png'),
          description:
            'کامل ترین مجموعه فیلم و سریال های ایرانی و خارجی، دسترسی به محتوای متنوع و تجربه ای جدید در تماشای آنلاین',
        },
        {
          title: 'کیفیت پخش بالا',
          icon: require('@/assets/images/app/4.png'),
          description:
            'پلتفرم آپرا با ارائه کیفیت‌های متنوع پخش، به کاربران امکان می‌دهد تا بر اساس سرعت اینترنت خود، بهترین کیفیت را انتخاب کنند.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.app-footer-row {
  box-shadow: 0 -2px 15px #525252;
}

.icon-title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.app-footer-row h6 {
  font-family: 'dana-700';
}

.app-footer-row p {
  font-family: 'dana';
}

@media (max-width: 767.98px) {
  .app-footer-row {
    border-radius: 2rem;
    box-shadow: none;
    border: none;
    align-content: center;
    justify-content: center;
    background-color: var(--background-color);
    gap: 1.2rem;
    padding: 0rem 0.6rem;
    font-size: 0.7rem;
  }

  .app-footer-row > [class*='col-'] {
    border: none !important;
    border-radius: 1.2rem;
    flex: 0 0 46%;
    padding: 0.5rem !important;
  }

  .icon-title-wrapper {
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  }

  .app-footer-row h6 {
    font-size: 0.8rem !important;
    margin: 0;
    text-align: right !important;
  }

  .app-footer-row p {
    font-size: 0.7rem;
  }

  .app-footer-row img {
    height: 28px !important;
  }
}

.app-highlight-col {
  color: var(--text-color);
}
</style>
