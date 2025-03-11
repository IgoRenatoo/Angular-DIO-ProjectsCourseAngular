# 🚀 Desenvolvimento do Projeto BackEnd - Syncrhonize TDL

## 1️⃣ Levantamento de Requisitos
Gestão visual e edição de tarefas propostas.  

### Objetivos: 
[❌] Criar tarefas com título, descrição e data de vencimento  
[❌] Editar tarefas existentes  
[❌] Filtrar tarefas por status (pendente, concluída)  
[❌] Confirmação antes de excluir uma tarefa  
[❌] Exibir contadores (quantas tarefas pendentes/concluídas)  
[❌] Opção de "desfazer" exclusões recentes  
[❌] Marcar tarefas como concluídas  
[❌] Excluir tarefas  

## 2️⃣ Escolha de Tecnologias
Definido linguagens, frameworks e bancos de dados adequados às demandas do projeto.

### Decisões principais:
- **Linguagem de programação**: `NodeJS`
- **Framework front-end**: `Angular 19`
- **Framework back-end**: `Express`, `Zod`
- **Segurança**: `Helmet`, `Cors`, `JWT`, `Passport`, `Argon2`
- **Banco de dados**: `MySql`, `Prisma`

## 3️⃣ Definição da Arquitetura
Definir arquitetura entre monolito, microserviços ou outras abordagens, considerando escalabilidade e manutenção.

### Opções:
- Arquitetura Monolítica ❌
- Arquitetura de Microserviços ✅
- Serverless ⛔

## 4️⃣ Modelagem de Dados
Criar diagramas ER e definir estruturas de dados e relacionamentos.

### Objetivos:
[❌] Definir entidades e seus atributos.  
[❌] Estabelecer relacionamentos entre as tabelas.  
[❌] Criar migrações e scripts de inicialização.  

## 5️⃣ Planejamento de Segurança
Estabelecer estratégias para autenticação, autorização e proteção de dados.

### Medidas essenciais:
[❌] Implementação de OAuth, JWT ou sessão para autenticação.  
[❌] Proteção contra ataques como SQL Injection e XSS.  

## 6️⃣ Organização do Código e Versionamento
Definir padrões de codificação, estruturação de pastas e uso de ferramentas de controle de versão.

### Boas práticas:
[❌] Uso de padrões como MVC e Clean Architecture.  
[❌] Estruturar pastas de forma modular e escalável.  
[❌] Versionamento com Git e GitHub/GitLab.  

## 7️⃣ Estratégia de Testes
Planejar testes unitários para garantir qualidade e confiabilidade.

### Tipos de testes:
[❌] Testes Unitários com Jest

## 8️⃣ Documentação e Monitoramento
Documentar APIs, processos e criar planos de monitoramento e manutenção do sistema.

### Recursos recomendados:
[❌] Documentação com Swagger. ✅  
[❌] Logs e métricas com ferramentas como Prometheus e Grafana. ⛔  
[❌] Monitoramento contínuo com ELK Stack ou Datadog. ⛔  

## 9️⃣ Deploy e Manutenção
Escolher servidores, estratégias de CI/CD e manter atualizações regulares.

### Passos finais:
[❌] Configuração de pipelines CI/CD. ⛔  
[❌] Hospedagem em cloud (AWS, DigitalOcean, Vercel, etc.). ⛔

## 🔟 Pendências

[❌] Estudar sobre - **RxJS** para atualizar a lista de tarefas em tempo real  
[❌] Estudar sobre - **Subject/BehaviorSubject** para comunicação entre componentes  
[❌] Estudar sobre - **Observables** para manipulação eficiente de dados  

