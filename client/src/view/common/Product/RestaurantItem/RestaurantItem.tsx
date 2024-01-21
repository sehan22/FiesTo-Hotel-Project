import React, {Component} from 'react';
import CarItemImgRice
    from "../../../../images/RestaurantPage/CardItemsImg/vegirice.jpg";
import WishListIcon from "../../../../images/RestaurantPage/cardwhistlist.png";
import AddToCartIcon from "../../../../images/RestaurantPage/addtocarticon.png";
import ModifyCart from "../../ModifyCart/ModifyCart";

interface RestaurantItemsProps {
    data: any,
}

interface ProductState {
    isActive: boolean
}

class RestaurantItem extends Component<RestaurantItemsProps, ProductState> {

    constructor(props: RestaurantItemsProps) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    render() {

        const {data} = this.props;
        const image = require('../../../../images/RestaurantPage/CardItemsImg/' + data.image);

        return (
            <div
                className="xs:max-w-[450px] sm:max-w-[520px] md:max-w-[380px] rounded-2xl shadow-sm transition-all">
                <div className="flex flex-col gap-2 p-2 font-poppins">

                    <div className="overflow-hidden relative">
                        <img className="h-[150px] xs:h-[220px] rounded-lg w-full object-cover"
                             src={image}
                             alt=""/>

                        <div
                            className="absolute top-0 right-0 rounded-full bg-black bg-opacity-15 px-2 py-2 m-2 z-10">
                            <img className="w-5" src={WishListIcon} alt=""/>
                        </div>
                    </div>

                    <div className="flex flex-col p-2 gap-3">
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

                        <p className="romCardPara text-quinary text-smaller overflow-hidden overflow-y-visible whitespace-pre-wrap h-[55px]">{data.description}</p>

                        <div className="flex justify-between items-center p-1">
                            <h1 className="text-topicDescription text-gray-800">{data.price} $</h1>

                            <div className="flex justify-center items-center">
                                <ModifyCart/>

                                <button
                                    className="bg-secondary transition-all tracking-wide  flex items-center justify-center gap-1 text-smaller hover:bg-teal-600 py-2.5 px-3 rounded-xl text-white">
                                    Add To Cart
                                    <img className="w-5" src={AddToCartIcon} alt=""/>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default RestaurantItem;
