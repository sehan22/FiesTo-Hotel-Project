import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";

export class MainContent extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" Component={Home}></Route>
                </Routes>
            </div>
        );
    }
}