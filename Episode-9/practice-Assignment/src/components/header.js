import {HEADER_URL} from "../utils/data";
import {useState} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


export const Header = () => {
    const [loginReact, setloginReact] = useState("Login")
    const onlineStatus = useOnlineStatus();
    return (
        <div className="headerMain">
            <div className="img-container">
                <img src= {HEADER_URL} />
            </div>
            <div className="items">
                <ul className='header-ul'>
                    <li className="header-li">onlineStatus : {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="header-li"><Link to="/">Home</Link></li>
                    <li className="header-li">
                        <Link to='/about'>About</Link></li>
                    <li className="header-li"><Link to="/Contact">Contact</Link></li>
                    <li className="header-li"><Link to="/grocery">grocery</Link></li>
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