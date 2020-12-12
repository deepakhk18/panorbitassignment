import React from "react";
function UsersList(props) {
  return (
    <div>
      <img src={props.profilepicture} alt="userimage" />
      <h1>{props.name}</h1>
    </div>
  );
}
export default UsersList;
