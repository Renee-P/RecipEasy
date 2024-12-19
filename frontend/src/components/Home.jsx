import React, { useState } from "react";
import CustomizeForm from "./CustomizeForm";
import Results from "./Results";

function Home() {
  const [results, setResults] = useState(null);

  const handleResults = (data) => {
    setResults(data);
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
      </header>

      <div
        style={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
          minHeight: 0,
        }}
      >
        <div
          style={{
            width: "30%",
            boxShadow: "0px 4px 8px #fff",
            overflowY: "auto",
          }}
        >
          <CustomizeForm onResults={handleResults} />
        </div>

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            backgroundColor: "#789F52",
          }}
        >
          <Results data={results} />
        </div>
      </div>
    </div>
  );
}

export default Home;
