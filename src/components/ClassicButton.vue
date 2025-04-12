<template>
  <button
    class="mt-4 px-4 py-2 bg-pojox-green text-white font-display font-semibold rounded-xl shadow cursor-pointer text-center"
  >
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
defineProps({
  text: String,
})
</script>
