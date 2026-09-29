import React from "react";
import { useParams } from "react-router";
import "./User.jsx";

const UserDetails = () => {
  const id = useParams();
 
  return (
    <div>
      User Details {id.id}
        </div>
  );
};

export default UserDetails;
