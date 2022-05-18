import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Acesso } from "./pages/Acesso";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile";
import { ComoUtilizar } from "./pages/ComoUtilizar";
import { ErrorPage } from "./pages/ErrorPage";

import { ProtectedRoute } from "./components/ProtectedRoute";
import { CadastroModeloNegocio } from "./pages/CadastroModeloNegocio";
import { CadastroPersona } from "./pages/CadastroPersona";
import { CardsPersonas } from './pages/CardsPersonas'
import { CardsModeloNegocio } from "./pages/CardsModeloNegocio"

import { EditNegocio} from "./pages/EditNegocio"
import { EditPersona } from "./pages/EditPersona"
import { VisualizacaoModeloNegocio } from "./pages/VisualizacaoModeloNegocio"
import { VisualizacaoPersona } from "./pages/VisualizacaoPersona"


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
          <Route path="/gerenciar-personas" element={<CardsPersonas/>} />
          <Route path="/gerenciar-negocio" element={<CardsModeloNegocio />} />
          <Route path="/cadastro-persona" element={<CadastroPersona />} />
          <Route path="/cadastro-modelo-negocio" element={<CadastroModeloNegocio />} />
          <Route path="/edit-modelo-negocio" element={<EditNegocio />} />
          <Route path="/edit-persona" element={<EditPersona />} />
          <Route path="/visualizacao-negocio" element={<VisualizacaoModeloNegocio />} />
          <Route path="/visualizacao-persona" element={<VisualizacaoPersona />} />


        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
