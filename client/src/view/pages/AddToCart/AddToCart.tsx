import React, {Component} from 'react';
import bgImg from '../../../images/RestaurantPage/bgimg.png'
import ResITem from "../../../images/RestaurantPage/CardItemsImg/mixrice.png"

interface addToCartItemDetail {
    itemId: string;
    itemName: string;
    itemRating: number;
    itemDescription: string;
    itemQTY: number;
    itemPrice: number;
    itemImgUrl: string;
    selectedItemQTY: number;
}

class AddToCart extends Component<{}, addToCartItemDetail> {

    constructor(props: {}) {
        super(props);

        this.state = {
            itemDescription: "",
            itemId: "",
            itemImgUrl: "",
            itemName: "",
            itemPrice: 0,
            itemQTY: 0,
            itemRating: 0,
            selectedItemQTY: 0,
        };
    }

    /*    componentDidMount() {
            this.fetchUsers();
        }

        fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/users/all');
                // this.setState({userList: response.data});
            } catch (err) {
                console.error('Error fetching users:', err);
                // this.setState({error: 'Something went wrong while fetching users.'});
            }
        };*/

    private checkStateOnAction = () => {

    }


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
                            onClick={this.checkStateOnAction}
                        >
                            Check State
                        </button>

                        <div className="hidden lmd:block h-0.5 opacity-50 bg-septenary w-32"></div>
                    </div>
                </div>

                <div
                    className="flex justify-center items-center mx-auto mt-[60px] mb-[60px] md:mt-[120px] md:mb-[120px]">

                    {/*main flex*/}
                    <div
                        className="flex flex-col xl:flex-row justify-center items-center xl:items-start p-5 gap-2 w-full">

                        {/*main flex item 1*/}
                        <div
                            className="flex flex-col justify-center items-center gap-2 w-full lg:max-w-[984px] xl:max-w-[930px]">

                            {/*sub flex items*/}
                            <div className="flex justify-between items-center gap-2 w-full">
                                <h1 className="font-poppins text-topictwo text-quinary">Shopping Cart</h1>
                                <h1 className="font-poppins text-topicDescription text-senary">0 Items</h1>
                            </div>

                            {/*sub flex items*/} {/*cart items main div*/}
                            {/*<div className="flex justify-center items-center p-5 w-full bg-secondary font-poppins">*/}
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full max-h-[450px] xl:max-h-[550px] overflow-hidden overflow-y-scroll romCardPara shadow-inner">

                                <div
                                    className="flex justify-start items-center w-full xl:w-[390px] font-poppins bg-white shadow-xl rounded-xl md:max-w-[450px]">

                                    <div
                                        className="flex flex-col lmd:flex-row sm:flex-row justify-center items-center lmd:items-center p-2 gap-2 w-full">

                                        <img className="lmd:max-w-40" src={ResITem} alt=""/>

                                        <div className="flex justify-between items-center w-full">

                                            <div className="flex flex-col justify-center items-start gap-2">
                                                <h1 className='text-normal lmd:max-w-28 sm:max-w-52 overflow-hidden overflow-ellipsis whitespace-nowrap'>Vegetable
                                                    Fried Rice</h1>
                                                <h6 className="text-smaller text-secondary">Total: 9000/=</h6>
                                                <h6 className="text-smaller text-rose-800">Remove</h6>
                                            </div>


                                            <div className="flex justify-center items-center gap-3">
                                                <button
                                                    className="w-5 h-5 bg-black bg-opacity-5 hover:bg-opacity-10 rounded-full text-smaller">-
                                                </button>
                                                <h6 className="text-smaller">5</h6>
                                                <button
                                                    className="w-6 h-6 bg-black bg-opacity-5 hover:bg-opacity-10 rounded-full text-smaller">+
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div
                                    className="flex justify-start items-center w-full xl:w-[390px] font-poppins bg-white shadow-xl rounded-xl md:max-w-[450px]">

