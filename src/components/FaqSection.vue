<template>
  <section class="py-20 bg-emerald-50">
    <div class="container mx-auto px-4 md:px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p class="mt-4 text-gray-600 max-w-3xl mx-auto">
          Find answers to the most common questions about Pojox and our
          services.
        </p>
      </div>

      <div class="max-w-3xl mx-auto space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border border-emerald-200 rounded-lg overflow-hidden"
        >
          <button
            class="flex justify-between items-center w-full px-6 py-4 text-left bg-white hover:bg-emerald-50 transition-colors"
            @click="toggleFaq(index)"
          >
            <span class="font-medium text-gray-900">{{ faq.question }}</span>
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
              class="h-5 w-5 text-emerald-600 transition-transform"
              :class="faq.isOpen ? 'transform rotate-180' : ''"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
          <div
            v-show="faq.isOpen"
            class="px-6 py-4 bg-white border-t border-emerald-100"
          >
            <p class="text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const faqs = ref([
  {
    question: "What is Pojox used for?",
    answer:
      "Pojox is a powerful tool designed to convert JSON objects into code in various programming languages or simply beautfiy your JSON code to save hours of formating, saving developers time and reducing potential errors in the conversion process.",
    isOpen: false,
  },
  {
    question: "Which programming languages are supported?",
    answer:
      "Pojox supports a wide range of programming languages including Java, JavaScript, TypeScript, Python, C#, Go, Rust, Dart, Kotlin, and JSON Schemas. We're constantly adding support for additional languages.",
    isOpen: false,
  },
  {
    question: "Is Pojox free to use?",
    answer:
      "Pojox is designed to be totally free, simple tools, simple task, no price.",
    isOpen: false,
  },
  {
    question: "How accurate are the conversions?",
    answer:
      "Pojox strives for high accuracy in all conversions. Our algorithms are continuously improved based on developer feedback and industry standards. For complex JSON structures, we provide options to customize the output according to your specific needs.",
    isOpen: false,
  },
]);

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};
</script>
