import React, { useState } from "react";
import styles from "../../../styles/components/image.module.css";
import Language from "../../common/Language";
import DragDrop from "./DragDrop";

function Image() {
  const [image, setImage] = useState(null);

  // Function to handle file selection
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    handleImage(file);
  };

  // Function to handle image
  const handleImage = (file) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result);
      };
    } else {
      alert("Please select an image file.");
    }
  };

  // Function to handle file selection when custom button is clicked
  const handleButtonClick = () => {
    const fileInput = document.getElementById("file-input");
    fileInput.click();
  };

  return (
    <div className={`${styles.image}`}>
      <Language />

      <div className={`${styles.box}`}>
        <div className="container px-4 text-center">
          <div className="row gx-5">
            <div className="col-md-6">
              <div className="p-3">
                <DragDrop />
              </div>
            </div>
            <div className="col-md-6" style={{ borderLeft: "1px solid grey" }}>
              <div className={`${styles.upload}`}>
                <h4>Or browse your files</h4>
                <input
                  type="file"
                  id="file-input"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="visually-hidden"
                />
                <button
                  onClick={handleButtonClick}
                  className={styles["upload-button"]}
                >
                  Upload Image
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image;
