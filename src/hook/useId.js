import { useState } from 'react';

export const useId = () => {
  const [idValue, setIdValue] = useState(null);

  const setNewIdValue = (id) => {
    setIdValue(id);
  };


  return { idValue, setNewIdValue };
};
