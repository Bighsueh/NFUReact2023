import React, { useState } from 'react';
import UpdatedComponent from './HOC';

function Person2({likey,handleIncrease}) {

  return (
    <div>
      <h1>{likey} Likey for Lisa</h1>
      <button onClick={handleIncrease}>Likey</button>
    </div>
  );
}

export default UpdatedComponent(Person2);