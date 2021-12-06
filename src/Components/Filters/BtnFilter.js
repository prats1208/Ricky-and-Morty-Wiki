import React from 'react'

const BtnFilter = ({name,index,items,task,setPageNumber}) => {

    
    return (
        <div>

            <style jsx>
                {`
                    input[type="radio"]{
                        display:none;
                    }
                    .x:checked + label{
                        background-color:#0b5ed7;
                        color:#FFFFFF;
                    }
                `}
            </style>

            <div className="form-check">
                <input 
                    onClick={() => {
                        setPageNumber(1);
                        task(items);
                    }} 
                    className="form-check-input x" 
                    type="radio" 
                    name={name} 
                    id={`${name}-${index}`} />

                <label className="btn btn-outline-primary" for={`${name}-${index}`}>{items}</label>
            </div>
        </div>
    )
}

export default BtnFilter
