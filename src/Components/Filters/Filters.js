import React from 'react';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

const Filters = ({setStatus,setSpecies,setGender,setPageNumber}) => {

    let clear=()=>{
        setPageNumber(1);
        setStatus("");
        setGender("");
        setSpecies("");
        window.location.reload(false);
    }

    return (
        <div className="col-12 col-lg-3 mb-5">
            <h1 className="text-center fs-3">Filters</h1>
            <p onClick={clear} style={{cursor: "pointer"}} className="text-center fs-5 text-decoration-underline text-primary">Clear Filters</p>
            <div className="accordion" id="accordionExample">
               <Status setStatus={setStatus} setPageNumber={setPageNumber} />
               <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
               <Gender setGender={setGender} setPageNumber={setPageNumber} />            
            </div>
        </div>
    )
}

export default Filters
