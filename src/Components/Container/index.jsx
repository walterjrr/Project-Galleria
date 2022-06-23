/* eslint-disable react/no-unescaped-entities */
import P from 'prop-types';
import * as Styled from './style';

export const Container = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

Container.propTypes = {
  children: P.node.isRequired,
};
