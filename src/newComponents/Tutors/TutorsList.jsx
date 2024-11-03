import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {
  MainHeading as MainHeadingTemplate,
  SubMainHeading as SubMainHeadingTemplate,
  MainParagraph as MainParagraphTemplate,
  SectionDescription as SectionDescriptionBase,
  ContentFormatted as BaseContainer,
  HiddenBr_BreakPoint3
} from "assets/styles/TailwindComponents.jsx";

import Pagination from "./Pagination.jsx";

import { tutors_list } from "assets/tbas-data/TBas_Info.jsx";
import female from "assets/tbas-images/tutors/female.svg";
import male from "assets/tbas-images/tutors/male.svg";

const Container = tw(BaseContainer)`lg:py-12`;

const Heading = tw(MainHeadingTemplate)`text-left text-tbasMain-purple900 tracking-widest font-black pl-4 md:pl-8 2xl:pl-0 pt-8 pb-6`;
const HorizontalLine = tw.div`text-main-black bg-main-black border h-[3px]`;

const Row = tw.div`flex flex-col md:flex-row justify-between items-center lg:my-12 mx-auto shadow-lg rounded-3xl bg-tbasMain-purple400`;

const ImageColumn = tw.div`mt-8 md:mt-0 md:w-1/5 flex flex-col items-center justify-center`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center rounded-full object-center m-auto w-48 h-48 border-0`
]);
const ImageHeading = tw(SubMainHeadingTemplate)`pt-6 text-center text-main-black`;

const TextColumn = tw.div`w-4/5 h-full flex flex-col py-8 md:py-16 md:pr-8 rounded-l-3xl`;

const TextColumnRow = tw.div`flex flex-col bg-main-white mb-4 px-6 py-8 rounded-xl `

const TextColumnHeading = tw(MainParagraphTemplate)`w-full text-left text-main-black font-extrabold tracking-widest`;
const TextColumnDescription = tw(SectionDescriptionBase)`mt-4 text-main-black font-light max-w-full`;

const BulletList = tw.ul`mt-4 ml-12 list-disc`;
const BulletItem = tw.li`text-sm md:text-base lg:text-lg xl:text-xl font-light leading-relaxed text-main-black`;

const TagContainer = tw.div`flex flex-row flex-wrap mt-2 py-2`;
const PurpleLabel = tw.span`inline-block bg-tbasMain-purple500 font-light text-sm md:text-base lg:text-lg xl:text-xl px-6 ml-4 mb-4 md:mb-0 rounded-sm`;

var currInfo = tutors_list[0];
export default function TutorList(props) {
  if(props.language === "ENG"){
    currInfo = tutors_list[1];
  }
  
  const [currentPage, setCurrentPage] = useState(1);
  const tutorsPerPage = 8;

  // Calculate the index of the last tutor on the current page
  const lastTutorIndex = currentPage * tutorsPerPage;
  // Calculate the index of the first tutor on the current page
  const firstTutorIndex = lastTutorIndex - tutorsPerPage;
  // Get the current tutors
  const currentTutors = currInfo.tutors.slice(firstTutorIndex, lastTutorIndex);

  // Change page function
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: for smooth scrolling
    });
  };

  return (
    <Container>
      <Heading>{currInfo.heading}</Heading>
      <HorizontalLine />
      <HiddenBr_BreakPoint3 />
      {currentTutors.map((tutor, index) => (
        <Row key={index}>
          <ImageColumn>
            {tutor.gender === "Female"
              ? <Image imageSrc={female} />
              : <Image imageSrc={male} />
            }
            <ImageHeading>{tutor.name}</ImageHeading>
          </ImageColumn>
          <TextColumn>
            <TextColumnRow>
              <TextColumnHeading>{currInfo.eduHeading}</TextColumnHeading>
              <BulletList>
                {tutor.education.map((program, programIndex) => (
                  <BulletItem key={programIndex}>
                    {program}
                  </BulletItem>
                ))}
              </BulletList>
            </TextColumnRow>
            <TextColumnRow>
              <TextColumnHeading>{currInfo.subHeading}</TextColumnHeading>
              <TagContainer>
                {tutor.subjects.map((subject, subjectIndex) => (
                  <PurpleLabel key={subjectIndex}>
                    {subject}
                  </PurpleLabel>
                ))}
              </TagContainer>
            </TextColumnRow>
            <TextColumnRow>
              <TextColumnHeading>{currInfo.comHeading}</TextColumnHeading>
              <TextColumnDescription>{tutor.comment}</TextColumnDescription>
            </TextColumnRow>
          </TextColumn>
        </Row>
      ))}
      {/* Pagination */}
      <Pagination
        tutorsPerPage={tutorsPerPage}
        totalTutors={currInfo.tutors.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </Container>
  );
};
