<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div class="flex flex-col md:flex-row gap-6 w-full p-6 font-display">
    <div
      class="flex-1 bg-white/70 rounded-2xl shadow-lg p-6 border border-pojox-green"
    >
      <label class="block mt-6 mb-2 text-pojox-dark text-xl font-semibold"
        >Entrée JSON / Schéma</label
      >
      <Codemirror
        v-model="inputText"
        placeholder="Paste your JSON or JSON Schema here..."
        :style="{ height: '300px' }"
        :autofocus="true"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="cmExtensions"
        :theme="cmTheme"
      />
      <div v-if="error" class="text-red-600 font-semibold mt-2">
        {{ error }}
      </div>

      <div class="flex gap-2 justify-evenly">
        <ClassicButton
          :disabled="!!error"
          class="mt-6 bg-pojox-green hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl shadow disabled:bg-pojox-green/30"
          text="Convert"
          @click="convert"
        />

        <div class="flex">
          <label class="block mb-3 text-pojox-dark text-xl font-semibold"
            >Language</label
          >
          <select
            v-model="selectedTarget"
            class="w-full p-3 rounded-xl border border-pojox-green focus:outline-none focus:ring-2 focus:ring-pojox-green"
          >
            <option
              v-for="lang in targetLanguages"
              :key="lang.value"
              :value="lang.value"
            >
              {{ lang.label }}
            </option>
          </select>
        </div>
      </div>

      <div v-if="selectedTarget == 'java'" class="flex items-center gap-2 mt-4">
        <input type="checkbox" name="Lombok" id="lombok" />
        <label for="lombok" class="text-pojox-dark">Use Lombok</label>
      </div>
    </div>

    <div
      class="flex-1 bg-white/70 rounded-2xl shadow-lg p-6 border border-pojox-green flex flex-col"
    >
      <label class="block mb-3 text-pojox-dark text-xl font-semibold"
        >Résultat</label
      >
      <div
        class="w-full h-full p-4 border rounded-xl shadow resize-none bg-gray-100 text-pojox-dark"
      >
        <Codemirror
          readonly
          v-model:="outputText"
          :autofocus="true"
          :indent-with-tab="true"
          :tab-size="2"
          :extensions="cmExtensionsOutput"
          :theme="cmTheme"
          class="w-full h-full p-4 border rounded-xl shadow resize-none bg-gray-100 text-pojox-dark"
        ></Codemirror>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Codemirror } from "vue-codemirror";
import { EditorView } from "@codemirror/view";
import { json } from "@codemirror/lang-json";
import { javascript } from "@codemirror/lang-javascript";
import { java } from "@codemirror/lang-java";
import { rust } from "@codemirror/lang-rust";
import { go } from "@codemirror/lang-go";
import { oneDark } from "@codemirror/theme-one-dark";
import { convertWithQuicktype } from "@/services/convertService";
import { computed, ref, watchEffect } from "vue";
import ClassicButton from "@/components/ClassicButton.vue";
import { analyze } from "@/services/checkInputService";
import type { Extension } from "@codemirror/state";

const inputText = ref("");
const outputText = ref("");
const selectedTarget = ref("typescript");

const isSchema = ref(false);
const error = ref("");
const lang = ref(javascript());
const cmTheme = oneDark;
let cmExtensionsOutput: Extension[] = [
  json(),
  EditorView.lineWrapping,
  cmTheme,
];

function setCmExtensionsOutput(): Extension[] {
  if (error.value) {
    return [];
  }
  switch (selectedTarget.value) {
    case "javascript":
    case "typescript":
      lang.value = javascript();
      break;
    case "java":
      lang.value = java();
      break;
    case "rust":
      lang.value = rust();
      break;
    case "go":
      lang.value = go();
      break;
  }

  return [lang.value, EditorView.lineWrapping, cmTheme];
}

const cmExtensions = [json(), EditorView.lineWrapping, cmTheme];

watchEffect(() => {
  if (inputText.value.trim() !== "") {
    analyze(inputText, error, isSchema);
  }
});

const targetLanguages = [
  { value: "typescript", label: "TypeScript" },
  { value: "javascript", label: "Javascript" },
  { value: "rust", label: "Rust" },
  { value: "go", label: "Go" },
  { value: "java", label: "Java" },
];

const convert = async () => {
  cmExtensionsOutput = setCmExtensionsOutput();
  const result = await convertWithQuicktype(
    inputText.value,
    selectedTarget.value
  );
  outputText.value = result;
};
</script>
