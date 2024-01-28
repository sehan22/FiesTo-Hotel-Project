import React, {Component} from 'react';
import axios from "axios";
import PaymentBill from "../../../../images/RestaurantPage/CardItemsImg/negi.jpg"

interface UserOrdersList {
    data: [];
    orderId: string;
    status: string;
}


class AdminOrders extends Component<{}, UserOrdersList> {

    private api: any;

    constructor(props: {}) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            orderId: "",
            data: [],
            status: "Completed"
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
            const response = await this.api.get(`/orders/all`);
            this.setState({data: response.data});
        } catch (err) {
            console.error('Error submitting data:', err);
        }
    };

    updateOrderStatus = async () => {
        try {
            const formData = new FormData();
            formData.append('status', this.state.status);

            const response = await this.api.put(`orders/update/${this.state.orderId}`, formData);

            const jsonData = response.data;
            console.log(jsonData);

            alert('Order Status Updated Successfully!');
        } catch (err) {
            console.error('Axios Error:', err);
            alert('Error updating order status: ' + err);
        }
    }

    updateOrderStatusOnAction = () => {
        const isConfirm = window.confirm('Do you want to update order status?');

        (isConfirm)
            ? this.updateOrderStatus()
            : console.log("Order Status Update cancelled!");
    }

    render() {
        return (
            <div className="flex justify-center items-center p-5 w-full mx-auto font-poppins">
                <div className="flex bg-white flex-col justify-center items-center px-10 py-2 gap-5 w-full rounded-xl">

                    {/*orders*/}
                    <div className="flex justify-center items-center mx-auto p-10 font-poppins">
                        <div className="w-full rounded-xl p-5">

                            <div className="flex flex-col justify-center items-center p-5 gap-10">

                                {/*type of orders*/}
                                <div className="flex items-center justify-around bg-white w-[1200px] rounded-xl">
                                    <h1 className="text-quinary text-normal">Orders Summery</h1>

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
                                            <div key={order.orderId}
                                                 className="flex flex-col bg-white shadow-2xl hover:shadow-lg hover:shadow-gray-200 transition-all duration-300 shadow-gray-200 rounded-xl px-5 py-10 justify-center items-center w-[1200px] h-[325px] gap-5">

                                                <div
                                                    className="flex justify-around items-center w-full text-normal text-quinary">
                                                    <div className="flex flex-col justify-center items-start gap-1">
                                                        <div className="flex justify-center items-center gap-2">
                                                            <h1 className="text-senary">Order Code: </h1>
                                                            <h1 className="text-smaller">{order.orderId}</h1>
                                                        </div>

                                                        <div className="flex justify-center items-center gap-2">
                                                            <h1 className="text-senary">User: </h1>
                                                            <h1 className="text-smaller">{order.username}</h1>
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-center items-center gap-2">
                                                        <h1 className="text-senary">Shipping Address: </h1>
                                                        <h1 className="text-smaller">{order.shippingAddress}</h1>
                                                    </div>
                                                </div>

                                                <hr className="w-full opacity-70"/>

                                                <div className="flex justify-evenly items-center w-full mt-[-20px]">

                                                    <div
                                                        className="flex flex-col justify-start items-center gap-1 rounded-xl h-56 py-2 px-2 overflow-y-scroll pe-10 overflow-hidden custom-scrollbar">


                                                        {
                                                            order.items.map((orderItem: any, index: number) => (

                                                                <div key={index}
                                                                     className="flex justify-between w-[350px] hover:bg-nonary transition-all rounded-xl p-3 items-center gap-16">
                                                                    <div
                                                                        className="flex flex-col justify-center items-start text-senary text-smaller">
                                                                        <h1>RID00 - 001</h1>
                                                                        <h1>Vegi Fried Rice</h1>
                                                                        <h1>Qty - 5</h1>
                                                                    </div>

                                                                    <div
                                                                        className="flex flex-col justify-center items-start text-smaller">
                                                                        <h1 className="text-quinary">Total: Rs .
                                                                            10000/=</h1>
                                                                        <h1 className="text-septenary">Rs . 1000/= per
                                                                            item</h1>
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

                                                        <button
                                                            className="flex justify-center items-center gap-3 w-full bg-nonary hover:scale-105 transition-all p-2 rounded-xl"
                                                            type="button"
                                                            onClick={(e) => {
                                                                this.setState({orderId: order.orderId})
                                                                setTimeout(() => {
                                                                    this.updateOrderStatusOnAction();
                                                                }, 200);
                                                            }}
                                                        >
                                                            {
                                                                (order.state === "Completed")
                                                                    ? <h1 className="text-secondary">Completed</h1>
                                                                    : <h1 className="text-rose-700">InComplete</h1>
                                                            }

                                                            {
                                                                (order.state === "Completed")
                                                                    ? <div
                                                                        className="w-[10px] h-[10px] bg-secondary rounded-full"></div>
                                                                    : <div
                                                                        className="w-[10px] h-[10px] bg-rose-700 rounded-full"></div>
                                                            }
                                                        </button>


                                                    </div>

                                                    <div className="bg-secondary h-full w-[200px] rounded-xl">
                                                        <img
                                                            className="w-full h-full object-cover rounded-lg hover:scale-150 hover:shadow-xl transition-all"
                                                            src={`data:image/png;base64, ${order.paymentSlipImg}`} alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AdminOrders;
