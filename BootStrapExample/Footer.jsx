import React from 'react'


export default function Footer() {
    return (
        <>
            <div className="main d-flex bg-dark text-light justify-content-between mt-1 pt-2 m-1">
                <div>
                <img src={require("../../pic/facebook.png")} height="30px" alt="" />
                <img src={require("../../pic/youtube.png")} height="40px" alt="" />
                <img src={require("../../pic/instagram.png")} height="27px" alt="" />
                </div>
                <p className='xyz'>myshop@gmail.com</p>
            </div>
        </>
    )
}
