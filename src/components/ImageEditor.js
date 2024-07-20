import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import image1 from "../images/image1.jpg";
import './ImageEditor.css';

const ImageEditor = ({ texts, setCurrentTextId }) => {
  // reference for image container
  const imageRef = useRef(null);

  return (
    <div className="image-editor">
      {/* edit-area for containing the image and draggable texts */}
      <div className="edit-area" ref={imageRef}>
        <img
          src={image1}
          alt="canvas-image"
          className="image"
        />
        {/* map the texts array to render each text as a draggable element */}
        {texts.map((textItem) => (
          <Draggable
            key={textItem.id}
            bounds="parent"
          >
            <div
              className="draggable-text"
              style={textItem.style}
              // eet the current text id when text clicked
              onClick={() => setCurrentTextId(textItem.id)}
            >
              {textItem.text}
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default ImageEditor;
