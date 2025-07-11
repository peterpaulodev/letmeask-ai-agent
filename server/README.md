# NLW Agents

Este projeto foi desenvolvido durante um evento da Rocketseat e se chama NLW Agents. Ele é um servidor construído com Fastify e utiliza várias bibliotecas para facilitar o desenvolvimento e a manutenção.

## Tecnologias Utilizadas

- **Fastify**: Um framework web rápido e de baixa sobrecarga para Node.js.
- **Drizzle ORM**: Um ORM para TypeScript e JavaScript, utilizado para interagir com o banco de dados.
- **Zod**: Uma biblioteca de validação de esquemas para TypeScript.
- **Postgres**: Utilizado como banco de dados.
- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.

## Scripts Disponíveis

- `dev`: Inicia o servidor em modo de desenvolvimento.
- `start`: Inicia o servidor em modo de produção.
- `db:seed`: Popula o banco de dados com dados iniciais.

## Configuração do Projeto

1. **Instalação de Dependências**: Execute `npm install` para instalar todas as dependências necessárias.
2. **Configuração do Ambiente**: Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente necessárias.
3. **Iniciar o Servidor**: Use `npm run dev` para iniciar o servidor em modo de desenvolvimento.

## Estrutura do Projeto

- **src/**: Contém o código-fonte do servidor.
- **db/**: Contém a configuração do banco de dados e scripts de migração.
- **http/**: Contém as rotas HTTP do servidor.

## Padrões de Projeto

O projeto segue os princípios de modularidade e separação de responsabilidades, com uma estrutura de pastas clara para facilitar a manutenção e a escalabilidade.

---

Este é um resumo das informações mais importantes sobre o projeto. Para mais detalhes, consulte a documentação das bibliotecas utilizadas.