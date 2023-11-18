import { Container, HeaderCenter, HeaderLeft, HeaderRight } from "./styles";

const Header = ({ left, center, right }: { left: JSX.Element, center: JSX.Element, right: JSX.Element }) => {
  return <Container>
    <HeaderLeft>{left}</HeaderLeft>
    <HeaderCenter>{center}</HeaderCenter>
    <HeaderRight>{right}</HeaderRight>
  </Container>;
};

export default Header;
