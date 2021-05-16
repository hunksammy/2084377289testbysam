import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { Router } from "next/router";
import NProgress from "nprogress";

import HTMLHead from "./HTMLHead";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (ComposedComponent: React.ComponentType) => () => {
  useEffect(() => {
    Router.events.on("routeChangeStart", () => NProgress.start());
    Router.events.on("routeChangeComplete", () => NProgress.done());
    Router.events.on("routeChangeError", () => NProgress.done());
  }, []);
  return (
    <Container fluid>
      <HTMLHead />
      <Header />
      <ComposedComponent />
      <Footer />
    </Container>
  );
};

export default Layout;
