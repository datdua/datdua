import "../css/Register.css";
import thumail from "../images/background.png";
import { SignWithGG } from "../components/SignWithGG";
import { Link } from "react-router-dom";

export function Register() {
    return (
        <>
            <div className="background">
                <img src={thumail} />
            </div>
            <div class="login_title">
                <p>Exam Schedule Management System</p>
            </div>
            <div className="register">
                <p>Create Account</p>
                <div className="SignWGG">
                    <SignWithGG />
                </div>
                <div className="link_re">
                Already have an ESMS Account? <Link to="/login">Login</Link>
                </div>
                <h6>© Powered by FPT University</h6>
            </div>
        </>
    );
}
