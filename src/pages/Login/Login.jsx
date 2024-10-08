import "./Login.css";
import assets from "../../assets/assets";
import { useState } from "react";
import { login, signup } from "../../config/firebase";

const Login = () => {

    const [currState, setCurrState] = useState("Sign Up");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (currState === "Sign Up") {
            signup(username, email, password);
        } else if (currState === "Login") {
            login(email, password);
        }
        // Clearing State's
    }

    return (
        <div className="login">
            <img src={assets.logo_big} alt="" className="logo" />
            <form className="login-form" onSubmit={(event) => onSubmitHandler(event)}>
                <h2>{currState}</h2>
                {currState === "Sign Up" ? <input onChange={(e) => setUserName(e.target.value)} value={username} type="text" placeholder="username" className="form-input" required /> : null}
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Email address" className="form-input" required />
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="password" className="form-input" required />
                <button type="submit">{currState === "Sign Up" ? "Create account" : "Login Now"}</button>
                <div className="login-term">
                    <input type="checkbox" />
                    <p>Agree to the terms of use & privacy policy.</p>
                </div>

                <div className="login-forgot">
                    {currState === "Sign Up"
                        ? <p className="login-toggle">Already have an account <span onClick={() => setCurrState("Login")}>Click Here</span></p>
                        : <p className="login-toggle">Create an account <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
                    }
                </div>
            </form>
        </div>
    )
}

export default Login