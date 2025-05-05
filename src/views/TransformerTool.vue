<template>
  <section
    class="flex-1 py-12 bg-gradient-to-br from-emerald-50 via-white to-emerald-50"
  >
    <div class="container mx-auto px-4 md:px-6">
      <div class="mb-8">
        <router-link
          to="/"
          class="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-emerald-500"
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
            class="h-4 w-4"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          <span>Back to Home</span>
        </router-link>
        <h1
          class="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        >
          Convert JSON to Code
        </h1>
        <p class="mt-2 text-gray-600">
          Paste your JSON, select your target language, and get your code
          instantly.
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-2">
        <div class="rounded-lg border-2 bg-white">
          <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="text-2xl font-semibold leading-none tracking-tight">
              Input JSON
            </h3>
            <p class="text-sm text-gray-500">
              Paste your JSON object or schema here
            </p>
          </div>
          <div class="p-6 pt-0">
            <div class="relative">
              <Codemirror
                v-model="inputText"
                placeholder="Paste your JSON or JSON Schema here..."
                :style="{ height: '500px' }"
                :autofocus="true"
                :indent-with-tab="true"
                :tab-size="2"
                :extensions="cmExtensions"
                :theme="cmTheme"
                class="rounded-md bg-gray-50 overflow-auto"
                aria-labelledby="input-label"
                role="textbox"
                aria-multiline="true"
              />
              <div
                v-if="error"
                class="text-red-600 font-semibold mt-2"
                role="alert"
              >
                {{ error }}
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <div class="rounded-lg border-2 bg-white">
            <div class="flex flex-col space-y-1.5 p-6 pb-3">
              <h3 class="text-2xl font-semibold leading-none tracking-tight">
                Output Settings
              </h3>
            </div>
            <div class="p-6 pt-0">
              <div class="grid gap-4">
                <div class="grid gap-2">
                  <label for="language" class="text-sm font-medium">
                    Target Language
                  </label>
                  <select
                    id="language"
                    v-model="selectedTarget"
                    class="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
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
                <div class="grid gap-2">
                  <label class="text-sm font-medium">Options</label>
                  <div class="border-b">
                    <div class="flex">
                      <button
                        @click="activeTab = 'basic'"
                        :class="[
                          'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium relative h-10 w-full rounded-none border-b-2 border-b-transparent text-gray-500',
                          activeTab === 'basic'
                            ? 'border-b-emerald-500 text-gray-900'
                            : '',
                        ]"
                      >
                        Basic
                      </button>
                      <button
                        @click="activeTab = 'advanced'"
                        :class="[
                          'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium relative h-10 w-full rounded-none border-b-2 border-b-transparent text-gray-500',
                          activeTab === 'advanced'
                            ? 'border-b-emerald-500 text-gray-900'
                            : '',
                        ]"
                      >
                        Advanced
                      </button>
                    </div>
                  </div>

                  <div v-if="activeTab === 'basic'" class="pt-4">
                    <div class="flex justify-center">
                      <button
                        @click="convert"
                        :disabled="!!error || inputText == ''"
                        class="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-emerald-500 text-white hover:bg-emerald-600 disabled:bg-emerald-300"
                      >
                        Convert Now
                      </button>
                    </div>
                  </div>

                  <div v-if="activeTab === 'advanced'" class="pt-4">
                    <div class="flex flex-col gap-3">
                      <div
                        v-if="selectedTarget === 'java'"
                        class="flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="lombok"
                          v-model="useLombok"
                          class="h-4 w-4 rounded border-gray-300"
                        />
                        <label for="lombok" class="text-sm">
                          Use Lombok (Java only)
                        </label>
                      </div>
                      <div class="flex justify-center mt-2">
                        <button
                          @click="convert"
                          :disabled="!!error || inputText == ''"
                          class="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-emerald-500 text-white hover:bg-emerald-600 disabled:bg-emerald-300"
                        >
                          Convert Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-lg border-2 bg-white flex-1">
            <div class="flex flex-row items-center justify-between p-6 pb-2">
              <div>
                <h3 class="text-2xl font-semibold leading-none tracking-tight">
                  Generated Code
                </h3>
                <p class="text-sm text-gray-500">
                  {{ getLanguageLabel(selectedTarget) }} code
                </p>
              </div>
              <div class="flex gap-2">
                <button
                  @click="copyToClipboard"
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-gray-100 h-9 px-3"
                >
                  {{ copied ? "Copied!" : "Copy" }}
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
                    <rect
                      width="14"
                      height="14"
                      x="8"
                      y="8"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path
                      d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                    ></path>
                  </svg>
                </button>
                <button
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-gray-100 h-9 px-3"
                  @click="downloadCode"
                >
                  Download
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
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" x2="12" y1="15" y2="3"></line>
                  </svg>
                </button>
              </div>
            </div>
            <div class="p-6 pt-0">
              <Codemirror
                id="output-text"
                readonly
                :modelValue="outputText"
                :style="{ height: '300px' }"
                :tab-size="2"
                :extensions="cmExtensionsOutput"
                :theme="cmTheme"
                class="rounded-md bg-gray-50 overflow-auto"
                aria-labelledby="output-label"
                role="textbox"
                aria-multiline="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
