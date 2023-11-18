import { useState } from 'react';
import { PipelineType } from '../../components/pipeline-types-container/types';


export interface IUsePipelineTypeState {
  selected: PipelineType | null;
  setSelected: (type: PipelineType | null) => void;
}

const usePipelineTypeState = (): IUsePipelineTypeState => {
  const [selected, setSelected] = useState<PipelineType | null>(PipelineType.Basic);

  return {
    selected,
    setSelected
  };
};

export default usePipelineTypeState;
