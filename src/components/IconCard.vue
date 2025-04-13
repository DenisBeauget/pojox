<template>
  <div
    class="w-80 overflow-hidden shadow-xl rounded-2xl font-display bg-pojox-beige/70 backdrop-blur-md"
  >
    <img
      class="w-1/2 mx-auto h-48 object-cover"
      :src="getImageUrl()"
      alt="Card image"
    />
    <div class="p-4 text-center">
      <p class="text-lg font-semibold text-gray-800">{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  link: String,
  text: String,
});

function getImageUrl() {
  return new URL(`${props.link}`, import.meta.url).href;
}
</script>
