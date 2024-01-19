import React, {Component} from 'react';
import bannerBackgroundImg from "../../../images/AddToCartPage/bgImg.png";
import axios from "axios";

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

    componentDidMount() {
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
    };

    private checkStateOnAction = () => {

    }


    render() {

        return (
            <>
                {/*Banner*/}
                <div
                    className="flex flex-col items-start justify-center lmd:items-center lmd:justify-center w-full h-screen md:max-h-[500px] md:rounded-b-3xl bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bannerBackgroundImg})`,
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

                <div className="flex justify-center items-center mx-auto"></div>
            </>
        );
    }
}

export default AddToCart;
