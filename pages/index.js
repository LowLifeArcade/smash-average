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
  height: 500px;
  width: 100%;
  background: plum;
`;

const Container = styled.div`
  width: 1000px;
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
        <Hero>Hero</Hero>
        <Container>stuffff</Container>
      </Main>

      <Footer></Footer>
    </div>
  );
}
