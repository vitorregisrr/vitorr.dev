---
title: Codificação ágil com EMMET
description: >-
  A codificação do HTML e CSS é uma uma das práticas mais presentes na vida de
  um desenvolvedor Front-end, e para agiliza-la podemos usar o plugin EMMET.
date: '2019-10-16 02:58'
image: /assets/img/Vitor Régis.jpg
category: html
background: '#D6BA32'
---
<!--StartFragment-->

# CAPÍTULO #1: EMMET

A codificação do**HTML**e**CSS**é uma uma das práticas mais presentes na vida de um**desenvolvedor Front-end,**e para agiliza-la podemos usar o**plugin EMMET**. Este além de nos permitir**escrever componentes HTML como se fossem seletores CSS e os estilos CSS com abreviações,**nos fornece acesso à uma**coletânea de atalhos**no teclado para**manipular e navegar pelo código.**O**EMMET**já está**presente na maioria dos editores modernos,**como por exemplo o**VSCODE**,não tornando necessária sua instalação. Nestes casos**basta sair escrevendo**. Porém caso você use um editor que**não o tenha por natureza**, você encontra o**plugin**no**[site oficial](https://emmet.io/)**. Chega de ladainha, bora**aprender na prática.**

- - -

# **1:**Criar a estrutura básica do documento HTML

Basta**escrever**uma exclamação**(!)**no seu arquivo vazio e dar um**enter**.

![](https://miro.medium.com/freeze/max/38/1*siAYVmlRgb8DCj1aeyt4Nw.gif?q=20)

![](https://miro.medium.com/max/1134/1*siAYVmlRgb8DCj1aeyt4Nw.gif)

GIF Ilustrando o uso de exclamação(!) para gerar um documento HTML

# **2:**Escrevendo componentes HTML

**Use a sintaxe de seletores CSS.**No meu caso, quero criar um componente que é o**resumo de uma notícia**. Este, é formado pela***tag article***composta por uma**imagem**, um**título**e um**resumo**. Então se eu escrever o trecho:

```
article>img+h3+h4
```

Vou apertar enter e ter como saída:

```
<article>    
   <img src="" alt="">
   <h3></h3>
   <h4></h4>
</article>
```

> **Para quem não está*muito por dentro dos seletores CSS:****O sinal de maior**(>)**indica que os próximos itens estarão**dentro**da tag**article(serão seus filhos)**e a soma**(+)**diz que a**imagem**, o**titulo**e o**sub-título**estarão um ao lado do outro**(serão irmãos)**.*
>
> Você também pode escrever um trecho usando o elemento**“^”**para**subir um nível**previamente**descendido**pelo**“>”**. No trecho “div>img+h1+h2**^**div>h4**”**,por exemplo,**as duas divs serão irmãs**.

# **3:**Criando um componente com atributos

A**estrutura**do componente está pronta, mas está sem**conteúdo**e**atributos**. Para isso, usamos os**seletores**:

* **\# para*ids;***
* **. para*classes;***
* ***{}*para inserir um texto;**
* ***\[attr=”valor”]*para qualquer atributo**.

Para acrescenta-los no nosso componente, o**trecho**vai ficar da seguinte forma:

```
article.noticia>img.img-noticia+h3.titulo-noticia{titulo}+h4.resumo-noticia{resumo}
```

E resultar no**HTML**:

```
<article class="noticia">
    <img src="" alt="” class="img-noticia">    
    <h3 class="titulo-noticia">titulo</h3>
    <h4 class="resumo-noticia">resumo</h4>
</article>
```

# 4: Gerando um “Lorem Ipsum”

Para facilitar a**visualização**do componente, precisamos de um**conteúdo textual**provisório, e em razão disto existe o texto em latim***[Lorem Ipsum](https://pt.wikipedia.org/wiki/Lorem_ipsum)***. Para gera-lo com**EMMET**, usamos a palavra**“*lorem*” procedida do número de palavras que queremos obter**. Então, o trecho:

```
article.noticia>img.img-noticia+h3.titulo-noticia{titulo}+h4.resumo-noticia>lorem8
```

Vai gerar o nosso**resumo**com um t**exto*Lorem Ipsum***de 8**palavras**:

```
<article class="noticia">
   <img src="" alt="" class="img-noticia">
   <h3 class="titulo-noticia">titulo</h3>
   <h4 class="resumo-noticia">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
</article>
```

# **5: Multiplicando componentes**

Agora que já temos nosso componente pronto, precisamos de uma**lista**com**3**destes. Utilizaremos o operador de multiplicação**(*)**seguido do**número**de vezes que o bloco vai ser**repetido**. Uma coisa muito útil é a existência**default**da**variável “*$”****em repetições**.***No caso da expressão abaixo,**a cada repetição ela vai receber o valor 1**.

```
.lista-noticias>(article.noticia>img.img-noticia+h3.titulo-noticia{titulo $}+h4.resumo-noticia>lorem8)*3
```

O resulto do trecho acima são 3*divs*, com os títulos seguidos da**posição do componente,**a qual foi**incrementada de 1 até 3.**Perceba também que fiz uso de**parentes**, para**ressaltar**que o que vai ser multiplicado é**apenas o componente*article***.

```
<div class="lista-noticias">
  //Repetição 1
  <article class="noticia">
      <img src="" alt="" class="img-noticia">
      <h3 class="titulo-noticia">titulo 1</h3>
      <h4 class="resumo-noticia">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
   </article>
  //Repetição 2
  <article class="noticia">
      <img src="" alt="" class="img-noticia">
      <h3 class="titulo-noticia">titulo 2</h3>
      <h4 class="resumo-noticia">Accusantium quas, odio inventore pariatur.</h4>
</article>
  //Repetição 3
  <article class="noticia">
      <img src="" alt="" class="img-noticia">
      <h3 class="titulo-noticia">titulo 3</h3>
      <h4 class="resumo-noticia">Repudiandae qui totam minus, quam eum et rem.</h4>
   </article>
</div>
```

> **Observação:**Em alguns casos você pode usar tags**implícitas.**O trecho “**.lista-noticias**” por exemplo, cria uma***div***com a classe lista-noticias. Isso acontece por que o**elemento pai**é do tipo***block**. O mesmo também funciona para:*
>
> ***li***em tags***ul*e*ol****;*
>
> ***tr***em tags***table***,***tbody*,*thead*e*tfoot****;*
>
> ***td***em tags***tr**;*
>
> ***option***em tags select e***optgroup**.*

# 6: Abreviações CSS

O**EMMET**também ajuda na**codificação CSS,**permitindo escrever**estilos**com**abreviações**. Por serem centenas*(ou milhares)*de abreviações, não vou cita-las, mas você pode encontra-las nessa**[folha de códigos EMMET](https://docs.emmet.io/cheat-sheet/)**. Basta rolar a página até a seção**CSS**e terão várias colunas, com a**abreviação à esquerda**e o**resultado esperado a direita**.*Nesse site também tem tudo que eu já expliquei até aqui e muito mais, é de onde estou retirando o conteúdo.*

![](https://miro.medium.com/max/38/1*TDfcXw0upvwhde3Cw5N0Pg.png?q=20)

![](https://miro.medium.com/max/2356/1*TDfcXw0upvwhde3Cw5N0Pg.png)

Print Screen da documentação do site oficial EMMET

# 7: Prefixos de fornecedor CSS

Colocando**“ - ”**antes de uma a**breviação CSS**, ela vai ser gerada automaticamente com**todos os prefixos de suporte para browsers**.

![](https://miro.medium.com/freeze/max/38/1*YEuoyTm5TA3ySEE2InKQTw.gif?q=20)

![](https://miro.medium.com/max/513/1*YEuoyTm5TA3ySEE2InKQTw.gif)

GIF ilustrando o uso da abreviação -trf

Agora digamos que você quer**alterar**valor 20 para 50. Para não precisar mudar um por um, existe o atalho***“Refletir Valor CSS”(Default: Ctrl + B).***

![](https://miro.medium.com/freeze/max/38/1*TcsmBfV1P54QWFWrQqYe4g.gif?q=20)

![](https://miro.medium.com/max/513/1*TcsmBfV1P54QWFWrQqYe4g.gif)

GIF ilustrando o uso do atalho “Refletir Valor CSS”

# 8: Manipular e navegador pelo código

Abaixo listei alguns**atalhos EMMET**que eu mais uso na minha rotina:

* **Balance/(Ctrl + D) e (Shift + Ctrl + D)**: Seleciona o código de forma inteligente, respectivamente expandindo e comprimindo a seleção.

![](https://miro.medium.com/freeze/max/38/1*qnYszX4iV7iyBXnPv0hcCw.gif?q=20)

![](https://miro.medium.com/max/635/1*qnYszX4iV7iyBXnPv0hcCw.gif)

GIF Ilustrando oS atalhos (Ctrl + D) e (Shift + Ctrl + D)

* **Remove Tag/(Ctrl + K)**: Remove uma tag.

![](https://miro.medium.com/freeze/max/38/1*w40mieVAlIViHFOQu-_5ww.gif?q=20)

![](https://miro.medium.com/max/635/1*w40mieVAlIViHFOQu-_5ww.gif)

GIF Ilustrando o atalho (Ctrl + K)

* **Merge Lines/(Shift + Ctrl + M)**: Une as linhas selecionadas.

![](https://miro.medium.com/freeze/max/38/1*mEJIa3TPtxY5YWxn1OiQzQ.gif?q=20)

![](https://miro.medium.com/max/635/1*mEJIa3TPtxY5YWxn1OiQzQ.gif)

GIF Ilustrando o atalho (Shift + Ctrl + M)

* **Toggle Comment/(Ctrl + /):**Comenta uma linha.

![](https://miro.medium.com/freeze/max/38/1*UFrXepY-8HFV9l6GeNpyDA.gif?q=20)

![](https://miro.medium.com/max/635/1*UFrXepY-8HFV9l6GeNpyDA.gif)

GIF Ilustrando o atalho (Shift + /)

* **Evaluate Math Expression/(Shift + Ctrl + Y):**Resolve uma expressão matemática.

![](https://miro.medium.com/freeze/max/38/1*sHzVWTVL4ASxJRF4OuoO0A.gif?q=20)

![](https://miro.medium.com/max/635/1*sHzVWTVL4ASxJRF4OuoO0A.gif)

GIF Ilustrando o atalho (Shift + Ctrl + Y)

> Vale lembrar que para quem usa o editor**VSCODE**, os atalhos podem por**default**ser diferentes ou não estarem configurados. Para isso, vá em**arquivo>preferências>atalhos de teclado,**pesquise por**EMMET**e vão ser listados todos os**comandos EMMET disponíveis**.Depois, basta escolher as teclas**que você prefere**.

- - -

É isso que eu tenho para mostrar pra vocês hoje, tenho certeza que essa ferramenta vai**aumentar muito a produtividade na codificação de vocês**. Se este artigo foi de fato**útil**pra ti, não esquece de deixar um “like”, é só se conectar e clicar na mãozinha aqui em baixo! Qualquer**dúvida, crítica, sugestão de acréscimo ao artigo e idéias para outros capítulos,**sinta-se super a vontade pra deixar nos**comentários**. Você também pode me encontrar nas redes sociais para**trocar uma ideia ou tirar dúvidas**!

<!--EndFragment-->
