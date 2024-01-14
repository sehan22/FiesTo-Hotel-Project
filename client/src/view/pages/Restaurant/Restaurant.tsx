import React, {Component} from 'react';
import bannerBackgroundImg from "../../../images/RestaurantPage/bgimg.png";
import CarItemImgRice
    from "../../../images/RestaurantPage/CardItemsImg/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food.jpg"
import AddToCartIcon from "../../../images/RestaurantPage/addtocarticon.png"
import WishListIcon from "../../../images/RestaurantPage/cardwhistlist.png"
import FifthDivBgImg from "../../../images/RestaurantPage/Group 166.png"
import RestaurantItem from "../../common/Product/RestaurantItem/RestaurantItem";

export class Restaurant extends Component {
    render() {
        return (
            <>
                {/*Banner*/}
                <div
                    className="flex flex-col items-start justify-center lmd:items-center lmd:justify-center w-full h-screen md:max-h-[500px] md:rounded-b-3xl bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bannerBackgroundImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    <h1 className="font-Milonga text-topic md:text-bannertopic text-white p-2">Fiesto Restaurant</h1>
                    <div className="flex flex-col lmd:items-center lmd:justify-center gap-4 p-2 ">
                        <div className="h-0.5 opacity-50 bg-septenary w-44"></div>
                        <h6 className="font-poppins text-topictwo md:text-subtopic text-nonary">Join With Us</h6>
                        <div className="hidden lmd:block h-0.5 opacity-50 bg-septenary w-32"></div>
                    </div>
                </div>

                {/*second div*/}
                <div className="flex justify-center items-center mx-auto mt-[60px] mb-[60px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5 p-5">
                        <div className="flex flex-col justify-center items-start p-5">
                            <h1 className="font-Milonga text-topic text-quinary">Most Popular Dishes</h1>
                            <p className="font-poppins text-normal mt-2 max-w-[450px]">
                                Making a reservation at Délicious restaurant is easy and takes
                                just a couple of minutes.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-center md:items-end p-5">
                            <div className="flex gap-2">
                                <button
                                    className="bg-quinary text-smaller hover:bg-senary py-4 px-6 text-white font-bold tracking-widest transition-all rounded">Explore
                                </button>

                                <button
                                    className="bg-secondary text-smaller hover:bg-teal-600 py-4 px-6 text-white font-bold tracking-widest transition-all rounded">
                                    View Full Menu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*third div*/}
                <div className="flex justify-around items-center mx-auto mt-[60px] mb-[60px] bg-white">
                    <div>
                        <h6 className="font-poppins text-top text-primary">Daily Dining Delights</h6>
                    </div>

                    <div className="grid grid-cols-1 p-5 font-poppins">
                        <div
                            className="hidden md:flex col-span-2 md:col-span-1 gap-5 items-center text-normal text-quinary transition-all">
                            <h6 className="hover:text-secondary text-secondary cursor-pointer border-b-secondary border-b-2 hover:border-b-2 p-2 hover:border-b-secondary">Breakfast</h6>
                            <h6 className="hover:text-secondary cursor-pointer border-b-transparent border-b-2 hover:border-b-2 p-2 hover:border-b-secondary">Lunches</h6>
                            <h6 className="hover:text-secondary cursor-pointer border-b-transparent border-b-2 hover:border-b-2 p-2 hover:border-b-secondary">Dinner</h6>
                            <h6 className="hover:text-secondary cursor-pointer border-b-transparent border-b-2 hover:border-b-2 p-2 hover:border-b-secondary">Fast-food</h6>
                            <h6 className="hover:text-secondary cursor-pointer border-b-transparent border-b-2 hover:border-b-2 p-2 hover:border-b-secondary">Beverages</h6>
                        </div>

                        <div className="md:hidden flex items-center justify-center text-secondary">
                            <button type="button" id="mobileMenuButton"
                                    className="relative inline-flex items-center justify-center transition-all rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6 text-primary" fill="" viewBox="0 0 24 24"
                                     strokeWidth="1.5"
                                     stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/*fourth div*/}
                <div className="flex justify-center items-center mb-[120px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">

                        {/*card*/}
                        <RestaurantItem/>
                        <RestaurantItem/>
                        <RestaurantItem/>

                    </div>
                </div>

                {/*fifth div*/}
                <div className="hidden flex flex-col w-[100%] items-center justify-center mb-[120px] mx-auto">
                    <img className="w-[70%] object-cover" src={FifthDivBgImg} alt=""/>
                </div>
            </>
        );
    }
}
