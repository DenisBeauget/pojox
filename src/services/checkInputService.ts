import Ajv from "ajv";
import Ajv2019 from "ajv/dist/2019";
import Ajv2020 from "ajv/dist/2020";
import type { Ref } from "vue";



export const analyze = (inputText: Ref<string>, error: Ref<string>, isSchema: Ref<boolean> ) => {

  const validators: Record<string, Ajv> = {
    "http://json-schema.org/draft-07/schema#": new Ajv(),
    "https://json-schema.org/draft/2019-09/schema": new Ajv2019(),
    "https://json-schema.org/draft/2019-09/schema#": new Ajv2019(),
    "https://json-schema.org/draft/2020-12/schema": new Ajv2020(),
    "https://json-schema.org/draft/2020-12/schema#": new Ajv2020(),
  };


const defaultValidator = validators["http://json-schema.org/draft-07/schema#"];


    try {
      const parsed = JSON.parse(inputText.value);
      error.value = "";
      isSchema.value =
        typeof parsed === "object" &&
        parsed.hasOwnProperty("$schema") &&
        parsed.hasOwnProperty("type");

        if(isSchema.value) {
          const schemaVersion = parsed["$schema"];
          const ajv = validators[schemaVersion] || defaultValidator;
           try {
            ajv.compile(parsed);
           }
           // eslint-disable-next-line @typescript-eslint/no-explicit-any
           catch(schemaError: any) {
            if (schemaError.message.includes('unknown format')) {
              return;
            }
            error.value = `Invalid JSON Schema: ${schemaError.message}`;
           }
        }
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