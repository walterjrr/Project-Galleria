/* eslint-disable react/no-unescaped-entities */
import P from 'prop-types';
import * as Styled from './style';

export const Painting = ({ Link, Alt }) => {
  return (
    <Styled.Container src={Link} alt={Alt}>
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80'
    </Styled.Container>
  );
};

Painting.propTypes = {
  Link: P.string,
  Alt: P.string,
};
