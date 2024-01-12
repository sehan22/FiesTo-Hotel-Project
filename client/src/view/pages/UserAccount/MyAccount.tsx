import React, {Component} from 'react';
import {Link} from "react-router-dom";
import bannerBackgroundImg from "../../../images/MyAccount/bgImg.jpg";

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
                        <h6 className="font-poppins text-topictwo md:text-normal text-nonary">Your Account Details</h6>
                    </div>
                </div>

                <div className="w-full">
                    <div className="w-8/12 flex justify-center items-center gap-2 mx-auto p-10">

                        <div className="flex flex-col justify-center items-start gap-5 text-white">
                            <h1 className="px-12 py-5 w-64 rounded-xl shadow-xl transition-all hover:shadow-lg  bg-secondary">Account Details</h1>
                            <h1 className="px-12 py-5 w-64 rounded-xl shadow-xl transition-all hover:shadow-lg  bg-secondary">Booking</h1>
                            <h1 className="px-12 py-5 w-64 rounded-xl shadow-xl transition-all hover:shadow-lg  bg-secondary">Orders</h1>
                            <h1 className="px-12 py-5 w-64 rounded-xl shadow-xl transition-all hover:shadow-lg  bg-secondary">Logout</h1>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-5">
                            {/*Contact Form*/}
                            <form className="grid grid-cols-1 gap2 md:gap-5 p-5">
                                <div className="mb-4 max-w-[500px] lmd:min-w-full lg:w-[400px] xl:w-[500px]">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-white font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="text"
                                        placeholder="Full Name"
                                    />
                                </div>

                                <div className="mb-4 max-w-[500px] lmd:min-w-full lg:w-[400px] xl:w-[500px]">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-white font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="mb-4 max-w-[500px] lmd:min-w-full lg:w-[400px] xl:w-[500px]">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-white font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="text"
                                        placeholder="Subject"
                                    />
                                </div>

                                <div className="mb-4 max-w-[500px] lmd:min-w-full lg:w-[400px] xl:w-[500px]">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <textarea
                                        id="myInput"
                                        className="bg-transparent bg-white font-poppins text-smaller text-quinary rounded-lg focus:outline-none h-52 p-4 w-full"
                                        placeholder="Message"
                                    />
                                </div>

                                <div>
                                    <button
                                        className="bg-secondary font-bold text-normal transition-all text-white hover:bg-teal-600 py-4 px-4 w-full rounded">
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </>
/*            <div className="flex justify-center items-center w-screen h-screen bg-black bg-opacity-5 backdrop-blur-2xl  z-50 fixed">
                <div className="w-96 h-96 rounded-xl bg-white flex items-center justify-center">
                    <Link to="/"><h6>Click to Close</h6></Link>
                </div>
            </div>*/
        );
    }
}

export default MyAccount;
