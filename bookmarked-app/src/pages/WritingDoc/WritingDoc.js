// Writing Doc + Sidebar

import React from 'react';
import '../../App.css';
import TextEditor from './TextEditor'
import Navbar from '../../components/Navbar';
function WritingDoc() {
  return (
     <>
      <TextEditor />
      <div className="welcome">
        <Navbar />
        <div className="main-content">
          <h1>Writing Doc</h1>
        </div>
      </div>
    </>
  );
}

export default WritingDoc