import React, {Component} from 'react';
import DollarIcon from '../../../../images/Admin/Dashboard/dollaricon.png'
import UsersIcon from '../../../../images/Admin/Dashboard/usersicon.png'
import OrdersIcon from '../../../../images/Admin/Dashboard/ordersicon.png'
import CompleteOrderIcon from '../../../../images/Admin/Dashboard/completeordericon.png'
import PieChart from '../../../../images/Admin/Dashboard/piechart.png'
import ChartImg from '../../../../images/Admin/Dashboard/chart.png'
import ChartOneImg from '../../../../images/Admin/Dashboard/chart1.png'


class AdminDashboard extends Component {
    render() {
        return (
            <div className="flex justify-center items-center p-5 w-full mx-auto font-poppins">
                <div className="flex flex-col justify-center items-center px-10 py-2 gap-5 w-full rounded-xl">

                    {/*main grid*/}
                    <div className="grid grid-cols-4 gap-8 w-full">

                        {/*grid item*/}
                        <div className="flex justify-center items-center bg-white p-10 rounded-xl">
                            <div className="flex justify-between items-center gap-16">
                                <div className="flex flex-col items-start justify-center">
                                    <h6 className="text-smaller text-senary">Budgets</h6>
                                    <h1 className="text-[30px]">$48.5</h1>
                                    <p className="text-smaller">Budget Summary</p>
                                </div>

                                <div className="flex justify-center w-16 h-16 items-center p-5 bg-red-500 rounded-full">
                                    <img className="bg-white p-1 rounded-full" src={DollarIcon} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center bg-white p-10 rounded-xl">
                            <div className="flex justify-between items-center gap-16">
                                <div className="flex flex-col items-start justify-center">
                                    <h6 className="text-smaller text-senary">Users</h6>
                                    <h1 className="text-[30px]">8.5K</h1>
                                    <p className="text-smaller">Users Summary</p>
                                </div>

                                <div className="flex justify-center w-16 h-16 items-center p-5 bg-teal-500 rounded-full">
                                    <img className="bg-white p-1 rounded-full" src={UsersIcon} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center bg-white p-10 rounded-xl">
                            <div className="flex justify-between items-center gap-16">
                                <div className="flex flex-col items-start justify-center">
                                    <h6 className="text-smaller text-senary">Orders</h6>
                                    <h1 className="text-[30px]">$48.5</h1>
                                    <p className="text-smaller">Orders Summary</p>
                                </div>

                                <div className="flex justify-center w-16 h-16 items-center p-5 bg-orange-500 rounded-full">
                                    <img className="bg-white p-1 rounded-full" src={OrdersIcon} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center bg-white p-10 rounded-xl">
                            <div className="flex justify-between items-center gap-16">
                                <div className="flex flex-col items-start justify-center">
                                    <h6 className="text-smaller text-senary">Completed Orders</h6>
                                    <h1 className="text-[30px]">$48.5</h1>
                                    <p className="text-smaller">Orders Summary</p>
                                </div>

                                <div className="flex justify-center w-16 h-16 items-center p-5 bg-indigo-500 rounded-full">
                                    <img className="bg-white p-1 rounded-full" src={CompleteOrderIcon} alt=""/>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="flex h-[435px] justify-between items-center gap-8 w-full">
                        <div className="h-[435px] w-[70%] flex gap-10 justify-center items-center bg-white rounded-xl p-5">
                            <img className="object-scale-down h-[270px] w-[450px]" src={ChartImg} alt=""/>
                            <img className="object-scale-down h-[270px] w-[450px]" src={ChartOneImg} alt=""/>
                        </div>

                        <div className="h-[435px] w-[30%] flex justify-center items-center bg-white rounded-xl p-5">
                            <img src={PieChart} alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AdminDashboard;
