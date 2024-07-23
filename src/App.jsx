import styled from "styled-components";
import GlobalStyles from "./componentes/GlobalStyles/styles";
import Header from "./componentes/Header";
import LateralMenu from "./componentes/LateralMenu";
import Banner from "./componentes/Banner";
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
function App() {
  return (
    <GradientBackground>
      <GlobalStyles />
      <Header />
      <LateralMenu />
      <Banner backgroundImage={"./src/assets/banner.png"}
      title="A galeria mais completa de fotos do espaço!"></Banner>
    </GradientBackground>
  );
}
export default App;
