import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: safe center; /* known as not yet supported by safari */
  gap: 14px;
  max-width: 100%;
  overflow-x: auto;
`;
