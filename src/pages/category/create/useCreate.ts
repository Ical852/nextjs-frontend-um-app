import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { CreateCategoryPageProps } from "@/types";
import { RESPONSE_STATUS } from "@/redux/constants";

export const useCreate = (props: CreateCategoryPageProps) => {
  const {
    createCategory,
    createCategoryLoading,
    createCategoryError,
    createCategoryResponse,
    createCategoryReset,

    session,
  } = props;
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const isInvalid = useMemo(() => {
    return !form.name || !form.description;
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

  const onSubmit = useCallback(() => {
    if (isInvalid) {
      return alert("Fill all of the form");
    }
    createCategory(form);
  }, [form, isInvalid]);

  useEffect(() => {
    if (!session?.token) {
      window.location.href = "/login";
    }
  }, [session]);

  useEffect(() => {
    if (createCategoryResponse.status === RESPONSE_STATUS.CREATED) {
      createCategoryReset();
      alert("Create New Category Data Success");
      router.push("/category");
    }
    if (createCategoryError) {
      createCategoryReset();
      alert("Create New Category Data Failed");
    }
  }, [createCategoryResponse]);

  return {
    loading: createCategoryLoading,
    disabled: isInvalid,
    form,
    onChange,
    onSubmit,
  };
};
