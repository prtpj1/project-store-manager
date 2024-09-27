# 22º Projeto: Store Manager
<p align="center">
<img src="https://github.com/prtpj1/prtpj1/blob/main/Headers/22%20-%20StoreManager2.jpg?raw=true" alt="Header" />
<hr/>
<p align="center">
<a href="#project-description">Project Description</a> •
<a href="#in-this-project-i-learned-and-put-into-practice">Learning</a> •
<a href="#according-to-the-project-requirements-designated-by-trybe-i-learned-how-to">Requirements</a> •
<a href="#stacks">Stacks</a> •
<a href="#how-to-run-the-application">How to run the application</a>
</p>
<hr/>
<p align="center">
<a href="#descrição-do-projeto">Descrição do Projeto</a> •
<a href="#nesse-projeto-aprendi-e-coloquei-em-prática">Aprendizado</a> •
<a href="#de-acordo-com-os-requisitos-do-projeto-designados-pela-trybe-aprendi-como">Requisitos</a> •
<a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> •
<a href="#como-rodar-a-aplicação">Rodar a Aplicação</a>
</p>
<hr/>

## Project Description
In this BackEnd project, I developed a RESTful API using the MSC (model-service-controller) architecture!<br>
The built API is a dropshipping-style sales management system.<br>
A MySQL database was used for data management.<br>

## In this project, I learned and put into practice:
- Creating endpoints to list, create, update/edit, and delete products in a MySQL database
- Creating endpoints to list sales in a MySQL database

## According to the project requirements designated by Trybe, I learned how to:
- ✅ Create endpoints to list all products
- ✅ Create endpoints to search for a product by the registered id
- ✅ Create an endpoint to register products
- ✅ Create validations for products
- ✅ Create an endpoint to update a product
- ✅ Create an endpoint to delete a product
- ✅ Create endpoints to list all sales
- ✅ Create endpoints to search for a sale by the registered id
- ❌ Create an endpoint to validate and register sales
- ❌ Create an endpoint to delete a sale
- ❌ Create an endpoint to update a sale
- ❌ Create an endpoint products/search?q=searchTerm
- ✅ Develop tests that cover at least 20% of the layers of your application

## Stacks
### BackEnd:
- Docker
- MySQL
- Node.js

<a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Docker2.png?raw=true" width="50" height="50" alt="Docker Icon" /></a><a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/mySQL2.png?raw=true" width="50" height="50" alt="MySQL Icon" /></a><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github Imgs/NodeJS2.png?raw=true" width="50" height="50" alt="NodeJS Icon" /></a>

