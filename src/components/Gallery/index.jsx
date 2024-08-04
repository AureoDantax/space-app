import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import PopularSection from "./PopularSection";
const GalleryContainer = styled.div`
  display: flex;
`;

const ContentSection = styled.section`
  flex-grow: 1;
`;

const Gallery = () => {
  return (
    <>
      <Tags />
      <GalleryContainer>
        <ContentSection>  
          <Title>Navegue pela galeria</Title>
        </ContentSection>
        <PopularSection />
      </GalleryContainer>
    </>
  );
};
export default Gallery;
