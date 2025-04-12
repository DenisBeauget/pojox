<template>
  <header>
    <nav
      class="flex justify-between items-center fixed w-full z-20 top-0 bg-white/20 backdrop-blur-md border-b border-gray-200"
    >
      <div class="flex w-full">
        <img class="p-2 w-[350px]" src="@/assets/logo-color.svg" alt="logo" />
      </div>
      <div class="flex p-2 font-display text-white mr-4">
        <ul class="flex items-center justify-center gap-4">
          <div class="bg-pojox-green/50 mx-auto flex items-center justify-center rounded">
            <li class="px-2">
              <RouterLink to="/hero">Home</RouterLink>
            </li>
          </div>
          <div class="bg-pojox-green/50 mx-auto flex items-center justify-center rounded">
            <li class="px-2">
              <RouterLink to="/hero">Convert</RouterLink>
            </li>
          </div>

          <div class="bg-pojox-green/50 mx-auto flex items-center justify-center rounded">
            <li class="px-2">
              <RouterLink to="/hero">About</RouterLink>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>
