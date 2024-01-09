import React, {Component} from 'react';
import bannerBackgroundImg from '../../../images/banner.png'
import pillow from '../../../images/HomePage/SecDiv/pillow.png'
import Offers from '../../../images/HomePage/SecDiv/Offers.png'
import Restaurant from '../../../images/HomePage/SecDiv/Restaurant.png'
import HotelRoom from '../../../images/HomePage/SecDiv/HotelRoom.png'
import BookingIcon from '../../../images/HomePage/ThirdDiv/booking.png'
import RestaurantIcon from '../../../images/HomePage/ThirdDiv/Restaurant.png'
import PoolIcon from '../../../images/HomePage/ThirdDiv/pool.png'
import HelpSupportIcon from '../../../images/HomePage/ThirdDiv/helpsupport.png'
import FourthDivBGImg from '../../../images/HomePage/FourthDiv/fourthdivbgpic.png'
import SuiteRoomImg from '../../../images/HomePage/FifthDiv/suiteroom.png'
import FamilyRoomImg from '../../../images/HomePage/FifthDiv/familyroom.png'
import DeluxeRoomImg from '../../../images/HomePage/FifthDiv/deluxroom.png'
import SixthDivBGImg from '../../../images/HomePage/SixthDiv/sixthdivbgimg.png'
import FirstManImg from '../../../images/HomePage/SeventhDiv/1stman.png'
import SecondManImg from '../../../images/HomePage/SeventhDiv/2ndman.png'
import ThirdManImg from '../../../images/HomePage/SeventhDiv/3rdman.png'

