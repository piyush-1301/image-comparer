import React, {useState} from "react";
import DragArea from "./DragArea";
import "./Home.css";
import Button from "@mui/material/Button";
import Fade from "react-reveal/Fade";
import axios from "axios";

function Home() {
  const [post,setPost] = useState(null);
  const [error,setError] = useState(null);
  const formData = new FormData();
  const getImageData = (data) => {
    formData.append('images',data);
    
  }

  const handleClick = () => {
    if(formData.getAll('images').length<2){
      alert("Upload both the images")
    }else{
    console.log(formData.getAll('images'));
    axios.post("http://localhost:8080/image",formData).then(res =>{
       setPost(res.data);
    }).catch(error => {
      setError(error);
    })
  }
  }
  
  if(error){
    console.log(error);
  }


  if(post) {return(
    <div>
      Nothing
    </div>
  )}
  return (
    <div>
      <div className="description">
        <Fade left>
          <div>
            <h2>Compare Images</h2>
            <p>
              <span>
                Find the difference between pictures or other images!
                <br />
                Enter two images and the difference will show up below.
              </span>
            </p>
          </div>
        </Fade>
      </div>
      <div className="rows">
        <Fade bottom>
          <DragArea getImageData = {getImageData}/>
          <div className="secondDragArea">
          <Button variant="contained" style={{ height:"40px", marginBottom:"30px" }} onClick={handleClick}>
            Compare
          </Button>
          <DragArea getImageData = {getImageData}/>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Home;
