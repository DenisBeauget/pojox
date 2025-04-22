<template>
  <div class="flex flex-auto justify-evenly">
    <IconCard
      :link="icon1"
      text="Pojox accept any JSON or JSON shema syntax and convert it into most popular programming language."
    />
    <IconCard
      :link="icon2"
      text="You dont neet to wait to have your result, Pojox convert element instantly and give you your result in language of your choice."
    />
    <IconCard
      :link="icon3"
      text="In addition to converting, Pojox also ensures that your JSON object or JSON schema is properly formatted."
    />
  </div>
</template>

<script lang="ts" setup>
import IconCard from "@/components/IconCard.vue";
import icon1 from "@/assets/icon1.svg";
import icon2 from "@/assets/icon2.svg";
import icon3 from "@/assets/icon3.svg";
</script>
