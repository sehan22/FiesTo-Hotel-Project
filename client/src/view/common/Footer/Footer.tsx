import React, {Component} from 'react';
import FacebookIcon from '../../../images/Footer/Facebook.png'
import InstagramIcon from '../../../images/Footer/Instagram.png'
import WhatsappIcon from '../../../images/Footer/Whatsapp.png'
import LinkedinIcon from '../../../images/Footer/Linkedin.png'
import GitHubIcon from '../../../images/Footer/GitHub.png'
import TelegramIcon from '../../../images/Footer/Telegram.png'

export class Footer extends Component {
    render() {
        return (
            <div
                className="flex justify-center items-center bg-gradient-to-t from-black to-primary font-poppins rounded-t-3xl">
                <div className="flex flex-col items-center justify-center g-10 text-white">
                    <div className="flex flex-col justify-center items-center gap-5 p-5">
                        <div className="flex flex-wrap items-start justify-center text-normal p-10 gap-20">
                            <div className="flex flex-col items-start justify-center p-5 gap-2">
                                <h1 className="text-secondary">Navigation</h1>
                                <div>
                                    <h1>Home</h1>
                                    <h1>Restaurant</h1>
                                    <h1>About</h1>
                                    <h1>Contact</h1>
                                </div>
                            </div>

                            <div className="flex flex-col items-start justify-center p-5 gap-2">
                                <h1 className="text-secondary">Practice Area</h1>
                                <div>
                                    <h1>Travel</h1>
                                    <h1>Popular Places</h1>
                                    <h1>Destination</h1>
                                    <h1>Tour</h1>
                                    <h1>Family Vacation</h1>
                                </div>
                            </div>

                            <div className="flex flex-col items-start justify-center p-5 gap-2">
                                <h1 className="text-secondary">Services</h1>
                                <div>
                                    <h1>Easy to Booking</h1>
                                    <h1>Free Wi-Fi</h1>
                                    <h1>Swimming Pool</h1>
                                    <h1>Restaurant</h1>
                                    <h1>Bar</h1>
                                </div>
                            </div>

                            <div className="flex flex-col items-start justify-center p-5 gap-3">
                                <h1 className="text-secondary">Contact</h1>
                                <div>
                                    <h1>Colombo, Sri Lanka.</h1>
                                    <h1>+94-41-22 33 365</h1>
                                    <h1>fiestohotel@gmail.com</h1>
                                </div>

                                <div>
                                    <h1>Connect</h1>
                                    <div className="flex justify-center items-start gap-2 mt-1">
                                        <img className="w-5" src={FacebookIcon} alt=""/>
                                        <img className="w-5" src={InstagramIcon} alt=""/>
                                        <img className="w-5" src={WhatsappIcon} alt=""/>
                                        <img className="w-5" src={LinkedinIcon} alt=""/>
                                        <img className="w-5" src={GitHubIcon} alt=""/>
                                        <img className="w-5" src={TelegramIcon} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-normal font-bold text-octonary">DEVELOPED BY SEHAN RANAWEERA
                                2023</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}