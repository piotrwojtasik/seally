import React, { PureComponent } from "react";

import { useTranslation, Trans } from "react-i18next";

import PropTypes from "prop-types";

import { createRoot } from "react-dom/client";

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Figure } from "react-bootstrap";
import ship from "./ship.svg";
import background from "./background.jpg";

function Newsletter() {
  const { t } = useTranslation();
  return (
    <div
      className="p-5 text-center bg-image bg-primary "
      style={{ backgroundImage: `url(${background})`, height: 600 }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">
              {t("welcome")}
            </h1>
            <h4 className="mb-4">{t("welcome2")}</h4>
            <MDBBtn
              className="m-2"
              tag="a"
              size="lg"
              color="dark"
              href="#fields"
            >
              {t("welcome3")}
            </MDBBtn>
            <MDBBtn
              className="m-2"
              tag="a"
              size="lg"
              color="dark"
              href="#contact"
            >
              {t("welcome4")}
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
