import React, {useState} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {
    MainHeading as MainHeadingTemplate,
    PrimaryButton as PrimaryButtonBase,
    ContentFormatted as BaseContainer,
    ContentFormatted2, HiddenBr_BreakPoint3
  } from "assets/styles/TailwindComponents.jsx";

import { contactUsForm } from "assets/tbas-data/TBas_Info.jsx";

const Container = tw(BaseContainer)`lg:py-12`;

const Heading = tw(MainHeadingTemplate)`text-left text-tbasMain-purple900 tracking-widest font-black pl-4 md:pl-8 2xl:pl-0 pt-8 pb-6`;
const HorizontalLine = tw.div`text-main-black bg-main-black border h-[3px]`;

const Row = tw(ContentFormatted2)`flex flex-col bg-tbasMain-purple400 
justify-between items-center 
lg:my-12 py-12 mx-auto rounded-3xl`;

const Form = tw.form`flex flex-col w-4/5 py-12 text-sm md:text-base lg:text-lg xl:text-xl`;
const Label = tw.label`font-semibold mt-8 mb-3 first:mt-0`;
const RedLabel = tw.span`bg-tbasMain-orange text-main-white font-semibold p-2 mr-4 rounded-lg`;
const Input = tw.input` 
border-b-2 p-4 px-6
font-medium
focus:outline-none transition duration-300 hocus:border-tbasMain-purple700`;
const DropDown = tw.select`text-sm md:text-base lg:text-lg xl:text-xl p-4`;
const Options = tw.option`text-sm md:text-base lg:text-lg xl:text-xl`;
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-40`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

var currInfo = contactUsForm[0];
export default function ContactForm(props) {
  if(props.language === "ENG"){
    currInfo = contactUsForm[1];
  }

  const [name, setName] = useState('');
  const [furigana, setFurigana] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [subject, setSubject] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [questionCategory, setQuestionCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData();
    formData.append('entry.535335213', name); 
    formData.append('entry.339977056', furigana); 
    formData.append('entry.1118025010', phoneNumber); 
    formData.append('entry.1200010804', email); 
    formData.append('entry.727892621', school); 
    formData.append('entry.1595237345', subject); 
    formData.append('entry.1321699481', gradeLevel); 
    formData.append('entry.582929859', questionCategory); 
    formData.append('entry.2028139216', question);  

    try {
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSe-S7A9nNFB-023aMo_4c4nRbbcf5tffofd4l57HoRAJ7x-Lg/formResponse', {
        method: 'POST',
        mode: 'no-cors', // Use no-cors mode to avoid CORS issues
        body: formData,
      });
      setResponseMessage(currInfo.successResponse);
      setName('');
      setFurigana('');
      setPhoneNumber('');
      setEmail('');
      setSchool('');
      setSubject('');
      setGradeLevel('');
      setQuestionCategory('');
      setQuestion('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMessage(currInfo.errorResponse);
    }
  };

  return (
    <Container>
      <Heading>{currInfo.heading}</Heading>
      <HorizontalLine />
      <HiddenBr_BreakPoint3 />
      <Row>
        <Form onSubmit={handleSubmit}>
          <Label for="name">
            <RedLabel>{currInfo.required}</RedLabel>
            {currInfo.entryForms[0].entry}
          </Label>
          <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={currInfo.entryForms[0].example} required />

          <Label for="furigana">
            <RedLabel>{currInfo.required}</RedLabel>
            {currInfo.entryForms[1].entry}
          </Label>
          <Input id="furigana" type="text" value={furigana} onChange={(e) => setFurigana(e.target.value)} placeholder={currInfo.entryForms[1].example} required />
          
          <Label for="phone">
            <RedLabel>{currInfo.required}</RedLabel>
            {currInfo.entryForms[2].entry}
          </Label>
          <Input id="phone" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder={currInfo.entryForms[2].example} required />

          <Label for="email">
            <RedLabel>{currInfo.required}</RedLabel>
            {currInfo.entryForms[3].entry}
          </Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={currInfo.entryForms[3].example} required/>

          <Label for="school">
            <RedLabel>{currInfo.required}</RedLabel>
            {currInfo.entryForms[4].entry}
          </Label>
          <Input id="school" type="text" value={school} onChange={(e) => setSchool(e.target.value)} placeholder={currInfo.entryForms[4].example} required />

          <Label for="subject">
            <RedLabel>{currInfo.required}</RedLabel>
            {currInfo.entryForms[5].entry}
          </Label>
          <DropDown id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
            <Options value={currInfo.entryForms[5].example}>{currInfo.entryForms[5].example}</Options>
          </DropDown>

          <Label for="grade">
            <RedLabel>{currInfo.required}</RedLabel>
            {currInfo.entryForms[6].entry}
          </Label>
          <Input id="grade" type="text" value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)} placeholder={currInfo.entryForms[6].example} required />

          <Label for="contactType">
            <RedLabel>{currInfo.required}</RedLabel>
            {currInfo.entryForms[7].entry}
          </Label>
          <DropDown id="contactType" value={questionCategory} onChange={(e) => setQuestionCategory(e.target.value)}>
            <Options value={currInfo.entryForms[7].example}>{currInfo.entryForms[7].example}</Options>
          </DropDown>
          
          <Label for="question">
            <RedLabel>{currInfo.required}</RedLabel>
            {currInfo.entryForms[8].entry}
          </Label>
          <Textarea id="question" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder={currInfo.entryForms[8].example} />

          <SubmitButton type="submit">{currInfo.send}</SubmitButton>
        </Form>
        {responseMessage && <div>{responseMessage}</div>}
      </Row>
    </Container>
  );
};
