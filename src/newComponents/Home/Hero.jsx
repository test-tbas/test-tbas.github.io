import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {MainHeading as HeadingTitleTemplate, 
  SubMainHeading2 as Heading2Template,
  ContentFormatted as BaseContainer,
  Container as ContainerTemplate
} from "assets/styles/TailwindComponents.jsx";

/* ======== importing some data for text =========== */
import { home_hero } from "assets/tbas-data/TBas_Info.jsx";

import background from "assets/tbas-images/background/homepage-pencil.png";

const Container = styled(ContainerTemplate)(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`px-8 bg-no-repeat bg-cover bg-center content-center w-full h-auto h-160 lg:h-144 xl:h-144`
]);

const HeroContainer = tw(BaseContainer)`z-20 relative py-6 lg:py-0 px-2 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`py-8 flex flex-1 flex-col justify-center items-center`;

const Heading = styled(HeadingTitleTemplate)`
  ${tw`text-left text-main-white tracking-widest leading-snug w-full`}
  span {
    ${tw`inline-block mt-2`}
  }
`;
const Paragraph = tw(Heading2Template)`text-main-white w-full my-8 leading-loose`;

var currInfo = home_hero[0];
export default function Home_Hero(props) {
  if(props.language === "ENG"){
    currInfo = home_hero[1];
  }

  return (
    <Container imageSrc={background} >
      <HeroContainer>
        <Content>
          <Heading>
            {currInfo.Heading}
          </Heading>
          <Paragraph>
            {currInfo.Paragraph}
          </Paragraph>
        </Content>
      </HeroContainer>
    </Container>
  );
};
