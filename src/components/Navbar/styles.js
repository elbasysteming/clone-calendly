import { FaBars } from "react-icons/fa";
import { NavLink as LinkRouter } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #ffffff;
    height: 50px;
    display: flex;
    font-size: 12px;
	align-items: center;
	justify-content: right;
    border-bottom: solid 1px #e6e9f0;
    padding: 0.2rem calc((100vw - 1400px) / 2);
    z-index: 12;
`;

export const Link = styled(LinkRouter)`
    color: #333333;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #000000;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    /* Third Nav */
    /* justify-content: flex-end;
width: 100vw; */
    @media screen and (min-width: 768px) {
        display: none;
    }
`;
