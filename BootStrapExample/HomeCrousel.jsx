import React from 'react'

export default function HomeCrousel() {
    return (
        <>
            <div id="carouselExample" className="carousel slide mt-1">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require("../../pic/pic_ (8).jpg")} className="d-block w-100" height="500px" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={require("../../pic/pic_ (9).jpg")} className="d-block w-100" height="500px" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={require("../../pic/pic_ (10).jpg")} className="d-block w-100" height="500px" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={require("../../pic/groom (10).jpg")} className="d-block w-100" height="500px" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={require("../../pic/groom (7).jpg")} className="d-block w-100" height="500px" alt="..." />
                    </div>
                    {/* <div className="carousel-item">
                        <img src={require("../../pic/pic_6.jpg")} className="d-block w-100" height="500px" alt="..." />
                    </div> */}
                    <div className="carousel-item">
                        <img src={require("../../pic/pic_ (47).jpg")} className="d-block w-100" height="500px" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={require("../../pic/pic_ (10).jpg")} className="d-block w-100" height="500px" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="main bg-dark text-light text-center mt-1 p-2 m-1">
                <h5 className='xyz'>Latest Product Session</h5>
            </div>
            <div className="container-fluid ">
                <div className="row ">
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-1">
                        <div className="card">
                            <img src={require("../../pic/pic_ (49).jpg")} className="card-img-top" height="150px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Product Item:1</h5>
                                    <p className="card-text">Price:&#8377;<del>2100</del><sub>1400</sub></p>
                                    <a href="#" className="btn btn-dark w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-1">
                        <div className="card">
                            <img src={require("../../pic/pic_ (1).jpg")} className="card-img-top" height="150px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Product Item:1</h5>
                                    <p className="card-text">Price:&#8377;<del>2100</del><sub>1400</sub></p>
                                    <a href="#" className="btn btn-dark w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-1">
                        <div className="card">
                            <img src={require("../../pic/pic_ (1).jpg")} className="card-img-top" height="150px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Product Item:1</h5>
                                    <p className="card-text">Price:&#8377;<del>2100</del><sub>1400</sub></p>
                                    <a href="#" className="btn btn-dark w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-1">
                        <div className="card">
                            <img src={require("../../pic/pic_ (3).jpg")} className="card-img-top" height="150px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Product Item:1</h5>
                                    <p className="card-text">Price:&#8377;<del>2100</del><sub>1400</sub></p>
                                    <a href="#" className="btn btn-dark w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-1">
                        <div className="card">
                            <img src={require("../../pic/pic_ (4).jpg")} className="card-img-top" height="150px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Product Item:1</h5>
                                    <p className="card-text">Price:&#8377;<del>2100</del><sub>1400</sub></p>
                                    <a href="#" className="btn btn-dark w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-1">
                        <div className="card">
                            <img src={require("../../pic/pic_ (5).jpg")} className="card-img-top" height="150px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Product Item:1</h5>
                                    <p className="card-text">Price:&#8377;<del>2100</del><sub>1400</sub></p>
                                    <a href="#" className="btn btn-dark w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-1">
                        <div className="card">
                            <img src={require("../../pic/pic_ (6).jpg")} className="card-img-top" height="150px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Product Item:1</h5>
                                    <p className="card-text">Price:&#8377;<del>2100</del><sub>1400</sub></p>
                                    <a href="#" className="btn btn-dark w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-1">
                        <div className="card">
                            <img src={require("../../pic/pic_ (7).jpg")} className="card-img-top" height="150px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Product Item:1</h5>
                                    <p className="card-text">Price:&#8377;<del>2100</del><sub>1400</sub></p>
                                    <a href="#" className="btn btn-dark w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-1">
                        <div className="card">
                            <img src={require("../../pic/pic_ (8).jpg")} className="card-img-top" height="150px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Product Item:1</h5>
                                    <p className="card-text">Price:&#8377;<del>2100</del><sub>1400</sub></p>
                                    <a href="#" className="btn btn-dark w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-1">
                        <div className="card">
                            <img src={require("../../pic/pic_ (9).jpg")} className="card-img-top" height="150px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Product Item:1</h5>
                                    <p className="card-text">Price:&#8377;<del>2100</del><sub>1400</sub></p>
                                    <a href="#" className="btn btn-dark w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-1">
                        <div className="card">
                            <img src={require("../../pic/pic_ (10).jpg")} className="card-img-top" height="150px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Product Item:1</h5>
                                    <p className="card-text">Price:&#8377;<del>2100</del><sub>1400</sub></p>
                                    <a href="#" className="btn btn-dark w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-1">
                        <div className="card">
                            <img src={require("../../pic/pic_ (11).jpg")} className="card-img-top" height="150px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Product Item:1</h5>
                                    <p className="card-text">Price:&#8377;<del>2100</del><sub>1400</sub></p>
                                    <a href="#" className="btn btn-dark w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-1">
                        <div className="card">
                            <img src={require("../../pic/pic_ (12).jpg")} className="card-img-top" height="150px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Product Item:1</h5>
                                    <p className="card-text">Price:&#8377;<del>2100</del><sub>1400</sub></p>
                                    <a href="#" className="btn btn-dark w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-1">
                        <div className="card">
                            <img src={require("../../pic/pic_ (13).jpg")} className="card-img-top" height="150px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Product Item:1</h5>
                                    <p className="card-text">Price:&#8377;<del>2100</del><sub>1400</sub></p>
                                    <a href="#" className="btn btn-dark w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-1">
                        <div className="card">
                            <img src={require("../../pic/pic_ (14).jpg")} className="card-img-top" height="150px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Product Item:1</h5>
                                    <p className="card-text">Price:&#8377;<del>2100</del><sub>1400</sub></p>
                                    <a href="#" className="btn btn-dark w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-1">
                        <div className="card">
                            <img src={require("../../pic/pic_ (15).jpg")} className="card-img-top" height="150px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Product Item:1</h5>
                                    <p className="card-text">Price:&#8377;<del>2100</del><sub>1400</sub></p>
                                    <a href="#" className="btn btn-dark w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-1">
                        <div className="card">
                            <img src={require("../../pic/pic_ (16).jpg")} className="card-img-top" height="150px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Product Item:1</h5>
                                    <p className="card-text">Price:&#8377;<del>2100</del><sub>1400</sub></p>
                                    <a href="#" className="btn btn-dark w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-1">
                        <div className="card">
                            <img src={require("../../pic/pic_ (15).jpg")} className="card-img-top" height="150px" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Product Item:1</h5>
                                    <p className="card-text">Price:&#8377;<del>2100</del><sub>1400</sub></p>
                                    <a href="#" className="btn btn-dark w-100 btn-sm">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
