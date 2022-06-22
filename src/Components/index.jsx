/* eslint-disable react/no-unescaped-entities */
import P from 'prop-types';
import * as Styled from './style';

export const Painting = ({ Link, Alt }) => {
  return <Styled.Container src={Link} alt={Alt} />;
};

Painting.propTypes = {
  Link: P.string,
  Alt: P.string,
};
