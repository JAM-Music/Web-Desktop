import Doc from "./Doc";

export interface User extends Doc {
  first_name: string;
  email: string;
  last_name: string;
  password?: string;
  token?: string;
  image?: string;
}

export interface UserCredentials extends Doc {
  email: string;
  password: string;
}
