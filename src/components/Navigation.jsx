import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/img/logo.svg';
import { ThemeSwitch } from './ThemeSwitch';
import { Navlinks } from './Navlinks';

export const Navigation = (props) => {
  return (
    <div className={`navigation ${props.class}`}>
      <div className="navigation__header">
        <NavLink className="logo" to="/">
          <Logo />
        </NavLink>
        <ThemeSwitch />
      </div>
      <p className="title">Hi!👋</p>
      <p className="desc">Welcome to MacPaw Bootcamp 2023</p>
      <Navlinks />
    </div>
  );
};
