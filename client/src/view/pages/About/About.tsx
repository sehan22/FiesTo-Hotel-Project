import React, {Component} from 'react';
import bannerBackgroundImg from "../../../images/RoomsPage/bgimg.png";
import FirstDivImg from "../../../images/AboutPage/firstdivimg1.png";

export class About extends Component {
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
                    <h1 className="font-Milonga text-topic md:text-bannertopic text-white p-2">About Fiesto Hotel</h1>
                    <div className="flex flex-col lmd:items-center lmd:justify-center gap-4 p-2 ">
                        <div className="h-0.5 opacity-50 bg-septenary w-44"></div>
                        <h6 className="font-poppins text-topictwo md:text-subtopic text-nonary">Join With Us</h6>
                        <div className="hidden lmd:block h-0.5 opacity-50 bg-septenary w-32"></div>
                    </div>
                </div>

                {/*first div*/}
                <div className="flex flex-wrap justify-center items-center mt-[120px] gap-2 mb-[120px]">
                    <div className="p-5">
                        <img className='w-[800px]' src={FirstDivImg} alt=""/>
                    </div>

                    <div className="p-5">
                        <h1 className="font-Milonga text-quinary text-topic">
                            <dfn id="dropDownIcon" className="not-italic">About Fiesto Hotel & Restaurant</dfn>
                        </h1>

                        <p className="font-poppins text-normal mt-10 text-senary w-[550px] leading-8">
                            Welcome to Fiesto, where culinary excellence
                            meets unparalleled hospitality.
                            Nestled in the
                            heart of [City/Area], Fiesto Hotel & Restaurant
                            is more than just a place to stay and dine;
                            it's an experience crafted with passion and a
                            commitment to creating lasting memories.
                        </p>

                        <button
                            className="bg-tertiary hover:bg-secondary text-smaller text-white py-4 px-6 rounded mt-10 animate-pulse hover:animate-none">
                            BOOK YOUR ROOM NOW
                        </button>
                    </div>
                </div>

                {/*second div*/}
                <div className="flex justify-center items-center mt-[120px] gap-2 mb-[120px]">
                    <div className="flex flex-wrap p-5 gap-5 w-[70%] justify-center items-start">
                        <div className="flex flex-col gap-5">
                            <div
                                className="flex flex-col justify-center gap-5 items-start bg-white font-poppins p-10 hover:shadow-md hover:transition-shadow rounded-lg">
                                <h1 className="text-topictwo text-quinary font-semibold">Our Story</h1>
                                <p className="text-normal text-senary w-96">
                                    At Fiesto, we believe in the art of celebration,
                                    and every moment spent with us is a celebration
                                    in itself. Our journey began with a vision to
                                    redefine hospitality, blending modern luxury with
                                    traditional warmth. Over the years, we've evolved
                                    into a destination where guests feel not just
                                    welcomed but embraced.
                                </p>
                                <div className="flex justify-center items-center gap-2">
                                    <h6 className="text-topicDescription text-quinary">Read more</h6>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 6 6"
                                         fill="none">
                                        <path
                                            d="M5.96248 2.81322C5.93867 2.75181 5.90297 2.69572 5.85743 2.64815L3.35639 0.147107C3.30976 0.100468 3.25439 0.0634727 3.19345 0.038232C3.13252 0.0129914 3.0672 0 3.00125 0C2.86804 0 2.74029 0.052916 2.6461 0.147107C2.59946 0.193746 2.56246 0.249114 2.53722 0.31005C2.51198 0.370986 2.49899 0.436298 2.49899 0.502255C2.49899 0.635461 2.55191 0.763211 2.6461 0.857402L4.29679 2.50309H0.500208C0.367544 2.50309 0.240315 2.55579 0.146508 2.64959C0.0527004 2.7434 0 2.87063 0 3.00329C0 3.13596 0.0527004 3.26319 0.146508 3.35699C0.240315 3.4508 0.367544 3.5035 0.500208 3.5035H4.29679L2.6461 5.14919C2.59922 5.19569 2.562 5.25101 2.53661 5.31196C2.51121 5.37292 2.49814 5.4383 2.49814 5.50433C2.49814 5.57037 2.51121 5.63575 2.53661 5.6967C2.562 5.75766 2.59922 5.81298 2.6461 5.85948C2.6926 5.90636 2.74792 5.94358 2.80888 5.96897C2.86983 5.99437 2.93521 6.00744 3.00125 6.00744C3.06728 6.00744 3.13266 5.99437 3.19362 5.96897C3.25457 5.94358 3.30989 5.90636 3.35639 5.85948L5.85743 3.35844C5.90297 3.31087 5.93867 3.25477 5.96248 3.19337C6.01251 3.07159 6.01251 2.935 5.96248 2.81322Z"
                                            fill="#4E4E50"/>
                                    </svg>
                                </div>
                            </div>

