import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { StudentRegistration } from '../Screens/StudentsRegistration/StudentRegistration'
import { ViewStudents } from '../Screens/ViewStudents/ViewStudents'
import { LogOut } from '../Screens/LogOut/LogOut'

export const Routees = () => {
    return <>
        <Routes>
            <Route path='/' Component={StudentRegistration} />
            <Route path='/ViewStudents' Component={ViewStudents} />
            <Route path='/LogOut' Component={LogOut} />
        </Routes>
    </>
}
