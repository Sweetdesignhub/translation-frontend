import React, { useState } from "react";
import styles from "../../../styles/components/dragDrop.module.css";

const ImageDropZone = () => {
  const [image, setImage] = useState(null);

  // Function to handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
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
      alert("Please drop an image file.");
    }
  };

  return (
    <div
      className={styles["drop-zone"]}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {image && (
        <div>
          <img src={image} alt="Dropped" className={styles["dropped-image"]} />
        </div>
      )}
      {!image && (
        <div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fc38921cccef04bb793908946fb6b5160%2Fdc03e2820bda4d54968f4b96578c5c5a"
            alt="folder"
          />
          <p>Drag & Drop Image</p>
        </div>
      )}
    </div>
  );
};

export default ImageDropZone;
