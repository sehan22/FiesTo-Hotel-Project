import React, {Component} from 'react';
import FacebookIcon from '../../../images/Footer/Facebook.png'
import InstagramIcon from '../../../images/Footer/Instagram.png'
import WhatsappIcon from '../../../images/Footer/Whatsapp.png'
import LinkedinIcon from '../../../images/Footer/Linkedin.png'
import GitHubIcon from '../../../images/Footer/GitHub.png'
import TelegramIcon from '../../../images/Footer/Telegram.png'

/*
 name
 school
 ijse
 free time
 social
*/

export class Footer extends Component {
    render() {
        return (
            <>
                <div
                    className="flex justify-center items-center mx-auto bg-gradient-to-t from-black to-primary text-white font-poppins">

                    <div className="grid grid-cols-1 lmd:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-5 pt-20">

                        <div className="flex flex-col items-start justify-start p-5 gap-3 ">
                            <h1 className="text-secondary">Fiesto Hotel & Restaurant</h1>
                            <p className="text-normal min-w-[50px] lmd:max-w-[220px] sm:max-w-[220px]">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias incidunt
                                natus nihil officia repudiandae.
                            </p>

                            <div className="flex flex-col justify-center items-start gap-2">
                                <h1>Connect</h1>
                                <div className="flex flex-wrap lmd:flex-nowrap justify-center items-start gap-2 mt-1">
                                    <img className="w-5" src={FacebookIcon} alt=""/>
                                    <img className="w-5" src={InstagramIcon} alt=""/>
                                    <img className="w-5" src={WhatsappIcon} alt=""/>
                                    <img className="w-5" src={LinkedinIcon} alt=""/>
                                    <img className="w-5" src={GitHubIcon} alt=""/>
                                    <img className="w-5" src={TelegramIcon} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-start p-5 gap-3">
                            <h1 className="text-secondary">Navigation</h1>
                            <div className="flex flex-col gap-2">

                                <div className="flex justify-start items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                         viewBox="0 0 320 512">
                                        <path fill="#ffffff"
                                              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                    </svg>

                                    <h1>Home</h1>
                                </div>

                                <div className="flex justify-start items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                         viewBox="0 0 320 512">
                                        <path fill="#ffffff"
                                              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                    </svg>

                                    <h1>Restaurant</h1>
                                </div>

                                <div className="flex justify-start items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                         viewBox="0 0 320 512">
                                        <path fill="#ffffff"
                                              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                    </svg>

                                    <h1>About</h1>
                                </div>

                                <div className="flex justify-start items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                         viewBox="0 0 320 512">
                                        <path fill="#ffffff"
                                              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                    </svg>

                                    <h1>Contact</h1>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-start p-5 gap-3">
                            <h1 className="text-secondary">Practice Area</h1>
                            <div className="flex flex-col gap-2">

                                <div className="flex justify-start items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                         viewBox="0 0 320 512">
                                        <path fill="#ffffff"
                                              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                    </svg>

                                    <h1>Travel</h1>
                                </div>

                                <div className="flex justify-start items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                         viewBox="0 0 320 512">
                                        <path fill="#ffffff"
                                              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                    </svg>

                                    <h1>Popular Places</h1>
                                </div>

                                <div className="flex justify-start items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                         viewBox="0 0 320 512">
                                        <path fill="#ffffff"
                                              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                    </svg>

                                    <h1>Destination</h1>
                                </div>

                                <div className="flex justify-start items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                         viewBox="0 0 320 512">
                                        <path fill="#ffffff"
                                              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                    </svg>

                                    <h1>Tour</h1>
                                </div>

                                <div className="flex justify-start items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                         viewBox="0 0 320 512">
                                        <path fill="#ffffff"
                                              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                    </svg>

                                    <h1>Family Vacation</h1>
                                </div>


                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-start p-5 gap-3">
                            <h1 className="text-secondary">Services</h1>
                            <div className="flex flex-col gap-2">

                                <div className="flex justify-start items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                         viewBox="0 0 320 512">
                                        <path fill="#ffffff"
                                              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                    </svg>

                                    <h1>Easy to Booking</h1>
                                </div>

                                <div className="flex justify-start items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                         viewBox="0 0 320 512">
                                        <path fill="#ffffff"
                                              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                    </svg>

                                    <h1>Free Wi-Fi</h1>
                                </div>

                                <div className="flex justify-start items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                         viewBox="0 0 320 512">
                                        <path fill="#ffffff"
                                              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                    </svg>

                                    <h1>Swimming Pool</h1>
                                </div>

                                <div className="flex justify-start items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                         viewBox="0 0 320 512">
                                        <path fill="#ffffff"
                                              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                    </svg>

                                    <h1>Restaurant</h1>
                                </div>

                                <div className="flex justify-start items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                         viewBox="0 0 320 512">
                                        <path fill="#ffffff"
                                              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                    </svg>

                                    <h1>Bar</h1>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-start p-5 gap-3">
                            <h1 className="text-secondary">Contact</h1>
                            <div className="flex flex-col gap-2">

                                <div className="flex justify-start items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                         viewBox="0 0 320 512">
                                        <path fill="#ffffff"
                                              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                    </svg>

                                    <h1>Colombo, Sri Lanka.</h1>
                                </div>

                                <div className="flex justify-start items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                         viewBox="0 0 320 512">
                                        <path fill="#ffffff"
                                              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                    </svg>

                                    <h1>+94-41-22 33 365</h1>
                                </div>

                                <div className="flex justify-start items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                         viewBox="0 0 320 512">
                                        <path fill="#ffffff"
                                              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                    </svg>

                                    <h1>fiestohotel@gmail.com</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-black text-white text-center">
                    <h3 className="text-smaller p-5 font-bold text-octonary">DEVELOPED BY SEHAN RANAWEERA
                        2023</h3>
                </div>
            </>
        );
    }
}