                                    <div
                                        className="flex flex-col lmd:flex-row sm:flex-row justify-center items-center lmd:items-center p-2 gap-2 w-full">

                                        <img className="lmd:max-w-40" src={ResITem} alt=""/>

                                        <div className="flex justify-between items-center w-full">

                                            <div className="flex flex-col justify-center items-start gap-2">
                                                <h1 className='text-normal lmd:max-w-28 sm:max-w-52 overflow-hidden overflow-ellipsis whitespace-nowrap'>Vegetable
                                                    Fried Rice</h1>
                                                <h6 className="text-smaller text-secondary">Total: 9000/=</h6>
                                                <h6 className="text-smaller text-rose-800">Remove</h6>
                                            </div>


                                            <div className="flex justify-center items-center gap-3">
                                                <button
                                                    className="w-5 h-5 bg-black bg-opacity-5 hover:bg-opacity-10 rounded-full text-smaller">-
                                                </button>
                                                <h6 className="text-smaller">5</h6>
                                                <button
                                                    className="w-6 h-6 bg-black bg-opacity-5 hover:bg-opacity-10 rounded-full text-smaller">+
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div
                                    className="flex justify-start items-center w-full xl:w-[390px] font-poppins bg-white shadow-xl rounded-xl md:max-w-[450px]">

                                    <div
                                        className="flex flex-col lmd:flex-row sm:flex-row justify-center items-center lmd:items-center p-2 gap-2 w-full">

                                        <img className="lmd:max-w-40" src={ResITem} alt=""/>

                                        <div className="flex justify-between items-center w-full">

                                            <div className="flex flex-col justify-center items-start gap-2">
                                                <h1 className='text-normal lmd:max-w-28 sm:max-w-52 overflow-hidden overflow-ellipsis whitespace-nowrap'>Vegetable
                                                    Fried Rice</h1>
                                                <h6 className="text-smaller text-secondary">Total: 9000/=</h6>
                                                <h6 className="text-smaller text-rose-800">Remove</h6>
                                            </div>


                                            <div className="flex justify-center items-center gap-3">
                                                <button
                                                    className="w-5 h-5 bg-black bg-opacity-5 hover:bg-opacity-10 rounded-full text-smaller">-
                                                </button>
                                                <h6 className="text-smaller">5</h6>
                                                <button
                                                    className="w-6 h-6 bg-black bg-opacity-5 hover:bg-opacity-10 rounded-full text-smaller">+
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div
                                    className="flex justify-start items-center w-full xl:w-[390px] font-poppins bg-white shadow-xl rounded-xl md:max-w-[450px]">

                                    <div
                                        className="flex flex-col lmd:flex-row sm:flex-row justify-center items-center lmd:items-center p-2 gap-2 w-full">

                                        <img className="lmd:max-w-40" src={ResITem} alt=""/>

                                        <div className="flex justify-between items-center w-full">

                                            <div className="flex flex-col justify-center items-start gap-2">
                                                <h1 className='text-normal lmd:max-w-28 sm:max-w-52 overflow-hidden overflow-ellipsis whitespace-nowrap'>Vegetable
                                                    Fried Rice</h1>
                                                <h6 className="text-smaller text-secondary">Total: 9000/=</h6>
                                                <h6 className="text-smaller text-rose-800">Remove</h6>
                                            </div>


                                            <div className="flex justify-center items-center gap-3">
                                                <button
                                                    className="w-5 h-5 bg-black bg-opacity-5 hover:bg-opacity-10 rounded-full text-smaller">-
                                                </button>
                                                <h6 className="text-smaller">5</h6>
                                                <button
                                                    className="w-6 h-6 bg-black bg-opacity-5 hover:bg-opacity-10 rounded-full text-smaller">+
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div
                                    className="flex justify-start items-center w-full xl:w-[390px] font-poppins bg-white shadow-xl rounded-xl md:max-w-[450px]">

                                    <div
                                        className="flex flex-col lmd:flex-row sm:flex-row justify-center items-center lmd:items-center p-2 gap-2 w-full">

