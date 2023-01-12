import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/data-network";

function Register() {
  const navigate = useNavigate();

  async function onHandlerRegister(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <section className="login">
      <RegisterInput register={onHandlerRegister} />
      <p className="text-center mt-2">Kalo udah daftar, Yukk kita <Link to="/">Masuk</Link></p>
    </section>
  )
}

export default Register;