import React from 'react'
import "./StudentRegistrationComp.css"
import { Form } from '../../Common/Form/Form'
import { server_obj } from '../../Common/Form/formObj'
// import { Form } from '../../Common/Form/Form'
// import { Form, server_obj } from '../../Common/Form/Form'

export const StudentRegistrationComp = () => {
    return (
        <>
            <div className="StudentRegistrationComp_con">
                <Form form_obj={server_obj} form_tit={"Students Registration Form"} />
            </div>
        </>
    )
}
