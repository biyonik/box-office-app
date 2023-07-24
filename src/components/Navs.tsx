import { NavLink } from 'react-router-dom';
import AppTitle from './AppTitle';
import { ROUTES } from '../utils/routes';
import styled from 'styled-components';

export default function Navs() {
  const NavList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0 0 30px;
    padding: 0;

    li {
      margin: 0 10px;
    }
  `;

  const LinkStyled = styled(NavLink)`
    display: block;
    padding: 3px 15px;
    position: relative;
    text-decoration: none;
    color: ${({ theme }) => theme.mainColors.gray};
    &.active {
      color: ${({ theme }) => theme.mainColors.blue};
      &:after {
        content: '';
        position: absolute;
        display: block;
        height: 2px;
        left: 0%;
        bottom: 0;
        background-color: ${({ theme }) => theme.mainColors.blue};
        animation: slide-in 0.3s ease-in forwards;
        @keyframes slide-in {
          from {
            left: 50%;
            width: 0;
          }
          to {
            left: 0%;
            width: 100%;
          }
        }
      }
    }
  `;

  return (
    <nav>
      <AppTitle subtitle={'A simple PWA. Developed with React.'} />
      {ROUTES.length && (
        <NavList>
          {ROUTES.map(route => (
            <li key={route.to}>
              <LinkStyled to={route.to}>{route.text}</LinkStyled>
            </li>
          ))}
        </NavList>
      )}
    </nav>
  );
}
