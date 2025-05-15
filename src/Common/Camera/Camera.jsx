import React, { useRef, useState, useEffect } from 'react';
import "./camera.css";

export function Camera({ setSendImage }) {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            })
            .catch((error) => {
                console.error('Error accessing camera:', error);
            });
    }, [capturedImage]);

    const takePhoto = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (video && canvas) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = canvas.toDataURL('image/png');
            setCapturedImage(imageData);

            // send img the parent component
            setSendImage(imageData);

        }
    };


    const reTakePhoto = () => {
        setCapturedImage(null);
    }

    return (
        <div className="RegisterFormComp_form_camera_con">
            <div className="RegisterFormComp_form_cam">
                {capturedImage ? <div className="captured_image_preview">
                    <img src={capturedImage} alt="Captured" style={{ height: "250px", borderRadius: '10px' }} />
                </div> : <>
                    <video ref={videoRef} autoPlay playsInline className='camera_vid' style={{ height: "250px", borderRadius: '10px' }} />
                    <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
                </>}
            </div>
            <div className="RegisterFormComp_form_cam_btn">
                {capturedImage ? (
                    <button className='reg_fr_btn' onClick={reTakePhoto}>Retake photo</button>
                ) : (
                    <button className='reg_fr_btn' onClick={takePhoto}>Take Photo</button>
                )}
            </div>
        </div>
    );
}
