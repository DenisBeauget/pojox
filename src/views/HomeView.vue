<script setup lang="ts">
import HeaderNav from "@/components/HeaderNav.vue";
import TransformerTool from "@/views/TransformerTool.vue";
import HeroTitle from "@/components/HeroTitle.vue";
import FooterNav from "@/components/FooterNav.vue";
import IconsView from "./IconsView.vue";
</script>

<template>
  <div
    class="bg-gradient-to-br from-pojox-bg-start via-pojox-bg-middle to-pojox-bg-end"
  >
    <HeaderNav />
    <main class="flex flex-col min-h-screen w-full pt-10">
      <HeroTitle />
      <IconsView />
      <TransformerTool />
      <FooterNav />
    </main>
  </div>
</template>
