import Papa from "papaparse";
import { Cliente, Conta, Agencia } from "../types/interfaces";

/**
 * Função genérica para buscar e converter CSV em JSON tipado
 */
async function fetchCSV<T>(url: string): Promise<T[]> {
  const response = await fetch(url);
  const text = await response.text();

  return new Promise<T[]>((resolve, reject) => {
    Papa.parse<T>(text, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      complete: (result: Papa.ParseResult<T>) => resolve(result.data),
      error: (err: Papa.ParseError) => reject(err),
    });
  });
}

// URLs das planilhas CSV
const clientesURL =
  "https://docs.google.com/spreadsheets/d/1PBN_HQOi5ZpKDd63mouxttFvvCwtmY97Tb5if5_cdBA/gviz/tq?tqx=out:csv&sheet=clientes";

const contasURL =
  "https://docs.google.com/spreadsheets/d/1PBN_HQOi5ZpKDd63mouxttFvvCwtmY97Tb5if5_cdBA/gviz/tq?tqx=out:csv&sheet=contas";

const agenciasURL =
  "https://docs.google.com/spreadsheets/d/1PBN_HQOi5ZpKDd63mouxttFvvCwtmY97Tb5if5_cdBA/gviz/tq?tqx=out:csv&sheet=agencias";

// Funções específicas para cada entidade
export async function getClientes(): Promise<Cliente[]> {
  const data = await fetchCSV<Cliente>(clientesURL);
  return data.map(cliente => ({
    ...cliente,
    id: String(cliente.id),
    dataNascimento: new Date(cliente.dataNascimento),
  }));
}

export async function getContas(): Promise<Conta[]> {
  const data = await fetchCSV<Conta>(contasURL);
  return data.map(conta => ({
    ...conta,
    id: String(conta.id),
  }));
}

export async function getAgencias(): Promise<Agencia[]> {
  const data = await fetchCSV<Agencia>(agenciasURL);
  return data.map(agencia => ({
    ...agencia,
    id: String(agencia.id),
  }));
}
