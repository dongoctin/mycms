import * as React from "react";
import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";

import Login from "./components/Login";




export default function App() {



  return (
    <div className="container-fuild gap-4 grid grid-cols-1">

      < Login />


    </div>

  );
}
