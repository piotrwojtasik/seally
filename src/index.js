import React from 'react';


import { createRoot } from 'react-dom/client';

import './i18n'


import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './components/Footer';
import Info from './components/Info/Info';
import Newsletter from './components/Newsletter/Newsletter';
import Cards from './components/Cards/Cards';
import Contact from './components/Contact/Contact';
import Text from './components/Text/Text';
import Main from './components/Main/Main';
import Choose from './components/Choose/Choose';
import Advance from './components/Advance/Advance';


import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Newsletter />
    <Info />
    <Main />
    <Advance />
    <Choose />
    <Text />
    <Cards />
    <Contact />
    <Footer />
  </React.StrictMode>
);

