import React, {Component} from 'react';
import UserIcon from '../../../../images/Admin/MenuBar/usericon.png'
import BellIcon from '../../../../images/Admin/MenuBar/bell.png'
import SettingIcon from '../../../../images/Admin/MenuBar/settingicon.png'

class AdminMenuBar extends Component {
    render() {
        return (
            <div className="flex justify-center items-center p-5 w-full font-poppins">
                <div className="flex justify-between items-center w-full bg-white px-10 py-2 shadow-md rounded-3xl">
                    <h1 className="text-quinary text-loginpagetopic">Admin Dashboard</h1>

                    <div className="flex justify-center items-center gap-5">

                        <div className="flex justify-center items-center gap-2">
                            <img className="w-10 h-10" src={UserIcon} alt=""/>
                            <h1 className="text-normal">adminsehan</h1>
                        </div>

                        <div className="flex justify-center items-center gap-2">

                            <img className="w-6 h-6 object-cover" src={BellIcon} alt=""/>
                            <img className="w-6 h-6 object-cover" src={SettingIcon} alt=""/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default AdminMenuBar;
