import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { UpdateProductPageProps } from "@/types";
import { RESPONSE_STATUS } from "@/redux/constants";

export const useUpdate = (props: UpdateProductPageProps) => {
  const {
    updateProduct,
    updateProductLoading,
    updateProductError,
    updateProductResponse,
    updateProductReset,

    getAllCategories,
    getAllCategoriesLoading,
    getAllCategoriesError,
    getAllCategoriesResponse,

    session,
  } = props;
  const router = useRouter();
  const { query } = router;

  const [form, setForm] = useState({
    id: 0,
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

  const onUpdate = useCallback(() => {
    if (isInvalid) {
      return alert("Fill all of the form");
    }
    updateProduct(form);
  }, [form, isInvalid]);

  useEffect(() => {
    if (!session?.token) {
      window.location.href = "/login";
    }
    getAllCategories();
  }, [session]);

  useEffect(() => {
    if (query.data) {
      const data = JSON.parse(query.data as any);
      setForm(data.product);
    }
  }, [query]);

  useEffect(() => {
    if (updateProductResponse.status === RESPONSE_STATUS.SUCCESS) {
      updateProductReset();
      alert("Update Product Data Success");
      router.push("/product");
    }
    if (updateProductError) {
      updateProductReset();
      alert("Update Product Data Failed");
    }
  }, [updateProductResponse]);

  return {
    loading: updateProductLoading || getAllCategoriesLoading,
    disabled: isInvalid,
    form,
    options,
    onChange,
    onSelect,
    onUpdate,
  };
};
