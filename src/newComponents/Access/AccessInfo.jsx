import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {
    MainHeading as MainHeadingTemplate,
    ContentFormatted as BaseContainer,
    MainParagraph2 as SectionDescriptionBase,
    ContentFormatted2, HiddenBr_BreakPoint3
  } from "assets/styles/TailwindComponents.jsx";

import { access } from "assets/tbas-data/TBas_Info.jsx";
import juku from "assets/tbas-images/logo/juku.jpeg";
import { ReactComponent as ArrowIcon } from "feather-icons/dist/icons/arrow-down.svg";

const Container = tw(BaseContainer)`lg:py-12`;

const Heading = tw(MainHeadingTemplate)`text-left text-tbasMain-purple900 tracking-widest font-black pl-4 md:pl-8 2xl:pl-0 pt-8 pb-6`;
const HorizontalLine = tw.div`text-main-black bg-main-black border h-[3px]`;
const SubHeading = tw(SectionDescriptionBase)`text-left pl-4 md:pl-8 2xl:pl-0 mt-4 text-main-black font-normal py-6`;


const Row = tw.div`flex flex-col md:flex-row 
max-w-screen-lg xl:max-w-screen-xl 
justify-between items-center mb-8 lg:mb-0 lg:my-12 mx-auto md:h-144 rounded-3xl space-x-4`;

const TextColumn = tw.div`
w-4/5 md:w-3/5 h-full flex flex-col justify-center items-center p-8 rounded-3xl`;
const TextContent = tw.div`w-full text-left`;
const TextColumnDescription = tw(SectionDescriptionBase)`text-left mt-4 text-main-black font-light`;

const ImageColumn = tw.div`w-4/5 md:w-2/5 h-full flex flex-col space-y-4`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center object-center m-auto 
  w-full h-80 md:h-full rounded-3xl`
]);

const MapContainer = tw.div`flex items-center justify-center h-112 sm:h-144 lg:h-192`

const GoogleMapEmbed = () => (
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.617410723872!2d139.4599744762136!3d35.5631499364508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f9c1eb0b46bf%3A0xf722f2915d392134!2zVC1CQVPnjonlt53lrablnJI!5e0!3m2!1sja!2sus!4v1730299210861!5m2!1sja!2sus"
    style={{ width: '100%', height: '100%', border: 0 }}
    allowFullScreen=""
    loading="lazy"
  />
);

var currInfo = access[0];
export default function TrialLesson(props) {
  if(props.language === "ENG"){
    currInfo = access[1];
  }

  return (
    <Container>
      <Heading>{currInfo.heading}</Heading>
      <HorizontalLine />
      <HiddenBr_BreakPoint3 />
      <ContentFormatted2>
        <SubHeading>{currInfo.subHeading}</SubHeading>
        <MapContainer>
          <GoogleMapEmbed />
        </MapContainer>
        <Row>
          <TextColumn>
            <TextContent>
              <TextColumnDescription tw="mb-6">
                {currInfo.instructions[0]}
              </TextColumnDescription>
            </TextContent>
            <ArrowIcon tw="w-8 h-8 md:mr-32" />
            <TextContent>
              <TextColumnDescription tw="my-8">
                {currInfo.instructions[1]}
              </TextColumnDescription>
            </TextContent>
            <ArrowIcon tw="w-8 h-8 md:mr-32" />
            <TextContent>
              <TextColumnDescription tw="mt-6">
                {currInfo.instructions[2]}
              </TextColumnDescription>
            </TextContent>
          </TextColumn>
          <ImageColumn>
            <Image imageSrc={juku}/>
          </ImageColumn>
        </Row>
      </ContentFormatted2>
    </Container>
  );
};
