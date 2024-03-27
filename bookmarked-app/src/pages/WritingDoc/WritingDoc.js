import React, { useEffect } from 'react';
import '../../App.css';
import TextEditor from './TextEditor';
import Navbar from '../../components/Navbar';

function WritingDoc() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

export default WritingDoc;
