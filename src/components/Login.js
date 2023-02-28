import React from 'react';
import { useState } from 'react';
import Main from './Main';
import Layout from './Layout';


const Login = () => {
    const adminUser = {
        email: "admin@gmail.com",
        password: "123"
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState("");
    const [detail, setDetail] = useState({ email: "", password: "" });

    const login = () => {
        if (email === adminUser.email && password === adminUser.password) {
            setIsLogin(true);
        } else {
            setError("Invalid email or password");
        }
    };
    const logout = () => {

        setEmail("");
        setPassword("");
        setIsLogin(false);
    };
    if (isLogin) {
        return (
            <div>
                <div className='flex'>
                    <button onClick={logout} className="text-black-500 bg-blue-500 hover:text-yellow-400  hover:bg-red-600 px-3 py-2 rounded-md text-sm font-medium ml-auto "
                        activeclassname="text-gray-900 bg-gray-100"
                        activeStyle={{ fontWeight: "bold" }} to="service">Logout</button>


                </div>
                < Main />
            </div>

        )

    }

    return (
        <div>
            <h1 className='text-center text-2xl font-bold mt-3'>LOGIN FORM</h1>
            {error ? <div className='appearance-none border border-non rounded w-full py-3 px-2 mb-3 bg-pink-200 text-rd-500 '>{error}</div> : ""}
            <form>
                <div className='form group'>
                    <label className="block text-gray-700 font-bold mb-2" for="email">Email</label>
                    <input id="email" type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} className='appearance-none border border-gray-400 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline' />

                </div>
                <div className='form group'>
                    <label className="block text-gray-700 font-bold mb-2" for="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(event) => { setPassword(event.target.value) }} className='appearance-none border border-gray-400 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline' />

                </div>
                <div className='form group'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="button" onClick={() => login()}>Login</button>

                </div>






            </form>
        </div>
    )

}
export default Login;