<template>
  <header class="sticky top-0 z-50 w-full border-b bg-white">
    <div class="container mx-auto px-4 flex h-16 items-center justify-between">
      <div class="flex items-center gap-2 cursor-pointer">
        <router-link
          to="/"
          class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white font-semibold"
          :class="$route.path === '/' ? 'text-emerald-500' : 'text-gray-700'"
        >
          P
        </router-link>
        <span class="text-xl font-bold">Pojox</span>
      </div>

      <nav class="hidden md:flex gap-6">
        <router-link
          to="/"
          class="text-sm font-medium transition-colors hover:text-emerald-500"
          :class="$route.path === '/' ? 'text-emerald-500' : 'text-gray-700'"
        >
          Home
        </router-link>
        <router-link
          to="/convert"
          class="text-sm font-medium transition-colors hover:text-emerald-500"
          :class="
            $route.path === '/convert' ? 'text-emerald-500' : 'text-gray-700'
          "
        >
          Convert
        </router-link>
        <router-link
          to="/about"
          class="text-sm font-medium transition-colors hover:text-emerald-500"
          :class="
            $route.path === '/about' ? 'text-emerald-500' : 'text-gray-700'
          "
        >
          About
        </router-link>
      </nav>

      <div class="flex items-center gap-4">
        <router-link
          to="/convert"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-emerald-500 text-white hover:bg-emerald-600 h-10 px-4 py-2"
          :class="
            $route.path === '/convert' ? 'text-emerald-500' : 'text-gray-700'
          "
        >
          Try Now
        </router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>
