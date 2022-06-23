import styled, { css } from 'styled-components';

export const Painting = styled.div`
  ${() => css`
    > img {
      width: 150px;
      height: 150px;
      border: 2px solid white;
    }
  `};
`;
