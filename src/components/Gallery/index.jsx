import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import PopularSection from "./PopularSection";
const GalleryContainer = styled.div`
  display: flex;
`;

const ContentSection = styled.section`
  flex-grow: 1;
    img{

      margin: 10px;
    }

`;

const Gallery = () => {
  return (
    <>
      <Tags />
      <GalleryContainer>
        <ContentSection>
          <Title>Navegue pela galeria</Title>
          <img src="https://via.placeholder.com/200" alt="Imagem de um gato" />
          <img src="https://via.placeholder.com/200" alt="Imagem de um gato" />
          <img src="https://via.placeholder.com/200" alt="Imagem de um gato" />
        </ContentSection>
        <PopularSection />
      </GalleryContainer>
    </>
  );
};
export default Gallery;
