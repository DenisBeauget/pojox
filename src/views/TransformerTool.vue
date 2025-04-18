<template>
  <div class="flex flex-col md:flex-row gap-6 w-full p-6 font-display">
    <div
      class="flex-1 bg-white/70 rounded-2xl shadow-lg p-6 border border-pojox-green flex flex-col"
    >
      <h2
        class="block mb-2 text-pojox-dark text-xl font-semibold"
        id="input-label"
      >
        Entrée JSON / Schéma
      </h2>
      <Codemirror
        v-model="inputText"
        placeholder="Paste your JSON or JSON Schema here..."
        :style="{ height: '300px' }"
        :autofocus="true"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="cmExtensions"
        :theme="cmTheme"
        class="flex-grow"
        aria-labelledby="input-label"
        role="textbox"
        aria-multiline="true"
      />
      <div v-if="error" class="text-red-600 font-semibold mt-2" role="alert">
        {{ error }}
      </div>

      <div class="flex flex-col gap-2 mt-4">
        <div class="flex gap-2 justify-evenly items-center">
          <ClassicButton
            :disabled="!!error"
            class="bg-pojox-green hover:bg-pojox-green/80 hover:shadow-pojox-bg-start text-white font-semibold py-2 px-4 rounded-xl shadow disabled:bg-pojox-green/30"
            text="Convert"
            @click="convert"
            role="button"
            :aria-disabled="!!error ? 'true' : 'false'"
          />

          <div class="flex items-center gap-2">
            <label
              for="selected-language"
              class="text-pojox-dark text-xl font-semibold"
              id="language-label"
              >Language:</label
            >
            <select
              id="selected-language"
              v-model="selectedTarget"
              class="pl-3 rounded-xl border border-pojox-green focus:outline-none focus:ring-2 focus:ring-pojox-green cursor-pointer"
              aria-labelledby="language-label"
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

        <div
          v-if="selectedTarget == 'java'"
          class="flex items-center gap-2 ml-100"
        >
          <div class="relative inline-block">
            <input
              type="checkbox"
              id="lombok"
              v-model="useLombok"
              class="sr-only"
              :aria-checked="useLombok ? 'true' : 'false'"
            />
            <label for="lombok" class="flex items-center cursor-pointer">
              <div
                class="relative w-5 h-5 border-2 border-pojox-green rounded-md bg-white"
              >
                <svg
                  v-show="useLombok"
                  class="absolute inset-0 w-full h-full text-pojox-green"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span class="ml-2 text-pojox-dark">Use Lombok</span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex-1 bg-white/70 rounded-2xl shadow-lg p-6 border border-pojox-green flex flex-col relative"
      aria-live="polite"
    >
      <h2
        class="block mb-2 text-pojox-dark text-xl font-semibold"
        id="output-label"
      >
        Résultat
      </h2>
      <Codemirror
        id="output-text"
        readonly
        :modelValue="outputText"
        :autofocus="true"
        :indent-with-tab="true"
        :style="{ height: '300px' }"
        :tab-size="2"
        :extensions="cmExtensionsOutput"
        :theme="cmTheme"
        class="flex-grow"
        aria-labelledby="output-label"
        role="textbox"
        aria-multiline="true"
      />
      <div
        v-if="outputText != ''"
        class="absolute top-2 right-2 z-10 cursor-pointer"
        aria-label="copy result"
        @click="copyToClipboard()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path
            d="M16 1H4C2.9 1 2 1.9 2 3v14h2V3h12V1zm3 4H7C5.9 5 5 5.9 5 7v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H7V7h12v14z"
          />
        </svg>
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
import { ref, watchEffect } from "vue";
import ClassicButton from "@/components/ClassicButton.vue";
import { analyze } from "@/services/checkInputService";
import { EditorState } from "@codemirror/state";

const inputText = ref("");
const outputText = ref("");
const selectedTarget = ref("typescript");

const isSchema = ref(false);
const error = ref("");
const lang = ref(javascript());
const cmTheme = oneDark;
const useLombok = ref(false);
let cmExtensionsOutput = [
  json(),
  EditorView.lineWrapping,
  cmTheme,
  EditorState.readOnly.of(true),
];

function setCmExtensionsOutput() {
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

  console.log(lang.value);

  return [
    lang.value,
    EditorView.lineWrapping,
    cmTheme,
    EditorState.readOnly.of(true),
  ];
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
    selectedTarget.value,
    useLombok.value
  );
  outputText.value = result;
};

const copyToClipboard = () => {
  const outputTextElement = document.getElementById("output-text");
  if (outputTextElement) {
    navigator.clipboard.writeText(outputText.value);
  } else {
    console.error("error");
  }
};
</script>
