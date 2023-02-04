import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { MDBContainer, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { useTranslation, Trans } from "react-i18next";

function Info() { 

  const { t } = useTranslation();

    return (
      <MDBContainer fluid className='p-3'>
      <MDBTypography note noteColor='info'>
      <strong>{t("info1")}</strong>{t("info2")}
    </MDBTypography>
    </MDBContainer>
    );
  }


export default Info;
