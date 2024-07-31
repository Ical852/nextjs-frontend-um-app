import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { CreateProductPageProps } from "@/types";
import { RESPONSE_STATUS } from "@/redux/constants";

export const useCreate = (props: CreateProductPageProps) => {
  const {
    createProduct,
    createProductLoading,
    createProductError,
    createProductResponse,
    createProductReset,

    getAllCategories,
    getAllCategoriesLoading,
    getAllCategoriesError,
    getAllCategoriesResponse,

    session,
  } = props;
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    description: "",
    imageUrl: "",
    categoryId: 0,
    stock: 0,
  });

  const isInvalid = useMemo(() => {
    return (
      !form.name ||
      !form.description ||
      !form.imageUrl ||
      !form.categoryId ||
      !form.stock
    );
  }, [form]);

  const options = useMemo(() => {
    if (getAllCategoriesResponse?.data) {
      return getAllCategoriesResponse?.data?.map((cat) => {
        return {
          label: cat.name,
          value: cat.id,
        };
      });
    }
    return [];
  }, [getAllCategoriesResponse]);

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

  const onSelect = useCallback(
    (e: any) => {
      setForm({
        ...form,
        categoryId: e.value,
      });
    },
    [form]
  );

  const onSubmit = useCallback(() => {
    if (isInvalid) {
      return alert("Fill all of the form");
    }
    createProduct(form);
  }, [form, isInvalid]);

  useEffect(() => {
    if (!session?.token) {
      window.location.href = "/login";
    }
    getAllCategories();
  }, [session]);

  useEffect(() => {
    if (createProductResponse.status === RESPONSE_STATUS.CREATED) {
      createProductReset();
      alert("Create New Product Data Success");
      router.push("/product");
    }
    if (createProductError) {
      createProductReset();
      alert("Create New Product Data Failed");
    }
  }, [createProductResponse]);

  return {
    loading: createProductLoading || getAllCategoriesLoading,
    disabled: isInvalid,
    form,
    options,
    onChange,
    onSelect,
    onSubmit,
  };
};
