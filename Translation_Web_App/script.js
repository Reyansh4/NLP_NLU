import  { HF_API_KEY } from "./api_key.js";

const auth_header = "Bearer " +  HF_API_KEY

document.getElementById("translateButton").addEventListener("click", translateText);

async function translateText() {
  const inputText = document.getElementById("inputText").value;
  const outputText = document.getElementById("outputText");
  const translationDirection = document.getElementById("translationDirection").value;

  outputText.value = "Translating...";

  let modelName = "";
  if (translationDirection === "en-de") {
    modelName = "Reyansh4/NMT_T5_wmt14_en_to_de";
  } else if (translationDirection === "de-en") {
    modelName = "Reyansh4/NMT_T5_wmt14_de_to_en";
  }

  try {
    const response = await fetch(
      `https://api-inference.huggingface.co/models/${modelName}`,
      {
        method: "POST",
        headers: {
          Authorization: auth_header,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: inputText }),
      }
    );

    const result = await response.json();
    outputText.value = result[0].generated_text;
  } catch (error) {
    console.error("Error:", error);
    outputText.value = "Translation failed.";
  }
}