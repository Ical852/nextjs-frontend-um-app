import {
  DeleteAdminDataRequest,
  DeleteAdminDataResponse,
  GetAllAdminsResponse,
  UpdateAdminDataRequest,
  UpdateAdminDataResponse,
} from "../fetch";

export interface AdminPageProps {
  getAllAdmins: () => void;
  getAllAdminsLoading: boolean;
  getAllAdminsResponse: GetAllAdminsResponse;
  getAllAdminsError: boolean;

  deleteAdmin: (payload: DeleteAdminDataRequest) => void;
  deleteAdminLoading: boolean;
  deleteAdminResponse: DeleteAdminDataResponse;
  deleteAdminError: boolean;
  deleteAdminReset: () => void;

  session: any;
}

export interface UpdateAdminPageProps {
  updateAdmin: (payload: UpdateAdminDataRequest) => void;
  updateAdminLoading: boolean;
  updateAdminResponse: UpdateAdminDataResponse;
  updateAdminError: boolean;
  updateAdminReset: () => void;

  session: any;
}
