import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../feature/auth/authSlice";

export default function useAuthCheck() {
  const [authChecked, setAuthChecked] = useState(false);
  // const { data, isLoading, isError, isSuccess } =
  //   useUserDetailsQuery(
  //     {},
  //     {
  //       skip: !isToken,
  //       refetchOnReconnect: true,
  //     }
  //   ) || {};
  const dispatch = useDispatch();
  useEffect(() => {
    const localAuth = localStorage?.getItem("auth");
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.access_token) {
        dispatch(
          userLoggedIn({
            access_token: auth.access_token,
            user: auth.user,
          })
        );
      }
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);
  return authChecked;
}
