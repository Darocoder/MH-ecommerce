import React from 'react'
import "./ErrorPage.css"
import img from "../ErrorPage/404.png"

const ErrorPage = ({variable}) => {
    return (
        <div className="ErrorPage">
            <h1>Error 404</h1>
            <h3>La página existe</h3>
            <img className="404" src= {img} alt="Error 404"></img>
        </div>
    );
};

export default ErrorPage;