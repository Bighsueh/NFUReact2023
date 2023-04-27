import React, { useState } from 'react';
import UpdatedComponent from './HOC';

function Person4({likey,handleIncrease}) {

  return (
    <div>
      <h1>{likey} Likey for Jennie</h1>
      <button onClick={handleIncrease}>Likey</button>
    </div>
  );
}

export default UpdatedComponent(Person4);