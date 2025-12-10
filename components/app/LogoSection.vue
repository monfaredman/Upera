<template>
  <div class="logo-section">
    <img src="@/assets/images/app/new-logo.png" alt="Logo" height="80" />
  </div>
</template>

<style scoped>
.logo-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--background-color);
  margin-bottom: 2rem;
  padding: 0 1rem;
}

.logo-section img {
  height: 60px;
  max-width: 100%;
  width: auto;
  object-fit: contain;
}

@media (max-width: 768px) {
  .logo-section {
    margin-bottom: 3rem;
    padding-top: 1.5rem;
  }

  .logo-section img {
    height: 60px;
  }
}

@media (max-width: 480px) {
  .logo-section {
    margin-bottom: 2rem;
  }

  .logo-section img {
    height: 48px;
  }
}
</style>
