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
          Beautify your JSON Code
        </h1>
        <p class="mt-2 text-gray-600">
          Paste your JSON and get it beautify instantly.
        </p>
      </div>

      <div class="grid gap-30 lg:grid-cols-2">
        <div class="rounded-lg border-2 bg-white">
          <div class="flex">
            <div class="flex flex-col space-y-1.5 p-6">
              <h3 class="text-2xl font-semibold leading-none tracking-tight">
                Input JSON
              </h3>
              <p class="text-sm text-gray-500">Paste your JSON object here</p>
            </div>
            <div class="flex gap-2 justify-center">
              <button
                class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-emerald-500 text-white disabled:bg-emerald-300 hover:bg-emerald-600 h-10 px-4 py-2 mt-8 ml-4 cursor-pointer"
                :disabled="!!error || inputText == ''"
                @click="convert"
              >
                Convert
              </button>
              <div class="flex flex-col px-6 py-3 h-10">
                <label for="tabulation" class="text-sm font-medium pb-1">
                  Select spaces
                </label>
                <select
                  :disabled="!!error || inputText == ''"
                  id="tabulation"
                  v-model="tabNumber"
                  :class="[
                    'flex mb-4 h-10 w-full items-center justify-between rounded-md border border-gray-300 disabled:border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500',
                    { 'opacity-50': inputText === '' },
                  ]"
                >
                  <option
                    v-for="lang in spacesAvailable"
                    :key="lang.value"
                    :value="lang.value"
                  >
                    {{ lang.label }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="p-6 pt-0">
            <div class="relative">
              <Codemirror
                v-model="inputText"
                placeholder="Paste your JSON..."
                :style="{ height: '658px' }"
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
          <div class="rounded-lg border-2 bg-white flex-1">
            <div class="flex flex-row items-center justify-between p-6 pb-2">
              <div>
                <h3 class="text-2xl font-semibold leading-none tracking-tight">
                  Beautified JSON
                </h3>
                <p class="text-sm text-gray-500 mb-5">
                  Now you can copy it here
                </p>
              </div>
              <div class="flex gap-2">
                <button
                  @click="copyToClipboard"
                  :class="[
                    'inline-flex items-center justify-center rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-gray-100 h-9 px-3',
                    { 'opacity-50': outputText === '' },
                  ]"
                  :disabled="outputText === ''"
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
                  :class="[
                    'inline-flex items-center justify-center rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-gray-100 h-9 px-3',
                    { 'opacity-50': outputText === '' },
                  ]"
                  :disabled="outputText === ''"
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
                v-model="outputText"
                :style="{ height: '658px' }"
                :autofocus="true"
                :indent-with-tab="true"
                :tab-size="2"
                :extensions="cmExtensionsOutput"
                :theme="cmTheme"
                class="rounded-md bg-gray-50 overflow-auto"
                aria-labelledby="input-label"
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
import { oneDark } from "@codemirror/theme-one-dark";
import { ref, watchEffect } from "vue";
import { analyze } from "@/services/checkInputService";
import { EditorState } from "@codemirror/state";
import { beautifyJSON } from "@/services/beautifyService";

const inputText = ref("");
const outputText = ref("");

const isSchema = ref(false);
const error = ref("");
const cmTheme = oneDark;
const copied = ref(false);

const tabNumber = ref(2);

const spacesAvailable = [
  { value: 2, label: 2 },
  { value: 4, label: 4 },
  { value: 6, label: 6 },
];

const cmExtensionsOutput = [
  json(),
  EditorView.lineWrapping,
  cmTheme,
  EditorState.readOnly.of(true),
];

const cmExtensions = [json(), EditorView.lineWrapping, cmTheme];

watchEffect(() => {
  if (inputText.value.trim() !== "") {
    analyze(inputText, error, isSchema);
  }
});

const convert = async () => {
  if (inputText.value.trim() === "" || error.value) {
    return;
  }

  const result = await beautifyJSON(inputText.value, tabNumber.value);
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
  const fileExtension = ".json";
  const blob = new Blob([outputText.value], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `pojox_json_formatted${fileExtension}`;
  document.body.appendChild(a);
  a.click();

  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 0);
};
</script>
