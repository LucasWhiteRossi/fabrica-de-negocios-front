import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Acesso } from "./pages/Acesso";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile";
import { ComoUtilizar } from "./pages/ComoUtilizar";
import { ErrorPage } from "./pages/ErrorPage";

import { ProtectedRoute } from "./components/ProtectedRoute";
import { CadastroModeloNegocio } from "./pages/CadastroModeloNegocio";
import { ModeloNegocio } from "./pages/ModeloNegocio";
import { CadastroPersona } from "./pages/CadastroPersona";
import { Personas } from './pages/Personas'

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acesso" element={<Acesso />} />
          <Route path="/como-utilizar" element={<ComoUtilizar/>}/>
          <Route
            path="/profile"
            element={<ProtectedRoute component={Profile} />}
          />

          <Route path="*" element={<ErrorPage />} />
          <Route path="/gerenciar-personas" element={<Personas />} />
          <Route path="/gerenciar-modelo-de-negocio" element={<ModeloNegocio />} />
          <Route path="/cadastro-persona" element={<CadastroPersona />} />
          <Route path="/cadastro-modelo-negocio" element={<CadastroModeloNegocio />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
