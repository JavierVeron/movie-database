import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const Search = () => {
    if (query !== "") {      
      fetch(`https://imdb-api.com/en/API/SearchMovie/k_3f3t0ii9/${query}`)
        .then(response => response.json())
        .then(response => setResults(response.results))
        .catch(err => console.error(err));
    }
  }

  return (
    <div className="container">
      <div className="row py-3">
        <div className="col-md-12">
          <div className="input-group mb-3">
            <input type="text" className="form-control" onInput={(e) => {setQuery(e.target.value)}} />
            <button type="button" className="btn btn-outline-secondary" onClick={() => {Search()}}>Search</button>
          </div>
        </div>
      </div>
      <div className="row pb-3">
        {results.length > 0 ?
        results.map(result => (
          <div key={result.id} className="col-md-3 py-3">
            <div className="card border-0">
              <div style={{backgroundImage:`url(${result.image}`, backgroundRepeat:"no-repeat", backgroundPosition:"center center", backgroundSize:"cover",height:480}}></div>
              <div className="card-body">
                <h5 className="card-title text-center">{result.title}</h5>
                <p className="card-text lead text-center">{result.description}</p>
              </div>
            </div>
          </div>
        )) : ""}
      </div>      
    </div>
  );
}

export default App;