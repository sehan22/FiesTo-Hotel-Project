import React, {Component} from 'react';
import bannerBackgroundImg from "../../../images/RoomsPage/bgimg.png";
import FilterIcon from "../../../images/RoomsPage/filtericon.png";

export class Room extends Component {
    render() {
        return (
            <>
                {/*Banner*/}
                <div
                    className="flex flex-col items-center justify-center w-full h-[800px] rounded-b-3xl bg-cover bg-center"
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
                <div className="flex flex-col justify-center items-center gap-5 mt-[120px] mb-[120px] bg-white font-poppins">
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
                        <div></div>
                    </div>
                </div>

                {/*second div*/}
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
                </div>
            </>
        );
    }
}