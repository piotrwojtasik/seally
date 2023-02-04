import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { useTranslation, Trans } from "react-i18next";
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


import ship from './ship.svg'
import delivery from './delivery.svg'

function Choose(){

  const { t } = useTranslation();

    return (
      <MDBContainer className="my-5">
        <hr />
        
        <div className="d-flex justify-content-center align-items-center row">
        <div className="d-none d-sm-none d-md-none d-xl-block d-flex justify-content-center align-items-center col-xl-4  my-3">
            <MDBContainer fluid><img className='img-fluid'  src={ship}  /></MDBContainer>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-xl-4">
            <h5><i className="fas fa-check-circle me-2 text-success"/>{t("advance1")}</h5>
            <p>{t("advance2")}
            </p>
            <h5><i className="fas fa-check-circle me-2 text-success"/>{t("advance3")}</h5>
            <p>{t("advance4")}
            </p>
            <h5><i className="fas fa-check-circle me-2 text-success"/>{t("advance5")}</h5>
            <p> {t("advance6")}

            </p>

          </div>
          

          <div className="w-100"></div>

          
          <div className="col-12 col-sm-12 col-md-12 col-xl-4">
          <h5><i className="fas fa-check-circle me-2 text-success"/>{t("advance7")}</h5>
            <p>
            {t("advance8")}

            </p>
            <h5><i className="fas fa-check-circle me-2 text-success"/>{t("advance9")}</h5>
            <p>
            {t("advance10")}

            </p>
            <h5><i className="fas fa-check-circle me-2 text-success"/>{t("advance11")}</h5>
            <p>
            {t("advance12")}
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center col-xxl-6 col-xl-4 my-3">
            <MDBContainer fluid><img className='img-fluid'  src={delivery}  /></MDBContainer>
          </div>
        </div>
        <hr />
      </MDBContainer>
    );
  }


export default Choose;
