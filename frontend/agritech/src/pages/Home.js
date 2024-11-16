import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [filename, setFilename] = useState("");
    const navigate = useNavigate();

    const fileupload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setFilename(`Selected file: ${file.name}`);
        }
    };
    const submitPic = () => {
        if (!selectedFile) {
            alert("Please select a file first");
            return;
        }
    
    const formData = new FormData();
    formData.append("pic", selectedFile);

    navigate("/analyze", { state: { file: selectedFile } });
    };

    return (
      <div>
        <header>
            <h1>Crop Disease Detection</h1>

        </header>
        <div className="container">
            <h2>Upload a picture of your crop</h2>
            <p>System will analyze picture to detect any potential disease</p>
            <input 
            type="file"
            id="fileinput"
            accept="image/*"
            style={{display: "none"}}
            onChange={fileupload}
            />
            <button onClick={() => document.getElementById("fileinput").click()}>Choose File</button>
            <div className="output">{filename}</div>
            <Link to="/analyze">
            <button>Analyze</button>
            </Link>
            
        </div>
      </div>
    );
  };
  
  export default Home;