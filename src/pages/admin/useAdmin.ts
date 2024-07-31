import { AdminPageProps } from "@/types";

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

  return {};
};
