import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {Room} from "../../pages/Room/Room";
import {Restaurant} from "../../pages/Restaurant/Restaurant";
import {About} from "../../pages/About/About";
import {Contact} from "../../pages/Contact/Contact";
import MyAccount from "../../pages/UserAccount/MyAccount";
import AddToCart from "../../pages/AddToCart/AddToCart";
import ModifyCart from "../ModifyCart/ModifyCart";
import YourOrders from "../../pages/YourOrders/YourOrders";

export class MainContent extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/room" Component={Room}></Route>
                    <Route path="/restaurant" Component={Restaurant}></Route>
                    <Route path="/myorders" Component={YourOrders}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                    <Route path="/myAccount" Component={MyAccount}></Route>
                    <Route path="/addToCart" element={<AddToCart itemsList={ModifyCart.itemsList} />} />
                </Routes>
            </div>
        );
    }
}
