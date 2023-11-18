import styled, { css } from 'styled-components';
import { breakpoint } from '../../utils/breakpoints';

export const CheckboxContent = styled.div<{ selected?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: auto;
  flex-shrink: 0;
  padding: 16px 14px;
  margin: 1px;
  border-radius: 10.5px;
  border: 1px solid var(--gray-300);
  cursor: pointer;

  @media ${breakpoint.laptopL} {
    width: 210px;
  }

  ${({ selected }) => selected && css`
    margin: 0px;
    border: 2px solid var(--blue-500);

    &:after {
      position: absolute;
      content: "";
      width: 10px;
      height: 10px;
      border-top: 2px solid var(--white);
      border-right: 2px solid var(--blue-500);
      border-left: 2px solid var(--white);
      border-bottom: 2px solid var(--blue-500);
      border-radius: 2px;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      margin-top: -5px;
      transform: rotate(45deg);
      background: #fff;
    }
  `}

  label {
    font-family: Archivo;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 14px;
  }

  input[type="checkbox"]:checked {
    accent-color: var(--blue-500);
  }
`;
