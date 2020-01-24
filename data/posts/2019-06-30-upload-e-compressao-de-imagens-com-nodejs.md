---
title: "Upload e compressão de imagens com NodeJS"
description: "Como fazer o upload de imagens, e principalmente: como comprimi-las e tratá-las após recebe-las no servidor." 
date: '2019-06-30 02:58'
image: /assets/img/node-compressao.png
category: node
background: '#D6BA32'
---

Fala minha gente! É com muito prazer que escrevo esse artigo tentando resolver um problema que tenho visto nos forums assolar a vida de muitos programadores: como fazer o upload de imagens, e principalmente: como comprimi-las e tratá-las após recebe-las no servidor. Ficou um artigo um pouco longo pois nele desenvolvo um passo-a-passo bem explicado, mas continua que vale a pena!

Para prosseguir, vamos utilizar **duas bibliotecas:** o ***Multer***, para o **upload de imagens, e o Sharp, para processar essas imagens(redimensionar, comprimir, converter…).** Ambos são **middlewares **para utilizar com **NodeJS**, e nesse artigo, utilizaremos com **Express**, embora funcionem sem.

![Título do artigo com o logo da linguagem à esquerda](/assets/img/node-compressao.png)

## Como estas bibliotecas Funcionam

### Multer

O **Multer **funciona da seguinte forma: Além das **configurações ***(item 3)*, nós apontamos **que dados da requisição (os dados recebidos do formulário**) **são os arquivos que queremos tratar**. Logo, na execução dessa rota (geralmente um **POST**), ele vai **interceptar esses campos**, **tratar esses arquivos, salva-los, e nos retornar na requisição as informações desse armazenamento**, se teve ou não **sucesso**, e se teve, qual as **propriedades desse arquivo salvo**.

### Sharp

O **Sharp **por sua vez, é uma **biblioteca para processar imagens no servidor**. Ele não foi feito exatamente pra ser usado com o **Multer**, mas vamos dar um jeito pra deixar tudo automatizado, e **no momento desse upload, se houve sucesso no armazenamento, simplesmente processamos esse arquivo que foi salvo**.

Enfim, bora para a parte prática!

## 1. Instalando os pacotes

Partindo do princípio que já temos o nosso** servidor Express** basicamente configurado, vamos instalar os nossos **pacotes**, executando o seguinte **comando **no terminal:

    npm i sharp multer

Agora que temos as bibliotecas disponíveis no **projeto**, vou criar um arquivo chamado ***multer.js***, nele vamos **exportar **o nosso **middleware, **para posteriormente **usar nas nossas rotas**.* Pouca gente faz isso, mas quando possível é interessante, não só para **economizar código**, mas também **concentrar a lógica importante em um lugar só**. *Esse arquivo vai ter o seguinte esqueleto:

<iframe src="https://medium.com/media/bebbdfe3fa8d63e38cf557be6186d849" frameborder=0></iframe>

## 2. Configurando o Multer

Como falei acima, vamos instanciar nosso **middleware **executando a biblioteca com as nossas próprias configurações. Primeiro, vamos apontar as **informações ligadas ao armazenamento**, como o **destino desses arquivos e como eles irão se chamar. **Essas opções vão na propiedade ***storage **do nosso objeto*. Também podemos configurar um **validador**, para aceitar apenas certos tipos de extensões, na nossa propriedade ***fileFilter***.

### storage

Como queremos **salvar arquivos no disco**, vamos executar utilizar a função ***diskStorage***, disponibilizada pela biblioteca, que vai fazer a **lógica do armazenamento**, basta configurarmos **duas propiedades** que recebem **funções**, e executar o ***callback ***que vem em seus **parâmetros **corretamente.

<iframe src="https://medium.com/media/5ab07967cb7da4e9b8825622511e91fb" frameborder=0></iframe>

Como você pode ver, a **configuração de armazenamento** tem duas **propriedades**: ***destination ***e ***filename***, que vão apontar o** destino dos arquivos e o nome deles**, respectivamente. Elas recebem funções, **onde teremos acesso aos parâmetros:**

* **req:** a requisição que foi feita aquela rota (normal do express);

* **file: **algumas informações do arquivo que foi recebido (nome, tipo, etc);

