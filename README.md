<h1 align="center">PUB -Resila</h1>

<div id=sobre></div>
<h2 align="center">Sobre o Projeto:</h2>

<div>
<p>
<h3>Projeto do 4º módulo da Resilia, nesse projeto, fomos desafiados a criar uma API nos padrões REST!</h3><br>
E o que significa o padrao REST?<br><br>
O padrão REST determina como deve ser realizada a Transferência de Estado Representacional (Representational State Transfer — REST), ou seja, a representação que corresponde ao conjunto de valores que representa uma determinada entidade em um dado momento.<br><br>
Dito isso, aplicamos as quatro operações básicas utilizadas em bases de dados relacionais.<br>
</p>
</div>

<!--ts-->
   * [Create](#create)
   * [Read](#read)  
   * [Update](#update)
   * [Delete](#delete)
<!--te-->  

<h3 align="center">Conteúdos</h3>
     
<!--ts-->
   * [Sobre](#sobre)
   * [Dependências](#dependencias)
      * [Node.js](#node)
      * [Express](#express)
      * [SQLite](#sqlite)
      * [Nodemon](#nodemon)
      * [Jest](#jest)
      * [Supertest](#supertest)
      * [Cors](#cors)
   * [Como Executar](#execuçao)
   * [Rotas](#rotas)  
   * [Tests](#testes)
   * [Mais Informações](#ferramentas)
<!--te-->  
  
  
<div id=dependencias></div>
<h2 align="center">Dependências:</h2>

<p align="center">
  <h3 id=node>Node.js</h3>
  <div><p> -Você terá que instalar o Node.js na sua maquina para iniciarmos, através desse <a href="https://nodejs.org/en/">link</a> poderá baixar a versão referente ao seu sistema operacional.<br>
  -Com o Node já instalado, verifique se ocorreu tudo bem. Voce pode utilizar:
  
```bash
node -v
```
  Se ao utilizar esse comando no seu terminal e receber a versão do node, você estará pronto para continuar!
  </p></div>
</p>

<p>-Para as próximas dependências será necessário iniciar um projeto <a href="https://www.npmjs.com/">npm</a> na sua pasta. Abra o terminal e digite:

```bash
npm init
```
  -Ao executar o comando acima, um formulário JSON no terminal será iniciado e você deverá preenche-lo, mas você pode dar **_enter_** em campos que você não souber responder ou executar o seguinte comando: 
```bash
npm init -y
```
  
  Este fará com que o formulário seja respondido automaticamente!
</p>

<h3 id=express>Express</h3>
  <div><p> Este framework foi desenvolvido para otimizar a construção de aplicações web e API's. Para instalá-lo utilize o seguinte comando:
<br>
    
```bash
npm i express
```
</p></div>

<h3 id=sqlite>SQLite</h3>
  <div><p> -Essa é a biblioteca que será usada para implementar o banco de dados do nosso projeto na linguagem SQL. Seguindo o mesmo padrão de instalação dos pacotes npm voce pode utilizar:
  
```bash
npm i sqlite3
```
</p></div>

<h3 id=nodemon>Nodemon</h3>
  <div><p> -É uma ferramenta que quando detecta uma nova mudança nos arquivos do aplicativo reinicia o mesmo automaticamente. Este será instalado como uma dependência de desenvolvedor, logo o comando tem uma informação a mais:
  
```bash
npm i nodemon -D
```
</p></div>

<h3 id=jest>Jest</h3>
  <div><p> -Este framework é para testes unitários de códigos com foco em suporte para grandes aplicativos da web. Será outra dependência de desenvolvedor:
  
```bash
npm i jest -D
```
</p></div>


<h3 id=supertest>Supertest</h3>
  <div><p> Como mais uma dependência de desenvolvedor o SuperTest é basicamente um módulo para forjar requisições com o intuito de testar webservers e verificar o retorno para automatizar os teste de web API's:
  
```bash
npm i supertest -D
```
</p></div>

<h3 id=cors>Cors</h3>
  <div><p> -Por último e não menos importante, esse sistema consiste de HTTP headers, determinando se os navegadores irão impedir o código de acessar as respostas das requisições que serão feitas. Esta não é uma dependência de desenvolvedor, logo o comando será:
  
```bash
npm i cors
```
</p></div>

<div id=execuçao></div>
<h2 align="center">Como Executar:</h2>
<p>
 -Com todas as dependências instaladas é hora da execução, vamos botar o servidor para rodar!<br>
Para isso você precisará executar o seguinte comando:
  
```bash
npm run start
```
  Ou
  
```bash
node ./src/server.js
```
  
 -Ambos irão rodar o servidor, a diferença entre eles é somente uma questão de praticidade!<br><br>
  
 -Por questão de praticidade temos mais um script é o **_populate_**, com a função de popular automaticamente o seu banco de dados a partir do arquivo **_create-and-populate.js_**:
  
```bash
npm run populate
```
- Ao executar este comando, um arquivo **_database.db_** será criado dentro da **_src/infra_**. Se o seu Visual Studio Code não tiver a extensão necessária pode ser que você tenha dificuldades ao tentar abrir o novo arquivo por ser do tipo **_.db_**, dito isto, temos duas soluções instalar uma extensão para ajudar como a **_mssql_**, ou então recomendo a instalação do <a href="https://sqlitebrowser.org/dl/" >DB Browser</a>.
  
</p>
<div id=rotas></div>
<h2 align="center">Rotas possiveis:</h2>
<p>
 <h3 id="create">Create</h3>
 -O paralelo ao create para nossas rotas é o Post.
 -O método POST foi criado para solicitar que o servidor web insira os dados anexados no corpo da mensagem de requisição para armazenamento.
 -A partir de ferramentas como o <a href="https://www.postman.com/">Postman</a> e <a href="https://insomnia.rest/">Insomnia</a>, você pode consultar a API por esse e outros métodos. No nosso caso, a requisição será feita escolhendo o método POST e informando a URL **_localhost:3030/bebidas_com_alcool** ou **_localhost:3030/bebidas_sem_alcool** .
</p>

<p>
 <h3 id="read">Read</h3>
 -O paralelo ao read para nossas rotas é o Get.
 -O método GET cria uma sequência de consultas e acrescenta à URL do script no servidor que manipula a solicitação. Esse método é o padrão de todas as URL's e basicamente é para a leitura dos mesmos.
 -Com uma das ferramentas <a href="https://www.postman.com/">Postman</a> ou <a href="https://insomnia.rest/">Insomnia</a>, você pode consultar a API por esse. Nesse projeto foram criadas dois tipo de requisições com GET, as requisições serão feitas escolhendo o método get e informando a URL **_localhost:3030/todas_bebidas_com_alcool** ou **_localhost:3030/todas_bebidas_sem_alcool** ou selecionando bebidas pelo ID com a URL **_localhost:3030/bebidas_com_alcool/:id** ou  **_localhost:3030/bebidas_com_alcool/:id**.
 -Subistitua o **_:id_** pelo número desejado.
</p>


<p>

 <h3 id="update">Update</h3>
 -O paralelo ao update para nossas rotas é o Put.
 -O método PUT subsititui uma representação do recurso de destino com os novos dados, atualizando-o com as novas informações.
 -Com uma das ferramentas <a href="https://www.postman.com/">Postman</a> ou <a href="https://insomnia.rest/">Insomnia</a>, você pode consultar a API por esse. As requisições serão feitas escolhendo o método put e informando a URL **_localhost:3030/bebidas_com_alcool/:ID** ou  **_localhost:3030/bebidas_sem_alcool/:ID**.
 -Subistitua o **_:id_** pelo número desejado.
</p>


<p>

 <h3 id="delete">Delete</h3>
  -O paralelo ao delete para nossas rotas é o Delete.
  -Como era de se esperar, esse método remover algum recurso que foi especificado.
  -Com uma das ferramentas <a href="https://www.postman.com/">Postman</a> ou <a href="https://insomnia.rest/">Insomnia</a>, você pode consultar a API por esse. As requisições serão feitas escolhendo o método put e informando a URL **_localhost:3030/bebidas_com_alcool/:ID** ou  **_localhost:3030/bebidas_sem_alcool/:ID**.
 -Subistitua o **_:id_** pelo número desejado.
</p>


<div id="testes"></div>
<h2 align="center">Testes:</h2>
<p>
-Caso queira experimentar os testes unitários utilize o script de testes: 
  
```bash
npm run test
```
-Caso no arquivo **_package.json_** não exista o script **_test_** basta inclui-lo da seguinte maneira:

  ```json
"scripts": {
    "test": "jest"
}
```
</p>

<div id=ferramentas></div>
<h2 align="center">Informações Adcionais:</h2>
<p>
  -Como temos o Jest, o Supertest e o Nodemon instalados, caso queira, você poderá utilizar a aplicação como desenvolvedor! O comando para isto seria:
  
  ```bash
npm run dev
```
  Ou
  
```bash
nodemon ./src/server.js
```

</p>
