import React, { PureComponent } from "react";
import { useTranslation, Trans } from "react-i18next";
import PropTypes from "prop-types";

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

function Footer() {
  const { t } = useTranslation();
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted"
      id="footer"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>{t("footer1")}</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                SEALLY
              </h6>
              <p>
              {t("footer2")}
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">{t("footer3")}</h6>
              <p>
                <a href="#fields" className="text-reset">
                {t("footer6")}
                </a>
              </p>
              <p>
                <a href="#fields" className="text-reset">
                {t("footer7")}
                </a>
              </p>
              <p>
                <a href="#fields" className="text-reset">
                {t("footer8")}
                </a>
              </p>
              <p>
                <a href="#fields" className="text-reset">
                {t("footer9")}
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">{t("footer4")}</h6>
              <p>
                <a href="#fields" className="text-reset">
                {t("footer10")}
                </a>
              </p>
              <p>
                <a href="#team" className="text-reset">
                {t("footer11")}
                </a>
              </p>
              <p>
                <a href="#about" className="text-reset">
                {t("footer12")}
                </a>
              </p>
              <p>
                <a href="#choose" className="text-reset">
                {t("footer13")}
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">{t("footer5")}</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Przybyszewskiego 26, Władysławowo, 84-120, PL
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                piotr.wojtasik@seally.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                weronika.ceynowa@seally.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 48
                530 997 935
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 01
                234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          SEALLY
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
