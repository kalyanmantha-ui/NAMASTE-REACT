import {HEADER_URL} from "../utils/data";
import {useState} from "react";



export const Header = () => {
    const [loginReact, setloginReact] = useState("Login")

    return (
        <div className="headerMain">
            <div className="img-container">
                <img src= {HEADER_URL} />
            </div>
            <div className="items">
                <ul className='header-ul'>
                    <li className="header-li">Home</li>
                    <li className="header-li">About</li>
                    <li className="header-li">Contact</li>
                    <button className="login" onClick= {
                        () => {
                                loginReact === 'logout' ? setloginReact('login') : setloginReact('logout');
                        }
                    }>{loginReact}</button>
                </ul>
            </div>
        </div>
    );
}

const test = "hi there";

export default test;