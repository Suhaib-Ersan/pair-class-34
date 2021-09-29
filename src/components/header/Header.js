import React, { useContext } from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/loginContext";
import { When } from "react-if";

import "./header.scss";

export default function Header() {
    const loginContext = useContext(LoginContext);
    return (
        <>
            <When condition={loginContext.loggedIn}>
                <Navbar className="header">
                    <Navbar.Group className="headerLogoGroup" align={Alignment.LEFT}>
                        <Navbar.Heading className="title">
                            <h2 id="headerLogo">To-Do</h2>
                        </Navbar.Heading>
                        <Link to="/">
                            <Button className="bp3-minimal" icon="home" text="Home" />
                        </Link>
                    </Navbar.Group>
                    <Navbar.Group className="headerUserGroup" align={Alignment.RIGHT}>
                        <span>{loginContext.user.username}</span>
                        <Navbar.Divider />
                        <Button onClick={loginContext.logout} className="bp3-minimal" icon={loginContext.loggedIn ? "log-out" : "log-in"}>
                            {loginContext.loggedIn ? "Logout" : "Login"}
                        </Button>
                    </Navbar.Group>
                </Navbar>
            </When>
        </>
    );
}
