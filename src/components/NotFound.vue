<template>
  <section
    class="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50 flex flex-col items-center justify-center min-h-screen px-4 py-20"
  >
    <div class="container mx-auto px-4 md:px-6 text-center">
      <div class="mx-auto max-w-3xl">
        <h1 class="text-6xl md:text-8xl font-bold text-emerald-500 mb-6">
          404
        </h1>
        <h2 class="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
          Page Not Found
        </h2>
        <p class="text-gray-600 text-lg md:text-xl mb-8 max-w-xl mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/"
            class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-emerald-500 text-white hover:bg-emerald-600 h-10 px-6 py-2"
          >
            Back to Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-2 h-4 w-4"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
          </router-link>

          <router-link
            to="/convert"
            class="inline-flex items-center justify-center rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-gray-100 h-10 px-6 py-2 text-gray-700"
          >
            Convert JSON
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
