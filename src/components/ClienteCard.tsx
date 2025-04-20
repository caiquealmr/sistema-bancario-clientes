import { Cliente } from "../types/interfaces";
import { useNavigate } from "react-router-dom";

interface ClienteCardProps {
  cliente: Cliente;
}

function ClienteCard({ cliente }: ClienteCardProps) {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => navigate(`/cliente/${cliente.id}`)}
      className="p-3 bg-gray-100 dark:bg-gray-800 rounded shadow cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      <span className="font-medium">{cliente.nome}</span> — {cliente.cpfCnpj}
    </li>
  );
}

export default ClienteCard;
