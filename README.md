<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#funcionalidades-da-aplicação">Funcionalidades</a> •
  <a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> • 
  <a href="#como-executar">Como Executar</a>  
</p>

## 💻 Desktop
![dt-money](https://user-images.githubusercontent.com/93055468/194366264-82a0143d-4488-4362-a0f6-1bddfd456be2.png)

## Sobre

O dt-money é uma aplicação web front-end de controle financeiro, nesse projeto foi utilizado o json-server para simulação de uma API REST, onde foi realizado requisições GET e POST com axios. 

---

## Funcionalidades da Aplicação

- Cadastrar uma transação, classificando-a como de entrada ou saída;
- Visualizar o total de entradas e saídas;
- Visualizar o total de lucro de acordo com as transações;
- Filtrar uma transação.

---

## Tecnologias Utilizadas

Na construção do projeto foram utilizadas as seguintes ferramentas:

- [React](https://reactjs.org)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-components](https://styled-components.com/)
- [Radix-ui](https://www.radix-ui.com/)
- [Phosphor-icons](https://phosphoricons.com/)
- [React-hook-form](https://react-hook-form.com/)
- [Zod](https://github.com/colinhacks/zod)
- [Use-context-selector](https://www.npmjs.com/package/use-context-selector)
- [Axios](https://axios-http.com/ptbr/docs/api_intro)
- [Json-server](https://www.npmjs.com/package/json-server)


---

## Como Executar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.   

Executando a Aplicação:

```sh
  # Clone este repositório
  $ git clone git@github.com:fabiomoura-m/dt-money.git 
  # Acesse a pasta do projeto em seu terminal
  $ cd dt-money
  # Instalando as dependências do projeto.
  $ npm install
  # Inicie a aplicação web
  $ npm run dev
  # Inicie o json-server
  $ npm run dev:server
```
