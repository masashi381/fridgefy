import React, { useEffect } from 'react';
import { useState } from 'react';
import Select from 'react-select'


function RecipesFilter({name, options, dispatch}) {
    

    
    const handleSelect = (event) =>{
        dispatch({type: name, payload: {[name]:event} })
    }
    

    return (
        <Select 
        options={options}
        isMulti
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleSelect}
        placeholder={name}
        
        />
    )
}

export default RecipesFilter;