---
title: Vindo de outro software de desenho
summary: Como os comandos, teclas e hábitos familiares correspondem ao CadCraft, e as diferenças que apanham desprevenidos os desenhadores experientes.
keywords: mudança, diferenças, migrar, hábitos, aliases, entrada dinâmica, pickfirst, pickadd, qsave, saveas, guardar como, mtext, ctb, rastreio polar, xref, atalhos de teclado, familiar, copyclip, pasteclip, pasteorig, copybase, área de transferência
from: b58688e7
---

Se já usou o AutoCAD, ou um programa baseado no mesmo modelo, a maior parte do que sabe funciona aqui: a linha de comandos, os aliases como `L`, `C`, `TR` e `O`, Enter ou Space para repetir, a seleção por janela e por cruzamento, os snaps a objetos em F3, o Orto em F8, o espaço modelo com layouts e viewports. Esta página lista o que corresponde diretamente e depois as diferenças que apanham desprevenidas as pessoas. Leia a segunda metade mesmo que só a percorra.

## O que corresponde diretamente

| Hábito | No CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Mesmos comandos, mesmos aliases |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Igual |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Mesmos comandos de cotagem |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` escritos na linha de comandos | Igual, para novas cotas |
| `B` para criar um bloco, `I` para inserir, `PU` para limpar | Igual (a limpeza remove apenas blocos não utilizados) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` seguido de `E` ou `W` | Igual |
| Escrever `_LINE` ou `-LAYER` a partir de um script ou de um hábito | O `_`, `-`, `.` ou `'` iniciais são ignorados |
| Enter ou Space num pedido vazio repete o último comando | Igual |
| Esc cancela; Esc de novo limpa a seleção | Igual |
| `@dx,dy`, `@d<a`, ângulos escritos no sentido anti-horário a partir de leste | Igual |
| Janela da esquerda para a direita, cruzamento da direita para a esquerda, clique-clique; premir e arrastar para um laço, Space alterna entre janela / cruzamento / vedação (LASSOMODE) | Igual |
| Selecionar primeiro, depois o comando (substantivo-verbo) | Igual; um comando concluído limpa a seleção |
| `ALL` e `L` no pedido Selecionar objetos | Igual |
| Shift+clique remove da seleção | Igual. As definições podem fazer com que um clique substitua a seleção, como faz PICKADD 0: veja [Definições do CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Mesmos comandos e teclas; ao colar, a cópia é colocada pelo seu canto inferior esquerdo, como faz o PASTECLIP |
| Snap a objetos em F3, grelha em F7, Orto em F8 | Mesmas teclas |
| Duplo clique na roda para fazer zoom à extensão | Igual |
| O texto espelhado continua legível | Igual (como com MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Igual; num Mac, Command também funciona |

A [Referência de comandos](topic:commands) lista todos os comandos e aliases.

:::tip
Se gosta da faixa do AutoCAD, escolha o estilo de menu {{ui:Desenho clássico}} em {{ui:Definições}} › {{ui:CadCraft}} › {{ui:Menus, teclas e rato}}: separadores Início, Inserir, Anotar, Paramétrico, Vista, Gerir e Saída sobre a mesma linha de comandos, e o botão do meio desloca a vista enquanto o clique com o botão direito é Enter. Veja [Menus, teclas e rato](topic:menus-keys-and-mouse).
:::

O [mapa de comandos](topic:command-map) lista todos os comandos do CadCraft com os seus nomes curtos, e a [folha de consulta rápida](topic:cheat-sheet) indica os 40 que mais vai usar (também como PDF de uma página).

## Diferenças que apanham desprevenidas as pessoas

### Os pontos escritos são absolutos

Com a entrada dinâmica ativa, o outro programa trata um `100,0` escrito para um segundo ponto como relativo. **A linha de comandos do CadCraft não:** aí, `x,y` é sempre medido a partir da origem. Com {{ui:Din}} ({{key:F12}}) ativo, use antes os seus campos: distância, {{key:Tab}}, ângulo. Use `@100,0` para "100 à direita do último ponto", ou mova a cruz no sentido certo e escreva apenas `100`.

### O Shift ignora snaps; não ativa o Orto

Manter Shift premido ao clicar ignora os snaps a objetos nesse clique. Não ativa temporariamente o Orto. Use F8 ou o botão {{ui:Orto}}.

### O clique com o botão direito é sempre Enter

Não há menu de contexto. Um clique com o botão direito no desenho é Enter: termina um comando, conclui uma seleção ou repete o último comando. Durante um movimento de grip ou uma caixa de seleção, cancela em vez disso. Arraste com o botão direito para deslocar a vista.

### Sem deslocamento com a barra de espaço

Space é Enter, por isso manter Space premido e arrastar não desloca a vista. Desloque a vista com o botão do meio ou com o botão direito, ou faça zoom para fora e depois para dentro noutro ponto com a roda.

### Aparar e prolongar

Aparar e prolongar começam no modo Rápido: cada objeto visível é uma aresta de corte ou um limite, a peça sob o ponteiro mostra o que vai sair, um caminho arrastado apara cada peça que atravessa, e um objeto que nenhuma peça atravessa é apagado. {{key:Shift}} alterna entre aparar e prolongar. `O` muda para o modo {{ui:Normal}} (escolha primeiro as arestas), `F` e `C` são vedação e cruzamento, `E` é EDGEMODE, `R` apaga. Não existe a opção `P` (Projeção): o CadCraft apara no plano do desenho.

### Concordância e chanfre

{{cmd:FILLET}} e {{cmd:CHAMFER}} aceitam as opções que conhece: Anular (U), Polilinha, Raio (ou Distância, Ângulo (A) e Método (E)), Aparar (T) e Múltiplo, e {{key:Shift}}+clique para um canto vivo. Uma concordância entre uma polilinha e uma linha acrescenta o arco como objeto próprio, em vez de o juntar à polilinha, e os cantos da polilinha junto a um segmento de arco ficam como estão.

### Texto de parágrafo e texto de uma linha

`T`, `MT` e `MTEXT` são texto de parágrafo escrito no próprio local, com largura, espaçamento entre linhas e justificação; `DT` e `DTEXT` são texto de uma linha, como os conhece. Não há estilos de texto nem colunas, e ainda não é possível escrever formatação no texto (negrito, frações empilhadas); a formatação que vem num ficheiro é mantida, desenhada e guardada (veja [Adicionar texto e etiquetas](topic:text#formatting-inside-paragraph-text-from-other-programs)). Tudo é desenhado num tipo de letra de estilo Helvetica.

### Guardar significa «transferir uma cópia»

{{key:Mod+S}}, `SAVE` e `QSAVE` transferem uma cópia no formato do desenho: um DWG que abriu é guardado como DWG, um DXF como DXF. No navegador nada é substituído no próprio lugar, e os ficheiros abertos nunca são alterados. No CadCraft Studio, {{key:Mod+S}} volta a gravar no ficheiro que abriu.

`SAVEAS` ({{key:Mod+Shift+S}}) é uma pequena caixa de diálogo, não um explorador de ficheiros: escolha {{ui:DWG}} (com a sua {{ui:Versão}}, AutoCAD 2000 a 2018), {{ui:DXF R12}} ou {{ui:DXF 2000}} e clique em {{ui:Guardar}}. O navegador decide onde fica a transferência. `DXFOUT` transfere sempre DXF R12.

Um DWG que abriu é guardado na versão em que chegou; um desenho novo é guardado no formato AutoCAD 2000, salvo se escolher outro. As folhas, as cotas e os padrões de trama são mantidos. Veja [Ficheiros: o que se abre e o que se guarda](topic:files#saving).

### Camadas: mais simples

- Cada alteração de camada (ligar, congelar, bloquear, cor, imprimir, tipo de linha, espessura de linha, camada atual) corresponde a um passo de anulação.
- Desligar e congelar têm o mesmo efeito no CadCraft.
- As camadas que um desenho congela numa viewport continuam congeladas aí: no ecrã, nas impressões e quando o guarda como DWG ou DXF.
- Uma viewport que mostra uma camada com a sua própria cor, tipo de linha, espessura de linha ou transparência continua a fazê-lo no ecrã, nas impressões e num DWG guardado (o DXF mantém as definições próprias da camada; ao guardar, isso é indicado). Alterar isso por viewport ainda não está implementado.
- Não há gestor de propriedades de camadas nem estados de camada; {{cmd:RENAME}}, {{cmd:LAYMRG}} e {{cmd:LAYDEL}} mudam o nome, fundem e eliminam camadas. Os tipos de linha e as espessuras de linha definem-se no painel da direita (veja [Espessuras de linha e tipos de linha](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} e {{cmd:LAYMCUR}} funcionam por indicação de objetos.
- Guardar em DXF R12 escreve os nomes das camadas em maiúsculas. Um DWG mantém-nos como os escreveu.

### Estilos de cota

`DIMSTYLE` abre um gestor de estilos com nome (novo, modificar, tornar atual, comparar, aplicar). `DIMSCALE` e as restantes definições continuam a alterar o que as novas cotas usam, e cada cota mantém os seus próprios tamanhos, que também pode alterar no painel Propriedades. O estilo atual não é guardado no ficheiro. As cotas seguem o formato de comprimento do desenho (decimal, ou pés e polegadas com {{cmd:UNITS}}), ou o seu próprio {{ui:Formato}}. Veja [Definir os tamanhos das cotas](topic:dimension-settings).

### A impressão é mais simples

As tabelas de estilos de impressão funcionam por cor, como os ficheiros CTB: {{ui:Monocromático}}, {{ui:Cor}} e Tons de cinzento estão incorporados, pode criar as suas próprias, e cada folha mantém a sua tabela. A leitura de ficheiros CTB foi feita a partir da descrição publicada e só foi testada em ficheiros que nós criámos; tabelas de estilos de impressão com nome (STB) e configurações de página ainda não estão implementadas. As linhas são impressas com a sua espessura de linha, as restantes com uma só espessura de caneta. As folhas são impressas à escala 1:1 no seu próprio formato de papel; o modelo é impresso à escala escolhida ou ajustado. Veja [{{ui:Imprimir para PDF}}](topic:plot-pdf).

### Trabalhar dentro de uma viewport

Como já conhece: faça duplo clique dentro de uma viewport (ou escreva {{cmd:MSPACE}}) para trabalhar no modelo através dela, e faça duplo clique fora (ou escreva {{cmd:PSPACE}}) para voltar à folha. Dentro dela, deslocar e fazer zoom alteram o que a viewport mostra, a menos que a sua visualização esteja bloqueada; nesse caso movem a folha. Clicar num separador por baixo do desenho também sai da viewport. Veja [Trabalhar no modelo através de uma viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Rastreio e entrada dinâmica sim, snap à grelha ainda não

A grelha serve apenas para ver; os pontos não se ajustam a ela (não existe um modo de snap F9). O rastreio polar ({{key:F10}}, com o passo definido por {{cmd:POLARANG}}) e o rastreio de snap a objetos ({{key:F11}}: pouse num ponto de snap para o adquirir) funcionam como os conhece; veja [Snap a objetos](topic:object-snaps#polar-tracking). A entrada dinâmica ({{key:F12}}) mostra a distância e o ângulo (ou X e Y) junto à cruz; veja [Introdução de coordenadas e distâncias](topic:coordinate-entry#dynamic-input).

### Pés e polegadas

Escolha {{ui:Formato de comprimento}} {{ui:Arquitetónico}} ou {{ui:Engenharia}} (ou escreva {{cmd:UNITS}}), e escreva os comprimentos como os conhece: `12'6"`, `12'6-1/2"`. Use um hífen, não um espaço, antes de uma fração: {{key:Space}} equivale a {{key:Enter}}. Defina também {{ui:Unidades}} como {{ui:Polegadas}}, para que as folhas e as impressões ofereçam escalas arquitetónicas. O formato fica guardado nos ficheiros DWG e DXF. Veja [Pés e polegadas](topic:units-papers-scales#feet-and-inches-and-fractions).

### A cópia e a colagem ficam dentro do CadCraft

{{key:Mod+C}}, {{key:Mod+X}} e {{key:Mod+V}} copiam, cortam e colam objetos dentro de um desenho, entre desenhos e entre separadores do CadCraft no mesmo navegador. A área de transferência é própria do CadCraft: não pode colar objetos do CadCraft noutro programa, nem objetos de outro programa no CadCraft. Colar a partir de um desenho noutras unidades não redimensiona: use {{cmd:SCALE}} depois. {{key:Mod+D}} é uma duplicação que segue o ponteiro, uma adição do CadCraft. Veja [Copiar, colar e duplicar](topic:copy-paste).

### Teclas do navegador que não pode usar

Uma página web não pode tomar {{key:Mod+N}}, {{key:Mod+W}} ou {{key:Mod+T}} ao navegador: estas abrem e fecham janelas e separadores. Use o botão {{ui:Nova}} ou escreva `NEW`. Veja [Teclas, ratos e trackpads](common:keys).

## Comandos que pode procurar e que ainda não existem

{{cmd:TABLE}} ainda não está implementado. Escrevê-lo mostra «Comando desconhecido». ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} e {{cmd:XREF}} estão implementados.) [Ainda não implementado](topic:not-built-yet) lista o que fazer em alternativa hoje.
