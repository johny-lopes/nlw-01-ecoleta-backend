## Projeto desenvolvido durante a Next Level Week #01 da *Rocketseat*
# Ecoleta Backend

### Tecnologias utilizadas

* [NodeJs](https://nodejs.org/en/) com [TypeScript](https://www.typescriptlang.org/), [express](http://expressjs.com/), [KnexJs](http://knexjs.org/), sqlite3, [celebrate](https://www.npmjs.com/package/celebrate)

### Instalando as dependências
Para instalar as dependências, basta executar um dos seguintes comandos na raiz do projeto:
```bash
npm install
# ou com yarn
yarn
```

## Configurando o servidor
Gerando os schemas do database.<br/>

Execute o seguinte comando:
```bash
npm run knex:migrate
# ou com yarn
yarn knex:migrate
```
### Definindo itens iniciais

Gerando items iniciais no database com o knex seed

```bash
npm run knex:seed
# ou com yarn
yarn knex:seed
```
Você pode visualizar o database gerado no migrate, pelo vscode usando a [extension](https://github.com/AlexCovizzi/vscode-sqlite).

### Executando o server

Para iniciar o server basta executar o comando:
```bash
npm run dev
```
