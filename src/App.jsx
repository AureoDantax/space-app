import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles/styles";
import Header from "./components/Header";
import LateralMenu from "./components/LateralMenu";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";

const GradientBackground = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const ContentGallery = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {
  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <LateralMenu />
          <ContentGallery>
            <Banner
              backgroundImage={"./src/assets/banner.png"}
              title="A galeria mais completa de fotos do espaço!"
            ></Banner>
            <Gallery />
          </ContentGallery>
        </MainContainer>
      </AppContainer>
    </GradientBackground>
  );
}


export default App;
