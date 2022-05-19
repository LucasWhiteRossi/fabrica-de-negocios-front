import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { InfoCard } from "../InfoCard";

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
  
    } catch (error) {
      console.log(error);
    }
    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      })
      alert("Sua conta foi criada, por favor faça login ao lado");
  }
  

  return (
    <InfoCard title="Criar Conta">
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="formName">Nome:</label>
        <input
          id="formName"
          name="name"
          type="text"
          className="form-control"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      
      <div className="mb-3">
      <label className="form-label" htmlFor="formEmail">E-mail:</label>
      <input
        id="formEmail"
        name="email"
        type="email"
        className="form-control"
        value={form.email}
        onChange={handleChange}
      />
      </div>
      
      <div className="mb-3">
      <label className="form-label" htmlFor="formPassword">Senha:</label>
      <input
        id="formPassword"
        name="password"
        type="password"
        className="form-control"
        value={form.password}
        onChange={handleChange}
      />
      <h12 className="text-center" style={{color:"gray"}}

><small>Mínimo 8 caracteres: letras, números e caracteres especiais.</small></h12>
      </div>

      <div className="mb-3">
      <label className="form-label" htmlFor="formConfirmPassword">Confirmação de senha:</label>
      <input
        id="formConfirmPassword"
        type="password"
        name="confirmPassword"
        className="form-control"
        value={form.confirmPassword}
        onChange={handleChange}
      />
      </div>

      <button className="btn btn-primary m-2" type="submit">Cadastrar</button>
    </form>
    </InfoCard>
  );
}
