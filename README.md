# Project Cashback API

## Descrição

A API Cashback é uma aplicação desenvolvida em TypeScript, utilizando as tecnologias Node.js, Express e Mongoose. Ela oferece funcionalidades para o cadastro e autenticação de usuários, além de permitir o registro de compras de produtos com cálculo automático de cashback

## Tecnologias Utilizadas

- TypeScript
- Node.js
- Express
- Mongoose
- Docker
- Docker-Compose

## Pré-requisitos

Para rodar o projeto são necessários as seguintes dependências:

- Docker
- Docker Compose

## Instalação

1- Clonar o respositório

- `git clone git@github.com:nickolasvm/cashback-api.git`
- `cd cashback-api`

2- Rodar via docker-compose

- `docker-compose up -d --build`

## Utilização

Para verificar os logs da aplicação

- `npm run logs`

### Rotas

#### Para criar um novo usuário

- URL POST:
  `http://localhost:3001/user`
- Json body:

```
  {
    "username": "nome-completo",
    "cpf": "12345678901",
    "email": "email@email.com",
    "password": "minhasenhasecreta"
  }
```

#### Para logar um usuário

- URL POST:
  `http://localhost:3001/login`
- Json body:

```
  {
  	"email": "email@email.com",
  	"password": "minhasenhasecreta"
  }
```

- Retorna um token JWT

#### Para criar uma nova compra

- URL POST:
  `http://localhost:3001/sale`
- Json Body:

```
  {
  	"value": 600,
  	"productCode": "prato"
  }
```

- Header:
- `authorization` - Utilizar token JWT retornado pela rota login

#### Para retornar todas as compras de um usuário logado

- URL GET:
  `http://localhost:3001/sale`
- Header:
- `authorization` - Utilizar token JWT retornado pela rota login

#### Para retornar o acumulado de cashback de um usuário logado

- URL GET:
  `http://localhost:3001/sale/total`
- Header:
- `authorization` - Utilizar token JWT retornado pela rota login
