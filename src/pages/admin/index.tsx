import { AdminPageProps } from "@/types";
import React from "react";
import { useAdmin } from "./useAdmin";

const AdminDashboardPage: React.FC<AdminPageProps> = (props) => {
  const admin = useAdmin(props);

  return <div>AdminDashboardPage</div>;
};

export default AdminDashboardPage;
