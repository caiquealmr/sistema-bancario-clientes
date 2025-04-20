import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Cliente, Conta, Agencia } from "../types/interfaces";
import { getClientes, getContas, getAgencias } from "../services/api";
import ContaCard from "../components/ContaCard";
import AgenciaInfo from "../components/AgenciaInfo";
import Loading from "../components/Loading";

function ClienteDetalhes() {
  const { id } = useParams<{ id: string }>();
  const [cliente, setCliente] = useState<Cliente | null>(null);
  const [contas, setContas] = useState<Conta[]>([]);
  const [agencia, setAgencia] = useState<Agencia | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarDados() {
      const [todosClientes, todasContas, todasAgencias] = await Promise.all([
        getClientes(),
        getContas(),
        getAgencias(),
      ]);

      const clienteEncontrado = todosClientes.find(c => String(c.id) === id) || null;
      setCliente(clienteEncontrado);

      if (clienteEncontrado) {
        const contasDoCliente = todasContas.filter(
          conta => conta.cpfCnpjCliente === clienteEncontrado.cpfCnpj
        );
        setContas(contasDoCliente);

        const agenciaDoCliente = todasAgencias.find(
          ag => ag.codigo === clienteEncontrado.codigoAgencia
        ) || null;
        setAgencia(agenciaDoCliente);
      }

      setCarregando(false);
    }

    carregarDados();
  }, [id]);

  if (carregando) return <Loading />;
  if (!cliente) return <p className="p-6 text-gray-600 dark:text-gray-300">Cliente não encontrado.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
      <Link to="/" className="text-blue-600 dark:text-blue-400 underline mb-4 inline-block">
        ← Voltar para lista
      </Link>

      <h1 className="text-2xl font-bold mb-2">{cliente.nome}</h1>
      <p className="mb-2">CPF/CNPJ: {cliente.cpfCnpj}</p>
      <p className="mb-2">Email: {cliente.email}</p>
      <p className="mb-2">Renda Anual: R$ {cliente.rendaAnual.toLocaleString()}</p>
      <p className="mb-4">Patrimônio: R$ {cliente.patrimonio.toLocaleString()}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contas Bancárias</h2>
      {contas.length > 0 ? (
        <ul className="space-y-2">
          {contas.map(conta => (
            <ContaCard key={conta.id} conta={conta} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">Nenhuma conta encontrada.</p>
      )}

      <h2 className="text-xl font-semibold mt-6 mb-2">Agência</h2>
      {agencia ? (
        <AgenciaInfo agencia={agencia} />
      ) : (
        <p className="text-gray-500 dark:text-gray-400">Agência não encontrada.</p>
      )}
    </div>
  );
}

export default ClienteDetalhes;
