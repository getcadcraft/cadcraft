---
title: Tramas e áreas de preenchimento
summary: Preencha uma área com uma cor sólida ou um padrão normalizado, clicando dentro dela ou escolhendo formas fechadas, defina a escala e o ângulo do padrão e altere uma trama depois.
keywords: trama, bhatch, preenchimento, preenchimento sólido, padrão, ansi31, ansi37, tijolo, terra, rede, linhas de corte, poché, ilha, contorno, escala, ângulo
from: e7feb344
---

## O que vai criar

Uma secção de parede preenchida com o padrão ANSI31, um pilar vazio nela e um preenchimento sólido no pilar.

## Tramar clicando dentro de uma área

1. Desenhe um retângulo (`REC`, `0,0`, `@2000,1200`) e um círculo dentro dele (`C`, `1000,600`, `300`). Clique em {{ui:Extensão}}.
2. Clique em {{ui:Trama}} no grupo {{ui:Desenhar}}, ou escreva `H` e prima {{key:Enter}}. O histórico indica qual é o padrão atual, por exemplo `Current hatch: ANSI31, scale 1, angle 0°`.
3. Escreva `P` e prima {{key:Enter}}, escreva `ANSI31` e prima {{key:Enter}}.
4. Escreva `SC` e prima {{key:Enter}}, escreva `20` e prima {{key:Enter}}. Os tamanhos dos padrões são no papel, por isso um desenho impresso a 1:20 quer a escala 20.
5. No pedido `Pick internal point`, clique dentro do retângulo, fora do círculo. A trama mostra-se como pré-visualização.
6. Prima {{key:Enter}}. O retângulo fica tramado; o círculo interior fica vazio, porque é uma ilha.

Clique dentro de várias áreas antes de premir {{key:Enter}} para as tornar uma só trama. `U` anula a última área.

## Um preenchimento sólido

1. Escreva `H` e prima {{key:Enter}}.
2. Escreva `P`, prima {{key:Enter}}, escreva `SOLID` e prima {{key:Enter}}.
3. Clique dentro do círculo e prima {{key:Enter}}.

## Tramar formas fechadas que escolher

Em vez de clicar dentro, escreva `S` (Selecionar objetos) no pedido `Pick internal point` e escolha polilinhas fechadas, círculos ou elipses fechadas, depois prima {{key:Enter}}. As formas dentro de outras ficam vazias à vez (a exterior tramada, a seguinte vazia, e assim por diante).

## Padrões

Escreva `?` no pedido do padrão para ver a lista. Os padrões normalizados são ANSI31 a ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS e EARTH, e SOLID. Num desenho em polegadas (ou com pés e polegadas como formato de comprimento), usam-se os tamanhos em polegadas dos padrões, como no AutoCAD; caso contrário, os tamanhos em milímetros.

{{ui:Ângulo}} (`A`) roda o padrão inteiro: ANSI31 a 90° inclina-se para o outro lado.

**Ficheiros de padrões.** Escreva `F` (Ficheiro de padrão) em `Pick internal point` e escolha um ficheiro `.pat`. Os padrões nele contidos juntam-se à lista; havendo mais do que um, pergunta-se qual usar. Um ficheiro sem nenhum padrão que o CadCraft consiga ler indica-o, e qualquer padrão que tenha ignorado é contado. Os tamanhos num ficheiro `.pat` não têm unidade própria, por isso são lidos nas unidades do desenho. Só foram testados ficheiros escritos no formato `.pat` habitual; nenhum criado por outro programa.

## Alterar uma trama

Selecione-a (clique numa das suas linhas). Em {{ui:Propriedades}}: {{ui:Padrão}}, {{ui:Escala do padrão}} e {{ui:Ângulo do padrão}}. As tramas de desenhos abertos mostram o seu padrão quando é um dos normalizados; as outras aparecem como um tom claro da sua cor.

## Erros comuns

- **"Não há contorno fechado à volta desse ponto."** Há uma falha no contorno, ou parte dele está fora do ecrã: o CadCraft só vê o que está no ecrã. Feche a falha (faça zoom nos cantos), ou reduza o zoom.
- **"O padrão é denso demais para ser desenhado a esta escala."** As linhas ficariam mais próximas do que o desenho consegue mostrar. Use uma escala maior: experimente a escala de impressão (20 para 1:20).
- **O padrão parece enorme ou minúsculo.** A escala é em unidades de desenho por unidade de padrão; veja o passo 4 acima.
- **A trama deixou de seguir o seu contorno.** Uma trama feita com {{cmd:HATCH}} fica associada aos objetos de que foi feita: mova, rode ou escale o contorno e a trama acompanha-o; reformule-o com um grip e a trama é calculada de novo. A associação termina quando o contorno deixa de fechar, quando reformula a própria trama à mão, ou quando a corta, e a linha de comandos indica-o. Nada se perde: volte a tramar a área para a associar de novo.

## Uma trama que fica com o seu contorno

Uma trama feita com `HATCH` lembra-se do que a delimita. Mova, rode ou escale o contorno e a trama e o seu padrão acompanham-no. Arraste um grip para reformular o contorno e a trama é recalculada. Mova a trama sozinha e o seu contorno vem também, como uma forma preenchida num programa de desenho.

A associação termina, e a linha de comandos indica-o, se o contorno deixar de fechar ou se reformular a trama à mão. A própria trama fica. Escreva `AS` durante a tramagem para criar tramas independentes. Copie uma trama com o seu contorno e a cópia tem a sua própria associação.

`HATCHEDIT` (`HE`) altera o padrão, a escala, o ângulo e a origem de uma trama, e associa-a a um contorno ou termina a associação. A associação é guardada nos ficheiros DWG e DXF 2000. Um ficheiro DXF R12 não tem objeto de trama, e as associações feitas noutros programas não são lidas: para essas, use `HATCHEDIT` e Associar.

Uma trama que já não tem contorno (o contorno foi apagado, ou o ficheiro veio sem ele) pode recuperá-lo: `HATCHGENERATEBOUNDARY` (`HGB`) desenha uma polilinha fechada à volta de cada circuito da trama e, se responder Sim, associa a trama a elas.

## Um preenchimento de gradiente

`GRADIENT` (`GD`) preenche uma área com um gradiente em vez de um padrão: as mesmas escolhas de `HATCH`, depois de perguntar o tipo (linear, cilíndrico, esférico, hemisférico, curvo, e cada um deles invertido), uma cor com um tom ou duas cores, o ângulo, e se é centrado ou não. Em `HATCH` a opção `G` faz o mesmo. `HATCHEDIT` `G`, ou {{ui:Propriedades}} em Gradiente, altera um gradiente ou transforma qualquer trama num.

Um gradiente mostra-se no ecrã e nas impressões. Guarde como DWG 2004 ou posterior e os outros programas recebem uma trama de gradiente verdadeira. O DXF 2000 e o DWG 2000 não têm gradiente: aí o CadCraft guarda-o para si e os outros programas veem um preenchimento sólido na primeira cor.

## Aparar uma trama

`TRIM` corta uma trama como qualquer outro objeto. Clique na trama do lado da aresta de corte que quer eliminar: as arestas dividem a área tramada e essa parte é removida. No modo Rápido, todo o objeto é uma aresta de corte; escolha primeiro as arestas (opção `T`) quando forem muitas. Uma trama aparada deixa de estar associada ao seu contorno, porque já não o preenche.
