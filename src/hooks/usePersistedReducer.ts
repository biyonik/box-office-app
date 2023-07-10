import React from 'react';

export const usePersistedReducer = (
  reducer: (currentStarred: any, action: any) => any,
  initialState: any,
  key: string
) => {
  const [state, dispatch] = React.useReducer(reducer, initialState, initial => {
    const persisted = localStorage.getItem(key);
    return persisted ? JSON.parse(persisted) : initial;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
};
