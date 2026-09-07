import { navigableConfirm } from "./navigable";

export async function getGitChoice(
  flag: boolean | undefined,
  previousAnswer?: boolean,
): Promise<boolean | symbol> {
  return navigableConfirm({
    message: "Initialize a git repository?",
    active: "Yes",
    inactive: "No",
    initialValue: flag ?? previousAnswer ?? true,
  });
}
