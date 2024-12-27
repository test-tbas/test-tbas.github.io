import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {
    MainHeading as MainHeadingTemplate,
    SubMainHeading as SubMainHeadingTemplate,
    SubMainHeading3 as SubMainHeading3Template,
    ContentFormatted as BaseContainer,
    MainParagraph4 as MainParagraph4Template,
    ContentFormatted2
  } from "assets/styles/TailwindComponents.jsx";

import { aboutUs } from "assets/tbas-data/TBas_Info.jsx";
import walk from "assets/tbas-images/tutors/walk.jpeg";
import svgDotPattern from "assets/tbas-images/background/dotBackground.svg";

const Container = tw(BaseContainer)`lg:py-12`;

const Heading = tw(MainHeadingTemplate)`text-left text-tbasMain-purple900 tracking-widest font-black pl-4 md:pl-8 2xl:pl-0`;
const SubHeading = tw(SubMainHeadingTemplate)`inline-block text-left lg:tracking-[3.6px] ml-2 text-main-black font-normal`;

const Row = tw.div`flex flex-row justify-between items-center my-12 lg:my-20 mx-auto h-96 md:h-144 sm:space-x-4`;

const TextColumn = tw.div`w-1/2 2xl:w-1/4 h-full flex flex-col justify-center sm:px-4 lg:px-6 2xl:px-8`;

const TextContent = tw.div`mx-6 2xl:mx-0 relative text-left bg-tbasMain-purple400 p-10`;
const TextContentHeading = tw(SubMainHeading3Template)`text-left text-tbasMain-purple700 font-medium my-4 tracking-widest`
const TextContentDescription = tw(MainParagraph4Template)`text-left text-main-black font-light`;
const ClosingRemark = tw(TextContentDescription)`text-right`

const ImageColumn = tw.div`w-1/2 2xl:w-3/4 h-full pr-4 lg:pr-6 2xl:pr-8`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center sm:bg-center object-center m-auto 
  w-full h-full rounded-lg`
]);

const OffsetSvg = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`absolute inset-0 bg-cover bg-center m-auto w-14/16 h-14/16 left-0 -translate-x-[7rem] translate-y-20 -z-10`
]);

const HorizontalLine = tw.div`text-main-black bg-main-black border h-[3px]`;

var currInfo = aboutUs[0];
export default function AboutUsComponent(props) {
  if(props.language === "ENG"){
    currInfo = aboutUs[1];
  }

  return (
    <Container>
      <Heading tw="pt-8 pb-6">
        {currInfo.heading}
      </Heading>
      <HorizontalLine />
      <ContentFormatted2 tw="mb-12">
        <Row>
          <TextColumn tw="space-y-2">
            <Heading>
              {currInfo.subHeading[0]}<SubHeading>{currInfo.subHeading[1]}</SubHeading>
            </Heading>
            <Heading>
              {currInfo.subHeading[2]}<SubHeading>{currInfo.subHeading[3]}</SubHeading>
            </Heading>
            <Heading>
              {currInfo.subHeading[4]}<SubHeading>{currInfo.subHeading[5]}</SubHeading>
            </Heading>
            <Heading>
              {currInfo.subHeading[6]}<SubHeading>{currInfo.subHeading[7]}</SubHeading>
            </Heading>
          </TextColumn>
          <ImageColumn>
            <Image imageSrc={walk}/>
          </ImageColumn>
        </Row>
        <TextContent>
          <TextContentHeading>{currInfo.textHeading}</TextContentHeading>
          <TextContentDescription tw="py-6">
            {currInfo.textDescription}
          </TextContentDescription>
          <ClosingRemark>
            {currInfo.textClosingQuote}
          </ClosingRemark>
          <OffsetSvg imageSrc={svgDotPattern} />
        </TextContent>
      </ContentFormatted2>
    </Container>
  );
};
