import React, {Component} from 'react';
import bannerBackgroundImg from "../../../images/RestaurantPage/bgimg.png";
import {Link} from "react-router-dom";

export class Restaurant extends Component {
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
                    <h1 className="font-Milonga text-bannertopic text-white">Restaurant & Bar</h1>
                    <div className="flex items-center justify-center gap-4 p-2 ">
                        <div className="h-0.5 opacity-50 bg-septenary w-32"></div>
                        <h6 className="font-poppins text-subtopic text-nonary">Join With Us</h6>
                        <div className="h-0.5 opacity-50 bg-septenary w-32"></div>
                    </div>

                    <a href="#dropDownIcon">
                        <svg className="animate-bounce mt-10" xmlns="http://www.w3.org/2000/svg" height="25" width="22"
                             viewBox="0 0 384 512">
                            <path fill="#ffffff"
                                  d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                        </svg>
                    </a>
                </div>

                {/*second div*/}
                <div className="flex justify-center items-center mx-auto mt-[120px] mb-[120px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5 p-5">
                        <div className="flex flex-col justify-center bg-octonary items-start p-5">
                            <h1 className="font-Milonga text-topic text-quinary">Most Popular Dishes</h1>
                            <p className="font-poppins text-normal max-w-[450px]">
                                Making a reservation at Délicious restaurant is easy and takes
                                just a couple of minutes.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center bg-octonary items-center md:items-end p-5">
                            <div className="flex gap-2">
                                <button
                                    className="bg-secondary text-smaller hover:bg-teal-600 py-4 px-6 text-white font-bold tracking-widest transition-all rounded">
                                    View Full Menu
                                </button>

                                <button
                                    className="bg-secondary text-smaller hover:bg-teal-600 py-4 px-6 text-white font-bold tracking-widest transition-all rounded">
                                    View Full Menu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
