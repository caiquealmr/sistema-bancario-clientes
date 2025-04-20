import { useEffect, useState } from "react";
import { Cliente } from "../types/interfaces";
import { getClientes } from "../services/api";
import ClienteCard from "../components/ClienteCard";
import FiltroPesquisa from "../components/FiltroPesquisa";
import Pagination from "../components/PAgination";

function ListaClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [filtro, setFiltro] = useState<string>("");
  const [paginaAtual, setPaginaAtual] = useState<number>(1);
  const porPagina = 10;

  useEffect(() => {
    getClientes().then(setClientes);
  }, []);

  const alternarTema = () => {
    document.documentElement.classList.toggle("dark");
  };

  const clientesFiltrados = clientes.filter(cliente =>
    cliente.nome.toLowerCase().includes(filtro.toLowerCase()) ||
    String(cliente.cpfCnpj).toLowerCase().includes(filtro.toLowerCase())
  );

  const totalPaginas = Math.ceil(clientesFiltrados.length / porPagina);
  const clientesPaginados = clientesFiltrados.slice(
    (paginaAtual - 1) * porPagina,
    paginaAtual * porPagina
  );

  const mudarPagina = (novaPagina: number) => {
    if (novaPagina >= 1 && novaPagina <= totalPaginas) {
      setPaginaAtual(novaPagina);
    }
  };

  return (
    <div className="min-h-screen px-4 py-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white transition-colors">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Clientes</h1>
          <button
            onClick={alternarTema}
            className="text-sm px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-lg hover:scale-105 transition-transform"
            title="Alternar tema"
          >
            Alternar tema
          </button>
        </div>

        <FiltroPesquisa
          valor={filtro}
          aoAlterar={valor => {
            setFiltro(valor);
            setPaginaAtual(1);
          }}
        />

        <ul className="space-y-3">
          {clientesPaginados.map(cliente => (
            <ClienteCard key={cliente.id} cliente={cliente} />
          ))}
        </ul>

        {clientesFiltrados.length === 0 && (
          <p className="text-center text-gray-500 mt-4">Nenhum cliente encontrado.</p>
        )}

        <Pagination
          paginaAtual={paginaAtual}
          totalPaginas={totalPaginas}
          mudarPagina={mudarPagina}
        />
      </div>
    </div>
  );
}

export default ListaClientes;
