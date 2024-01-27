import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import AdminDashboard from "../../../pages/Admin/AdminDashboard/AdminDashboard";
import AdminUserAccount from "../../../pages/Admin/AdminUserAccount/AdminUserAccount";
import AdminOrders from "../../../pages/Admin/Orders/AdminOrders";
import AdminUsers from "../../../pages/Admin/Users/AdminUsers";

class AdminMainContent extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" Component={AdminDashboard}></Route>
                    <Route path="/adminuser" Component={AdminUserAccount}></Route>
                    <Route path="/adminorders" Component={AdminOrders}></Route>
                    <Route path="/adminusers" Component={AdminUsers}></Route>
                </Routes>
            </div>
        );
    }
}

export default AdminMainContent;
