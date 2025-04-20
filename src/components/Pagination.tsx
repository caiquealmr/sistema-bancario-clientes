interface PaginationProps {
    paginaAtual: number;
    totalPaginas: number;
    mudarPagina: (novaPagina: number) => void;
  }
  
  function Pagination({ paginaAtual, totalPaginas, mudarPagina }: PaginationProps) {
    return (
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => mudarPagina(paginaAtual - 1)}
          disabled={paginaAtual === 1}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded disabled:opacity-50 transition"
        >
          Anterior
        </button>
  
        <span className="text-sm">
          Página {paginaAtual} de {totalPaginas}
        </span>
  
        <button
          onClick={() => mudarPagina(paginaAtual + 1)}
          disabled={paginaAtual === totalPaginas}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded disabled:opacity-50 transition"
        >
          Próxima
        </button>
      </div>
    );
  }
  
  export default Pagination;
  