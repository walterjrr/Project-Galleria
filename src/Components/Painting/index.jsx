/* eslint-disable react/no-unescaped-entities */
import P from 'prop-types';
import * as Styled from './style';

export const Painting = ({ Link, Alt, Children }) => {
  return (
    <Styled.Painting>
      <img src={Link} alt={Alt}></img>
      <p>{Children}</p>
    </Styled.Painting>
  );
};

Painting.propTypes = {
  Link: P.string.isRequired,
  Alt: P.string,
  Children: P.string.isRequired,
  Width: P.string,
};
