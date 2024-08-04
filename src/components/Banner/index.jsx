import styled from "styled-components";
import Title from "./Title";

const BannerStyles = styled.figure`
  background: linear-gradient(290deg, #121141 4%, rgba(0, 0, 0, 0.3) 20%),
  ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
   
    max-width: 100%;
    background-size: cover;
    
  align-content: center;
  color: #d9d9d9;
`;

// eslint-disable-next-line react/prop-types
const Banner = ({title,backgroundImage}) => {
  return (
    <BannerStyles $backgroundImage={backgroundImage}>
      <Title>{title}</Title>
    </BannerStyles>
  );
}; 
export default Banner;
