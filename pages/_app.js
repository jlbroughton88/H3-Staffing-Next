import React from "react";
import App from "next/app";
import Layout from "./comps/layout.js";
import { Helmet } from "react-helmet"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        {/* REPLACE THIS DIV WITH USER CONTEXT PROVIDER */}
        <Layout>
          <Component {...pageProps} />
        </Layout>

        <Helmet>
          <meta charSet="utf-8" />
          <title>H3 Staffing</title>
          <meta name="description" content="Based in Charlotte, NC" />
        </Helmet>
      </div>
    );
  }
}

export default MyApp;