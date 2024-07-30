import React from 'react';
import { connect } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { login, loginReset } from "@/redux/auth/actions";

import { AuthHeader, MainButton, TextInput } from '@/components';
import { LoginPageProps, LoginRequest } from '@/types';
import { useLogin } from './useLogin';
import Link from 'next/link';

const LoginPage: React.FC<LoginPageProps> = (props) => {
  const login = useLogin(props);

  return (
    <div className="flex h-full w-full flex-col justify-center px-6 py-24 lg:px-8">
      <AuthHeader title='Login Admin' />

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <TextInput
            title="Email Address"
            placeholder='Input your email address...'
            onChange={(e) => login.onChange(e, 'email')}
            value={login.form.email}
          />
          <TextInput
            title="Password"
            placeholder='Input your password...'
            type='password'
            onChange={(e) => login.onChange(e, 'password')}
            value={login.form.password}
          />
          <MainButton
            loading={login.isLoading}
            disabled={login.disabled}
            title={login.isLoading ? 'Login...' : 'Login'}
            onClick={login.onSubmit}
          />
        </form>
        <p className="mt-5 text-center text-sm text-gray-500">
          Don't have any account yet?
          <Link href={'/register'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Register here</Link>
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  loginLoading: state.auth.loginLoading,
  loginResponse: state.auth.loginResponse,
  loginError: state.auth.loginError,
  session: state.auth.session,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  login: (payload: LoginRequest) => dispatch(login(payload)),
  loginReset: () => dispatch(loginReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);