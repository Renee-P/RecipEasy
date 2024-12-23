import React, { useState } from "react";
import "./Admin.css";
import AdminRecipes from "./AdminRecipes";
import AdminUsers from "./AdminUsers";
import { useHistory } from "react-router-dom";

function Admin({ isAuthorized, setIsAuthorized }) {
  const [activeSection, setActiveSection] = useState("recipes");
  const history = useHistory();

  // React.useEffect(() => {
  //   if (!isAuthorized) {
  //     history.push("/admin-login"); // Redirect if not authorized
  //   }
  // }, [isAuthorized, history]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <header
        style={{
          padding: "12px 25px",
          backgroundColor: "#E6EADD",
          flexShrink: 0,
          height: "70px",
        }}
      >
        <img
          className="logo"
          src="public/logo-name.svg"
          alt="Admin Logo"
          style={{ maxWidth: "150px", height: "auto" }}
        />
      </header>

      <div
        style={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
        }}
      >
        <div
          className="sidebar"
          style={{
            width: "250px",
            backgroundColor: "#F3F5EF",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            borderRight: "1px solid #ddd",
          }}
        >
          <a
            href="#"
            onClick={() => handleSectionChange("recipes")}
            style={{
              textDecoration: "none",
              color: "#789F52",
              padding: "8px 10px",
              fontSize: "18px",
              borderRadius: "4px",
              fontWeight: "500",
            }}
          >
            Recipes
          </a>
          <a
            href="#"
            onClick={() => handleSectionChange("admins")}
            style={{
              textDecoration: "none",
              color: "#789F52",
              padding: "8px 10px",
              fontSize: "18px",
              borderRadius: "4px",
              fontWeight: "500",
            }}
          >
            Admins
          </a>
          <button
            className="logout-btn"
            onClick={() => {
              alert("Logged out");
              setIsAuthorized(false);
              history.push("/admin-login");
            }}
            style={{
              marginTop: "auto",
              padding: "10px",
              backgroundColor: "#F8741F",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              borderRadius: "4px",
            }}
          >
            Log Out
          </button>
        </div>

        <div
          className="content"
          style={{
            flex: 1,
            padding: "20px 40px",
            backgroundColor: "#789F52",
            overflowY: "auto",
          }}
        >
          {activeSection === "recipes" && <AdminRecipes />}
          {activeSection === "admins" && <AdminUsers />}
        </div>
      </div>
    </div>
  );
}

export default Admin;