## How to run the application?
#### Running locally
- MySQL needs to be running on your machine
- ⚠️ If you're on Windows, stop the Windows MySQL, as it will use the MySQL from your Linux distro via WSL2
- Clone the repository: <br>
`git clone git@github.com:prtpj1/project-project-store-manager.git`
- Access the project folder: <br>
`cd project-project-store-manager`
- Install the dependencies: <br>
`npm install`
- Create _*(if you don't have one yet)*_ a MySQL connection in a database manipulation program of your choice, such as WorkBench.
- Set it to use port 3306, and in the .env file _*(which is in the project root with the name ".env_example" and you should change it to ".env")*_ put the same password you defined when creating the MySQL connection
- To create the database _*(the password requested will be your distro's password)*_: <br>
`npm run migration`
- To populate the database _*(the password requested will be your distro's password)*_: <br>
`npm run seed`
- Start the program: <br>
`npm start`
- Access the link below to access the routes and test them: <br>
http://localhost:3000/api-docs/
<hr/>

- You can view the test coverage with the command: <br>
`npm test`
<hr/>

#### :whale: Running with Docker
- Ensure Docker is running on your computer <br>
`sudo systemctl status docker`⚠️ If you're on Windows, just open Docker Desktop <br>
- Clone the repository: <br>
`git clone git@github.com:prtpj1/project-project-store-manager.git`
- Access the project folder: <br>
`cd project-project-store-manager`
- Start the container for Docker: <br>
`docker-compose up -d`
- Access the link below to access the routes and test them: <br>
http://localhost:3000/api-docs/
<img src="https://github.com/prtpj1/project-store-manager/blob/main/images/swagger_example.png?raw=true" alt="swagger-example" />
<img src="https://github.com/prtpj1/project-store-manager/blob/main/images/swagger_example_getall.png?raw=true" alt="swagger-example_getall route" />

_*NOTE: If you encounter any difficulties with the instructions and would like to provide feedback, feel free to send me a message*_

<hr/>

## Descrição do Projeto
Neste projeto de BackEnd desenvolvi uma API RESTFul utilizando a arquitetura MSC (model-service-controller)!<br>
A API construída é um sistema de gerenciamento de vendas no formato dropshipping.<br>
Foi utilizado um banco de dados MySQL para a gestão dos dados.<br>

## Nesse projeto, aprendi e coloquei em prática:
- Criar endpoints para listar, criar, atualizar/editar e deletar produtos em um banco de dados MySQL
- Criar endpoints para listar vendas em um banco de dados MySQL

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

## Tecnologias Utilizadas
### BackEnd:
- Docker
- MySQL
- Node.js

<a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Docker2.png?raw=true" width="50" height="50" alt="Docker Icon" /></a><a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/mySQL2.png?raw=true" width="50" height="50" alt="MySQL Icon" /></a><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github Imgs/NodeJS2.png?raw=true" width="50" height="50" alt="NodeJS Icon" /></a>
<hr/>

## Como rodar a aplicação?
#### Rodando localmente
- O MySQL precisa estar rodando na sua máquina
- ⚠️ Se estiver no Windows, pare o MySQL do Windows, pois usará o MySQL da sua distro Linux através do WSL2
- Clone o repositório: <br>
`git clone git@github.com:prtpj1/project-project-store-manager.git`
- Acesse a pasta do projeto: <br>
`cd project-project-store-manager`
- Instale as dependências: <br>
`npm install`
- Crie _*(se ainda não tiver uma)*_ conexão MySQL no programa de sua escolha para manipulação de banco de dados, como o WorkBench. 
- Defina para usar a porta 3306 e no arquivo .env _*(que está na raiz do projeto com o nome \".env_example" e que você deve alterar para ".env")*_ coloque a mesma senha que você definiu quando criou a conexão MySQL<br>
- Para criar o banco de dados _*(a senha solicitada será a da sua distro)*_: <br>
`npm run migration`
- Para popular o banco de dados _*(a senha solicitada será a da sua distro)*_: <br>
`npm run seed`
- Inicie o programa: <br>
`npm start`
- Acesse o link abaixo para acessar as rotas e testa-las: <br>
http://localhost:3000/api-docs/
<hr/>

- Você poderá ver a cobertura de testes através do comando: <br>
`npm test`
<hr/>

#### :whale: Rodando com Docker
- Confirme que o Docker está rodando no seu computador <br>
`sudo systemctl status docker`⚠️ Se estiver no windows, basta abrir o Docker Desktop<br>
- Clone o repositório: <br>
`git clone git@github.com:prtpj1/project-project-store-manager.git`
- Acesse a pasta do projeto: <br>
`cd project-project-store-manager`
- Suba o container para o Docker: <br>
`docker-compose up -d`
- Acesse o link abaixo para acessar as rotas e testa-las: <br>
http://localhost:3000/api-docs/
<img src="https://github.com/prtpj1/project-store-manager/blob/main/images/swagger_example.png?raw=true" alt="swagger-example" />
<img src="https://github.com/prtpj1/project-store-manager/blob/main/images/swagger_example_getall.png?raw=true" alt="swagger-example_getall route" />

_*OBS: Se tiver alguma dificuldade com as instruções e quiser dar um feedback me mande uma mensagem*_
