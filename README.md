# Sistema Bancário

Sistema web desenvolvido com Vite, React e TypeScript para visualização de clientes, contas e agências bancárias, com dados dinâmicos provenientes de uma planilha Google em tempo real.

## Funcionalidades

- Listagem paginada de clientes
- Filtro por nome e CPF/CNPJ
- Visualização de detalhes do cliente:
  - Informações pessoais
  - Contas vinculadas
  - Agência associada
- Alternância entre tema claro e escuro
- Layout responsivo e acessível
- Dados atualizados dinamicamente via Google Sheets

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [PapaParse](https://www.papaparse.com/)

## Como Rodar o Projeto Localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/caiquealmr/sistema-bancario-clientes.git
   cd sistema-bancario-clientes
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor local:

   ```bash
   npm run dev
   ```

4. Acesse no navegador:

   ```
   http://localhost:5173
   ```

## Deploy

O sistema pode ser publicado facilmente no Vercel ou Netlify, com suporte completo a rotas dinâmicas, responsividade e modo escuro.

## Organização de Pastas

```txt
src/
├── components/    # Componentes reutilizáveis (cards, filtros, loading)
├── pages/         # Páginas principais da aplicação
├── services/      # API para leitura dos dados CSV do Google Sheets
├── types/         # Interfaces TypeScript para tipagem dos dados
├── App.tsx
└── main.tsx
```

## Funcionalidades Detalhadas

### Visualização de Clientes

- Lista paginada com informações resumidas
- Busca por nome ou documento
- Ordenação por diferentes campos

### Detalhes do Cliente

- Informações completas do cliente
- Listagem de contas associadas
- Informações da agência correspondente

### Gestão de Contas

- Visualização de saldo e movimentações
- Filtro por período
- Exportação de extratos

## Requisitos do Sistema

- Node.js 16.x ou superior
- Navegador moderno com suporte a ES6
- Conexão com internet para acesso aos dados em tempo real

## Conclusão

Este sistema bancário foi desenvolvido com foco em desempenho, clareza e usabilidade. Utilizando tecnologias modernas como React, TypeScript, Vite e Tailwind CSS, a aplicação entrega uma experiência eficiente e responsiva, com leitura de dados em tempo real a partir do Google Sheets.

A arquitetura do projeto prioriza a organização e a escalabilidade, garantindo que futuras melhorias e integrações possam ser realizadas com facilidade. O código segue boas práticas de tipagem, acessibilidade e responsividade, sendo ideal para ambientes reais ou acadêmicos.


