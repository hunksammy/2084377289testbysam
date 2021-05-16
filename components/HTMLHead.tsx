import React from "react";
import Head from "next/head";

const HtmlHead = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="description"
      content="benjames.me - London-based developer with interest in chatbots, games, and web."
    />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title>benjames.me</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />
    <link type="image/x-icon" rel="icon" href="/static/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <link rel="stylesheet" type="text/css" href="/static/global.css" />
  </Head>
);

export default HtmlHead;
