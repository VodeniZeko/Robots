import React, { Component } from 'react';
import styled from 'styled-components';



const Searchbar = ({searchfield, searching}) => {
    
        return (
           
            <Srch>
                <div className='dv  p-4'>
                    <div className='h3'>
                    <input  
                    className="inpt" 
                    type="search" 
                    placeholder=" Search Robots..." 
                    onChange={searching} 
                    /> 
                    </div>    
                </div>
            </Srch>
        );
    
}

export default Searchbar;

const Srch = styled.div `
     display:flex;
     justify-content:center;

.dv {
    width: auto;
}

input::-webkit-input-placeholder {
color: #424242 !important;
}  

.inpt {
    outline: ;
    border: ;
    background: none;
    width: 12em;
    height:2.5em;
        font-family:monospace;

    caret-color:transparent;
    transition: width 0.3s linear;
    border-radius:2em;
    outline:0;

    }
.h3:hover .inpt {
    padding: 0 10px;
    width: 18.75em;
    height:2.5em;
    transition: width 0.3s linear;
    background: gray;
    caret-color: black;
    text-transform: capitalize;
    font-size: 1em;
    font-family:monospace;
    cursor:pointer;
    caret-color:red;
    color:white;
}


`;


 
