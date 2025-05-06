<template>
  <section
    class="py-20 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white"
  >
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex flex-col items-center text-center space-y-6">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Ready to Convert Your JSON?
        </h2>
        <p class="max-w-[600px] text-emerald-50 md:text-xl">
          Start using Pojox today and experience the fastest way to convert JSON
          to code.
        </p>
        <router-link
          to="/convert"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-white text-emerald-600 hover:bg-gray-100 h-11 px-8 mt-6"
          :class="
            $route.path === '/convert' ? 'text-emerald-500' : 'text-gray-700'
          "
        >
          Start Converting Now
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
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup></script>
