<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 md:px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Why Choose Pojox
        </h2>
        <p class="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
          The fastest and most reliable way to convert your JSON to code
        </p>
      </div>
      <div class="grid gap-8 md:grid-cols-3">
        <div
          class="rounded-lg border-2 border-emerald-100 transition-all hover:border-emerald-200 hover:shadow-md bg-white"
        >
          <div class="flex flex-col space-y-1.5 p-6 pb-2">
            <div
              class="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-6 w-6 text-emerald-600"
              >
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                ></path>
                <path d="M14 2v6h6"></path>
                <path
                  d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"
                ></path>
                <path
                  d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold leading-none tracking-tight">
              Universal Compatibility
            </h3>
          </div>
          <div class="p-6 pt-0">
            <p class="text-base text-gray-500">
              Pojox accepts any JSON or JSON schema syntax and converts it into
              the most popular programming languages.
            </p>
          </div>
        </div>
        <div
          class="rounded-lg border-2 border-emerald-100 transition-all hover:border-emerald-200 hover:shadow-md bg-white"
        >
          <div class="flex flex-col space-y-1.5 p-6 pb-2">
            <div
              class="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-6 w-6 text-emerald-600"
              >
                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold leading-none tracking-tight">
              Instant Results
            </h3>
          </div>
          <div class="p-6 pt-0">
            <p class="text-base text-gray-500">
              You don't need to wait to have your result. Pojox converts
              elements instantly and gives you your result in the language of
              your choice.
            </p>
          </div>
        </div>
        <div
          class="rounded-lg border-2 border-emerald-100 transition-all hover:border-emerald-200 hover:shadow-md bg-white"
        >
          <div class="flex flex-col space-y-1.5 p-6 pb-2">
            <div
              class="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-6 w-6 text-emerald-600"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold leading-none tracking-tight">
              Proper Formatting
            </h3>
          </div>
          <div class="p-6 pt-0">
            <p class="text-base text-gray-500">
              In addition to converting, Pojox also ensures that your JSON
              object or JSON schema is properly formatted and validated.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-12">
      <div
        ref="adContainer"
        id="ad-container"
        class="w-[300px] h-[250px]"
      ></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const adContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const adConfigScript = document.createElement("script");
  adConfigScript.type = "text/javascript";
  adConfigScript.innerHTML = `
    atOptions = {
      'key' : 'c78bb0c24589525bd8e4bc4a5f0c5d0f',
      'format' : 'iframe',
      'height' : 250,
      'width' : 300,
      'params' : {}
    };
  `;

  const adScript = document.createElement("script");
  adScript.type = "text/javascript";
  adScript.src =
    "https://www.highperformanceformat.com/c78bb0c24589525bd8e4bc4a5f0c5d0f/invoke.js";
  adScript.async = true;

  if (adContainer.value) {
    adContainer.value.innerHTML = "";
    adContainer.value.appendChild(adConfigScript);
    adContainer.value.appendChild(adScript);
  }
});
</script>
