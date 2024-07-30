import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import '../../styles/styles.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (window.location.pathname === '/') {
      window.location.href = '/login'
    }
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
