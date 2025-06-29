<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 text-center">
        <div class="error-page">
          <h1 class="display-1 text-primary mb-4">{{ error.statusCode }}</h1>
          <h2 class="mb-4">{{ error.statusMessage || 'Page Not Found' }}</h2>
          <p class="lead mb-4">
            {{ error.statusCode === 404 
              ? "Sorry, the page you're looking for doesn't exist." 
              : "Something went wrong. Please try again later." }}
          </p>
          <div class="d-flex justify-content-center gap-3">
            <button @click="handleError" class="btn btn-primary">
              Go Back
            </button>
            <NuxtLink to="/" class="btn btn-outline-primary">
              Go Home
            </NuxtLink>
            <NuxtLink to="/courses" class="btn btn-outline-secondary">
              Browse Courses
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const error = useError()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<style scoped>
.error-page {
  padding: 2rem 0;
}

.display-1 {
  font-size: 6rem;
  font-weight: 700;
}

@media (max-width: 768px) {
  .display-1 {
    font-size: 4rem;
  }
  
  .d-flex {
    flex-direction: column;
    gap: 1rem !important;
  }
  
  .btn {
    width: 100%;
  }
}
</style>