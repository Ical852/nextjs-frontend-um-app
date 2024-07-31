import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { AdminPageProps, UserData } from "@/types";
import { RESPONSE_STATUS } from "@/redux/constants";

export const useAdmin = (props: AdminPageProps) => {
  const {
    getAllAdmins,
    getAllAdminsLoading,
    getAllAdminsError,
    getAllAdminsResponse,

    deleteAdmin,
    deleteAdminLoading,
    deleteAdminError,
    deleteAdminResponse,
    deleteAdminReset,

    session,
  } = props;
  const router = useRouter();

  const onEdit = useCallback((admin: UserData) => {
    router.push({
      pathname: "/admin/update",
      query: { data: JSON.stringify({ admin }) },
    });
  }, []);

  const onDelete = useCallback((admin: UserData) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this data?"
    );
    if (confirmed) {
      deleteAdmin({ id: admin.id });
    }
  }, []);

  useEffect(() => {
    if (!session?.token) {
      window.location.href = "/login";
    }
    getAllAdmins();
  }, [session]);

  useEffect(() => {
    if (deleteAdminResponse.status === RESPONSE_STATUS.SUCCESS) {
      deleteAdminReset();
      getAllAdmins();
      alert("Delete admin data success");
    }
    if (deleteAdminError) {
      deleteAdminReset();
      alert("Delete admin failed");
    }
  }, [deleteAdminResponse]);

  return {
    loading: getAllAdminsLoading || deleteAdminLoading,
    admins: getAllAdminsResponse?.data || [],
    onEdit,
    onDelete,
  };
};
