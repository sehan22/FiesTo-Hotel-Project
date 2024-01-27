import React, {Component} from 'react';
import axios from "axios";

interface usersData {
    data: [];
    fullName: string;
    email: string;
    address: string;
    contact: number | string;
    username: string;
    password: string;
    profileImgUrl: any;
}

class AdminUsers extends Component<{}, usersData> {

    private api: any;

    constructor(props: {}) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            data: [],
            fullName: '',
            email: '',
            address: '',
            contact: '',
            username: '',
            password: '',
            profileImgUrl: null,
        }

        this.handleImgSelectOnChange = this.handleImgSelectOnChange.bind(this);
        this.handleUserInputOnChange = this.handleUserInputOnChange.bind(this);
    }

    handleImgSelectOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.files)
        // @ts-ignore
        const imgFile = e.target.files[0];
        this.setState({profileImgUrl: imgFile})
    }

    handleUserInputOnChange(event: { target: { value: any; name: any; } }) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        //@ts-ignore
        this.setState({
                [name]: value,
            }
        );
    }

    private onCreateAccountFromAdminBtnClick = () => {
        try {
            const userFormData = new FormData();
            userFormData.append('fullName', this.state.fullName);
            userFormData.append('email', this.state.email);
            userFormData.append('address', this.state.address);
            userFormData.append('contact', String(this.state.contact));
            userFormData.append('username', this.state.username);
            userFormData.append('password', this.state.password);
            userFormData.append('profileImgUrl', this.state.profileImgUrl);

            this.api
                .post('/users/save', userFormData, {headers: {'Content-Type': 'multipart/form-data'}})
                .then((res: { data: any }) => {
                    const jsonData = res.data;
                    console.log(jsonData);

                    this.fetchUsersData().then(r => {});
                    alert('User Registration successfully!');


                })
                .catch((err: any) => {
                    console.error('Axios Error' + err);
                    alert(err);
                });
        } catch (err) {
            console.error('Error submitting data:', err);
        }
    };


    componentDidMount() {
        this.fetchUsersData().then( value => {
            console.log("Data fetch completed" + value)
        })
    }

    fetchUsersData = async () => {
        try {
            await this.api.get('/users/all')
                .then((res: { data: any }) => {
                    const jsonData = res.data;
                    console.log(jsonData)
                    this.setState({data: jsonData});
                }).catch((err: any) => {
                    console.error('Axios Error:', err)
                    alert('Axios Error:' + err)
                })
        } catch (err) {
            console.log('Error fetching data: ', err);
        }
    }


    render() {

        return (
            <div>
                <div className="flex justify-center items-center p-5 w-full mx-auto font-poppins gap-5">
                    <div
                        className="flex flex-col justify-center items-center px-10 py-2 gap-5 w-full rounded-xl">

                        <div className="flex justify-between items-start gap-8 w-full">


                            {/*main flex item - 1*/}
                            <div className="w-[28%] bg-white rounded-xl p-5">
                                {/*User Form*/}
                                <form className="flex flex-col justify-center items-center bg-white p-5 w rounded-xl">
                                    <div className="flex flex-col justify-between items-center w-full gap-2 px-5 py-2">
                                        <div className="flex justify-between items-center w-full">
                                            <h1 className="text-quinary text-normal">User Registration</h1>
                                            <p className="text-octonary text-smaller">Create Profile</p>
                                        </div>
                                        <hr className=" bg-secondary w-full mb-2"/>
                                    </div>
                                    <div
                                        className="flex flex-col justify-center items-center gap-6 w-full"> {/*mt-[330px]*/}
                                        <div className="w-full border-gray-400">
                                            <div className="relative w-full min-w-[200px] h-10">
                                                <input
                                                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-smaller px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                                    placeholder=" "
                                                    type="text"
                                                    name="fullName"
                                                    value={this.state.fullName}
                                                    onChange={this.handleUserInputOnChange}
                                                    required/><label
                                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-normal text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Full
                                                Name
                                            </label>
                                            </div>
                                        </div>

                                        <div className="w-full border-gray-400">
                                            <div className="relative w-full min-w-[200px] h-10">
                                                <input
                                                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-smaller px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                                    placeholder=" "
                                                    type="email"
                                                    name="email"
                                                    value={this.state.email}
                                                    onChange={this.handleUserInputOnChange}
                                                    required/><label
                                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-normal text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Email
                                            </label>
                                            </div>
                                        </div>

                                        <div className="w-full border-gray-400">
                                            <div className="relative w-full min-w-[200px] h-10">
                                                <input
                                                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-smaller px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                                    placeholder=" "
                                                    type="text"
                                                    name="address"
                                                    value={this.state.address}
                                                    onChange={this.handleUserInputOnChange}
                                                    required/><label
                                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-normal text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Address
                                            </label>
                                            </div>
                                        </div>

                                        <div className="w-full border-gray-400">
                                            <div className="relative w-full min-w-[200px] h-10">
                                                <input
                                                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-smaller px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                                    placeholder=" "
                                                    type="text"
                                                    name="contact"
                                                    value={this.state.contact}
                                                    onChange={this.handleUserInputOnChange}
                                                    required/><label
                                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-normal text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Contact
                                                Number
                                            </label>
                                            </div>
                                        </div>

                                        <div className="w-full border-gray-400">
                                            <div className="relative w-full min-w-[200px] h-10">
                                                <input
                                                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-smaller px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                                    placeholder=" "
                                                    type="text"
                                                    name="username"
                                                    value={this.state.username}
                                                    onChange={this.handleUserInputOnChange}
                                                    required/><label
                                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-normal text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Username
                                            </label>
                                            </div>
                                        </div>

                                        <div className="w-full border-gray-400">
                                            <div className="relative w-full min-w-[200px] h-10">
                                                <input
                                                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                                    placeholder=" "
                                                    type="password"
                                                    name="password"
                                                    value={this.state.password}
                                                    onChange={this.handleUserInputOnChange}
                                                    required/><label
                                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-normal text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Password
                                            </label>
                                            </div>
                                        </div>

                                        {/*<div className="w-96 border-gray-400">
                                    <div className="relative w-full min-w-[200px] h-10">
                                        <input
                                            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                            placeholder=" "
                                            type="password"
                                            required/><label
                                        className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-normal text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Re-Enter
                                        Password
                                    </label>
                                    </div>
                                </div>*/}

                                        <div className="flex items-center justify-center w-full">
                                            <label htmlFor="dropzone-file"
                                                   className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-100 transition-all">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 20 16">
                                                        <path stroke="currentColor" strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                                    </svg>
                                                    <p className="mb-2 text-sm text-gray-500"><span
                                                        className="font-semibold">Click to upload</span> or drag and
                                                        drop
                                                    </p>
                                                    <p className="text-xs text-gray-500">Profile Picture(Optional)</p>
                                                </div>
                                                <input id="dropzone-file" type="file"
                                                       name="profileImgUrl"
                                                    onChange={(e) => {
                                                        this.handleImgSelectOnChange(e)
                                                    }}
                                                       className="hidden"/>
                                            </label>
                                        </div>

                                        <div className="flex justify-center items-center gap-2 w-full">
                                            <button
                                                className="w-[50%] py-2 border-2 border-octonary border-opacity-25 hover:border-opacity-40 transition-all text-quinary text-normal rounded-lg">Clear
                                            </button>
                                            <button
                                                className="w-[50%] bg-secondary hover:bg-opacity-95 py-2 text-white border-2 border-transparent text-normal transition-all rounded-lg"
                                                type="button"
                                                onClick={this.onCreateAccountFromAdminBtnClick}
                                            >Save
                                            </button>
                                        </div>


                                    </div>
                                </form>
                            </div>

                            {/*main flex item - 2*/}
                            <div className="w-[72%] bg-white rounded-xl p-5">

                                <div className="flex justify-center items-center p-5">

                                    {/*user details tables*/}
                                    <table className="w-full shadow-2xl shadow-gray-100 rounded-xl">
                                        <tbody className="">
                                        <tr className="bg-black bg-opacity-[2.5%]">
                                            <th className="text-quinary text-smaller py-3 p-5 text-start rounded-tl-xl">Name</th>
                                            <th className="text-quinary text-smaller py-3 p-5 text-start">Email</th>
                                            <th className="text-quinary text-smaller py-3 p-5 text-start">Address</th>
                                            <th className="text-quinary text-smaller py-3 p-5 text-start rounded-tr-xl">Contact</th>
                                        </tr>

                                        {
                                            this.state.data.length === 0
                                                ? <tr>
                                                    <td colSpan={5} className="text-quinary text-smaller py-2 p-5 text-center">
                                                        <p className="text-smaller text-septenary p-6">No Items to Display!</p>
                                                    </td>
                                                </tr>

                                                : this.state.data.map((user: any) => (
                                                    <tr key={user.username} className="hover:bg-black hover:bg-opacity-[2.5%] duration-500 transition-all">
                                                        <td className="flex justify-start items-center p-5 gap-2 text-quinary text-smaller py-2 text-start">
                                                            <img
                                                                src={`data:image/png;base64, ${user.profileImgUrl}`}
                                                                className="w-14 relative h-14 rounded-full bg-nonary"
                                                                alt=""/>
                                                            {user.fullName}
                                                        </td>

                                                        <td className="text-quinary text-smaller py-2 p-5 text-start">{user.email}</td>
                                                        <td className="text-quinary text-smaller py-2 p-5 text-start">{user.address}</td>
                                                        <td className="text-quinary text-smaller py-2 p-5 text-start">+94 {user.contact}</td>
                                                    </tr>
                                                ))
                                        }
                                        </tbody>
                                    </table>

                                </div>
                                {/*                                {
                                    data.map((user: any) => (
                                        <h1>{user.fullName}</h1>
                                    ))
                                }*/}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default AdminUsers;
