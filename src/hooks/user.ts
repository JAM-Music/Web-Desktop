import { useCallback, useMemo } from "react";
import { isSessionValid, login, register } from "@src/services/auth";
import { delSession } from "@src/services/RESTMethods";
import { UserActions, UserSelector } from "@src/store/user";
import { User, UserCredentials } from "@src/utils/types/user";
import { useAppDispatch, useAppSelector } from ".";

export function useUser() {
  const state = useAppSelector(UserSelector);
  const dispatch = useAppDispatch();
  const isLoggedIn = useMemo(() => state.data?.email, [state]);
  const fullName = useMemo(
    () =>
      `${state.data?.first_name
        .charAt(0)
        .toUpperCase()}${state.data?.first_name.substring(
        1
      )} ${state.data?.last_name
        .charAt(0)
        .toUpperCase()}${state.data?.last_name.substring(1)}`,
    [state.data]
  );

  const logIn = useCallback(
    async (credentials: UserCredentials) => {
      const user = await login(credentials);
      dispatch(UserActions.set(user.data));
    },
    [dispatch]
  );

  const signUp = useCallback(
    async (user: User) => {
      const res = await register(user);
      dispatch(UserActions.set(res.data));
    },
    [dispatch]
  );

  const checkSession = useCallback(async () => {
    try {
      const user = await isSessionValid();

      dispatch(UserActions.set(user.data));
      return true;
    } catch (error) {
      return false;
    }
  }, [dispatch]);

  const signOut = useCallback(async () => {
    await delSession();
    dispatch(UserActions.clear());
  }, [dispatch]);

  return {
    user: state.data,
    isLoggedIn,
    fullName,
    logIn,
    signOut,
    signUp,
    checkSession,
  };
}
