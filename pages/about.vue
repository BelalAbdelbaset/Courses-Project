<template>
  <div>
    <!-- Page Header -->
    <section class="bg-primary text-white py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="display-4 fw-bold">{{ $t('about.title') }}</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item">
                  <NuxtLink :to="localePath('/')" class="text-white-50">
                    {{ $t('navigation.home') }}
                  </NuxtLink>
                </li>
                <li class="breadcrumb-item active text-white" aria-current="page">
                  {{ $t('navigation.about') }}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- About Content -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="card border-0 shadow-sm">
              <div class="card-body p-5">
                <p class="lead text-muted mb-4">{{ $t('about.content') }}</p>
                
                <div class="row g-4 mt-4">
                  <div class="col-md-6">
                    <div class="d-flex align-items-start">
                      <div class="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                        <i class="bi bi-target text-primary"></i>
                      </div>
                      <div>
                        <h5 class="fw-bold mb-2">{{ $t('about.mission') }}</h5>
                        <p class="text-muted mb-0">{{ $t('about.mission_content') }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="d-flex align-items-start">
                      <div class="bg-success bg-opacity-10 rounded-circle p-3 me-3">
                        <i class="bi bi-people text-success"></i>
                      </div>
                      <div>
                        <h5 class="fw-bold mb-2">Our Team</h5>
                        <p class="text-muted mb-0">Experienced developers passionate about web technologies and user experience.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Team Stats -->
                <div class="row text-center mt-5 pt-4 border-top">
                  <div class="col-md-3 col-6 mb-3">
                    <div class="fw-bold text-primary display-6">5+</div>
                    <small class="text-muted">Years Experience</small>
                  </div>
                  <div class="col-md-3 col-6 mb-3">
                    <div class="fw-bold text-success display-6">100+</div>
                    <small class="text-muted">Projects Completed</small>
                  </div>
                  <div class="col-md-3 col-6 mb-3">
                    <div class="fw-bold text-info display-6">50+</div>
                    <small class="text-muted">Happy Clients</small>
                  </div>
                  <div class="col-md-3 col-6 mb-3">
                    <div class="fw-bold text-warning display-6">24/7</div>
                    <small class="text-muted">Support</small>
                  </div>
                </div>

                <div class="text-center mt-4">
                  <NuxtLink :to="localePath('/contact')" class="btn btn-primary btn-lg">
                    {{ $t('navigation.contact') }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="bg-light py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="display-6 fw-bold">Technologies We Use</h2>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-md-2 col-4" v-for="tech in technologies" :key="tech.name">
            <div class="card text-center border-0 shadow-sm h-100">
              <div class="card-body p-3">
                <div class="mb-2" v-html="tech.icon"></div>
                <small class="fw-bold">{{ tech.name }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Import i18n composables
const localePath = useLocalePath()

// Set page meta
useHead({
  title: 'About - Nuxt i18n Bootstrap',
  meta: [
    { name: 'description', content: 'Learn more about our team and mission' }
  ]
})

// Technologies data
const technologies = ref([
  { name: 'Vue.js', icon: '<div class="text-success display-6">V</div>' },
  { name: 'Nuxt.js', icon: '<div class="text-success display-6">N</div>' },
  { name: 'Bootstrap', icon: '<div class="text-primary display-6">B</div>' },
  { name: 'JavaScript', icon: '<div class="text-warning display-6">JS</div>' },
  { name: 'TypeScript', icon: '<div class="text-info display-6">TS</div>' },
  { name: 'Node.js', icon: '<div class="text-success display-6">⚡</div>' }
])
</script>

<style scoped>
.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.5);
}

.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
}

.bi-target::before { content: "🎯"; }
.bi-people::before { content: "👥"; }
</style>