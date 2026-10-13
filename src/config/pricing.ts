export type PricingModelId = "credits" | "retainer";
export type PricingTierId = "starter" | "growth" | "enterprise";
export type TaskSizeId = "small" | "medium" | "large";

export const pricingModelIds: PricingModelId[] = ["credits", "retainer"];

export const pricingTierIds: PricingTierId[] = ["starter", "growth", "enterprise"];

export const highlightedTierId: PricingTierId = "growth";

export const estimatorConfig = {
  taskCount: { min: 1, max: 20, step: 1, initial: 4 },
  sizes: [
    { id: "small", credits: 1 },
    { id: "medium", credits: 3 },
    { id: "large", credits: 8 },
  ] satisfies { id: TaskSizeId; credits: number }[],
  initialSizeId: "medium" as TaskSizeId,
  recommendations: [
    { maxCredits: 10, tierId: "starter" },
    { maxCredits: 30, tierId: "growth" },
    { maxCredits: Number.POSITIVE_INFINITY, tierId: "enterprise" },
  ] satisfies { maxCredits: number; tierId: PricingTierId }[],
};
