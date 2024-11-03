import React from 'react';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Header from "newComponents/Header/Header.jsx";
import Footer from "newComponents/Footer/Footer.jsx";
import InPersonHeader from 'newComponents/InPerson/Hero.jsx';
import CoursePlans from 'newComponents/Home/CoursePlans';

import ImportanceHero from 'newComponents/InPerson/Importance.jsx';
import TrialLesson from 'newComponents/Home/TrialLesson';

export default function AboutPage(props){
  return (
    <AnimationRevealPage>
      <Header language = {props.language} />
      <InPersonHeader language = {props.language} />
      <CoursePlans language = {props.language} removeButton = {true}/>

      <ImportanceHero language = {props.language} />
      
      <TrialLesson language = {props.language}/>
      
      <Footer language = {props.language}/>
    </AnimationRevealPage>
  );
}
