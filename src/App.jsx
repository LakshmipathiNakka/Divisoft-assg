import {useState} from 'react'
import './App.css'

const TextEditor = () => {
  const [text, setText] = useState('')
  const [fontSize, setFontSize] = useState('16px')
  const [fontColor, setFontColor] = useState('#000000')
  const [fontFamily, setFontFamily] = useState('Arial, sans-serif')
  const [displayedText, setDisplayedText] = useState('')

  const handleTextChange = event => {
    setText(event.target.value)
  }

  const handleFontSizeChange = event => {
    setFontSize(event.target.value)
  }

  const handleFontColorChange = event => {
    setFontColor(event.target.value)
  }

  const handleFontFamilyChange = event => {
    setFontFamily(event.target.value)
  }

  const handleAddText = () => {
    setDisplayedText(text)
    setText('')
  }

  return (
    <div className="text-editor-app">
      <div className="app-container">
        <div>
          <h1 className="main-heading">Text Editor</h1>
          <textarea
            placeholder="Enter the text here"
            value={text}
            onChange={handleTextChange}
            style={{fontSize, color: fontColor, fontFamily}}
          />
          <button
            className="add-text-btn"
            type="button"
            onClick={handleAddText}
          >
            Add Text
          </button>
          {displayedText && (
            <div className="displayed-text">
              <p style={{fontSize, color: fontColor, fontFamily}}>
                {displayedText}
              </p>
            </div>
          )}
        </div>

        <div className="options">
          <label>
            Font Color:
            <input
              type="color"
              value={fontColor}
              onChange={handleFontColorChange}
            />
          </label>
          <label>
            Font Size:
            <select value={fontSize} onChange={handleFontSizeChange}>
              <option value="16px">Small</option>
              <option value="25px">Medium</option>
              <option value="30px">Large</option>
            </select>
          </label>

          <label>
            Font Family:
            <select value={fontFamily} onChange={handleFontFamilyChange}>
              <option value="Arial, sans-serif">Arial</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Cursive">Cursive</option>
              <option value="Monospace">Monospace</option>
              <option value="Courier New, monospace">Courier New</option>
              <option value="Monaco">Monaco</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  )
}

export default TextEditor