                                        <img className="lmd:max-w-40" src={ResITem} alt=""/>

                                        <div className="flex justify-between items-center w-full">

                                            <div className="flex flex-col justify-center items-start gap-2">
                                                <h1 className='text-normal lmd:max-w-28 sm:max-w-52 overflow-hidden overflow-ellipsis whitespace-nowrap'>Vegetable
                                                    Fried Rice</h1>
                                                <h6 className="text-smaller text-secondary">Total: 9000/=</h6>
                                                <h6 className="text-smaller text-rose-800">Remove</h6>
                                            </div>


                                            <div className="flex justify-center items-center gap-3">
                                                <button
                                                    className="w-5 h-5 bg-black bg-opacity-5 hover:bg-opacity-10 rounded-full text-smaller">-
                                                </button>
                                                <h6 className="text-smaller">5</h6>
                                                <button
                                                    className="w-6 h-6 bg-black bg-opacity-5 hover:bg-opacity-10 rounded-full text-smaller">+
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div
                                    className="flex justify-start items-center w-full xl:w-[390px] font-poppins bg-white shadow-xl rounded-xl md:max-w-[450px]">

                                    <div
                                        className="flex flex-col lmd:flex-row sm:flex-row justify-center items-center lmd:items-center p-2 gap-2 w-full">

                                        <img className="lmd:max-w-40" src={ResITem} alt=""/>

                                        <div className="flex justify-between items-center w-full">

                                            <div className="flex flex-col justify-center items-start gap-2">
                                                <h1 className='text-normal lmd:max-w-28 sm:max-w-52 overflow-hidden overflow-ellipsis whitespace-nowrap'>Vegetable
                                                    Fried Rice</h1>
                                                <h6 className="text-smaller text-secondary">Total: 9000/=</h6>
                                                <h6 className="text-smaller text-rose-800">Remove</h6>
                                            </div>


                                            <div className="flex justify-center items-center gap-3">
                                                <button
                                                    className="w-5 h-5 bg-black bg-opacity-5 hover:bg-opacity-10 rounded-full text-smaller">-
                                                </button>
                                                <h6 className="text-smaller">5</h6>
                                                <button
                                                    className="w-6 h-6 bg-black bg-opacity-5 hover:bg-opacity-10 rounded-full text-smaller">+
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div
                                    className="flex justify-start items-center w-full xl:w-[390px] font-poppins bg-white shadow-xl rounded-xl md:max-w-[450px]">

                                    <div
                                        className="flex flex-col lmd:flex-row sm:flex-row justify-center items-center lmd:items-center p-2 gap-2 w-full">

                                        <img className="lmd:max-w-40" src={ResITem} alt=""/>

                                        <div className="flex justify-between items-center w-full">

                                            <div className="flex flex-col justify-center items-start gap-2">
                                                <h1 className='text-normal lmd:max-w-28 sm:max-w-52 overflow-hidden overflow-ellipsis whitespace-nowrap'>Vegetable
                                                    Fried Rice</h1>
                                                <h6 className="text-smaller text-secondary">Total: 9000/=</h6>
                                                <h6 className="text-smaller text-rose-800">Remove</h6>
                                            </div>


                                            <div className="flex justify-center items-center gap-3">
                                                <button
                                                    className="w-5 h-5 bg-black bg-opacity-5 hover:bg-opacity-10 rounded-full text-smaller">-
                                                </button>
                                                <h6 className="text-smaller">5</h6>
                                                <button
                                                    className="w-6 h-6 bg-black bg-opacity-5 hover:bg-opacity-10 rounded-full text-smaller">+
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div
                                    className="flex justify-start items-center w-full xl:w-[390px] font-poppins bg-white shadow-xl rounded-xl md:max-w-[450px]">

                                    <div
                                        className="flex flex-col lmd:flex-row sm:flex-row justify-center items-center lmd:items-center p-2 gap-2 w-full">

