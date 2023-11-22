import React, { useRef, useState } from "react";

const ProfilePic = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };

  return (
    <>
      <div className="image-upload-container">
        <div onClick={handleImageClick}>
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt=""
              className="img-display-after"
            />
          ) : (
            <img
              src="./AnujGosalia.jpeg"
              alt=""
              className="img-display-before"
            />
          )}
          <input
            type="file"
            ref={inputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
      </div>
    </>
  );
};

export default ProfilePic;
