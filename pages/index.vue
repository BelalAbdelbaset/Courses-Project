<template>
    <div>
        <!-- Hero Section -->
        <section class="hero bg-primary text-white py-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <h1 class="display-4 fw-bold mb-3">{{ $t('home.title') }}</h1>
                        <p class="lead mb-4">{{ $t('home.subtitle') }}</p>
                        <p class="mb-4">{{ $t('home.description') }}</p>
                        <NuxtLink :to="localePath('/courses/courses')" class="btn btn-light btn-lg">
                            {{ $t('home.cta') }}
                        </NuxtLink>
                    </div>
                    <div class="col-lg-6 text-center">
                        <div class="p-5">
                            <div class="bg-white bg-opacity-25 rounded-circle d-inline-flex align-items-center justify-content-center"
                                style="width: 200px; height: 200px;">
                                <i class="bi bi-rocket-takeoff display-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mb-5">
                        <h2 class="display-5 fw-bold">{{ $t('home.features.title') }}</h2>
                    </div>
                </div>
                <div class="row g-4">
                    <div class="col-md-4">
                        <div class="card h-100 border-0 shadow-sm">
                            <div class="card-body text-center p-4">
                                <div class="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                    style="width: 80px; height: 80px;">
                                    <i class="bi bi-phone display-6 text-primary"></i>
                                </div>
                                <h5 class="card-title fw-bold">{{ $t('home.features.responsive') }}</h5>
                                <p class="card-text text-muted">{{ $t('home.features.responsive_desc') }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card h-100 border-0 shadow-sm">
                            <div class="card-body text-center p-4">
                                <div class="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                    style="width: 80px; height: 80px;">
                                    <i class="bi bi-translate display-6 text-success"></i>
                                </div>
                                <h5 class="card-title fw-bold">{{ $t('home.features.multilingual') }}</h5>
                                <p class="card-text text-muted">{{ $t('home.features.multilingual_desc') }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card h-100 border-0 shadow-sm">
                            <div class="card-body text-center p-4">
                                <div class="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                    style="width: 80px; height: 80px;">
                                    <i class="bi bi-lightning display-6 text-info"></i>
                                </div>
                                <h5 class="card-title fw-bold">{{ $t('home.features.modern') }}</h5>
                                <p class="card-text text-muted">{{ $t('home.features.modern_desc') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="bg-light py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h3 class="fw-bold mb-3">Ready to get started?</h3>
                        <p class="text-muted mb-4">Join thousands of developers who are already using our platform</p>
                        <NuxtLink :to="localePath('/courses/courses')" class="btn btn-primary btn-lg me-3">
                            {{ $t('home.cta') }}
                        </NuxtLink>
                        <NuxtLink :to="localePath('/about')" class="btn btn-outline-primary btn-lg">
                            {{ $t('navigation.about') }}
                        </NuxtLink>
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
        title: 'Home - Nuxt i18n Bootstrap',
        meta: [{
            name: 'description',
            content: 'Welcome to our Nuxt.js application with Bootstrap and i18n support'
        }]
    })
</script>

<style scoped>
    .hero {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
    }

    .bi {
        font-family: 'bootstrap-icons';
    }

    /* Bootstrap Icons fallback */
    .bi-rocket-takeoff::before {
        content: "🚀";
    }

    .bi-phone::before {
        content: "📱";
    }

    .bi-translate::before {
        content: "🌐";
    }

    .bi-lightning::before {
        content: "⚡";
    }
</style>