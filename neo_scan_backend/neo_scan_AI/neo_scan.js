import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { AzureOpenAI } from "openai/index.mjs";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const apiKey = process.env.API_KEY;
const apiVersion = "2025-01-01-preview";
const endpoint =
  "https://commandprompt-bot.openai.azure.com/openai/deployments/o3-mini/chat/completions?api-version=2025-01-01-preview";
const modelName = "o3-mini";
const deployment = "o3-mini";

app.post("/chat", async (req, res) => {
  try {
    const { userMessage } = req.body;

    if (!userMessage) {
      return res.status(400).json({ error: "User message is required" });
    }

    const client = new AzureOpenAI({
      endpoint,
      apiKey,
      deployment,
      apiVersion,
    });

    const response = await client.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a medical assistant for a cancer detection program. Your job is to answer and prompt users about symptoms they are experiencing. You can also provide general medical information. Make sure to provide a disclaimer that you are not a medical adviser.",
        },
        { role: "user", content: userMessage },
      ],
      max_completion_tokens: 800,
      model: modelName,
    });

    if (response.error) {
      throw new Error(`API Error: ${response.error.message}`);
    }

    const botReply =
      response.choices?.[0]?.message?.content ||
      "Sorry, I couldn't process your request.";
    res.json({ reply: botReply });
  } catch (err) {
    console.error("Error processing chat:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
