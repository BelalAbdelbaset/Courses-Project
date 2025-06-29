<template>
  <div class="container py-5">
    <div v-if="!course" class="text-center">
      <div class="spinner-border text-primary mb-3" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <h5>Loading course...</h5>
      <p>Route ID: {{ route.params.id }}</p>
    </div>
    
    <div v-else>
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item">
            <NuxtLink to="/courses">Courses</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ course.title }}
          </li>
        </ol>
      </nav>
      
      <!-- Back to Courses Button -->
      <div class="mb-4">
        <NuxtLink to="/courses/courses" class="btn btn-outline-primary">
          <i class="bi bi-arrow-left me-2"></i>
          Back to Courses
        </NuxtLink>
      </div>
      
      <div class="row">
        <div class="col-lg-8">
          <div class="card mb-4">
            <img :src="course.image" :alt="course.title" class="card-img-top" style="height: 300px; object-fit: cover;">
            <div class="card-body">
              <h1 class="mb-3">{{ course.title }}</h1>
              <p class="lead mb-4">{{ course.description }}</p>
              
              <div class="row mb-4">
                <div class="col-md-3">
                  <div class="text-center">
                    <i class="bi bi-clock text-primary fs-2"></i>
                    <p class="mb-0"><strong>Duration</strong></p>
                    <p class="text-muted">{{ course.duration }}</p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="text-center">
                    <i class="bi bi-people text-primary fs-2"></i>
                    <p class="mb-0"><strong>Students</strong></p>
                    <p class="text-muted">{{ course.students.toLocaleString() }}</p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="text-center">
                    <i class="bi bi-star-fill text-warning fs-2"></i>
                    <p class="mb-0"><strong>Rating</strong></p>
                    <p class="text-muted">{{ course.rating }}</p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="text-center">
                    <i class="bi bi-bar-chart text-primary fs-2"></i>
                    <p class="mb-0"><strong>Level</strong></p>
                    <p class="text-muted">{{ course.level }}</p>
                  </div>
                </div>
              </div>

              <div class="mb-4">
                <h5>What you'll learn:</h5>
                <ul class="list-unstyled">
                  <li v-for="outcome in course.learningOutcomes" :key="outcome" class="mb-2">
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    {{ outcome }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4">
          <div class="card sticky-top" style="top: 20px;">
            <div class="card-body">
              <h5 class="card-title">Enroll Now</h5>
              <div class="mb-3">
                <span class="h3 text-primary fw-bold">{{ course.price }}</span>
                <span v-if="course.originalPrice" class="text-muted text-decoration-line-through ms-2">
                  {{ course.originalPrice }}
                </span>
              </div>
              <button class="btn btn-primary w-100 btn-lg mb-3">Enroll Now</button>
              <div class="text-center">
                <small class="text-muted">30-Day Money-Back Guarantee</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import shared courses data and helper function
import { getCourseById } from '~/data/courses.js'

const route = useRoute()
const course = ref(null)

const loadCourse = () => {
  console.log('Loading course with ID:', route.params.id)
  console.log('Route params:', route.params)
  console.log('ID type:', typeof route.params.id)
  console.log('ID value:', route.params.id)
  
  const foundCourse = getCourseById(route.params.id)
  
  console.log('Found course:', foundCourse)
  
  if (foundCourse) {
    course.value = foundCourse
    console.log('Course loaded successfully:', course.value)
    
    // Set page metadata
    useHead({
      title: `${foundCourse.title} - Course Details`,
      meta: [
        {
          name: 'description',
          content: foundCourse.description
        },
        {
          property: 'og:title',
          content: foundCourse.title
        },
        {
          property: 'og:description',
          content: foundCourse.description
        },
        {
          property: 'og:image',
          content: foundCourse.image
        }
      ]
    })
  } else {
    console.error('Course not found for ID:', route.params.id)
    throw createError({
      statusCode: 404,
      statusMessage: 'Course not found'
    })
  }
}

onMounted(() => {
  console.log('Course detail page mounted')
  console.log('Route:', route)
  console.log('Route params:', route.params)
  loadCourse()
})

watch(() => route.params.id, (newId, oldId) => {
  console.log('Route changed from', oldId, 'to', newId)
  if (newId !== oldId) {
    loadCourse()
  }
}, { immediate: true })
</script>

<style scoped>
.sticky-top {
  z-index: 1020;
}

.card {
  border: none;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.card-img-top {
  border-top-left-radius: calc(0.375rem - 1px);
  border-top-right-radius: calc(0.375rem - 1px);
}
</style>