export class Home extends Component {
    render() {
        return (
            <>
                {/*navbar*/}
                <nav
                    className="hidden bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>
                            <span
                                className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get
                                started
                            </button>
                            <button data-collapse-toggle="navbar-sticky" type="button"
                                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    aria-controls="navbar-sticky" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                                </svg>
                            </button>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                             id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="#"
                                       className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                       aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


                {/*Banner*/}
                <div
                    className="flex flex-col items-start justify-center lmd:items-center lmd:justify-center w-full h-screen md:max-h-[800px] md:rounded-b-3xl bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bannerBackgroundImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    <h1 className="font-Milonga text-topic md:text-bannertopic text-white p-2">Welcome To
                        FiesTo</h1>
                    <div className="flex flex-col lmd:items-center lmd:justify-center gap-4 p-2 ">
                        <div className="h-0.5 opacity-50 bg-septenary w-44"></div>
                        <h6 className="font-poppins text-topictwo md:text-subtopic text-nonary">Join With Us</h6>
                        <div className="hidden lmd:block h-0.5 opacity-50 bg-septenary w-32"></div>
                    </div>
                </div>

                {/*first div*/}
                <div className="flex justify-center items-center mx-auto">
                    <div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-2 bg-white lmd:p-5 sm:p-5 lg:p-10 mt-[-50px] sm:mt-[-100px] lg:mt-[-80px] transition-all sm:bg-white rounded-xl sm:rounded-xl shadow-lg sm:shadow-xl">

                        <div
                            className="col-span-2 lmd:col-span-1 max-w-[400px] lmd:max-w-[280px] sm:min-w-[250px] md:min-w-[200px] lg:min-w-[160px] lg:max-w-[180px] min-w-[140px] w-[90vw] lmd:w-[35vw] md:w-[25vw] lg:w-[12vw]">
                            <div>
                                <label className="block text-quinary text-sm font-bold mb-2" htmlFor="username">
                                    Check-In Date
                                </label>
                                <input
                                    className="appearance-auto border rounded py-4 px-3 w-full text-quinary leading-tight focus:outline-none focus:shadow-sm"
                                    id="username" type="date"/>
                            </div>
                        </div>

                        <div
                            className="col-span-2 lmd:col-span-1 max-w-[400px] lmd:max-w-[280px] sm:min-w-[250px] md:min-w-[200px] lg:min-w-[160px] lg:max-w-[180px] min-w-[140px] w-[90vw] lmd:w-[35vw] md:w-[25vw] lg:w-[12vw]">
                            <label className="block text-quinary text-sm font-bold mb-2" htmlFor="username">
                                Check-Out Date
                            </label>
                            <input
                                className="appearance-auto border rounded w-full py-4 px-3 text-quinary leading-tight focus:outline-none focus:shadow-sm"
                                id="username" type="date"/>
                        </div>

                        <div className="col-span-2 xs:col-span-1 max-w-[400px]">
                            <div>
                                <h5 className="text-sm font-bold text-quinary mb-[8px] mt-[-2px]">Room</h5>

                                <div className="inline-block relative w-full">
                                    <select
                                        className="block text-sm text-quinary appearance-none w-full py-[18.25px] bg-white border border-gray-200 hover:border-gray-500 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline">
                                        <option>Example</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                    <div
                                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20">
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 xs:col-span-1 max-w-[400px]">
                            <div>
                                <h5 className="text-sm font-bold text-quinary mb-[8px] mt-[-2px]">Guests</h5>

                                <div className="inline-block relative w-full">
                                    <select
                                        className="block text-sm text-quinary appearance-none w-full py-[18.25px] bg-white border border-gray-200 hover:border-gray-500 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline">
                                        <option>1 Guest</option>
                                        <option>2 Guests</option>
                                        <option>3 Guests</option>
                                        <option>3 Guests</option>
                                    </select>
                                    <div
                                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20">
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 lg:col-span-1">
                            <div className="flex flex-wrap h-full lmd:flex-nowrap md:flex-wrap gap-2">
                                <button
                                    className="hidden lmd:block transition-all bg-white w-full border-2 border-nonary hover:border-neutral-200 text-senary py-1 px-4 rounded">
                                    Clear
                                </button>

                                <button
                                    className="bg-secondary transition-all w-full hover:bg-teal-600 text-white py-2 px-4 rounded">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*second div*/}
                <div
                    className="flex flex-col items-center justify-center mt-[60px] md:mt-[120px] mb-[60px] md:mb-[120px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5 p-5">

                            <div className="sm:max-w-[320px] md:max-w-[240px]">
                                <div className="flex flex-col justify-center items-center sm:gap-5">
                                    <img
                                        className="min-h-[150px] xs:h-[250px] w-full lmd:max-w-[479px] object-cover rounded-t-lg sm:h-[160px] sm:p-2 sm:rounded-lg"
                                        src={Restaurant} alt=""/>

                                    <div
                                        className="flex secdivitem hover:bg-[#1E1E1E] transition-all duration-300 ease-linear flex-col text-center justify-center items-center md:min-h-[240px] p-6 gap-2 bg-white shadow-lg sm:rounded-lg">
                                        <img className="w-16" src={pillow} alt=""/>
                                        <h1 className="font-Milonga text-topictwo text-quinary">Elegant Room</h1>
                                        <p className="font-poppins text-smaller text-senary w-[80%]">Far far away,
                                            behind
                                            the word
                                            mountains, far from the countries
                                            Vokalia.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:max-w-[320px] md:max-w-[240px]">
                                <div className="flex flex-col justify-center items-center sm:gap-5">
                                    <img
                                        className="min-h-[150px] xs:h-[250px] w-full lmd:max-w-[479px] object-cover sm:order-2 sm:h-[160px] sm:p-2 sm:rounded-lg"
                                        src={HotelRoom} alt=""/>

                                    <div
                                        className="flex secdivitem hover:bg-[#1E1E1E] transition-all duration-300 ease-linear flex-col text-center justify-center items-center md:min-h-[240px] p-6 gap-2 bg-white shadow-lg rounded-b-lg sm:rounded-lg">

                                        <img className="w-16" src={Offers} alt=""/>
                                        <h1 className="font-Milonga text-topictwo text-quinary">Special Offers</h1>
                                        <p className="font-poppins text-smaller text-senary w-[80%]">Far far away,
                                            behind
                                            the word
                                            mountains, far from the countries
                                            Vokalia.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex justify-center w-full">
                            <div className="flex flex-col items-start justify-center gap-5 md:gap-0 p-5">
                                <h2 className="font-poppins text-topictwo text-secondary">About Us</h2>
                                <h1 className="font-Milonga text-subtopic md:text-topic text-quinary mt-[-20px] md:mt-0">Unwind
                                    A Hotel <br
                                        className="hidden  md:block"/>Booking System
                                </h1>

                                <p className="font-poppins text-smaller text-senary leading-7 md:mt-10">
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and<br
                                    className="hidden xl:block"/> Consonantia, there live the blind texts. Separated
                                    theylive in Bookmarksgrove right at <br className="hidden xl:block"/> the coast of
                                    the Semantics, a
                                    large language ocean.
                                </p>

                                <button
                                    className="bg-tertiary transition-all hover:bg-secondary text-smaller text-white py-4 px-6 rounded md:mt-10">
                                    BOOK YOUR ROOM NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*third div*/}
                <div className="flex flex-col justify-center items-center mx-auto mb-[60px] md:mb-[120px]">
                    <div className="p-5 text-start lmd:text-center">
                        <h2 className="font-poppins text-secondary text-topictwo">
                            UNWIND SERVICES
                        </h2>
                        <h1 className="font-Milonga text-quinary text-subtopic md:text-topic">Explore Our Hotel
                            Services</h1>
                    </div>

