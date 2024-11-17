import React from "react";
import CustomizeForm from "./CustomizeForm";
import Results from "./Results";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh", // Full viewport height
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: "12px 25px",
          backgroundColor: "#E6EADD",
          flexShrink: 0, // Prevent the header from shrinking
          height: "70px", // Add a fixed height for the header
        }}
      >
        <img
          src="../../public/logo-name.svg"
          style={{ width: "100%", maxWidth: "150px" }}
          alt="Logo"
        />
        <svg
          style={{ float: "right", marginTop: "5px" }}
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
      </header>

      {/* Main content area */}
      <div
        style={{
          display: "flex",
          flex: 1, // Take up the remaining vertical space
          overflow: "hidden", // Prevent overflow of the container
        }}
      >
        {/* Sidebar / CustomizeForm */}
        <div
          style={{
            width: "30%",
            backgroundColor: "#789F52",
            overflowY: "auto", // Allow scrolling if content overflows
          }}
        >
          <CustomizeForm />
        </div>

        {/* Results area */}
        <div
          style={{
            flex: 1, // Take remaining width
            overflowY: "auto", // Allow vertical scrolling if needed
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

// import React, { useState } from "react";
// import CustomizeForm from "./CustomizeForm";
// import Results from "./Results";

// function Home() {
//   // const [input, setInput] = useState("");
//   // const [results, setResults] = useState([]);
//   // const [selectedDetail, setSelectedDetail] = useState(null);

//   // const handleSearch = () => {
//   //   const sampleResults = ["Recipe 1", "Recipe 2", "Recipe 3"];
//   //   setResults(sampleResults);
//   // };

//   // const handleSelectDetail = (item) => {
//   //   setSelectedDetail(item);
//   // };

//   return (
//     <div
//       style={{
//         padding: "12px 25px",
//         backgroundColor: "#E6EADD",
//         flexShrink: 0, // Prevent the header from shrinking
//       }}
//     >
//       {/* NavBar/Header */}
//       <header
//         style={{
//           padding: "12px 25px",
//           backgroundColor: "#E6EADD",
//           flexShrink: 0, // Prevent the header from shrinking
//         }}
//       >
//         <img
//           src="../../public/logo-name.svg"
//           style={{ width: "100%", maxWidth: "150px" }}
//         ></img>
//         <svg
//           style={{ float: "right", marginTop: "5px" }}
//           fill="#789F52"
//           version="1.1"
//           id="Layer_1"
//           xmlns="http://www.w3.org/2000/svg"
//           xmlnsXlink="http://www.w3.org/1999/xlink"
//           width="32px"
//           height="32px"
//           viewBox="796 796 200 200"
//           xmlSpace="preserve"
//           stroke="#789F52"
//         >
//           <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//           <g
//             id="SVGRepo_tracerCarrier"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             stroke="#CCCCCC"
//             strokeWidth="7.6"
//           ></g>
//           <g id="SVGRepo_iconCarrier">
//             <path d="M896,796c-55.14,0-99.999,44.86-99.999,100c0,55.141,44.859,100,99.999,100c55.141,0,99.999-44.859,99.999-100 C995.999,840.86,951.141,796,896,796z M896.639,827.425c20.538,0,37.189,19.66,37.189,43.921c0,24.257-16.651,43.924-37.189,43.924 s-37.187-19.667-37.187-43.924C859.452,847.085,876.101,827.425,896.639,827.425z M896,983.86 c-24.692,0-47.038-10.239-63.016-26.695c-2.266-2.335-2.984-5.775-1.84-8.82c5.47-14.556,15.718-26.762,28.817-34.761 c2.828-1.728,6.449-1.393,8.91,0.828c7.706,6.958,17.316,11.114,27.767,11.114c10.249,0,19.69-4.001,27.318-10.719 c2.488-2.191,6.128-2.479,8.932-0.711c12.697,8.004,22.618,20.005,27.967,34.253c1.144,3.047,0.425,6.482-1.842,8.817 C943.037,973.621,920.691,983.86,896,983.86z"></path>
//           </g>
//         </svg>
//       </header>

//       {/* Main Content */}
//       <div
//         style={{
//           display: "flex",
//           flex: 1, // Take up the remaining vertical space
//           overflow: "hidden", // Prevent overflow of the container
//         }}
//       >
//         {/* Sidebar/CustomizeForm */}
//         <div
//           style={{
//             width: "30%",
//             backgroundColor: "lightgray",
//             overflowY: "auto", // Allow scrolling if content overflows
//           }}
//         >
//           <CustomizeForm />
//         </div>

//         {/* Results */}
//         <div
//           style={{
//             flex: 1, // Take remaining width
//             overflowY: "auto", // Allow vertical scrolling if needed
//           }}
//         >
//           <Results />
//         </div>
//       </div>

//       {/* <h1>Main Page</h1>
//       {!selectedDetail ? (
//         <>
//           <div>
//             <input
//               type="text"
//               placeholder="Search for a recipe"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//             />
//             <button onClick={handleSearch}>Search</button>
//           </div>
//           <ul>
//             {results.map((result, index) => (
//               <li key={index} onClick={() => handleSelectDetail(result)}>
//                 {result}
//               </li>
//             ))}
//           </ul>
//         </>
//       ) : (
//         <div>
//           <h2>Recipe Detail</h2>
//           <p>{selectedDetail}</p>
//           <button onClick={() => setSelectedDetail(null)}>
//             Back to Results
//           </button>
//         </div>
//       )} */}
//     </div>
//   );
// }

// export default Home;
