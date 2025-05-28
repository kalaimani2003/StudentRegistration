import React from 'react'
import "./popup.css"

export const Popup = ({ txt, btn1, btn2, setPop }) => {
    console.log(btn1,btn2);
    
    return (
        <>
            <div className="popup_con">
                <div className="popup_con_in">
                    <div className="popup_txt">
                        {txt}
                    </div>
                    <div className="popup_btns">
                        <button className="popup_bt1" onClick={() => setPop(false)}>{btn1}</button>
                        <button className="popup_bt2" onClick={() => setPop(true)}>{btn2}</button>
                    </div>
                </div>
            </div>
        </>
    )
}
