import React, {Component} from 'react';
import bannerBackgroundImg from "../../../images/MyAccount/bgImg.jpg";
import ProfileImg from "../../../images/MyAccount/ProfileImg.png";

class MyAccount extends Component {
    render() {
        return (
            <>
                {/*Banner*/}
                <div
                    className="hidden flex flex-col items-start justify-center lmd:items-center lmd:justify-center w-full h-screen md:max-h-[500px] md:rounded-b-3xl bg-cover bg-center"
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
                <div className="flex justify-center items-center mx-auto">

                    <div className="grid grid-cols-1 gap-2 p-5 bg-white shadow-sm rounded-xl">

                        <div className="flex justify-center items-center">
                            {/*Contact Form*/}
                            <form className="flex flex-col justify-center items-center gap-5">

                                <div className="flex flex-col justify-center items-center">
                                    <div className="w-40 h-40 rounded-full my-5 bg-nonary"
                                         style={{
                                             backgroundImage: `url(${ProfileImg})`,
                                             backgroundSize: 'cover',
                                             backgroundPosition: 'center',
                                             objectFit: 'scale-down'
                                         }}
                                    ></div>

                                    <div className="flex flex-col text-center">
                                        <h1 className="text-loginpagetopic font-bold text-quinary">Sehan Ranaweera</h1>
                                        <h6 className="text-smaller text-senary">Your Account Details</h6>
                                    </div>
                                </div>

                                <div className="">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="text"
                                        placeholder="Full Name"
                                    />
                                </div>

                                <div className="">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="text"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="text"
                                        placeholder="Address"
                                    />
                                </div>

                                <div className="">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="text"
                                        placeholder="Contact"
                                    />
                                </div>

                                <div className="flex w-full">
                                    <button
                                        className="bg-secondary transition-all text-smaller font-bold tracking-wider text-white hover:bg-teal-600 py-3 px-4 w-full rounded">
                                        Update Profile
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>


            </>
        );
    }
}

export default MyAccount;
