import React from 'react';

import usePipelineTypeState from './hooks';

import { createContext } from '../../utils/context';

const PipelineTypeContext = createContext<ReturnType<typeof usePipelineTypeState>>();

export const usePipelineType = PipelineTypeContext.useContext;

const PipelineTypeProvider: React.FC<{ children: React.ReactElement[] }> = ({ children }) => {
  const state = usePipelineTypeState();

  return (
    <PipelineTypeContext.Provider value={state}>{children}</PipelineTypeContext.Provider>
  );
};

export default PipelineTypeProvider;
