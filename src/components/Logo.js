import React from "react";
import logo from "./images/logo.png";

export default function Logo(){

    return(
     <>
        <div className="logo">
         <img src={logo} alt="logo-img"/>
        </div>
     </>
    );
}