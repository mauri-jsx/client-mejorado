import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "./pages/Home";
import Publicaciones from "./pages/Publicaciones"; // Asegúrate de tener esta página
import Publicar from "./pages/Publicar"; // Página de publicar
import Perfil from "./pages/perfil"; // Página de perfil

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-back animate-smoothGradient object-cover bg-no-repeat">
        {/* Sidebar */}
        <div className="flex w-1/5 justify-center items-center">
          <Sidebar className="bg-back p-4 ml-4 h-full" />{" "}
          {/* Altura completa */}
        </div>

        {/* Main */}
        <div className="flex flex-col w-4/5 justify-center items-center ml-2">
          {/* Pequeña separación con ml-2 */}
          <main className="flex-grow w-[90%] bg-white border border-gray-300 rounded-lg shadow-lg overflow-y-auto max-h-[90%]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/publicaciones" element={<Publicaciones />} />
              <Route path="/publicar" element={<Publicar />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
