import React from "react";
import GlobalStyles from 'assets/styles/GlobalStyles.jsx';
import { css } from "styled-components/macro"; //eslint-disable-line

import HomePage from "pages/HomePage.jsx";
import AboutPage from "pages/AboutPage.jsx";
import InPersonPage from "pages/InPersonPage.jsx";
import OnlinePage from "pages/OnlinePage.jsx";
import TutorsPage from "pages/TutorsPage.jsx"
import ContactPage from "pages/ContactPage.jsx";
import ApplyPage from "pages/ApplyPage.jsx";

import FeedbackPage from "pages/FeedbackPage.jsx";
import AccessPage from "pages/AccessPage.jsx";
import FaqPage from "pages/FaqPage.jsx";
import ScrollToTop from "helpers/scrollToTop";

import { HelmetProvider } from 'react-helmet-async';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <HelmetProvider>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element = {<HomePage language = "JP"/>} />
          <Route exact path="/eng" element = {<HomePage language = "ENG"/>} />

          <Route path="/aboutTbas" element = {<AboutPage language = "JP"/>} />
          <Route path="/eng/aboutTbas" element = {<AboutPage language = "ENG"/>} />
          
          <Route path="/inPerson" element = {<InPersonPage language = "JP"/>} />
          <Route path="/eng/inPerson" element = {<InPersonPage language = "ENG"/>} />
          <Route path="/online" element = {<OnlinePage language = "JP"/>} />
          <Route path="/eng/online" element = {<OnlinePage language = "ENG"/>} />

          <Route path="/tutors" element = {<TutorsPage language = "JP"/>} />
          <Route path="/eng/tutors" element = {<TutorsPage language = "ENG"/>} />

          <Route path="/feedback" element = {<FeedbackPage language = "JP"/>} />
          <Route path="/eng/feedback" element = {<FeedbackPage language = "ENG"/>} />

          <Route path="/faq" element = {<FaqPage language = "JP"/>} />
          <Route path="/eng/faq" element = {<FaqPage language = "ENG"/>} />
          
          <Route path="/access" element = {<AccessPage language = "JP"/>} />
          <Route path="/eng/access" element = {<AccessPage language = "ENG"/>} />

          <Route path="/contact" element = {<ContactPage language = "JP"/>} />
          <Route path="/eng/contact" element = {<ContactPage language = "ENG"/>} />

          <Route path="/apply" element = {<ApplyPage language = "JP"/>} />
          <Route path="/eng/apply" element = {<ApplyPage language = "ENG"/>} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
