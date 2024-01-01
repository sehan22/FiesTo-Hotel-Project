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
                    className="flex flex-col items-center justify-center w-full h-[800px] rounded-b-3xl bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bannerBackgroundImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    <h1 className="font-Milonga text-bannertopic text-white">Contact Us</h1>
                    <div className="flex items-center justify-center gap-4 p-2 ">
                        <div className="h-0.5 opacity-50 bg-septenary w-32"></div>
                        <h6 className="font-poppins text-subtopic text-nonary">Join With Us</h6>
                        <div className="h-0.5 opacity-50 bg-septenary w-32"></div>
                    </div>
                </div>

                {/*first div*/}
                <div className="flex items-center justify-center mt-[120px] mb-[120px]">
                    <div className="flex flex-wrap items-center justify-center gap-5">{/*remove padding*/}

                        <div className="flex flex-col items-start justify-center gap-5 p-5">
                            <div className="flex flex-col justify-center items-start">
                                <h1 className="font-Milonga text-quinary text-topic">Contact Us</h1>

                                <p className="font-poppins text-senary text-normal w-[300px]">
                                    If you have any questions or inquiries,
                                    feel free to reach out to us. We're here
                                    to help!
                                </p>
                            </div>

                            <div className="flex flex-col justify-center items-start gap-3">
                                <div className="flex items-center justify-center p-3 bg-white rounded-lg">
                                    <div className="flex justify-center items-center gap-2">
                                        <img className="w-[80px]" src={PhoneIcon} alt=""/>

                                        <div
                                            className="flex flex-col items-start gap-1 justify-center w-64 font-poppins">
                                            <h5 className="text-normal text-quinary font-bold">Phone</h5>
                                            <p className="text-smaller text-senary">
                                                + 94 71 24 00 165(Whatsapp)
                                                <br/>
                                                + 94 71 24 00 165
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center p-3 bg-white rounded-lg">
                                    <div className="flex justify-center items-center gap-2">
                                        <img className="w-[80px]" src={LocationIcon} alt=""/>

                                        <div
                                            className="flex flex-col items-start gap-1 justify-center w-64 font-poppins">
                                            <h5 className="text-normal text-quinary font-bold">Location</h5>
                                            <p className="text-smaller text-senary">
                                                Fiesto Hotel & Restaurant
                                                <br/>
                                                123 Main Street, Colombo, Sri Lanka.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center p-3 bg-white rounded-lg">
                                    <div className="flex justify-center items-center gap-2">
                                        <img className="w-[80px]" src={WorkinghoursIcon} alt=""/>

                                        <div
                                            className="flex flex-col items-start gap-1 justify-center w-64 font-poppins">
                                            <h5 className="text-normal text-quinary font-bold">Operating Hours</h5>
                                            <p className="text-smaller text-senary">
                                                Monday - Sunday: 8:00
                                                <br/>
                                                to 10:00 PM
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center p-3 bg-white rounded-lg">
                                    <div className="flex justify-center items-center gap-2">
                                        <img className="w-[80px]" src={EmailIcon} alt=""/>

                                        <div
                                            className="flex flex-col items-start gap-1 justify-center w-64 font-poppins">
                                            <h5 className="text-normal text-quinary font-bold">Email</h5>
                                            <p className="text-smaller text-senary">
                                                reservations@fiestohotel.com
                                                <br/>
                                                info@fiestohotel.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*hr line from div*/}
                        <div className="h-96 w-0.5 bg-opacity-10 bg-octonary ms-10 me-10"></div>

                        <div className="flex flex-col items-center justify-center gap-5 p-5 bg-nonary">
                            <form className="flex flex-col justify-center items-center gap-5">
                                <div className="mb-4">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-white font-poppins text-smaller text-quinary rounded-lg focus:outline-none w-[500px] p-4"
                                        type="text"
                                        placeholder="Full Name"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-white font-poppins text-smaller text-quinary rounded-lg focus:outline-none w-[500px] p-4"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-white font-poppins text-smaller text-quinary rounded-lg focus:outline-none w-[500px] p-4"
                                        type="text"
                                        placeholder="Subject"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <textarea
                                        id="myInput"
                                        className="bg-transparent bg-white font-poppins text-smaller text-quinary rounded-lg focus:outline-none w-[500px] h-52 p-4"
                                        placeholder="Message"
                                    />
                                </div>
                            </form>

                            <div className="flex w-full">
                                <button
                                    className="bg-secondary font-bold text-normal text-white hover:bg-teal-600 py-4 px-4 w-full rounded">
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}