import React from 'react'
import HomeCrousel from './HomeCrousel'
import Footer from './Footer'

export default function Navbar() {
    return (
        <>
            <nav className=" navbar navbar-expand-lg bg-dark">
                <div className=" container-fluid">
                    <a className=" navbar-brand text-light" href="#">MyShop</a>
                    <button className=" navbar-toggler br1 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=" navbar-toggler-icon "></span>
                    </button>
                    <div className=" collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className=" navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className=" nav-item">
                                <a className=" nav-link active text-light" aria-current="page" href="#">Home</a>
                            </li>
                            <li className=" nav-item">
                                <a className=" nav-link active text-light" aria-current="page" href="#">Abou</a>
                            </li>
                            <li className=" nav-item">
                                <a className=" nav-link active text-light" aria-current="page" href="#">Shop</a>
                            </li>
                            <li className=" nav-item">
                                <a className=" nav-link active text-light" aria-current="page" href="#">Home</a>
                            </li>


                        </ul>
                        <form className=" d-flex w-100" role="search">
                            <input className=" form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className=" btn btn-outline-light" type="submit">Search</button>
                        </form>
                        <ul className=" navbar-nav me-auto mb-2 mb-lg-0">

                            <li className=" nav-item dropdown">
                                <a className=" nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ahmed Shoaib
                                </a>
                                <ul className=" dropdown-menu">
                                    <li><a className=" dropdown-item" href="#">Profile</a></li>
                                    <li><a className=" dropdown-item" href="#">Contact</a></li>
                                    <li><hr className=" dropdown-divider" /></li>
                                    <li><a className=" dropdown-item" href="#">LogOut</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <HomeCrousel />
            <Footer />
        </>
    )
}
