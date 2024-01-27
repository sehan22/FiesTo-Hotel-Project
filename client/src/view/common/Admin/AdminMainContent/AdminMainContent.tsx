import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import AdminDashboard from "../../../pages/Admin/AdminDashboard/AdminDashboard";
import AdminUserAccount from "../../../pages/Admin/AdminUserAccount/AdminUserAccount";
import AdminRestaurant from "../../../pages/Admin/AdminRestaurant/AdminRestaurant";
import AdminUsers from "../../../pages/Admin/AdminUsers/AdminUsers";
import AdminSetting from "../../../pages/Admin/AdminSetting/AdminSetting";
import AdminOrders from "../../../pages/Admin/AdminOrders/AdminOrders";
import AdminPayment from "../../../pages/Admin/AdminPayment/AdminPayment";
import AdminChart from "../../../pages/Admin/AdminChart/AdminChart";
import AdminNotification from "../../../pages/Admin/AdminNotification/AdminNotification";

class AdminMainContent extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" Component={AdminDashboard}></Route>
                    <Route path="/adminuser" Component={AdminUserAccount}></Route>
                    <Route path="/adminnotification" Component={AdminNotification}></Route>
                    <Route path="/adminsetting" Component={AdminSetting}></Route>
                    <Route path="/adminusers" Component={AdminUsers}></Route>
                    <Route path="/adminrestaurant" Component={AdminRestaurant}></Route>
                    <Route path="/adminOrders" Component={AdminOrders}></Route>
                    <Route path="/adminpayment" Component={AdminPayment}></Route>
                    <Route path="/adminchart" Component={AdminChart}></Route>
                </Routes>
            </div>
        );
    }
}

export default AdminMainContent;