                                        <img className="lmd:max-w-40" src={ResITem} alt=""/>

                                        <div className="flex justify-between items-center w-full">

                                            <div className="flex flex-col justify-center items-start gap-2">
                                                <h1 className='text-normal lmd:max-w-28 sm:max-w-52 overflow-hidden overflow-ellipsis whitespace-nowrap'>Vegetable
                                                    Fried Rice</h1>
                                                <h6 className="text-smaller text-secondary">Total: 9000/=</h6>
                                                <h6 className="text-smaller text-rose-800">Remove</h6>
                                            </div>


                                            <div className="flex justify-center items-center gap-3">
                                                <button
                                                    className="w-5 h-5 bg-black bg-opacity-5 hover:bg-opacity-10 rounded-full text-smaller">-
                                                </button>
                                                <h6 className="text-smaller">5</h6>
                                                <button
                                                    className="w-6 h-6 bg-black bg-opacity-5 hover:bg-opacity-10 rounded-full text-smaller">+
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div
                                    className="flex justify-start items-center w-full xl:w-[390px] font-poppins bg-white shadow-xl rounded-xl md:max-w-[450px]">

                                    <div
                                        className="flex flex-col lmd:flex-row sm:flex-row justify-center items-center lmd:items-center p-2 gap-2 w-full">

                                        <img className="lmd:max-w-40" src={ResITem} alt=""/>

                                        <div className="flex justify-between items-center w-full">

                                            <div className="flex flex-col justify-center items-start gap-2">
                                                <h1 className='text-normal lmd:max-w-28 sm:max-w-52 overflow-hidden overflow-ellipsis whitespace-nowrap'>Vegetable
                                                    Fried Rice</h1>
                                                <h6 className="text-smaller text-secondary">Total: 9000/=</h6>
                                                <h6 className="text-smaller text-rose-800">Remove</h6>
                                            </div>


                                            <div className="flex justify-center items-center gap-3">
                                                <button
                                                    className="w-5 h-5 bg-black bg-opacity-5 hover:bg-opacity-10 rounded-full text-smaller">-
                                                </button>
                                                <h6 className="text-smaller">5</h6>
                                                <button
                                                    className="w-6 h-6 bg-black bg-opacity-5 hover:bg-opacity-10 rounded-full text-smaller">+
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            {/*sub flex items*/}

                        </div>

                        {/*main flex item 2*/}
                        <div className="flex flex-col justify-center items-center w-full">
                            <h1 className="font-poppins text-quinary text-topictwo">Proceed to Checkout</h1>

                            <form className="grid grid-cols-1 gap2 md:gap-5 p-2 xl:px-20 w-full">
                                <div className="mb-4 w-full lmd:min-w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-white font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="date"
                                        placeholder="date"
                                    />
                                </div>

                                <div className="mb-4 w-full lmd:min-w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-white font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="time"
                                        placeholder="time"
                                    />
                                </div>

                                <div className="mb-4 w-full lmd:min-w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-white font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="number"
                                        placeholder="Shipping Address"
                                    />
                                </div>

                                <div className="mb-4 w-full lmd:min-w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput"
                                        className="bg-transparent bg-white font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="number"
                                        placeholder="Discount"
                                    />
                                </div>

                                <div className="mb-4 w-full lmd:min-w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                        Payment Slip</label>
                                    <input
                                        id="myInput"
                                        className="file:bg-secondary file:text-white file:border-none file:py-1 file:rounded-lg bg-transparent bg-white font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="file"
                                        placeholder="Sub Total"
                                    />
                                </div>

                                <div className="flex justify-between items-center w-full font-poppins">
                                    <h1 className="text-topicDescription text-quinary">Total:</h1>
                                    <h1 className="text-topicDescription text-quinary">Rs: 9500/=</h1>
                                </div>

                                <div>
                                    <button
                                        className="bg-secondary mt-2 font-bold text-normal transition-all text-white hover:bg-teal-600 py-2 px-4 w-full rounded">
                                        Order Now
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
