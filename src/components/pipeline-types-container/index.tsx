import React from "react";
import { PipelineType } from "./types";
import Checkbox from "../checkbox";
import { usePipelineType } from "../../context/pipeline-type/context";
import { Container } from "./styles";

const PipelineTypesContainer = () => {
  const { selected, setSelected } = usePipelineType();

  const handleOnChangeSelected = (type: PipelineType, selected: boolean) => {
    if (selected) {
      setSelected(type);
    } else {
      setSelected(null);
    }
  };

  return <Container>
    <Checkbox title="Basic" selected={selected === PipelineType.Basic} onChange={(selected) => handleOnChangeSelected(PipelineType.Basic, selected)} />
    <Checkbox title="Advanced" selected={selected === PipelineType.Advanced} onChange={(selected) => handleOnChangeSelected(PipelineType.Advanced, selected)} />
    <Checkbox title="Expert" selected={selected === PipelineType.Expert} onChange={(selected) => handleOnChangeSelected(PipelineType.Expert, selected)} />
    <Checkbox title="Custom" selected={selected === PipelineType.Custom} onChange={(selected) => handleOnChangeSelected(PipelineType.Custom, selected)} />
  </Container>
};

export default PipelineTypesContainer;
