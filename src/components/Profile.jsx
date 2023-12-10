import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const [dropdown, setDropdown] = useState(false);
  const { token, setToken } = useContext(AuthContext);

  return (
    <div style={{ position: "relative" }}>
      <img
        style={{ cursor: "pointer" }}
        onClick={() => {
          setDropdown(!dropdown);
        }}
        className="mr-4 w-16 h-16 rounded-full"
        src={"/public/avatar.jpg"}
        alt="Jese Leos"
      />

      {dropdown && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: "0",
            zIndex: "1000",
            padding: "1rem",
            cursor: "pointer",
            width: "100px",
            background: "#3490dc",
            color: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <ul>
            <li
              className="underline"
              onClick={() => {
                setToken(null);
                localStorage.removeItem("token");
              }}
            >
              sign out
            </li>
            <Link to={"/account"}>Account</Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
