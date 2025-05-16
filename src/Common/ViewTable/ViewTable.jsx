import React from 'react'
import "./ViewTable.css";

export const ViewTable = ({ renderApi }) => {
    // console.log(renderApi);

    // let time = renderApi[0].startTime.split(":");

    // console.log(time[0]);
    // console.log(time[0] > 12 ? time[0] - 12 + ":" + time[1] + "AM" : time[0] + ":" + time[1] + "PM");


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>photo</th>
                        <th>name</th>
                        <th>gender</th>
                        <th>D.O.B</th>
                        <th>email ID</th>
                        <th>Course</th>
                        <th>student Number</th>
                        <th>Class Time</th>
                        <th>mentorName</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        renderApi.map((val, ind) => {
                            return <>
                                {/* {
                                    console.log((val.endTime.split(":")))
                                    } */}
                                <tr>
                                    <td>{++ind} .</td>
                                    <td>
                                        <img src={val.photo} alt="" height={"50px"} width={"50px"} style={{ borderRadius: "50%" }} />
                                    </td>
                                    <td>{val.name}</td>
                                    <td>{val.gender}</td>
                                    <td>{val.DOB}</td>
                                    <td>{val.emailID}</td>
                                    <td>{val.Course}</td>
                                    <td>{val.studentNumber}</td>
                                    {/* <td>{val.startTime} to {val.endTime}</td> */}
                                    <td>{
                                        (val.startTime.split(":")[0]) > 12 ?
                                            val.startTime.split(":")[0] - 12 + ":" + val.startTime.split(":")[1] + "PM" :
                                            (val.startTime.split(":")[0]) == 12 ?
                                                val.startTime.split(":")[0] + ":" + val.startTime.split(":")[1] + "PM" :
                                                val.startTime.split(":")[0] + ":" + val.startTime.split(":")[1] + "AM"
                                    } to {
                                            (val.endTime.split(":")[0]) > 12 ?
                                                val.endTime.split(":")[0] - 12 + ":" + val.endTime.split(":")[1] + "PM" :
                                                (val.endTime.split(":")[0]) == 12 ?
                                                    val.endTime.split(":")[0] + ":" + val.endTime.split(":")[1] + "PM" :
                                                    val.endTime.split(":")[0] + ":" + val.endTime.split(":")[1] + "AM"
                                        }</td>
                                    <td>{val.mentorName}</td>
                                </tr>
                            </>
                        })

                    }
                </tbody>

            </table>
        </>
    )
}
