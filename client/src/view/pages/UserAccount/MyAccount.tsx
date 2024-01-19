import React, {Component} from 'react';
import bannerBackgroundImg from "../../../images/MyAccount/bgImg.jpg";
import ProfileImg from "../../../images/MyAccount/ProfileImg.png";
import axios from "axios";


interface UserDetailsList {
    fullName: string;
    email: string;
    address: string;
    contact: string;
    username: string;
    password: string;
    profileImgUrl: any;
    newPassword: string;
    reEnterNewPassword: string;
    isInputDisable: boolean;
}

class MyAccount extends Component<{}, UserDetailsList> {
    private api: any;

    constructor(props: {}) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});

        this.state = {
            username: "",
            fullName: "",
            email: "",
            address: "",
            contact: "",
            password: "",
            profileImgUrl: null,
            newPassword: "",
            reEnterNewPassword: "",
            isInputDisable: true
        }

        this.handleImgSelectOnChange = this.handleImgSelectOnChange.bind(this);
    }

    private deleteAccount = () => {
        try {
            this.api.delete(`/users/delete/${localStorage.getItem('username')}`)
                .then((res: { data: any }) => {
                    localStorage.setItem('isUserLoggedIn', "false")
                    window.location.href = '/';

                }).catch((err: any) => {
                console.error('Axios Error' + err);
                alert("Front End Error" + err);
            });
        } catch (err) {
            console.log("Front End Error" + err);
            alert("Front End Error" + err);
        }
    }

    private deleteAccountOnAction = () => {
        const isConfirm = window.confirm('Do you want to delete your Account?');

        (isConfirm)
            ? this.deleteAccount()
            : console.log("Account deleted cancelled!");
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = async () => {
        try {
            const response = await this.api.get(`/users/find/${localStorage.getItem('username')}`);
            this.setState({username: response.data.username});
            this.setState({fullName: response.data.fullName});
            this.setState({email: response.data.email});
            this.setState({address: response.data.address});
            this.setState({contact: response.data.contact});
            this.setState({password: response.data.password});
            this.setState({profileImgUrl: response.data.profileImgUrl});
        } catch (err) {
            console.error('Error submitting data:', err);
        }
    };

    handleImgSelectOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.files)
        // @ts-ignore
        const imgFile = e.target.files[0];
        // @ts-ignore
        this.setState({profileImgUrl: imgFile})
    }

    private updateProfileOnAction = async () => {
        try {
            const formData = new FormData();
            formData.append('fullName', this.state.fullName);
            formData.append('email', this.state.email);
            formData.append('address', this.state.address);
            formData.append('contact', String(this.state.contact));
            formData.append('username', this.state.username);
            formData.append('password', this.state.password);
            formData.append('profileImgUrl', this.state.profileImgUrl);

            const response = await this.api.put(`users/update/${this.state.username}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const jsonData = response.data;
            console.log(jsonData);

            localStorage.setItem('profileImg', `${response.data.profileImgUrl}`);
            window.location.reload();

            alert('Your Account Details updated successfully!');
        } catch (error) {
            console.error('Axios Error:', error);
            alert('Error updating account details: ' + error);
        }
    };

    private updatePassword = async () => {
        try {
            const formData = new FormData();
            formData.append('password', this.state.reEnterNewPassword);

            const response = await this.api.put(`users/update/${this.state.username}`, formData);

            const jsonData = response.data;
            console.log(jsonData);

            window.location.reload();

            alert('Your Account Details updated successfully!');
        } catch (error) {
            console.error('Axios Error:', error);
            alert('Error updating account details: ' + error);
        }
    }

    private updateProfilePasswordOnAction = async () => {
        (this.state.newPassword === this.state.reEnterNewPassword)
            ? await this.updatePassword()
            : alert("Enter Correct Password!");
    };

    private activeTextFieldOneAction = () => {
        this.setState({isInputDisable: false});
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
                        backgroundPosition: 'center',
                        objectFit: 'scale-down'
                    }}>
                    <h1 className="font-Milonga text-topic md:text-bannertopic text-white p-2">My Account</h1>
                    <div className="flex flex-col lmd:items-center lmd:justify-center gap-2 p-2 ">
                        <div className="h-0.5 opacity-50 bg-septenary w-44"></div>
                        <h6 className="font-poppins text-normal text-nonary">Your Account Details</h6>
                    </div>
                </div>


                {/*First Div*/}
                <div className="flex justify-center items-center mx-auto p-2">

                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-5 2xl:p-10 bg-white shadow-lg mb-[60px] md:mb-[120px] mt-[60px] md:mt-[120px] rounded-xl">

                        {/*first grid item*/}
                        <div className="flex justify-center items-center bg-white rounded-xl p-2">

                            <form className="flex flex-col justify-center items-center gap-5 w-full">

                                <div
                                    className="flex flex-col lg:flex-row lg:gap-3 justify-center items-center">
                                    <div className="relative">
                                        <img src={`data:image/png;base64, ${this.state.profileImgUrl}`}
                                             className="w-40 relative h-40 rounded-full my-5 bg-nonary" alt=""/>

                                        <input type="file"
                                               name="profileImgUrl"
                                               className="bottom-0 mb-5 ms-28 absolute file:cursor-pointer w-[85px] file:w-full file:bg-secondary file:bg-opacity-20 file:border-none file:py-2 file:text-[12px] file:font-poppins file:text-quinary file:rounded-md max-w-xs"
                                               onChange={(e) => {
                                                   this.handleImgSelectOnChange(e)
                                               }}
                                        />
                                    </div>


                                    <div className="flex flex-col text-center lg:text-start">
                                        <h1 className="text-loginpagetopic font-bold text-quinary">{this.state.fullName}</h1>
                                        <h6 className="text-smaller text-senary">Your Account Details</h6>
                                    </div>
                                </div>

                                <div className="w-full flex flex-col sm:flex-row justify-center gap-2 items-center">
                                    <div className="order-2 sm:order-1 w-full">
                                        <input
                                            id="myInput"
                                            className="w-full bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4"
                                            type="text"
                                            placeholder="Username"
                                            name="username"
                                            disabled={true}
                                            value={this.state.username}
                                            onChange={(e) => this.setState({username: e.target.value})}
                                        />
                                    </div>

                                    <button
                                        className="hover:bg-nonary sm:order-2 transition-all flex justify-center items-start gap-2 text-smaller duration-300 hover:text-white py-3 px-4 rounded"
                                        type="button"
                                        onClick={this.activeTextFieldOneAction}
                                    >
                                        <h6 className="font-bold tracking-wider text-quinary">Edit</h6>

                                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 512 512">
                                            <path fill="#4e4e50"
                                                  d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
                                        </svg>
                                    </button>
                                </div>

                                <div className="w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput2"
                                        className="bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="text"
                                        placeholder="Full Name"
                                        name="fullName"
                                        disabled={this.state.isInputDisable}
                                        value={this.state.fullName}
                                        onChange={(e) => this.setState({fullName: e.target.value})}
                                    />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput3"
                                        className="bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        disabled={this.state.isInputDisable}
                                        value={this.state.email}
                                        onChange={(e) => this.setState({email: e.target.value})}
                                    />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput4"
                                        className="bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="text"
                                        placeholder="Address"
                                        name="address"
                                        disabled={this.state.isInputDisable}
                                        value={this.state.address}
                                        onChange={(e) => this.setState({address: e.target.value})}
                                    />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput5"
                                        className="bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="text"
                                        placeholder="Contact"
                                        name="contact"
                                        disabled={this.state.isInputDisable}
                                        value={this.state.contact}
                                        onChange={(e) => this.setState({contact: e.target.value})}
                                    />
                                </div>

                                <div className="flex gap-2 w-full">
                                    <button
                                        className="bg-secondary transition-all text-smaller font-bold tracking-wider text-white hover:bg-teal-600 py-3 px-4 w-full rounded"
                                        type="button"
                                        onClick={this.updateProfileOnAction}
                                    >
                                        Update Profile
                                    </button>
                                </div>
                            </form>

                        </div>

                        {/*second grid item*/}
                        <div
                            className="flex flex-col justify-center items-center bg-white rounded-xl gap-10 p-2">

                            <form
                                className="flex flex-col justify-center items-center sm:border-2 sm:p-5 sm:border-nonary rounded-xl bg-white gap-5 w-full">

                                <div className="flex justify-start w-full text-loginpagetopic">
                                    <h1 className="text-start font-bold text-quinary">Update Account Password</h1>
                                </div>

                                <div className="w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput6"
                                        className="bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="password"
                                        placeholder="Current Password"
                                        name="currentPassword"
                                        disabled={true}
                                        value={this.state.password}
                                    />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput7"
                                        className="bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="text"
                                        placeholder="New Password"
                                        value={this.state.newPassword}
                                        onChange={(e) => this.setState({newPassword: e.target.value})}
                                    />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="myInput" className="block text-sm font-medium text-gray-600">
                                    </label>
                                    <input
                                        id="myInput8"
                                        className="bg-nonary font-poppins text-smaller text-quinary rounded-lg focus:outline-none p-4 w-full"
                                        type="text"
                                        placeholder="Re-Enter New Password"
                                        value={this.state.reEnterNewPassword}
                                        onChange={(e) => this.setState({reEnterNewPassword: e.target.value})}
                                    />
                                </div>

                                <div className="flex gap-2 w-full">
                                    <button
                                        className="bg-[#365EC7] transition-all text-smaller font-bold tracking-wider text-white hover:bg-[#2D56BF] py-3 px-4 w-full rounded"
                                        type="button"
                                        onClick={this.updateProfilePasswordOnAction}
                                    >
                                        Update Password
                                    </button>
                                </div>
                            </form>

                            <div
                                className="flex flex-col justify-center items-center sm:border-2 sm:p-5 sm:border-nonary rounded-xl bg-white gap-5">

                                <div className="flex flex-col justify-center text-loginpagetopic">
                                    <h1 className="text-start font-bold text-quinary">Delete Your Account</h1>
                                    <p className="text-smaller">
                                        Once you delete your account, there is no going back. Please be certain.
                                    </p>
                                </div>

                                <div className="flex gap-2 w-full">
                                    <button
                                        className="bg-[#D82424] transition-all text-smaller font-bold tracking-wider text-white hover:bg-[#CE1919] py-3 px-4 w-full rounded"
                                        onClick={this.deleteAccountOnAction}
                                    >
                                        Delete Your Account
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default MyAccount;
