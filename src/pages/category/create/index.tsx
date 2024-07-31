import React from "react";
import { CreateCategoryPageProps } from "@/types";
import { useCreate } from "./useCreate";

const CreateCategoryPage: React.FC<CreateCategoryPageProps> = (props) => {
  const create = useCreate(props);

  return <div>CreateCategoryPage</div>;
};

export default CreateCategoryPage;
