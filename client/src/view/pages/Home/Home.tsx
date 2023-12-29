import React, {Component} from 'react';
import bannerBackgroundImg from '../../../images/banner.png'

export class Home extends Component {
    render() {
        const backgroundStyle = {
            backgroundImage: `url(${bannerBackgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        };

        return (
            <div className="flex flex-col items-center justify-center w-screen h-[800px] bg-cover bg-center" style={{
                backgroundImage: `url(${bannerBackgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <h1 className="font-Milonga text-bannertopic text-white">Welcome To FiesTo</h1>
                <div className="flex items-center justify-center gap-4 p-2 ">
                    <div className="h-0.5 bg-septenary w-32"></div>
                    <h6 className="font-poppins text-subtopic text-nonary">Join With Us</h6>
                    <div className="h-0.5 bg-septenary w-32"></div>
                </div>
            </div>
        );
    }
}