import styled, { css } from 'styled-components';
import { ColorMap, StageType } from './types';

const COLOR_MAP: ColorMap = {
  [StageType.Lead]: {
    normal: '#DABFFF',
    darker: '#46426D',
    light: '#E9D9FF',
    lighter: '#F7F1FF',
  },
  [StageType.RFPInProgress]: {
    normal: '#FFD6B3',
    darker: '#66421F',
    light: '#FFE4CC',
    lighter: '#FEF6EF',
  },
  [StageType.Submitted]: {
    normal: '#99D1FF',
    darker: '#003A66',
    light: '#BFE3FF',
    lighter: '#E6F4FF',
  },
  [StageType.Won]: {
    normal: '#81DDE5',
    darker: '#2A5154',
    light: '#AAECF2',
    lighter: '#DEF5F7',
  },
  [StageType.Lost]: {
    normal: '#FFBFD2',
    darker: '#773A47',
    light: '#FFD9E4',
    lighter: '#FFF2F6',
  },
  [StageType.Closed]: {
    normal: '#CBD5E0',
    darker: '#4A5568',
    light: '#E2E8F0',
    lighter: '#F2F7FA',
  },
}


export const StageHeader = styled.div`
  padding: 10px;
`;

export const StageTitle = styled.span`
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

export const StageBar = styled.div`
  width: 114px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 10.5px;
  margin-top: 14px;
`;

export const StageBarProgress = styled.div`
  width: 42px;
  height: 100%;
  flex-shrink: 0;
  border-radius: 10.5px;
`;

export const StageBody = styled.div`
  min-height: 175px;
  border-radius: 10.5px;
`;

export const StageContent = styled.div <{ type: StageType }> `
  width: 222px;
  height: 558px;
  flex-shrink: 0;
  padding: 5px;
  border-radius: 14px;

  ${({ type }: { type: StageType }) => {
    const hexColor = COLOR_MAP[type]?.lighter ?? 'var(--white)'
    return css`
      background-color: ${hexColor};
      background: linear-gradient(180deg, ${hexColor} 0%, ${hexColor} 75%, rgba(255,255,255,1) 100%);
    `
  }};

  ${StageTitle} {
    color: ${({ type }: { type: StageType }) => COLOR_MAP[type]?.darker ?? '#000'};
  }

  ${StageBar} {
    background-color: ${({ type }: { type: StageType }) => COLOR_MAP[type]?.light ?? '#f3f3f3'};
  }

  ${StageBarProgress} {
    background-color: ${({ type }: { type: StageType }) => COLOR_MAP[type]?.normal ?? '#f3f3f3'};
  }

  ${StageBody} {
    border: 1px solid ${({ type }: { type: StageType }) => COLOR_MAP[type]?.light ?? '#f3f3f3'};;
  }
`;
