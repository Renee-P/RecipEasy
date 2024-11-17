import React, { useState } from "react";
import CustomizeForm from "./CustomizeForm";
import Results from "./Results";

function Home() {
  // State to toggle the visibility of the user profile menu
  const [menuVisible, setMenuVisible] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "relative",
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: "12px 25px",
          backgroundColor: "#E6EADD",
          flexShrink: 0,
          height: "70px",
        }}
      >
        <img
          src="../../public/logo-name.svg"
          style={{ width: "100%", maxWidth: "150px" }}
          alt="Logo"
        />
        {/* User Profile SVG */}
        <svg
          style={{
            float: "right",
            marginTop: "5px",
            cursor: "pointer",
          }}
          onClick={toggleMenu}
          fill="#789F52"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="32px"
          height="32px"
          viewBox="796 796 200 200"
          xmlSpace="preserve"
          stroke="#789F52"
        >
          <path d="M896,796c-55.14,0-99.999,44.86-99.999,100c0,55.141,44.859,100,99.999,100c55.141,0,99.999-44.859,99.999-100 C995.999,840.86,951.141,796,896,796z M896.639,827.425c20.538,0,37.189,19.66,37.189,43.921c0,24.257-16.651,43.924-37.189,43.924 s-37.187-19.667-37.187-43.924C859.452,847.085,876.101,827.425,896.639,827.425z M896,983.86 c-24.692,0-47.038-10.239-63.016-26.695c-2.266-2.335-2.984-5.775-1.84-8.82c5.47-14.556,15.718-26.762,28.817-34.761 c2.828-1.728,6.449-1.393,8.91,0.828c7.706,6.958,17.316,11.114,27.767,11.114c10.249,0,19.69-4.001,27.318-10.719 c2.488-2.191,6.128-2.479,8.932-0.711c12.697,8.004,22.618,20.005,27.967,34.253c1.144,3.047,0.425,6.482-1.842,8.817 C943.037,973.621,920.691,983.86,896,983.86z"></path>
        </svg>

        {/* Pop-up Menu for User Profile */}
        {menuVisible && (
          <div
            style={{
              position: "absolute",
              top: "70px",
              right: "25px",
              backgroundColor: "#E6EADD",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              padding: "10px",
              borderRadius: "8px",
              width: "200px",
              zIndex: 9999,
            }}
          >
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ margin: "10px 0" }}>
                <a
                  href="/my-saves"
                  style={{ textDecoration: "none", color: "#789F52" }}
                >
                  My Saves
                </a>
              </li>
              <li style={{ margin: "10px 0" }}>
                <a
                  href="/login"
                  style={{ textDecoration: "none", color: "#789F52" }}
                >
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Main content area */}
      <div
        style={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
        }}
      >
        {/* Sidebar / CustomizeForm */}
        <div
          style={{
            width: "30%",
            boxShadow: "0px 4px 8px #fff",
            overflowY: "auto",
          }}
        >
          <CustomizeForm />
        </div>

        {/* Results area */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            backgroundColor: "#789F52",
          }}
        >
          <Results />
        </div>
      </div>
    </div>
  );
}

export default Home;
