import Accounthalffirst from "./Accounthalffirst";
import Accounthalfsecond from "./Accounthalfsecond";
import styled from "styled-components";

const Accountcalender = () => {
  return (
    <MonthDiv>
      <div>
        <button> 상반기 </button>
        <button> 하반기 </button>
      </div>
      <Accounthalffirst />
      <Accounthalfsecond />
    </MonthDiv>
  );
};

const MonthDiv = styled.section`
  display: flex;
  flex-direction: column;
`;

export default Accountcalender;
