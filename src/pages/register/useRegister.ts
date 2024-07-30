import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { RegisterPageProps } from "@/types";
import { RESPONSE_STATUS } from "@/redux/constants";

export const useRegister = (props: RegisterPageProps) => {
  const {
    register,
    registerReset,
    registerLoading,
    registerError,
    registerResponse,
    session,
  } = props;
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    gender: '',
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
    register(form);
  }, [form]);

  const btnDisabled = useMemo(() => {
    return (registerLoading || loading) as boolean
      || !form.firstName
      || !form.lastName
      || !form.email
      || !form.birthDate
      || !form.gender
      || !form.password
  }, [form, loading, registerLoading]);

  useEffect(() => {
    if (session?.token) {
      setTimeout(() => {
        router.push('/category');
      }, 500);
    } else {
      if (registerError) {
        registerReset();
        alert('Register Failed');
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
      if (registerResponse.status === RESPONSE_STATUS.CREATED) {
        registerReset();
        alert('Register Success');
        setTimeout(() => {
          setLoading(false);
          router.push('/login');
        }, 500);
      }
    }
  }, [registerResponse, session]);

  return {
    form,
    onChange,
    onSubmit,
    isLoading: (registerLoading || loading) as boolean,
    disabled: btnDisabled,
  }
}