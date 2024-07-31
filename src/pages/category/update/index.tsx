import React from "react";
import { UpdateCategoryPageProps } from "@/types";
import { useUpdate } from "./useUpdate";

const UpdateCategoryPage: React.FC<UpdateCategoryPageProps> = (props) => {
  const update = useUpdate(props);

  return <div>UpdateCategoryPage</div>;
};

export default UpdateCategoryPage;
