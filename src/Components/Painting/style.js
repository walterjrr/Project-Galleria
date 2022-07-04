import styled, { css } from 'styled-components';

export const Painting = styled.div`
  ${({ Width }) => css`
    width: 33%;
    margin: 15px;
    > img {
      border: 2px solid white;
      width: 100%;
      position: relative;
    }

    > img:hover {
      width: 600px;
      justify-content: center;
    }
    > p {
      width: 100%;
      position: relative;
      top: -25px;
      display: flex;
      justify-content: center;
      color: white;
    }
  `};
`;
