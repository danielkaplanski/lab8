"use client";
import React, { useState } from 'react';
function InteractiveComponents() {

  const [style, setStyle] = useState({ color: 'black' });
  const [data, setData] = useState([]);
  const [imageVisible, setImageVisible] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [text, setText] = useState("Najedź na ten tekst (handleMouseOver)");
  const handleClick = () => {
    alert('Button clicked!');
  };
  


  const handleMouseOver = () => {
    setText('Najechałeś na tekst!');
  };

  const showImage = () => {
    setImageVisible(!imageVisible);
  };

  const loadDataFromJson = () => {
    const sampleData = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ];
    setData(sampleData); 
  };

  const uploadFile = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
    console.log('Uploaded file:', file);
  };

  const changeStyle = () => {
    setStyle({ ...style, fontSize: '20px', fontWeight: 'bold' });
  };

  return (
    <div>
      <h1 style={style}>Interaktywne komponenty</h1>
      <button onClick={handleClick}>Kliknij mnie (handleClick)</button>
      <p className="zmien" onMouseOver={handleMouseOver}>{text}</p>
      <button onClick={showImage}>
        {imageVisible ? 'Ukryj obraz' : 'Pokaż obraz'} (showImage)
      </button>
      {imageVisible && <img src={"dog.jpg"} alt="Dog" style={{ width: '200px', height: 'auto' }} />}

      <button onClick={loadDataFromJson}>Załaduj dane (loadDataFromJson)</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <input type="file" onChange={uploadFile} />
      {uploadedFile && <p>Wgrano plik: {uploadedFile.name}</p>}
      <button onClick={changeStyle}>Zmień styl nagłówka (changeStyle)</button>
    </div>
  );
}

export default InteractiveComponents;
