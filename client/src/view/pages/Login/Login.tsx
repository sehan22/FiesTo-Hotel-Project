import React, {Component} from 'react';
import LoginPageBGImg from '../../../images/LoginPage/LoginPageBGImg.png'
import Logo from '../../../images/LoginPage/Logo.png'
import {Link} from "react-router-dom";

export class Login extends Component {
    render() {
        return (
            <div className="h-screen flex justify-center items-center"
                 style={{background: `url(${LoginPageBGImg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                <div className="flex flex-col items-start justify-center p-10 bg-white">
                    <img src={Logo} alt=""/>
                    <h1>Sign in to your account</h1>

                    <div className="flex">
                        <h6>Not a member?</h6>
                        <h6>Click here to Register Now</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                            <path
                                d="M5.96248 2.81322C5.93867 2.75181 5.90297 2.69572 5.85743 2.64815L3.35639 0.147107C3.30976 0.100468 3.25439 0.0634727 3.19345 0.038232C3.13252 0.0129914 3.0672 0 3.00125 0C2.86804 0 2.74029 0.052916 2.6461 0.147107C2.59946 0.193746 2.56246 0.249114 2.53722 0.31005C2.51198 0.370986 2.49899 0.436298 2.49899 0.502255C2.49899 0.635461 2.55191 0.763211 2.6461 0.857402L4.29679 2.50309H0.500208C0.367544 2.50309 0.240315 2.55579 0.146508 2.64959C0.0527004 2.7434 0 2.87063 0 3.00329C0 3.13596 0.0527004 3.26319 0.146508 3.35699C0.240315 3.4508 0.367544 3.5035 0.500208 3.5035H4.29679L2.6461 5.14919C2.59922 5.19569 2.562 5.25101 2.53661 5.31196C2.51121 5.37292 2.49814 5.4383 2.49814 5.50433C2.49814 5.57037 2.51121 5.63575 2.53661 5.6967C2.562 5.75766 2.59922 5.81298 2.6461 5.85948C2.6926 5.90636 2.74792 5.94358 2.80888 5.96897C2.86983 5.99437 2.93521 6.00744 3.00125 6.00744C3.06728 6.00744 3.13266 5.99437 3.19362 5.96897C3.25457 5.94358 3.30989 5.90636 3.35639 5.85948L5.85743 3.35844C5.90297 3.31087 5.93867 3.25477 5.96248 3.19337C6.01251 3.07159 6.01251 2.935 5.96248 2.81322Z"
                                fill="#35858B"/>
                        </svg>
                    </div>

                    <form>
                        <div className="w-72">
                            <div className="relative w-full min-w-[200px] h-10">
                                <input
                                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                    placeholder=" "/><label
                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Username
                            </label>
                            </div>
                        </div>

                        <div className="w-72">
                            <div className="relative w-full min-w-[200px] h-10">
                                <input
                                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                    placeholder=" "/><label
                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Username
                            </label>
                            </div>
                        </div>

                        <div>
                            <button className="bg-secondary text-smaller hover:bg-teal-600 py-2 px-4 rounded">
                                Sign In | Sign Up
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center justify-center">
                        <div className="h-1 w-5 bg-octonary"></div>
                        <h6>Or connect with</h6>
                        <div className="h-1 w-5 bg-octonary"></div>
                    </div>

                    <div className="flex">
                        <button
                            className="bg-black rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2">Github <i
                            className="fab fa-github ml-1"></i></button>
                        <button
                            className="bg-blue-700 rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2">Facebook <i
                            className="fab fa-facebook ml-1"></i></button>
                        <button
                            className="bg-red-700 rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2">Youtube <i
                            className="fab fa-youtube ml-1"></i></button>
                    </div>
                </div>
            </div>
        );
    }
}