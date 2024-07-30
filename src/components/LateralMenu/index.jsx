import styled from "styled-components";
import MenuItem from "./MenuItem";

const ListStyles = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
 
`;

const LateralMenu = () => {
  return (
    <aside>
      <nav>
        <ListStyles>
          <MenuItem
            IsActive={true}
            activeIcon="icones\home-ativo.png"
            inactiveIcon="icones\home-inativo.png"
          >
            Início
          </MenuItem>
          <MenuItem
            IsActive={false}
            activeIcon="icones\mais-vistas-ativo.png"
            inactiveIcon="icones\mais-vistas-inativo.png"
          >
            Mais Vistas
          </MenuItem>
          <MenuItem
            IsActive={false}
            activeIcon="icones\mais-curtidas-ativo.png"
            inactiveIcon="icones\mais-curtidas-inativo.png"
          >
            Mais Curtidas
          </MenuItem>
          <MenuItem
            IsActive={false}
            activeIcon="icones\novas-ativo.png"
            inactiveIcon="icones\novas-inativo.png"
          >
            Novas
          </MenuItem>
          <MenuItem
            IsActive={false}
            activeIcon="icones\surpreenda-me-ativo.png"
            inactiveIcon="icones\surpreenda-me-inativo.png"
          >
            Surpreenda-me
          </MenuItem>
        </ListStyles>
      </nav>
    </aside>
  );
};
export default LateralMenu;
