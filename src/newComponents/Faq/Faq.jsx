import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

import {
  MainHeading as MainHeadingTemplate,
  MainHeading2 as SubMainHeadingTemplate,
  MainParagraph as MainParagraphTemplate,
  MainParagraph2 as MainParagraph2Template,
  ContentFormatted
} from "assets/styles/TailwindComponents.jsx";

import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { faqInfo } from "assets/tbas-data/TBas_Info.jsx";

const Heading = tw(MainHeadingTemplate)`text-left text-tbasMain-purple900 tracking-widest font-black pl-4 md:pl-8 2xl:pl-0`;
const HorizontalLine = tw.div`text-main-black bg-main-black border h-[3px]`;

const SubHeading = tw(SubMainHeadingTemplate)`text-tbasMain-purple900 text-center py-8 md:py-16`;

const Container = tw.div`flex flex-col items-center w-full`;
const FAQSContainer = tw.dl`relative space-y-8 w-full`;
const FAQ = tw.div`cursor-pointer select-none 
transition duration-300 border-2 rounded-2xl`;

const QAContainer = tw.div`flex flex-row items-start w-full`;
const LabelContainer = tw.div`md:w-1/16`;
const TextContainer = tw.div`md:w-15/16 text-left ml-4`;

const Question = tw.dt`flex bg-tbasMain-purple500 text-main-white py-10 px-6 rounded-t-2xl`;
const QuestionText = tw.span`text-left text-base sm:text-lg md:text-xl lg:text-2xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300 text-tbasMain-purple900`}
  svg {
    ${tw`w-6 h-6`}
  }
`);

const Answer = motion(tw.dd`
  pointer-events-none text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed bg-white
  px-6 rounded-b-2xl
`);

const BaseLabel = tw.span`font-bold text-main-white
text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
py-4 px-6 rounded-full`;

const QLabel = tw(BaseLabel)`bg-tbasMain-purple900`;
const ALabel = tw(BaseLabel)`bg-tbasMain-orange`;

const InternalNavBar = tw.div`inline-block flex flex-col md:flex-row cursor-pointer py-6 md:my-12`;
const NavLink = tw.a`
  text-lg 
  lg:mx-4 xl:mx-6 my-2 lg:my-0
  font-semibold tracking-wide transition duration-300
  py-4 px-8 border border-black rounded-md
  text-tbasMain-purple900
  hocus:text-tbasMain-orange
