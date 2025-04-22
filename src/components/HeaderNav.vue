<template>
  <header>
    <nav
      class="flex justify-between items-center fixed w-full z-20 top-0 bg-white/20 backdrop-blur-md border-b border-gray-200 px-6 py-4"
    >
      <div class="flex w-full">
        <img
          class="p-1 w-[200px] sm:w-[250px]"
          src="@/assets/logo-color.svg"
          alt="logo"
        />
      </div>

      <div class="flex p-2 font-display text-white mr-4">
        <ul class="flex items-center justify-center gap-6">
          <li>
            <RouterLink
              to="/#home-section"
              class="px-5 py-1 rounded-lg bg-pojox-green/80 text-white transition duration-200 ease-in-out hover:bg-pojox-green/90 hover:scale-105"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/#transformer-tool"
              class="px-5 py-1 rounded-lg bg-pojox-green/80 text-white transition duration-200 ease-in-out hover:bg-pojox-green/90 hover:scale-105"
            >
              Convert
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/#footer-section"
              class="px-5 py-1 rounded-lg bg-pojox-green/80 text-white transition duration-200 ease-in-out hover:bg-pojox-green/90 hover:scale-105"
            >
              About
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>
