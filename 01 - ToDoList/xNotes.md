# Passo a passo desenvolvimento do Projeto

1. Ter instalado o `Angular/CLI` na máquina ~> `sudo npm install -g @angular/cli`

2. Inicar projeto node ~> `npm init -y`

3. [🔗 Iniciar typescript](https://www.notion.so/igorenatoo/Private-1285bcad80828031993eda7c221f2760?pvs=4#1ae5bcad80828015b0e4e718d42f2747) ~> `npx tsc --init` <!-- # Garantir estar instalado TS globalmente... -->

4. Instalar dependências do projeto ~> `npm i cors argon2 dotenv helmet jsonwebtoken mysql12 passport`

5. [🔗 Instalar dependências de desenvolvimento](https://www.notion.so/igorenatoo/Private-1285bcad80828031993eda7c221f2760?pvs=4#1ae5bcad8082803d9dedfda63ef320e2) ~> `npm i -D eslint tsx stylelint-order` <!-- Criar arquivo <.stylelintrc> e configurar -->

6. [🔗 Inicar eslint](https://www.notion.so/igorenatoo/Private-1285bcad80828031993eda7c221f2760?pvs=4#1b35bcad808280f0b1ade737d9f4385c) ~> `npx eslint --init`

7. Criar projeto Angular ~> `ng new <nome-do-projeto>`
    - Comando para gerenciamento (ng `g`enerate `s`ervice, `c`omponent, `g`uard)

8. RouterOutlet usado na main para exibição de conteúdo dinâmico em conjunto com provideRouter e Route

9. provideRouter, Route para gerenciamento de rotas no Angular

10. Nos components, RouterModule para o uso do routerLink, Router para navegação e FormsModule para manipulação de formulários

11. HttpClient e inject para comunicação com backend
