import styled from 'styled-components';
import { css } from 'styled-components';
export const Wrapper = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colors.secondaryBg};
    > h1 {
      width: 100%;
      border-bottom: 2px solid black;
      box-shadow: 1px;
    }
  `}
`;
