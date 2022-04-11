import React from 'react'

export default function Login() {

    const google = () => {
        window.open("http://localhost:8000/auth/google", "_self")
    }

    const github = () => {
        window.open("http://localhost:8000/auth/github", "_self")
    }

    return (
        <div>
            <section className="text-center text-lg-start">
                <div className="container py-4">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="card cascading-right">
                                <div className="card-body p-5 shadow-5 text-center">
                                    <h2 className="fw-bold mb-5">Sign up now</h2>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1" className="form-control" />
                                                    <label className="form-label" htmlFor="form3Example1">First name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example2" className="form-control" />
                                                    <label className="form-label" htmlFor="form3Example2">Last name</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="email" id="form3Example3" className="form-control" />
                                            <label className="form-label" htmlFor="form3Example3">Email address</label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="password" id="form3Example4" className="form-control" />
                                            <label className="form-label" htmlFor="form3Example4">Password</label>
                                        </div>
                                        <div className="text-center">
                                            <p>or sign up with:</p>
                                            <button type="button" className="btn btn-lg btn-link btn-floating mx-1" disabled>
                                            <i className="fa-brands fa-facebook"></i>
                                            </button>
                                            <button type="button" className="btn btn-lg btn-link btn-floating mx-1" onClick={google}>
                                                <i className="fab fa-google"></i>
                                            </button>
                                            <button type="button" className="btn btn-lg btn-link btn-floating mx-1" onClick={github}>
                                                <i className="fab fa-github"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0 hid">
                            <img src="https://www.worldbank.org/content/dam/photos/768x721/2020/jun/Global-Cybersecurity-Capacity-Program.png" className="w-100 rounded-4 shadow-4"
                                alt="" />
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}
