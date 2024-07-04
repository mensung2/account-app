import React from "react";
import styled from "styled-components";

const Accounthalffirst = () => {
  return (
    <HalfMonthDiv>
      <button type="button">1월</button>
      <button type="button">2월</button>
      <button type="button">3월</button>
      <button type="button">4월</button>
      <button type="button">5월</button>
      <button type="button">6월</button>
    </HalfMonthDiv>
  );
};

const HalfMonthDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Accounthalffirst;
