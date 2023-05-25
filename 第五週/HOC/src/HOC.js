import React, { useState } from 'react';

function UpdatedComponent(OriginalComponent) {
    
    function NewComponent(){
        const[likey,setlikey]= useState(1)
        const handleIncrease =()=>{
            setlikey(likey+1);
    };
    return <OriginalComponent handleIncrease={handleIncrease} likey={likey}/>
    }
    return NewComponent
}
export default  UpdatedComponent;
