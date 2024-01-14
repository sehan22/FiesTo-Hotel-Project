import React, {Component} from 'react';
import bannerBackgroundImg from "../../../images/MyAccount/bgImg.jpg";
import ProfileImg from "../../../images/MyAccount/ProfileImg.png";

class MyAccount extends Component {
    render() {
        return (
            <>
                {/*Banner*/}
                <div
                    className="flex flex-col items-start justify-center lmd:items-center lmd:justify-center w-full h-screen md:max-h-[500px] md:rounded-b-3xl bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bannerBackgroundImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        objectFit: 'scale-down'
                    }}>
                    <h1 className="font-Milonga text-topic md:text-bannertopic text-white p-2">My Account</h1>
                    <div className="flex flex-col lmd:items-center lmd:justify-center gap-2 p-2 ">
                        <div className="h-0.5 opacity-50 bg-septenary w-44"></div>
                        <h6 className="font-poppins text-normal text-nonary">Your Account Details</h6>
                    </div>
                </div>


                {/*First Div*/}
                <div className="flex justify-center items-center mx-auto p-2">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-5 2xl:p-10 bg-white shadow-lg mb-[60px] md:mb-[120px] mt-[60px] md:mt-[120px] rounded-xl">

                        {/*first grid item*/}
                        <div className="flex justify-center items-center bg-white rounded-xl p-2">

                            <form className="flex flex-col justify-center items-center gap-5 w-full">

                                <div className="flex flex-col lg:flex-row lg:gap-3 justify-center items-center">
                                    <div className="w-40 h-40 rounded-full my-5 bg-nonary"
                                         style={{
                                             backgroundImage: `url(${ProfileImg})`,
                                             backgroundSize: 'cover',
                                             backgroundPosition: 'center',
                                             objectFit: 'scale-down'
                                         }}>
                                    </div>

                                    <div className="flex flex-col text-center lg:text-start">
                                        <h1 className="text-loginpagetopic font-bold text-quinary">Sehan Ranaweera</h1>
                                        <h6 className="text-smaller text-senary">Your Account Details</h6>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="text"
                                        placeholder="Full Name"
                                    />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="text"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="text"
                                        placeholder="Address"
                                    />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="text"
                                        placeholder="Contact"
                                    />
                                </div>

                                <div className="flex gap-2 w-full">
                                    <button
                                        className="bg-nonary transition-all text-smaller font-bold tracking-wider text-quinary hover:bg-gray-400 duration-300 hover:text-white py-3 px-4 w-full rounded">
                                        Logout
                                    </button>

                                    <button
                                        className="bg-secondary transition-all text-smaller font-bold tracking-wider text-white hover:bg-teal-600 py-3 px-4 w-full rounded">
                                        Update Profile
                                    </button>
                                </div>
                            </form>

                        </div>

                        {/*second grid item*/}
                        <div
                            className="flex flex-col justify-center items-center bg-white rounded-xl gap-10 p-2">

                            <form className="flex flex-col justify-center items-center sm:border-2 sm:p-5 sm:border-nonary rounded-xl bg-white gap-5 w-full">

                                <div className="flex justify-start w-full text-loginpagetopic">
                                    <h1 className="text-start font-bold text-quinary">Update Account Password</h1>
                                </div>

                                <div className="w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="text"
                                        placeholder="Current Password"
                                    />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="text"
                                        placeholder="New Password"
                                    />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="text"
                                        placeholder="Re-Enter New Password"
                                    />
                                </div>

                                <div className="flex gap-2 w-full">
                                    <button
                                        className="bg-[#365EC7] transition-all text-smaller font-bold tracking-wider text-white hover:bg-[#2D56BF] py-3 px-4 w-full rounded">
                                        Update Profile
                                    </button>
                                </div>
                            </form>

                            <div className="flex flex-col justify-center items-center sm:border-2 sm:p-5 sm:border-nonary rounded-xl bg-white gap-5">

                                <div className="flex flex-col justify-center text-loginpagetopic">
                                    <h1 className="text-start font-bold text-quinary">Delete Your Account</h1>
                                    <p className="text-smaller">
                                        Once you delete your account, there is no going back. Please be certain.
                                    </p>
                                </div>

                                <div className="flex gap-2 w-full">
                                    <button
                                        className="bg-[#D82424] transition-all text-smaller font-bold tracking-wider text-white hover:bg-[#CE1919] py-3 px-4 w-full rounded">
                                        Delete Your Account
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </>
        );
    }
}

export default MyAccount;
