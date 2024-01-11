import React, {Component} from 'react';
import bannerBackgroundImg from "../../../images/ContactPage/bgimg.png"
import LocationIcon from '../../../images/ContactPage/location.png'
import EmailIcon from '../../../images/ContactPage/email.png'
import PhoneIcon from '../../../images/ContactPage/phone.png'
import WorkinghoursIcon from '../../../images/ContactPage/workinghours.png'

export class Contact extends Component {
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
                    <h1 className="font-Milonga text-topic md:text-bannertopic text-white p-2">Contact Us</h1>
                    <div className="flex flex-col lmd:items-center lmd:justify-center gap-4 p-2 ">
                        <div className="h-0.5 opacity-50 bg-septenary w-44"></div>
                        <h6 className="font-poppins text-topictwo md:text-subtopic text-nonary">Join With Us</h6>
                        <div className="hidden lmd:block h-0.5 opacity-50 bg-septenary w-32"></div>
                    </div>
                </div>

                {/*first div*/}
                <div
                    className="flex items-center justify-center mx-auto transition-all mb-[60px] md:mb-[120px] mt-[60px] md:mt-[120px]">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-5 lg:gap-16 lmd:w-full md:w-auto">

                        {/*Contact Info*/}
                        <div className="grid grid-cols-1 gap-2 md:gap-5 p-5">

                            <div className="flex flex-col justify-center items-start max-w-[400px]">
                                <h1 className="font-Milonga text-quinary text-subtopic md:text-topic">
                                    <dfn id="dropDownIcon" className="not-italic">Contact Info</dfn>
                                </h1>

                                <p className="font-poppins text-senary text-smaller md:text-normal w- max-w-[330px]">
                                    If you have any questions or inquiries,
                                    feel free to reach out to us. We're here
                                    to help!
                                </p>
                            </div>

                            <div
                                className="flex items-center justify-start p-3 bg-white w-full max-w-[400px] lmd:min-w-full lmd:max-w-[330px] rounded-lg">
                                <div className="flex justify-center items-center gap-2">
                                    <img className="w-[80px]" src={PhoneIcon} alt=""/>

                                    <div
                                        className="flex flex-col items-start gap-1 justify-center font-poppins">
                                        <h5 className="text-normal text-quinary font-bold">Phone</h5>
                                        <p className="text-smaller text-senary">
                                            + 94 71 24 00 165(Whatsapp)
                                            <br/>
                                            + 94 71 24 00 165
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="flex items-center justify-start p-3 bg-white w-full max-w-[400px] lmd:min-w-full lmd:max-w-[330px] rounded-lg">
                                <div className="flex justify-center items-center gap-2">
                                    <img className="w-[80px]" src={LocationIcon} alt=""/>

                                    <div
                                        className="flex flex-col items-start gap-1 justify-center font-poppins">
                                        <h5 className="text-normal text-quinary font-bold">Location</h5>
                                        <p className="text-smaller text-senary">
                                            Fiesto Hotel & Restaurant
                                            <br/>
                                            123 Main Street, Colombo, Sri Lanka.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="flex items-center justify-start p-3 bg-white w-full max-w-[400px] lmd:min-w-full lmd:max-w-[330px] rounded-lg">
                                <div className="flex justify-center items-center gap-2">
                                    <img className="w-[80px]" src={WorkinghoursIcon} alt=""/>

                                    <div
                                        className="flex flex-col items-start gap-1 justify-center font-poppins">
                                        <h5 className="text-normal text-quinary font-bold">Operating Hours</h5>
                                        <p className="text-smaller text-senary">
                                            Monday - Sunday: 8:00
                                            <br/>
                                            to 10:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="flex items-center justify-start p-3 bg-white w-full max-w-[400px] lmd:min-w-full lmd:max-w-[330px] rounded-lg">
                                <div className="flex justify-center items-center gap-2">
                                    <img className="w-[80px]" src={EmailIcon} alt=""/>

                                    <div
                                        className="flex flex-col items-start gap-1 justify-center font-poppins">
                                        <h5 className="text-normal text-quinary font-bold">Email</h5>
                                        <p className="text-smaller text-senary w-full">
                                            info@fiesto.com
                                            <br/>
                                            resrvation@fiesto.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/*Contact Form*/}
                        <form className="grid grid-cols-1 gap2 md:gap-5 p-5">
                            <div className="mb-4 max-w-[500px] lmd:min-w-full lg:w-[400px] xl:w-[500px]">
                                <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                </label>
                                <input
                                    id="myInput"
                                    className="bg-transparent bg-white font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                    type="text"
                                    placeholder="Full Name"
                                />
                            </div>

                            <div className="mb-4 max-w-[500px] lmd:min-w-full lg:w-[400px] xl:w-[500px]">
                                <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                </label>
                                <input
                                    id="myInput"
                                    className="bg-transparent bg-white font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="mb-4 max-w-[500px] lmd:min-w-full lg:w-[400px] xl:w-[500px]">
                                <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                </label>
                                <input
                                    id="myInput"
                                    className="bg-transparent bg-white font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                    type="text"
                                    placeholder="Subject"
                                />
                            </div>

                            <div className="mb-4 max-w-[500px] lmd:min-w-full lg:w-[400px] xl:w-[500px]">
                                <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                </label>
                                <textarea
                                    id="myInput"
                                    className="bg-transparent bg-white font-poppins text-smaller text-quinary rounded-lg focus:outline-none h-52 p-4 w-full"
                                    placeholder="Message"
                                />
                            </div>

                            <div>
                                <button
                                    className="bg-secondary font-bold text-normal transition-all text-white hover:bg-teal-600 py-4 px-4 w-full rounded">
                                    SUBMIT
                                </button>
                            </div>
                        </form>

                    </div>

                </div>
            </>
        );
    }
}
