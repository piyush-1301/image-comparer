import React, { useRef, useState } from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import "./DragArea.css";

function DragArea({image, setImage}) {
  const inputref = useRef(null);
  // const [image, setImage] = useState("");

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && !file.name.match(/\.(jpg|jpeg|png|gif)$/i)){
    alert('not an image');} 
    else if(file){
    console.log(file);
    setImage(file);
    }
  };

  const handleClick = () => {
    inputref.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && !file.name.match(/\.(jpg|jpeg|png|gif)$/i)){
        alert('not an image');} 
    else if(file){
    console.log(file);
    setImage(file);
    }
  };

  return (
    <div
      className="box1"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <div className="container">
        <h3>Upload your file</h3>
        <div className="drag-area1">
          {image ? (
            <>
            <img
              src={URL.createObjectURL(image)}
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              alt=""
            />
            <input
                type="file"
                ref={inputref}
                onChange={handleImageChange}
                style={{ display: "none" }}
            />
            </>
          ) : (
            <>
              {" "}
              <div className="icon">
                <InsertPhotoIcon />
              </div>
              <span className="header1">Drop Files Here</span>
              <span class="header1">
                or <label class="button1">browse</label>
              </span>
              <input
                type="file"
                ref={inputref}
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <span className="support">Supports: JPEG, JPG, PNG</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DragArea;
