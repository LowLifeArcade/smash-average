import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';

const Nav = styled.nav`
  height: 50px;
  background: #000b;
  border-bottom: solid 3px black;
`;

const Footer = styled.footer`
  background: gray;
  height: 300px;
`;

const Main = styled.main`
  /* background: firebrick; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Hero = styled.div`
  height: 100px;
  width: 100%;

  /* z-index: -1; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
  /* position: absolute; */
`;

const TierListContainer = styled.div`
  /* position: absolute; */
  z-index: 1;
  padding-bottom: 100px;
`;

const TierList = styled.div`
  top: -100px;
  width: 100vw;
  max-width: 1000px;
  /* position: relative; */
  background: #edece3;
  height: 1000px;
  border: solid 4px brown;
  box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.2);
  @media (max-width: 780px) {
    margin: 0;
    border: none;
  }
`;

const TierSection = styled.section`
  background: #eae7e7;
  min-height: 300px;
  margin: 2rem 5rem;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
  border: solid 3px #97948e;
  @media (max-width: 780px) {
    margin: 0;
    border: none;
  }
`;

const TierListBanner = styled.div`
  position: relative;
  @media (max-width: 780px) {
    display: none;
  }
`;

const BannerTextContainer = styled.div`
  /* position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

const BannerText = styled.p`
  position: absolute;
  font-size: 4rem;
  color: white;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 780px) {
    display: none;
  }
`;
const SubText = styled.p`
  position: absolute;
  font-size: 2rem;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 780px) {
    display: none;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  margin-top: 1rem;
`;

const CharacterCard = styled.div`
  /* margin: 0.5rem; */
  display: flex;
  padding-top: 5px;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  height: 122px;
  width: 92px;
  background: white;
  border-radius: 10px;
  border: solid 2px gray;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const CharacterRankContainer = styled.div``;

const CharacterRank = styled.div`
  color: white;
  font-size: 15pt;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #9ad2ea;
  border-radius: 5px 0px 0px 5px;
  width: 20px;
  height: 40px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const RankSpacer = styled.div`
  height: 30px;
`;

const CharacterAvatar = styled.div`
  height: 75px;
  width: 75px;
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 3px gray;
`;

const CharacterName = styled.div`
  color: #e4dfb9;
  font-weight: 700;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: grid;
  place-items: center;
  padding-top: 5px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
`;

const TierTitle = styled.div`
  display: flex;
  height: 40px;
  background: black;
`;

const TierBar = styled.div`
  & {
    background: red;
    width: 150px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    margin-bottom: 5px;
    margin-right: 5px; 
  }
  &:after {
    border-right: solid 20px transparent;
    border-left: solid 20px transparent;
    border-top: solid 20px blue;
    transform: translateX(80%);
    /* position: absolute; */
    z-index: 1;
    content: '';
    /* top: 70%;
    left: 30%;
    height: 0;
    width: 0; */
  }
`;
const TierBarOverlay = styled.div`
  background: beige;
  width: 100%;
  margin-bottom: 5px;
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
          <Hero>
            <Image
              layout="responsive"
              width="5"
              height="1"
              src={'/bg/banner.webp'}
            />
          </Hero>

          <TierListContainer>
            <TierList>
              <TierListBanner>
                <Image
                  src={'/bg/banner2.png'}
                  height="1"
                  width="5"
                  layout="responsive"
                />
                <BannerTextContainer>
                  <BannerText>Smash Ultimate</BannerText>
                  <SubText>Tier List Machine</SubText>
                </BannerTextContainer>
              </TierListBanner>

              <TierSection>
                <TierTitle>
                  <TierBar>S Tier</TierBar>
                  <TierBarOverlay></TierBarOverlay>
                </TierTitle>

                <CardContainer>
                  <CharacterRankContainer>
                    <CharacterRank>1</CharacterRank>
                    <RankSpacer />
                  </CharacterRankContainer>

                  <CharacterCard>
                    <CharacterAvatar>
                      <Image
                        src="/characters/Byleth.png"
                        layout="fixed"
                        height={75}
                        width={75}
                      />
                    </CharacterAvatar>
                    <CharacterName>Byleth</CharacterName>
                  </CharacterCard>
                </CardContainer>
              </TierSection>
            </TierList>
          </TierListContainer>
        </Container>
      </Main>

      <Footer></Footer>
    </div>
  );
}
