import React from "react";
import { useTranslation, Trans } from "react-i18next";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Form from "react-bootstrap/Form";

import { Container, NavItem } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import LanguageOption from "./language-dropdown";

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import i18next from "i18next";

const bgColors = {
  transparent: "rgba(0,0,0,0)",
  dark: "#81b71a",
  light: "#FBFBFB",
  border: "none",
  icon: `url('./poland.png')`,
};

function App() {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
      i18n.changeLanguage(lang);
  }

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">SEALLY</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">{t("nav1")}</Nav.Link>
            <Nav.Link href="#contact">{t("nav2")}</Nav.Link>
            <NavDropdown title={t("nav3")} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#choose">{t("nav4")}</NavDropdown.Item>
              <NavDropdown.Item href="#team">{t("nav5")}</NavDropdown.Item>
              <NavDropdown.Item href="#fields">
              {t("nav6")}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#footer">Social Media</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar className="ml-auto">
            <NavItem className="">
              <MDBBtn color='tertiary' className="" onClick={() => { handleClick('en')}} >
              <MDBIcon flag='uk' />
            </MDBBtn>
              </NavItem>
              <NavItem>
              <MDBBtn  color='tertiary' onClick={() => { handleClick('pl')}}>
              <MDBIcon flag='poland' />
           </MDBBtn>
              </NavItem>
          </Navbar>
      </Container>
    </Navbar>
  );
}

export default App;
