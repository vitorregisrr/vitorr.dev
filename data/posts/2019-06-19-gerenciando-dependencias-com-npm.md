---
title: Gerenciando dependências com NPM
description: Facilitando o download e controle de dependências usados em projetos, 
date: '2019-06-19 02:58'
image: /assets/img/npm.png
category: node
background: '#D6BA32'
---

![Urso revirando caixas com a logo do NPM](/assets/img/npm.png)

É **cada vez maior** o uso de **bibliotecas** e outras **dependências** criadas por outras pessoas nos nossos projetos, e fazer o **download e gerenciamento** destas, pode se tornar um pouco **complicado**. Para **solucionar** isso, faço o uso do** Node Package Manager (Gerenciador de Pacotes do Node), popularmente conhecido como NPM. **Com ele, podemos facilmente** fazer o download e controlar as versões das dependências **que usamos nos nossos projetos, por meio do **terminal** e alguns **arquivos JSON **que o gerenciador cria no** diretório do projeto**.

## **1: Instalando o Node.js**

Para começar, é preciso ter instalado o **Node.js** no nosso computador. Essa plataforma disponibiliza uma** série de features**, incluindo o seu **gerenciador de pacotes**, que é o **NPM**. Para uma explicação** mais ampla **sobre o **Node**,** aconselho [essa leitura](http://nodebr.com/o-que-e-node-js/)**.

Prosseguindo para a **instalação**:

* **Acesse** este [**site oficial do Node.js](https://nodejs.org/en/download/)**, escolha a versão correta para o seu *SO* e faça o **download**.

* **Execute** o instalador e **vá prosseguindo** pelo botão “Next”. Para a instalação padrão, **não é necessário mudar nenhum diretório ou opção**.

* Para se **certificar que está tudo *ok***, reinicie o seu computador, abra o seu **terminal** e execute o comando **“node -v”**. A **saída** deverá ser um **número***(a versão da plataforma)*, caso ao contrário, **deu algo errado**.

* Agora você também tem acesso ao **terminal Javascript do Node.js**, basta procurar pelo **aplicativo “Node.js”**, que foi instalado no seu computador.

## 2: Inicializando o NPM no seu projeto

De agora em diante, será necessário o uso do **terminal**, para usar os **comandos do NPM**. Para isso, precisamos** executar o CMD na pasta raiz do nosso diretório**. *Se você tem medo de terminal, chegou a hora de superar.*

O comando para navegar pelas pastas no terminal é a palavra **“*cd” ***seguida do ***caminho para chegar até o arquivo. ***No meu caso:

    cd C:\Users\USUARIO\Documents\Projetos\Projeto NPM

Para quem é realmente novo no esquema do terminal, uma ilustração mais real da **abertura do terminal e execução do comando**.

![GIF Ilustrando a execução terminal e do comando cd](https://cdn-images-1.medium.com/max/3700/1*ldxqR68PSkq3X1peyK1ljg.gif)*GIF Ilustrando a execução terminal e do comando cd*

Agora que já temos o terminal **corretamente alocado** na pasta raiz do nosso projeto, podemos **inicializar o NPM**. Basta usar o comando “***npm init”.*** O terminal vai pedir algumas entradas, mas **vamos pular esta etapa dando enter até acabar***(mas se você quiser pode responder direitinho hahaha).*

![GIF ilustrando a execução do comando “npm init” no terminal](https://cdn-images-1.medium.com/max/3424/1*2ViOoZnf2sZwkC8KOkZ6MQ.gif)*GIF ilustrando a execução do comando “npm init” no terminal*

Perceberam que o arquivo “***package.json” ***foi gerado no no nosso diretório. Este, vai** armazenar dados **como informações sobre o projeto, **nome e versão dos pacotes** já instalados e **scripts**(* função que vou abordar em outro artigo).*

## 3: “Baixando” os primeiros pacotes

O comando para solicitar a instalação de pacotes é** “*npm install nomedopacote”, ***onde a palavra install pode ser substituída pela abreviação **“*i”, ***logo temos:

    npm i nomedopacote

Para saber o** nome correto **dos pacotes, acesse [este site](https://www.npmjs.com/package/package) e **pesquise pela dependência** que você quer. No meu caso quero instalar a ultima versão do *bootstrap*, então:

![GIF Ilustrando o processo de instalação de um pacote](https://cdn-images-1.medium.com/max/3432/1*GbVzQ-mzC0soFRkDEI2GjA.gif)*GIF Ilustrando o processo de instalação de um pacote*
> No GIF acima, segui as seguintes etapas: Pesquisei pela dependência no site, para me certificar que estou usando o nome correto; Abri o terminal/CMD, o qual está alocado na pasta do meu projeto onde inicializei o NPM; Executei o comando “npm i bootststrap”.

Agora, percebam o surgimento de** um arquivo e uma pasta** após a execução do primeiro install. **As suas funções são:**

* **Pasta “node_modules/”:** **Armazena** todos os **pacotes instalados **por meio do NPM. *No nosso caso, a dependência do bootstrap que baixamos está lá.*

* **Arquivo “package-lock.json”:** Esse arquivo **guarda** de uma forma mais **aprofundada** **as** **informações** do **módulo e seus pacotes instalados**. Coisas como **mapeamento** de relações de dependência(quando um pacote depende de outro para funcionar), ***hashs*** que fazem o controle de integridade, ***links*** onde os downloads foram feitos e** versões detalhadas** dos pacotes **estão nesse JSON**.

Vale ressaltar que quando a dependência é **usada apenas para o desenvolvimento**, não sendo necessária para “rodar” o projeto, como no caso de ferramentas como o Gulp(um automatizador de tarefas, abordarei no próximo capítulo), deve ser usado o **sufixo** **“— save-dev”**, que pode ser resumido para um simples** “-D”**. Logo o comando fica:

    npm i nomedopacote -D

## 4: Trabalhando com o package.json

O **NPM** tem alguns comportamentos muito interessantes, um deles é a **flexibilidade** na instalação de uma **lista de dependências **por meio do arquivo** package.json**. Quando você quiser instalar **todas** as dependências do projeto(que não sejam ferramentas de dev), ou seja, aquelas que estão no seu package.json, basta executar o comando **“npm i”***(isso mesmo, sem especificar o nome de alguma dependência)*, e** todas serão instaladas**.

![GIF Ilustrando a instalação das dependências de um package.json](https://cdn-images-1.medium.com/max/3540/1*5UERe3wwpgsGl88v-kiOMg.gif)*GIF Ilustrando a instalação das dependências de um package.json*
> Nessa ilustração, a esquerda está o meu terminal, a direita o meu package.json, e no fundo a pasta “node_modules” do meu projeto. Percebam que não havia nenhuma biblioteca “instalada”, mas o meu package.json tinha algumas dependências na lista. Após a execução do comando “npm i”, foi feito o download de todas essas dependências.

Logo, é uma **boa prática **quando se **trabalhando grupo**(como projetos no ***GITHUB***), não disponibilizar a pasta **“node_modules”**, e sim o arquivo **“package.json” e o “package-lock.json”***(sim, esse também!)*, assim o seu colega(ou você) pode escolher o que e se quer fazer download no projeto, **não sendo obrigado a fazer o download de toneladas de arquivos**.

É isso aí galera! Agora vocês podem dizer na entrevista de emprego que são sabem usar um** gerenciador de dependências**, hahahaha! Deixei de fora uma parte chamada **“NPM Scripts”**, mas tem basicamente a mesma função de uma ferramenta que **vou abordar futuramente**.

Se esse artigo foi **útil** pra ti, da uma **compartilhada com os amigos e clica na mãozinha ali em baixo** :). Qualquer **dúvida** ou **sugestão** de acréscimo ao artigo ou de assuntos para novos capítulos, deixa um **comentário** ou** me chama** em alguma das minhas redes sociais, **bora bater um papo**!

* [Facebook](https://www.facebook.com/vitor.regisderamos)

* [Linkedin](https://www.linkedin.com/in/vitorregisr/)

* [Twitter](https://twitter.com/vitorregisrr)
