import React from 'react';
import styles from './Search.module.scss';

const Search = ({search, setSearch, setPageNumber}) => {
    return (
        <form className="container d-flex flex-sm-row flex-column align-items-center justify-content-center mb-5 mt-4 gap-3">
            <input type="text" 
                placeholder="Search for character" 
                className={styles.input} 
                onChange={(e)=>{
                    setSearch(e.target.value);
                    setPageNumber(1);
                    }
                } 
                value={search} />
            <button onClick={e=>{e.preventDefault();}} className={`${styles.btn} btn btn-primary`}>Search</button>
        </form>
    )
}

export default Search
