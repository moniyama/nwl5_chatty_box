# Chat Box

API REST desenvolvida durante a 5a edição do `Next Level Week` da [Rockeatseat](https://rocketseat.com.br/) para a implantação de um chat box em NodeJS

## Ferramentas Utilizadas

- NodeJS
- Sqlite
- Typescript
- TypeORM
- Express
- SocketIO

### Maiores aprendizados do projeto

- Contato com `Typescript` e o conceito de`websockets`
- Como aplicar `websockets`
- Exercitar a sintaxe com estruturas de `class`
- Trabalhar com `TypeORM`, conceitos de Entities e Repositories
- Reforçar os conceitos de Relações de dados SQL
- Conhecer e trabalhar com `Sqlite`
- Visualizar o DB por `Sqlite Extension`
- Reforçar conceitos de `API REST`, e exercitar com `NodeJS` e `Express`

### Funcionamento do projeto

Após clonar e instalar o projeto, rode o comando `npm run dev` para inicializar o servidor.

É possível acessar duas interfaces: client e admin, sendo que o front-end dessas páginas foram fornecidas.

#### CLient

Para o usuário que busca suporte e inicia o chat, é possível acessar a sua interface na URL `http://localhost:3333/pages/client`

Ao iniciar o chat, o servidor inicia uma conexão websocket, na qual verifica se o usuário já se conectou anteriormente. Caso o usuário já tenha um registro, seu histórico de mensagens é resgatado.

#### Admin

Para o usuario que responde às chamadas, é possível acessar a sua interface na URL `http://localhost:3333/pages/admin`

Os novos atendimentos são visualizados no inicio da página, e assim, podem iniciar o suporte.

#### Roadmap

- [] Iniciar um novo atendimento, caso o usuario já tenha um cadastro
- [] Funcionalidade para encerrar o atendimento/chat
- [] Cadastro para admin, com histórico de atendimentos
- [] Restrição para admin iniciar apenas um atendimento por vez
- [] Restrição para client iniciar chat apenas com as informações necessárias
