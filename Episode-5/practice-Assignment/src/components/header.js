import {HEADER_URL} from "../utils/data";
export const Header = () => {
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
                </ul>
            </div>
        </div>
    );
}

const test = "hi there";

export default test;