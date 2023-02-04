import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MDBContainer } from 'mdb-react-ui-kit';
import { useTranslation, Trans } from "react-i18next";


function Advance() { 
  const { t } = useTranslation();

    return (
      <MDBContainer className="my-5 text-center" id='choose'>
        <h1 className='my-5'>{t("choose1")}</h1>
      <div className="row">
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
      <i className="far fa-clock m-3 fa-5x"></i>
        <h5 className="card-title">{t("choose2")}</h5>
        <p className="card-text">{t("choose3")}</p>
        <a href="#choose" className="btn btn-primary">{t("choose8")}</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
      <i className="fas fa-truck m-3 fa-5x"></i>
        <h5 className="card-title">{t("choose4")}</h5>
        <p className="card-text">{t("choose5")}</p>
        <a href="#choose" className="btn btn-primary">{t("choose9")}</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
      <i className="fas fa-graduation-cap m-3 fa-5x"></i>
        <h5 className="card-title">{t("choose6")}</h5>
        <p className="card-text">{t("choose7")}
</p>
        <a href="#choose" className="btn btn-primary">{t("choose10")}</a>
      </div>
    </div>
  </div>
</div>
</MDBContainer>
    );
  }


export default Advance;
