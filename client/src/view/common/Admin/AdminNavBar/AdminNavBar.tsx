import React, {Component} from 'react';
import fIcon from '../../../../images/Admin/NavBar/ficonlight.png'
import {Link} from "react-router-dom";

class AdminNavBar extends Component {
    render() {
        return (
            <div
                className="flex justify-center items-center fixed left-0 p-5 max-h-[100%] h-[100%] text-white font-poppins">
                <div
                    className="flex flex-col justify-between items-center rounded-3xl p-5 bg-secondary h-[100%] shadow-xl transition-all">

                    <div className="flex flex-col justify-center items-center gap-16">
                        <div className="w-8 h-8 ">
                            <img className="w-full object-scale-down" src={fIcon} alt=""/>
                        </div>
                        {/*main grid*/}
                        <div className="grid grid-cols-1 gap-6">


                            {/*grid item*/}
                            <div className="w-9 h-9 p-2">
                                <Link to="/admin/">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 576 512">
                                        <path className="hover:text-senary" fill="#ffffff"
                                              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                                    </svg>
                                </Link>
                            </div>

                            {/*grid item*/}
                            <div className="w-9 h-9 p-2">
                                <Link to="">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 640 512">
                                        <path fill="#ffffff"
                                              d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c1.8 0 3.5-.2 5.3-.5c-76.3-55.1-99.8-141-103.1-200.2c-16.1-4.8-33.1-7.3-50.7-7.3H178.3zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.8L591.4 312z"/>
                                    </svg>
                                </Link>
                            </div>

                            {/*grid item*/}
                            <div className="w-9 h-9 p-2">
                                <Link to="">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 448 512">
                                        <path fill="#ffffff"
                                              d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/>
                                    </svg>
                                </Link>
                            </div>

                            {/*grid item*/}
                            <div className="w-9 h-9 p-2">
                                <Link to="">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 576 512">
                                        <path fill="#ffffff"
                                              d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                                    </svg>
                                </Link>
                            </div>

                            {/*grid item*/}
                            <div className="w-9 h-9 p-2">
                                <Link to="">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 576 512">
                                        <path fill="#ffffff"
                                              d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"/>
                                    </svg>
                                </Link>
                            </div>

                            {/*grid item*/}
                            <div className="w-9 h-9 p-2">
                                <Link to="">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 448 512">
                                        <path fill="#ffffff"
                                              d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/>
                                    </svg>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5">

                        <div className="w-9 h-9 p-2">
                            <Link to="/login">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512">
                                    <path fill="#ffffff"
                                          d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AdminNavBar;
