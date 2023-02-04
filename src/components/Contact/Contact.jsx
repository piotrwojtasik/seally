import React, { useState} from "react";
import PropTypes from "prop-types";

import { MDBContainer, MDBInputGroup, MDBTypography } from "mdb-react-ui-kit";
import Form from 'react-bootstrap/Form';
import { useTranslation, Trans } from "react-i18next";

function Contact() {

  const { t } = useTranslation();

  const [formState, setFormState] = useState({});


  const changeHandler = (event) => {
    setFormState({...formState, [event.target.name]: event.target.value });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const config = {

      SecureToken: '9bc3b3ce-8fbc-4cfa-95e4-b8c6635f1051',
      To : 'test@yopmail.com',
      From : formState.email,
      Subject : "Contact form SEALLY",
      Body : `${formState.name}`
    }
  

    if(window.Email) {
      window.Email.send(config).then(() => alert('email send succesfully'))
    }
  }

    return (
      <div className="container my-5" id='contact'>
        <h3 className='text-center'>{t("contact1")}</h3>
        <hr />
          <Form className='my-5' onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{t("contact2")}</Form.Label>
        <Form.Control type="email" name="email" value={formState.email || ''} placeholder={t("contact3")}  onChange={changeHandler}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{t("contact4")}</Form.Label>
        <Form.Control as="textarea" type="text" name="name" value={formState.name || ''} rows={3} onChange={changeHandler} />
      </Form.Group>
      <button type="submit" value="Send Email" className="btn btn-primary btn-block mb-4 w-25">{t("contact5")}</button>
    </Form>
      </div>
    );
  }


export default Contact;
