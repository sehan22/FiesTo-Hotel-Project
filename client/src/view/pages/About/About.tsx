import React, {Component} from 'react';
import bannerBackgroundImg from "../../../images/AboutPage/bgimg.png";
import FirstDivImg from "../../../images/AboutPage/firstdivimg1.png";

export class About extends Component {
    render() {
        return (
            <>
                {/*Banner*/}
                <div
                    className="flex flex-col items-center justify-center w-full h-[800px] rounded-b-3xl bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bannerBackgroundImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    <h1 className="font-Milonga text-bannertopic text-white">About Fiesto Hotel & Restaurant</h1>
                    <div className="flex items-center justify-center gap-4 p-2 ">
                        <div className="h-0.5 opacity-50 bg-septenary w-32"></div>
                        <h6 className="font-poppins text-subtopic text-nonary">Join With Us</h6>
                        <div className="h-0.5 opacity-50 bg-septenary w-32"></div>
                    </div>
                </div>

                {/*first div*/}
                <div className="flex flex-wrap justify-center items-center mt-[120px] gap-5 mb-[120px]">
                    <div className="p-10">
                        <img className='w-[800px]' src={FirstDivImg} alt=""/>
                    </div>

                    <div className="p-10">
                        <h1 className="font-Milonga text-quinary text-topic">About Fiesto Hotel & Restaurant</h1>

                        <p className="font-poppins text-normal mt-10 text-senary w-[550px] leading-8">
                            Welcome to Fiesto, where culinary excellence
                            meets unparalleled hospitality.
                            Nestled in the
                            heart of [City/Area], Fiesto Hotel & Restaurant
                            is more than just a place to stay and dine;
                            it's an experience crafted with passion and a
                            commitment to creating lasting memories.
                        </p>

                        <button
                            className="bg-tertiary hover:bg-secondary text-smaller text-white py-4 px-6 rounded mt-10">
                            BOOK YOUR ROOM NOW
                        </button>
                    </div>
                </div>
            </>
        );
    }
}