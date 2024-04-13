import React from 'react';
import { TbLogout } from "react-icons/tb";
import { useAuth } from "../context/AuthContext"
import '../App.css'
import { useEditor } from "../context/EditorContext";

const LogOutButton = () => {
    const { handleSignOut } = useAuth();
    const { editorContent, saveEditorContent } = useEditor();

    const handleLogout = async () => {
        try {
            // Save the editor content before logging out
            await saveEditorContent(editorContent);
            // Once the saving operation completes, proceed with the logout
            handleSignOut();
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <button className='logout-button' onClick={handleLogout} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
            <TbLogout size={'22px'}/>
            </button>
    )
}
export default LogOutButton;
