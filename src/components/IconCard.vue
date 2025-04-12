<template>
  <div class="max-w-sm overflow-hidden shadow-xl rounded-2xl font-display bg-white/30">
    <img class="w-1/2 mx-auto" :src="getImageUrl()" alt="" />
    <p class="mx-auto p-4">{{ text }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  link: String,
  text: String,
})

function getImageUrl() {
  return new URL(`${props.link}`, import.meta.url).href
}
</script>
