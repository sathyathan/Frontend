import axios from "axios";
import React, { useState } from "react";

const CreateEmployee = () => {
  const [createData, setCreateData] = useState([]);
  const [createMsg, setCreateMsg] = useState("");
  const handleSubmit = () => {
    fetchData();
  };
  const fetchData = async () => {
    const payload = {
      employeeFirstName: "Anil",
      employeeLastName: "Kumlea",
      employeeEmail: "anil@gmail.com",
      employeeDesignation: "UI/UX Developer",
    };

    axios.post("https://nodejsday4.onrender.com/api/createemployee", payload)
    .then((res)=>{
        setCreateData(res.data.result)
        setCreateMsg(res.data.message)
    })
    .catch((err)=>console.log(err))
  };
  return (
    <div>
      <button onClick={handleSubmit}>Add Employee</button>
      <h1>{createMsg}</h1>
    </div>
  );
};

export default CreateEmployee;