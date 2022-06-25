import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${(theme) => css`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100vh;
    padding: 15px;
  `};
`;
