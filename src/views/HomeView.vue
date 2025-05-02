<script setup lang="ts">
import HeaderNav from "@/components/HeaderNav.vue";
import TransformerTool from "@/views/TransformerTool.vue";
import HeroTitle from "@/components/HeroTitle.vue";
import FooterNav from "@/components/FooterNav.vue";
import IconsView from "./IconsView.vue";
import JsonInfo from "@/components/JsonInfo.vue";
</script>

<template>
  <div
    class="fixed inset-0 bg-gradient-to-br from-pojox-bg-start via-pojox-bg-middle to-pojox-bg-end -z-10"
  ></div>
  <div id="home-section" class="relative z-0">
    <main role="main" class="flex flex-col min-h-screen w-full pt-10">
      <HeaderNav />
      <HeroTitle />
      <IconsView />
      <TransformerTool />
      <JsonInfo />
      <FooterNav role="contentinfo" />
    </main>
  </div>
</template>
