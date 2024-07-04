import React from "react";
import styled from "styled-components";

const Accounthalfsecond = () => {
  return (
    <HalfMonthDiv>
      <button type="button">7월</button>
      <button type="button">8월</button>
      <button type="button">9월</button>
      <button type="button">10월</button>
      <button type="button">11월</button>
      <button type="button">12월</button>
    </HalfMonthDiv>
  );
};

const HalfMonthDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Accounthalfsecond;
