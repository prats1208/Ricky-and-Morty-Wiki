import React from 'react'
import { useState,useEffect } from 'react';
import Cards from '../Components/Cards/Cards';
import InputGroup from '../Components/Filters/Category/InputGroup';



const Locations = () => {
   
    let [id,setId] = useState(1);
    let [info,setInfo] = useState([]);
    let {name,dimension,type}=info;
    let [results,setResults] = useState([]);
    let api = `https://rickandmortyapi.com/api/location/${id}`;
    

    useEffect(()=>{
    
        (async function(){
        let response =await fetch(api);
        let data = await response.json();
        setInfo(data);

        let a = await Promise.all(
            data.residents.map((x)=>{
                return fetch(x).then((res)=>res.json());
            })
        );

        setResults(a);
        
        })()
        
    },[api]);    

    return (
        <div className="container">
            <div className='row'>
                <h1 className='text-center mb-3'>Location : <span className='text-primary'>{name === "" ? "Unknown" : name}</span></h1>
                <h3 className='text-center mb-3'>Dimension : {dimension === "" ? "Unknown" : dimension}</h3>
                <h5 className='text-center mb-5'>Type : {type === "" ? "Unknown" : type}</h5>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12 mb-5">
                    <h3 className="text-center">Pick Location</h3>
                    <InputGroup total = {126} setId={setId} name="Location" />
                </div>
                <div className="col-lg-8 col-12">
                    <div className="row">
                        <Cards page="/locations/" results ={results}/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Locations
