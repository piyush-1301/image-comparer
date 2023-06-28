import React, { useState } from "react";
import DragArea from "./DragArea";
import "./Home.css";
import Button from "@mui/material/Button";
import Fade from "react-reveal/Fade";
import axios from "axios";
import ResultPage from "./ResultPage";
import LoadingButton from '@mui/lab/LoadingButton';

function Home() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [image1,setImage1] = useState("");
  const [image2,setImage2] = useState("");

  const handleClick = async() => {
    if (!image1 || !image2) {
      alert("Upload both the images");
    } else {
      const formData = new FormData();
      formData.append('screenshot1',image1);
      formData.append('screenshot2',image2);
      try{
      const res = await axios.post("http://127.0.0.1:5000/compare", formData);
      setPost(res.data);
      }catch(error){
          setError(error);
        }
    }
  };

  const handleReset = () => {
    setImage1("");
    setImage2("");
    setPost(null);
  };

  if (error) {
    console.log(error);
  }

//If you want to go on home page instead of true type post in if(post) 
  if (post) {
    return (<div style={{'display':'flex', 'flex-direction':'column' , 'align-items':'center'}}>
    <ResultPage/>
    <div style={{'margin-bottom':'30px'}}>
    <Button variant="outlined" color="error" onClick={handleReset}>
              Reset
            </Button>
    </div>
    </div>)
    // return <ResultPage  image={post.diff_image_base64} sec_image={post.sec_diff_image_base64} percentage={post.similarity} image1= {image1} image2= {image2} image1Details={post.image1_details} image2Details={post.image2_details}/>;
  }
  return (
    <div className="fullHome">
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
      <div className="home">
        <Fade bottom>
          <DragArea image={image1}  setImage = {setImage1}/>
            <div className="secondDragArea">
              <Button
                variant="contained"
                style={{ height: "40px", marginBottom: "30px" }}
                onClick={handleClick}
              >
                Compare
              </Button>
              <DragArea image={image2}  setImage = {setImage2} />
            </div>
        </Fade>
      </div>
      <div style={{'margin-bottom':'30px'}}>
      <Button variant="outlined" color="error" onClick={handleReset}>
              Reset
            </Button>
            </div>
    </div>
  );
}

export default Home;
