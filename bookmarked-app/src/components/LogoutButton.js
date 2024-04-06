import React from 'react';
import { TbLogout } from "react-icons/tb";
import { useAuth } from "../context/AuthContext"
import '../App.css'

const LogOutButton = () => {
    const { handleSignOut } = useAuth();
    return (
        <button className='logout-button' onClick={handleSignOut} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
            <TbLogout size={'22px'}/>
            </button>
    )
}
export default LogOutButton;
