import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import icon from "../imgs/usericon.png";
import "../components/UserList.css";

const UserList = () => {
  const [users, setusers] = useState([]);

  useEffect(async () => {
    const getusersfun = async () => {
      return await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => setusers(response.data))
        .catch((err) => console.log(err));
    };
    getusersfun();
  }, []);


  return (
    <div className="father">
      {users.map((user) => (
        <div key={user.id}  className="fils" >
         <img src={icon} /> 
          <div className="Body">
            <h5>name : {user.name}</h5>
            <h5>username : {user.username}</h5>
            <Card.Text>mail : {user.email}</Card.Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
