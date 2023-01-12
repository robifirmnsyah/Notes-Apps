import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { getUserLogged, putAccessToken } from '../utils/data-network';
import Navbar from './Navbar';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ThemeContext from '../contexts/ThemeContext';
import LocaleContext from '../contexts/LocaleContex';
import '../style/style.css';

function NotesApp() {
  const navigate = useNavigate();
  const [authedUser, setAuthedUser] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const changeTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", changeTheme);
      return changeTheme;
    });
  };

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const [locale, setLocale] = React.useState(localStorage.getItem("languange") || "id");

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const changeLang = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("languange", changeLang);
      return changeLang
    });
  };

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);


  const loginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  const logout = () => {
    setAuthedUser(null);
    navigate('/')
    putAccessToken('');
  }

  React.useState(() => {
    async function setUserLogged() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setLoading(false);
    };

    setUserLogged();
  }, [authedUser]);

  if (loading) {
    return (
      <div className="loading"> <h1>{localeContextValue.locale === "id" ? "Memuat..." : "Loading"}</h1></div>
    )
  }




  if (authedUser === null) {
    return (
      <ThemeContext.Provider value={themeContextValue}>
        <LocaleContext.Provider value={localeContextValue}>
          <div className='notes-app'>
            <main>
              <Routes>
                <Route path="/*" element={<Login loginSuccess={loginSuccess} />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
          </div>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <div className="notes-app">
          <Navbar user={authedUser} logout={logout} />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/notes/:id" element={<DetailPage />} />
            </Routes>
          </main>
        </div>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default NotesApp;