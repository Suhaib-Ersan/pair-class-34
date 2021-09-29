import React, { useContext } from "react";
import ToDo from "./components/todo/Todo";

import "bootstrap/dist/css/bootstrap.min.css";
import SettingsForm from "./context/settingForm";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/login";
import Auth from "./components/login/auth";
import LoginProvider from "./context/loginContext";
import SettingsContext from "./context/contex";

function App() {
    return (
        <>
            <SettingsContext>
                <LoginProvider>
                    <Login />
                    <Router>
                        <Header />
                        <Switch>
                            <Route exact path="/">
                                <Auth capability="read">
                                    <ToDo />
                                </Auth>
                            </Route>
                            {/* <Auth capability="read"> */}
                            {/* </Auth> */}
                        </Switch>
                        <Footer />
                    </Router>
                </LoginProvider>
            </SettingsContext>
        </>
    );
}

export default App;
