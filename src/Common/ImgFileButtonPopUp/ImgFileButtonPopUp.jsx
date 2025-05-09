// import React, { useState } from 'react'
// import "./ImgFileButtonPopUp.css"
// import adhaarImg from "../../assets/images/aadhaar-card.webp"
// import Buttonss from '../Button/Buttonss'

// export const ImgFileButtonPopUp = ({ setPop }) => {
//     const [image, setImage] = useState(null);
//     const [preview, setPreview] = useState(null);
//     // console.log(preview);
    

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         console.log(file.name);
        

//         if (file) {
//             setImage(file);
//             setPreview(URL.createObjectURL(file));
//         }
//     };
//     return (
//         <>
//             <div className="ImgFileButtonPopUp_con">
//                 <div className="ImgFileButtonPopUp_con_in">
//                     <div className="ImgFileButtonPopUp_img">
//                         {/* <img src={adhaarImg} alt="" height={"250px"} width={"100%"} /> */}
//                         <img src={preview} alt="Preview" width="200" />
//                     </div>
//                     <div className="ImgFileButtonPopUp_file">
//                         <input
//                             type="file"
//                             style={{ fontSize: "20px" }}
//                             onChange={handleImageChange}
//                         />
//                     </div>
//                     <div className="ImgFileButtonPopUp_button">
//                         <Buttonss value={"Submit"} variant={"contained"} setButtonFun={setPop} buttonFun={false} />
//                         <Buttonss value={"Exit"} variant={"outlined"} setButtonFun={setPop} buttonFun={false} />
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

import React, { useState } from 'react';
import "./ImgFileButtonPopUp.css";
import Buttonss from '../Button/Buttonss';

export const ImgFileButtonPopUp = ({ setPop }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!image) {
      alert("Please select an image first");
      return;
    }

    // Convert image to base64 (since JSON Server can't store files)
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    const base64Image = await toBase64(image);
    console.log(base64Image);
    

    // POST to json-server (make sure json-server is running)
    await fetch("http://localhost:3001/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ image: base64Image, name: image.name })
    });

    alert("Image uploaded successfully!");
    setPop(false);
  };

  return (
    <div className="ImgFileButtonPopUp_con">
      <div className="ImgFileButtonPopUp_con_in">
        <div className="ImgFileButtonPopUp_img">
          {preview && <img src={preview} alt="Preview" width="200" />}
        </div>
        <div className="ImgFileButtonPopUp_file">
          <input
            type="file"
            accept="image/*"
            style={{ fontSize: "20px" }}
            onChange={handleImageChange}
          />
        </div>
        <div className="ImgFileButtonPopUp_button">
          <Buttonss value={"Submit"} variant={"contained"} setButtonFun={handleSubmit} />
          <Buttonss value={"Exit"} variant={"outlined"} setButtonFun={setPop} buttonFun={false} />
        </div>
      </div>
    </div>
  );
};

