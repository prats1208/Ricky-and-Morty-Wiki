import React from 'react'
import { useState,useEffect } from 'react';
import Cards from '../Components/Cards/Cards';
import InputGroup from '../Components/Filters/Category/InputGroup';


const Episodes = () => {

    let [id,setId] = useState(1);
    let [info,setInfo] = useState([]);
    let {name,air_date,characters}=info;
    let [results,setResults] = useState([]);
    let api = `https://rickandmortyapi.com/api/episode/${id}`;
    

    useEffect(()=>{
    
        (async function(){
        let response =await fetch(api);
        let data = await response.json();
        setInfo(data);

        let a = await Promise.all(
            data.characters.map((x)=>{
                return fetch(x).then((res)=>res.json());
            })
        );

        setResults(a);
        
        })()
        
    },[api]);    

    return (
        <div className="container">
            <div className='row'>
                <h1 className='text-center mb-4'>Episode : <span className='text-primary'>{name === "" ? "Unknown" : name}</span></h1>
                <h2 className='text-center mb-5'>Air Date {air_date === "" ? "Unknown" : air_date}</h2>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12 mb-5">
                    <h3 className="text-center">Pick Episode</h3>
                    <InputGroup total = {51} setId={setId} name="Episode" />
                </div>
                <div className="col-lg-8 col-12">
                    <div className="row">
                        <Cards page="/episodes/" results ={results}/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Episodes
