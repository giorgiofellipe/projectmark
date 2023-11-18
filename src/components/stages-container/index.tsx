import { usePipelineType } from "../../context/pipeline-type/context";
import { PipelineType } from "../pipeline-types-container/types";
import Stage from "../stage";
import { StageType } from "../stage/types";
import { Container } from "./styles";

const StageTypeTitleMap = {
  [StageType.Lead]: 'Lead',
  [StageType.RFPInProgress]: 'RFP In Progress',
  [StageType.Submitted]: 'Submitted',
  [StageType.Won]: 'Won',
  [StageType.Lost]: 'Lost',
  [StageType.Closed]: 'Closed',
}

const PipelineTypeStageTypeMap = {
  'all': [StageType.Lead, StageType.RFPInProgress, StageType.Submitted, StageType.Won, StageType.Lost],
  [PipelineType.Basic]: [StageType.Lead, StageType.Submitted, StageType.Won, StageType.Lost],
  [PipelineType.Advanced]: [StageType.Lead, StageType.Submitted, StageType.Won, StageType.Lost, StageType.Closed],
  [PipelineType.Expert]: [StageType.Lead, StageType.RFPInProgress, StageType.Submitted, StageType.Won, StageType.Lost, StageType.Closed],
  [PipelineType.Custom]: [StageType.Closed, StageType.Lead, StageType.RFPInProgress, StageType.Submitted, StageType.Lost, StageType.Won],
}

const StagesContainer = () => {
  const { selected } = usePipelineType();

  const Stages = () => {
    const stages = PipelineTypeStageTypeMap[selected ?? 'all'];
    return <>
      {stages.map((stage) => {
        return <Stage key={stage} type={stage} title={StageTypeTitleMap[stage]} />;
      })}
    </>;
  }

  return <Container>
    <Stages />
  </Container>;
};

export default StagesContainer;
