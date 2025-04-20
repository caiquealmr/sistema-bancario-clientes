import { Conta } from "../types/interfaces";

interface ContaCardProps {
  conta: Conta;
}

function ContaCard({ conta }: ContaCardProps) {
  return (
    <li className="bg-gray-100 dark:bg-gray-800 p-3 rounded shadow">
      Tipo: {conta.tipo} | Saldo: R$ {conta.saldo.toLocaleString()} | Crédito Disponível: R$ {conta.creditoDisponivel.toLocaleString()}
    </li>
  );
}

export default ContaCard;
