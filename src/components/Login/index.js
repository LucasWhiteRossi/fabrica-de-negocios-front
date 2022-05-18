import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { InfoCard } from "../InfoCard";

export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSumit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", form);
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      //navigate("/profile");
      navigate("/como-utilizar");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <InfoCard title="Login">
    <form onSubmit={handleSumit}>
    <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={form.email}
          onChange={handleChange}
        />        
      </div> 
      
      <div className="mb-3">
      <label className="form-label">Senha:</label>
      <input
        type="password"
        name="password"
        className="form-control"
        value={form.password}
        onChange={handleChange}
      />

      <button className="btn btn-primary m-2" type="submit">Entrar!</button>
      
      </div>
    </form>
    </InfoCard>
    </>
  );
}