                    <div className="grid grid-cols-1 lmd:grid-cols-2 md:grid-cols-4 gap-2 lg:gap-5 p-5 text-center">

                        <div
                            className="bg-white thirddivitem rounded-lg md:bg-transparent flex flex-col justify-center items-center min-w-[150px] min-h-[150px] md:max-w-[220px] max-h-[220px] font-poppins p-2">
                            <div
                                className="flex justify-center items-center border-2 border-gray-200 hover:shadow-sm rounded-[100px] h-[100px] w-[100px] p-0 lmd:p-5">
                                <img className="w-16 object-cover transition-all" src={BookingIcon} alt=""/>
                            </div>
                            <h1 className="text-senary text-loginpagetopic md:text-topictwo mt-3">Easy Booking</h1>
                            <p className="text-octonary text-smaller md:text-normal w-[80%] md:w-[95%]">
                                A small river named Duden
                                flows by their place
                                and supplies.
                            </p>
                        </div>

                        <div
                            className="bg-white thirddivitem rounded-lg md:bg-transparent flex flex-col justify-center items-center min-w-[150px] min-h-[150px] md:max-w-[220px] max-h-[220px] font-poppins p-2">
                            <div
                                className="flex justify-center items-center border-2 border-gray-200 hover:shadow-sm rounded-[100px] h-[100px] w-[100px] p-0 lmd:p-5">
                                <img className="w-16 object-cover transition-all" src={RestaurantIcon} alt=""/>
                            </div>
                            <h1 className="text-senary text-loginpagetopic md:text-topictwo mt-3">Restaurant</h1>
                            <p className="text-octonary text-smaller md:text-normal w-[80%] md:w-[95%]">
                                A small river named Duden
                                flows by their place
                                and supplies.
                            </p>
                        </div>

                        <div
                            className="bg-white thirddivitem rounded-lg md:bg-transparent flex flex-col justify-center items-center min-w-[150px] min-h-[150px] md:max-w-[220px] max-h-[220px] font-poppins p-2">
                            <div
                                className="flex justify-center items-center border-2 border-gray-200 hover:shadow-sm rounded-[100px] h-[100px] w-[100px] p-0 lmd:p-5">
                                <img className="w-16 object-cover transition-all" src={PoolIcon} alt=""/>
                            </div>
                            <h1 className="text-senary text-loginpagetopic md:text-topictwo mt-3">Swimming Pool</h1>
                            <p className="text-octonary text-smaller md:text-normal w-[80%] md:w-[95%]">
                                A small river named Duden
                                flows by their place
                                and supplies.
                            </p>
                        </div>

