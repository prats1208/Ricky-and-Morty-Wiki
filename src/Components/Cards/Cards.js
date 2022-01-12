import React from 'react';
import styles from './Cards.module.scss';
import { Link } from 'react-router-dom';

const Cards = ({results,page}) => {
   
    let display;

    if(results){
        display = results.map((x)=>{
            let {id,name,image,status,location} = x;
            return(
                <Link to={`${page}${id}`} key={id} className={`${styles.dec} col-lg-4 col-md-6 col-12 position-relative mb-5`}>
                    <div className={`${styles.inform} d-flex flex-column justify-content-center`}>
                        <img src={image} className={`${styles.img} img-fluid`} />
                        <div className="info-content px-1">
                            <h1 className="fs-4 mt-1">{name}</h1>
                            <p className="mb-0 fs-6">Last Location </p>
                            <p className="fs-5">{location.name}</p>
                        </div>
                    </div>
                    { (() =>{
                        if(status == 'Alive'){
                            return(
                                <div className={`${styles.badge} badge bg-success position-absolute`}>{status}</div>
                            )
                        }
                        else if(status == 'Dead'){
                            return(
                                <div className={`${styles.badge} badge bg-danger position-absolute`}>{status}</div>
                            )
                        }
                        else{
                            return(
                                <div className={`${styles.badge} badge bg-secondary position-absolute`}>{status}</div>
                            )
                        }
                    })()}
                    
                </Link>
            )
        });
    }
    else{
        display = "No characters found :/";
    }




    return <>{display}</>
}

export default Cards
