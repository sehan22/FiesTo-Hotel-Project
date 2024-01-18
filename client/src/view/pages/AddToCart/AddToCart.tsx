import React, {Component} from 'react';
import bannerBackgroundImg from "../../../images/AddToCartPage/bgImg.png";
import axios from "axios";

interface User {
    fullName: string;
    email: string;
    address: string;
    contact: number;
    username: string;
    password: string;
    profileImgUrl: string;
}

interface UserListState {
    userList: User[];
    error: string | null;
}

class AddToCart extends Component<{}, UserListState> {

    constructor(props: {}) {
        super(props);

        this.state = {
            userList: [],
            error: null,
        };
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = async () => {
        try {
            const response = await axios.get<User[]>('http://localhost:4000/users/all');
            this.setState({userList: response.data});
        } catch (err) {
            console.error('Error fetching users:', err);
            this.setState({error: 'Something went wrong while fetching users.'});
        }
    };


    render() {

        const { userList, error } = this.state;

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
                        <div className="hidden lmd:block h-0.5 opacity-50 bg-septenary w-32"></div>
                    </div>



                    <button className="px-5 py-3 bg-gray-400"
                            onClick={this.buttonClick}
                    >check state
                    </button>

                    <ul>
                        {userList.map((user) => (
                            <img src={`data:image/png;base64, ${user.profileImgUrl}`} alt=""/>
                        ))}
                    </ul>
                </div>
            </>
        );
    }

    private buttonClick() {
        //@ts-ignore
        const {data} = this.state;
        console.log(data[0]);
    }
}

export default AddToCart;
