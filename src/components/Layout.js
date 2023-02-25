import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <h1 className="text-2xl">RETA</h1>
            <nav>
                <ul className='header list-disc list-inside '>
                    <li className="mx-2">
                        <NavLink className="text-black-500 hover:text-red-500  hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium underline "
                            activeclassname="text-gray-900 bg-gray-100"
                            activeStyle={{ fontWeight: "bold" }} to="/">Trang chủ</NavLink>
                    </li>
                    <li className="list-disc mx-2">
                        <NavLink className="text-black-500 hover:text-red-500 hover:bg-gray-200 px-2 py-2 rounded-md text-sm font-medium underline"
                            activeclassname="text-gray-900 bg-gray-100"
                            activeStyle={{ fontWeight: "bold" }} to="introduction">Giới thiệu</NavLink>
                    </li>
                    <li className="list-disc mx-2">
                        <NavLink className="text-black-500 hover:text-red-500 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium underline"
                            activeclassname="text-gray-900 bg-gray-100"
                            activeStyle={{ fontWeight: "bold" }} to="contact">Liên hệ</NavLink>
                    </li>
                    <li className="list-disc mx-2">
                        <NavLink className="text-black-500 hover:text-red-500 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium underline"
                            activeclassname="text-gray-900 bg-gray-100"
                            activeStyle={{ fontWeight: "bold" }} to="product">Sản phẩm</NavLink>
                    </li>
                    <li className="list-disc mx-2">
                        <NavLink className="text-black-500 hover:text-red-500  hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium underline"
                            activeclassname="text-gray-900 bg-gray-100"
                            activeStyle={{ fontWeight: "bold" }} to="recruitment">Tuyển dụng</NavLink>
                    </li>
                    <li className="list-disc mx-2">
                        <NavLink className="text-black-500 hover:text-red-500 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium underline"
                            activeclassname="text-gray-900 bg-gray-100"
                            activeStyle={{ fontWeight: "bold" }} to="service">Chăm sóc</NavLink>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    );
}
