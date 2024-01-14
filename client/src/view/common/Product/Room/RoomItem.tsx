import React, {Component} from 'react';
import RoomCardImg from "../../../../images/RoomsPage/roomcardimg.png";
import WifiIcon from "../../../../images/RoomsPage/eoomfacilities/wifi.png";
import RoomserviceIcon from "../../../../images/RoomsPage/eoomfacilities/roomservice.png";
import WashroomIcon from "../../../../images/RoomsPage/eoomfacilities/washroom.png";
import TvIcon from "../../../../images/RoomsPage/eoomfacilities/tv.png";
import AcfanIcon from "../../../../images/RoomsPage/eoomfacilities/acfan.png";
import SecurityIcon from "../../../../images/RoomsPage/eoomfacilities/security.png";

interface RoomItemProps {
    data: any,
}

class RoomItem extends Component<RoomItemProps> {

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: RoomItemProps) {
        super(props);
    }

    render() {

        // @ts-ignore
        const { data } = this.props;
        const image = require('../../../../images/RoomsPage/' + data.image)

        return (
            <div
                className="rounded-2xl shadow-md hover:shadow-sm transition-all xs:max-w-[480px] md:max-w-[380px] bg-white">
                <div className="p-3 flex flex-col gap-2 font-poppins">

                    <div className="rounded-xl overflow-hidden shadow-md transition-all hover:shadow-sm">
                        <img className="h-[150px] xs:h-[220px] w-full object-cover" src={image}
                             alt=""/>
                    </div>

                    <div className="flex flex-col gap-4 p-2">
                        <div>
                            <div className="flex justify-between">
                                <h1 className="text-topictwo overflow-hidden overflow-ellipsis whitespace-nowrap">{data.name}</h1>

                                <div className="flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                         viewBox="0 0 8 8" fill="none">
                                        <path
                                            d="M3.71468 0.878114C3.80449 0.601721 4.19551 0.601722 4.28532 0.878115L4.8307 2.55664C4.87086 2.68024 4.98605 2.76393 5.11602 2.76393H6.88092C7.17154 2.76393 7.29237 3.13582 7.05726 3.30664L5.62942 4.34402C5.52427 4.42041 5.48028 4.55582 5.52044 4.67943L6.06582 6.35795C6.15563 6.63434 5.83929 6.86418 5.60417 6.69336L4.17634 5.65598C4.07119 5.57959 3.92881 5.57959 3.82366 5.65598L2.39583 6.69336C2.16071 6.86418 1.84437 6.63435 1.93418 6.35795L2.47956 4.67943C2.51972 4.55582 2.47573 4.42041 2.37058 4.34402L0.942743 3.30664C0.707629 3.13582 0.828462 2.76393 1.11908 2.76393H2.88398C3.01395 2.76393 3.12914 2.68024 3.1693 2.55664L3.71468 0.878114Z"
                                            fill="#FFD700"/>
                                    </svg>

                                    <h6 className="text-quinary text-normal">{data.rating}</h6>
                                </div>
                            </div>

                            <h6 className="text-normal text-quinary">{data.price} {data.currency}</h6>
                        </div>

                        <p className="romCardPara text-quinary text-smaller mt-[-5px] overflow-hidden overflow-y-visible whitespace-pre-wrap h-[55px]">
                            Enter a freshly updated and thoughtfully furnished
                            peaceful home surrounded by ancient trees, stone
                            walls, and open meadows.
                        </p>

                        <div className="flex flex-wrap gap-[1px] justify-between w-full">
                            <div
                                className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black bg-opacity-5">
                                <img className="opacity-70 hover:opacity-100 w-7/12" src={WifiIcon} alt=""/>
                            </div>
                            <div
                                className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black bg-opacity-5">
                                <img className="opacity-70 hover:opacity-100 w-7/12" src={RoomserviceIcon}
                                     alt=""/>
                            </div>
                            <div
                                className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black bg-opacity-5">
                                <img className="opacity-70 hover:opacity-100 w-7/12" src={WashroomIcon}
                                     alt=""/>
                            </div>
                            <div
                                className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black bg-opacity-5">
                                <img className="opacity-70 hover:opacity-100 w-7/12" src={TvIcon} alt=""/>
                            </div>
                            <div
                                className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black bg-opacity-5">
                                <img className="opacity-70 hover:opacity-100 w-7/12" src={AcfanIcon}
                                     alt=""/>
                            </div>
                            <div
                                className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black bg-opacity-5">
                                <img className="opacity-70 hover:opacity-100 w-7/12" src={SecurityIcon}
                                     alt=""/>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 text-white mt-2 font-semibold">
                            <button
                                className="bg-secondary text-smaller hover:bg-teal-600 transition-all duration-200 ease-in tracking-widest py-3 px-4 w-12/12 rounded-xl">
                                Reserve
                            </button>

                            <button
                                className="bg-[#212121] text-smaller hover:bg-gray-800 transition-all duration-200 ease-in tracking-widest py-3 px-4 w-12/12 rounded-xl">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RoomItem;
