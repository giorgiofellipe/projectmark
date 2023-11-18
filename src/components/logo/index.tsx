import logo from '../../logo.svg';

const Logo = ({ size = 37 }) => {
  return <a href="/">
    <img src={logo} className="logo" alt="logo" height={size} width={size} />
  </a>;
};

export default Logo;
