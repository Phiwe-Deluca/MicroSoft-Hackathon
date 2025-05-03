import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { AzureOpenAI } from "openai";

dotenv.config();

const app = express();
const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});


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

app.get("/early-signs", (req, res) => {
  const earlySigns = [
    {
      sign: "Unexplained weight loss",
      article:
        "[WebMD: Cancer Symptoms](https://www.webmd.com/cancer/understanding-cancer-symptoms)",
    },
    {
      sign: "Persistent fatigue",
      article:
        "[American Cancer Society: Signs and Symptoms](https://www.cancer.org/cancer/diagnosis-staging/signs-and-symptoms-of-cancer.html)",
    },
    {
      sign: "Changes in skin (new moles or sores that don’t heal)",
      article:
        "[MD Anderson: 10 Signs You Shouldn't Ignore](https://www.mdanderson.org/publications/focused-on-health/what-are-cancer-s-symptoms--10-signs-you-shouldn-t-ignore.h11-1592991.html)",
    },
    {
      sign: "Lumps or swelling in any part of the body",
      article:
        "[WebMD: Cancer Symptoms](https://www.webmd.com/cancer/understanding-cancer-symptoms)",
    },
    {
      sign: "Persistent cough or difficulty swallowing",
      article:
        "[American Cancer Society: Signs and Symptoms](https://www.cancer.org/cancer/diagnosis-staging/signs-and-symptoms-of-cancer.html)",
    },
  ];

  res.json({ earlySigns });
});

app.get("/prevention-tips", (req, res) => {
  const preventionTips = [
    {
      tip: "Maintain a healthy diet rich in fruits and vegetables",
      article:
        "[Harvard Health: Cancer Prevention](https://www.health.harvard.edu/newsletter_article/the-10-commandments-of-cancer-prevention)",
    },
    {
      tip: "Exercise regularly to boost immunity",
      article:
        "[Mayo Clinic: Cancer Prevention](https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/cancer-prevention/art-20044816)",
    },
    {
      tip: "Avoid tobacco and limit alcohol consumption",
      article:
        "[CU Cancer Center: Top 10 Ways to Prevent Cancer](https://news.cuanschutz.edu/cancer-center/schulick-fischer-studts-top-10-prevention)",
    },
    {
      tip: "Protect yourself from excessive sun exposure",
      article:
        "[Mayo Clinic: Cancer Prevention](https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/cancer-prevention/art-20044816)",
    },
    {
      tip: "Get regular medical check-ups and screenings",
      article:
        "[Harvard Health: Cancer Prevention](https://www.health.harvard.edu/newsletter_article/the-10-commandments-of-cancer-prevention)",
    },
  ];

  res.json({ preventionTips });
});

app.get("/chemo-hospitals", (req, res) => {
  const hospitals = [
    {
      name: "Nelson Mandela Children's Hospital",
      location: "Parktown, Gauteng",
      contact: "010 133 0600",
      website: "https://www.nelsonmandelachildrenshospital.org/",
    },
    {
      name: "Cancer SA",
      location: "Centurion, Gauteng",
      contact: "072 444 9959",
      website: "https://www.cancersa.net/",
    },
    {
      name: "Life Brooklyn Day Hospital",
      location: "Pretoria, Gauteng",
      contact: "012 433 0860",
      website:
        "https://www.lifehealthcare.co.za/hospitals/gauteng/pretoria/life-brooklyn-day-hospital/",
    },
    {
      name: "Netcare Milpark Hospital",
      location: "Johannesburg, Gauteng",
      contact: "011 480 5600",
      website:
        "https://www.netcare.co.za/netcare-facilities/netcare-milpark-hospital",
    },
    {
      name: "Chris Hani Baragwanath Hospital",
      location: "Soweto, Gauteng",
      contact: "011 933 0967",
      website: "https://www.chrishanibaragwanathhospital.co.za/",
    },
  ];
  res.json({ hospitals });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});