import styled from "styled-components";
import InputSearch from "../InputSearch/index.jsx";
const HeaderStyles = styled.header`
  padding: 60px 20px;
  display: flex;
  justify-content: space-between;
img{
    max-width: 210px;
}`;

const Header = () => {
  return (
    <HeaderStyles>
      <img src="/imagens/logo.png"></img>
      <InputSearch />
    </HeaderStyles>
  );
};
export default Header;