                        <div
                            className="bg-white thirddivitem rounded-lg md:bg-transparent flex flex-col justify-center items-center min-w-[150px] min-h-[150px] md:max-w-[220px] max-h-[220px] font-poppins p-2">
                            <div
                                className="flex justify-center items-center border-2 border-gray-200 hover:shadow-sm rounded-[100px] h-[100px] w-[100px] p-0 lmd:p-5">
                                <img className="w-16 object-cover transition-all" src={HelpSupportIcon} alt=""/>
                            </div>
                            <h1 className="text-senary text-loginpagetopic md:text-topictwo mt-3">Help & Support</h1>
                            <p className="text-octonary text-smaller md:text-normal w-[80%] md:w-[95%]">
                                A small river named Duden
                                flows by their place
                                and supplies.
                            </p>
                        </div>

                    </div>
                </div>

                {/*fourth div*/}
                <div
                    className="flex items-center justify-center mx-auto pt-32 pb-32 md:pt-20 md:pb-20 mb-[60px] md:mb-[120px]"
                    style={{
                        background: `url(${FourthDivBGImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 p-5 sm:p-16 gap-5">

                        <div className="flex flex-col justify-center items-start">
                            <h2 className="font-poppins md:text-topictwo text-nonary">FIND BEST HOTEL FOR LEAVING</h2>
                            <h1 className="font-Milonga text-subtopic md:text-topic text-white max-w-[360px] sm:min-w-[320px] md:min-w-[400px] lg:min-w-[500px]">Find
                                the Best Hotel in Your
                                Next Vacation
                            </h1>
                        </div>

                        <div className="flex justify-start items-center sm:justify-end">
                            <button
                                className="bg-secondary hover:bg-teal-600 py-4 px-6 text-smaller rounded text-white animate-pulse transition-all hover:animate-none">
                                BOOK NOW
                            </button>
                        </div>

                    </div>
                </div>


                {/*fifth div*/}
                <div className="flex flex-col items-center justify-center mx-auto mb-[60px] md:mb-[120px]">
                    <div className="text-center">
                        <h2 className="font-poppins text-secondary text-topictwo">OUR ROOMS</h2>
                        <h1 className="font-Milonga text-quinary text-subtopic md:text-topic">Featured Rooms</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">

                        {/*gris items room card*/}
                        <div
                            className="fifthdivitem bg-white flex flex-col justify-between items-center rounded-lg shadow-xl min-w-[150px] md:max-w-[320px] transition-all duration-300 ease-linear hover:bg-[#1E1E1E]">
                            <img className="rounded-sm w-[100%]" src={SuiteRoomImg} alt=""/>

                            <div className="h-full py-5 flex items-center justify-center">
                                <div className="flex flex-col items-center justify-center text-center gap-5">
                                    <h1 className="font-Milonga text-quinary text-subtopic">Suite Room</h1>
                                    <p className="font-poppins text-senary text-smaller w-[85%]">
                                        Far far away, behind the word mountains, far
                                        from the countries Vokalia and Consonantia,
                                        there live the blind texts.
                                    </p>

                                    <div className="flex justify-center items-center font-poppins gap-5">
                                        <h6 className="text-secondary text-normal">$450./NIGHT</h6>
                                        <button
                                            className="bg-secondary text-white text-smaller hover:bg-teal-600 py-2 px-4 rounded">
                                            BOOK NOW
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="fifthdivitem bg-white flex flex-col justify-between items-center rounded-lg shadow-xl min-w-[150px] md:max-w-[320px] transition-all duration-300 ease-linear hover:bg-[#1E1E1E]">
                            <img className="rounded-sm w-[100%] shadow-xl md:order-3" src={FamilyRoomImg} alt=""/>

                            <div className="h-full py-5 flex items-center justify-center">
                                <div className="flex flex-col items-center justify-center text-center gap-5">
                                    <h1 className="font-Milonga text-quinary text-subtopic">Family Room</h1>
                                    <p className="font-poppins text-senary text-smaller w-[85%]">
                                        Far far away, behind the word mountains, far
                                        from the countries Vokalia and Consonantia,
                                        there live the blind texts.
                                    </p>

                                    <div className="flex justify-center items-center font-poppins gap-5">
                                        <h6 className="text-secondary text-normal">$450./NIGHT</h6>
                                        <button
                                            className="bg-secondary text-white text-smaller hover:bg-teal-600 py-2 px-4 rounded">
                                            BOOK NOW
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="fifthdivitem bg-white flex flex-col justify-between items-center rounded-lg shadow-xl min-w-[150px] md:max-w-[320px] transition-all duration-300 ease-linear hover:bg-[#1E1E1E]">
                            <img className="rounded-sm w-[100%]" src={DeluxeRoomImg} alt=""/>

                            <div className="h-full py-5 flex items-center justify-center">
                                <div className="flex flex-col items-center justify-center text-center gap-5">
                                    <h1 className="font-Milonga text-quinary text-subtopic">Deluxe Room</h1>
                                    <p className="font-poppins text-senary text-smaller w-[85%]">
                                        Far far away, behind the word mountains, far
                                        from the countries Vokalia and Consonantia,
                                        there live the blind texts.
                                    </p>

                                    <div className="flex justify-center items-center font-poppins gap-5">
                                        <h6 className="text-secondary text-normal">$450./NIGHT</h6>
                                        <button
                                            className="bg-secondary text-white text-smaller hover:bg-teal-600 py-2 px-4 rounded">
                                            BOOK NOW
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*sixth div*/}
                <div className="flex items-center justify-center mx-auto mb-[60px] md:mb-[120px] pt-16 pb-16"
                     style={{
                         background: `url(${SixthDivBGImg})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center'
                     }}>
                    <div
                        className="grid grid-cols-1 lmd:grid-cols-2 md:grid-cols-4 p-5 gap-2 md:gap-5 xl:gap-16 text-white">
                        <div
                            className="flex flex-col justify-center items-center backdrop-blur-sm shadow-xl rounded-xl hover:shadow-lg p-5 max-h-48 w-[80vw] lmd:w-[40vw] max-w-[300px] md:max-w-[150px] min-w-[100px]">
                            <h1 className="text-subtopic">28,550+</h1>
                            <h4 className="text-smaller text-nonary">Happy Guests</h4>
                        </div>

