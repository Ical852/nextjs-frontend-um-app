import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Loading from "react-loading";

import Link from "next/link";
import { AppDispatch, RootState } from "@/redux/store";
import { logout, logoutReset } from "@/redux/auth/actions";
import { useNavbar } from "./useNavbar";

const Navbar = (props: any) => {
  const navbar = useNavbar(props);

  const router = useRouter();
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  const routerPath = router.pathname;
  const getClass = useCallback(
    (route: string) => {
      const isRoute = routerPath.includes(route);
      if (isRoute) {
        return "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white";
      }
      return "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white";
    },
    [router]
  );
  const getMobileClass = useCallback(
    (route: string) => {
      const isRoute = routerPath.includes(route);
      if (isRoute) {
        return "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white";
      }
      return "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white";
    },
    [router]
  );

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggle}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${show ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                onClick={toggle}
                className={`${show ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href="/admin"
                  className={getClass("/admin")}
                  aria-current="page"
                >
                  Admin
                </Link>
                <Link href="/category" className={getClass("/category")}>
                  Category
                </Link>
                <Link href="/product" className={getClass("/product")}>
                  Product
                </Link>
                <Link href="/transaction" className={getClass("/transaction")}>
                  Transaction
                </Link>
              </div>
            </div>
          </div>
          {navbar.loading ? (
            <Loading width={24} height={24} type="spin" color="white" />
          ) : (
            <button
              onClick={navbar.onLogout}
              className={getClass("/transaction")}
            >
              Logout
            </button>
          )}
        </div>
      </div>

      <div
        className="sm:hidden"
        id="mobile-menu"
        style={{ display: `${show ? "block" : "none"}` }}
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/admin"
            className={getMobileClass("/admin")}
            aria-current="page"
          >
            Admin
          </Link>
          <Link href="/category" className={getMobileClass("/category")}>
            Category
          </Link>
          <Link href="/product" className={getMobileClass("/product")}>
            Product
          </Link>
          <Link href="/transaction" className={getMobileClass("/transaction")}>
            Transaction
          </Link>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state: RootState) => ({
  logoutLoading: state.auth.logoutLoading,
  logoutResponse: state.auth.logoutResponse,
  logoutError: state.auth.logoutError,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  logout: () => dispatch(logout()),
  logoutReset: () => dispatch(logoutReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
