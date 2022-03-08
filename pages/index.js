import Head from 'next/head';
import styled from 'styled-components';

const Nav = styled.nav`
  height: 50px;
  background: gray;
`;

const Footer = styled.footer`
  background: gray;
`;

const Main = styled.main`
  background: firebrick;
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

      <Main>test</Main>

      <Footer>Smash Footer</Footer>
    </div>
  );
}
