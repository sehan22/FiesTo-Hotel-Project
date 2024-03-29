import React, {Component} from 'react';
import bgImg from '../../../images/RestaurantPage/bgimg.png'
import {CartItem} from "../../../model/CartItem";
import LoadingIcon from "../../../images/AddToCart/loading.gif";
import axios from "axios";

interface ShoppingCartProps {
    itemsList: CartItem[];
}

interface OrderState {
    orderId: string;
    username: string;
    items: CartItem[];
    item: [];
    delivery: boolean;
    shippingAddress: string;
    paymentSlipImg: any;
    subTotal: number;
    deliveryCost: number;
    discount: number;
    total: number;
    status: string;
    lastIndexOrderId: string | null;
    savingOrder: boolean;
}

class AddToCart extends Component<ShoppingCartProps, OrderState> {
    private api: any;

    constructor(props: ShoppingCartProps) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            orderId: "",
            username: "",
            items: this.props.itemsList,
            item: [],
            delivery: false,
            shippingAddress: "",
            paymentSlipImg: undefined,
            subTotal: 0,
            deliveryCost: 250,
            discount: 200,
            total: 0,
            status: "Incomplete",
            lastIndexOrderId: "",
            savingOrder: false,

        }

        this.handleImgSelectOnChange = this.handleImgSelectOnChange.bind(this);

    }

    /*import to get request*/

    /*const jsonData = JSON.parse(req.body.jsonData);*/

    componentDidMount() {
        this.accountPaymentBalance();
        this.getLastIndexOrderIdOnAction().then(r => console.log(r));

    }

    getLastIndexOrderIdOnAction = async () => {
        try {
            await this.api.get('/orders/lastOrderIndex')
                .then((res: { data: any }) => {
                    const jsonData = res.data;
                    console.log("orderID: " + jsonData.orderId)
                    this.setState({
                        orderId: jsonData.orderId
                    });
                }).catch((err: any) => {
                    console.error('Axios Error - Client Side: ' + err.message);
                    alert(err);
                });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    accountPaymentBalance = () => {
        let subTotal = 0;
        let total = 0;
        let items = this.state.items;

        for (let item of items) {
            subTotal += item.product.price * item.itemCount;
            this.setState({
                subTotal: subTotal
            });
            total += item.product.price * item.itemCount;
        }

        total -= this.state.discount;
        total += this.state.deliveryCost;

        this.setState({
            total: total
        });
    }

    handleImgSelectOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.files)

        // @ts-ignore
        const imgFile = e.target.files[0];
        this.setState({paymentSlipImg: imgFile})
    }

    /*items array error*/
    orderOnAction = async () => {
        if (this.state.items.length !== 0) {
            if (this.state.paymentSlipImg !== undefined) {
                try {
                    this.setState({savingOrder: true});

                    const formData = new FormData();
                    formData.append('orderId', this.state.orderId);

                    const username: any = localStorage.getItem("username");
                    formData.append('username', username.toString());

                    for (let item of this.state.items) {
                        formData.append('items[]', JSON.stringify({
                            id: item.product.id,
                            name: item.product.name,
                            price: item.product.price * item.itemCount,
                            orderedQTY: item.itemCount,
                        }));

                    }

                    /**! problem to pass boolean */
                    /*formData.append('delivery', this.state.delivery.toString());*/

                    formData.append('subTotal', this.state.subTotal.toString());
                    formData.append('deliveryCost', this.state.deliveryCost.toString());
                    formData.append('discount', this.state.discount.toString());
                    formData.append('total', this.state.total.toString());
                    formData.append('delivery', this.state.delivery.toString());
                    formData.append('status', this.state.status.toString());

                    formData.append('shippingAddress', this.state.shippingAddress);
                    formData.append('paymentSlipImg', this.state.paymentSlipImg);

                    await this.api
                        .post('/orders/save', formData,
                            {
                                headers: {'Content-Type': 'multipart/form-data'},
                            })
                        .then((res: { data: any }) => {
                            const jsonData = res.data;
                            console.log(jsonData);
                            this.getLastIndexOrderIdOnAction();
                            this.props.itemsList.splice(0, this.props.itemsList.length);

                            this.setState({savingOrder: false});

                            setTimeout(() => {
                                alert('Your Order Place successfully!');
                            }, 100);

                            /*setInterval(() => {
                                window.location.href = '/login';
                            }, 1000);*/
                        })
                        .catch((err: any) => {
                            this.setState({savingOrder: false});
                            console.error('Axios Error - Client Side: ' + err.message);
                            alert(err);
                        });
                } catch (err) {
                    this.setState({savingOrder: false});
                    console.error('Error submitting data:', err);
                    alert("Client Error" + err);
                }
            } else {
                alert("Add Payment Slip to Required Field")
            }
        } else {
            alert("Add Items to your cart first!")
        }
    }

    isDeliveryOnAction = () => {
        this.setState((prevState) => ({delivery: !prevState.delivery}));
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
                                <h1 className="text-normal text-senary">Items
                                    {
                                        (this.state.items.length !== 0)
                                            ? (this.state.items.length >= 10)
                                                ? this.state.items.length
                                                : ` 0${this.state.items.length}`

                                            : ` 0`
                                    }
                                </h1>
                            </div>

                            <div className="w-full p-5">
                                <hr className="bg-octonary bg-opacity-50 rounded-full w-full"/>
                            </div>

                            {/*cart item - restaurant items*/}
                            <div
                                className="grid grid-cols-1 gap-5 max-w-[820px] items-start justify-start w-full rounded-xl custom1-scrollbar">

                                {
                                    this.state.items.length === 0
                                        ? <div className="flex justify-center items-center w-full h-full">
                                            <h5 className="font-poppins text-smaller text-quinary">No Items to
                                                Display!</h5>
                                        </div>

                                        : this.state.items.map((item, index) => (
                                            <div key={index} className="flex items-center justify-between p-2">

                                                <div
                                                    className="grid grid-cols-1 sm:grid-cols-2 justify-between h-full w-full lg:gap-10 gap-2">

                                                    {/*item img and description*/}
                                                    <div
                                                        className="flex flex-col lmd:flex-row justify-start gap-2 items-start lmd:items-center">
                                                        <img className="w-full lmd:max-w-52"
                                                             src={`data:image/png;base64, ${item.product.image}`} alt=""/>

                                                        <div
                                                            className="flex flex-col justify-center items-start gap-2 overflow-hidden p-2 font-poppins">
                                                            <h1 className="overflow-hidden w-full overflow-ellipsis whitespace-nowrap text-normal text-quinary">{item.product.name}</h1>
                                                            <h1 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-secondary text-smaller">{item.product.rating} rating</h1>
                                                        </div>
                                                    </div>

                                                    {/*qty and total*/}
                                                    <div
                                                        className="flex flex-col lmd:flex-row w-full gap-5 justify-start sm:justify-center items-center p-2">
                                                        <div className="flex justify-start gap-3 lg:gap-5 items-center">
                                                            <div
                                                                className="flex justify-center items-center gap-3 text-quinary">
                                                                <button
                                                                    className="w-6 h-6 text-smaller rounded-full bg-black bg-opacity-5 hover:bg-opacity-10 transition-all"
                                                                    disabled={true}
                                                                >-
                                                                </button>

                                                                <h6 className="text-smaller">{item.itemCount}</h6>

                                                                <button
                                                                    className="w-6 h-6 text-smaller rounded-full bg-black bg-opacity-5 hover:bg-opacity-10 transition-all"
                                                                    disabled={true}
                                                                >+
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
                                                                className="px-3 py-2 border-opacity-25 rounded-xl transition-all bg-red-500 hover:bg-red-600 text-white font-poppins text-smaller"
                                                                onClick={() => {
                                                                    const updatedItemsList = [...this.state.items]
                                                                    updatedItemsList.splice(index, 1);

                                                                    this.props.itemsList.splice(index, 1);

                                                                    this.setState({
                                                                        items: updatedItemsList
                                                                    });

                                                                    this.setState({
                                                                        subTotal: this.state.subTotal - (item.product.price * item.itemCount),
                                                                        total: this.state.subTotal - ((item.product.price * item.itemCount))
                                                                    });
                                                                }}
                                                            > Remove
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

                                    <div className="flex items-center justify-center gap-5">

                                        <div className="flex items-center gap-2">
                                            <label htmlFor="default-checkbox"
                                                   className="ms-2 text-smaller font-medium text-senary">
                                                Delivery(Yes or No)
                                            </label>
                                            <input id="default-checkbox" type="checkbox"
                                                   checked={this.state.delivery}
                                                   onChange={this.isDeliveryOnAction}
                                                   className="w-3.5 h-3.5 text-secondary bg-gray-100 border-gray-300 rounded focus:ring-secondary dark:focus:ring-transparent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

                                        </div>

                                    </div>
                                </div>

                                <div className="mb-4 w-full lmd:min-w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    {
                                        (this.state.delivery)
                                            ? <input
                                                id="myInput"
                                                className="bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                                type="text"
                                                name="shippingAddress"
                                                placeholder="Shipping Address"
                                                value={this.state.shippingAddress}
                                                onChange={(e) => this.setState({shippingAddress: e.target.value})}
                                            />
                                            : <input
                                                id="myInput"
                                                className="bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                                type="text"
                                                name="shippingAddress"
                                                placeholder="Shipping Address"
                                                value=""
                                                disabled={true}
                                            />
                                    }
                                </div>

                                <div className="mb-4 w-full lmd:min-w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                        Payment Slip</label>
                                    <input
                                        id="myInput"
                                        className="file:bg-secondary file:text-white file:border-none file:py-1 file:rounded-lg bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="file"
                                        name="paymentSlipImg"
                                        onChange={(e) => {
                                            this.handleImgSelectOnChange(e)
                                        }}
                                    />
                                </div>

                                <div className="flex justify-between items-center w-full font-poppins">
                                    <h1 className="text-smaller md:text-normal text-senary">SubTotal:</h1>
                                    <h1 className="text-smaller md:text-normal text-quinary"> Rs.
                                        {
                                            (this.state.items.length !== 0)
                                                ? ` ${this.state.subTotal}`
                                                : ` 0`
                                        }
                                        /=
                                    </h1>
                                </div>

                                <div className="flex justify-between items-center w-full font-poppins">
                                    <h1 className="text-smaller md:text-normal text-senary">Discount:</h1>
                                    <h1 className="text-smaller md:text-normal text-lime-600">Rs: -
                                        {
                                            (this.state.items.length !== 0)
                                                ? ` ${this.state.discount}`
                                                : ` 0`
                                        }
                                        /=
                                    </h1>
                                </div>

                                <div className="flex justify-between items-center w-full font-poppins">
                                    <h1 className="text-smaller md:text-normal text-senary">Delivery cost:</h1>
                                    <h1 className="text-smaller md:text-normal text-rose-700">Rs: +
                                        {
                                            (this.state.items.length !== 0)
                                                ? ` ${this.state.deliveryCost}`
                                                : ` 0`
                                        }
                                        /=
                                    </h1>
                                </div>

                                <div className="w-full py-0.5 px-5">
                                    <hr className="bg-octonary bg-opacity-50 rounded-full w-full"/>
                                </div>

                                <div className="flex justify-between items-center w-full font-poppins">
                                    <h1 className="text-smaller md:text-normal text-senary">Total:</h1>
                                    <h1 className="text-smaller md:text-normal text-quinary">Rs:
                                        {
                                            (this.state.items.length !== 0)
                                                ? ` ${this.state.total}`
                                                : ` 0`
                                        }
                                        /=
                                    </h1>
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
                                        className="bg-secondary mt-2 font-bold text-normal transition-all text-white hover:bg-teal-600 py-2 px-4 w-full rounded"
                                        type="button"
                                        onClick={this.orderOnAction}
                                    >
                                        {
                                            (this.state.savingOrder)
                                                ? <div className="flex justify-center items-center gap-2">
                                                    <h1>Processing</h1>
                                                    <img className="w-4" src={LoadingIcon} alt=""/>
                                                </div>
                                                : <h1>Purchase Now</h1>
                                        }
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
