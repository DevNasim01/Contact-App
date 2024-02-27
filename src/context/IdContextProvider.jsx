import React, { useState } from 'react'
import IdContext from './IdContext';

const IdContextProvider = ({children}) => {

    const [idValue, setIdValue] = useState(null);
    const [loading, setLoading] = useState(true);

  return (
    <IdContext.Provider value={{idValue, setIdValue, loading, setLoading}}>
        {children}
    </IdContext.Provider>
  )
}

export default IdContextProvider