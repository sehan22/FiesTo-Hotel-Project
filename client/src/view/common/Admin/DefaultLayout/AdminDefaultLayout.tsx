import React, {Component} from 'react';
import AdminNavBar from "../NavBar/AdminNavBar";
import AdminMainContent from "../MainContent/AdminMainContent";

class AdminDefaultLayout extends Component {
    render() {
        return (
            <div>
                <AdminNavBar/>
                <AdminMainContent/>
            </div>
        );
    }
}

export default AdminDefaultLayout;
