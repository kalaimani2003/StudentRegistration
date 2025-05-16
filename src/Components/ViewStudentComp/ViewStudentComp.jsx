import React, { useState, useEffect } from 'react';
import "./ViewStudentComp.css";
import DataTable from '../../Common/table/DataTable';
import { serverApi } from '../../Common/Api/GetApi';
import SearchIcon from '@mui/icons-material/Search';
import { ViewTable } from '../../Common/ViewTable/ViewTable';

export const ViewStudentComp = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const get_Server_Data = async () => {
    const ser_api = await serverApi();
    setOriginalData(ser_api);
    setFilteredData(ser_api);
  };

  useEffect(() => {
    get_Server_Data();
  }, []);

  const handleSearch = (srcVal) => {
    if (!srcVal) {
      setFilteredData(originalData);
      return;
    }

    const filterRtnValue = originalData.filter((val) => {
      const searchText = srcVal.toLowerCase();
      return (
        val.name.toLowerCase().includes(searchText) ||
        val.collegeName.toLowerCase().includes(searchText) ||
        val.Course.toLowerCase().includes(searchText) ||
        val.mentorName.toLowerCase().includes(searchText)
      );
    });
    setFilteredData(filterRtnValue);
  };

  return (
    <>
      <div className="ViewStudentComp_con">
        <div className="ViewStudentComp_head">
          <div className="ViewStudentComp_input_con">
            <label className='scr_lab' htmlFor="src_inpp"><SearchIcon sx={{ fontSize: "37px" }} /></label>
            <input
              className='src_inp'
              id='src_inpp'
              type="text"
              placeholder="Search by Name, College, Course, or Mentor"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
        
          <div className="ViewStudentComp_table_con">
            <ViewTable renderApi={filteredData} />
            {/* <DataTable renderApi={filteredData} /> */}
          </div>
    
      </div>
    </>
  );
};
