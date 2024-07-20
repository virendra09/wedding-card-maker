import React from 'react';
import './Toolbar.css'; 

const Toolbar = ({ onChangeText, onChangeStyle }) => {
  return (
    <div className="toolbar">
      {/* input to enter text */}
      <input 
        type="text" 
        placeholder="Enter text" 
        onChange={(e) => onChangeText(e.target.value)}
        className="toolbar-input"
      />
      {/*select font family */}
      <select 
        onChange={(e) => onChangeStyle('fontFamily', e.target.value)} 
        className="toolbar-select"
      >
        <option value="Arial">Arial</option>
        <option value="Courier">Courier</option>
        <option value="Georgia">Georgia</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Verdana">Verdana</option>
      </select>
      
      {/* label and input for text color */}
      <label htmlFor="color">Choose Color:-</label>
      <input 
        type="color" 
        onChange={(e) => onChangeStyle('color', e.target.value)} 
        className="toolbar-color"
        id="color"
      />
      
      {/* input for font size */}
      <input 
         className="toolbar-input"
        type="number" 
        placeholder="Font size" 
        onChange={(e) => onChangeStyle('fontSize', `${e.target.value}px`)}
         
      />
      
      {/* label and text alignment */}
      <label htmlFor="alignment">Choose Alignment:-</label>
      <select 
        onChange={(e) => onChangeStyle('textAlign', e.target.value)} 
        className="toolbar-select"
        id="alignment"
      >
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
        <option value="justify">Justify</option>
      </select>
      
      {/* input for line height */}
      <input 
        type="number" 
        placeholder="Line height" 
        onChange={(e) => onChangeStyle('lineHeight', e.target.value)} 
        className="toolbar-input"
      />
    </div>
  );
};

export default Toolbar;
