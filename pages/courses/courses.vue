<template>
    <div>
        <!-- Page Header -->
        <section class="bg-primary text-white py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="display-4 fw-bold">{{ t("courses.title") }}</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item">
                                    <NuxtLink :to="localePath('/')" class="text-white-50">
                                        {{ t("navigation.home") }}
                                    </NuxtLink>
                                </li>
                                <li class="breadcrumb-item active text-white" aria-current="page">
                                    {{ t("navigation.courses") }}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>

        <!-- Courses Filter -->
        <section class="py-4 bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex flex-wrap gap-2 justify-content-center">
                            <button v-for="category in categories" :key="category.id"
                                @click="selectedCategory = category.id" class="btn"
                                :class="selectedCategory === category.id ? 'btn-primary' : 'btn-outline-primary'">
                                {{ category.name }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Courses Grid -->
        <section class="py-5">
            <div class="container">
                <div class="row g-4">
                    <div v-for="course in filteredCourses" :key="course.id" class="col-lg-4 col-md-6">
                        <NuxtLink :to="localePath(`/courses/${course.id}`)" class="text-decoration-none">
                            <div class="course-card h-100">
                                <div class="card border-0 shadow-sm h-100 course-hover">
                                    <div class="card-img-top position-relative overflow-hidden">
                                        <img :src="course.image" :alt="course.title" class="w-100"
                                            style="height: 200px; object-fit: cover;">
                                        <div class="course-overlay">
                                            <div class="course-badge" :class="getCategoryClass(course.category)">
                                                {{ getCategoryName(course.category) }}
                                            </div>
                                            <div class="course-rating">
                                                <i class="bi bi-star-fill text-warning"></i>
                                                <span class="ms-1">{{ course.rating }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h5 class="card-title fw-bold mb-2">{{ course.title }}</h5>
                                        <p class="card-text text-muted flex-grow-1">{{ course.description }}</p>
                                        <div class="course-meta d-flex justify-content-between align-items-center mb-3">
                                            <div class="d-flex align-items-center">
                                                <i class="bi bi-clock text-muted me-1"></i>
                                                <small class="text-muted">{{ course.duration }}</small>
                                            </div>
                                            <div class="d-flex align-items-center">
                                                <i class="bi bi-people text-muted me-1"></i>
                                                <small class="text-muted">{{ course.students }} students</small>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="course-price">
                                                <span class="h5 fw-bold text-primary mb-0">{{ course.price }}</span>
                                                <small v-if="course.originalPrice"
                                                    class="text-muted text-decoration-line-through ms-2">
                                                    {{ course.originalPrice }}
                                                </small>
                                            </div>
                                            <div class="text-primary">
                                                <i class="bi bi-arrow-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    // Import shared courses data
    import { coursesData } from '~/data/courses.js'
    
    // ===== COMPOSABLES =====
    const { t } = useI18n()
    const localePath = useLocalePath()
    
    // ===== REACTIVE STATE =====
    const selectedCategory = ref('all')
    
    // ===== COMPUTED PROPERTIES =====
    const filteredCourses = computed(() => {
        if (selectedCategory.value === 'all') {
            return coursesData
        }
        return coursesData.filter(course => course.category === selectedCategory.value)
    })
    
    // ===== DATA =====
    const categories = [{
            id: 'all',
            name: t('courses.allCategories')
        },
        {
            id: 'web',
            name: t('courses.webDevelopment')
        },
        {
            id: 'mobile',
            name: t('courses.mobileDevelopment')
        },
        {
            id: 'design',
            name: t('courses.design')
        },
        {
            id: 'business',
            name: t('courses.business')
        }
    ]
    
    // ===== METHODS =====
    const getCategoryClass = (category) => {
        const classes = {
            web: 'bg-primary',
            mobile: 'bg-success',
            design: 'bg-warning',
            business: 'bg-info'
        }
        return classes[category] || 'bg-secondary'
    }
    const getCategoryName = (category) => {
        const names = {
            web: t('courses.webDevelopment'),
            mobile: t('courses.mobileDevelopment'),
            design: t('courses.design'),
            business: t('courses.business')
        }
        return names[category] || category
    }
    const handleCourseClick = (courseId) => {
        console.log('Course clicked:', courseId)
        console.log('Navigating to:', `/courses/${courseId}`)
        // Use programmatic navigation
        navigateTo(`/courses/${courseId}`)
    }
    // ===== LIFECYCLE HOOKS =====
    onMounted(() => {
        // Set page meta
        useHead({
            title: 'Courses - Nuxt i18n Bootstrap',
            meta: [{
                name: 'description',
                content: 'Explore our comprehensive courses in web development, mobile development, design, and business.'
            }]
        })
    })
</script>

<style scoped>
    /* ===== COURSE CARD ANIMATIONS ===== */
    .course-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
    }

    .course-hover {
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .course-hover:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15) !important;
    }

    /* Make sure the entire card area is clickable */
    .course-card a {
        display: block;
        height: 100%;
        text-decoration: none;
        color: inherit;
    }

    .course-card a:hover {
        text-decoration: none;
        color: inherit;
    }

    /* ===== COURSE OVERLAY ===== */
    .course-img-top {
        position: relative;
    }

    .course-overlay {
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .course-badge {
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 600;
        color: white;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .course-rating {
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 600;
    }

    /* ===== FILTER BUTTONS ===== */
    .btn {
        transition: all 0.3s ease;
        border-radius: 20px;
        padding: 8px 20px;
    }

    .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    /* ===== BREADCRUMB STYLES ===== */
    .breadcrumb-item+.breadcrumb-item::before {
        color: rgba(255, 255, 255, 0.5);
    }

    /* ===== MODAL ANIMATIONS ===== */
    .modal.fade .modal-dialog {
        transition: transform 0.3s ease-out;
        transform: translate(0, -50px);
    }

    .modal.show .modal-dialog {
        transform: none;
    }

    /* ===== RESPONSIVE ADJUSTMENTS ===== */
    @media (max-width: 768px) {
        .course-overlay {
            flex-direction: column;
            gap: 8px;
        }

        .course-badge,
        .course-rating {
            align-self: flex-start;
        }
    }

    /* ===== LOADING ANIMATION ===== */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .course-card {
        animation: fadeInUp 0.6s ease forwards;
    }

    .course-card:nth-child(1) {
        animation-delay: 0.1s;
    }

    .course-card:nth-child(2) {
        animation-delay: 0.2s;
    }

    .course-card:nth-child(3) {
        animation-delay: 0.3s;
    }

    .course-card:nth-child(4) {
        animation-delay: 0.4s;
    }

    .course-card:nth-child(5) {
        animation-delay: 0.5s;
    }

    .course-card:nth-child(6) {
        animation-delay: 0.6s;
    }
</style>