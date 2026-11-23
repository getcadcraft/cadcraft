---
title: Hachuras e áreas de preenchimento
summary: Preencha uma área com uma cor sólida ou um padrão padrão clicando dentro dela ou escolhendo formas fechadas, defina a escala e o ângulo do padrão e altere uma hachura depois.
keywords: hachura, bhatch, preenchimento, preenchimento sólido, padrão, ansi31, ansi37, tijolo, terra, rede, linhas de seção, poché, ilha, contorno, escala, ângulo
from: e7feb344
---

## O que você vai fazer

Uma seção de parede preenchida com o padrão ANSI31, um pilar nela deixado vazio e um preenchimento sólido no pilar.

## Hachurar clicando dentro de uma área

1. Desenhe um retângulo (`REC`, `0,0`, `@2000,1200`) e um círculo dentro dele (`C`, `1000,600`, `300`). Clique em {{ui:Extents}}.
2. Clique em {{ui:Hatch}} no grupo {{ui:Draw}}, ou digite `H` e pressione {{key:Enter}}. O histórico informa qual padrão está atual, por exemplo `Hachura atual: ANSI31, escala 1, ângulo 0°`.
3. Digite `P` e pressione {{key:Enter}}, digite `ANSI31` e pressione {{key:Enter}}.
4. Digite `SC` e pressione {{key:Enter}}, digite `20` e pressione {{key:Enter}}. Os tamanhos do padrão são no papel, então um desenho plotado em 1:20 quer escala 20.
5. Em `Escolha o ponto interno`, clique dentro do retângulo, fora do círculo. A hachura aparece como visualização.
6. Pressione {{key:Enter}}. O retângulo é hachurado; o círculo dentro dele fica vazio, porque é uma ilha.

Clique dentro de várias áreas antes de pressionar {{key:Enter}} para fazê-las uma única hachura. `U` desfaz a última área.

## Um preenchimento sólido

1. Digite `H` e pressione {{key:Enter}}.
2. Digite `P`, pressione {{key:Enter}}, digite `SOLID` e pressione {{key:Enter}}.
3. Clique dentro do círculo e pressione {{key:Enter}}.

## Hachurar formas fechadas que você escolhe

Em vez de clicar dentro, digite `S` (Selecionar objetos) em `Escolha o ponto interno` e escolha polilinhas, círculos ou elipses fechadas; depois pressione {{key:Enter}}. Formas dentro de outras ficam vazias em sequência (a externa hachurada, a seguinte vazia, e assim por diante).

## Padrões

Digite `?` na pergunta do padrão para ver a lista. Os padrões padrão são ANSI31 a ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS e EARTH, e SOLID. Em um desenho em polegadas (ou com pés e polegadas como formato de comprimento), usam-se os tamanhos dos padrões em polegadas, como no AutoCAD; caso contrário, os em milímetros.

{{ui:Angle}} (`A`) gira o padrão inteiro: ANSI31 a 90° inclina para o outro lado.

**Arquivos de padrão.** Digite `F` (Arquivo de padrão) em `Escolha o ponto interno` e escolha um arquivo `.pat`. Os padrões nele entram na lista; com mais de um, pergunta-se qual usar. Um arquivo sem nenhum padrão que o CadCraft consiga ler informa isso, e cada padrão ignorado é contado. Tamanhos em um arquivo `.pat` não têm unidade própria, então são lidos nas unidades do desenho. Só arquivos gravados no formato `.pat` usual foram testados; nenhum feito por outro programa.

## Alterar uma hachura

Selecione-a (clique em uma de suas linhas). Em {{ui:Properties}}: {{ui:Pattern}}, {{ui:Pattern scale}} e {{ui:Pattern angle}}. Hachuras de desenhos abertos mostram seu padrão quando é um dos padrões padrão; as outras aparecem como um tom claro da cor delas.

## Erros comuns

- **"Sem contorno fechado em volta desse ponto."** Há um vão no contorno, ou parte dele está fora da tela: o CadCraft olha só o que está na tela. Feche o vão (amplie os cantos), ou reduza o zoom.
- **"O padrão é denso demais para desenhar nesta escala."** As linhas ficariam mais próximas do que o desenho consegue mostrar. Use uma escala maior: experimente a escala de plotagem (20 para 1:20).
- **O padrão parece enorme ou minúsculo.** A escala é em unidades do desenho por unidade do padrão; veja o passo 4 acima.
- **A hachura deixou de acompanhar o contorno.** Uma hachura feita com {{cmd:HATCH}} permanece com os objetos de que foi feita: mova, gire ou escale o contorno e a hachura vai junto; reformule-a com uma pega e a hachura é recalculada. O vínculo termina quando o contorno não fecha mais, quando você reformula a própria hachura à mão, ou quando a apara, e a linha de comando informa isso. Nada se perde: hachure a área de novo para vinculá-la outra vez.

## Uma hachura que permanece com seu contorno

Uma hachura feita com `HATCH` lembra o que a delimita. Mova, gire ou escale o contorno e a hachura e seu padrão vão junto. Arraste uma pega para remodelar o contorno e a hachura é recalculada. Mova a hachura sozinha e seu contorno vem junto, como uma forma preenchida em um programa de desenho.

O vínculo termina, e a linha de comando informa isso, se o contorno não fechar mais ou se você reformular a hachura à mão. A própria hachura permanece. Digite `AS` durante a hachura para criar hachuras independentes. Copie uma hachura com seu contorno e a cópia tem seu próprio vínculo.

`HATCHEDIT` (`HE`) altera o padrão, a escala, o ângulo e a origem de uma hachura, e a vincula a um contorno ou encerra o vínculo. O vínculo é salvo em arquivos DWG e DXF 2000. Um arquivo DXF R12 não tem objeto de hachura, e vínculos feitos em outros programas não são lidos: use `HATCHEDIT` e Vincular para eles.

Uma hachura que não tem mais contorno (o contorno foi apagado, ou o arquivo veio sem ele) pode recebê-lo de volta: `HATCHGENERATEBOUNDARY` (`HGB`) desenha uma polilinha fechada em volta de cada laço da hachura e, se você responder Sim, vincula a hachura a elas.

## Um preenchimento de gradiente

`GRADIENT` (`GD`) preenche uma área com um gradiente em vez de um padrão: as mesmas escolhas de `HATCH`, depois de perguntar o tipo (linear, cilíndrico, esférico, hemisférico, curvo, e cada um deles invertido), uma cor com um tom ou duas cores, o ângulo, e se é centralizado ou não. Em `HATCH`, a opção `G` faz o mesmo. `HATCHEDIT` `G`, ou {{ui:Properties}} em Gradiente, altera um gradiente ou transforma qualquer hachura em um.

Um gradiente aparece na tela e nas plotagens. Salve como DWG 2004 ou posterior e os outros programas recebem uma hachura de gradiente de verdade. DXF 2000 e DWG 2000 não têm gradiente: lá o CadCraft o mantém para si, e os outros programas veem um preenchimento sólido na primeira cor.

## Aparar uma hachura

`TRIM` corta uma hachura como qualquer outro objeto. Clique na hachura do lado da aresta de corte que você quer eliminar: as arestas dividem a área hachurada e aquele pedaço é removido. No modo Rápido, todo objeto é uma aresta de corte; escolha as arestas primeiro (opção `T`) quando houver muitas. Uma hachura aparada não fica mais vinculada ao seu contorno, porque não preenche mais.
