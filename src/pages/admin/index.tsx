import React, { useMemo } from "react";
import { connect } from "react-redux";
import Loading from "react-loading";
import { AppDispatch, RootState } from "@/redux/store";

import { Navbar } from "@/components";
import { AdminPageProps, DeleteAdminDataRequest, UserData } from "@/types";
import {
  deleteAdmin,
  deleteAdminReset,
  getAllAdmins,
} from "@/redux/admin/actions";
import { useAdmin } from "./useAdmin";

const AdminDashboardPage: React.FC<AdminPageProps> = (props) => {
  const admin = useAdmin(props);

  const _renderTableContent = useMemo(() => {
    if (admin.loading) {
      return (
        <tr>
          <td colSpan={3} className="relative">
            <div className="inset-0 flex items-center justify-center">
              <Loading type="bars" color="blue" height={50} width={50} />
            </div>
          </td>
        </tr>
      );
    }

    return admin.admins?.map((adm: UserData) => {
      const { firstName, lastName, birthDate, email, gender } = adm;

      return (
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
            {firstName} {lastName}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
            {email}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
            {birthDate}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
            {gender}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
            <button
              onClick={() => admin.onEdit(adm)}
              type="button"
              className="mr-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-green-800 focus:outline-none focus:text-green-800 disabled:opacity-50 disabled:pointer-events-none dark:text-green-500 dark:hover:text-green-400 dark:focus:text-green-400"
            >
              Edit
            </button>
            <button
              onClick={() => admin.onDelete(adm)}
              type="button"
              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 focus:outline-none focus:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-400 dark:focus:text-red-400"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }, [admin.loading, admin.admins, admin.onDelete, admin.onEdit]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center w-full my-5">
            <span className="my-5 text-black font-bold">Admin Table</span>
          </div>
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Birth
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Gender
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">{_renderTableContent}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  getAllAdminsLoading: state.admin.getAllAdminsLoading,
  getAllAdminsResponse: state.admin.getAllAdminsResponse,
  getAllAdminsError: state.admin.getAllAdminsError,

  deleteAdminLoading: state.admin.deleteAdminLoading,
  deleteAdminResponse: state.admin.deleteAdminResponse,
  deleteAdminError: state.admin.deleteAdminError,

  session: state.auth.session,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getAllAdmins: () => dispatch(getAllAdmins()),
  deleteAdmin: (payload: DeleteAdminDataRequest) =>
    dispatch(deleteAdmin(payload)),
  deleteAdminReset: () => dispatch(deleteAdminReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboardPage);
