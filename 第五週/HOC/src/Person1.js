import React, { useState } from 'react';
import UpdatedComponent from './HOC';

function Person1({likey,handleIncrease}) {

  return (
    <div>
      <h1>{likey} Likey for Rosé</h1>
      <button onClick={handleIncrease}>Likey</button>
    </div>
  );
}
export default UpdatedComponent(Person1);
