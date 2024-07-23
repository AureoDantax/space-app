import styled from "styled-components";
import Title from "./Title";

const BannerStyles = styled.figure`
  background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    width: 1156px;
    max-width: 100%;
    background-size: cover;
    background: linear-gradient(180deg, #121141 9%, rgba(0, 0, 0, 0) 100%),
    ${props => `url(${props.$backgroundImage})`};
  align-content: center;
  color: #d9d9d9;
`;

const Banner = ({title,backgroundImage}) => {
  return (
    <BannerStyles $backgroundImage={backgroundImage}>
      <Title>{title}</Title>
    </BannerStyles>
  );
};
export default Banner;
