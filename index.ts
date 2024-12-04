import { Mistral } from "@mistralai/mistralai";

const apiKey = process.env.MISTRAL_API_KEY || "your_api_key";

const client = new Mistral({ apiKey: apiKey });

try {
  const response = await client.agents.complete({
    messages: [{ role: "user", content: "What is a canadian?" }],
    agentId: "ag:874777c4:20241130:rudebritishperson:7f9973e4",
  });
  console.log("Response:", response.choices[0].message.content);
} catch (error) {
  console.error("Error:", error);
}
