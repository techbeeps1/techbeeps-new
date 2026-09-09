import { generateLlmsTxt } from "@/lib/llms-generator";

export const revalidate = 3600;

export async function GET() {
  try {
    const content = await generateLlmsTxt();

    return new Response(content, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error serving llms.txt:", error);
    return new Response("# TechBeeps Services\n\nError generating llms.txt", {
      status: 500,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}
