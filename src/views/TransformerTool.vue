<template>
  <div
    id="transformer-tool"
    class="flex flex-col md:flex-row gap-6 w-full p-6 font-classic"
  >
    <div
      class="flex-1 bg-gradient-to-br from-[#e3d5b5]/90 to-[#e3d5b5] rounded-2xl shadow-lg p-6 border border-[#2ea66e]/50 flex flex-col hover:shadow-xl transition-all"
    >
      <h2
        class="block mb-4 text-[#1a1a1a] text-xl font-semibold p-3 border-b border-[#677d68]"
        id="input-label"
      >
        Enter <span class="text-[#2ea66e]">JSON</span> / Schema:
      </h2>
      <Codemirror
        v-model="inputText"
        placeholder="Paste your JSON or JSON Schema here..."
        :style="{ height: '450px' }"
        :autofocus="true"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="cmExtensions"
        :theme="cmTheme"
        class="flex-grow bg-gradient-to-br"
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
            :disabled="!!error || inputText == ''"
            class="bg-pojox-green hover:bg-pojox-green/80 hover:shadow-pojox-bg-start text-white font-semibold py-2 px-4 rounded-xl shadow disabled:bg-pojox-green/30"
            text="Convert"
            @click="convert"
            role="button"
            :aria-disabled="!!error ? 'true' : 'false'"
          />

          <ClassicButton
            v-if="inputText != ''"
            class="bg-pojox-green hover:bg-pojox-green/80 hover:shadow-pojox-bg-start text-white font-semibold py-2 px-4 rounded-xl shadow disabled:bg-pojox-green/30"
            text="Reset"
            @click="reset"
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
      class="flex-1 bg-gradient-to-br from-[#e3d5b5]/90 to-[#e3d5b5] rounded-2xl shadow-lg p-6 border border-[#2ea66e]/50 flex flex-col relative hover:shadow-xl transition-all"
      aria-live="polite"
    >
      <h2
        class="block mb-4 text-[#1a1a1a] text-xl font-semibold p-3 border-b border-[#677d68]"
        id="output-label"
      >
        <span class="text-[#1a1a1a]">Result</span>:
      </h2>
      <Codemirror
        id="output-text"
        readonly
        :modelValue="outputText"
        :autofocus="true"
        :indent-with-tab="true"
        :style="{ height: '450px' }"
        :tab-size="2"
        :extensions="cmExtensionsOutput"
        :theme="cmTheme"
        class="flex-grow"
        aria-labelledby="output-label"
        role="textbox"
        aria-multiline="true"
      />
      <ClassicButton
        v-if="outputText != ''"
        class="bg-[#2ea66e] hover:bg-[#2ea66e]/80 hover:shadow-[#677d68] text-white font-semibold py-2 px-4 rounded-xl shadow disabled:bg-[#2ea66e]/30 mt-4 transition-all"
        text="Copy"
        @click="copyToClipboard"
        role="button"
        :aria-disabled="outputText == '' ? 'true' : 'false'"
      />
      <div v-if="copied != false">
        <p class="text-center pt-4 text-[#2ea66e] font-semibold">
          The text has been copied to clipboard!
        </p>
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
const copied = ref(false);

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
    default:
      lang.value = javascript();
      break;
  }

  // @ts-expect-error even with default value
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
  { value: "dart", label: "Dart" },
  { value: "kotlin", label: "Kotlin" },
  { value: "python", label: "Python" },
  { value: "schema", label: "JSON Schema" },
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

const reset = () => {
  inputText.value = "";
  outputText.value = "";
  error.value = "";
};

const copyToClipboard = () => {
  const outputTextElement = document.getElementById("output-text");
  if (outputTextElement) {
    navigator.clipboard.writeText(outputText.value);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 1000);
  } else {
    console.error("error");
  }
};
</script>
