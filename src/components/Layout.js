import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <h1 className="text-2xl">RETA</h1>
            <nav className=" flex items-center justify-between bg-green-800 p-6 text-white ">
                <ul className='flex items-center'>
                    <li className="mx-2">
                        <NavLink className="text-black-500 hover:text-yellow-400  hover:bg-red-600 px-3 py-2  rounded-md text-sm font-medium  "
                            activeclassname="text-gray-900 bg-gray-100"
                            activeStyle={{ fontWeight: "bold" }} to="/">Trang chủ</NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink className="text-black-500 hover:text-yellow-400  hover:bg-red-600 px-3 py-2 rounded-md text-sm font-medium "
                            activeclassname="text-gray-900 bg-gray-100"
                            activeStyle={{ fontWeight: "bold" }} to="introduction">Giới thiệu</NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink className="text-black-500 hover:text-yellow-400  hover:bg-red-600 px-3 py-2 rounded-md text-sm font-medium "
                            activeclassname="text-gray-900 bg-gray-100"
                            activeStyle={{ fontWeight: "bold" }} to="contact">Liên hệ</NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink className="text-black-500 hover:text-yellow-400  hover:bg-red-600 px-3 py-2 rounded-md text-sm font-medium "
                            activeclassname="text-gray-900 bg-gray-100"
                            activeStyle={{ fontWeight: "bold" }} to="product">Sản phẩm</NavLink>
                    </li>
                    <li className=" mx-2">
                        <NavLink className="text-black-500 hover:text-yellow-400  hover:bg-red-600 px-3 py-2 rounded-md text-sm font-medium "
                            activeclassname="text-gray-900 bg-gray-100"
                            activeStyle={{ fontWeight: "bold" }} to="recruitment">Tuyển dụng</NavLink>
                    </li>
                    <li className=" mx-2">
                        <NavLink className="text-black-500 hover:text-yellow-400  hover:bg-red-600 px-3 py-2 rounded-md text-sm font-medium "
                            activeclassname="text-gray-900 bg-gray-100"
                            activeStyle={{ fontWeight: "bold" }} to="service">Chăm sóc</NavLink>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    );
}
