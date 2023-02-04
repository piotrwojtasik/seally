import React, { PureComponent } from "react";
import { useTranslation, Trans } from "react-i18next";
import PropTypes from "prop-types";

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";

import first from "./electric.svg";
import second from "./safe.svg";
import third from "./chemicals.svg";

function Cards() {

  const { t } = useTranslation();
  return (
    <MDBContainer fluid className="text-center" id="fields">
      <h1 className="my-3">{t("products1")}</h1>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4 mx-auto  my-3 w-75">
        <MDBCol>
          <MDBCard className="h-100">
            <div>
              <i className="fas fa-tools fa-7x m-5"></i>
            </div>
            <MDBCardBody>
              <MDBCardTitle>{t("products2")}</MDBCardTitle>
              <MDBCardText>
              {t("products3")}
                <ul className="list-unstyled text-start mt-3">
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    Hundreds of additional quality components
                  </li>
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    Much better design
                  </li>
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    Integration with TypeScript
                  </li>
                </ul>
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">{t("products_update")}</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol className="d-flex align-items-center">
          <MDBCard className="h-100">
            <div className="">
              <i className="fas fa-hard-hat fa-7x m-5"></i>
            </div>
            <MDBCardBody>
              <MDBCardTitle>{t("products4")}</MDBCardTitle>
              <MDBCardText>
              {t("products5")}
                <ul className="list-unstyled text-start mt-3">
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    Hundreds of additional quality components
                  </li>
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    Much better design
                  </li>
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    Integration with TypeScript
                  </li>
                </ul>
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">{t("products_update")}</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <div>
              <i className="fas fa-flask fa-7x m-5"></i>
            </div>
            <MDBCardBody>
              <MDBCardTitle>{t("products6")}</MDBCardTitle>
              <MDBCardText>
              {t("products7")}
                <ul className="list-unstyled text-start mt-3">
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    Hundreds of additional quality components
                  </li>
                  <li className="mb-1 start-0">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    Much better design
                  </li>
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    Integration with TypeScript
                  </li>
                </ul>
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">{t("products_update")}</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Cards;
