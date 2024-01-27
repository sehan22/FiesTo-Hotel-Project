import React, {Component} from 'react';
import AdminNavBar from "../AdminNavBar/AdminNavBar";
import AdminMainContent from "../AdminMainContent/AdminMainContent";
import AdminMenuBar from "../AdminMenuBar/AdminMenuBar";

class AdminDefaultLayout extends Component {
    render() {
        return (
            <div className="ps-[116px]">
                <AdminNavBar/>
                <AdminMenuBar/>
                <AdminMainContent/>
            </div>
        );
    }
}

export default AdminDefaultLayout;
