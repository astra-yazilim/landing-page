import type { ProjectApplicationPayload } from "@/lib/projectApplications";

export type ProjectApplicationRecord = ProjectApplicationPayload & { code?: string };

const mockDelay = 900;

export async function submitProjectApplication(payload: ProjectApplicationPayload): Promise<ProjectApplicationRecord> {
  if (process.env.NODE_ENV !== "production") console.info("[project-application]", payload);
  await new Promise((resolve) => setTimeout(resolve, mockDelay));
  return { ...payload };
}
