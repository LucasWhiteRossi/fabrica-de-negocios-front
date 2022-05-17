import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/user/signup", { ...form });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="formName">Nome:</label>
      <input
        id="formName"
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />

      <label htmlFor="formEmail">E-mail:</label>
      <input
        id="formEmail"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="formPassword">Senha:</label>
      <input
        id="formPassword"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
      />
      <label htmlFor="formConfirmPassword">Confirmação de senha</label>
      <input
        id="formConfirmPassword"
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}
