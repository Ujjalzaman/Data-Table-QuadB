import React from 'react';
import { FaBeer, FaTelegramPlane } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="main-nav">
            <nav>
                <ul className="nav-title">
                    <h1>HOLDINFO <span className="nav-title-span">.com</span></h1>
                    <p>Powered By <span>Fimstreet</span></p>
                </ul>

                <ul className="nav-center">
                    <select>
                        <option value="INR">INR</option>
                        <option value="INR2">INR2</option>
                    </select>
                    <select>
                        <option value="BTC">BTC</option>
                        <option value="BTC2">BTC2</option>
                    </select>
                </ul>


                <ul className="nav-sidebar">
                    <li className="user-number-round">
                        <div className="user-number">
                            58
                        </div>
                    </li>

                    <li className="nav-contact">
                        <button>
                            <span><FaTelegramPlane></FaTelegramPlane> </span>
                            Connect Telegram</button>
                    </li>

                    <li>
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                    </li>
                </ul>


            </nav>
        </div>
    );
};

export default Navbar;