import Head from 'next/head';
import styled from 'styled-components';

const Nav = styled.nav`
  height: 50px;
  background: gray;
`;

const Footer = styled.footer`
  background: gray;
  height: 300px;
`;

const Main = styled.main`
  background: firebrick;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Hero = styled.div`
  height: 300px;
  width: 100%;
  background: plum;
  /* z-index: -1; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* position: absolute; */
`;

const TierListContainer = styled.div`
  /* position: absolute; */
`;

const TierList = styled.div`
  top: -100px;
  width: 1000px;
  /* position: relative; */
  background: beige;
  height: 1000px;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Smash Average Machine</title>
        <meta name="description" content="Smash Brothers tier list machine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav></Nav>

      <Main>
        <Container>
          <Hero>Hero</Hero>
          <TierListContainer>
            <TierList>List</TierList>
          </TierListContainer>
        </Container>
      </Main>

      <Footer></Footer>
    </div>
  );
}