                        <div
                            className="flex flex-col justify-center items-center backdrop-blur-sm shadow-xl rounded-xl hover:shadow-lg p-5 max-h-48 w-[80vw] lmd:w-[40vw] max-w-[300px] md:max-w-[150px] min-w-[100px]">
                            <h1 className="text-subtopic">250+</h1>
                            <h4 className="text-smaller text-nonary">Happy Guests</h4>
                        </div>

                        <div
                            className="flex flex-col justify-center items-center backdrop-blur-sm shadow-xl rounded-xl hover:shadow-lg p-5 max-h-48 w-[80vw] lmd:w-[40vw] max-w-[300px] md:max-w-[150px] min-w-[100px]">
                            <h1 className="text-subtopic">600+</h1>
                            <h4 className="text-smaller text-nonary">Staffs</h4>
                        </div>

                        <div
                            className="flex flex-col justify-center items-center backdrop-blur-sm shadow-xl rounded-xl hover:shadow-lg p-5 max-h-48 w-[80vw] lmd:w-[40vw] max-w-[300px] md:max-w-[150px] min-w-[100px]">
                            <h1 className="text-subtopic">345+</h1>
                            <h4 className="text-smaller text-nonary">Destination</h4>
                        </div>
                    </div>
                </div>

                {/*seventh div*/}
                <div className="flex flex-col justify-center items-center mx-auto mb-[60px] md:mb-[120px]">
                    <div className="p-5 text-start xs:text-center">
                        <h2 className="font-poppins text-secondary text-topictwo">TESTIMONIAL</h2>
                        <h1 className="font-Milonga text-quinary text-subtopic md:text-topic">Happy Guest Reviews </h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-5 p-5 lg:px-10">

                        <div
                            className="flex flex-col justify-center items-start  p-5 rounded-md bg-white hover:scale-105 lg:min-h-[220px] transition-all duration-300">
                            <div className="flex flex-col gap-3 font-poppins">
                                <div className="flex items-center gap-3">
                                    <img className="w-[80px]" src={FirstManImg} alt=""/>

                                    <div>
                                        <h1 className="text-loginpagetopic md:text-topictwo text-quinary tracking-[2px]">Roger
                                            Scott</h1>
                                        <h6 className="text-smaller text-secondary">Marketing Manager</h6>
                                    </div>
                                </div>

