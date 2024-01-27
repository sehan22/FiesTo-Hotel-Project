import React, {Component} from 'react';
import UserIcon from '../../../../images/Admin/MenuBar/usericon.png'
import BellIcon from '../../../../images/Admin/MenuBar/bell.png'
import SettingIcon from '../../../../images/Admin/MenuBar/settingicon.png'
import {Link} from "react-router-dom";

class AdminMenuBar extends Component {
    render() {
        return (
            <div className="flex justify-center items-center p-5 w-full font-poppins">
                <div className="flex justify-between items-center w-full bg-white px-5 py-2 shadow-sm rounded-3xl">
                    <h1 className="text-quinary text-loginpagetopic">Admin Dashboard</h1>

                    <div className="flex justify-center items-center gap-5">

                        <Link to="/admin/adminuser">
                            <div className="flex justify-center items-center gap-2">
                                <img className="w-10 h-10" src={UserIcon} alt=""/>
                                <h1 className="text-normal text-quinary">adminsehan</h1>
                            </div>
                        </Link>

                        <div className="flex justify-center items-center gap-2">

                            <Link to="/admin/adminnotification">
                                <img className="w-6 h-6 object-cover" src={BellIcon} alt=""/>
                            </Link>

                            <Link to="/admin/adminsetting">
                                <img
                                    className="w-6 h-6 object-cover hover:animate-spin transition-all opacity-70 hover:opacity-80"
                                    src={SettingIcon} alt=""/>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default AdminMenuBar;
