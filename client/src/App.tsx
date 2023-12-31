import React from 'react';
import './App.css';
import {Home} from "./view/pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import {Login} from "./view/pages/Login/Login";
import {SignUp} from "./view/pages/SignUp/SignUp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*"
                       Component={DefaultLayout}>
                </Route>

                <Route path="/login"
                        Component={Login}>
                </Route>

                <Route path="/signup"
                        Component={SignUp}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
