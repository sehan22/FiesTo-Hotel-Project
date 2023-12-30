import React, {Component} from 'react';
import Logo from '../../../images/NavBar/Logo.png';
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
                        <li>Home</li>
                        <li>Room</li>
                        <li>Restaurant</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                    <button className="bg-secondary text-smaller hover:bg-teal-600 py-2 px-4 rounded">
                        <Link to="/login">Sign In | Sign Up</Link>
                    </button>
                </div>
            </>
        );
    }
}
