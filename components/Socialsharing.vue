<template>
  <div class="modern-socialsharing">
    <div class="sharing-header">
      <i class="fas fa-share-alt header-icon"></i>
      <h3 class="header-title">اشتراک گذاری در شبکه های اجتماعی</h3>
      <p class="header-subtitle">
        این محتوا را با دوستان خود به اشتراک بگذارید
      </p>
    </div>

    <div class="sharing-grid">
      <!-- SMS -->
      <ShareNetwork
        network="sms"
        :url="url"
        :title="mtitle"
        :description="description"
        class="share-button sms-button"
      >
        <div class="button-content">
          <div class="icon-wrapper">
            <i class="fas fa-sms"></i>
          </div>
          <span class="button-label">پیامک</span>
        </div>
      </ShareNetwork>

      <!-- WhatsApp -->
      <ShareNetwork
        network="whatsapp"
        :url="url"
        :title="mtitle"
        :description="description"
        class="share-button whatsapp-button"
      >
        <div class="button-content">
          <div class="icon-wrapper">
            <i class="fab fa-whatsapp"></i>
          </div>
          <span class="button-label">واتس اپ</span>
        </div>
      </ShareNetwork>

      <!-- Telegram -->
      <ShareNetwork
        network="telegram"
        :url="url"
        :title="mtitle"
        :description="description"
        class="share-button telegram-button"
      >
        <div class="button-content">
          <div class="icon-wrapper">
            <i class="fab fa-telegram"></i>
          </div>
          <span class="button-label">تلگرام</span>
        </div>
      </ShareNetwork>

      <!-- LinkedIn -->
      <ShareNetwork
        network="linkedin"
        :url="url"
        :title="mtitle"
        class="share-button linkedin-button"
      >
        <div class="button-content">
          <div class="icon-wrapper">
            <i class="fab fa-linkedin"></i>
          </div>
          <span class="button-label">لینکدین</span>
        </div>
      </ShareNetwork>

      <!-- Skype -->
      <ShareNetwork
        network="skype"
        :url="url"
        :title="mtitle"
        :description="description"
        class="share-button skype-button"
      >
        <div class="button-content">
          <div class="icon-wrapper">
            <i class="fab fa-skype"></i>
          </div>
          <span class="button-label">اسکایپ</span>
        </div>
      </ShareNetwork>

      <!-- Facebook -->
      <ShareNetwork
        network="facebook"
        :url="url"
        :title="mtitle"
        :description="description"
        class="share-button facebook-button"
      >
        <div class="button-content">
          <div class="icon-wrapper">
            <i class="fab fa-facebook"></i>
          </div>
          <span class="button-label">فیسبوک</span>
        </div>
      </ShareNetwork>

      <!-- Twitter -->
      <ShareNetwork
        network="twitter"
        :url="url"
        :title="mtitle"
        class="share-button twitter-button"
      >
        <div class="button-content">
          <div class="icon-wrapper">
            <i class="fab fa-twitter"></i>
          </div>
          <span class="button-label">توییتر</span>
        </div>
      </ShareNetwork>

      <!-- Pinterest -->
      <ShareNetwork
        network="pinterest"
        :url="url"
        :title="mtitle"
        class="share-button pinterest-button"
      >
        <div class="button-content">
          <div class="icon-wrapper">
            <i class="fab fa-pinterest"></i>
          </div>
          <span class="button-label">پینترست</span>
        </div>
      </ShareNetwork>

      <!-- Email -->
      <ShareNetwork
        network="email"
        :url="url"
        :title="mtitle"
        :description="description"
        class="share-button email-button"
      >
        <div class="button-content">
          <div class="icon-wrapper">
            <i class="fa fa-envelope"></i>
          </div>
          <span class="button-label">ایمیل</span>
        </div>
      </ShareNetwork>
    </div>

    <!-- Copy Link Section -->
    <div class="copy-link-section">
      <div class="copy-link-wrapper">
        <input :value="url" readonly class="link-input" @click="selectAll" />
        <button class="copy-button" @click="copyLink">
          <i class="fas fa-copy"></i>
          <span>کپی لینک</span>
        </button>
      </div>
      <transition name="fade">
        <div v-if="showCopiedMessage" class="copied-message">
          <i class="fas fa-check-circle"></i>
          لینک کپی شد!
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mtitle: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      url: '',
      showCopiedMessage: false,
    }
  },
  mounted() {
    this.url = location.href
  },
  methods: {
    selectAll(event) {
      event.target.select()
    },
    async copyLink() {
      try {
        await navigator.clipboard.writeText(this.url)
        this.showCopiedMessage = true
        setTimeout(() => {
          this.showCopiedMessage = false
        }, 2000)
      } catch (err) {
        // Fallback for older browsers
        const input = document.querySelector('.link-input')
        input.select()
        document.execCommand('copy')
        this.showCopiedMessage = true
        setTimeout(() => {
          this.showCopiedMessage = false
        }, 2000)
      }
    },
  },
}
</script>

