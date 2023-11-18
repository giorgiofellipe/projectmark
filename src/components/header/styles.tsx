import { styled } from "styled-components";
import { breakpoint } from "../../utils/breakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 20px;

  @media ${breakpoint.laptop} {
    padding-right: 30px;
    margin-bottom: 20px;
  }
`;

export const HeaderLeft = styled.div``;
export const HeaderCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeaderRight = styled.div``;
