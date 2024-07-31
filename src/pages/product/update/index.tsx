import { UpdateProductPageProps } from "@/types";
import React from "react";
import { useUpdate } from "./useUpdate";

const UpdateProductPage: React.FC<UpdateProductPageProps> = (props) => {
  const update = useUpdate(props);

  return <div>UpdateProductPage</div>;
};

export default UpdateProductPage;
