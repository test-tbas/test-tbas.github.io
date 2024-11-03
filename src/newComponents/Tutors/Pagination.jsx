import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

const NavRow = tw.div`flex justify-center items-center mt-6 md:mt-0`;
const NavButton = tw.a`text-center cursor-pointer 
rounded-full text-sm md:text-base lg:text-lg 
bg-main-white text-tbasMain-purple700 border-solid border-2 border-tbasMain-purple700
hocus:bg-tbasMain-orange hocus:border-tbasMain-orange
py-4 px-6 mx-4`;
const CurrNavButton = tw(NavButton)`bg-tbasMain-purple700 text-main-white`

export default function Pagination({ tutorsPerPage, totalTutors, currentPage, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTutors / tutorsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <NavRow>
      {pageNumbers.map(number => (
        <>
          {number==currentPage
            ? <CurrNavButton onClick={() => paginate(number)}>
                {number}
            </CurrNavButton>
            : <NavButton onClick={() => paginate(number)}>
                {number}
            </NavButton>
          }
        </>
      ))}
    </NavRow>
  );
};