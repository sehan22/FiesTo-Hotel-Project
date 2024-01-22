import React, {Component} from 'react';
import bgImg from '../../../images/RestaurantPage/bgimg.png'
import ResITem from "../../../images/RestaurantPage/CardItemsImg/mixrice.png"
import {CartItem} from "../../../model/CartItem";

interface ShoppingCartProps {
    itemsList: CartItem[];
}

class AddToCart extends Component<ShoppingCartProps> {


    render() {

        return (
            <>
                {/*Banner*/}
                <div
                    className="flex flex-col items-start justify-center lmd:items-center lmd:justify-center w-full h-screen md:max-h-[400px] md:rounded-b-3xl bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bgImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    <h1 className="font-Milonga text-topic md:text-bannertopic text-white p-2">Shopping Cart</h1>
                    <div className="flex flex-col lmd:items-center lmd:justify-center gap-4 p-2 ">
                        <div className="h-0.5 opacity-50 bg-septenary w-44"></div>
                        <h6 className="font-poppins text-topictwo md:text-subtopic text-nonary">Join With Us</h6>

                        <button
                            className="px-5 py-2 bg-secondary rounded-xl text-white"

                        >
                            Check State
                        </button>

                        <div className="hidden lmd:block h-0.5 opacity-50 bg-septenary w-32"></div>
                    </div>
                </div>


                <div
                    className="flex items-center justify-center mx-auto mb-[60px] mt-[60px] md:mt-[120px] md:mb-[120px]">

                    {/*main flex div*/}
                    <div
                        className="flex flex-col xl:flex-row justify-center items-center xl:items-start p-5 gap-2 w-full">

                        {/*main flex item 1*/}
                        <div
                            className="flex flex-col justify-center items-center w-full bg-white p-2 lg:p-5 max-w-[890px] rounded-xl">

                            <div className="flex items-center justify-between font-poppins w-full">
                                <h1 className="text-quinary text-topictwo">Your Order Cart</h1>
                                <h1 className="text-normal text-senary">Items 0</h1>
                            </div>

                            <div className="w-full p-5">
                                <hr className="bg-octonary bg-opacity-50 rounded-full w-full"/>
                            </div>

                            {/*cart item - restaurant items*/}
                            <div
                                className="grid grid-cols-1 gap-5 max-w-[820px] items-start justify-start w-full rounded-xl overflow-y-scroll overflow-x-hidden scroll-auto custom1-scrollbar">

                                {
                                    this.props.itemsList.length === 0
                                        ? <div className="flex justify-center items-center w-full h-full">
                                            <h5 className="font-poppins text-smaller text-quinary">No Items to
                                                Display!</h5>
                                        </div>

                                        : this.props.itemsList.map((item) => (
                                            <div className="flex items-center justify-between p-2">

                                                <div className="grid grid-cols-1 sm:grid-cols-2 justify-between h-full w-full lg:gap-10 gap-2">

                                                    {/*item img and description*/}
                                                    <div
                                                        className="flex flex-col lmd:flex-row justify-start gap-2 items-start lmd:items-center">
                                                        <img className="w-full lmd:max-w-52" src={ResITem} alt=""/>

                                                        <div
                                                            className="flex flex-col justify-center items-start gap-2 overflow-hidden p-2 font-poppins">
                                                            <h1 className="overflow-hidden w-full overflow-ellipsis whitespace-nowrap text-normal text-quinary">{item.product.name}</h1>
                                                            <h1 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-secondary text-smaller">Vegi</h1>
                                                        </div>
                                                    </div>

                                                    {/*qty and total*/}
                                                    <div
                                                        className="flex flex-col lmd:flex-row w-full gap-5 justify-start sm:justify-center items-center p-2">
                                                        <div className="flex justify-start gap-3 lg:gap-5 items-center">
                                                            <div
                                                                className="flex justify-center items-center gap-3 text-quinary">
                                                                <button
                                                                    className="w-6 h-6 text-smaller rounded-full bg-black bg-opacity-5 hover:bg-opacity-10 transition-all">-
                                                                </button>

                                                                <h6 className="text-smaller">{item.itemCount}</h6>

                                                                <button
                                                                    className="w-6 h-6 text-smaller rounded-full bg-black bg-opacity-5 hover:bg-opacity-10 transition-all">+
                                                                </button>
                                                            </div>

                                                            <div
                                                                className="flex flex-col justify-center items-start font-poppins">
                                                                <h1 className="text-normal text-quinary">{`Rs.${item.product.price * item.itemCount}/=`}</h1>
                                                                <h1 className="text-smaller text-septenary">{`Rs.${item.product.price}/= /per item`}</h1>
                                                            </div>
                                                        </div>

                                                        {/*remove btn*/}
                                                        <div
                                                            className="flex justify-center items-center sm:ms-10 text-quinary">
                                                            <button
                                                                className="px-3 py-2 border-opacity-25 rounded-xl transition-all bg-red-700 text-white font-poppins text-smaller"> Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        ))
                                }

                            </div>

                        </div>

                        {/*main flex item 2*/}
                        <div
                            className="flex flex-col justify-center items-center max-w-[890px] p-2 lg:p-5 xl:w-[500px] bg-white w-full">

                            <div className="flex items-center justify-between font-poppins w-full">
                                <h1 className="text-quinary text-topictwo">Proceed to Checkout</h1>
                            </div>

                            <div className="w-full p-5">
                                <hr className="bg-octonary bg-opacity-50 rounded-full w-full"/>
                            </div>

                            <form className="grid grid-cols-1 gap2 md:gap-3 p-2 w-full">

                                <div className="flex justify-start gap-5 items-center w-full font-poppins">
                                    <h1 className="text-normal text-senary">Delivery:</h1>

                                    <div className="flex items-center justify-center gap-5">

                                        <div className="flex items-center">
                                            <input id="default-checkbox" type="checkbox" value=""
                                                   className="w-3.5 h-3.5 text-secondary bg-gray-100 border-gray-300 rounded focus:ring-secondary dark:focus:ring-transparent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="default-checkbox"
                                                   className="ms-2 text-smaller font-medium text-gray-900 dark:text-gray-300">
                                                Yes
                                            </label>
                                        </div>

                                    </div>
                                </div>

                                <div className="mb-4 w-full lmd:min-w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="number"
                                        placeholder="Shipping Address"
                                    />
                                </div>

                                <div className="mb-4 w-full lmd:min-w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                        Payment Slip</label>
                                    <input
                                        id="myInput"
                                        className="file:bg-secondary file:text-white file:border-none file:py-1 file:rounded-lg bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="file"
                                        placeholder="Sub Total"
                                    />
                                </div>

                                <div className="flex justify-between items-center w-full font-poppins">
                                    <h1 className="text-normal text-senary">SubTotal:</h1>
                                    <h1 className="text-topicDescription text-quinary">Rs: 9500/=</h1>
                                </div>

                                <div className="flex justify-between items-center w-full font-poppins">
                                    <h1 className="text-normal text-senary">Discount:</h1>
                                    <h1 className="text-topicDescription text-lime-600">Rs: -500/=</h1>
                                </div>

                                <div className="flex justify-between items-center w-full font-poppins">
                                    <h1 className="text-normal text-senary">Delivery cost:</h1>
                                    <h1 className="text-topicDescription text-rose-700">Rs: +250/=</h1>
                                </div>

                                <div className="w-full py-0.5 px-5">
                                    <hr className="bg-octonary bg-opacity-50 rounded-full w-full"/>
                                </div>

                                <div className="flex justify-between items-center w-full font-poppins">
                                    <h1 className="text-normal text-senary">Total:</h1>
                                    <h1 className="text-loginpagetopic text-quinary">Rs: 9250/=</h1>
                                </div>

                                <div className="w-full py-0.5 px-5">
                                    <hr className="bg-octonary bg-opacity-50 rounded-full w-full"/>
                                </div>

                                <div className="w-full py-0.5 px-5">
                                    <h1 className="text-center">Payhere</h1>
                                </div>

                                <div className="w-full py-0.5 px-5">
                                    <hr className="bg-octonary bg-opacity-50 rounded-full w-full"/>
                                </div>

                                <div>
                                    <button
                                        className="bg-secondary mt-2 font-bold text-normal transition-all text-white hover:bg-teal-600 py-2 px-4 w-full rounded">
                                        Purchase Now
                                    </button>

                                    <button
                                        className="bg-white border-[1px] border-gray-600 border-opacity-20 mt-2 font-bold text-normal transition-all text-quinary hover:bg-gray-100 hover:bg-opacity-10 py-2 px-4 w-full rounded">
                                        Back to shop
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </>
        );
    }
}

export default AddToCart;
