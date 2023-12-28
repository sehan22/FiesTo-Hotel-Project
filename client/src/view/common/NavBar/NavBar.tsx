import React, {Component} from 'react';
import Logo from '../../../images/NavBar/Logo.png'

export class NavBar extends Component {
    render() {
        return (
            <>
                <div className="flex p-3 fixed text-normal text-white font-poppins justify-around w-full top-5">
                    <img className="w-16 object-scale-down" src={Logo} alt=""/>

                    <ul className="list-none flex gap-5 items-center justify-center">
                        <li>Home</li>
                        <li>Room</li>
                        <li>Restaurant</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                    <button className="bg-secondary hover:bg-teal-600 py-2 px-4 rounded">
                        Sign In
                    </button>
                </div>
            </>
        );
    }
}