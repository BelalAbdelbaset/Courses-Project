<template>
    <div>
        <!-- Page Header -->
        <section class="bg-primary text-white py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="display-4 fw-bold">{{ $t('contact.title') }}</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item">
                                    <NuxtLink :to="localePath('/')" class="text-white-50">
                                        {{ $t('navigation.home') }}
                                    </NuxtLink>
                                </li>
                                <li class="breadcrumb-item active text-white" aria-current="page">
                                    {{ $t('navigation.contact') }}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Content -->
        <section class="py-5">
            <div class="container">
                <div class="row g-5">
                    <!-- Contact Form -->
                    <div class="col-lg-8">
                        <div class="card border-0 shadow-sm">
                            <div class="card-body p-5">
                                <h3 class="fw-bold mb-4">{{ $t('contact.info.title') }}</h3>
                                <p class="text-muted mb-4">{{ $t('contact.info.description') }}</p>

                                <form @submit.prevent="submitForm">
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <label :for="'name-' + $i18n.locale"
                                                class="form-label">{{ $t('contact.form.name') }}</label>
                                            <input :id="'name-' + $i18n.locale" type="text" class="form-control"
                                                v-model="form.name" :class="{ 'is-invalid': errors.name }" required>
                                            <div v-if="errors.name" class="invalid-feedback">
                                                {{ errors.name }}
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label :for="'email-' + $i18n.locale"
                                                class="form-label">{{ $t('contact.form.email') }}</label>
                                            <input :id="'email-' + $i18n.locale" type="email" class="form-control"
                                                v-model="form.email" :class="{ 'is-invalid': errors.email }" required>
                                            <div v-if="errors.email" class="invalid-feedback">
                                                {{ errors.email }}
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label :for="'message-' + $i18n.locale"
                                                class="form-label">{{ $t('contact.form.message') }}</label>
                                            <textarea :id="'message-' + $i18n.locale" class="form-control" rows="5"
                                                v-model="form.message" :class="{ 'is-invalid': errors.message }"
                                                required></textarea>
                                            <div v-if="errors.message" class="invalid-feedback">
                                                {{ errors.message }}
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button type="submit" class="btn btn-primary btn-lg"
                                                :disabled="isSubmitting">
                                                <span v-if="isSubmitting"
                                                    class="spinner-border spinner-border-sm me-2"></span>
                                                {{ isSubmitting ? $t('common.loading') : $t('contact.form.send') }}
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                <!-- Success Message -->
                                <div v-if="showSuccess" class="alert alert-success mt-4" role="alert">
                                    <i class="bi bi-check-circle me-2"></i>
                                    {{ $t('common.success') }}! Your message has been sent successfully.
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Info -->
                    <div class="col-lg-4">
                        <div class="card border-0 shadow-sm h-100">
                            <div class="card-body p-4">
                                <h5 class="fw-bold mb-4">Contact Information</h5>

                                <div class="d-flex align-items-start mb-4">
                                    <div class="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                                        <i class="bi bi-geo-alt text-primary"></i>
                                    </div>
                                    <div>
                                        <h6 class="fw-bold mb-1">Address</h6>
                                        <p class="text-muted mb-0">123 Business Street<br>City, State 12345</p>
                                    </div>
                                </div>

                                <div class="d-flex align-items-start mb-4">
                                    <div class="bg-success bg-opacity-10 rounded-circle p-2 me-3">
                                        <i class="bi bi-telephone text-success"></i>
                                    </div>
                                    <div>
                                        <h6 class="fw-bold mb-1">Phone</h6>
                                        <p class="text-muted mb-0">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div class="d-flex align-items-start mb-4">
                                    <div class="bg-info bg-opacity-10 rounded-circle p-2 me-3">
                                        <i class="bi bi-envelope text-info"></i>
                                    </div>
                                    <div>
                                        <h6 class="fw-bold mb-1">Email</h6>
                                        <p class="text-muted mb-0">contact@example.com</p>
                                    </div>
                                </div>

                                <div class="d-flex align-items-start">
                                    <div class="bg-warning bg-opacity-10 rounded-circle p-2 me-3">
                                        <i class="bi bi-clock text-warning"></i>
                                    </div>
                                    <div>
                                        <h6 class="fw-bold mb-1">Business Hours</h6>
                                        <p class="text-muted mb-0">Mon - Fri: 9:00 AM - 6:00 PM<br>Sat - Sun: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Map Section -->
        <section class="bg-light py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="card border-0 shadow-sm">
                            <div class="card-body p-0">
                                <div class="bg-secondary d-flex align-items-center justify-content-center"
                                    style="height: 300px;">
                                    <div class="text-center">
                                        <i class="bi bi-map display-1 text-muted"></i>
                                        <p class="text-muted mt-3">Interactive Map Placeholder</p>
                                        <small class="text-muted">Integrate with Google Maps or other mapping
                                            service</small>
                                    </div>
                                </div>
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
        title: 'Contact - Nuxt i18n Bootstrap',
        meta: [{
            name: 'description',
            content: 'Get in touch with us. We would love to hear from you.'
        }]
    })
    // Form data
    const form = ref({
        name: '',
        email: '',
        message: ''
    })
    const errors = ref({})
    const isSubmitting = ref(false)
    const showSuccess = ref(false)
    // Form validation
    const validateForm = () => {
        errors.value = {}
        if (!form.value.name.trim()) {
            errors.value.name = 'Name is required'
        }
        if (!form.value.email.trim()) {
            errors.value.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
            errors.value.email = 'Please enter a valid email'
        }
        if (!form.value.message.trim()) {
            errors.value.message = 'Message is required'
        }
        return Object.keys(errors.value).length === 0
    }
    // Submit form
    const submitForm = async () => {
        if (!validateForm()) return
        isSubmitting.value = true
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000))
            // Show success message
            showSuccess.value = true
            // Reset form
            form.value = {
                name: '',
                email: '',
                message: ''
            }
            // Hide success message after 5 seconds
            setTimeout(() => {
                showSuccess.value = false
            }, 5000)
        } catch (error) {
            console.error('Error submitting form:', error)
        } finally {
            isSubmitting.value = false
        }
    }
</script>

<style scoped>
    .breadcrumb-item+.breadcrumb-item::before {
        color: rgba(255, 255, 255, 0.5);
    }

    .form-control:focus {
        border-color: #0d6efd;
        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }

    .bi-check-circle::before {
        content: "✓";
    }

    .bi-geo-alt::before {
        content: "📍";
    }

    .bi-telephone::before {
        content: "📞";
    }

    .bi-envelope::before {
        content: "✉️";
    }

    .bi-clock::before {
        content: "🕒";
    }

    .bi-map::before {
        content: "��️";
    }
</style>