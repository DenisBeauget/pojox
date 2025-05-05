<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <HeaderNav />
    <main class="flex-1">
      <RouterView />
    </main>
    <FooterNav />
  </div>
</template>

<script lang="ts" setup>
import HeaderNav from "./components/HeaderNav.vue";
import FooterNav from "./components/FooterNav.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
</style>
