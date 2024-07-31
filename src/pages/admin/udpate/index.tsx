import React from "react";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";

import { UpdateAdminDataRequest, UpdateAdminPageProps } from "@/types";
import { MainButton, Navbar, TextInput } from "@/components";
import { updateAdmin, updateAdminReset } from "@/redux/admin/actions";
import { useUpdate } from "./useUpdate";

const UpdateAdminPage: React.FC<UpdateAdminPageProps> = (props) => {
  const update = useUpdate(props);

  return (
    <>
      <Navbar />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <span className="mb-5 text-black font-bold">Admin Table</span>

        <form className="space-y-6" action="#" method="POST">
          <TextInput
            title="First Name"
            placeholder="Input your first name..."
            onChange={(e) => update.onChange(e, "firstName")}
            value={update.form.firstName}
          />
          <TextInput
            title="Last Name"
            placeholder="Input your last name..."
            onChange={(e) => update.onChange(e, "lastName")}
            value={update.form.lastName}
          />
          <TextInput
            title="Birth Date"
            placeholder="Input your birth date..."
            onChange={(e) => update.onChange(e, "birthDate")}
            value={update.form.birthDate}
          />
          <TextInput
            title="Gender"
            placeholder="Input your gender..."
            onChange={(e) => update.onChange(e, "gender")}
            value={update.form.gender}
          />
          <MainButton
            loading={update.loading}
            disabled={update.loading || update.disabled}
            title={"Update"}
            onClick={update.onUpdate}
          />
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  getAllAdminsLoading: state.admin.getAllAdminsLoading,
  getAllAdminsResponse: state.admin.getAllAdminsResponse,
  getAllAdminsError: state.admin.getAllAdminsError,

  updateAdminLoading: state.admin.updateAdminLoading,
  updateAdminResponse: state.admin.updateAdminResponse,
  updateAdminError: state.admin.updateAdminError,

  session: state.auth.session,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  updateAdmin: (payload: UpdateAdminDataRequest) =>
    dispatch(updateAdmin(payload)),
  updateAdminReset: () => dispatch(updateAdminReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAdminPage);
