import { CreateTransactionPageProps } from "@/types";
import React from "react";
import { useCreate } from "./useCreate";

const CreateTransactionPage: React.FC<CreateTransactionPageProps> = (props) => {
  const create = useCreate(props);

  return <div>CreateTransactionPage</div>;
};

export default CreateTransactionPage;
