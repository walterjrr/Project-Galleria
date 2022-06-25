import styled, { css } from 'styled-components';

export const Painting = styled.div`
  ${({ Width }) => css`
    width: 33%;
    border: 2px solid white;
    margin: 15px;
    > img {
      width: 100%;
    }
    > p {
      width: 100%;
    }
  `};
`;
