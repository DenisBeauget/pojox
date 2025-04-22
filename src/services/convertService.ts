import { quicktype, InputData, jsonInputForTargetLanguage } from 'quicktype-core'

export async function convertWithQuicktype(json: string, language: string, useLombok: boolean): Promise<string> {
  const inputData = new InputData()

  const jsonInput = jsonInputForTargetLanguage(language)

  await jsonInput.addSource({ name: 'json', samples: [json] })
  inputData.addInput(jsonInput)

  console.log("USE LOMBOK ?" + useLombok);

  const result = await quicktype({
    inputData,
    lang: language,
    rendererOptions: {
      'just-types': true,
      package: 'com.pojox.yourPackageName',
      lombok: useLombok,
    },
  })

  return result.lines.join('\n')
}
