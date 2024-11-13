import React, { useState } from 'react';

function Main() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const handleSearch = () => {
    const sampleResults = ['Recipe 1', 'Recipe 2', 'Recipe 3'];
    setResults(sampleResults);
  };

  const handleSelectDetail = (item) => {
    setSelectedDetail(item);
  };

  return (
    <div>
      <h1>Main Page</h1>
      {!selectedDetail ? (
        <>
          <div>
            <input
              type="text"
              placeholder="Search for a recipe"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <ul>
            {results.map((result, index) => (
              <li key={index} onClick={() => handleSelectDetail(result)}>
                {result}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div>
          <h2>Recipe Detail</h2>
          <p>{selectedDetail}</p>
          <button onClick={() => setSelectedDetail(null)}>Back to Results</button>
        </div>
      )}
    </div>
  );
}

export default Main;
