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
                {/*Banner*/}
                <div
                    className="flex flex-col items-center justify-center w-full h-[800px] rounded-b-3xl bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bannerBackgroundImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    <h1 className="font-Milonga text-bannertopic text-white">Welcome To FiesTo</h1>
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

                {/*first div*/}
                <div
                    className="hidden flex items-center justify-center w-max gap-2 m-auto mt-[-4%] bg-white rounded-3xl shadow-xl p-5">
                    <div className="flex items-center justify-center gap-5 p-5 font-poppins">
                        <div>
                            <label className="block text-quinary text-sm font-bold mb-2" htmlFor="username">
                                <dfn id="dropDownIcon" className="not-italic">Check-In Date</dfn>
                            </label>
                            <input
                                className="appearance-auto border rounded w-full py-4 px-10 text-quinary leading-tight focus:outline-none focus:shadow-sm"
                                id="username" type="date"/>
                        </div>

                        <div>
                            <label className="block text-quinary text-sm font-bold mb-2" htmlFor="username">
                                Check-Out Date
                            </label>
                            <input
                                className="appearance-auto border rounded w-full py-4 px-10 text-quinary leading-tight focus:outline-none focus:shadow-sm"
                                id="username" type="date"/>
                        </div>

                        <div>
                            <h5 className="text-sm font-bold text-quinary mb-[8px] mt-[-2px]">Room</h5>

                            <div className="inline-block relative w-44">
                                <select
                                    className="block text-sm text-quinary appearance-none w-full py-4 bg-white border border-gray-200 hover:border-gray-500 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline">
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

                        <div>
                            <h5 className="text-sm font-bold text-quinary mb-[8px] mt-[-2px]">Guests</h5>

                            <div className="inline-block relative w-16">
                                <select
                                    className="block text-sm text-quinary appearance-none w-full py-4 bg-white border border-gray-200 hover:border-gray-500 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
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

                    <div className="flex flex-col gap-2 text-normal pr-5">
                        <button
                            className="bg-white border-2 border-nonary hover:border-neutral-200 text-senary py-2 px-4 rounded">
                            Clear
                        </button>
                        <button className="bg-secondary hover:bg-teal-600 text-white py-2 px-4 rounded">
                            Search
                        </button>
                    </div>
                </div>

                {/*second div*/}
                <div className="mt-[120px] mb-[120px] flex justify-center items-center">
                    <div className="flex flex-wrap justify-center items-center gap-10">
                        <div className="flex justify-center items-center gap-5 p-5">
                            <div className="flex flex-col justify-center items-center gap-5">
                                <div
                                    className="flex flex-col text-center justify-center items-center gap-2 w-[240px] h-[240px] bg-white shadow-lg rounded-lg hover:bg-primary">
                                    <img className="w-16" src={pillow} alt=""/>
                                    <h1 className="font-Milonga text-topictwo text-quinary">Cozy Room</h1>
                                    <p className="font-poppins text-smaller text-senary w-[80%]">Far far away, behind
                                        the word
                                        mountains, far from the countries
                                        Vokalia.</p>
                                </div>

                                <img className="w-[240px] p-2 drop-shadow-lg object-cover" src={Restaurant} alt=""/>
                            </div>

                            <div className="flex flex-col justify-center items-center gap-5">
                                <img className="w-[240px] p-2 drop-shadow-lg object-cover" src={HotelRoom} alt=""/>

                                <div
                                    className="flex flex-col text-center justify-center items-center gap-2 w-[240px] h-[240px] bg-white shadow-lg rounded-lg hover:bg-primary">
                                    <img className="w-16" src={Offers} alt=""/>
                                    <h1 className="font-Milonga text-topictwo text-quinary">Special Offers</h1>
                                    <p className="font-poppins text-smaller text-senary w-[80%]">Far far away, behind
                                        the word
                                        mountains, far from the countries
                                        Vokalia.</p>
                                </div>

                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-center p-5">
                            <h2 className="font-poppins text-topictwo text-secondary">About Us</h2>
                            <h1 className="font-Milonga text-topic text-quinary">Unwind A Hotel<br/>Booking System</h1>

                            <p className="font-poppins text-normal text-senary w-96 mt-10 leading-7">
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts. Separated
                                theylive in Bookmarksgrove right at the coast of the Semantics, a
                                large language ocean.
                            </p>

                            <button
                                className="bg-tertiary hover:bg-secondary text-smaller text-white py-4 px-6 rounded mt-10">
                                BOOK YOUR ROOM NOW
                            </button>
                        </div>
                    </div>
                </div>

                {/*third div*/}
                <div className="flex justify-center items-center mb-[120px]">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <div className="p-5 text-center">
                            <h2 className="font-poppins text-secondary text-topictwo">
                                UNWIND SERVICES
                            </h2>
                            <h1 className="font-Milonga text-quinary text-topic">Explore Our Hotel Services</h1>
                        </div>

                        <div className="flex flex-wrap justify-center items-center text-center gap-5 p-5">
                            <div
                                className="flex flex-col justify-center items-center w-[210px] h-[220px] font-poppins p-2">
                                <div
                                    className="flex justify-center items-center border-2 border-gray-200 hover:shadow-sm rounded-[100px] h-[100px] w-[100px] p-5">
                                    <img className="w-16 object-cover" src={BookingIcon} alt=""/>
                                </div>
                                <h1 className="text-senary text-topictwo mt-3">Easy Booking</h1>
                                <p className="text-octonary text-normal">
                                    A small river named Duden
                                    flows by their place
                                    and supplies.
                                </p>
                            </div>

                            <div
                                className="flex flex-col justify-center items-center w-[210px] h-[220px] font-poppins p-2">
                                <div
                                    className="flex justify-center items-center border-2 border-gray-200 hover:shadow-sm rounded-[100px] h-[100px] w-[100px] p-5">
                                    <img className="w-16 object-cover" src={RestaurantIcon} alt=""/>
                                </div>
                                <h1 className="text-senary text-topictwo mt-3">Restaurant</h1>
                                <p className="text-octonary text-normal">
                                    A small river named Duden
                                    flows by their place
                                    and supplies.
                                </p>
                            </div>

                            <div
                                className="flex flex-col justify-center items-center w-[210px] h-[220px] font-poppins p-2">
                                <div
                                    className="flex justify-center items-center border-2 border-gray-200 hover:shadow-sm rounded-[100px] h-[100px] w-[100px] p-5">
                                    <img className="w-16 object-cover" src={PoolIcon} alt=""/>
                                </div>
                                <h1 className="text-senary text-topictwo mt-3">Swimming Pool</h1>
                                <p className="text-octonary text-normal">
                                    A small river named Duden
                                    flows by their place
                                    and supplies.
                                </p>
                            </div>

                            <div
                                className="flex flex-col justify-center items-center w-[210px] h-[220px] font-poppins p-2">
                                <div
                                    className="flex justify-center items-center border-2 border-gray-200 hover:shadow-sm rounded-[100px] h-[100px] w-[100px] p-5">
                                    <img className="w-16 object-cover" src={HelpSupportIcon} alt=""/>
                                </div>
                                <h1 className="text-senary text-topictwo mt-3">Help & Support</h1>
                                <p className="text-octonary text-normal">
                                    A small river named Duden
                                    flows by their place
                                    and supplies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*fourth div*/}
                <div className="flex justify-center items-center p-16 mb-[120px] " style={{
                    background: `url(${FourthDivBGImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <div className="flex flex-wrap justify-center items-center gap-10 text-white p-5">
                        <div className="flex flex-col justify-center items-start">
                            <h2 className="font-poppins text-topictwo">FIND BEST HOTEL FOR LEAVING</h2>
                            <h1 className="font-Milonga text-topic w-[500px]">Find the Best Hotel in Your
                                Next Vacation
                            </h1>
                        </div>

                        <div className="flex justify-center items-center">
                            <button
                                className="bg-secondary hover:bg-teal-600 py-4 px-6 text-smaller rounded animate-bounce">
                                BOOK NOW
                            </button>
                        </div>
                    </div>
                </div>

                {/*fifth div*/}
                <div className="flex items-center justify-center mt-[120px]">
                    <div className="flex flex-col gap-10 justify-center items-center">
                        <div className="flex flex-col justify-center items-center p-5">
                            <h2 className="font-poppins text-secondary text-topictwo">OUR ROOMS</h2>
                            <h1 className="font-Milonga text-quinary text-topic">Featured Rooms</h1>
                        </div>

                        <div className="flex flex-wrap justify-center items-center p-5 gap-5">
                            <div
                                className="bg-white flex flex-col justify-between items-center rounded-lg shadow-xl w-[320px] h-[430px] hover:bg-primary">
                                <img className="rounded-sm w-[100%]" src={SuiteRoomImg} alt=""/>

                                <div className="h-full flex items-center justify-center">
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
                                className="bg-white flex flex-col justify-between items-center rounded-lg shadow-xl w-[320px] h-[430px] hover:bg-primary">
                                <div className="h-full flex items-center justify-center">
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

                                <img className="rounded-sm w-[100%] shadow-xl" src={FamilyRoomImg} alt=""/>
                            </div>

                            <div
                                className="bg-white flex flex-col justify-between items-center rounded-lg shadow-xl w-[320px] h-[430px] hover:bg-primary">
                                <img className="rounded-sm w-[100%]" src={DeluxeRoomImg} alt=""/>

                                <div className="h-full flex items-center justify-center">
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
                </div>

                {/*sixth div*/}
                <div className="flex justify-center items-center p-16 mt-[120px] mb-[120px]" style={{
                    background: `url(${SixthDivBGImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div className="flex flex-wrap items-center justify-center text-white font-poppins gap-20 p-5">
                        <div
                            className="flex flex-col justify-center items-center backdrop-blur-sm shadow-xl rounded-xl hover:shadow-lg p-5 w-[150px]">
                            <h1 className="text-subtopic">28,550+</h1>
                            <h4 className="text-smaller text-nonary">Happy Guests</h4>
                        </div>

                        <div
                            className="flex flex-col justify-center items-center backdrop-blur-sm shadow-xl rounded-xl hover:shadow-lg p-5 w-[150px]">
                            <h1 className="text-subtopic">250+</h1>
                            <h4 className="text-smaller text-nonary">Happy Guests</h4>
                        </div>

                        <div
                            className="flex flex-col justify-center items-center backdrop-blur-sm shadow-xl rounded-xl hover:shadow-lg p-5 w-[150px]">
                            <h1 className="text-subtopic">600+</h1>
                            <h4 className="text-smaller text-nonary">Staffs</h4>
                        </div>

                        <div
                            className="flex flex-col justify-center items-center backdrop-blur-sm shadow-xl rounded-xl hover:shadow-lg p-5 w-[150px]">
                            <h1 className="text-subtopic">345+</h1>
                            <h4 className="text-smaller text-nonary">Destination</h4>
                        </div>
                    </div>
                </div>

                {/*seventh div*/}
                <div className="flex justify-center items-center mb-[120px]">
                    <div className="flex flex-col flex-wrap justify-center items-center gap-10">
                        <div className="flex flex-col justify-center items-center p-5">
                            <h2 className="font-poppins text-secondary text-topictwo">TESTIMONIAL</h2>
                            <h1 className="font-Milonga text-quinary text-topic">Happy Guest Reviews</h1>
                        </div>

                        <div className="flex flex-wrap items-center justify-center p-5 gap-8">
                            <div
                                className="flex flex-col justify-center items-start w-[320px] h-[220px] p-5 rounded-md bg-white hover:scale-105">
                                <div className="flex flex-col gap-3 font-poppins">
                                    <div className="flex items-center gap-3">
                                        <img className="w-[80px]" src={FirstManImg} alt=""/>

                                        <div>
                                            <h1 className="text-topictwo text-quinary tracking-[2px]">Roger Scott</h1>
                                            <h6 className="text-smaller text-secondary">Marketing Manager</h6>
                                        </div>
                                    </div>

                                    <p className="text-smaller text-senary leading-5">
                                        Far far away, behind the word mountains, far
                                        from the countries Vokalia and Consonantia,
                                        there live the blind texts.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="flex flex-col justify-center items-start w-[320px] h-[220px] p-5 rounded-md bg-white hover:scale-105">
                                <div className="flex flex-col gap-3 font-poppins">
                                    <div className="flex items-center gap-3">
                                        <img className="w-[80px]" src={SecondManImg} alt=""/>

                                        <div>
                                            <h1 className="text-topictwo text-quinary tracking-[2px]">Roger Scott</h1>
                                            <h6 className="text-smaller text-secondary">Marketing Manager</h6>
                                        </div>
                                    </div>

                                    <p className="text-smaller text-senary leading-5">
                                        Far far away, behind the word mountains, far
                                        from the countries Vokalia and Consonantia,
                                        there live the blind texts.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="flex flex-col justify-center items-start w-[320px] h-[220px] p-5 rounded-md bg-white hover:scale-105">
                                <div className="flex flex-col gap-3 font-poppins">
                                    <div className="flex items-center gap-3">
                                        <img className="w-[80px]" src={ThirdManImg} alt=""/>

                                        <div>
                                            <h1 className="text-topictwo text-quinary tracking-[2px]">Roger Scott</h1>
                                            <h6 className="text-smaller text-secondary">Marketing Manager</h6>
                                        </div>
                                    </div>

                                    <p className="text-smaller text-senary leading-5">
                                        Far far away, behind the word mountains, far
                                        from the countries Vokalia and Consonantia,
                                        there live the blind texts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*gallery*/}
                <div className="flex justify-center items-center object-cover">
                    <div className="flex flex-col justify-center items-center gap-5 p-5 m-auto">
                        <div>
                            <img className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                                 src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                                 alt=""/>
                        </div>
                        <div className="flex justify-center items-center gap-4">
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
                    <div className="flex flex-col justify-center items-center gap-5 p-5 m-auto">
                        <div>
                            <img className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                                 src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                                 alt=""/>
                        </div>
                        <div className="flex justify-center items-center gap-4">
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
                    <div className="flex flex-col justify-center items-center gap-5 p-5 m-auto">
                        <div>
                            <img className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                                 src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                                 alt=""/>
                        </div>
                        <div className="flex justify-center items-center gap-4">
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