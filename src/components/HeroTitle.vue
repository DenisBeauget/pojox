<template>
  <section
    class="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-20 md:py-32"
  >
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
        <div class="flex flex-col gap-6">
          <h1
            class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
          >
            Convert JSON to
            <span class="text-emerald-500"> {{ currentTitle }} </span> in
            seconds
          </h1>
          <p class="max-w-[600px] text-gray-600 md:text-xl">
            POJO is an acronym that stands for Plain Old Java Object. With
            Pojox, you can instantly convert your JSON objects or schemas into
            the programming language of your choice.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 mt-4">
            <router-link
              to="/convert"
              class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-emerald-500 text-white hover:bg-emerald-600 h-10 px-4 py-2"
              :class="
                $route.path === '/convert'
                  ? 'text-emerald-500'
                  : 'text-gray-700'
              "
            >
              Start Converting
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
                class="ml-2 h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </router-link>

            <router-link
              to="/about"
              class="inline-flex items-center justify-center rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-gray-100 h-10 px-4 py-2"
              :class="
                $route.path === '/about' ? 'text-emerald-500' : 'text-gray-700'
              "
            >
              Learn More
            </router-link>
          </div>
        </div>
        <div class="relative hidden md:block">
          <div class="relative h-[500px] w-full">
            <img
              src="@/assets/hero.svg"
              alt="JSON to POJO conversion illustration"
              class="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const titles: string[] = [
  "Java",
  "Typescript",
  "Go",
  "Rust",
  "Javascript",
  "Dart",
  "Kotlin",
  "Python",
  "JSON Schema",
];
const currentIndex = ref(0);
const currentTitle = ref(titles[currentIndex.value]);

const changeTitle = () => {
  currentIndex.value = (currentIndex.value + 1) % titles.length;
  currentTitle.value = titles[currentIndex.value];
};

onMounted(() => {
  setInterval(changeTitle, 2000);
});
</script>
