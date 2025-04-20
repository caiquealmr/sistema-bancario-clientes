import { Routes, Route } from "react-router-dom";
import ListaClientes from "./pages/ListaClientes";
import ClienteDetalhes from "./pages/ClienteDetalhes";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListaClientes />} />
      <Route path="/cliente/:id" element={<ClienteDetalhes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
