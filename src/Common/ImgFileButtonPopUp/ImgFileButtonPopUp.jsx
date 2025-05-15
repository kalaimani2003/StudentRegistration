
import React, { useState } from 'react';
import "./ImgFileButtonPopUp.css";
import Buttonss from '../Button/Buttonss';
import { Camera } from '../Camera/Camera';

export const ImgFileButtonPopUp = ({ setPop, setinpValues }) => {
  // const [image, setImage] = useState(null);
  const [sendImage, setSendImage] = useState(null);
  console.log(sendImage);



  const handleSubmit = async () => {
    if (sendImage == null) {
      alert("Please select an image first");
      return;
    } else {


      // setinpValues((prev) => {

      setinpValues((prev) => ({ ...prev, ["photo"]: sendImage }))

      //   ({ ...prev, "photo": sendImage })
      // })

      // const uploadToJsonServer = async (imageData) => {
      //   try {
      //     const response = await fetch('http://localhost:3000/posts', {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //       body: JSON.stringify({
      //         // id: Date.now(),
      //         photo: imageData
      //       }),
      //     });
      //     const result = await response.json();
      //     console.log('Stored in json-server:', result);
      //   } catch (error) {
      //     console.error('Error storing image in json-server:', error);
      //   }

      // };
      // uploadToJsonServer(sendImage);

      alert("Image uploaded successfully!");
      setPop(false);
    }

  };

  return (
    <div className="ImgFileButtonPopUp_con">
      <div className="ImgFileButtonPopUp_con_in">
        <Camera setSendImage={setSendImage} />
        <div className="ImgFileButtonPopUp_button">
          <Buttonss value={"Submit"} variant={"contained"} setButtonFun={handleSubmit} buttonFun={false} />
          <Buttonss value={"Exit"} variant={"outlined"} setButtonFun={setPop} buttonFun={false} />
        </div>
      </div>
    </div>
  );
};

