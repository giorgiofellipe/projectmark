import { StageBar, StageBarProgress, StageBody, StageContent, StageHeader, StageTitle } from "./styles";
import { StageProps } from "./types";

const Stage = ({ children, title, type, ...props }: StageProps) =>
  <StageContent type={type}>
    <StageHeader>
      <StageTitle>{title}</StageTitle>
      <StageBar>
        <StageBarProgress />
      </StageBar>
    </StageHeader>
    <StageBody>
      {children}
    </StageBody>
  </StageContent>;

export default Stage;
