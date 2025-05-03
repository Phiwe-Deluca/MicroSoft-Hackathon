// Load environment variables from .env file
require("dotenv").config();

const apiKey = process.env.API_KEY;
const apiVersion = "2024-04-01-preview";
const endpoint =
  "https://commandprompt-bot.openai.azure.com/openai/deployments/o3-mini/chat/completions?api-version=2025-01-01-preview";
const modelName = "o3-mini";
const deployment = "o3-mini";
const options = { endpoint, apiKey, deployment, apiVersion };

const client = new AzureOpenAI(options);
