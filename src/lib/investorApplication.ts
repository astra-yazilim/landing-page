import type { InvestorApplicationPayload } from "@/lib/investors";

const mockDelay = 900;

export async function submitInvestorApplication(payload: InvestorApplicationPayload): Promise<void> {
  if (process.env.NODE_ENV !== "production") console.info("[investor-application]", payload);
  await new Promise((resolve) => setTimeout(resolve, mockDelay));
}
