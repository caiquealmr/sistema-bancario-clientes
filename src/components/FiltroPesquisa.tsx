interface FiltroPesquisaProps {
  valor: string;
  aoAlterar: (valor: string) => void;
}

function FiltroPesquisa({ valor, aoAlterar }: FiltroPesquisaProps) {
  return (
    <input
      type="text"
      placeholder="Filtrar por nome ou CPF/CNPJ"
      value={valor}
      onChange={e => aoAlterar(e.target.value)}
      className="w-full mb-4 p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded"
    />
  );
}

export default FiltroPesquisa;
