import React, {Component} from 'react';
import bannerBackgroundImg from "../../../images/AboutPage/bgimg.png";
import axios from "axios";

interface UserOrdersList {
    data: [];
}

class YourOrders extends Component<{}, UserOrdersList> {
    private api: any;

    constructor(props: {}) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.fetchUserAllOrders().then(r => {
            console.log("Fetching all orders successfully!")
        });
    }

    /*find/${localStorage.getItem('username')}*/

    fetchUserAllOrders = async () => {
        try {
            const response = await this.api.get(`/orders/findUserOrders/${localStorage.getItem('username')}`);
            this.setState({data: response.data});
        } catch (err) {
            console.error('Error submitting data:', err);
        }
    };

    render() {
        return (
            <>
                <div
                    className="flex flex-col items-start justify-center lmd:items-center lmd:justify-center w-full h-screen md:max-h-[500px] md:rounded-b-3xl bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bannerBackgroundImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    <h1 className="font-Milonga text-topic md:text-bannertopic text-white p-2">My Orders</h1>
                    <div className="flex flex-col lmd:items-center lmd:justify-center gap-4 p-2 ">
                        <div className="h-0.5 opacity-50 bg-septenary w-44"></div>
                        <h6 className="font-poppins text-topictwo md:text-subtopic text-nonary">Join With Us</h6>
                        <div className="hidden lmd:block h-0.5 opacity-50 bg-septenary w-32"></div>
                        <button type="button" className="px-4 py-2 bg-secondary text-white rounded-xl"
                                onClick={() => {
                                    for (const datum of this.state.data) {
                                        console.log(datum);
                                    }
                                }}
                        >Check State
                        </button>
                    </div>
                </div>

                <div className="flex justify-center items-center mx-auto p-10 font-poppins">
                    <div className="w-[80%] rounded-xl p-5">

                        <div className="flex flex-col justify-center items-center p-5 gap-10">

                            {/*type of orders*/}
                            <div className="flex items-center justify-around bg-white w-[1000px] rounded-xl">
                                <h1 className="text-quinary text-normal">Your Orders</h1>

                                <div className="flex justify-around items-center gap-5">
                                    <h1 className="text-senary text-smaller hover:text-opacity-95 cursor-pointer hover:border-octonary hover:border-opacity-40 transition-all rounded-xl border-[1px] border-transparent p-3">All
                                        Orders</h1>
                                    <h1 className="text-senary text-smaller hover:text-opacity-95 cursor-pointer hover:border-octonary hover:border-opacity-40 transition-all rounded-xl border-[1px] border-transparent p-3">Incomplete
                                        Orders</h1>
                                    <h1 className="text-senary text-smaller hover:text-opacity-95 cursor-pointer hover:border-octonary hover:border-opacity-40 transition-all rounded-xl border-[1px] border-transparent p-3">Complete
                                        Orders</h1>
                                </div>
                            </div>

                            {
                                (this.state.data.length === 0)
                                    ? <div className="flex justify-center items-center mx-auto">
                                        <h1 className="text-quinary text-smaller p-5">No Items to Display!</h1>
                                    </div>
                                    : this.state.data.map((order: any) => (
                                        <div
                                            className="flex flex-col bg-white shadow-2xl hover:shadow-lg hover:shadow-gray-200 transition-all duration-300 shadow-gray-200 rounded-xl px-5 py-10 justify-center items-center w-[1000px] h-[325px] gap-5">

                                            <div
                                                className="flex justify-around items-center w-full text-normal text-quinary">
                                                <div className="flex justify-center items-center gap-2">
                                                    <h1 className="text-senary">Order Code: </h1>
                                                    <h1 className="text-smaller">{order.orderId}</h1>
                                                </div>

                                                <div className="flex justify-center items-center gap-2">
                                                    <h1 className="text-senary">Shipping Address: </h1>
                                                    <h1 className="text-smaller">{order.shippingAddress}</h1>
                                                </div>
                                            </div>

                                            <hr className="w-full opacity-70"/>

                                            <div className="flex justify-evenly items-center w-full">

                                                <div
                                                    className="flex flex-col justify-start items-center gap-1 rounded-xl h-56 py-2 px-2 overflow-y-scroll pe-10 overflow-hidden custom-scrollbar">


                                                    {
                                                        order.items.map((orderItem: any, index: number) => (

                                                            <div
                                                                className="flex justify-between w-[350px] hover:bg-nonary transition-all rounded-xl p-3 items-center gap-16">
                                                                <div
                                                                    className="flex flex-col justify-center items-start text-senary text-smaller">
                                                                    <h1>RID00 - 001</h1>
                                                                    <h1>Vegi Fried Rice</h1>
                                                                    <h1>Qty - 5</h1>
                                                                </div>

                                                                <div
                                                                    className="flex flex-col justify-center items-start text-smaller">
                                                                    <h1 className="text-quinary">Total: Rs . 10000/=</h1>
                                                                    <h1 className="text-septenary">Rs . 1000/= per item</h1>
                                                                </div>

                                                            </div>
                                                        ))
                                                    }


                                                </div>


                                                <div
                                                    className="flex flex-col justify-center items-center gap-5 w-[35%] text-quinary text-normal">

                                                    <div className="flex justify-between items-center w-full">
                                                        <h1 className="text-senary text-smaller">SubTotal: </h1>
                                                        <h1>Rs. {order.subTotal}/=</h1>
                                                    </div>

                                                    <div className="flex justify-between items-center w-full">
                                                        <h1 className="text-senary text-smaller">Delivery Cost: </h1>
                                                        <h1 className="text-rose-700">Rs. + {order.deliveryCost}/=</h1>
                                                    </div>

                                                    <div className="flex justify-between items-center w-full">
                                                        <h1 className="text-senary text-smaller">Discount: </h1>
                                                        <h1 className="text-green-600">Rs. - {order.discount}/=</h1>
                                                    </div>

                                                    <div className="flex justify-between items-center w-full">
                                                        <h1 className="text-senary text-smaller">Total: </h1>
                                                        <h1>Rs. {order.total}/=</h1>
                                                    </div>

                                                    <div
                                                        className="flex justify-center items-center gap-3 w-full bg-nonary p-2 rounded-xl">
                                                        {
                                                            (order.status === "Completed")
                                                                ? <h1 className="text-secondary">Completed</h1>
                                                                : <h1 className="text-rose-700">InComplete</h1>
                                                        }

                                                        {
                                                            (order.status === "Completed")
                                                                ? <div
                                                                    className="w-[10px] h-[10px] bg-secondary rounded-full"></div>
                                                                : <div
                                                                    className="w-[10px] h-[10px] bg-rose-700 rounded-full"></div>
                                                        }
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </>
        )
            ;
    }
}

export default YourOrders;