                            <div
                                className="flex flex-col justify-center gap-5 items-start bg-white font-poppins p-10 hover:shadow-md hover:transition-shadow rounded-lg">
                                <h1 className="text-topictwo text-quinary font-semibold">Exceptional Hospitality
                                </h1>
                                <p className="text-normal text-senary w-96">
                                    Our team is at the heart of what makes Fiesto
                                    exceptional. Passionate about service, our staff is
                                    committed to ensuring your stay is seamless and
                                    memorable. Whether it's a relaxing weekend
                                    getaway or a grand event, we are here to your every need.
                                </p>
                                <div className="flex justify-center items-center gap-2">
                                    <h6 className="text-topicDescription text-quinary">Read more</h6>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 6 6"
                                         fill="none">
                                        <path
                                            d="M5.96248 2.81322C5.93867 2.75181 5.90297 2.69572 5.85743 2.64815L3.35639 0.147107C3.30976 0.100468 3.25439 0.0634727 3.19345 0.038232C3.13252 0.0129914 3.0672 0 3.00125 0C2.86804 0 2.74029 0.052916 2.6461 0.147107C2.59946 0.193746 2.56246 0.249114 2.53722 0.31005C2.51198 0.370986 2.49899 0.436298 2.49899 0.502255C2.49899 0.635461 2.55191 0.763211 2.6461 0.857402L4.29679 2.50309H0.500208C0.367544 2.50309 0.240315 2.55579 0.146508 2.64959C0.0527004 2.7434 0 2.87063 0 3.00329C0 3.13596 0.0527004 3.26319 0.146508 3.35699C0.240315 3.4508 0.367544 3.5035 0.500208 3.5035H4.29679L2.6461 5.14919C2.59922 5.19569 2.562 5.25101 2.53661 5.31196C2.51121 5.37292 2.49814 5.4383 2.49814 5.50433C2.49814 5.57037 2.51121 5.63575 2.53661 5.6967C2.562 5.75766 2.59922 5.81298 2.6461 5.85948C2.6926 5.90636 2.74792 5.94358 2.80888 5.96897C2.86983 5.99437 2.93521 6.00744 3.00125 6.00744C3.06728 6.00744 3.13266 5.99437 3.19362 5.96897C3.25457 5.94358 3.30989 5.90636 3.35639 5.85948L5.85743 3.35844C5.90297 3.31087 5.93867 3.25477 5.96248 3.19337C6.01251 3.07159 6.01251 2.935 5.96248 2.81322Z"
                                            fill="#4E4E50"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div
                                className="flex flex-col justify-center gap-5 items-start bg-white font-poppins p-10 hover:shadow-md hover:transition-shadow rounded-lg">
                                <h1 className="text-topictwo text-quinary font-semibold">Join Us in Celebration</h1>
                                <p className="text-normal text-senary w-96">
                                    We invite you to be a part of the Fiesto
                                    experience. Whether it's a stay at our luxurious
                                    hotel, a culinary adventure, or hosting your
                                    special event with us, Fiesto is where moments
                                    become memories.
                                </p>
                                <div className="flex justify-center items-center gap-2">
                                    <h6 className="text-topicDescription text-quinary">Read more</h6>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 6 6"
                                         fill="none">
                                        <path
                                            d="M5.96248 2.81322C5.93867 2.75181 5.90297 2.69572 5.85743 2.64815L3.35639 0.147107C3.30976 0.100468 3.25439 0.0634727 3.19345 0.038232C3.13252 0.0129914 3.0672 0 3.00125 0C2.86804 0 2.74029 0.052916 2.6461 0.147107C2.59946 0.193746 2.56246 0.249114 2.53722 0.31005C2.51198 0.370986 2.49899 0.436298 2.49899 0.502255C2.49899 0.635461 2.55191 0.763211 2.6461 0.857402L4.29679 2.50309H0.500208C0.367544 2.50309 0.240315 2.55579 0.146508 2.64959C0.0527004 2.7434 0 2.87063 0 3.00329C0 3.13596 0.0527004 3.26319 0.146508 3.35699C0.240315 3.4508 0.367544 3.5035 0.500208 3.5035H4.29679L2.6461 5.14919C2.59922 5.19569 2.562 5.25101 2.53661 5.31196C2.51121 5.37292 2.49814 5.4383 2.49814 5.50433C2.49814 5.57037 2.51121 5.63575 2.53661 5.6967C2.562 5.75766 2.59922 5.81298 2.6461 5.85948C2.6926 5.90636 2.74792 5.94358 2.80888 5.96897C2.86983 5.99437 2.93521 6.00744 3.00125 6.00744C3.06728 6.00744 3.13266 5.99437 3.19362 5.96897C3.25457 5.94358 3.30989 5.90636 3.35639 5.85948L5.85743 3.35844C5.90297 3.31087 5.93867 3.25477 5.96248 3.19337C6.01251 3.07159 6.01251 2.935 5.96248 2.81322Z"
                                            fill="#4E4E50"/>
                                    </svg>
                                </div>
                            </div>
                            <div
                                className="flex flex-col justify-center gap-5 items-start bg-white font-poppins p-10 hover:shadow-md hover:transition-shadow rounded-lg">
                                <h1 className="text-topictwo text-quinary font-semibold">Culinary Delights</h1>
                                <p className="text-normal text-senary w-96">
                                    Indulge your senses in a culinary journey curated
                                    by our world-class chefs. From local flavors to
                                    international cuisines, our menu is a testament to
                                    our dedication to exquisite taste and quality. Each
                                    dish is a symphony of flavors, prepared with the
                                    freshest ingredients and a dash of innovation.
                                </p>
                                <div className="flex justify-center items-center gap-2">
                                    <h6 className="text-topicDescription text-quinary">Read more</h6>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 6 6"
                                         fill="none">
                                        <path
                                            d="M5.96248 2.81322C5.93867 2.75181 5.90297 2.69572 5.85743 2.64815L3.35639 0.147107C3.30976 0.100468 3.25439 0.0634727 3.19345 0.038232C3.13252 0.0129914 3.0672 0 3.00125 0C2.86804 0 2.74029 0.052916 2.6461 0.147107C2.59946 0.193746 2.56246 0.249114 2.53722 0.31005C2.51198 0.370986 2.49899 0.436298 2.49899 0.502255C2.49899 0.635461 2.55191 0.763211 2.6461 0.857402L4.29679 2.50309H0.500208C0.367544 2.50309 0.240315 2.55579 0.146508 2.64959C0.0527004 2.7434 0 2.87063 0 3.00329C0 3.13596 0.0527004 3.26319 0.146508 3.35699C0.240315 3.4508 0.367544 3.5035 0.500208 3.5035H4.29679L2.6461 5.14919C2.59922 5.19569 2.562 5.25101 2.53661 5.31196C2.51121 5.37292 2.49814 5.4383 2.49814 5.50433C2.49814 5.57037 2.51121 5.63575 2.53661 5.6967C2.562 5.75766 2.59922 5.81298 2.6461 5.85948C2.6926 5.90636 2.74792 5.94358 2.80888 5.96897C2.86983 5.99437 2.93521 6.00744 3.00125 6.00744C3.06728 6.00744 3.13266 5.99437 3.19362 5.96897C3.25457 5.94358 3.30989 5.90636 3.35639 5.85948L5.85743 3.35844C5.90297 3.31087 5.93867 3.25477 5.96248 3.19337C6.01251 3.07159 6.01251 2.935 5.96248 2.81322Z"
                                            fill="#4E4E50"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*third div*/}
                <div
                    className="flex justify-center items-center mt-[120px] gap-2 mb-[120px] font-poppins text-quinary text-normal">
                    © 2023 Fiesto Hotel & Restaurant. All rights reserved.
                </div>
            </>
        );
    }
}
