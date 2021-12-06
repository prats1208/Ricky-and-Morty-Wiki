import React from 'react';
import styles from './Cards.module.scss';

const Cards = ({results}) => {
   
    let display;

    if(results){
        display = results.map((x)=>{
            let {id,name,image,status,location} = x;
            return(
                <div key={id} className="col-4 position-relative mb-5">
                    <div className={styles.inform}>
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
                    
                </div>
            )
        });
    }
    else{
        display = "No characters found :/";
    }




    return <>{display}</>
}

export default Cards
