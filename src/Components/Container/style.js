import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${(theme) => css`
    max-width: 1200px;
    margin: 0 auto;
    padding: 100px;
  `};
`;
