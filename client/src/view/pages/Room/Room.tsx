import React, {Component} from 'react';
import bannerBackgroundImg from "../../../images/RoomsPage/bgimg.png";

export class Room extends Component {
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
                    <h1 className="font-Milonga text-bannertopic text-white">Rooms Section</h1>
                    <div className="flex items-center justify-center gap-4 p-2 ">
                        <div className="h-0.5 opacity-50 bg-septenary w-32"></div>
                        <h6 className="font-poppins text-subtopic text-nonary">Join With Us</h6>
                        <div className="h-0.5 opacity-50 bg-septenary w-32"></div>
                    </div>
                </div>

                {/*first div*/}
                <div className="flex justify-center items-center mt-[120px] mb-[120px] bg-white font-poppins">
                    <h5 className="text-quinary text-topictwo">Room Section</h5>
                </div>

                {/*second div*/}
                <div className="flex justify-center items-center gap-5 p-5 mt-[120px] mb-[120px]
                                xs:flex-col
                                md:flex-row
                                lg:flex-row
                ">
                    <div className="flex flex-col justify-center gap-2 text-white w-1/4 p-5 bg-secondary overflow-hidden
                                xs:w-full xs:p-10 xs:max-sm:bg-black
                    ">
                        <h1 className="text-topictwo overflow-hidden overflow-ellipsis whitespace-nowrap">lorem lorem
                            lorem lorem
                        </h1>
                        <h1 className="text-topicDescription">lorem lorem lorem lorem
                            lorem lorem
                        </h1>
                    </div>
                </div>
            </>
        );
    }
}