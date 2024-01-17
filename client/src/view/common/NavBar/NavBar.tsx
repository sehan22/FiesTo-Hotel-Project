import React, {Component} from 'react';
import Logo from '../../../images/NavBar/Logo.png';
import SecondManImg from '../../../images/NavBar/usericon.jpg'
import {Link} from "react-router-dom";


export class NavBar extends Component {
    constructor(props: {}) {
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
    }

    render() {

        // @ts-ignore
        const {scrollPosition} = this.state;

        const navBarStyle = {
            top: scrollPosition > 50 ? '0' : '',
            backgroundColor: scrollPosition > 50 ? '#072227' : 'transparent', transition: '0.2s',
            borderBottomRightRadius: '5px',
            borderBottomLeftRadius: '5px',

        };
        return (
            <>
                <div
                    className="flex bg-black z-20 bg-opacity-5 p-3 rounded-none fixed text-normal text-white font-poppins justify-around w-full top-5"
                    style={navBarStyle} id="NavBar">

                    <img className="w-[80px] object-scale-down" src={Logo} alt=""/>

                    <ul className="hidden list-none md:flex gap-5 items-center justify-center">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/room">Rooms</Link></li>
                        <li><Link to="/restaurant">Restaurant</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                    </ul>

                    <div className="hidden md:flex justify-center items-center gap-2">
                        <button className="bg-secondary text-smaller hover:bg-teal-600 py-3 px-4 flex gap-2 rounded">
                            <Link className="text-text-neutral-300 text-normal hover:text-black transition-all" to="/login">Sign In</Link>
                            <div className="h-fit w-0.5 bg-gray-300 text-gray-300">|</div>
                            <Link className="text-text-neutral-300 text-normal hover:text-black transition-all" to="/signup">Sign Up</Link>
                        </button>

                        <hr className="rotate-90 opacity-50" style={{height: '10px', width: '20px',}}/>

                        <Link to="addToCart">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" height="18" width="20"
                                     viewBox="0 0 576 512">
                                    <path fill="#ffffff"
                                          d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                                </svg>
                            </button>
                        </Link>

                        <hr className="rotate-90 opacity-50" style={{height: '10px', width: '20px',}}/>

                        <Link to="myAccount">
                            <div className="flex items-center justify-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-octonary" style={{
                                    background: `url(${SecondManImg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}></div>
                                <h6 className="hidden lg:block">Sehan</h6>
                            </div>
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center justify-center">
                        <button type="button" id="mobileMenuButton"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>

                            <svg className="block h-6 w-6 text-white" fill="" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>

                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>

                        <div
                            className="hidden md:hidden fixed rounded-s-xl right-0 top-0 flex-col justify-start items-center max-w-[300px]"
                            id="mobile-menu">
                            <div className="flex items-center justify-between w-full border-b-2 px-5 py-2">
                                <div
                                    className="h-8 w-8 rounded-full border-2 border-septenary flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14"
                                         viewBox="0 0 448 512">
                                        <path fill="#7d7d7d"
                                              d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/>
                                    </svg>
                                </div>

                                <button className="text-quinary bg-black bg-opacity-5 rounded-full p-2.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14"
                                         viewBox="0 0 384 512">
                                        <path fill="#3d3d3d"
                                              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                    </svg>
                                </button>
                            </div>

                            <div className="p-5" id="mobileNav">
                                <ul className="md:hidden text-quinary text-normal flex flex-col gap-4 ps-2">
                                    <li className="border-b-[1px] p-0.5"><Link to="/">Home</Link></li>
                                    <li className="border-b-[1px] p-0.5"><Link to="/room">Room</Link></li>
                                    <li className="border-b-[1px] p-0.5"><Link to="/restaurant">Restaurant</Link></li>
                                    <li className="border-b-[1px] p-0.5"><Link to="/about">About</Link></li>
                                    <li className="border-b-[1px] p-0.5"><Link to="/contact">Contact</Link></li>
                                </ul>

                                <ul className="text-quinary text-normal flex flex-col gap-1 mt-4">
                                    <li className="bg-secondary px-14 rounded-xl text-white py-2"><Link to="/login">Sign
                                        In</Link></li>
                                    <li className="bg-quinary px-14 rounded-xl text-white py-2"><Link to="/signup">Sign
                                        Up</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>


                {/*flowbite navbar*/}
                {/*
                                    <nav
                    className="bg-black bg-opacity-15 fixed w-full z-20 top-0 start-0">
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
                */}
            </>
        );
    }
}
