import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState (() => {
    //  if (window.localStorage.getItem(key));
     return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  });
useEffect(() => {
    window.localStorage.setItem('key', JSON.stringify(state));
  },[key, state])

return [state, setState];
}


