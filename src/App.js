import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./Components/Cards/Cards";
import Filters from "./Components/Filters/Filters";
import Pagination from "./Components/Pagination/Pagination";
import Search from "./Components/Search/Search";

function App() {
  let [pageNumber,setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status,setStatus] = useState("");
  let [gender,setGender] = useState("");
  let [species, setSpecies] = useState("");
  let [fetchedData, updatefetchedData] = useState([]);
  let apiUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;

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
      <div className="container">
        <Search setSearch={setSearch} search={search} setPageNumber={setPageNumber}/>
      </div>
      <div className="container  justify-content-center">
        <div className="row">
          
          <Filters setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber} />
          
          <div className="col-8">
            <div className="row">
                <Cards results = {results} />            
            </div>
          </div>

        </div>
      </div>

      <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber} />
      
    </div>
  );
}

export default App;
