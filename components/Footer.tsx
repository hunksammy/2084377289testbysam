import React from "react";
import { Row } from "reactstrap";

const Footer = () => (
  <footer>
    <Row className="footer">
      <p>
        Made with ❤️ using the brilliant{" "}
        <a className="link-secondary" href="https://github.com/zeit/next.js">
          next.js
        </a>
        .
      </p>
    </Row>
    <style jsx global>{`
      .footer {
        background-color: #173e43;
        color: #fff;
        text-align: center;
        padding-top: 20px;
        justify-content: center;
      }
    `}</style>
  </footer>
);

export default Footer;
