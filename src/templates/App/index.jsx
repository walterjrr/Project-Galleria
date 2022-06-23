/* eslint-disable react/no-unescaped-entities */
import * as styled from './styles';
import { Painting } from '../../Components/Painting';
import { Container } from '../../Components/Container';

function Home() {
  return (
    <div className="App">
      <styled.Wrapper>
        <h1>Galleria</h1>
      </styled.Wrapper>
      <Container>
        <Painting
          Link="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
          Alt="Night Starr"
          Children="this is a night starry"
        />
      </Container>
    </div>
  );
}

export default Home;
