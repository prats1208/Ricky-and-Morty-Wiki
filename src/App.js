import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./Components/Cards/Cards";
import Filters from "./Components/Filters/Filters";

function App() {
  let [pageNumber,setPageNumber] = useState(1);
  let [fetchedData, updatefetchedData] = useState([]);
  let apiUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  let {info, results} = fetchedData;

  useEffect( () => {

    (async function(){
      let response = await fetch(apiUrl);
      let data = await response.json();
      updatefetchedData(data);
    })()

  },[apiUrl]);
  
  return (
    <div>
      <h1 className="text-center ubuntu mt-4 mb-3">Rick & Morty <span className="text-primary">Wiki</span></h1>
      <div className="container row justify-content-center">
        <div className="col-3">
          <Filters />
        </div>
        <div className="col-8">
          <div className="row">
              <Cards results = {results} />            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
