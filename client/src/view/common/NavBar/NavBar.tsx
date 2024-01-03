import React, {Component, useState} from 'react';
import Logo from '../../../images/NavBar/Logo.png';
import SecondManImg from '../../../images/NavBar/usericon.jpg'
import BookingICon from '../../../images/NavBar/calendar-image-png-29539.png'
import {Link} from "react-router-dom";

export class NavBar extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            scrollPosition: 0,
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        this.setState({scrollPosition: window.scrollY});
        console.log(window.scrollY)
    }

    render() {

        // @ts-ignore
        const {scrollPosition} = this.state;

        const navBarStyle = {
            top: scrollPosition > 250 ? '0' : '',
            backgroundColor: scrollPosition > 250 ? '#072227' : 'transparent', transition: '0.2s',
            borderBottomRightRadius: '5px',
            borderBottomLeftRadius: '5px'
        };

        return (
            <>
                <div
                    className="flex bg-black z-20 bg-opacity-5 p-3 rounded-none fixed text-normal text-white font-poppins justify-around w-full top-5"
                    style={navBarStyle} id="NavBar">
                    <img className="w-[80px] object-scale-down" src={Logo} alt=""/>

                    <ul className="hidden list-none md:flex gap-5 items-center justify-center">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/room">Room</Link></li>
                        <li><Link to="/restaurant">Restaurant</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                    <div className="hidden md:flex justify-center items-center gap-2">
                        <button className="bg-secondary text-smaller hover:bg-teal-600 py-2 px-4 rounded">
                            <Link to="/login">Sign In</Link>
                        </button>

                        <button
                            className="bg-black bg-opacity-10 border-2 border-nonary text-smaller hover:bg-opacity-15 py-2 px-4 rounded">
                            <Link to="/signup">Sign Up</Link>
                        </button>

                        <hr className="rotate-90 opacity-50" style={{height: '10px', width: '20px',}}/>

                        <div className="h-8 w-8 rounded-full bg-octonary" style={{
                            background: `url(${SecondManImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}></div>
                        <h6>Sehan</h6>
                    </div>

                    <div className="md:hidden flex justify-center items-center">
                        <button className="m-0">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"
                                 viewBox="0 0 448 512">
                                <path fill="#ffffff"
                                      d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </>
        );
    }
}
