# 22º Projeto: Store Manager
<p align="center">
<img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/22%20-%20StoreManager2.jpg?raw=true" alt="Header" />
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
<hr/>

## Tecnologias Utilizadas
### BackEnd:
- Docker
- MySQL
- Node.js

<a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Docker2.png?raw=true" width="50" height="50" alt="Docker Icon" /></a><a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/mySQL2.png?raw=true" width="50" height="50" alt="MySQL Icon" /></a><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github Imgs/NodeJS2.png?raw=true" width="50" height="50" alt="NodeJS Icon" /></a>
<hr/>

## Como rodar a aplicação localmente?
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

## Como rodar a aplicação via Docker?
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