* **cb:** callback que executaremos com a resposta(no seu segundo parâmetro).

### fileFilter

Essa configuração é a responsável pela **validação **do arquivo. Se a validação **falhar**, vamos receber um** objeto *undefined ***na requisição do nosso *controller*, e se o arquivo for **aprovado**, ele vai ser **armazenado **e receberemos na requisição **um objeto com as informações dele e do armazenamento que foi realizado**.

Enfim, para usar essa opção basta indicar a propriedade ***fileFilter* **no nosso objeto de opções*. *Essa propriedade recebe uma função com os** mesmos parâmetros** que vimos nas propriedades ***destination ***e ***filename**.*

Lembra que essa função nos da acesso, por meio dos parâmetros, a informações sobre o arquivo que recebemos? Esse objeto tem a propriedade ***mimetype***, que é o** tipo(extensão?) do arquivo**. Basta testarmos se essa propriedade se encaixa com os formatos que esperamos, e baseado nisso, **executamos **o ***callback***, passando ***false *para rejeitado**, e ***true *para aceito**.

Abaixo você encontra a nossa propiedade ***fileFilter***, com comentários indicando o que está acontecendo, e o nosso objeto de opções **finalizado**.

<iframe src="https://medium.com/media/94e0a9b3ea03aa64b356c5330bacf410" frameborder=0></iframe>
> Geralmente as pessoas usam uma cadeia de ifs para testar o mimetype, mas eu prefiro essa forma automatizada que pensei, assim é só adicionar no array os formatos que queremos.

**Vamos aplicar isso nas nossas rotas?**

## 3. Multer em ação!

Chegou a hora de usar o nosso **middleware **previamente **configurado**. Vou usar **duas rotas** simples, uma que** renderiza o formulário** com **GET **e outra que **recebe o POST **desse formulário**. ***As rotas são apenas para propósitos educativos, então estão bem simples sem padronização MVC, por exemplo.*

### Nosso GET:

<iframe src="https://medium.com/media/a32d5f7474c6cfa0e07d95d6c1104c99" frameborder=0></iframe>

Dois **detalhes **que ressaltei no código, os quais são **MUITO importantes**, causando a maioria dos erros:

* O formulário deve ter o atributo ***enctype=”multipart/form-data”***

* O ***name ***da entrada que queremos armazenar deve ser **exatamente igual** ao que especificamos na nossa rota (você já vai entender).

### E O POST:

