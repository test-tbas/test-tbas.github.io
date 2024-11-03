import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { useNavigate } from 'react-router-dom';

/* ========= importing assets ============ */
import {
    MainHeading as MainHeadingTemplate,
    MainHeading2 as MainHeading2Template,
    PrimaryButton as PrimaryButtonBase,
    SectionDescription as SectionDescriptionBase,
    ContentFormatted2
  } from "assets/styles/TailwindComponents.jsx";
import { courseInfo } from "assets/tbas-data/TBas_Info.jsx";

import { ReactComponent as CheckIcon } from "feather-icons/dist/icons/check.svg";
import { ReactComponent as ArrowIcon } from "feather-icons/dist/icons/arrow-right-circle.svg";

const Container = styled(ContentFormatted2)(({ isOnline }) => [
  tw`relative py-8 md:py-16`,
  isOnline && tw`md:w-1/2`
]);

const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const MainHeading = tw(MainHeadingTemplate)`w-full tracking-widest text-center text-tbasMain-purple900`;

const PlansContainer = tw.div`flex flex-col md:flex-row justify-center items-center md:items-stretch relative md:space-x-10`;

const Plan = styled.div(({ item }) => [
  tw`flex flex-col w-4/5 md:w-full h-auto mx-8 md:mx-0 px-8 pt-2 mt-16 
  text-center border-[5px] rounded-2xl shadow relative 
  text-main-black bg-white`,
  item === 0 && tw`border-tbasMain-orange`,
  item === 1 && tw`border-tbasMain-lightBlue`,
  item === 2 && tw`border-tbasMain-purple500`
]);
const PlanHeading = styled.div(({ item }) => [
  tw`absolute -top-4 inset-x-0 h-10 flex mx-16`,
  item === 0 && tw`bg-tbasMain-orange`,
  item === 1 && tw`bg-tbasMain-lightBlue`,
  item === 2 && tw`bg-tbasMain-purple500`
]);
const PlanHeaderContainer = tw.div`flex flex-col sm:flex-row justify-between items-center my-10`;
const PlanHeader = styled(MainHeading2Template)(({ item }) => [
  tw`font-bold tracking-widest w-full text-center`,
  item === 0 && tw`text-tbasMain-orange`,
  item === 1 && tw`text-tbasMain-lightBlue`,
  item === 2 && tw`text-tbasMain-purple500`
]);

const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 pb-12`}
`;
const FeatureTextContainer = tw.div`flex flex-row`
const FeatureText = tw(SectionDescriptionBase)`font-light text-main-black w-full text-left`

const PlanAction = tw.div`flex flex-row items-center justify-center pt-6 md:px-32`;
const ButtonContainer = tw.div`md:w-1/2 p-2 md:p-6`
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`bg-tbasMain-gray text-tbasMain-purple900 w-full rounded-lg text-left tracking-wider py-10 mr-8 md:mr-0  md:px-4 lg:px-12 relative 
  hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;

var currInfo = courseInfo[0];
var currNavPath = "/";
export default function CoursePlans (props){
  if(props.language === "ENG"){
    currInfo = courseInfo[1];
    currNavPath = "/eng/";
  }
  const navigate = useNavigate();

  return (
    <Container isOnline={props.isOnline}>
      <HeaderContainer>
        <MainHeading>{currInfo.Heading}</MainHeading>
      </HeaderContainer>
      <PlansContainer>
        {currInfo.Courses.map((plan, index) => (
          <>
            {plan.SubHeading === "Pre-MYP" && props.removeMYP
            ? <></>
            : 
            <Plan key={index} item={index}>
              <PlanHeading item={index}></PlanHeading>
              <PlanHeaderContainer>
                <PlanHeader item={index}>{plan.SubHeading}</PlanHeader>
              </PlanHeaderContainer>
              <PlanFeatures>
                {plan.Features.map((feature, index) => (
                  <FeatureTextContainer>
                    <CheckIcon tw="w-6 h-full inline mr-4 mt-4 sm:mt-2" />
                    <FeatureText key={index}>{feature}</FeatureText>
                  </FeatureTextContainer>
                ))}
              </PlanFeatures>
            </Plan>
            }
          </>
        ))}
      </PlansContainer>
      {!props.removeButton && 
        <PlanAction>
          <ButtonContainer>
            <BuyNowButton onClick={() => navigate(currNavPath + "inPerson")}>
              {currInfo.Button1}
              <ArrowIcon tw="absolute right-0 w-6 h-6 inline mr-4 sm:mr-8 lg:mr-12" />
            </BuyNowButton>
          </ButtonContainer>
          <ButtonContainer>
            <BuyNowButton onClick={() => navigate(currNavPath + "online")}>
              {currInfo.Button2}
              <ArrowIcon tw="absolute right-0 w-6 h-6 inline mr-4 sm:mr-8 lg:mr-12" />
            </BuyNowButton>
          </ButtonContainer>
        </PlanAction>
      }
    </Container>
  );
};
