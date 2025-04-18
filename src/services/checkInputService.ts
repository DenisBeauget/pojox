import type { Ref } from "vue";

export const analyze = (inputText: Ref<string>, error: Ref<string>, isSchema: Ref<boolean> ) => {
    try {
      const parsed = JSON.parse(inputText.value);
      error.value = "";
      isSchema.value =
        typeof parsed === "object" &&
        parsed.hasOwnProperty("$schema") &&
        parsed.hasOwnProperty("type");
    } catch (e) {
      if (e instanceof SyntaxError) {
        const match = e.message.match(/at position (\d+)/);
        if (match) {
          const pos = parseInt(match[1]);
          const lines = inputText.value.slice(0, pos).split("\n");
          const line = lines.length;
          const col = lines[lines.length - 1].length + 1;
          error.value = `Invalid JSON at line ${line}, column ${col}: ${e.message}`;
        } else {
          error.value = `Invalid JSON: ${e.message}`;
        }
      } else {
        error.value = "Invalid JSON format";
      }
    }

  };