/* eslint-disable react/prop-types */
import styled from "styled-components";

const ItemStyles = styled.li`
  line-height: 29px;
  font-size: 24px;
  color: ${props => (props.$IsActive ? "#7B78E5" : "#D9D9D9")};
  font-family:${props => (props.$IsActive ? "GandhiSansBold" : "GandhiSansRegular")};
  margin-bottom: 30px;
  cursor: pointer;
  align-items: center;
  display: flex;
  gap: 22px;
  a {
    text-decoration: none;
  }
`;
const MenuItem = ({
  children,
  activeIcon,
  inactiveIcon,
  IsActive = false,
}) => {
  return (
    <ItemStyles $IsActive={IsActive}>
      <img src={IsActive ? activeIcon : inactiveIcon} alt="" />
      {children}
    </ItemStyles>
  );
};
export default MenuItem;
