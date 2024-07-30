import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LoginPageProps } from "@/types";
import { RESPONSE_STATUS } from "@/redux/constants";

export const useLogin = (props: LoginPageProps) => {
  const {
    login,
    loginReset,
    loginLoading,
    loginError,
    loginResponse,
    session,
  } = props;
  const router = useRouter();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, props: string) => {
      const value = e.target.value;
      setForm({
        ...form,
        [props]: value
      });
    },
    [form],
  )

  const onSubmit = useCallback(() => {
    setLoading(true);
    login(form);
  }, [form]);

  useEffect(() => {
    if (session?.token) {
      setTimeout(() => {
        router.push('/category');
      }, 500);
    } else {
      if (loginError) {
        loginReset();
        alert('Login Failed');
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
      if (loginResponse.status === RESPONSE_STATUS.CREATED) {
        loginReset();
        alert('Login Failed');
        setTimeout(() => {
          setLoading(false);
          router.push('/category');
        }, 500);
      }
    }
  }, [loginResponse, session]);

  return {
    form,
    onChange,
    onSubmit,
    isLoading: (loginLoading || loading) as boolean,
    disabled: (loginLoading || loading) as boolean || !form.password || !form.email
  }
}