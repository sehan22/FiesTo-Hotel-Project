import React, {Component} from 'react';
import LoginPageBGImg from '../../../images/LoginPage/LoginPageBGImg.png'
import Logo from '../../../images/LoginPage/Logo2.png'
import {Link} from "react-router-dom";

export class Login extends Component {
    render() {
        return (
            <div className="h-screen flex justify-center items-center "
                 style={{background: `url(${LoginPageBGImg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                <div
                    className="flex flex-col items-start justify-center gap-5 p-10 py-14 bg-white font-poppins rounded-lg shadow-lg">
                    <img className="w-28" src={Logo} alt=""/>

                    <div>
                        <h1 className="text-loginpagetopic text-primary font-semibold">Sign in to your account</h1>
                        <div className="flex justify-start items-center text-smaller gap-1">
                            <h6 className="text-primary">Not a member? </h6>

                            <div className="flex items-center justify-center gap-1">
                                <h6 className="text-secondary cursor-pointer" style={{fontWeight: '600'}}><Link
                                    to="/signup">Click here to Register Now</Link></h6>
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 6 6"
                                     fill="none">
                                    <path
                                        d="M5.96248 2.81322C5.93867 2.75181 5.90297 2.69572 5.85743 2.64815L3.35639 0.147107C3.30976 0.100468 3.25439 0.0634727 3.19345 0.038232C3.13252 0.0129914 3.0672 0 3.00125 0C2.86804 0 2.74029 0.052916 2.6461 0.147107C2.59946 0.193746 2.56246 0.249114 2.53722 0.31005C2.51198 0.370986 2.49899 0.436298 2.49899 0.502255C2.49899 0.635461 2.55191 0.763211 2.6461 0.857402L4.29679 2.50309H0.500208C0.367544 2.50309 0.240315 2.55579 0.146508 2.64959C0.0527004 2.7434 0 2.87063 0 3.00329C0 3.13596 0.0527004 3.26319 0.146508 3.35699C0.240315 3.4508 0.367544 3.5035 0.500208 3.5035H4.29679L2.6461 5.14919C2.59922 5.19569 2.562 5.25101 2.53661 5.31196C2.51121 5.37292 2.49814 5.4383 2.49814 5.50433C2.49814 5.57037 2.51121 5.63575 2.53661 5.6967C2.562 5.75766 2.59922 5.81298 2.6461 5.85948C2.6926 5.90636 2.74792 5.94358 2.80888 5.96897C2.86983 5.99437 2.93521 6.00744 3.00125 6.00744C3.06728 6.00744 3.13266 5.99437 3.19362 5.96897C3.25457 5.94358 3.30989 5.90636 3.35639 5.85948L5.85743 3.35844C5.90297 3.31087 5.93867 3.25477 5.96248 3.19337C6.01251 3.07159 6.01251 2.935 5.96248 2.81322Z"
                                        fill="#35858B"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <form className="flex flex-col justify-center items-center gap-6 mt-2">
                        <div className="w-80 border-gray-400">
                            <div className="relative w-full min-w-[200px] h-10">
                                <input
                                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-smaller px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                    placeholder=" "
                                    type="text"
                                    required/><label
                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-normal text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Username
                            </label>
                            </div>
                        </div>

                        <div className="w-80 border-gray-400">
                            <div className="relative w-full min-w-[200px] h-10">
                                <input
                                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                    placeholder=" "
                                    type="password"
                                    required/><label
                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-normal text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Password
                            </label>
                            </div>
                        </div>

                        <div className="flex text-smaller justify-around gap-14 mt-[-15px] items-center w-full">
                            <div className="flex items-center">
                                <input id="default-checkbox" type="checkbox" value=""
                                       className="w-3.5 h-3.5 text-secondary bg-gray-100 border-gray-300 rounded focus:ring-secondary dark:focus:ring-transparent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-checkbox"
                                       className="ms-2 text-smaller font-medium text-gray-900 dark:text-gray-300">Remember
                                    me</label>
                            </div>

                            <h6 className="text-secondary">Forgot password?</h6>
                        </div>

                        <div className="flex w-full">
                            <button
                                className="bg-secondary text-smaller text-white hover:bg-teal-600 py-2 px-4 w-full rounded">
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center justify-center gap-2 m-auto">
                        <div className="h-0.5 w-10 bg-gray-200"></div>
                        <h6 className="text-smaller">Or connect with</h6>
                        <div className="h-0.5 w-10 bg-gray-200"></div>
                    </div>

                    <div className="flex justify-between items-center w-full gap-2">
                        <button
                            className="align-middle w-6/12 select-none text-smaller text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-6 rounded bg-gradient-to-r from-purple-600 via-red-500 to-orange-500 text-white shadow-md shadow-gray-900/10 hover:shadow-md hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center justify-center gap-2"
                            type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                                 fill="none">
                                <path
                                    d="M4.86208 7.27995C4.86208 5.94495 5.94466 4.86244 7.28045 4.86244C8.61625 4.86244 9.69941 5.94495 9.69941 7.27995C9.69941 8.61494 8.61625 9.69745 7.28045 9.69745C5.94466 9.69745 4.86208 8.61494 4.86208 7.27995ZM3.55444 7.27995C3.55444 9.3366 5.22257 11.0037 7.28045 11.0037C9.33833 11.0037 11.0065 9.3366 11.0065 7.27995C11.0065 5.2233 9.33833 3.55617 7.28045 3.55617C5.22257 3.55617 3.55444 5.2233 3.55444 7.27995ZM10.2832 3.40852C10.2831 3.58063 10.3342 3.7489 10.4298 3.89205C10.5254 4.0352 10.6613 4.14679 10.8204 4.21272C10.9795 4.27865 11.1546 4.29595 11.3235 4.26244C11.4924 4.22893 11.6476 4.14611 11.7694 4.02446C11.8913 3.9028 11.9743 3.74778 12.0079 3.57898C12.0416 3.41019 12.0244 3.2352 11.9586 3.07616C11.8927 2.91712 11.7812 2.78117 11.638 2.68549C11.4949 2.58981 11.3265 2.5387 11.1543 2.53863H11.154C10.9231 2.53874 10.7018 2.63041 10.5385 2.79351C10.3752 2.95662 10.2834 3.17781 10.2832 3.40852V3.40852ZM4.34891 13.1828C3.64146 13.1506 3.25693 13.0329 3.00139 12.9334C2.66261 12.8016 2.42089 12.6446 2.16675 12.3909C1.9126 12.1373 1.75529 11.8959 1.62398 11.5574C1.52436 11.3021 1.40652 10.9177 1.37436 10.2107C1.33918 9.44625 1.33216 9.21662 1.33216 7.28001C1.33216 5.34339 1.33976 5.1144 1.37436 4.34935C1.40658 3.64232 1.52529 3.25866 1.62398 3.00264C1.75587 2.66406 1.91295 2.42249 2.16675 2.1685C2.42054 1.9145 2.66203 1.75728 3.00139 1.62605C3.25681 1.5265 3.64146 1.40873 4.34891 1.37658C5.11378 1.34143 5.34355 1.33441 7.28045 1.33441C9.21736 1.33441 9.44735 1.34201 10.2129 1.37658C10.9203 1.40878 11.3042 1.52742 11.5604 1.62605C11.8992 1.75728 12.1409 1.91485 12.395 2.1685C12.6492 2.42214 12.8059 2.66406 12.9378 3.00264C13.0374 3.25791 13.1553 3.64232 13.1874 4.34935C13.2226 5.1144 13.2296 5.34339 13.2296 7.28001C13.2296 9.21662 13.2226 9.44561 13.1874 10.2107C13.1552 10.9177 13.0368 11.302 12.9378 11.5574C12.8059 11.8959 12.6488 12.1375 12.395 12.3909C12.1412 12.6443 11.8992 12.8016 11.5604 12.9334C11.305 13.0329 10.9203 13.1507 10.2129 13.1828C9.44799 13.218 9.21823 13.225 7.28045 13.225C5.34268 13.225 5.11355 13.218 4.34891 13.1828V13.1828ZM4.28883 0.0719328C3.51636 0.10709 2.98851 0.229503 2.52753 0.408771C2.05012 0.593898 1.64598 0.842262 1.24212 1.24524C0.838267 1.64821 0.590392 2.05275 0.405154 2.52987C0.225778 2.99086 0.103292 3.51811 0.068114 4.29012C0.032355 5.06335 0.0241699 5.31055 0.0241699 7.27995C0.0241699 9.24934 0.032355 9.49654 0.068114 10.2698C0.103292 11.0418 0.225778 11.569 0.405154 12.03C0.590392 12.5069 0.838325 12.9119 1.24212 13.3147C1.64592 13.7175 2.05012 13.9655 2.52753 14.1511C2.98938 14.3304 3.51636 14.4528 4.28883 14.488C5.06293 14.5231 5.30988 14.5319 7.28045 14.5319C9.25103 14.5319 9.49838 14.5237 10.2721 14.488C11.0446 14.4528 11.5721 14.3304 12.0334 14.1511C12.5105 13.9655 12.9149 13.7176 13.3188 13.3147C13.7226 12.9117 13.97 12.5069 14.1558 12.03C14.3351 11.569 14.4582 11.0418 14.4928 10.2698C14.528 9.49596 14.5362 9.24934 14.5362 7.27995C14.5362 5.31055 14.528 5.06335 14.4928 4.29012C14.4576 3.51805 14.3351 2.99057 14.1558 2.52987C13.97 2.05304 13.722 1.64885 13.3188 1.24524C12.9156 0.841624 12.5105 0.593898 12.034 0.408771C11.5721 0.229503 11.0445 0.10651 10.2727 0.0719328C9.49896 0.0367755 9.25161 0.0280151 7.28103 0.0280151C5.31046 0.0280151 5.06293 0.0361953 4.28883 0.0719328Z"
                                    fill="url(#paint0_radial_61_13)"/>
                                <path
                                    d="M4.86208 7.27995C4.86208 5.94495 5.94466 4.86244 7.28045 4.86244C8.61625 4.86244 9.69941 5.94495 9.69941 7.27995C9.69941 8.61494 8.61625 9.69745 7.28045 9.69745C5.94466 9.69745 4.86208 8.61494 4.86208 7.27995ZM3.55444 7.27995C3.55444 9.3366 5.22257 11.0037 7.28045 11.0037C9.33833 11.0037 11.0065 9.3366 11.0065 7.27995C11.0065 5.2233 9.33833 3.55617 7.28045 3.55617C5.22257 3.55617 3.55444 5.2233 3.55444 7.27995ZM10.2832 3.40852C10.2831 3.58063 10.3342 3.7489 10.4298 3.89205C10.5254 4.0352 10.6613 4.14679 10.8204 4.21272C10.9795 4.27865 11.1546 4.29595 11.3235 4.26244C11.4924 4.22893 11.6476 4.14611 11.7694 4.02446C11.8913 3.9028 11.9743 3.74778 12.0079 3.57898C12.0416 3.41019 12.0244 3.2352 11.9586 3.07616C11.8927 2.91712 11.7812 2.78117 11.638 2.68549C11.4949 2.58981 11.3265 2.5387 11.1543 2.53863H11.154C10.9231 2.53874 10.7018 2.63041 10.5385 2.79351C10.3752 2.95662 10.2834 3.17781 10.2832 3.40852V3.40852ZM4.34891 13.1828C3.64146 13.1506 3.25693 13.0329 3.00139 12.9334C2.66261 12.8016 2.42089 12.6446 2.16675 12.3909C1.9126 12.1373 1.75529 11.8959 1.62398 11.5574C1.52436 11.3021 1.40652 10.9177 1.37436 10.2107C1.33918 9.44625 1.33216 9.21662 1.33216 7.28001C1.33216 5.34339 1.33976 5.1144 1.37436 4.34935C1.40658 3.64232 1.52529 3.25866 1.62398 3.00264C1.75587 2.66406 1.91295 2.42249 2.16675 2.1685C2.42054 1.9145 2.66203 1.75728 3.00139 1.62605C3.25681 1.5265 3.64146 1.40873 4.34891 1.37658C5.11378 1.34143 5.34355 1.33441 7.28045 1.33441C9.21736 1.33441 9.44735 1.34201 10.2129 1.37658C10.9203 1.40878 11.3042 1.52742 11.5604 1.62605C11.8992 1.75728 12.1409 1.91485 12.395 2.1685C12.6492 2.42214 12.8059 2.66406 12.9378 3.00264C13.0374 3.25791 13.1553 3.64232 13.1874 4.34935C13.2226 5.1144 13.2296 5.34339 13.2296 7.28001C13.2296 9.21662 13.2226 9.44561 13.1874 10.2107C13.1552 10.9177 13.0368 11.302 12.9378 11.5574C12.8059 11.8959 12.6488 12.1375 12.395 12.3909C12.1412 12.6443 11.8992 12.8016 11.5604 12.9334C11.305 13.0329 10.9203 13.1507 10.2129 13.1828C9.44799 13.218 9.21823 13.225 7.28045 13.225C5.34268 13.225 5.11355 13.218 4.34891 13.1828V13.1828ZM4.28883 0.0719328C3.51636 0.10709 2.98851 0.229503 2.52753 0.408771C2.05012 0.593898 1.64598 0.842262 1.24212 1.24524C0.838267 1.64821 0.590392 2.05275 0.405154 2.52987C0.225778 2.99086 0.103292 3.51811 0.068114 4.29012C0.032355 5.06335 0.0241699 5.31055 0.0241699 7.27995C0.0241699 9.24934 0.032355 9.49654 0.068114 10.2698C0.103292 11.0418 0.225778 11.569 0.405154 12.03C0.590392 12.5069 0.838325 12.9119 1.24212 13.3147C1.64592 13.7175 2.05012 13.9655 2.52753 14.1511C2.98938 14.3304 3.51636 14.4528 4.28883 14.488C5.06293 14.5231 5.30988 14.5319 7.28045 14.5319C9.25103 14.5319 9.49838 14.5237 10.2721 14.488C11.0446 14.4528 11.5721 14.3304 12.0334 14.1511C12.5105 13.9655 12.9149 13.7176 13.3188 13.3147C13.7226 12.9117 13.97 12.5069 14.1558 12.03C14.3351 11.569 14.4582 11.0418 14.4928 10.2698C14.528 9.49596 14.5362 9.24934 14.5362 7.27995C14.5362 5.31055 14.528 5.06335 14.4928 4.29012C14.4576 3.51805 14.3351 2.99057 14.1558 2.52987C13.97 2.05304 13.722 1.64885 13.3188 1.24524C12.9156 0.841624 12.5105 0.593898 12.034 0.408771C11.5721 0.229503 11.0445 0.10651 10.2727 0.0719328C9.49896 0.0367755 9.25161 0.0280151 7.28103 0.0280151C5.31046 0.0280151 5.06293 0.0361953 4.28883 0.0719328Z"
                                    fill="white"/>
                                <defs>
                                    <radialGradient id="paint0_radial_61_13" cx="0" cy="0" r="1"
                                                    gradientUnits="userSpaceOnUse"
                                                    gradientTransform="translate(1.95225 14.6004) scale(18.9449 18.9336)">
                                        <stop offset="0.09" stop-color="#FA8F21"/>
                                        <stop offset="0.78" stop-color="#D82D7E"/>
                                    </radialGradient>
                                </defs>
                            </svg>
                            Instagram
                        </button>
                        <button
                            className="align-middle w-6/12 select-none text-smaller text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-6 rounded bg-[#1B1F23] text-white shadow-md shadow-gray-900/10 hover:shadow-md hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center justify-center gap-2"
                            type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15"
                                 fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M8.27321 0.0916138C4.1451 0.0916138 0.801514 3.41894 0.801514 7.52698C0.801514 10.8171 2.94029 13.5961 5.91028 14.5813C6.28387 14.6463 6.42396 14.4233 6.42396 14.2281C6.42396 14.0515 6.41462 13.466 6.41462 12.8433C4.53736 13.1872 4.0517 12.3879 3.90227 11.9696C3.81821 11.7558 3.45396 11.096 3.13642 10.9194C2.87491 10.78 2.50132 10.4361 3.12708 10.4268C3.71547 10.4175 4.13576 10.9658 4.27585 11.1889C4.9483 12.3135 6.02236 11.9975 6.45198 11.8023C6.51736 11.319 6.71349 10.9937 6.9283 10.8078C5.26585 10.622 3.52868 9.98065 3.52868 7.13662C3.52868 6.32803 3.81821 5.65884 4.29453 5.13837C4.21981 4.95249 3.9583 4.19036 4.36925 3.168C4.36925 3.168 4.995 2.97282 6.42396 3.93012C7.0217 3.76283 7.65679 3.67918 8.29189 3.67918C8.92698 3.67918 9.56208 3.76283 10.1598 3.93012C11.5888 2.96352 12.2145 3.168 12.2145 3.168C12.6255 4.19036 12.364 4.95249 12.2892 5.13837C12.7656 5.65884 13.0551 6.31873 13.0551 7.13662C13.0551 9.98995 11.3086 10.622 9.64613 10.8078C9.91698 11.0402 10.1505 11.4863 10.1505 12.1834C10.1505 13.1779 10.1411 13.9772 10.1411 14.2281C10.1411 14.4233 10.2812 14.6556 10.6548 14.5813C13.6061 13.5961 15.7449 10.8078 15.7449 7.52698C15.7449 3.41894 12.4013 0.0916138 8.27321 0.0916138Z"
                                      fill="white"/>
                            </svg>
                            GitHub
                        </button>
                    </div>
                </div>

                <div
                    className="absolute top-0 right-0 p-2 m-5 bg-black bg-opacity-10 hover:bg-opacity-15 cursor-pointer rounded-sm">
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="white" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
        );
    }
}