No nosso **POST**, nós vamos executar também como um **middleware **da rota, o nosso ***multer***, **indicando a ele o name do form que queremos tratar**. Como queremos **apenas um campo**, vamos usar o método **single**, enviando como parâmetro o **name **do campo que o **middleware **deve agir. *Existem outras formas, como usar mais de um name, que você encontra na [**documentação do Multer](https://github.com/expressjs/multer).***
> Caso você esteja iniciando no Node/Express: em uma rota, nós podemos passar como parâmetros vários middlewares, que são funções/funcionalidades que processam a nossa requisição, sendo executadas na ordem apontada (explicando de maneira hypermega minimalista).

O **Multer**, que é executado antes do **middleware **principal, vai filtrar a nossa requisição, **procurar pelo campo indicado e tratar ele**. A **saída **desse campo tratado vai ser armazenada na propiedade ***file **da nossa requisição*. *O restante dos campos, se houver, vai normalmente para o req.body, como se fosse um form qualquer.*

*Obs: Esse bloco de código está logo embaixo do que mostrei acima, não coloquei um em baixo do outro para não ficar muito grande.*

<iframe src="https://medium.com/media/e833c1818a849edb9dc66133d4dc9664" frameborder=0></iframe>

Para** testar se o armazenamento ocorreu com sucesso**, apenas checamos se essa saída que o middleware ***multer.single(‘image’) ***atribuiu ao ***req.file** *não é **undefined**, que é seu valor se não passar no filtro, ou ocorrer algum outro erro. Ao contrário, a **saída vai ser um objeto com várias propriedades, incluindo o caminho até o arquivo, por exemplo**.

Agora que o nosso upload está funcionando, vamos para o tratamento dessa imagem!

## 4. Criando nosso middleware de tratamento com Sharp

Para focar o código importante em um único lugar,** vamos criar um utilitário próprio**, utilizando as bibliotecas ***fs*** (já tem por default no node), e **Sharp**, que nós já instalamos. Para isso vou criar um arquivo chamado** *file-helper.js, ***que exporta uma função chamada **compressImage**, com toda a lógica de **compressão**, recebendo como parâmetro o **objeto **que recebemos do **Multer **com as** informações do arquivo**,** e o tamanho** que queremos que ela seja **redimensionada**.

O esqueleto vai ficar assim:

<iframe src="https://medium.com/media/215ae82df7e955b64029ac28ac95fce1" frameborder=0></iframe>

Essa função deve **redimensionar **a imagem recebida, **converter **para **WEBP**, e **substituir **o arquivo antigo pelo tratado. No final, quero esse arquivo em ***Buffer***, para salvar com o módulo **fs**.* O Sharp tem uma [série de possibilidades e métodos](http://sharp.pixelplumbing.com/en/stable/api-constructor/), que podemos executar no [estilo **chain](https://schier.co/blog/2013/11/14/method-chaining-in-javascript.html)**, incluindo salvar diretamente no disco, mas nos meus testes ocorreram vários bugs, então preferi trabalhar com o** Buffer em conjunto com o fs**.*

Continuando nosso código, vamos codar a **lógica de processamento** até receber o Buffer, abaixo você encontra o código explicado:

<iframe src="https://medium.com/media/3639b082dc93aa94e53abcb376ee322b" frameborder=0></iframe>
> Como você deve ter entendido, apenas executei a biblioteca passando o caminho da imagem que quero processar, e fui concatenando com outras funções da biblioteca, para fazer os tratamentos.

Prosseguindo com o armazenamento do Buffer, nós vamos primeiro** apagar o arquivo anterior salvo pelo Multer**, e depois** salvar o novo .webp comprimido**. Se tudo ocorreu corretamente, o **retorno vai ser o caminho da imagem nova**, *para podermos usar na nossa rota, caso você tenha que salvar no banco de dados, por exemplo.*
> Vou utilizar três métodos do **file-system(fs)**, o access, que nesse código serve para testar se o arquivo anterior existe antes de apaga-lo, o unlink, que o apagará, e o writeFile, que vai, a partir do novo caminho e do buffer, armazenar a nova imagem.

<iframe src="https://medium.com/media/744c19d4572a7c29c93c1be06376d6a5" frameborder=0></iframe>

Agora que nosso utilitário de compressão está a todo o vapor, basta **executarmos na requisição do nosso POST**, se o upload foi feito com **sucesso **(*de maneira crua: se a propiedade req.file não for undefined).*

Vamos então voltar até o nosso POST, importar o nosso utilitário, e executar ele!

<iframe src="https://medium.com/media/44ba12956ca22a6920d6c3a9cb2a2666" frameborder=0></iframe>

**Tudo pronto!** se tudo ocorreu corretamente, temos a nossa imagem recebida pelo post **“substituída” pela nova versão comprimida e processada.**
> Tem várias coisas que podem ser melhoradas no código, como por exemplo salvar o buffer por meio de stream, continuar a promise chain para deixar tudo async, trabalhar melhor com os erros, etc. Vou deixar isso para a individualidade do projeto de vocês,** o céu é o limite**!

Se você chegou até aqui,** parabéns guerreiro**! Espero que esse **artigo **tenha o **ajudado solucionar pelo menos um pouco dos seus problemas **com **upload **e **processamento **de imagens com **nodeJS**. E s**e ajudou mesmo**, não esquece de **deixar um aplauso**, clicado na mãozinha aí em cima, e deixando um **feedback nos comentários**!

Se o código acima **não deu certo** no seu projeto, ocorreu algum **bug **ou você **ficou alguma dúvida**, vou ficar muito feliz em tentar **ajudar **nas minhas **redes sociais**! Chama no probleminha:

* [Facebook](https://www.facebook.com/vitor.regisderamos)

* [Linkedin](https://www.linkedin.com/in/vitorregisr/)

* [Twitter](https://twitter.com/vitorregisrr)

* [Github](https://github.com/vitorregisrr)
