import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import delivery from "./delivery2.svg";

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { useTranslation, Trans } from "react-i18next";

function Main() {
  const {t} = useTranslation();
  return (
    <MDBContainer className="my-3" id="about">
      <MDBRow>
        <MDBCol lg="6" xl="6" xxl="6">
          <h3>{t("about1")}</h3>
          <hr />
          <p>
            {t("about2")}
          </p>
          <p>
           {t("about3")}
          </p>
        </MDBCol>
        <MDBCol lg="6" xl="6" xxl="6">
          <MDBContainer>
            <img className="img-fluid" src={delivery} />
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Main;
