import { useEffect, useState } from 'react';

export const usePersistedState = (key: string, initialState: any) => {
  const [state, setState] = useState(() => {
    const persistedState = sessionStorage.getItem(key);
    return persistedState ? JSON.parse(persistedState) : initialState;
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
