import React from 'react';
import { Link } from "react-router-dom";
import { VscNotebook, VscHome } from 'react-icons/vsc';


function Navbar() {
  return (
    <nav className="navbar bg-primary">
      <span className="navbar-brand fs-3 fw-bold text-white mb-0 ms-3 h1">Pembuat Catatan</span>
      <ul>
        <li><Link to="/"><VscHome style={{ color: "white", fontSize: "1.5em" }} /></Link></li>
        <li><Link to="/add"><VscNotebook style={{ color: "white", fontSize: "1.5em" }} /></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;