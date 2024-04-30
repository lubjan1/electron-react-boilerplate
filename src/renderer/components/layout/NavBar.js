import React from "react";
import { AiOutlineUser } from 'react-icons/ai';
import { MainInput } from "../global/inputs/MainInput";

const NavBar = () => {
    return (
        <>
            <header className="navbar">
                <div className="navbar-content">
                    <div>
                        <MainInput />
                    </div>
                    <div>
                        <AiOutlineUser className="navbar-icon" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar