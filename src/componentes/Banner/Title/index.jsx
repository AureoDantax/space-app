import styled from "styled-components";

const TitleStyle = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  max-width: 300px;
  padding: 0 64px;
`;
const Title = ({children}) => {
  return <TitleStyle>{children}</TitleStyle>;
};
export default Title;
