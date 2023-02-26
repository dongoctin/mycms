import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Product from "./Product"
import Home from './Home'
import Introduction from './Introduction'
import Service from './Service'
import Contact from './Contact'
import Recruitment from './Recruitment'

export default function Main() {
    return (
        <BrowserRouter>
            {/* gom nhom route */}
            <Routes>
                {/* Route cha  */}
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />}> </Route>
                    <Route path="contact" element={<Contact />}> </Route>
                    <Route path="introduction" element={<Introduction />}> </Route>
                    <Route path="product" element={<Product />}> </Route>
                    <Route path="recruitment" element={<Recruitment />}> </Route>
                    <Route path="service" element={<Service />}> </Route>

                </Route>



            </Routes>

        </BrowserRouter>
    );
}


