import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Acesso } from "./pages/Acesso";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile";
import { ComoUtilizar } from "./pages/ComoUtilizar";
import { ErrorPage } from "./pages/ErrorPage";

import { ProtectedRoute } from "./components/ProtectedRoute";

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
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
