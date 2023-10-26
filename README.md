# 22º Projeto: Store Manager
<p align="center">
<img src="?raw=true" alt="Header" />
<hr/>
<p align="center">
<a href="#descrição-do-projeto">Descrição do Projeto</a> •
<a href="#nesse-projeto-aprendi-e-coloquei-em-prática">Aprendizado</a> •
<a href="#de-acordo-com-os-requisitos-do-projeto-designados-pela-trybe-aprendi-como">Requisitos</a> •
<a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> •
<a href="#como-rodar-a-aplicação">Rodar a Aplicação</a>
</p>
<hr/>

## Descrição do Projeto
Neste projeto de BackEnd desenvolvi uma API RESTFul utilizando a arquitetura MSC(model-service-controller)!<br>
A API construída é um sistema de gerenciamento de vendas no formato dropshipping.<br>
Foi utilizado um bando de dados MySQL para a gestão dos dados.<br>

## Nesse projeto, aprendi e coloquei em prática:
- Criar endpoints para listar, criar, atualizar/editar e deletar produtos em um bando de dados MySQL
- Criar endpoints para listar vendas em um bando de dados MySQL
## De acordo com os requisitos do projeto designados pela Trybe aprendi como:
- ✅ Criar endpoints para listar todos produtos
- ✅ Criar endpoints para procurar um produto através da id cadastrada
- ✅ Criar endpoint para cadastrar produtos
- ✅ Criar validações para produtos
- ✅ Criar endpoint para atualizar um produto
- ✅ Criar endpoint para deletar um produto
- ✅ Criar endpoints para listar todas as vendas
- ✅ Criar endpoints para procurar uma venda através da id cadastrada
- ❌ Criar endpoint para validar e cadastrar vendas
- ❌ Criar endpoint para deletar uma venda
- ❌ Criar endpoint para atualizar uma venda
- ❌ Criar endpoint products/search?q=searchTerm
- ✅ Desenvolver testes que cubram no mínimo 20% das camadas da sua aplicação
<hr/>

## Tecnologias Utilizadas
### BackEnd:
- MySQL
- Node.js
<a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/mySQL2.png?raw=true" width="50" height="50" alt="MySQL Icon" /></a><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github Imgs/NodeJS2.png?raw=true" width="50" height="50" alt="NodeJS Icon" /></a>
<hr/>

## Como rodar a aplicação?
- O MySQL precisa estar rodando na sua máquina
- ⚠️ Se estiver no Windows, pare o MySQL do Windows, pois usará o MySQL da sua distro Linux através do WSL2
- Clone o repositório: <br> proprio
`git clone git@github.com:prtpj1/project-project-store-manager.git`
- Acesse a pasta do projeto: <br>
`cd project-project-store-manager`
- Instale as dependências: <br>
`npm install`
- Crie _*(se ainda não tiver uma)*_ conexão MySQL no programa de sua escolha para manipulação de banco de dados, como o WorkBench. 
- Defina para usar a porta 3306 e no arquivo .env _*(que está na raiz do projeto com o nome \".env_example" e que você deve alterar para ".env")*_ coloque a mesma senha que você definiu quando criou a conexão MySQL<br>
`npm install`
- Para criar o banco de dados _*(a senha solicitada será a da sua distro)*_: <br>
`mysql -u root -p -e "source migration.sql"`
- Para popular o banco de dados _*(a senha solicitada será a da sua distro)*_: <br>
`mysql -u root -p -e "source seed.sql"`
- Inicie o programa: <br>
`npm start`
- Abra o programa para fazer requisições HTTP. Eu usei o Insomnia, mas você pode usar: o Postman, Extensões do VSCode ou qualquer outra que preferir. <br><br>
- No programa escolhido, crie as requisições do CRUD como explicado abaixo:<br>

### ♻️ Listar todos os produtos:
➡️ Endpoint: **GET** `http://localhost:3000/products`
<br><br>

### ♻️ Procurar um produto pela id:
➡️ Endpoint: **GET** `http://localhost:3000/products/2`
⚠️ _*O id é o numero no final do endpoint*_
<br><br>

### ♻️ Criar um produto novo:
➡️ Endpoint: **POST** `http://localhost:3000/products` <br>
Em **Body** selecione JSON e coloque o JSON abaixo definindo nome do novo produto:<br>
```json
{
	"name": "Produto"
}
```
<br>

### ♻️ Editar um produto através do id:
➡️ Endpoint: **PUT** `http://localhost:3000/products/4`
⚠️ _*O id é o numero no final do endpoint*_
Em **Body** selecione JSON e coloque o JSON abaixo, alterando nome de um produto já cadastrado:<br>

```json
{
    "name": "Novo nome"
}
```
<br>

### ♻️ Apagar um produto através do id:
➡️ Endpoint: **DELETE** `http://localhost:3000/4`
⚠️ _*O id é o numero no final do endpoint*_
<br>

### ♻️ Listar todas as vendas:
➡️ Endpoint: **GET** `http://localhost:3000/sales`
<br><br>

### ♻️ Procurar uma venda pela id:
➡️ Endpoint: **GET** `http://localhost:3000/sales/1`
⚠️ _*O id é o numero no final do endpoint*_
<br><br>


_*OBS: Se tiver alguma dificuldade com as instruções e quiser dar um feedback me mande uma mensagem*_