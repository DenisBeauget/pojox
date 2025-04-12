<template>
  <div class="flex flex-col md:flex-row gap-6 w-full p-6 font-display">
    <div class="flex-1 bg-white/70 rounded-2xl shadow-lg p-6 border border-pojox-green">
      <label class="block mt-6 mb-2 text-pojox-dark text-xl font-semibold"
        >Entrée JSON / Schéma</label
      >
      <textarea
        v-model="inputText"
        placeholder="Paste your JSON content here..."
        class="w-full h-64 p-4 border rounded-xl shadow resize-none focus:outline-none focus:ring-2 focus:ring-pojox-green"
      ></textarea>

      <div class="flex gap-2 justify-evenly">
        <ClassicButton
          class="mt-6 bg-pojox-green hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl shadow"
          text="Convert"
          @click="convert"
        />

        <div class="flex">
          <label class="block mb-3 text-pojox-dark text-xl font-semibold">Language</label>
          <select
            v-model="selectedTarget"
            class="w-full p-3 rounded-xl border border-pojox-green focus:outline-none focus:ring-2 focus:ring-pojox-green"
          >
            <option v-for="lang in targetLanguages" :key="lang.value" :value="lang.value">
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
      <label class="block mb-3 text-pojox-dark text-xl font-semibold">Résultat</label>
      <textarea
        readonly
        :value="outputText"
        class="w-full h-full p-4 border rounded-xl shadow resize-none bg-gray-100 text-pojox-dark"
      ></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { convertWithQuicktype } from '@/services/convertService'
import { ref } from 'vue'
import ClassicButton from '@/components/ClassicButton.vue'

const inputText = ref('')
const outputText = ref('')
const selectedTarget = ref('typescript')

const targetLanguages = [
  { value: 'typescript', label: 'TypeScript' },
  { value: 'swift', label: 'Swift' },
  { value: 'go', label: 'Go' },
  { value: 'java', label: 'Java' },
]

const convert = async () => {
  const result = await convertWithQuicktype(inputText.value, selectedTarget.value)
  outputText.value = result
}
</script>
