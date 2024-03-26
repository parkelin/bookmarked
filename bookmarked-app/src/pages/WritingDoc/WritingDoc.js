// Writing Doc + Sidebar
import React from 'react';
import '../../App.css';
import TextEditor from './TextEditor'
import Navbar from '../../components/Navbar';
function WritingDoc() {
  return (
     <>
      <div className="welcome">
        <Navbar />
        <div className="main-content">
          <TextEditor />
        </div>
      </div>
    </>
  );
}

export default WritingDoc
