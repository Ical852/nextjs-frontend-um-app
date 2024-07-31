import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { CreateTransactionPageProps } from "@/types";
import { RESPONSE_STATUS } from "@/redux/constants";

export const useCreate = (props: CreateTransactionPageProps) => {
  const {
    createTransaction,
    createTransactionLoading,
    createTransactionError,
    createTransactionResponse,
    createTransactionReset,

    getAllProducts,
    getAllProductsLoading,
    getAllProductsError,
    getAllProductsResponse,

    session,
  } = props;
  const router = useRouter();

  const [form, setForm] = useState({
    productId: 0,
    quantity: 0,
    type: "",
  });

  const isInvalid = useMemo(() => {
    return (
      !form.productId ||
      !form.quantity ||
      !form.type
    );
  }, [form]);

  const types = useMemo(() => {
    return [
      {
        label: 'In',
        value: 'in'
      },
      {
        label: 'Out',
        value: 'out'
      }
    ]
  }, []);

  const options = useMemo(() => {
    if (getAllProductsResponse?.data) {
      return getAllProductsResponse?.data?.map((cat) => {
        return {
          label: cat.name,
          value: cat.id,
        };
      });
    }
    return [];
  }, [getAllProductsResponse]);

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
    (e: any, props: any) => {
      setForm({
        ...form,
        [props]: e.value,
      });
    },
    [form]
  );

  const onSubmit = useCallback(() => {
    if (isInvalid) {
      return alert("Fill all of the form");
    }
    createTransaction(form);
  }, [form, isInvalid]);

  useEffect(() => {
    if (!session?.token) {
      window.location.href = "/login";
    }
    getAllProducts();
  }, [session]);

  useEffect(() => {
    if (createTransactionResponse?.status === RESPONSE_STATUS.CREATED) {
      createTransactionReset();
      alert("Create New Transaction Data Success");
      router.push("/transaction");
    }
    if (createTransactionError) {
      createTransactionReset();
      alert("Create New Transaction Data Failed");
    }
  }, [createTransactionResponse]);

  return {
    loading: createTransactionLoading || getAllProductsLoading,
    disabled: isInvalid,
    form,
    options,
    types,
    onChange,
    onSelect,
    onSubmit,
  };
};