import { ref, watchEffect, computed } from "vue";
import { analyze } from "@/services/checkInputService";
import { EditorState } from "@codemirror/state";

const inputText = ref("");
const outputText = ref("");
const selectedTarget = ref("typescript");
const activeTab = ref("basic");

const isSchema = ref(false);
const error = ref("");
//const lang = ref(javascript());
const cmTheme = oneDark;
const useLombok = ref(false);
const copied = ref(false);

// Computed output extensions
const cmExtensionsOutput = computed(() => {
  if (error.value) {
    return [EditorView.lineWrapping, cmTheme, EditorState.readOnly.of(true)];
  }

  switch (selectedTarget.value) {
    case "javascript":
    case "typescript":
      return [
        javascript(),
        EditorView.lineWrapping,
        cmTheme,
        EditorState.readOnly.of(true),
      ];
    case "java":
      return [
        java(),
        EditorView.lineWrapping,
        cmTheme,
        EditorState.readOnly.of(true),
      ];
    case "rust":
      return [
        rust(),
        EditorView.lineWrapping,
        cmTheme,
        EditorState.readOnly.of(true),
      ];
    case "go":
      return [
        go(),
        EditorView.lineWrapping,
        cmTheme,
        EditorState.readOnly.of(true),
      ];
    default:
      return [
        javascript(),
        EditorView.lineWrapping,
        cmTheme,
        EditorState.readOnly.of(true),
      ];
  }
});

const cmExtensions = [json(), EditorView.lineWrapping, cmTheme];

watchEffect(() => {
  if (inputText.value.trim() !== "") {
    analyze(inputText, error, isSchema);
  }
});

const targetLanguages = [
  { value: "typescript", label: "TypeScript" },
  { value: "javascript", label: "JavaScript" },
  { value: "rust", label: "Rust" },
  { value: "go", label: "Go" },
  { value: "java", label: "Java" },
  { value: "dart", label: "Dart" },
  { value: "kotlin", label: "Kotlin" },
  { value: "python", label: "Python" },
  { value: "schema", label: "JSON Schema" },
];

function getLanguageLabel(value: string): string {
  const language = targetLanguages.find((lang) => lang.value === value);
  return language ? language.label : value;
}

const convert = async () => {
  if (inputText.value.trim() === "" || error.value) {
    return;
  }

  const result = await convertWithQuicktype(
    inputText.value,
    selectedTarget.value,
    useLombok.value
  );
  outputText.value = result;
};

const copyToClipboard = () => {
  if (outputText.value) {
    navigator.clipboard.writeText(outputText.value);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  }
};

const downloadCode = () => {
  if (!outputText.value) return;

  // Determine file extension based on language
  let fileExtension = ".txt";
  switch (selectedTarget.value) {
    case "typescript":
      fileExtension = ".ts";
      break;
    case "javascript":
      fileExtension = ".js";
      break;
    case "rust":
      fileExtension = ".rs";
      break;
    case "go":
      fileExtension = ".go";
      break;
    case "java":
      fileExtension = ".java";
      break;
    case "dart":
      fileExtension = ".dart";
      break;
    case "kotlin":
      fileExtension = ".kt";
      break;
    case "python":
      fileExtension = ".py";
      break;
    case "schema":
      fileExtension = ".json";
      break;
  }

  // Create a blob with the code content
  const blob = new Blob([outputText.value], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  // Create a temporary anchor element to trigger download
  const a = document.createElement("a");
  a.href = url;
  a.download = `generated_code${fileExtension}`;
  document.body.appendChild(a);
  a.click();

  // Clean up
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 0);
};
</script>
