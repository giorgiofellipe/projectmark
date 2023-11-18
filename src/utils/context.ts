import {
  createContext as createContextReact,
  Provider,
  useContext as useReactContext,
} from 'react';

export function createContext<ContextType>(): {
  Provider: Provider<ContextType | undefined>;
  useContext: () => ContextType;
} {
  const context = createContextReact<ContextType | undefined>(undefined);
  function useContext() {
    const contextValue = useReactContext(context);

    if (!contextValue) {
      throw new Error('useContext must be inside a Provider with a value');
    }
    return contextValue;
  }
  return { Provider: context.Provider, useContext };
}
