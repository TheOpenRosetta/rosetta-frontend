import React from "react";
import Nav from "../Components/Nav/Nav";
import ProfileBody from "../Components/Profile/ProfileBody/ProfileBody";

const Profile = () => {
  return (
    <div>
      <Nav show={true}></Nav>
      <ProfileBody></ProfileBody>
    </div>
  );
};

export default Profile;
