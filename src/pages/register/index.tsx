import React from "react";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { register, registerReset } from "@/redux/auth/actions";

import { AuthHeader, MainButton, TextInput } from "@/components";
import { RegisterPageProps, RegisterRequest } from "@/types";
import { useRegister } from "./useRegister";
import Link from "next/link";

const RegisterPage: React.FC<RegisterPageProps> = (props) => {
  const reg = useRegister(props);

  return (
    <div className="flex h-full w-full flex-col justify-center px-6 py-24 lg:px-8">
      <AuthHeader title="Login Admin" />

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <TextInput
            title="First Name"
            placeholder="Input your first name..."
            onChange={(e) => reg.onChange(e, "firstName")}
            value={reg.form.firstName}
          />
          <TextInput
            title="Last Name"
            placeholder="Input your last name..."
            onChange={(e) => reg.onChange(e, "lastName")}
            value={reg.form.lastName}
          />
          <TextInput
            type="email"
            title="Email Address"
            placeholder="Input your email address..."
            onChange={(e) => reg.onChange(e, "email")}
            value={reg.form.email}
          />
          <TextInput
            title="Birth Date"
            placeholder="Input your birth date.."
            onChange={(e) => reg.onChange(e, "birthDate")}
            value={reg.form.birthDate}
          />
          <TextInput
            title="Gender"
            placeholder="Input your gender.."
            onChange={(e) => reg.onChange(e, "gender")}
            value={reg.form.gender}
          />
          <TextInput
            title="Password"
            placeholder="Input your password..."
            type="password"
            onChange={(e) => reg.onChange(e, "password")}
            value={reg.form.password}
          />
          <MainButton
            loading={reg.isLoading}
            disabled={reg.disabled}
            title={reg.isLoading ? "Register..." : "Register"}
            onClick={reg.onSubmit}
          />
        </form>
        <p className="mt-5 text-center text-sm text-gray-500">
          Already have an account?
          <Link
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            {" "}
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  registerLoading: state.auth.registerLoading,
  registerResponse: state.auth.registerResponse,
  registerError: state.auth.registerError,
  session: state.auth.session,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  register: (payload: RegisterRequest) => dispatch(register(payload)),
  registerReset: () => dispatch(registerReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
