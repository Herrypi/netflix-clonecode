import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(13 36 63)

`;

export const HeaderBarUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;

export const HeaderBarItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const HeaderBarLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const LogoIcon = styled.img`
  width: 154px;
  height: 20px;
`;