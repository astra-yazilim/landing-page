import type { ChatIntent } from "@/content/types";
import { normalizeText } from "@/lib/text";

const wholeWordThreshold = 3;

export function findChatIntent(input: string, intents: ChatIntent[]): ChatIntent | null {
  const text = normalizeText(input);
  if (!text) return null;
  const words = new Set(text.split(" "));

  let best: { intent: ChatIntent; score: number } | null = null;

  for (const intent of intents) {
    const score = intent.keywords.reduce((total, rawKeyword) => {
      const keyword = normalizeText(rawKeyword);
      const isMatch = keyword.length <= wholeWordThreshold ? words.has(keyword) : text.includes(keyword);
      return isMatch ? total + keyword.length : total;
    }, 0);
    if (score > 0 && (!best || score > best.score)) best = { intent, score };
  }

  return best?.intent ?? null;
}
