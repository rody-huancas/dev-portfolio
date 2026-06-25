import { v5 as uuidv5 } from "uuid";

import type { IExperience } from "@/types/experience.types";
import type { IProject } from "@/types/projects.types";

const DATA_NAMESPACE = "a3f2c1b0-8e4d-4f5a-9b6c-1d2e3f4a5b6c";

function createDataId(key: string): string {
  return uuidv5(key.trim(), DATA_NAMESPACE);
}

export function defineExperience(item: Omit<IExperience, "id">): IExperience {
  return { ...item, id: createDataId(item.company) };
}

export function defineProject(item: Omit<IProject, "id">): IProject {
  return { ...item, id: createDataId(item.title) };
}
