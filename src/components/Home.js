import React, { useState } from "react";
import DragArea from "./DragArea";
import "./Home.css";
import Button from "@mui/material/Button";
import Fade from "react-reveal/Fade";
import axios from "axios";
import ResultPage from "./ResultPage";

function Home() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [image1,setImage1] = useState("");
  const [image2,setImage2] = useState("");

  const handleClick = () => {
    if (!image1 || !image2) {
      alert("Upload both the images");
    } else {
      const formData = new FormData();
      formData.append('screenshot1',image1);
      formData.append('screenshot2',image2);
      axios
        .post("https://192.168.156.224:8080/image", formData)
        .then((res) => {
          setPost(res.data);
        })
        .catch((error) => {
          setError(error);
        });
    }
  };

  const handleReset = () => {
    setImage1("");
    setImage2("");
  };

  if (error) {
    console.log(error);
  }

//If you want to go on home page instead of true type post in if(post) 
  if (true) {
    // return <ResultPage  image={post.diff_image_base64} percentage={post.percentage_diff} result={post.result} image1= {image1} image2= {image2} image1Details={post.image1Details} image2Details={post.image2Details}/>;
    return <ResultPage/>
  }
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
          <DragArea image={image1}  setImage = {setImage1}/>
          <div>
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

            <Button variant="outlined" color="error" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Home;
