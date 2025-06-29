<template>
  <div :class="{ rtl: currentLocale === 'ar' }" :dir="currentLocale === 'ar' ? 'rtl' : 'ltr'">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <NuxtLink :to="localePath('/')" class="navbar-brand">
          {{ t("common.Brand_Name") }}
        </NuxtLink>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <NuxtLink :to="localePath('/')" class="nav-link">
                {{ t("navigation.home") }}
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink :to="localePath('/courses/courses')" class="nav-link">
                {{ t("navigation.courses") }}
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink :to="localePath('/about')" class="nav-link">
                {{ t("navigation.about") }}
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink :to="localePath('/contact')" class="nav-link">
                {{ t("navigation.contact") }}
              </NuxtLink>
            </li>
          </ul>

          <!-- Language Switcher -->
          <div class="dropdown" ref="dropdownRef">
            <button class="btn btn-outline-light dropdown-toggle" type="button" :aria-expanded="isDropdownOpen"
              :aria-haspopup="true" aria-label="Select language" @click="toggleDropdown">
              {{ t("common.language") }}
            </button>
            <ul class="dropdown-menu" :class="{ show: isDropdownOpen }" role="menu" aria-label="Language options">
              <li v-for="loc in availableLocales" :key="loc.code" role="none">
                <NuxtLink :to="switchLocalePath(loc.code)" class="dropdown-item"
                  :class="{ active: currentLocale === loc.code }" role="menuitem"
                  :aria-current="currentLocale === loc.code ? 'true' : undefined"
                  @click="handleLanguageChange(loc.code)">
                  {{ loc.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-light py-4 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <p class="mb-0">{{ t("footer.copyright") }}</p>
          </div>
          <div class="col-md-6 text-md-end">
            <a href="#" class="text-light me-3">{{ t("footer.privacy") }}</a>
            <a href="#" class="text-light">{{ t("footer.terms") }}</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
  // ===== COMPOSABLES =====
  const {
    locale,
    locales,
    t
  } = useI18n()
  const localePath = useLocalePath()
  const switchLocalePath = useSwitchLocalePath()
  // ===== REACTIVE STATE =====
  const isDropdownOpen = ref(false)
  const dropdownRef = ref()
  // ===== COMPUTED PROPERTIES =====
  const currentLocale = computed(() => locale.value)
  const availableLocales = computed(() =>
    locales.value.filter(loc => loc.code !== 'default')
  )
  // ===== METHODS =====
  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value
  }
  const closeDropdown = () => {
    isDropdownOpen.value = false
  }
  const handleLanguageChange = (localeCode) => {
    closeDropdown()
    // Optional: Add analytics tracking here
    // useTrackEvent('language_changed', { from: currentLocale.value, to: localeCode })
  }
  const handleClickOutside = (event) => {
    const target = event.target
    if (dropdownRef.value && !dropdownRef.value.contains(target)) {
      closeDropdown()
    }
  }
  // ===== LIFECYCLE HOOKS =====
  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
  // ===== KEYBOARD NAVIGATION =====
  const handleKeydown = (event) => {
    if (event.key === 'Escape' && isDropdownOpen.value) {
      closeDropdown()
    }
  }
  onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
  })
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
  })
</script>

<style scoped>
  /* ===== NAVIGATION STYLES ===== */
  .navbar-brand {
    font-weight: bold;
    transition: opacity 0.2s ease;
  }

  .navbar-brand:hover {
    opacity: 0.8;
  }

  .nav-link {
    transition: color 0.3s ease;
    position: relative;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: currentColor;
    transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  /* ===== DROPDOWN STYLES ===== */
  .dropdown-item {
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .dropdown-item.active {
    background-color: var(--bs-primary);
    color: white;
  }

  .dropdown-item:hover:not(.active) {
    background-color: var(--bs-light);
  }

  /* ===== FOOTER STYLES ===== */
  footer a {
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  footer a:hover {
    opacity: 0.8;
  }

  /* ===== RTL SUPPORT ===== */
  .rtl {
    direction: rtl;
  }

  .rtl .navbar-nav {
    margin-right: auto !important;
    margin-left: 0 !important;
  }

  .rtl .text-md-end {
    text-align: right !important;
  }

  /* ===== RESPONSIVE ADJUSTMENTS ===== */
  @media (max-width: 991.98px) {
    .dropdown {
      margin-top: 0.5rem;
    }

    .dropdown-menu {
      position: static !important;
      float: none;
      width: 100%;
      margin-top: 0.5rem;
    }
  }

  /* ===== ACCESSIBILITY ENHANCEMENTS ===== */
  .dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
  }

  .dropdown-item:focus {
    outline: 2px solid var(--bs-primary);
    outline-offset: -2px;
  }
</style>