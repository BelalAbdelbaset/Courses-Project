<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Get the current locale
const { locale } = useI18n()

// Global head configuration
useHead({
  htmlAttrs: {
    lang: computed(() => locale.value || 'en')
  },
  titleTemplate: '%s | Nuxt i18n Bootstrap'
})
</script>