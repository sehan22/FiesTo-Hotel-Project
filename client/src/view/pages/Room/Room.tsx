import React, {Component} from 'react';
import bannerBackgroundImg from "../../../images/RoomsPage/bgimg.png";
import FilterIcon from "../../../images/RoomsPage/filtericon.png";
import RoomCardImg from "../../../images/RoomsPage/roomcardimg.png";
import TvIcon from "../../../images/RoomsPage/eoomfacilities/tv.png";
import FireIcon from "../../../images/RoomsPage/eoomfacilities/fire.png";
import AcfanIcon from "../../../images/RoomsPage/eoomfacilities/acfan.png";
import SecurityIcon from "../../../images/RoomsPage/eoomfacilities/security.png";
import WashroomIcon from "../../../images/RoomsPage/eoomfacilities/washroom.png";
import RoomserviceIcon from "../../../images/RoomsPage/eoomfacilities/roomservice.png";
import WifiIcon from "../../../images/RoomsPage/eoomfacilities/wifi.png";
import {Link} from "react-router-dom";

export class Room extends Component {
    render() {
        return (
            <>
                {/*Banner*/}
                <div
                    className="hidden flex flex-col items-center justify-center w-full h-[800px] rounded-b-3xl bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bannerBackgroundImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    <h1 className="font-Milonga text-bannertopic text-white">Rooms Section</h1>
                    <div className="flex items-center justify-center gap-4 p-2 ">
                        <div className="h-0.5 opacity-50 bg-septenary w-32"></div>
                        <h6 className="font-poppins text-subtopic text-nonary">Join With Us</h6>
                        <div className="h-0.5 opacity-50 bg-septenary w-32"></div>
                    </div>
                </div>

                {/*first div*/}
                <div className="hidden flex flex-col justify-center items-center gap-5 mt-[120px] mb-[120px] bg-white font-poppins">
                    <div className="flex flex-wrap justify-between items-center font-poppins gap-16 p-5">
                        <h1 className="text-topictwo text-quinary p-5">Room Section</h1>

                        <div className="flex justify-center items-center p-3">
                            <div className=" flex justify-center items-center gap-5">
                                <h4 className="text-normal text-secondary hover:cursor-pointer hover:scale-105">All</h4>
                                <h6 className="text-normal text-senary hover:text-secondary hover:cursor-pointer hover:scale-105">Luxury
                                    Rooms</h6>
                                <h6 className="text-normal text-senary hover:text-secondary hover:cursor-pointer hover:scale-105">Family
                                    Rooms</h6>
                                <h6 className="text-normal text-senary hover:text-secondary hover:cursor-pointer hover:scale-105">Suite
                                    Rooms</h6>
                            </div>

                            <form className="max-w-sm px-4">
                                <div className="relative">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-full py-3 pl-12 pr-4 text-quinary border rounded-full outline-none bg-gray-50 focus:bg-white focus:border-secondary"
                                    />
                                </div>
                            </form>

                            <button className="py-2 px-2 rounded-full bg-gradient-to-b from-teal-500 to-teal-700 shadow-md active:shadow-sm"><img className="w-[20px]" src={FilterIcon} alt=""/></button>
                        </div>
                    </div>

                    <div className="">

                    </div>
                </div>

{/*

                second div
                <div className="hidden flex justify-center items-center gap-5 p-5 mt-[120px] mb-[120px]
                                xs:flex-col
                                md:flex-row
                                lg:flex-row
                ">
                    <div className="flex flex-col justify-center gap-2 text-white w-1/4 p-5 bg-secondary overflow-hidden
                                xs:w-full xs:p-10 xs:max-sm:bg-black
                    ">
                        <h1 className="text-topictwo overflow-hidden overflow-ellipsis whitespace-nowrap">lorem lorem
                            lorem lorem
                        </h1>
                        <h1 className="text-topicDescription">lorem lorem lorem lorem
                            lorem lorem
                        </h1>
                    </div>
                </div>*/}

                {/*overflow-hidden overflow-ellipsis whitespace-nowrap*/}

                {/*test*/}
                <div className="flex justify-center items-center mx-auto bg-octonary">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">

                        {/*card*/}
                        <div className="rounded-2xl shadow-lg xs:max-w-[480px] md:max-w-[380px] bg-white">
                            <div className="p-3 flex flex-col gap-2 font-poppins">
                                <div className="rounded-xl overflow-hidden shadow-xl hover:shadow-sm">
                                    <img className="h-[150px] xs:h-[220px] w-full object-cover" src={RoomCardImg} alt=""/>
                                </div>

                                <div className="flex flex-col gap-4 p-2">
                                    <div>
                                        <div className="flex justify-between">
                                            <h1 className="text-topictwo overflow-hidden overflow-ellipsis whitespace-nowrap">Classic
                                                Comfort Room</h1>

                                            <div className="flex justify-center items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                     viewBox="0 0 8 8" fill="none">
                                                    <path
                                                        d="M3.71468 0.878114C3.80449 0.601721 4.19551 0.601722 4.28532 0.878115L4.8307 2.55664C4.87086 2.68024 4.98605 2.76393 5.11602 2.76393H6.88092C7.17154 2.76393 7.29237 3.13582 7.05726 3.30664L5.62942 4.34402C5.52427 4.42041 5.48028 4.55582 5.52044 4.67943L6.06582 6.35795C6.15563 6.63434 5.83929 6.86418 5.60417 6.69336L4.17634 5.65598C4.07119 5.57959 3.92881 5.57959 3.82366 5.65598L2.39583 6.69336C2.16071 6.86418 1.84437 6.63435 1.93418 6.35795L2.47956 4.67943C2.51972 4.55582 2.47573 4.42041 2.37058 4.34402L0.942743 3.30664C0.707629 3.13582 0.828462 2.76393 1.11908 2.76393H2.88398C3.01395 2.76393 3.12914 2.68024 3.1693 2.55664L3.71468 0.878114Z"
                                                        fill="#FFD700"/>
                                                </svg>

                                                <h6 className="text-quinary text-normal">4.8</h6>
                                            </div>
                                        </div>

                                        <h6 className="text-normal text-quinary">250$</h6>
                                    </div>

                                    <p className="text-quinary text-smaller mt-[-5px]">
                                        Enter a freshly updated and thoughtfully furnished
                                        peaceful home surrounded by ancient trees, stone
                                        walls, and open meadows.
                                    </p>

                                    <div className="flex flex-wrap gap-[1px] justify-between w-full">
                                        <div
                                            className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black bg-opacity-5">
                                            <img className="opacity-70 hover:opacity-100 w-7/12" src={WifiIcon} alt=""/>
                                        </div>
                                        <div
                                            className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black bg-opacity-5">
                                            <img className="opacity-70 hover:opacity-100 w-7/12" src={RoomserviceIcon}
                                                 alt=""/>
                                        </div>
                                        <div
                                            className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black bg-opacity-5">
                                            <img className="opacity-70 hover:opacity-100 w-7/12" src={WashroomIcon}
                                                 alt=""/>
                                        </div>
                                        <div
                                            className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black bg-opacity-5">
                                            <img className="opacity-70 hover:opacity-100 w-7/12" src={TvIcon} alt=""/>
                                        </div>
                                        <div
                                            className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black bg-opacity-5">
                                            <img className="opacity-70 hover:opacity-100 w-7/12" src={AcfanIcon}
                                                 alt=""/>
                                        </div>
                                        <div
                                            className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black bg-opacity-5">
                                            <img className="opacity-70 hover:opacity-100 w-7/12" src={SecurityIcon}
                                                 alt=""/>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 text-white mt-2 font-semibold">
                                        <button
                                            className="bg-secondary text-smaller hover:bg-teal-600 transition-all duration-200 ease-in tracking-widest py-3 px-4 w-12/12 rounded-xl">
                                            Reserve
                                        </button>

                                        <button
                                            className="bg-[#212121] text-smaller hover:bg-gray-800 transition-all duration-200 ease-in tracking-widest py-3 px-4 w-12/12 rounded-xl">
                                            Read more
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}