import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GetEmployee = () => {
    const [getcallData, setgetcallData] = useState([]);
    const [getcallMsg, setgetcallMsg] = useState("");
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      axios
        .get("https://nodejsday4.onrender.com/api/getallemployee")
        .then((res) => {
          setgetcallData(res.data.result);
          setgetcallMsg(res.data.message);
        })
        .catch((err) => console.log(err));
    };
  
    return (
        <div>
            <h1>{getcallMsg}</h1>
      {getcallData.map((ele, index) => {
        return (
          <div key={index}>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{ele._id}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {ele.employeeFirstName}
                </h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {ele.employeeLastName}
                </h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {ele.employeeEmail}
                </h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {ele.employeeDesignation}
                </h6>
              </div>
            </div>
          </div>
        );
      })}
        </div>
    );
};

export default GetEmployee;