`;

const PriceTable = tw.div`flex flex-col w-14/16 md:mx-6 my-12 border border-black`;
const PriceHeadingContainer = tw.div`w-full text-center p-8`
const PriceHeading = tw(SubMainHeadingTemplate)`text-tbasMain-purple900 text-center`;
const PriceKeyNote = tw(MainParagraphTemplate)`text-main-red text-center`;

const CourseColumnContainer = tw.div`flex flex-col md:flex-row w-full`;
const CourseColumn = tw.div`flex flex-col md:w-1/3 text-center py-6 px-8 border-black`;
const CourseHeading = tw(MainHeadingTemplate)`font-bold w-full text-center md:my-8`;
const CostHeading = tw(MainHeadingTemplate)`font-bold w-full text-center`;
const CourseDescription = tw(MainParagraph2Template)`inline-block text-left text-tbasMain-purple900 font-medium mt-6`;
const PriceCourseDescription = tw(CourseDescription)`inline-block text-main-black font-light mt-0`;

const ContainerFormatted = tw(ContentFormatted)`mt-6 lg:mt-0 lg:py-12 lg:pb-12`;

var currInfo = faqInfo[0];

var LessonState = Array(currInfo.lesson.length).fill(false);
var PriceState = Array(currInfo.price.length).fill(false);
var JoinState = Array(currInfo.join.length).fill(false);

export default function FAQComponent(props){
  if(props.language === "ENG"){
    currInfo = faqInfo[1];
  }

  const [lessonIsOpen, lessonSetIsOpen] = useState(LessonState);
  const [priceIsOpen, priceSetIsOpen] = useState(PriceState);
  const [joinIsOpen, joinSetIsOpen] = useState(JoinState);

  const toggleLessonQuestion = questionIndex => {
    lessonSetIsOpen((prev) =>
      prev.map((item, i) => (i === questionIndex ? !item : item)) // Toggle only the selected index
    );
  };
  const togglePriceQuestion = questionIndex => {
    priceSetIsOpen((prev) =>
      prev.map((item, i) => (i === questionIndex ? !item : item)) // Toggle only the selected index
    );
  };
  const toggleJoinQuestion = questionIndex => {
    joinSetIsOpen((prev) =>
      prev.map((item, i) => (i === questionIndex ? !item : item)) // Toggle only the selected index
    );
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id); // Find the element by ID
    if (element) {
      window.scrollTo({
        top: element.offsetTop,  // Get the top position of the element
        behavior: 'smooth',  // Smooth scrolling
      });
    }
  };

  return (
    <ContainerFormatted >
      <Heading>{currInfo.heading}</Heading>
      <HorizontalLine />
      <Container>
        <InternalNavBar>
          <NavLink href="#" onClick={() => scrollToElement('lesson')}>
            {currInfo.subHeaders[0]}
          </NavLink>
          <NavLink href="#" onClick={() => scrollToElement('price')}>
            {currInfo.subHeaders[1]}
          </NavLink>
          <NavLink href="#" onClick={() => scrollToElement('join')}>
            {currInfo.subHeaders[2]}
          </NavLink>
        </InternalNavBar>

        <SubHeading id="lesson">{currInfo.subHeaders[0]}</SubHeading>
        <FAQSContainer>
          {currInfo.lesson.map((faq, index) => (
            <FAQ
              key={index}
              onClick={() => {
                toggleLessonQuestion(index);
              }}
              className="group"
            >
              <Question>
                <QAContainer>
                  <LabelContainer>
                    <QLabel>Q</QLabel>
                  </LabelContainer>
                  <TextContainer>
                    <QuestionText>
                      {faq.question}
                    </QuestionText>
                  </TextContainer>
                </QAContainer>
                
                <QuestionToggleIcon
                  variants={{
                    collapsed: { rotate: 0 },
                    open: { rotate: -180 }
                  }}
                  initial="collapsed"
                  animate={lessonIsOpen[index] ? "open" : "collapsed"}
                  transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <ChevronDownIcon />
                </QuestionToggleIcon>
              </Question>
              <Answer
                variants={{
                  open: { opacity: 1, height: "auto", marginTop: "16px" },
                  collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                }}
                initial="collapsed"
                animate={lessonIsOpen[index] ? "open" : "collapsed"}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <QAContainer tw="py-10">
                  <LabelContainer>
                    <ALabel>A</ALabel>
                  </LabelContainer>
                  <TextContainer>
                    {faq.answer}
                  </TextContainer>
                </QAContainer>
              </Answer>
            </FAQ>
          ))}
        </FAQSContainer>

        <SubHeading id="price">{currInfo.subHeaders[1]}</SubHeading>
        <FAQSContainer>
          {currInfo.price.map((faq, index) => (
            <FAQ
              key={index}
              onClick={() => {
                togglePriceQuestion(index);
              }}
              className="group"
            >
              <Question>
                <QAContainer>
                  <LabelContainer>
                    <QLabel>Q</QLabel>
                  </LabelContainer>
                  <TextContainer>
                    <QuestionText>
                      {faq.question}
                    </QuestionText>
                  </TextContainer>
                </QAContainer>
                
                <QuestionToggleIcon
                  variants={{
                    collapsed: { rotate: 0 },
                    open: { rotate: -180 }
                  }}
                  initial="collapsed"
                  animate={priceIsOpen[index] ? "open" : "collapsed"}
                  transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <ChevronDownIcon />
                </QuestionToggleIcon>
              </Question>
              <Answer
                variants={{
                  open: { opacity: 1, height: "auto", marginTop: "16px" },
                  collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                }}
                initial="collapsed"
                animate={priceIsOpen[index] ? "open" : "collapsed"}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <QAContainer tw="py-6">
                  <LabelContainer>
                    <ALabel>A</ALabel>
                  </LabelContainer>
                  <TextContainer>
                    {faq.answer}
                    {index === 1 && 
                    <>
                      <PriceTable>
                        <PriceHeadingContainer>
                          <PriceHeading>
                          {faq.inPersonTable.heading}
                          </PriceHeading>
                          <PriceKeyNote>
                          {faq.inPersonTable.keyNote}
                          </PriceKeyNote>
                        </PriceHeadingContainer>
                        <CourseColumnContainer>
                          <CourseColumn tw="md:border-r border-t">
                            <CourseHeading tw="text-tbasMain-orange">
                              {faq.inPersonTable.courses[0].heading}
                            </CourseHeading>
                            <CourseDescription>
                              {faq.inPersonTable.courses[0].stdPriceHeading}
                            </CourseDescription>
                            <CostHeading tw="text-left">
                              {faq.inPersonTable.courses[0].stdPrice}
                              <PriceCourseDescription>
                              {faq.inPersonTable.priceSuffix}
                              </PriceCourseDescription>
                            </CostHeading>
                            <CourseDescription>
                              {faq.inPersonTable.courses[0].dealPriceHeading}
                            </CourseDescription>
                            <CostHeading tw="text-left">
                              {faq.inPersonTable.courses[0].dealPrice}
                              <PriceCourseDescription>
                              {faq.inPersonTable.priceSuffix}
                              </PriceCourseDescription>
                            </CostHeading>
                          </CourseColumn>
                          <CourseColumn tw="md:border-r border-t">
                            <CourseHeading tw="text-tbasMain-lightBlue">
                              {faq.inPersonTable.courses[1].heading}
                            </CourseHeading>
                            <CourseDescription>
                              {faq.inPersonTable.courses[1].stdPriceHeading}
                            </CourseDescription>
                            <CostHeading tw="text-left">
                              {faq.inPersonTable.courses[1].stdPrice}
                              <PriceCourseDescription>
                              {faq.inPersonTable.priceSuffix}
                              </PriceCourseDescription>
                            </CostHeading>
                            <CourseDescription>
                              {faq.inPersonTable.courses[1].dealPriceHeading}
                            </CourseDescription>
                            <CostHeading tw="text-left">
                              {faq.inPersonTable.courses[1].dealPrice}
                              <PriceCourseDescription>
                              {faq.inPersonTable.priceSuffix}
                              </PriceCourseDescription>
                            </CostHeading>
                          </CourseColumn>
                          <CourseColumn tw="border-t">
                            <CourseHeading tw="text-tbasMain-purple500">
                              {faq.inPersonTable.courses[2].heading}
                            </CourseHeading>
                            <CourseDescription>
                              {faq.inPersonTable.courses[2].stdPriceHeading}
                            </CourseDescription>
                            <CostHeading tw="text-left">
                              {faq.inPersonTable.courses[2].stdPrice}
                              <PriceCourseDescription>
                              {faq.inPersonTable.priceSuffix}
                              </PriceCourseDescription>
                            </CostHeading>
                            <CourseDescription>
                              {faq.inPersonTable.courses[2].dealPriceHeading}
                            </CourseDescription>
                            <CostHeading tw="text-left">
                              {faq.inPersonTable.courses[2].dealPrice}
                              <PriceCourseDescription>
                              {faq.inPersonTable.priceSuffix}
                              </PriceCourseDescription>
                            </CostHeading>
                          </CourseColumn>
                        </CourseColumnContainer>
                      </PriceTable>
                      <PriceTable>
                        <PriceHeadingContainer>
                          <PriceHeading>
                          {faq.onlineTable.heading}
                          </PriceHeading>
                        </PriceHeadingContainer>
                        <CourseColumnContainer>
                          <CourseColumn tw="md:w-1/2 md:border-r border-t">
                            <CourseHeading tw="text-tbasMain-lightBlue">
                              {faq.onlineTable.courses[0].heading}
                            </CourseHeading>
                            <CourseDescription tw="md:px-24">
                              {faq.onlineTable.courses[0].stdPriceHeading}
                            </CourseDescription>
                            <CostHeading tw="text-left md:px-24">
                              {faq.onlineTable.courses[0].stdPrice}
                              <PriceCourseDescription>
                              {faq.onlineTable.priceSuffix}
                              </PriceCourseDescription>
                            </CostHeading>
                          </CourseColumn>
                          <CourseColumn tw="md:w-1/2 border-t">
                            <CourseHeading tw="text-tbasMain-purple500">
                              {faq.onlineTable.courses[1].heading}
                            </CourseHeading>
                            <CourseDescription tw="md:px-24">
                              {faq.onlineTable.courses[1].stdPriceHeading}
                            </CourseDescription>
                            <CostHeading tw="text-left md:px-24">
                              {faq.onlineTable.courses[1].stdPrice}
                              <PriceCourseDescription>
                              {faq.onlineTable.priceSuffix}
                              </PriceCourseDescription>
                            </CostHeading>
                          </CourseColumn>
                        </CourseColumnContainer>
                      </PriceTable>
                    </>
                    }
                  </TextContainer>
                </QAContainer>
              </Answer>
            </FAQ>
          ))}
        </FAQSContainer>

        <SubHeading id="join">{currInfo.subHeaders[2]}</SubHeading>
        <FAQSContainer>
          {currInfo.join.map((faq, index) => (
            <FAQ
              key={index}
              onClick={() => {
                toggleJoinQuestion(index);
              }}
              className="group"
            >
              <Question>
                <QAContainer>
                  <LabelContainer>
                    <QLabel>Q</QLabel>
                  </LabelContainer>
                  <TextContainer>
                    <QuestionText>
                      {faq.question}
                    </QuestionText>
                  </TextContainer>
                </QAContainer>
                
                <QuestionToggleIcon
                  variants={{
                    collapsed: { rotate: 0 },
                    open: { rotate: -180 }
                  }}
                  initial="collapsed"
                  animate={joinIsOpen[index] ? "open" : "collapsed"}
                  transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <ChevronDownIcon />
                </QuestionToggleIcon>
              </Question>
              <Answer
                variants={{
                  open: { opacity: 1, height: "auto", marginTop: "16px" },
                  collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                }}
                initial="collapsed"
                animate={joinIsOpen[index] ? "open" : "collapsed"}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <QAContainer tw="py-6">
                  <LabelContainer>
                    <ALabel>A</ALabel>
                  </LabelContainer>
                  <TextContainer>
                    {faq.answer}
                  </TextContainer>
                </QAContainer>
              </Answer>
            </FAQ>
          ))}
        </FAQSContainer>
      </Container>
    </ContainerFormatted>
  );
};
