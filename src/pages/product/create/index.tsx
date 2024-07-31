import { CreateProductPageProps } from "@/types";
import React from "react";
import { useCreate } from "./useCreate";

const CreateProductPage: React.FC<CreateProductPageProps> = (props) => {
  const create = useCreate(props);

  return <div>CreateProductPage</div>;
};

export default CreateProductPage;
