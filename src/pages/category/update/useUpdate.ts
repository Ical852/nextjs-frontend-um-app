import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { UpdateCategoryPageProps } from "@/types";
import { RESPONSE_STATUS } from "@/redux/constants";

export const useUpdate = (props: UpdateCategoryPageProps) => {
  const {
    updateCategory,
    updateCategoryLoading,
    updateCategoryError,
    updateCategoryResponse,
    updateCategoryReset,

    session,
  } = props;
  const router = useRouter();
  const { query } = router;

  const [form, setForm] = useState({
    id: 0,
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

  const onUpdate = useCallback(() => {
    if (isInvalid) {
      return alert("Fill all of the form");
    }
    updateCategory(form);
  }, [form, isInvalid]);

  useEffect(() => {
    if (!session?.token) {
      window.location.href = "/login";
    }
  }, [session]);

  useEffect(() => {
    if (query.data) {
      const data = JSON.parse(query.data as any);
      setForm(data.category);
    }
  }, [query]);

  useEffect(() => {
    if (updateCategoryResponse.status === RESPONSE_STATUS.SUCCESS) {
      updateCategoryReset();
      alert("Update Category Data Success");
      router.push("/category");
    }
    if (updateCategoryError) {
      updateCategoryReset();
      alert("Update Category Data Failed");
    }
  }, [updateCategoryResponse]);

  return {
    loading: updateCategoryLoading,
    disabled: isInvalid,
    form,
    onChange,
    onUpdate,
  };
};