                                <p className="text-smaller text-senary leading-5 w-[95%] max-w-[400px] md:max-w-[305px]">
                                    Far far away, behind the word mountains, far
                                    from the countries Vokalia and Consonantia,
                                    there live the blind texts.
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex flex-col justify-center items-start  p-5 rounded-md bg-white hover:scale-105 lg:min-h-[220px] transition-all duration-300">
                            <div className="flex flex-col gap-3 font-poppins">
                                <div className="flex items-center gap-3">
                                    <img className="w-[80px]" src={SecondManImg} alt=""/>

                                    <div>
                                        <h1 className="text-loginpagetopic md:text-topictwo text-quinary tracking-[2px]">Roger
                                            Scott</h1>
                                        <h6 className="text-smaller text-secondary">Marketing Manager</h6>
                                    </div>
                                </div>

                                <p className="text-smaller text-senary leading-5 w-[95%] max-w-[400px] md:max-w-[305px]">
                                    Far far away, behind the word mountains, far
                                    from the countries Vokalia and Consonantia,
                                    there live the blind texts.
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex flex-col justify-center items-start  p-5 rounded-md bg-white hover:scale-105 lg:min-h-[220px] transition-all duration-300">
                            <div className="flex flex-col gap-3 font-poppins">
                                <div className="flex items-center gap-3">
                                    <img className="w-[80px]" src={ThirdManImg} alt=""/>

                                    <div>
                                        <h1 className="text-loginpagetopic md:text-topictwo text-quinary tracking-[2px]">Roger
                                            Scott</h1>
                                        <h6 className="text-smaller text-secondary">Marketing Manager</h6>
                                    </div>
                                </div>

                                <p className="text-smaller text-senary leading-5 w-[95%] max-w-[400px] md:max-w-[305px]">
                                    Far far away, behind the word mountains, far
                                    from the countries Vokalia and Consonantia,
                                    there live the blind texts.
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex flex-col justify-center items-start  p-5 rounded-md bg-white hover:scale-105 lg:min-h-[220px] transition-all duration-300">
                            <div className="flex flex-col gap-3 font-poppins">
                                <div className="flex items-center gap-3">
                                    <img className="w-[80px]" src={SecondManImg} alt=""/>

                                    <div>
                                        <h1 className="text-loginpagetopic md:text-topictwo text-quinary tracking-[2px]">Roger
                                            Scott</h1>
                                        <h6 className="text-smaller text-secondary">Marketing Manager</h6>
                                    </div>
                                </div>

                                <p className="text-smaller text-senary leading-5 w-[95%] max-w-[400px] md:max-w-[305px]">
                                    Far far away, behind the word mountains, far
                                    from the countries Vokalia and Consonantia,
                                    there live the blind texts.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/*gallery*/}
                <div className="hidden md:flex justify-center items-center object-cover">
                    <div className="flex flex-col justify-center items-center gap-2 p-2 m-auto">
                        <div>
                            <img className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                                 src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                                 alt=""/>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
                                    alt="gallery-image"/>
                            </div>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
                                    alt="gallery-image"/>
                            </div>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
                                    alt="gallery-image"/>
                            </div>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
                                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
                                    alt="gallery-image"/>
                            </div>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
                                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
                                    alt="gallery-image"/>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 p-2 m-auto">
                        <div>
                            <img className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                                 src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                                 alt=""/>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
                                    alt="gallery-image"/>
                            </div>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
                                    alt="gallery-image"/>
                            </div>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
                                    alt="gallery-image"/>
                            </div>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
                                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
                                    alt="gallery-image"/>
                            </div>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
                                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
                                    alt="gallery-image"/>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 p-2 m-auto">
                        <div>
                            <img className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                                 src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                                 alt=""/>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
                                    alt="gallery-image"/>
                            </div>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
                                    alt="gallery-image"/>
                            </div>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
                                    alt="gallery-image"/>
                            </div>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
                                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
                                    alt="gallery-image"/>
                            </div>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
                                    className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
                                    alt="gallery-image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
