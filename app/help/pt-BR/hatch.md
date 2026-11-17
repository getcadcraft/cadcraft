---
title: Hachurar e preencher áreas
summary: Preencha uma área com uma cor sólida ou um padrão incluído, clicando dentro dela ou selecionando formas fechadas, defina a escala e o ângulo do padrão e altere a hachura depois.
keywords: hachura, bhatch, preencher, preenchimento sólido, padrão, ansi31, ansi37, tijolo, terra, rede, linhas de seção, poché, ilha, contorno, escala, ângulo
from: 14399174
---

## O que você vai criar

Um corte de parede preenchido com o padrão ANSI31, um pilar deixado vazio nele e um preenchimento sólido no pilar.

## Hachurar clicando dentro de uma área

1. Desenhe um retângulo (`REC`, `0,0`, `@2000,1200`) e um círculo dentro dele (`C`, `1000,600`, `300`). Clique em {{ui:Extensão}}.
2. Clique em {{ui:Hachura}} no grupo {{ui:Desenhar}}, ou digite `H` e pressione {{key:Enter}}. O histórico mostra qual padrão está atual, por exemplo `Hachura atual: ANSI31, escala 1, ângulo 0°`.
3. Digite `P` e pressione {{key:Enter}}, digite `ANSI31` e pressione {{key:Enter}}.
4. Digite `SC` e pressione {{key:Enter}}, digite `20` e pressione {{key:Enter}}. Os tamanhos do padrão são no papel, então um desenho plotado em 1:20 precisa de escala 20.
5. Em `Especifique um ponto interno`, clique dentro do retângulo, fora do círculo. A hachura aparece como uma pré-visualização.
6. Pressione {{key:Enter}}. O retângulo fica hachurado; o círculo interno continua vazio, porque é uma ilha.

Clique dentro de várias áreas antes de pressionar {{key:Enter}} para fazê-las uma única hachura. `U` desfaz a última área.

## Um preenchimento sólido

1. Digite `H` e pressione {{key:Enter}}.
2. Digite `P`, pressione {{key:Enter}}, digite `SOLID` e pressione {{key:Enter}}.
3. Clique dentro do círculo e depois pressione {{key:Enter}}.

## Hachurar formas fechadas que você seleciona

Em vez de clicar dentro, digite `S` (Selecionar objetos) em `Especifique um ponto interno` e selecione polilinhas fechadas, círculos ou elipses fechadas, depois pressione {{key:Enter}}. Formas dentro de outras ficam alternadamente sem hachura (a externa hachurada, a seguinte vazia, e assim por diante).

## Padrões

Digite `?` na pergunta do padrão para ver a lista. Os padrões incluídos são ANSI31 a ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS e EARTH, e SOLID. Em um desenho em polegadas (ou com pés e polegadas como formato de comprimento), são usados os tamanhos em polegadas dos padrões, como no AutoCAD; caso contrário, os tamanhos em milímetros.

{{ui:Ângulo}} (`A`) gira todo o padrão: ANSI31 a 90° inclina para o outro lado.

**Arquivos de padrão.** Digite `F` (Arquivo de padrão) em `Especifique um ponto interno` e escolha um arquivo `.pat`. Os padrões dele entram na lista; com mais de um, você é perguntado qual usar. Um arquivo sem padrão que o CadCraft possa ler informa isso, e qualquer padrão ignorado é contado. Os tamanhos em um arquivo `.pat` não têm unidade própria, então são lidos nas unidades do desenho. Só foram testados arquivos no formato `.pat` usual; nenhum feito por outro programa.

## Alterar uma hachura

Selecione-a (clique em uma de suas linhas). Em {{ui:Propriedades}}: {{ui:Padrão}}, {{ui:Escala do padrão}} e {{ui:Ângulo do padrão}}. Hachuras de desenhos abertos mostram o padrão quando ele é um dos padrões incluídos; as demais aparecem com um tom claro da cor delas.

## Erros comuns

- **"Nenhum contorno fechado ao redor desse ponto."** Há uma falha no contorno, ou parte dele está fora da tela: o CadCraft examina apenas o que está na tela. Feche a falha (aplique zoom nos cantos) ou reduza o zoom.
- **"O padrão é denso demais para ser desenhado nesta escala."** As linhas ficariam mais próximas do que o desenho consegue mostrar. Use uma escala maior: experimente a escala de plotagem (20 para 1:20).
- O padrão parece enorme ou minúsculo. A escala é em unidades do desenho por unidade do padrão; veja o passo 4 acima.
- **Mover o contorno não move a hachura.** Uma hachura não fica presa ao seu contorno. Mova os dois, ou hachure de novo.

## Uma hachura que acompanha seu contorno

Uma hachura criada com `HATCH` lembra o que a delimita. Mova, gire ou escale o contorno e a hachura e o padrão vão junto. Arraste um grip para remodelar o contorno e a hachura é recalculada. Mova a hachura sozinha e o contorno dela vem junto, como uma forma preenchida em um programa de desenho.

O vínculo termina, e a linha de comando informa isso, se o contorno não fechar mais ou se você remodelar a hachura à mão. A hachura em si permanece. Digite `AS` durante a hachura para criar hachuras independentes. Copie uma hachura com seu contorno e a cópia terá um vínculo próprio.

`HATCHEDIT` (`HE`) altera o padrão, a escala, o ângulo e a origem de uma hachura, e a vincula a um contorno ou encerra o vínculo. O vínculo é salvo em arquivos DWG e DXF 2000. Um arquivo DXF R12 não tem objeto de hachura, e vínculos feitos em outros programas não são lidos: use `HATCHEDIT` e Vincular para esses casos.

Uma hachura que não tem mais contorno (o contorno foi apagado, ou o arquivo veio sem ele) pode recuperá-lo: `HATCHGENERATEBOUNDARY` (`HGB`) desenha uma polilinha fechada em volta de cada laço da hachura e, se você responder Sim, vincula a hachura a elas.

## Um preenchimento em gradiente

`GRADIENT` (`GD`) preenche uma área com um gradiente em vez de um padrão: as mesmas seleções de `HATCH`, depois de perguntar o tipo (linear, cilíndrico, esférico, hemisférico, curvo, e cada um desses invertido), uma cor com um tom ou duas cores, o ângulo, e se é centralizado ou não. Em `HATCH`, a opção `G` faz o mesmo. `HATCHEDIT` `G`, ou {{ui:Propriedades}} em Gradiente, altera um gradiente ou transforma qualquer hachura em um.

Um gradiente aparece na tela e nas plotagens. Salve como DWG 2004 ou posterior e outros programas recebem uma hachura de gradiente real. DXF 2000 e DWG 2000 não têm gradiente: nesses casos o CadCraft o mantém só para si e outros programas veem um preenchimento sólido na primeira cor.

## Aparar uma hachura

`TRIM` corta uma hachura como qualquer outro objeto. Clique na hachura do lado da aresta de corte que você quer remover: as arestas dividem a área hachurada e aquele pedaço é removido. No modo Rápido, todo objeto é uma aresta de corte; escolha as arestas antes (opção `T`) quando houver muitas. Uma hachura aparada deixa de estar vinculada ao seu contorno, porque não preenche mais o contorno.
