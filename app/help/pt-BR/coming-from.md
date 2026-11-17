---
title: Vindo de outro software de desenho
summary: Como comandos, teclas e hábitos conhecidos correspondem ao CadCraft, e as diferenças que pegam de surpresa quem tem experiência em desenho.
keywords: troca, diferenças, migrar, hábitos, aliases, entrada dinâmica, pickfirst, pickadd, qsave, saveas, salvar como, mtext, ctb, rastreamento polar, xref, atalhos de teclado, familiar, copyclip, pasteclip, pasteorig, copybase, área de transferência
from: b58688e7
---

Se você já usou o AutoCAD, ou um programa construído sobre o mesmo modelo, a maior parte do que você sabe funciona aqui: a linha de comando, aliases como `L`, `C`, `TR` e `O`, Enter ou Space para repetir, seleção por janela e por cruzamento, snaps de objeto na F3, Orto na F8, espaço modelo com layouts e viewports. Esta página lista o que corresponde diretamente e, depois, as diferenças que pegam as pessoas de surpresa. Leia a segunda metade mesmo que só folheie a primeira.

## O que corresponde diretamente

| Hábito | No CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Mesmos comandos, mesmos aliases |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Igual |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Mesmos comandos de cota |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` digitados na linha de comando | Igual, para novas cotas |
| `B` para criar um bloco, `I` para inserir, `PU` para limpar | Igual (limpar remove apenas blocos não usados) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` e depois `E` ou `W` | Igual |
| Digitar `_LINE` ou `-LAYER` a partir de um script ou de um hábito | O `_`, `-`, `.` ou `'` iniciais são ignorados |
| Enter ou Space em um prompt vazio repete o último comando | Igual |
| Esc cancela; Esc de novo limpa a seleção | Igual |
| `@dx,dy`, `@d<a`, ângulos digitados no sentido anti-horário a partir do leste | Igual |
| Janela da esquerda para a direita, cruzamento da direita para a esquerda, clique-clique; pressione e arraste para um laço, Space alterna janela / cruzamento / cerca (LASSOMODE) | Igual |
| Selecionar primeiro, depois o comando (substantivo-verbo) | Igual; um comando concluído limpa a seleção |
| `ALL` e `L` em Selecione objetos | Igual |
| Shift+clique remove da seleção | Igual. As configurações podem fazer um clique substituir a seleção, como faz PICKADD 0: veja [Configurações do CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Mesmos comandos e teclas; colar posiciona a cópia pelo canto inferior esquerdo, como faz PASTECLIP |
| F3 snap de objeto, F7 grade, F8 Orto | Mesmas teclas |
| Clique duplo na roda para dar zoom na extensão | Igual |
| Texto espelhado continua legível | Igual (como com MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Igual; em um Mac, Command também funciona |

A [Referência de comandos](topic:commands) lista todos os comandos e aliases.

:::tip
Se você gosta da faixa de opções do AutoCAD, escolha o estilo de menu {{ui:Desenho clássico}} em {{ui:Configurações}} › {{ui:CadCraft}} › {{ui:Menus, teclas e mouse}}: as guias Início, Inserir, Anotar, Paramétrico, Vista, Gerenciar e Saída ficam sobre a mesma linha de comando, e o botão do meio faz pan enquanto um clique com o botão direito é Enter. Veja [Menus, teclas e mouse](topic:menus-keys-and-mouse).
:::

O [mapa de comandos](topic:command-map) lista todos os comandos do CadCraft com seus nomes curtos, e a [cola rápida](topic:cheat-sheet) traz os 40 que você mais vai usar (também como PDF de uma página).

## Diferenças que pegam as pessoas

### Pontos digitados são absolutos

Com a entrada dinâmica ativa, o outro programa trata um `100,0` digitado para o segundo ponto como relativo. **A linha de comando do CadCraft não faz isso**: ali, `x,y` é sempre medido a partir da origem. Com {{ui:Din}} ({{key:F12}}) ativado, use os campos dela: distância, {{key:Tab}}, ângulo. Use `@100,0` para "100 à direita do último ponto", ou mova o cursor na direção certa e digite apenas `100`.

### Shift ignora snaps; não ativa o Orto

Manter Shift pressionado ao clicar ignora os snaps de objeto apenas nesse clique. Ele não alterna temporariamente o Orto. Use F8 ou o botão {{ui:Orto}}.

### Clique com o botão direito é sempre Enter

Não há menu de clique com o botão direito. Um clique direito no desenho é Enter: encerra um comando, finaliza uma seleção ou repete o último comando. Durante um movimento por grip ou uma caixa de seleção, ele cancela. Arraste com o botão direito para fazer pan.

### Sem pan com a barra de espaço

Space é Enter, então segurar Space e arrastar não faz pan. Faça pan com o botão do meio ou com o direito, ou reduza o zoom e aumente de novo em outro ponto com a roda.

### Aparar e estender

Aparar e estender começam no modo Rápido: todo objeto visível é uma aresta de corte ou um limite, a peça sob o ponteiro mostra o que será removido, um caminho arrastado apara cada peça que ele cruza, e um objeto que nada cruza é apagado. {{key:Shift}} alterna entre aparar e estender. `O` muda para o modo Padrão (escolha primeiro as arestas), `F` e `C` são cerca e cruzamento, `E` é EDGEMODE, `R` apaga. Não há opção `P` (Projeto): o CadCraft apara no plano do desenho.

### Concordância e chanfro

{{cmd:FILLET}} e {{cmd:CHAMFER}} aceitam as opções que você conhece: Desfazer (U), Polilinha, Raio (ou Distância, Ângulo (A) e Método (E)), Aparar (T) e Múltiplo (M), e {{key:Shift}}+clique para um canto vivo. Uma concordância entre uma polilinha e uma linha adiciona o arco como objeto próprio, em vez de uni-lo à polilinha, e os cantos da polilinha junto a um segmento de arco são mantidos como estão.

### Texto de parágrafo e texto de uma linha

`T`, `MT` e `MTEXT` são texto de parágrafo digitado no lugar, com largura, espaçamento entre linhas e justificação; `DT` e `DTEXT` são texto de uma linha, como você conhece. Não há estilos de texto nem colunas, e você ainda não pode digitar formatação dentro do texto (negrito, frações empilhadas); a formatação que vem de um arquivo é mantida, desenhada e salva (veja [Adicionar texto e rótulos](topic:text#formatting-inside-paragraph-text-from-other-programs)). Tudo é desenhado em uma fonte estilo Helvetica.

### Salvar significa "baixar uma cópia"

{{key:Mod+S}}, `SAVE` e `QSAVE` baixam uma cópia no formato do desenho: um DWG aberto é salvo como DWG, um DXF como DXF. No navegador, nada é sobrescrito no lugar, e os arquivos abertos nunca são alterados. No CadCraft Studio, {{key:Mod+S}} grava de volta no arquivo que você abriu.

`SAVEAS` ({{key:Mod+Shift+S}}) é uma pequena caixa de diálogo, não um navegador de arquivos: escolha {{ui:DWG}} (com a {{ui:Versão}}, AutoCAD 2000 a 2018), {{ui:DXF R12}} ou {{ui:DXF 2000}} e clique em {{ui:Salvar}}. O navegador decide para onde vai o download. `DXFOUT` sempre baixa DXF R12.

Um DWG aberto é salvo na versão em que chegou; um desenho novo é salvo no formato AutoCAD 2000, a menos que você escolha outro. Folhas, cotas e padrões de hachura são mantidos. Veja [Arquivos: o que abre, o que salva](topic:files#saving).

### Camadas: mais simples

- Toda alteração de camada (ligar, congelar, bloquear, cor, plotar, tipo de linha, espessura de linha, camada atual) é um passo de desfazer.
- Desligar e congelar têm o mesmo efeito no CadCraft.
- Camadas que um desenho congela em uma viewport continuam congeladas ali: na tela, nas plotagens e quando você o salva como DWG ou DXF.
- Uma viewport que mostra uma camada com a própria cor, tipo de linha, espessura de linha ou transparência continua fazendo isso na tela, nas plotagens e em um DWG salvo (o DXF mantém as configurações da própria camada; ao salvar, o CadCraft avisa). Alterar isso por viewport ainda não foi implementado.
- Não há gerenciador de propriedades de camadas nem estados de camada; {{cmd:RENAME}}, {{cmd:LAYMRG}} e {{cmd:LAYDEL}} renomeiam, mesclam e excluem camadas. Tipos de linha e espessuras são definidos no painel da direita (veja [Espessuras de linha e tipos de linha](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} e {{cmd:LAYMCUR}} funcionam por seleção.
- Salvar em DXF R12 grava os nomes das camadas em maiúsculas. Um DWG os mantém como você digitou.

### Estilos de cota

`DIMSTYLE` abre um gerenciador de estilos nomeados (novo, modificar, definir como atual, comparar, aplicar). `DIMSCALE` e as demais configurações ainda alteram o que as novas cotas usam, e cada cota mantém os próprios tamanhos, que também podem ser alterados no painel Propriedades. O estilo atual não é salvo no arquivo. As cotas seguem o formato de comprimento do desenho (decimal, ou pés e polegadas com {{cmd:UNITS}}), ou o próprio {{ui:Formato}}. Veja [Definir tamanhos de cota](topic:dimension-settings).

### Plotagem é mais simples

Tabelas de estilos de plotagem funcionam por cor, como os arquivos CTB: Monocromática, Colorida e Escala de cinza já vêm prontas, você pode criar as suas, e cada folha mantém sua tabela. A leitura de arquivos CTB é feita a partir da descrição publicada e só foi testada em arquivos que nós mesmos fizemos; tabelas nomeadas de estilos de plotagem (STB) e configurações de página ainda não foram implementadas. As linhas são impressas com a própria espessura, as demais com a largura de uma caneta. As folhas são plotadas em 1:1 no próprio papel; o modelo é plotado em uma escala escolhida ou ajustada. Veja [Plotar em PDF](topic:plot-pdf).

### Trabalhar dentro de uma viewport

Como você já conhece: clique duas vezes dentro de uma viewport (ou digite {{cmd:MSPACE}}) para trabalhar no modelo por ela, e clique duas vezes fora dela (ou {{cmd:PSPACE}}) para voltar à folha. Dentro dela, pan e zoom alteram o que a viewport mostra, a menos que a exibição esteja bloqueada; nesse caso movem a folha. Clicar em uma aba abaixo do desenho também sai da viewport. Veja [Trabalhar no modelo por uma viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Rastreamento e entrada dinâmica sim, snap na grade ainda não

A grade serve apenas para visualizar; os pontos não fazem snap nela (não há modo de snap F9). O rastreamento polar ({{key:F10}}, com passo definido por {{cmd:POLARANG}}) e o rastreamento de snap de objeto ({{key:F11}}: pare sobre um ponto de snap para adquiri-lo) funcionam como você conhece; veja [Snap em objetos](topic:object-snaps#polar-tracking). A entrada dinâmica ({{key:F12}}) mostra distância e ângulo (ou X e Y) junto ao cursor; veja [Entrada de coordenadas e distâncias](topic:coordinate-entry#dynamic-input).

### Pés e polegadas

Escolha {{ui:Formato de comprimento}} {{ui:Arquitetônico}} ou {{ui:Engenharia}} (ou digite {{cmd:UNITS}}), e digite os comprimentos como você conhece: `12'6"`, `12'6-1/2"`. Use um hífen, não um espaço, antes de uma fração: {{key:Space}} equivale a {{key:Enter}}. Defina {{ui:Unidades}} como {{ui:Polegadas}} também, para que folhas e plotagens ofereçam escalas arquitetônicas. O formato é mantido nos arquivos DWG e DXF salvos. Veja [Pés e polegadas](topic:units-papers-scales#feet-and-inches-and-fractions).

### Copiar e colar fica dentro do CadCraft

{{key:Mod+C}}, {{key:Mod+X}} e {{key:Mod+V}} copiam, recortam e colam objetos dentro de um desenho, entre desenhos e entre abas do CadCraft no mesmo navegador. A área de transferência é a do próprio CadCraft: você não pode colar objetos do CadCraft em outro programa, nem objetos de outro programa no CadCraft. Colar a partir de um desenho em outras unidades não redimensiona: use {{cmd:SCALE}} depois. {{key:Mod+D}} é um duplicar que se move com o ponteiro, um acréscimo do CadCraft. Veja [Copiar, colar e duplicar](topic:copy-paste).

### Teclas do navegador que você não pode usar

Uma página da web não pode usar {{key:Mod+N}}, {{key:Mod+W}} ou {{key:Mod+T}} do navegador: eles abrem e fecham janelas e abas. Use o botão {{ui:Nova}} ou digite `NEW`. Veja [Teclas, mouses e trackpads](common:keys).

## Comandos que você pode procurar e que ainda não estão aqui

{{cmd:TABLE}} ainda não foi implementado. Digitá-lo mostra "Comando desconhecido". ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} e {{cmd:XREF}} já estão implementados.) [Ainda não implementado](topic:not-built-yet) lista o que fazer no lugar, hoje.
