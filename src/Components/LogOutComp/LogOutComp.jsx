import React from 'react'
import { Popup } from '../../Common/popup/Popup'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const LogOutComp = () => {
    const [pop, setPop] = useState(false);
    // const navigate = useNavigate();
    // (pop && navigate("http://localhost:5173/"))

    return (
        <>
            <Popup txt={"LogOut"} btn1={"LogOut"} btn2={"Cancel"} setPop={setPop} />
        </>
    )
}
