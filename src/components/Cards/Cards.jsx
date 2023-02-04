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
              <hr />
                <ul className="list-unstyled text-start mt-3">
                <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list1.1")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list1.2")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list1.3")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list1.4")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list1.5")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list1.6")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list1.7")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list1.8")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list1.9")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list1.10")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list1.11")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list1.12")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list1.13")}
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
              <hr />
                <ul className="list-unstyled text-start mt-3">
                <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list2.1")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list2.2")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list2.3")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list2.4")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list2.5")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list2.6")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list2.7")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list2.8")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list2.9")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list2.10")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list2.11")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list2.12")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list2.13")}
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
              <hr />
                <ul className="list-unstyled text-start mt-3">
                <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list3.1")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list3.2")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list3.3")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list3.4")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list3.5")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list3.6")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list3.7")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list3.8")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list3.9")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list3.10")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list3.11")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list3.12")}
                  </li>
                  <hr />
                  <li className="mb-1">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    {t("list3.13")}
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
