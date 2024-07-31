import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { UpdateAdminPageProps } from "@/types";
import { RESPONSE_STATUS } from "@/redux/constants";

export const useUpdate = (props: UpdateAdminPageProps) => {
  const {
    updateAdmin,
    updateAdminLoading,
    updateAdminError,
    updateAdminResponse,
    updateAdminReset,

    session,
  } = props;
  const router = useRouter();
  const { query } = router;

  const [form, setForm] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
  });

  const isInvalid = useMemo(() => {
    return !form.firstName || !form.lastName || !form.birthDate || !form.gender;
  }, [form]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, props: string) => {
      const value = e.target.value;
      setForm({
        ...form,
        [props]: value,
      });
    },
    [form]
  );

  const onUpdate = useCallback(() => {
    if (isInvalid) {
      return alert("Fill all of the form");
    }
    updateAdmin(form);
  }, [form, isInvalid]);

  useEffect(() => {
    if (!session?.token) {
      window.location.href = "/login";
    }
  }, [session]);

  useEffect(() => {
    if (query.data) {
      const data = JSON.parse(query.data as any);
      setForm(data.admin);
    }
  }, [query]);

  useEffect(() => {
    if (updateAdminResponse.status === RESPONSE_STATUS.SUCCESS) {
      updateAdminReset();
      alert("Update Admin Data Success");
      router.push("/admin");
    }
    if (updateAdminError) {
      updateAdminReset();
      alert("Update Admin Data Failed");
    }
  }, [updateAdminResponse]);

  return {
    loading: updateAdminLoading,
    disabled: isInvalid,
    form,
    onChange,
    onUpdate,
  };
};
