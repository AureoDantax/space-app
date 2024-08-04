import styled from "styled-components";

const Title = styled.h2`
  font-size: 32px;
  line-height: 38px;
  color: #7b78e5;
  text-align: ${(props) => (props.$textAlign ? props.$textAlign : "left")};
`;

export default Title;
