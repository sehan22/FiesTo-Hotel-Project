import React, {Component} from 'react';
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
            backgroundColor: scrollPosition > 250 ? '#072227' : 'transparent', transition: '0.5s'
        };

        return (
            <>
                <div
                    className="flex bg-black z-10 bg-opacity-5 p-3 fixed text-normal text-white font-poppins justify-around w-full top-5"
                    style={navBarStyle} id="NavBar">
                    <img className="w-16 object-scale-down" src={Logo} alt=""/>

                    <ul className="list-none flex gap-5 items-center justify-center">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/room">Room</Link></li>
                        <li><Link to="/restaurant">Restaurant</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                    <div className="flex justify-center items-center gap-2">
                        <button className="bg-secondary text-smaller hover:bg-teal-600 py-2 px-4 rounded">
                            <Link to="/login">Sign In</Link>
                        </button>
                        <button className="bg-black bg-opacity-10 border-2 border-nonary text-smaller hover:bg-opacity-15 py-2 px-4 rounded">
                            <Link to="/signup">Sign Up</Link>
                        </button>

                        <hr className="rotate-90 opacity-50" style={{height: '10px', width:'20px',}}/>

                        <div className="h-8 w-8 rounded-full bg-octonary" style={{background: `url(${SecondManImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                        <h6>Sehan Ranaweera</h6>

                        {/*<hr className="rotate-90 opacity-50" style={{height: '10px', width:'20px',}}/>*/}

                        {/*<div className="h-8 w-8 hover:shadow-md rounded-full bg-octonary" style={{background: `url(${BookingICon})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>*/}
                    </div>
                </div>
            </>
        );
    }
}
