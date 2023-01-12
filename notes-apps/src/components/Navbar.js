import React from 'react';
import { MdGTranslate, MdOutlineDarkMode, MdOutlineLightMode, MdLogout } from 'react-icons/md';
import LocaleContext from '../contexts/LocaleContex';
import ThemeContext from '../contexts/ThemeContext';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { VscNotebook, VscHome } from 'react-icons/vsc';

function Navbar({ user, logout }) {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { locale, toggleLocale } = React.useContext(LocaleContext);

  return (

    <nav className="navbar">
      <h1 className="navbar-brand fs-3 fw-bold text-white mb-0 ms-3">{locale === "id" ? "Aplikasi Catatan" : "Note App"}</h1>
      <ul>
        <li><Link to="/"><VscHome style={{ color: "white", fontSize: "1.5em" }} /></Link></li>
        <li><Link to="/add"><VscNotebook style={{ color: "white", fontSize: "1.5em" }} /></Link></li>
        <li>
          <button onClick={toggleLocale}>{locale} <MdGTranslate style={{ color: "white", fontSize: "1.5em" }} /></button>
        </li>
        <li>
          <button onClick={toggleTheme}>
            {theme === "dark" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
          </button>
        </li>
        <li>
          <button onClick={logout}><MdLogout /> {user.name} </button>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

export default Navbar;