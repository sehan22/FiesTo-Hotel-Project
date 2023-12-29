import React, {Component} from 'react';
import bannerBackgroundImg from '../../../images/banner.png'

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
                <div className="flex flex-col items-center justify-center w-full h-[800px] bg-cover bg-center"
                     style={{
                         backgroundImage: `url(${bannerBackgroundImg})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center'
                     }}>
                    <h1 className="font-Milonga text-bannertopic text-white">Welcome To FiesTo</h1>
                    <div className="flex items-center justify-center gap-4 p-2 ">
                        <div className="h-0.5 bg-septenary w-32"></div>
                        <h6 className="font-poppins text-subtopic text-nonary">Join With Us</h6>
                        <div className="h-0.5 bg-septenary w-32"></div>
                    </div>
                </div>

                {/*first div*/}
                <div
                    className="h-44 flex items-center justify-center w-max gap-2 m-auto mt-[-4%] bg-white rounded-3xl shadow-xl p-10">
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

                    <div className="flex flex-col gap-2 text-normal">
                        <button className="bg-white border-2 border-nonary hover:border-neutral-200 text-senary py-2 px-4 rounded">
                            Clear
                        </button>
                        <button className="bg-secondary hover:bg-teal-600 text-white py-2 px-4 rounded">
                            Search
                        </button>
                    </div>
                </div>

                {/*second div*/}
                <div className="mt-[120px] mb-[120px] h-80 bg-teal-600"></div>









                <div className="w-7/12 h-40 mt-16 bg-stone-700">s</div>
            </>
        );
    }
}