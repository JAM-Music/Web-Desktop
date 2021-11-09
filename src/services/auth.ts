import { User, UserCredentials } from "@src/utils/types/user";
import { get, post, saveSession } from "./RESTMethods";

export async function register(user: User) {
  const sessionUser = await post<User>("/users/register", user);
  saveSession(sessionUser.data.token);
  return sessionUser;
}

export async function login(user: UserCredentials) {
  const sessionUser = await post<User>("/users/login", user);
  saveSession(sessionUser.data.token);
  return sessionUser;
}

export async function getCurrentUser() {
  return get<User>("/users");
}

export async function isSessionValid() {
  return get<User>("/users/session");
}
