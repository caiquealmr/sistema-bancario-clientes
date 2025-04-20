import { Agencia } from "../types/interfaces";

interface AgenciaInfoProps {
  agencia: Agencia;
}

function AgenciaInfo({ agencia }: AgenciaInfoProps) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded shadow">
      <p className="mb-1 font-medium">{agencia.nome}</p>
      <p>Código: {agencia.codigo}</p>
      <p>Endereço: {agencia.endereco}</p>
    </div>
  );
}

export default AgenciaInfo;
