# Projeto Angular conectando com api RestFul

Esse projeto é um CRUD de lembrete com finalidade de criar conexões com uma api Restful

# Pré requisitos

Ter instalado o `node.js`, referência `https://nodejs.org/en/`

Ter instalado o `angular-cli`, referência `https://cli.angular.io/`

# Clone

Para baixá-lo basta escolher um diretório desejado na sua máquina, acessar o ``cmd`` e digitar o seguinte comando `git clone https://github.com/gmcarvalho/conectando-angular-em-api-restful.git` 

# Npm install

Para baixar as dependências, abra o cmd apontando pra raiz do projeto e rode o seguinte comando `npm i ou npm install`.

## Api Restful

A api utilizada nesse projeto é de propriedade de professores do curso de Angular do DEV MEDIA, portanto para utilizar sua própria api é necessário alterar o environment.ts e alterar o endereço para o desejado. Lembrando que o roteamento deve ser alterado no `routing app` e também no serviço de `LembreteService.ts` caso pretenda mudar a url dos endpoints da sua aplicação.

## Start

Após isso tudo configurado é hora de rodar a aplicação, no terminal ainda na raiz do projeto rode o comando `ng serve`. A aplicação será startada e redirecionada para a url padrão `http://localhost:4200/`. Pronto! Agora é só jogar essa url no navegador.