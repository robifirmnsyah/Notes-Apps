import React from "react";
import LoginInput from "../components/LoginInput";
import PropTypes from 'prop-types';
import { login } from '../utils/data-network';
import { Link } from 'react-router-dom';

function Login({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <div className="login">
      <LoginInput login={onLogin} />
      <p className="text-center">Belum punya akun? <Link to="/register">Daftar dulu disini.</Link></p>
    </div>
  );
}

Login.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}

export default Login;