import React, {Component} from 'react';
import bannerBackgroundImg from "../../../images/RestaurantPage/bgimg.png";
import CarItemImgRice
    from "../../../images/RestaurantPage/CardItemsImg/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food.jpg"
import AddToCartIcon from "../../../images/RestaurantPage/addtocarticon.png"
import WishListIcon from "../../../images/RestaurantPage/cardwhistlist.png"
import FifthDivBgImg from "../../../images/RestaurantPage/Group 166.png"

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

                    <div className="grid grid-cols-1 lg:gap-[200px] p-5 font-poppins">
                        <div
                            className="col-span-2 md:col-span-1 flex gap-5 items-center text-normal text-quinary transition-all">
                            <h6 className="hover:text-secondary text-secondary cursor-pointer border-b-secondary border-b-2 hover:border-b-2 p-2 hover:border-b-secondary">Breakfast</h6>
                            <h6 className="hover:text-secondary cursor-pointer border-b-transparent border-b-2 hover:border-b-2 p-2 hover:border-b-secondary">Lunches</h6>
                            <h6 className="hover:text-secondary cursor-pointer border-b-transparent border-b-2 hover:border-b-2 p-2 hover:border-b-secondary">Dinner</h6>
                            <h6 className="hover:text-secondary cursor-pointer border-b-transparent border-b-2 hover:border-b-2 p-2 hover:border-b-secondary">Fast-food</h6>
                            <h6 className="hover:text-secondary cursor-pointer border-b-transparent border-b-2 hover:border-b-2 p-2 hover:border-b-secondary">Beverages</h6>

                            <div className="flex items-center justify-center text-secondary">
                                <button type="button" id="mobileMenuButton"
                                        className="relative inline-flex items-center justify-center transition-all md:hidden rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5"></span>
                                    <span className="sr-only">Open main menu</span>

                                    <svg className="block h-6 w-6 text-primary" fill="" viewBox="0 0 24 24" stroke-width="1.5"
                                         stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                    </svg>

                                    <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                         stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button></div>
                        </div>
                    </div>
                </div>

                {/*fourth div*/}
                <div className="flex justify-center items-center mb-[120px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">

                        {/*card*/}
                        <div
                            className="xs:max-w-[450px] sm:max-w-[520px] md:max-w-[380px] rounded-2xl shadow-sm transition-all">
                            <div className="flex flex-col gap-2 p-2 font-poppins">

                                <div className="overflow-hidden relative">
                                    <img className="h-[150px] xs:h-[220px] rounded-lg w-full object-cover"
                                         src={CarItemImgRice}
                                         alt=""/>

                                    <div
                                        className="absolute top-0 right-0 rounded-full bg-black bg-opacity-15 px-2 py-2 m-2 z-10">
                                        <img className="w-5" src={WishListIcon} alt=""/>
                                    </div>
                                </div>

                                <div className="flex flex-col p-2 gap-3">
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

                                    <p className="romCardPara text-quinary text-smaller overflow-hidden overflow-y-visible whitespace-pre-wrap h-[55px]">
                                        Enter a freshly updated and thoughtfully furnished
                                        peaceful home surrounded by ancient trees, stone
                                        walls, and open meadows.
                                    </p>

                                    <div className="flex justify-between items-center p-1">
                                        <h1 className="text-topicDescription text-gray-800">250$</h1>

                                        <div className="flex justify-center items-center">
                                            <div
                                                className="flex me-[-4px] justify-center items-center border-septenary rounded-s-xl border-[.5px] gap-1 px-3 py-1.5">
                                                <button
                                                    className="text-quinary text-smaller hover:bg-black hover:rounded-full hover:bg-opacity-10 px-2 py-0.5">-
                                                </button>
                                                <h6 className="text-quinary text-smaller min-w-6 text-center">5</h6>
                                                <button
                                                    className="text-quinary text-smaller hover:bg-black hover:rounded-full hover:bg-opacity-10 px-2 py-0.5">+
                                                </button>
                                            </div>

                                            <button
                                                className="bg-secondary transition-all tracking-wide  flex items-center justify-center gap-1 text-smaller hover:bg-teal-600 py-2.5 px-3 rounded-xl text-white">
                                                Add To Cart
                                                <img className="w-5" src={AddToCartIcon} alt=""/>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div
                            className="xs:max-w-[450px] sm:max-w-[520px] md:max-w-[380px] rounded-2xl shadow-sm transition-all">
                            <div className="flex flex-col gap-2 p-2 font-poppins">

                                <div className="overflow-hidden relative">
                                    <img className="h-[150px] xs:h-[220px] rounded-lg w-full object-cover"
                                         src={CarItemImgRice}
                                         alt=""/>

                                    <div
                                        className="absolute top-0 right-0 rounded-full bg-black bg-opacity-15 px-2 py-2 m-2 z-10">
                                        <img className="w-5" src={WishListIcon} alt=""/>
                                    </div>
                                </div>

                                <div className="flex flex-col p-2 gap-3">
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

                                    <p className="romCardPara text-quinary text-smaller overflow-hidden overflow-y-visible whitespace-pre-wrap h-[55px]">
                                        Enter a freshly updated and thoughtfully furnished
                                        peaceful home surrounded by ancient trees, stone
                                        walls, and open meadows.
                                    </p>

                                    <div className="flex justify-between items-center p-1">
                                        <h1 className="text-topicDescription text-gray-800">250$</h1>

                                        <div className="flex justify-center items-center">
                                            <div
                                                className="flex me-[-4px] justify-center items-center border-septenary rounded-s-xl border-[.5px] gap-1 px-3 py-1.5">
                                                <button
                                                    className="text-quinary text-smaller hover:bg-black hover:rounded-full hover:bg-opacity-10 px-2 py-0.5">-
                                                </button>
                                                <h6 className="text-quinary text-smaller min-w-6 text-center">5</h6>
                                                <button
                                                    className="text-quinary text-smaller hover:bg-black hover:rounded-full hover:bg-opacity-10 px-2 py-0.5">+
                                                </button>
                                            </div>

                                            <button
                                                className="bg-secondary transition-all tracking-wide  flex items-center justify-center gap-1 text-smaller hover:bg-teal-600 py-2.5 px-3 rounded-xl text-white">
                                                Add To Cart
                                                <img className="w-5" src={AddToCartIcon} alt=""/>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div
                            className="xs:max-w-[450px] sm:max-w-[520px] md:max-w-[380px] rounded-2xl shadow-sm transition-all">
                            <div className="flex flex-col gap-2 p-2 font-poppins">

                                <div className="overflow-hidden relative">
                                    <img className="h-[150px] xs:h-[220px] rounded-lg w-full object-cover"
                                         src={CarItemImgRice}
                                         alt=""/>

                                    <div
                                        className="absolute top-0 right-0 rounded-full bg-black bg-opacity-15 px-2 py-2 m-2 z-10">
                                        <img className="w-5" src={WishListIcon} alt=""/>
                                    </div>
                                </div>

                                <div className="flex flex-col p-2 gap-3">
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

                                    <p className="romCardPara text-quinary text-smaller overflow-hidden overflow-y-visible whitespace-pre-wrap h-[55px]">
                                        Enter a freshly updated and thoughtfully furnished
                                        peaceful home surrounded by ancient trees, stone
                                        walls, and open meadows.
                                    </p>

                                    <div className="flex justify-between items-center p-1">
                                        <h1 className="text-topicDescription text-gray-800">250$</h1>

                                        <div className="flex justify-center items-center">
                                            <div
                                                className="flex me-[-4px] justify-center items-center border-septenary rounded-s-xl border-[.5px] gap-1 px-3 py-1.5">
                                                <button
                                                    className="text-quinary text-smaller hover:bg-black hover:rounded-full hover:bg-opacity-10 px-2 py-0.5">-
                                                </button>
                                                <h6 className="text-quinary text-smaller min-w-6 text-center">5</h6>
                                                <button
                                                    className="text-quinary text-smaller hover:bg-black hover:rounded-full hover:bg-opacity-10 px-2 py-0.5">+
                                                </button>
                                            </div>

                                            <button
                                                className="bg-secondary transition-all tracking-wide  flex items-center justify-center gap-1 text-smaller hover:bg-teal-600 py-2.5 px-3 rounded-xl text-white">
                                                Add To Cart
                                                <img className="w-5" src={AddToCartIcon} alt=""/>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div
                            className="xs:max-w-[450px] sm:max-w-[520px] md:max-w-[380px] rounded-2xl shadow-sm transition-all">
                            <div className="flex flex-col gap-2 p-2 font-poppins">

                                <div className="overflow-hidden relative">
                                    <img className="h-[150px] xs:h-[220px] rounded-lg w-full object-cover"
                                         src={CarItemImgRice}
                                         alt=""/>

                                    <div
                                        className="absolute top-0 right-0 rounded-full bg-black bg-opacity-15 px-2 py-2 m-2 z-10">
                                        <img className="w-5" src={WishListIcon} alt=""/>
                                    </div>
                                </div>

                                <div className="flex flex-col p-2 gap-3">
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

                                    <p className="romCardPara text-quinary text-smaller overflow-hidden overflow-y-visible whitespace-pre-wrap h-[55px]">
                                        Enter a freshly updated and thoughtfully furnished
                                        peaceful home surrounded by ancient trees, stone
                                        walls, and open meadows.
                                    </p>

                                    <div className="flex justify-between items-center p-1">
                                        <h1 className="text-topicDescription text-gray-800">250$</h1>

                                        <div className="flex justify-center items-center">
                                            <div
                                                className="flex me-[-4px] justify-center items-center border-septenary rounded-s-xl border-[.5px] gap-1 px-3 py-1.5">
                                                <button
                                                    className="text-quinary text-smaller hover:bg-black hover:rounded-full hover:bg-opacity-10 px-2 py-0.5">-
                                                </button>
                                                <h6 className="text-quinary text-smaller min-w-6 text-center">5</h6>
                                                <button
                                                    className="text-quinary text-smaller hover:bg-black hover:rounded-full hover:bg-opacity-10 px-2 py-0.5">+
                                                </button>
                                            </div>

                                            <button
                                                className="bg-secondary transition-all tracking-wide  flex items-center justify-center gap-1 text-smaller hover:bg-teal-600 py-2.5 px-3 rounded-xl text-white">
                                                Add To Cart
                                                <img className="w-5" src={AddToCartIcon} alt=""/>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div
                            className="xs:max-w-[450px] sm:max-w-[520px] md:max-w-[380px] rounded-2xl shadow-sm transition-all">
                            <div className="flex flex-col gap-2 p-2 font-poppins">

                                <div className="overflow-hidden relative">
                                    <img className="h-[150px] xs:h-[220px] rounded-lg w-full object-cover"
                                         src={CarItemImgRice}
                                         alt=""/>

                                    <div
                                        className="absolute top-0 right-0 rounded-full bg-black bg-opacity-15 px-2 py-2 m-2 z-10">
                                        <img className="w-5" src={WishListIcon} alt=""/>
                                    </div>
                                </div>

                                <div className="flex flex-col p-2 gap-3">
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

                                    <p className="romCardPara text-quinary text-smaller overflow-hidden overflow-y-visible whitespace-pre-wrap h-[55px]">
                                        Enter a freshly updated and thoughtfully furnished
                                        peaceful home surrounded by ancient trees, stone
                                        walls, and open meadows.
                                    </p>

                                    <div className="flex justify-between items-center p-1">
                                        <h1 className="text-topicDescription text-gray-800">250$</h1>

                                        <div className="flex justify-center items-center">
                                            <div
                                                className="flex me-[-4px] justify-center items-center border-septenary rounded-s-xl border-[.5px] gap-1 px-3 py-1.5">
                                                <button
                                                    className="text-quinary text-smaller hover:bg-black hover:rounded-full hover:bg-opacity-10 px-2 py-0.5">-
                                                </button>
                                                <h6 className="text-quinary text-smaller min-w-6 text-center">5</h6>
                                                <button
                                                    className="text-quinary text-smaller hover:bg-black hover:rounded-full hover:bg-opacity-10 px-2 py-0.5">+
                                                </button>
                                            </div>

                                            <button
                                                className="bg-secondary transition-all tracking-wide  flex items-center justify-center gap-1 text-smaller hover:bg-teal-600 py-2.5 px-3 rounded-xl text-white">
                                                Add To Cart
                                                <img className="w-5" src={AddToCartIcon} alt=""/>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div
                            className="xs:max-w-[450px] sm:max-w-[520px] md:max-w-[380px] rounded-2xl shadow-sm transition-all">
                            <div className="flex flex-col gap-2 p-2 font-poppins">

                                <div className="overflow-hidden relative">
                                    <img className="h-[150px] xs:h-[220px] rounded-lg w-full object-cover"
                                         src={CarItemImgRice}
                                         alt=""/>

                                    <div
                                        className="absolute top-0 right-0 rounded-full bg-black bg-opacity-15 px-2 py-2 m-2 z-10">
                                        <img className="w-5" src={WishListIcon} alt=""/>
                                    </div>
                                </div>

                                <div className="flex flex-col p-2 gap-3">
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

                                    <p className="romCardPara text-quinary text-smaller overflow-hidden overflow-y-visible whitespace-pre-wrap h-[55px]">
                                        Enter a freshly updated and thoughtfully furnished
                                        peaceful home surrounded by ancient trees, stone
                                        walls, and open meadows.
                                    </p>

                                    <div className="flex justify-between items-center p-1">
                                        <h1 className="text-topicDescription text-gray-800">250$</h1>

                                        <div className="flex justify-center items-center">
                                            <div
                                                className="flex me-[-4px] justify-center items-center border-septenary rounded-s-xl border-[.5px] gap-1 px-3 py-1.5">
                                                <button
                                                    className="text-quinary text-smaller hover:bg-black hover:rounded-full hover:bg-opacity-10 px-2 py-0.5">-
                                                </button>
                                                <h6 className="text-quinary text-smaller min-w-6 text-center">5</h6>
                                                <button
                                                    className="text-quinary text-smaller hover:bg-black hover:rounded-full hover:bg-opacity-10 px-2 py-0.5">+
                                                </button>
                                            </div>

                                            <button
                                                className="bg-secondary transition-all tracking-wide  flex items-center justify-center gap-1 text-smaller hover:bg-teal-600 py-2.5 px-3 rounded-xl text-white">
                                                Add To Cart
                                                <img className="w-5" src={AddToCartIcon} alt=""/>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/*fifth div*/}
                <div className="flex flex-col w-[100%] items-center justify-center mb-[120px] mx-auto">
                    <img className="w-[70%] object-cover" src={FifthDivBgImg} alt=""/>
                </div>
            </>
        );
    }
}
