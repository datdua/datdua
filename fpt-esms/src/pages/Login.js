// import {Formlogin} from './components/Label_login'
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "../css/Login.css";
import thumail from "../images/background.png";
import { SignWithGG } from "../components/SignWithGG";
import { Link } from "react-router-dom";

export function Login() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="background">
                <img src={thumail} />
            </div>
            <div class="login_title">
                <p>Exam Schedule Management System</p>
            </div>
            <div className="form_login">
                <div className="login">
                    <p>Login</p>
                    <div className="label">
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="email"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputCustom">
                                Email address
                            </label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control
                                id="floatingPasswordCustom"
                                type="password"
                                placeholder="Password"
                            />
                            <label htmlFor="floatingPasswordCustom">
                                Password
                            </label>
                        </Form.Floating>
                    </div>

                    <div className="btn-sign">
                        <Button variant="primary">Login</Button>{" "}
                    </div>
                    <div className="SignWGG">
                        <SignWithGG />
                    </div>
                    <div className="Load_create">
                        <p>Don't have an ESMS Account?</p>
                        <Link to="/register">
                            <Button variant="primary">Create Account</Button>
                        </Link>
                        <h6>© Powered by FPT University</h6>
                    </div>
                </div>
            </div>
        </>
    );
}
