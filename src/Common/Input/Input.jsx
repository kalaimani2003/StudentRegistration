import React, { useState } from 'react'
import "./input.css"
// import { inp_def_vals } from '../Form/form';
import { Button } from '@mui/material';

export const Input = ({ atrib, setinpValues, inpValues, setPop }) => {



    const inpFun = (nam, val) => {
        setinpValues((prev) => ({ ...prev, [nam]: val }))
    }

    return (
        <>
            <div className="Input_con">

                {
                    (atrib.type == "radio") ?
                        <>
                            <div className="input_text_con" key={atrib.id}>
                                <label className='inp_lable' htmlFor={atrib.name}>{atrib.lable} : </label>
                                {atrib.options.map((val, i) => {
                                    return <>
                                        <div className="InputComp_radio_con" key={i}>
                                            <input
                                                className='radio_input'
                                                value={inpValues[atrib.name]}
                                                checked={inpValues[atrib.name] == val}
                                                onChange={(e) => inpFun(e.target.name, val)}
                                                type="radio"
                                                id={val}
                                                name={atrib.name}
                                                required={atrib.required}
                                            />
                                            <label className='radio_lable' htmlFor={val}> {val} </label>
                                        </div>
                                    </>
                                })}
                            </div>
                        </> :
                        (atrib.type == "double_button") ?
                            <>
                                <div className="input_text_con" key={atrib.id}>
                                    <label className='inp_lable' htmlFor={atrib.name}>{atrib.lable} : </label>
                                    <Button className='form_outlined' color='primary' variant="outlined" onClick={() => {setPop(true)}}>Take Photo</Button>
                                    <Button className='form_outlined' sx={{ marginLeft: "11px" }} color='primary' onClick={() => setPop(true)} variant="outlined">Upload Photo</Button>
                                </div>
                            </> :
                            (atrib.type == "number") ?
                                <>
                                    <div className="input_text_con" key={atrib.id}>
                                        <label className='inp_lable' htmlFor={atrib.name}>{atrib.lable} : </label>
                                        <input className='inp_input'
                                            onChange={(e) => {
                                                if (!isNaN(e.target.value) && !(e.target.value).includes(" ") && !(e.target.value).includes(".")) {
                                                    inpFun(e.target.name, e.target.value)
                                                }
                                            }
                                            }
                                            value={inpValues[atrib.name]}
                                            type="text"
                                            key={atrib.id}
                                            name={atrib.name}
                                            placeholder={atrib.placeholder}
                                            id={atrib.name}
                                            maxLength={atrib.maxLength}
                                            minLength={atrib.minLength}
                                            required={atrib.required}
                                        />
                                    </div>
                                </> :
                                (atrib.type == "dropdown") ?
                                    <>
                                        <div className="input_text_con" key={atrib.id}>
                                            <label className='inp_lable' htmlFor={atrib.name}>{atrib.lable} : </label>
                                            <select
                                                required={atrib.required}
                                                className='inp_input'
                                                onChange={(e) => inpFun(e.target.name, e.target.value)}
                                                id={atrib.id}
                                                value={inpValues[atrib.name]}
                                                name={atrib.name}
                                            >
                                                <option hidden selected >{atrib.placeholder}</option>
                                                {atrib.options.map((val, i) => {
                                                    return <option className='select_opts' key={i} value={val}>{val}</option>
                                                })}
                                            </select>
                                        </div>
                                    </> :
                                    (atrib.type == "time") ?
                                        <>
                                            <div className="input_text_con" key={atrib.id}>
                                                <label className='inp_lable' htmlFor={atrib.name}>{atrib.lable} : </label>
                                                <div className="inp_time">
                                                    <label className='time_lable' htmlFor={atrib.time[0]}>{atrib.time[0]} :</label>
                                                    <input
                                                        onChange={(e) => {
                                                            inpFun(e.target.name, e.target.value)
                                                        }}
                                                        name={atrib.name[0]}
                                                        value={inpValues[atrib.name[0]]}
                                                        className='time_inp'
                                                        type="time"
                                                        id={atrib.time[0]}
                                                        required={atrib.required}
                                                    />
                                                    <label className='time_lable' htmlFor={atrib.time[1]}>{atrib.time[1]} :</label>
                                                    <input
                                                        onChange={(e) => inpFun(e.target.name, e.target.value)}
                                                        name={atrib.name[1]}
                                                        value={inpValues[atrib.name[1]]}
                                                        className='time_inp'
                                                        type="time"
                                                        required={atrib.required}
                                                        id={atrib.time[1]}
                                                    />

                                                </div>
                                            </div>
                                        </> :
                                        <>
                                            <div className="input_text_con" key={atrib.id}>
                                                <label className='inp_lable' htmlFor={atrib.name}>{atrib.lable} : </label>
                                                <input className='inp_input'
                                                    onChange={(e) => inpFun(e.target.name, e.target.value)}
                                                    value={inpValues[atrib.name]}
                                                    type={atrib.type}
                                                    key={atrib.id}
                                                    name={atrib.name}
                                                    placeholder={atrib.placeholder}
                                                    id={atrib.name}
                                                    maxLength={atrib.maxLength}
                                                    minLength={atrib.minLength}
                                                    required={atrib.required}
                                                />
                                            </div>
                                        </>
                }
            </div>
        </>
    )
}
