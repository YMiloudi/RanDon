import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: white;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 768px){
        transition:0.8s all-ease;

    }
`;

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;

`;

export const NavLogo = styled(Link)`
    color: #67E8C4;
    cursor: pointer;
    justify-self: flex-start;
    font-size: 1rem;
    display: flex;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    align-items: center;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 1200px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform:translate(-100%, 70%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #67E8C4;
    }
 `;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right:-22px;

    @media screen and (max-width: 1200px){
        display: none;
}

 `;

export const NavItem = styled.li`
    height: 80px;   
`;

export const NavLinks = styled(Link)`
    color: #67E8C4;
    display: flex;
    justify-content:center;
    align-items: center; 
    padding: 0 2rem;
    text-decoration: none;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;

    }
`;
 