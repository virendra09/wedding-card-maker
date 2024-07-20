import React, { useState } from 'react';
import ImageEditor from './components/ImageEditor';
import Toolbar from './components/Toolbar';
import './App.css';

const App = () => {
  // state to manage the texts on the image
  const [texts, setTexts] = useState([
    { id: Date.now(), text: 'Your text here', style: { fontFamily: 'Arial', color: '#000000', fontSize: '16px', textAlign: 'left', lineHeight: '1.5', top: '10px', left: '10px' } },
  ]);

  // state to track the selected text
  const [currentTextId, setCurrentTextId] = useState(texts[0].id);

  // states for undo and redo functionality
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  // handle the text changes
  const handleTextChange = (newText) => {
    setHistory([...history, { texts }]);
    setRedoStack([]);
    setTexts(texts.map(t => t.id === currentTextId ? { ...t, text: newText } : t));
  };

  // handle the style changes
  const handleStyleChange = (property, value) => {
    setHistory([...history, { texts }]);
    setRedoStack([]);
    setTexts(texts.map(t => t.id === currentTextId ? { ...t, style: { ...t.style, [property]: value } } : t));
  };

  // add a new text element
  const addText = () => {
    const newText = {
      id: Date.now(),
      text: 'New text',
      style: { fontFamily: 'Arial', color: '#000000', fontSize: '16px', textAlign: 'left', lineHeight: '1.5', top: '10px', left: '10px' },
    };
    setTexts([...texts, newText]);
    setCurrentTextId(newText.id);
  };

  // undo the last change
  const undo = () => {
    if (history.length > 0) {
      const lastState = history.pop();
      setRedoStack([...redoStack, { texts }]);
      setTexts(lastState.texts);
      setHistory([...history]);
    }
  };

  // redo the last undone change
  const redo = () => {
    if (redoStack.length > 0) {
      const nextState = redoStack.pop();
      setHistory([...history, { texts }]);
      setTexts(nextState.texts);
      setRedoStack([...redoStack]);
    }
  };

  // rendering the components
  return (
    <div className="app">
      {/* image editor area */}
      <div className='image-area'>
        <ImageEditor texts={texts} setCurrentTextId={setCurrentTextId} />
      </div>
      {/* Toolbar area */}
      <div className='editor-area'>
        <Toolbar onChangeText={handleTextChange} onChangeStyle={handleStyleChange} />
        <button onClick={undo}>Undo</button>
        <button onClick={redo}>Redo</button>
        <button onClick={addText}>Add Text</button>
      </div>
    </div>
  );
};

export default App;
