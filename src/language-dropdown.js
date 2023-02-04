// import React from "react";
// import { useTranslation, Trans } from "react-i18next";

// import Form from "react-bootstrap/Form";
// import { Container, NavItem } from "react-bootstrap";
// import { Nav } from "react-bootstrap";
// import { Navbar } from "react-bootstrap";
// import { NavDropdown } from "react-bootstrap";

// import {
//   MDBFooter,
//   MDBContainer,
//   MDBIcon,
//   MDBInput,
//   MDBCol,
//   MDBRow,
//   MDBBtn,
// } from "mdb-react-ui-kit";

// const bgColors = {
//   transparent: "rgba(0,0,0,0)",
//   dark: "#81b71a",
//   light: "#FBFBFB",
//   border: "none",
//   icon: `url('./poland.png')`,
// };

// function LanguageOption(props) {

//   const { t, i18n } = useTranslation();

//   function handleClick(lang) {
//     i18n.changeLanguage(lang);
//   }

//   return (
//     <Form.Select
//       size="sm"
//       style={{ backgroundColor: bgColors.light }}
//       aria-label="Language"
//       onChange={props.onChange}
//     >
//       <option value={"en"}><MDBBtn onClick={() => {console.log("click")}}>EN</MDBBtn></option>
//       <option value={"pl"} onChange={() => handleClick('pl')}>PL</option>
//     </Form.Select>
//   );
// }

// export default LanguageOption;
