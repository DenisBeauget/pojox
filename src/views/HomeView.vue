<script setup lang="ts">
import HeaderNav from "@/components/HeaderNav.vue";
import TransformerTool from "@/views/TransformerTool.vue";
import HeroTitle from "@/components/HeroTitle.vue";
import FooterNav from "@/components/FooterNav.vue";
import IconsView from "./IconsView.vue";
</script>

<template>
  <div
    class="fixed inset-0 bg-gradient-to-br from-pojox-bg-start via-pojox-bg-middle to-pojox-bg-end -z-10"
  ></div>
  <div id="home-section" class="relative z-0">
    <HeaderNav role="banner" />
    <main role="main" class="flex flex-col min-h-screen w-full pt-10">
      <HeroTitle />
      <IconsView />
      <TransformerTool />
      <FooterNav role="contentinfo" />
    </main>
  </div>
</template>
