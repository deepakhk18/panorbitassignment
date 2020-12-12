import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import UsersList from "./component/UsersList";

function HomePageF(props) {
  const [data, setData] = useState({});
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      axios.get("https://panorbit.in/api/users.json").then((res) => {
        const data = res.data;
        console.log(data);
        setData(data);
        setUsers(data.users);
      });
    } catch (error) {
      alert("Failed to fetch information");
    }
  }, []);

  return (
    <div>
      {users.map((item) => (
        <div className="d-flex align-items-center ">
          <img
            className="rounded-circle"
            src={item.profilepicture}
            alt="image"
          />
          <h6>{item.name}</h6>
        </div>
      ))}
    </div>
  );
}
export default HomePageF;
