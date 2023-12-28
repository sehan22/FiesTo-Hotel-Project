import React, {Component} from 'react';
import bannerBackgroundImg from '../../../images/banner.png'

export class Home extends Component {
    render() {
        return (
            <div className="flex flex-col items-center justify-center">
                <img className="object-cover w-screen max-h-screen" src={bannerBackgroundImg} alt=""/>
                <h1 className="font-Milonga text-topic">Welcome To FiesTo</h1>
                <hr/>
                <h6 className="font-poppins text-subtopic">Join With Us</h6>
                <hr/>
            </div>
        );
    }
}