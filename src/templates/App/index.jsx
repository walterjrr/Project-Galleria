/* eslint-disable react/no-unescaped-entities */
import * as styled from './styles';
import { Painting } from '../../Components';

function Home() {
  return (
    <div className="App">
      <styled.Wrapper background="blue">
        <h1>Galleria</h1>
        <Painting></Painting>
      </styled.Wrapper>
    </div>
  );
}

export default Home;
