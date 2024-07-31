import { RESPONSE_STATUS } from "@/redux/constants";
import { useCallback, useEffect } from "react";

export const useNavbar = (props: any) => {
  const {
    logout,
    logoutLoading,
    logoutError,
    logoutResponse,
    logoutReset
  } = props;

  const onLogout = useCallback(() => {
    logout();
  }, []);

  useEffect(() => {
    if (logoutResponse.status === RESPONSE_STATUS.SUCCESS) {
      logoutReset();
      window.location.href = "/login";
    }
    if (logoutError) {
      alert("Logout Failed");
    }
  }, [logoutResponse]);

  return {
    loading: logoutLoading,
    onLogout,
  };
};
