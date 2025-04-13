<template>
  <div class="flex justify-center align-middle font-display p-4 mt-4">
    <div class="flex flex-col align-middle justify-center w-1/3">
      <h1 class="text-4xl p-4 font-bold">
        Fastest way to convert JSON based element to POJO in
        <span
          class="font-bold bg-pojox-green transition-all duration-1000 ease-in-out"
          >{{ currentTitle }}
        </span>
      </h1>
      <p class="text-2xl p-4 text-wrap">
        POJO is an acronym that stands for Plain Old Java Object. This acronym
        is mainly used to designate the ease of use of an object. With
        <span class="font-bold underline bg-pojox-green">Pojox</span>, you can
        directly convert your JSON object or JSON schema into the language of
        your choice in a matter of seconds.
      </p>
      <ClassicButton text="Start convert" />
    </div>
    <div class="w-1/3 ml-2 p-4">
      <img src="@/assets/hero.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import ClassicButton from "@/components/ClassicButton.vue";

const titles: string[] = ["Java", "Typescript", "Go", "Rust"];
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
