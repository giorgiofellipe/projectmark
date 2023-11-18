import { Container, Title, Label, TitleContainer } from "./styles";

const HeaderItem = ({ title, label, selected = false }: { title: string, label: string, selected?: boolean }) => {
  return <Container selected={selected}>
    <TitleContainer>
      <Title>
        {title}
      </Title>
    </TitleContainer>
    <Label>
      {label}
    </Label>
  </Container>;
};

export default HeaderItem;
