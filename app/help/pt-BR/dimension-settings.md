---
title: Defina tamanhos, casas decimais e escala de cotas
summary: Escolha altura do texto, tamanho da seta, casas decimais e escala geral para novas cotas, altere cotas existentes e entenda como funcionam os estilos de cota no CadCraft.
keywords: estilo de cota, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, escala geral, casas decimais, tamanho da seta, escala de anotação, dimtextunit, unidades no texto, mm, cm, m, km, milímetros, metros, dimlfac, dimpost
from: 8ec82a07
---

## O que você vai aprender

Qual o tamanho do texto e das setas das cotas, como definir isso para um desenho plotado em 1:50 ou 1:100, e como alterar cotas que você já fez.

## Como funcionam os tamanhos das cotas

Cada cota traz seu próprio conjunto de tamanhos: altura do texto, tamanho da seta, casas decimais, o espaço ao redor do texto, quanto as linhas de extensão passam além da linha de cota e a que distância começam do objeto. Os padrões são próximos do estilo ISO comum:

| Configuração | Padrão | Comando |
|---|---|---|
| Altura do texto | 2.5 | {{cmd:DIMTXT}} |
| Tamanho da seta | 2.5 | {{cmd:DIMASZ}} |
| Casas decimais | 2 (zeros à direita são omitidos) | {{cmd:DIMDEC}} |
| Espaço ao redor do texto | 0.625 | {{cmd:DIMGAP}} |
| Extensão além da linha de cota | 1.25 | {{cmd:DIMEXE}} |
| Afastamento do objeto | 0.625 | {{cmd:DIMEXO}} |
| Escala geral | 1 | {{cmd:DIMSCALE}} |

Cada tamanho é multiplicado pela **escala geral**. Defina os tamanhos como você quer que apareçam no papel (texto de 2.5 mm), e defina a escala geral como a escala de plotagem (50 para 1:50). Assim o texto fica com 2.5 × 50 = 125 unidades de desenho de altura, e é plotado com 2.5 mm.

:::note
Estilos de cota nomeados são gerenciados com {{cmd:DIMSTYLE}}: veja a seção abaixo. Cada cota também guarda as configurações com que foi feita, então você ainda pode alterar uma cota isolada em {{ui:Propriedades}}.
:::

## Defina os tamanhos das novas cotas

Qualquer um dos dois modos abaixo altera apenas as cotas que você fizer depois.

### No painel Configurações atuais

1. Pressione {{key:Esc}} para que nada esteja selecionado. Na guia {{ui:Modelo}}, o painel da direita mostra {{ui:Configurações atuais}}.
2. Role o painel até {{ui:Novas cotas}}, passando pelas linhas de camada, cor, unidades e {{ui:Camada 0}} (em uma tela pequena ele começa abaixo da borda inferior). Clique em {{ui:Escala geral}}, digite `50` e pressione {{key:Enter}}.
3. Defina {{ui:Altura do texto}}, {{ui:Tamanho da seta}} e {{ui:Casas decimais}} do mesmo modo, se quiser outros valores.

A barra de status confirma cada um, por exemplo "Escala geral para novas cotas: 50".

### Na linha de comando

1. Digite `DIMSCALE` e pressione {{key:Enter}}.
2. No prompt `Insira o novo valor para DIMSCALE <1>`, digite `50` e pressione {{key:Enter}}.

O histórico confirma "DIMSCALE = 50. Novas cotas o usam; selecione as existentes para alterar as delas." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} e {{cmd:DIMEXO}} funcionam do mesmo modo. Pressione {{key:Enter}} no prompt para manter o valor atual.

### Pés e polegadas nas cotas

