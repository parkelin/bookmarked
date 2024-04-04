import React from 'react';
import { CiLogin } from "react-icons/ci";
import { useAuth } from "../context/AuthContext"
import '../App.css'

const LogOutButton = () => {
    const { handleSignOut } = useAuth();
    return (
        <button className='logout-button' onClick={handleSignOut} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
            <CiLogin size={'25px'}/>
            </button>
    )
}
export default LogOutButton;
