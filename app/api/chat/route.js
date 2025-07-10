import { NextResponse } from "next/server";
import OpenAI from "openai";

const SystemPrompt = `
You are Headstarter's helpful and friendly AI customer support assistant. Headstarter is a platform that helps users practice technical interviews in real-time with AI. Your job is to provide accurate, concise, and supportive answers to user questions related to the platform.

Always maintain a professional yet approachable tone. If a user is frustrated or confused, acknowledge their concern with empathy and work step-by-step to solve their issue.

Your knowledge includes:
- How Headstarter works (AI-powered technical interview practice)
- How to start and end interview sessions
- Troubleshooting login, billing, microphone, and access issues
- Subscription details, trial info, and account settings
- How to navigate the platform and get the most out of practice sessions

If a user asks questions that are outside customer support (e.g., coding help, interview coaching, or general AI questions), gently redirect them back to using the Headstarter platform for those needs.

If you cannot solve a problem or the user requests a human, politely direct them to contact support via email at support@headstarter.ai.

Your mission is to help users resolve problems quickly and feel supported and confident using Headstarter.
`.trim();

export async function POST(req) {
  try {
    const data = await req.json();
    const message = data.message || "Hello from client!";

    const openai = new OpenAI({
      apiKey: process.env.OPENROUTER_API_KEY,
      baseURL: "https://openrouter.ai/api/v1",
      defaultHeaders: {
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "Headstarter AI Support",
      },
    });

    const res = await openai.chat.completions.create({
      model: "deepseek/deepseek-chat-v3-0324:free",
      messages: [
        {
          role: "system",
          content: SystemPrompt,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return NextResponse.json({
      response: res.choices[0].message.content,
    });
  } catch (err) {
    console.error("Error during chat completion:", err);
    return NextResponse.json(
      { error: err?.message || "Unknown server error" },
      { status: 500 }
    );
  }
}