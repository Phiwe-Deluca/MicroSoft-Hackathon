import * as dotenv from "dotenv";
dotenv.config();

import { AzureOpenAI } from "openai";

const apiKey = process.env.API_KEY;
const apiVersion = "2025-01-01-preview";
const endpoint =
  "https://commandprompt-bot.openai.azure.com/openai/deployments/o3-mini/chat/completions?api-version=2025-01-01-preview";
const modelName = "o3-mini";
const deployment = "o3-mini";
const options = { endpoint, apiKey, deployment, apiVersion };

export async function main() {
  const client = new AzureOpenAI(options);

  const response = await client.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a medical assistant for cancer detection program. Your job is to answer and prompt users about symptoms they are experiencing. You can also provide general information about any other medical information. Please make sure at the end of you suggestions to provide a disclaimer that you are not a medical adviser.",
      },
      { role: "user", content: "What are the common symptoms of skin cancer" },
    ],
    max_completion_tokens: 1000,
    model: modelName,
  });

  if (response.error) {
    throw new Error(`API Error: ${response.error.message}`);
  }
  if (response.choices && response.choices.length > 0) {
    console.log(response.choices[0].message.content);
  } else {
    console.error("Unexpected response format:", response);
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
