import React, {Component} from 'react';
import bannerBackgroundImg from '../../../images/banner.png'
import pillow from '../../../images/HomePage/FirstDiv/pillow.png'
import Offers from '../../../images/HomePage/FirstDiv/Offers.png'
import Restaurant from '../../../images/HomePage/FirstDiv/Restaurant.png'
import HotelRoom from '../../../images/HomePage/FirstDiv/HotelRoom.png'

export class Home extends Component {
    render() {
        const backgroundStyle = {
            backgroundImage: `url(${bannerBackgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        };

        return (
            <>
                {/*Banner*/}
                <div className="flex flex-col items-center justify-center w-full h-[750px] rounded-b-3xl bg-cover bg-center"
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
                </div>

                {/*first div*/}
                <div className="h-44 hidden flex items-center justify-center w-max gap-2 m-auto mt-[-4%] bg-white rounded-3xl shadow-xl p-10">
                    <div className="flex items-center justify-center gap-5 p-5 font-poppins">
                        <div>
                            <label className="block text-quinary text-sm font-bold mb-2" htmlFor="username">
                                Check-In Date
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
                                <div className="flex flex-col text-center justify-center items-center gap-2 w-[240px] h-[240px] bg-white shadow-lg rounded-lg hover:bg-primary">
                                    <img className="w-16" src={pillow} alt=""/>
                                    <h1 className="font-Milonga text-topictwo text-quinary">Cozy Room</h1>
                                    <p className="font-poppins text-smaller text-senary w-[80%]">Far far away, behind the word
                                        mountains, far from the countries
                                        Vokalia.</p>
                                </div>

                                <img className="w-[240px] p-2 drop-shadow-lg object-cover" src={Restaurant} alt=""/>
                            </div>

                            <div className="flex flex-col justify-center items-center gap-5">
                                <img className="w-[240px] p-2 drop-shadow-lg object-cover" src={HotelRoom} alt=""/>

                                <div className="flex flex-col text-center justify-center items-center gap-2 w-[240px] h-[240px] bg-white shadow-lg rounded-lg hover:bg-primary">
                                    <img className="w-16" src={Offers} alt=""/>
                                    <h1 className="font-Milonga text-topictwo text-quinary">Special Offers</h1>
                                    <p className="font-poppins text-smaller text-senary w-[80%]">Far far away, behind the word
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

                            <button className="bg-tertiary hover:bg-secondary text-smaller text-white py-4 px-6 rounded mt-10">
                                BOOK YOUR ROOM NOW
                            </button>
                        </div>
                    </div>
                </div>

                {/*third div*/}
                <div className="flex justify-center items-center mb-[120px] bg-nonary">
                    <div className="flex flex-col justify-center items-center gap-10 bg-octonary">
                        <div className="p-5 bg-white text-center">
                            <h2 className="font-poppins text-secondary text-topictwo">UNWIND SERVICES</h2>
                            <h1 className="font-Milonga text-quinary text-topic">Explore Our Hotel Services</h1>
                        </div>

                        <div className="bg-nonary flex justify-center items-center gap-5 p-5">
                            <div className="flex justify-center items-center w-[160px] h-[200px] bg-white">
                                <img src="" alt=""/>
                                <h1></h1>
                                <p></p>
                            </div>

                            <div className="flex justify-center items-center w-[160px] h-[200px] bg-white">
                                <img src="" alt=""/>
                                <h1></h1>
                                <p></p>
                            </div>

                            <div className="flex justify-center items-center w-[160px] h-[200px] bg-white">
                                <img src="" alt=""/>
                                <h1></h1>
                                <p></p>
                            </div>

                            <div className="flex justify-center items-center w-[160px] h-[200px] bg-white">
                                <img src="" alt=""/>
                                <h1></h1>
                                <p></p>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="w-7/12 h-40 mt-16 bg-stone-700">s</div>
            </>
        );
    }
}