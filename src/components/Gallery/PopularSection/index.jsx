import styled from "styled-components";
import Title from "../../Title";

const PopularSectionStyles =styled.section`
img{

    margin: 18px;
}
`;

const PopularSection = () => {
  return (
    <>
    <PopularSectionStyles>
      <Title $textAlign="center">Populares</Title>
      <img src="https://via.placeholder.com/200" alt="Imagem de um gato" />
      <img src="https://via.placeholder.com/200" alt="Imagem de um gato" />
      <img src="https://via.placeholder.com/200" alt="Imagem de um gato" />
    </PopularSectionStyles>
     
    </>
  );
};
export default PopularSection;
