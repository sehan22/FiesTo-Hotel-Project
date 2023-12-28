import React from 'react';
import './App.css';
import {Home} from "./view/pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*"
                       Component={DefaultLayout}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
