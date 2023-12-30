import React from 'react';
import './App.css';
import {Home} from "./view/pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import {Login} from "./view/pages/Login";

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
            </Routes>
        </BrowserRouter>
    );
}

export default App;