<style scoped>
.modern-socialsharing {
  padding: 24px;
  animation: fadeInUp 0.4s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Header Section */
.sharing-header {
  text-align: center;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 2px solid rgba(255, 122, 24, 0.2);
}

.header-icon {
  font-size: 48px;
  background: linear-gradient(90deg, #ff7a18 0%, #af002d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.header-title {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'dana-700', sans-serif;
  color: #1a1a2e;
  margin-bottom: 8px;
  letter-spacing: 0.3px;
}

.header-subtitle {
  font-size: 0.95rem;
  color: #6c757d;
  margin: 0;
  font-weight: 500;
}

/* Sharing Grid */
.sharing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 32px;
}

/* Share Buttons */
.share-button {
  background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
  border: 2px solid #e9ecef;
  border-radius: 16px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 120px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.share-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 122, 24, 0.1),
    rgba(175, 0, 45, 0.05)
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.share-button:hover::before {
  opacity: 1;
}

.share-button:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 8px 24px rgba(255, 122, 24, 0.25);
  border-color: rgba(255, 122, 24, 0.4);
}

.button-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
  z-index: 1;
}

.icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 24px;
  color: #ffffff;
}

.share-button:hover .icon-wrapper {
  transform: scale(1.15);
}

.button-label {
  font-size: 0.9rem;
  font-weight: 600;
  font-family: 'dana-700', sans-serif;
  color: #1a1a2e;
  transition: color 0.3s ease;
}

.share-button:hover .button-label {
  color: #ff7a18;
}

/* Platform-specific Colors */
.sms-button .icon-wrapper {
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
}

.whatsapp-button .icon-wrapper {
  background: linear-gradient(135deg, #25d366 0%, #075e54 100%);
}

.telegram-button .icon-wrapper {
  background: linear-gradient(135deg, #0088cc 0%, #006699 100%);
}

.linkedin-button .icon-wrapper {
  background: linear-gradient(135deg, #0077b5 0%, #00669c 100%);
}

.skype-button .icon-wrapper {
  background: linear-gradient(135deg, #00aff0 0%, #0078d4 100%);
}

.facebook-button .icon-wrapper {
  background: linear-gradient(135deg, #1877f2 0%, #0c5bb8 100%);
}

.twitter-button .icon-wrapper {
  background: linear-gradient(135deg, #1da1f2 0%, #0c8bd9 100%);
}

.pinterest-button .icon-wrapper {
  background: linear-gradient(135deg, #e60023 0%, #bd001c 100%);
}

.email-button .icon-wrapper {
  background: linear-gradient(135deg, #ea4335 0%, #c5221f 100%);
}

/* Copy Link Section */
.copy-link-section {
  background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%);
  border: 2px solid #dee2e6;
  border-radius: 16px;
  padding: 20px;
  margin-top: 24px;
}

.copy-link-wrapper {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}

.link-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #dee2e6;
  border-radius: 12px;
  font-size: 0.9rem;
  background: #ffffff;
  color: #495057;
  transition: all 0.3s ease;
  font-family: 'dana-700', sans-serif;
}

.link-input:focus {
  outline: none;
  border-color: #ff7a18;
  box-shadow: 0 0 0 4px rgba(255, 122, 24, 0.1);
}

.copy-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(90deg, #ff7a18 0%, #af002d 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: 'dana-700', sans-serif;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(255, 122, 24, 0.3);
}

.copy-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 122, 24, 0.4);
}

.copy-button:active {
  transform: translateY(0);
}

.copy-button i {
  font-size: 16px;
}

/* Copied Message */
.copied-message {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  background: linear-gradient(135deg, #28a745 0%, #218838 100%);
  color: #ffffff;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: 'dana-700', sans-serif;
  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
  animation: slideInUp 0.3s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  .header-title {
    color: #ffffff;
  }

  .header-subtitle {
    color: #adb5bd;
  }

  .share-button {
    background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
    border-color: #2d3748;
  }

  .button-label {
    color: #ffffff;
  }

  .share-button:hover .button-label {
    color: #ff7a18;
  }

  .copy-link-section {
    background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
    border-color: #2d3748;
  }

  .link-input {
    background: #0f1419;
    border-color: #2d3748;
    color: #ffffff;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .modern-socialsharing {
    padding: 20px;
  }

  .sharing-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .share-button {
    min-height: 100px;
    padding: 12px;
  }

  .icon-wrapper {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  .button-label {
    font-size: 0.85rem;
  }

  .header-icon {
    font-size: 40px;
  }

  .header-title {
    font-size: 1.3rem;
  }

  .header-subtitle {
    font-size: 0.85rem;
  }

  .copy-link-wrapper {
    flex-direction: column;
  }

  .copy-button {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .modern-socialsharing {
    padding: 16px;
  }

  .sharing-grid {
    gap: 10px;
  }

  .share-button {
    min-height: 90px;
    padding: 10px;
    border-radius: 12px;
  }

  .icon-wrapper {
    width: 36px;
    height: 36px;
    font-size: 18px;
  }

  .button-label {
    font-size: 0.8rem;
  }

  .header-icon {
    font-size: 36px;
  }

  .header-title {
    font-size: 1.2rem;
  }

  .header-subtitle {
    font-size: 0.8rem;
  }

  .copy-link-section {
    padding: 16px;
  }

  .link-input {
    font-size: 0.8rem;
    padding: 10px 12px;
  }

  .copy-button {
    font-size: 0.8rem;
    padding: 10px 20px;
  }
}
</style>
