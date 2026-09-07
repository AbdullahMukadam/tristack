import { navigableConfirm } from "./navigable";

export async function getInstallChoice(
  flag: boolean | undefined,
  previousAnswer?: boolean,
): Promise<boolean | symbol> {
  return navigableConfirm({
    message: "Install dependencies after scaffolding?",
    active: "Yes",
    inactive: "No",
    initialValue: flag ?? previousAnswer ?? true,
  });
}
