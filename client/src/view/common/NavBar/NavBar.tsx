import React, {Component} from 'react';
import Logo from '../../../images/NavBar/Logo.png';
import SecondManImg from '../../../images/NavBar/usericon.jpg'
import {Link} from "react-router-dom";
import { Navbar } from 'flowbite-react';


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
                <nav
                    className="hidden bg-black bg-opacity-15 fixed w-full z-20 top-0 start-0">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img className="w-[80px] object-scale-down" src={Logo} alt=""/>
                        </a>
                        <div className="flex md:order-2 space-x-3 md:space-x-2 rtl:space-x-reverse">
                            <button
                                className="bg-secondary text-smaller hover:bg-teal-600 py-2 px-4 text-center text-white transition-all rounded">
                                <Link to="/login">Sign In</Link>
                            </button>

                            <button
                                className="hidden lg:block bg-black bg-opacity-10 border-2 border-nonary text-smaller hover:bg-opacity-15 py-2 text-center text-white transition-all px-4 rounded">
                                <Link to="/signup">Sign Up</Link>
                            </button>

                            <div className="justify-center items-center flex gap-2">
                                <hr className="rotate-90 opacity-50" style={{height: '10px', width: '20px',}}/>

                                <div className="h-8 w-8 rounded-full bg-octonary" style={{
                                    background: `url(${SecondManImg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}></div>

                                <h6 className="text-normal text-white lg:block hidden">Sehan</h6>
                            </div>

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
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 font-poppins text-normal text-white">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/room">Room</Link></li>
                                <li><Link to="/restaurant">Restaurant</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <div
                    className="flex bg-black z-20 bg-opacity-5 p-3 rounded-none fixed text-normal text-white font-poppins justify-around w-full top-32"
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
