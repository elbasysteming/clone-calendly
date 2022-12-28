import React from "react";
import { Nav, Link, Bars, NavMenu, NavBtn } from "./styles.js";
import { itemNavbar } from "./itemNavbar.js";

export const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    {itemNavbar.map(element => {
                        return (
                            <Link key={element.id} to={`${element.path}`}>
                                {" "}
                                {element.title}{" "}
                            </Link>
                        );
                    })}
                </NavMenu>
                <NavBtn>
                    {itemNavbar.map(element => {
                        return (
                            <Link key={element.id} to={`${element.path}`}>
                                {" "}
                                {element.title}{" "}
                            </Link>
                        );
                    })}
                </NavBtn>
            </Nav>
        </>
    );
};
