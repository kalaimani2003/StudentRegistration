import React, { useState } from 'react'
import { Input } from '../Input/Input'
import { Button } from '@mui/material';
// import Buttonss from '../../Common/Button/Buttonss';
// import { InputComp } from '../InputComponent/InputComp'
import "./form.css"
// import axios from 'axios';
// import { inp_def_vals } from '/form';
import Buttonss from '../Button/Buttonss';
import { ImgFileButtonPopUp } from '../ImgFileButtonPopUp/ImgFileButtonPopUp';
import { inp_def_vals } from './formObj';
// import { inp_def_vals } from './Form';
// import { inp_def_vals } from './formobj';

export const Form = ({ form_obj,form_tit }) => {

  // const [inpValues, setinpValues] = useState({});
  const [inpValues, setinpValues] = useState(inp_def_vals);
  console.log(inpValues);
  const [pop, setPop] = useState(false);

  // console.log(inpValues.additionalProof);




  const formDataGets = (e) => {
    e.preventDefault();

    // axios.post("http://localhost:3000/posts", inpValues);
    setinpValues(inp_def_vals);
  }
  return (
    <>
      <div className="formcomp_con">
        <h1>{form_tit}</h1>
        <form action="" className='formcomp_con_in' onSubmit={(e) => formDataGets(e)}>
          {form_obj.map((val, i) => {
            return <>
              {(val.notShow == (inpValues.additionalProof == "Voter Id") ? false : true || val.notShow == undefined) ?
                <Input inpValues={inpValues} setinpValues={setinpValues} atrib={val} key={i} setPop={setPop} /> : ""
              }

            </>
          })}
          <div className="formcomp_btns">
            <Buttonss type={"submit"} value={"Clear All"} variant={"outlined"} buttonFun={inp_def_vals} setButtonFun={setinpValues} />
            <Buttonss value={"submit"}  variant={"contained"} />
          </div>
        </form>

        {
          (pop) ? <ImgFileButtonPopUp setPop={setPop} /> : ""
        }


      </div>


    </>
  )
}
