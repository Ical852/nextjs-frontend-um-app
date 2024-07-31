import { UpdateAdminPageProps } from "@/types";
import React from "react";
import { useUpdate } from "./useUpdate";

const UpdateAdminPage: React.FC<UpdateAdminPageProps> = (props) => {
  const update = useUpdate(props);

  return <div>UpdateAdmin</div>;
};

export default UpdateAdminPage;
