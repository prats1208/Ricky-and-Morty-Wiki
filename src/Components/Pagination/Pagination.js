import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

 

const Pagination = ({setPageNumber,pageNumber,info}) => {
    
    // let prev = () =>{
    //     if(pageNumber==1){
    //         return;
    //     }
    //     else{
    //         setPageNumber((x) => x-1);  
    //     }
    // }

    // let next = () =>{
    //     setPageNumber((x) => x+1);
    // }

    return (
        <>

            <style jsx>
                {`
                
                .nxt a{
                    color:white;
                    text-decoration:none;
                }
                
                
                `}
            </style>


            <ReactPaginate
                forcePage={pageNumber===1? 0 : pageNumber-1}
                className="pagination justify-content-center gap-2"
                nextLabel="Next"
                previousLabel="Prev"
                nextClassName = "btn btn-primary nxt"
                previousClassName = "btn btn-primary nxt"
                pageClassName = "page-item"
                pageLinkClassName = "page-link"
                pageCount={info?.pages}
                breakLabel="..."
                pageRangeDisplayed={2}               
                onPageChange = {(data)=>{setPageNumber(data.selected+1)}}
                activeClassName="active"
             />

        </>
    )
}

export default Pagination
