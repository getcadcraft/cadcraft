---
title: Tramar e preencher áreas
summary: Preencha uma área com uma cor sólida ou um padrão normalizado, clicando dentro dela ou escolhendo formas fechadas, defina a escala e o ângulo do padrão e altere uma trama depois.
keywords: trama, bhatch, preenchimento, preenchimento sólido, padrão, ansi31, ansi37, tijolo, terra, rede, linhas de corte, poché, ilha, contorno, escala, ângulo
from: 14399174
---

## O que vai criar

Um corte de parede preenchido com o padrão ANSI31, uma coluna deixada vazia e um preenchimento sólido na coluna.

## Tramar clicando dentro de uma área

1. Desenhe um retângulo (`REC`, `0,0`, `@2000,1200`) e um círculo dentro dele (`C`, `1000,600`, `300`). Clique em {{ui:Extensão}}.
2. Clique em {{ui:Trama}} no grupo {{ui:Desenhar}}, ou escreva `H` e prima {{key:Enter}}. O histórico indica o padrão atual, por exemplo `Trama atual: ANSI31, escala 1, ângulo 0°`.
3. Escreva `P` e prima {{key:Enter}}; escreva `ANSI31` e prima {{key:Enter}}.
4. Escreva `SC` e prima {{key:Enter}}; escreva `20` e prima {{key:Enter}}. Os tamanhos dos padrões são em papel, por isso um desenho impresso à escala 1:20 pede a escala 20.
5. Em `Indique um ponto interno`, clique dentro do retângulo, fora do círculo. A trama aparece como pré-visualização.
6. Prima {{key:Enter}}. O retângulo fica tramado; o círculo fica vazio, porque é uma ilha.

Clique dentro de várias áreas antes de premir {{key:Enter}} para as tornar uma só trama. Anular (`U`) remove a última área.

## Um preenchimento sólido

1. Escreva `H` e prima {{key:Enter}}.
2. Escreva `P`, prima {{key:Enter}}, escreva `SOLID` e prima {{key:Enter}}.
3. Clique dentro do círculo e, depois, prima {{key:Enter}}.

## Tramar formas fechadas que escolher

Em vez de clicar dentro, escreva `S` (Selecionar objetos) em `Indique um ponto interno` e escolha polilinhas fechadas, círculos ou elipses fechadas; depois prima {{key:Enter}}. As formas dentro de outras ficam vazias à vez (a exterior tramada, a seguinte vazia, e assim sucessivamente).

## Padrões

Escreva `?` na pergunta do padrão para ver a lista. Os padrões normalizados são ANSI31 a ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH e SOLID. Num desenho em polegadas (ou com pés e polegadas como formato de comprimento) usam-se os tamanhos em polegadas dos padrões, como no AutoCAD; caso contrário, os tamanhos em milímetros.

{{ui:Ângulo}} (`A`) roda todo o padrão: ANSI31 a 90° inclina-se para o outro lado.

**Ficheiros de padrões.** Escreva `F` (Ficheiro de padrão) em `Indique um ponto interno` e escolha um ficheiro `.pat`. Os padrões nele contidos juntam-se à lista; com mais do que um, pede-se que se escolha qual usar. Um ficheiro sem padrões que o CadCraft consiga ler indica-o, e qualquer padrão ignorado é contado. Os tamanhos num ficheiro `.pat` não têm unidade própria, por isso são lidos nas unidades do desenho. Só foram testados ficheiros escritos no formato `.pat` habitual; nenhum criado por outro programa.

## Alterar uma trama

Selecione-a (clique numa das suas linhas). Em {{ui:Propriedades}}: {{ui:Padrão}}, {{ui:Escala do padrão}} e {{ui:Ângulo do padrão}}. As tramas de desenhos abertos mostram o padrão quando é um dos padrões normalizados; as restantes aparecem com um tom claro da sua cor.

## Erros comuns

- **"Não há contorno fechado à volta desse ponto."** Há uma falha no contorno, ou parte dele está fora do ecrã: o CadCraft analisa apenas o que está no ecrã. Feche a falha (aproxime o zoom dos cantos) ou afaste o zoom.
- **"O padrão é denso demais para ser desenhado nesta escala."** As linhas ficariam mais próximas do que o desenho consegue mostrar. Use uma escala maior: experimente a escala de impressão (20 para 1:20).
- **O padrão parece enorme ou minúsculo.** A escala é em unidades do desenho por unidade do padrão; veja o passo 4 acima.
- **Mover o contorno não move a trama.** Uma trama não está ligada ao seu contorno. Mova ambos ou volte a tramar.

## Uma trama que fica com o seu contorno

Uma trama feita com `HATCH` lembra-se do contorno que a delimita. Mova, rode ou escale o contorno e a trama e o seu padrão acompanham-no. Arraste um grip (ponto de controlo) para remodelar o contorno e a trama é recalculada. Mova a trama sozinha e o seu contorno vai também, como uma forma preenchida num programa de desenho.

A ligação termina, e a linha de comandos indica-o, se o contorno deixar de fechar ou se remodelar a trama à mão. A trama em si mantém-se. Escreva `AS` durante a tramagem para criar tramas independentes. Copie uma trama com o seu contorno e a cópia tem a sua própria ligação.

`HATCHEDIT` (`HE`) altera o padrão, a escala, o ângulo e a origem de uma trama, e liga-a a um contorno ou termina a ligação. A ligação é guardada nos ficheiros DWG e DXF 2000. Um ficheiro DXF R12 não tem objeto de trama, e as ligações feitas noutros programas não são lidas: para esses casos, use `HATCHEDIT` e Ligar (`L`).

Uma trama que já não tem contorno (o contorno foi apagado, ou o ficheiro chegou sem ele) pode recuperá-lo: `HATCHGENERATEBOUNDARY` (`HGB`) desenha uma polilinha fechada à volta de cada laço da trama e, se responder Sim, liga a trama a essas polilinhas.

## Um preenchimento de gradiente

`GRADIENT` (`GD`) preenche uma área com um gradiente em vez de um padrão: as mesmas escolhas que `HATCH`, depois de perguntar o tipo (linear, cilíndrico, esférico, hemisférico, curvo, e cada um destes invertido), uma cor com um tom ou duas cores, o ângulo e se fica centrado ou não. Em `HATCH`, a opção `G` faz o mesmo. `HATCHEDIT` `G`, ou {{ui:Propriedades}} em Gradiente, altera um gradiente ou transforma qualquer trama num gradiente.

Um gradiente aparece no ecrã e nas impressões. Guarde como DWG 2004 ou posterior e os outros programas recebem uma trama de gradiente real. DXF 2000 e DWG 2000 não têm gradiente: aí o CadCraft mantém-no só para si e os outros programas veem um preenchimento sólido na primeira cor.

## Recortar uma trama

`TRIM` corta uma trama como qualquer outro objeto. Clique na trama do lado da aresta de corte que quer eliminar: as arestas dividem a área tramada e essa parte é removida. No modo Rápido, cada objeto é uma aresta de corte; escolha as arestas primeiro (opção `T`) quando houver muitas. Uma trama recortada deixa de estar ligada ao seu contorno, porque já não o preenche.
