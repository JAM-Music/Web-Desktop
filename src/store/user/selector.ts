import type { RootState } from "@redux";
import { UserModuleName } from "./types";

export function UserSelector(state: RootState) {
  return state[UserModuleName];
}
