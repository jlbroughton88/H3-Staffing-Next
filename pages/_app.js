import React from "react";
import App from "next/app";
import Layout from "./comps/layout.js";
import { Helmet } from "react-helmet"
import { Auth0Provider } from "use-auth0-hooks";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Auth0Provider
        domain={process.env.DOMAIN}
        clientId={process.env.CLIENT_ID}
        redirectUri={process.env.REDIRECT_URI}
      >
        {/* REPLACE THIS DIV WITH USER CONTEXT PROVIDER */}
        <Layout>
          <Component {...pageProps} />
        </Layout>

        <Helmet>
          <meta charSet="utf-8" />
          <title>H3 Staffing</title>
          <meta name="description" content="Based in Charlotte, NC" />
        </Helmet>
      </Auth0Provider>
    );
  }
}

export default MyApp;
