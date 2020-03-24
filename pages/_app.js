import App from "next/app";
import React from "react";
import Layout from "../components/Layout";
import Error from "../components/Error";
import { ErrorBoundary } from "react-error-boundary";
//Using js because of problems with ErrorBoundary library
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <ErrorBoundary FallbackComponent={Error}>
          <Component {...pageProps} />
        </ErrorBoundary>
      </Layout>
    );
  }
}

export default MyApp;
