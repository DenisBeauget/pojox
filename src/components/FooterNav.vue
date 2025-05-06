<template>
  <footer class="border-t bg-white">
    <div
      class="container mx-auto px-4 flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12"
    >
      <div class="flex items-center gap-2">
        <div
          class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white font-semibold"
        >
          P
        </div>
        <span class="text-xl font-bold">Pojox</span>
      </div>
      <p class="text-sm text-gray-500">
        © {{ new Date().getFullYear() }} Pojox. All rights reserved.
      </p>
      <div class="flex gap-4">
        <a href="#" class="text-sm text-gray-500 hover:text-gray-900">
          Terms
        </a>
        <a href="/privacy" class="text-sm text-gray-500 hover:text-gray-900">
          Privacy
        </a>
        <a href="#" class="text-sm text-gray-500 hover:text-gray-900">
          Contact
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>
