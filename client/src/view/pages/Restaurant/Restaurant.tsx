import React, {Component} from 'react';
import bannerBackgroundImg from "../../../images/RestaurantPage/bgimg.png";

export class Restaurant extends Component {
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
                    <h1 className="font-Milonga text-bannertopic text-white">Restaurant & Bar</h1>
                    <div className="flex items-center justify-center gap-4 p-2 ">
                        <div className="h-0.5 opacity-50 bg-septenary w-32"></div>
                        <h6 className="font-poppins text-subtopic text-nonary">Join With Us</h6>
                        <div className="h-0.5 opacity-50 bg-septenary w-32"></div>
                    </div>
                </div>

                {/*test*/}
                <div className="flex justify-center items-center min-h-screen mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5">

                        <div className="rounded-lg shadow-lg">
                            <div className="p-5 flex flex-col">
                                <div className="rounded-xl overflow-hidden">
                                    <img src={bannerBackgroundImg} alt=""/>
                                </div>

                                <h1 className="text-2xl md:text-3xl font-medium mt-3 font-poppins">Camp Thalaramba</h1>
                                <p className="text-quinary text-lg mt-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquam atque
                                    blanditiis consectetur dolore eius error eum fugit incidunt ipsam minima molestias
                                    nemo, officiis quidem quo rem suscipit vitae voluptates?
                                </p>
                                <a className="bg-blue-400 py-3 text-center rounded-full mt-4 focus:scale-95 transition-all
                                              duration-200 ease-in" href="#">
                                    Explore
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}