import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./Components/Cards/Cards";
import Filters from "./Components/Filters/Filters";
import Pagination from "./Components/Pagination/Pagination";
import Search from "./Components/Search/Search";
import Navbar from "./Components/Navbar/Navbar";

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Episodes from "./Pages/Episodes";
import Locations from "./Pages/Locations";
import CardDetails from "./Components/Cards/CardDetails";


//Routing diff pages
function App(){
  return(
    <Router>
      <div>
        <Navbar/>
      </div>

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes/>} />
        <Route path="/episodes/:id" element={<CardDetails/>} />

        <Route path="/locations" element={<Locations/>} />
        <Route path="/locations/:id" element={<CardDetails/>} />

      </Routes>
    </Router>

  )
}





//Home Page
const Home = () => {
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
    <div className="App">
      <div className="container">
        <h1 className="mb-4 text-center">Characters</h1>
        <Search setSearch={setSearch} search={search} setPageNumber={setPageNumber}/>
      </div>
      <div className="container justify-content-center">
        <div className="row">
         
            <Filters setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber} />
         
          <div className="col-12 col-lg-8">
            <div className="row">
                <Cards page="/" results = {results} />            
            </div>
          </div>

        </div>
      </div>

      <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber} />
      
    </div>
  );
}

export default App;