Novas cotas usam o formato de comprimento do desenho: defina-o com {{ui:Formato de comprimento}} em {{ui:Configurações atuais}} ou com {{cmd:UNITS}} (veja [Pés e polegadas](topic:units-papers-scales#feet-and-inches-and-fractions)), e a próxima cota lê `12'-6 1/2"`. {{cmd:DIMLUNIT}} define apenas o formato das cotas (2 decimal, 3 engenharia, 4 arquitetônico, 5 fracionário). Para uma cota que você já fez, selecione-a e escolha {{ui:Formato}} em {{ui:Propriedades}}; com um formato fracionário, a caixa {{ui:Fração}} recebe a potência de dois (4 = 1/16).

## Cotas em mm, cm, m ou km

Uma cota mede em unidades de desenho. Ela pode escrever esse comprimento em milímetros, centímetros, metros ou quilômetros, com a unidade depois do número: uma parede de 1250 mm lê `1250 mm`, `125 cm`, `1.25 m` ou `0.00125 km`.

1. Defina primeiro as {{ui:Unidades}} do desenho em {{ui:Configurações atuais}} (veja [Unidades, tamanhos de papel e escalas](topic:units-papers-scales#drawing-units)), para que o CadCraft saiba o que é uma unidade de desenho. Um desenho sem unidades é lido como milímetros, e {{cmd:DIMTEXTUNIT}} informa isso.
2. Para novas cotas: pressione {{key:Esc}} para que nada esteja selecionado, e em {{ui:Novas cotas}} escolha {{ui:Unidades no texto}}: {{ui:Unidades do desenho}}, `mm`, `cm`, `m` ou `km`.
3. Para cotas que você já fez: selecione-as e, em {{ui:Propriedades}} › {{ui:Unidades primárias}}, escolha {{ui:Unidades no texto}}.

Ou digite {{cmd:DIMTEXTUNIT}} (`DTU`) e responda `D`, `MM`, `CM`, `M` ou `KM`: com cotas selecionadas, ele as altera (em um passo de desfazer); sem nada selecionado, ele define as novas cotas.

{{ui:Casas decimais}} ({{cmd:DIMDEC}}) ainda define quantas casas decimais aparecem: com metros e 3 casas decimais, 1234 mm lê `1.234 m`. O texto é escrito como número decimal. Em uma folha, as cotas medem na unidade de papel da folha (milímetros ou polegadas).

Um DWG ou DXF salvo mantém a escolha como escala de medida da cota (DIMLFAC) e um sufixo (DIMPOST, ` m`), para que outros programas mostrem o mesmo texto. Se você mudar depois as {{ui:Unidades}} do desenho, as cotas escritas em mm, cm, m ou km são recalculadas, então continuam dizendo o comprimento certo. {{ui:Definido à mão (escala ou sufixo)}} significa que a {{ui:Escala de medida}} ou o sufixo da cota foi definido de outra forma; escolha uma unidade para substituí-los.

## Altere cotas que você já fez

1. Clique em uma cota. O cabeçalho do painel da direita diz {{ui:Cota}}.
2. As configurações estão em seções; role o painel para chegar às últimas:
   - {{ui:Geral}}: {{ui:Estilo de cota}}
   - {{ui:Geometria}}: {{ui:Tipo}} e {{ui:Medida}} (somente leitura)
   - {{ui:Texto}}: {{ui:Substituição do texto}} e {{ui:Altura do texto}}
   - {{ui:Linhas e setas}}: {{ui:Tamanho da seta}}
   - {{ui:Ajuste}}: {{ui:Escala geral}}
   - {{ui:Unidades primárias}}: {{ui:Casas decimais}}
3. Digite um novo valor e pressione {{key:Enter}}.

A cota é redesenhada imediatamente. Para cotas angulares, {{ui:Casas decimais (°)}} define as casas decimais do ângulo.

:::note
Com várias cotas selecionadas, o painel mostra as linhas que elas têm em comum, e um valor que difere entre elas aparece como {{ui:Varia}}. Um valor que você digitar altera todas as cotas selecionadas em um só passo, então um {{key:Mod+Z}} as devolve todas ao estado anterior.
:::

## Cotas de desenhos abertos

Uma cota de um DWG ou DXF aberto é mostrada exatamente como o outro programa a desenhou. O painel dela diz "Mostrada como o programa que a criou a desenhou. Altere-a e o CadCraft a desenha de novo, no próprio estilo." Assim que você altera qualquer valor, move um grip ou move a cota, o CadCraft a redesenha com as próprias setas e fonte, usando os tamanhos que leu do arquivo.

Alguns tipos de cota só podem ser lidos como foram desenhados, não como cotas editáveis; o painel então mostra "Desenhada a partir de" e um nome de bloco, e a caixa {{ui:Sobre este arquivo}} as conta.

## Erros comuns

- **Alterar DIMSCALE não mudou nada na tela.** A configuração vale para novas cotas. Selecione as existentes e altere {{ui:Escala geral}} no painel.
- **As casas decimais mostram menos dígitos do que o definido.** Zeros à direita são omitidos: com 2 casas decimais aparecem `1250` e `1250.5`, não `1250.00`.
- **O texto tem a altura certa no papel em uma viewport, mas está errado em uma plotagem do modelo.** A escala geral deve coincidir com a escala de plotagem. Plotar em "Ajustar ao papel" gera uma escala estranha; escolha uma escala padrão na caixa de diálogo de plotagem.
- **Unidades como mm ou m no texto.** Escolha {{ui:Unidades no texto}} (veja [Cotas em mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Para qualquer outra palavra depois do número, digite-a em uma substituição: `<> TYP.`.

## Estilos de cota nomeados

Digite `DIMSTYLE` (`D`) para abrir o {{ui:Gerenciador de estilos de cota}}. Ele lista os estilos do desenho, quantas cotas usam cada um, e qual é o atual. **Standard** está sempre presente.

- {{ui:Definir como atual}}: novas cotas usam as configurações desse estilo e carregam o nome dele.
- {{ui:Novo…}}: um novo estilo que começa como cópia do que você escolher.
- {{ui:Modificar…}}: os mesmos campos da seção de cotas de {{ui:Propriedades}} (linhas e setas, texto, ajuste, unidades, unidades alternativas, tolerâncias). Clique em {{ui:OK}} e o estilo muda, **e toda cota que o usa muda junto**, configuração por configuração. Uma configuração que você alterou em uma só cota permanece como está, a menos que o estilo tenha mudado essa configuração.
- {{ui:Renomear…}} e {{ui:Excluir}}: Standard não pode ser renomeado nem excluído, e o mesmo vale para o estilo atual ou para um que cotas usam.
- {{ui:Comparar…}}: o que difere entre dois estilos.
- {{ui:Aplicar às selecionadas}}: selecione as cotas antes; elas recebem as configurações do estilo e o nome dele.

`-DIMSTYLE` faz o mesmo na linha de comando: `Restaurar`, `Salvar` (as configurações atuais, incluindo o que você digitou com {{cmd:DIMTXT}} e os outros, sob um nome), `Excluir`, `Aplicar`, `Comparar`, `Renomear`, `Listar`.

Os estilos são salvos em um DWG ou DXF (na sua tabela de estilos de cota) e lidos dos arquivos que você abre. O estilo *atual* não é salvo: um desenho abre com Standard como atual. Standard mantém as próprias configurações enquanto outro estilo estiver atual.

## Altere o texto e as linhas de extensão

{{cmd:DIMEDIT}} (`DED`) trabalha nas cotas que você seleciona: **Início** devolve o texto à posição que o estilo define, **Novo** digita outro texto (`<>` representa a medida), **Girar** gira o texto, **Oblíquo** inclina as linhas de extensão de cotas lineares e alinhadas para um ângulo que você digita (pressione {{key:Enter}} para nenhum). {{cmd:DIMTEDIT}} move o texto para a **Esquerda**, a **Direita** ou o **Centro** da linha de cota, ou o gira (**Ângulo**), ou o envia para o **Início**. O texto sempre fica sobre a linha de cota: ele não pode ser arrastado para um lugar livre.
