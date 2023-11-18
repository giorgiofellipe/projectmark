import { css, styled } from "styled-components";


export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 17.5px;
  background: var(--white);
  border: 1px solid #BFCFE0;
  cursor: pointer;
`;

export const Title = styled.span`
  font-size: 17.5px;
  font-weight: 400;
`;

export const Label = styled.span`
  font-family: Archivo Narrow;
  font-size: 10.5px;
  font-style: normal;
  font-weight: 700;
  margin-top: 3px;
  cursor: pointer;
`;

export const Container = styled.a<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-right: 40px;

  ${TitleContainer} {
    ${({ selected }) => selected && css`
      background: var(--gray-800);
      color: var(--white);
    `};
  }
`;
