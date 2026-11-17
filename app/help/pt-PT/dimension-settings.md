---
title: Definir tamanhos de cota, casas decimais e escala
summary: "Escolha a altura do texto, o tamanho das setas, as casas decimais e a escala global das novas cotas, altere as existentes e perceba como funcionam os estilos de cota no CadCraft."
keywords: estilo de cota, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, escala global, casas decimais, tamanho da seta, escala de anotação, dimtextunit, unidades no texto, mm, cm, m, km, milímetros, metros, dimlfac, dimpost
from: 8ec82a07
---

## O que vai aprender

Qual o tamanho do texto e das setas das cotas, como os definir para um desenho impresso à escala 1:50 ou 1:100, e como alterar cotas que já fez.

## Como funcionam os tamanhos das cotas

Cada cota tem o seu próprio conjunto de tamanhos: altura do texto, tamanho da seta, casas decimais, a folga à volta do texto, a distância que as linhas de extensão ultrapassam a linha de cota e a distância a que começam do objeto. As predefinições aproximam-se do estilo ISO habitual:

| Definição | Predefinição | Comando |
|---|---|---|
| Altura do texto | 2.5 | {{cmd:DIMTXT}} |
| Tamanho da seta | 2.5 | {{cmd:DIMASZ}} |
| Casas decimais | 2 (zeros finais suprimidos) | {{cmd:DIMDEC}} |
| Folga à volta do texto | 0.625 | {{cmd:DIMGAP}} |
| Extensão além da linha de cota | 1.25 | {{cmd:DIMEXE}} |
| Afastamento do objeto | 0.625 | {{cmd:DIMEXO}} |
| Escala global | 1 | {{cmd:DIMSCALE}} |

Cada tamanho é multiplicado pela **escala global**. Defina os tamanhos como os quer no papel (texto de 2.5 mm) e defina a escala global para a escala de impressão (50 para 1:50). O texto fica então com 2.5 × 50 = 125 unidades de desenho de altura, o que imprime com 2.5 mm.

:::note
Os estilos de cota com nome são geridos com {{cmd:DIMSTYLE}}: veja a secção seguinte. Cada cota também guarda as definições com que foi feita, por isso ainda pode alterar uma só cota em {{ui:Propriedades}}.
:::

## Definir os tamanhos das novas cotas

Qualquer dos modos abaixo altera apenas as cotas que fizer depois.

### No painel Definições atuais

1. Prima {{key:Esc}} para não ficar nada selecionado. No separador {{ui:Modelo}}, o painel da direita diz {{ui:Definições atuais}}.
2. Desloque o painel para baixo até {{ui:Novas cotas}}, passando as linhas de camada, cor, unidades e {{ui:Camada 0}} (num ecrã pequeno começa abaixo da borda inferior). Clique em {{ui:Escala global}}, escreva `50` e prima {{key:Enter}}.
3. Defina {{ui:Altura do texto}}, {{ui:Tamanho da seta}} e {{ui:Casas decimais}} do mesmo modo, se quiser outros valores.

A barra de estado confirma cada uma, por exemplo "Escala global para novas cotas: 50".

### Na linha de comandos

1. Escreva `DIMSCALE` e prima {{key:Enter}}.
2. No pedido `Enter new value for DIMSCALE <1>`, escreva `50` e prima {{key:Enter}}.

O histórico confirma "DIMSCALE = 50. As novas cotas usam-no; selecione as que já existem para as alterar." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} e {{cmd:DIMEXO}} funcionam da mesma forma. Prima {{key:Enter}} no pedido para manter o valor atual.

### Pés e polegadas nas cotas

As novas cotas usam o formato de comprimento do desenho: defina-o com {{ui:Formato de comprimento}} em {{ui:Definições atuais}} ou com {{cmd:UNITS}} (veja [Pés e polegadas](topic:units-papers-scales#feet-and-inches-and-fractions)), e a cota seguinte lê `12'-6 1/2"`. {{cmd:DIMLUNIT}} define apenas o formato das cotas (2 decimal, 3 engenharia, 4 arquitetónico, 5 fracionário). Para uma cota que já fez, selecione-a e escolha {{ui:Formato}} em {{ui:Propriedades}}; com um formato fracionário, a caixa {{ui:Fração}} recebe a potência de dois (4 = 1/16).

## Cotas em mm, cm, m ou km

Uma cota mede em unidades de desenho. Pode escrever esse comprimento em milímetros, centímetros, metros ou quilómetros, com a unidade depois do número: uma parede de 1250 mm lê-se `1250 mm`, `125 cm`, `1.25 m` ou `0.00125 km`.

1. Defina primeiro as {{ui:Unidades}} do desenho em {{ui:Definições atuais}} (veja [Unidades, formatos de papel e escalas](topic:units-papers-scales#drawing-units)), para o CadCraft saber o que vale uma unidade de desenho. Um desenho sem unidades é lido como milímetros, e {{cmd:DIMTEXTUNIT}} indica-o.
2. Para as novas cotas: prima {{key:Esc}} para não ficar nada selecionado e, em {{ui:Novas cotas}}, escolha {{ui:Unidades no texto}}: {{ui:Unidades do desenho}}, `mm`, `cm`, `m` ou `km`.
3. Para as cotas que já fez: selecione-as e, em {{ui:Propriedades}} › {{ui:Unidades principais}}, escolha {{ui:Unidades no texto}}.

Ou escreva {{cmd:DIMTEXTUNIT}} (`DTU`) e responda com `D`, `MM`, `CM`, `M` ou `KM`: com cotas selecionadas, altera-as (um passo de anulação); sem nada selecionado, define as novas cotas.

{{ui:Casas decimais}} ({{cmd:DIMDEC}}) continua a definir quantas casas decimais aparecem: com metros e 3 casas decimais, 1234 mm lê-se `1.234 m`. O texto é escrito como um número decimal. Numa folha, as cotas medem na unidade de papel da folha (milímetros ou polegadas).

Um DWG ou DXF guardado mantém a escolha como escala de medição da cota (DIMLFAC) e um sufixo (DIMPOST, ` m`), para que outros programas mostrem o mesmo texto. Se alterar depois as {{ui:Unidades}} do desenho, as cotas escritas em mm, cm, m ou km são reajustadas, para continuarem a dizer o comprimento certo. {{ui:Definido manualmente (escala ou sufixo)}} significa que a {{ui:Escala de medição}} ou o sufixo da cota foi definido de outra forma; escolha uma unidade para os substituir.

## Alterar cotas que já fez

1. Clique numa cota. O cabeçalho do painel da direita diz {{ui:Cota}}.
2. As definições estão em secções; desloque o painel para baixo para chegar às seguintes:
   - {{ui:Geral}}: {{ui:Estilo de cota}}
   - {{ui:Geometria}}: {{ui:Tipo}} e {{ui:Medida}} (só de leitura)
   - {{ui:Texto}}: {{ui:Substituição do texto}} e {{ui:Altura do texto}}
   - {{ui:Linhas e setas}}: {{ui:Tamanho da seta}}
   - {{ui:Ajuste}}: {{ui:Escala global}}
   - {{ui:Unidades principais}}: {{ui:Casas decimais}}
3. Escreva um valor novo e prima {{key:Enter}}.

A cota redesenha-se de imediato. Nas cotas angulares, {{ui:Casas decimais (°)}} define as casas decimais do ângulo.

:::note
Com várias cotas selecionadas, o painel mostra as linhas que têm em comum, e um valor que difere entre elas lê-se {{ui:Varia}}. Um valor que escrever altera todas as cotas selecionadas num só passo, por isso um {{key:Mod+Z}} as anula todas.
:::

## Cotas de desenhos abertos

Uma cota de um DWG ou DXF aberto é mostrada exatamente como o outro programa a desenhou. O painel dessa cota diz "Mostrada como o programa que a criou a desenhou. Altere-a e o CadCraft volta a desenhá-la com o estilo próprio." Logo que altere um valor, mova um ponto de controlo ou mova a cota, o CadCraft volta a desenhá-la com as suas próprias setas e tipo de letra, usando os tamanhos que leu do ficheiro.

Algumas cotas só podem ser lidas como foram desenhadas, não como cotas editáveis; o painel então mostra "Desenhada a partir de" e um nome de bloco, e a caixa "Sobre este ficheiro" as conta.

## Erros comuns

- **Alterar o DIMSCALE não mudou nada no ecrã.** A definição é para as novas cotas. Selecione as existentes e altere a {{ui:Escala global}} no painel.
- **As casas decimais mostram menos algarismos do que definiu.** Os zeros finais são suprimidos: com 2 casas decimais aparece `1250` e `1250.5`, e não `1250.00`.
- **O texto tem a altura certa no papel numa viewport, mas está errado numa impressão do modelo.** A escala global tem de coincidir com a escala de impressão. Imprimir em Ajustar ao papel dá uma escala estranha; escolha uma escala normalizada na caixa de impressão.
- **Unidades como mm ou m no texto.** Escolha {{ui:Unidades no texto}} (veja [Cotas em mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Para qualquer outra palavra depois do número, escreva-a numa substituição: `<> TYP.`.

## Estilos de cota com nome

Escreva `DIMSTYLE` (`D`) para abrir o {{ui:Gestor de estilos de cota}}. Lista os estilos do desenho, quantas cotas usa cada um e qual é o atual. **Standard** está sempre lá.

- {{ui:Tornar atual}}: as novas cotas usam as definições desse estilo e levam o seu nome.
- {{ui:Novo…}}: um estilo novo que começa como cópia de um que escolher.
- {{ui:Modificar…}}: os mesmos campos da secção de cotas em {{ui:Propriedades}} (linhas e setas, texto, ajuste, unidades, unidades alternativas, tolerâncias). Prima {{ui:OK}} e o estilo muda, e **cada cota que o usa muda com ele**, definição a definição. Uma definição que alterou numa só cota fica como está, a menos que o estilo altere essa definição.
- {{ui:Mudar o nome…}} e {{ui:Eliminar}}: o Standard não pode ser renomeado nem eliminado, nem o estilo atual, nem um que as cotas usem.
- {{ui:Comparar…}}: o que difere entre dois estilos.
- {{ui:Aplicar à seleção}}: selecione primeiro as cotas; elas adotam as definições do estilo e o seu nome.

`-DIMSTYLE` faz o mesmo na linha de comandos: `Restore`, `Save` (as definições atuais, incluindo o que escreveu com {{cmd:DIMTXT}} e as outras, sob um nome), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Os estilos são guardados num DWG ou DXF (na tabela de estilos de cota) e lidos dos ficheiros que abre. O estilo *atual* não é guardado: um desenho abre com Standard como atual. O Standard mantém as definições próprias enquanto outro estilo for o atual.

## Alterar o texto e as linhas de extensão

{{cmd:DIMEDIT}} (`DED`) atua nas cotas que selecionar: **Base** repõe o texto onde o estilo o coloca, **New** escreve outro texto (`<>` representa a medida), **Rotate** roda o texto, **Oblique** inclina as linhas de extensão das cotas lineares e alinhadas para um ângulo que escrever (prima {{key:Enter}} para nenhum). {{cmd:DIMTEDIT}} move o texto para a **Esquerda**, a **Direita** ou o **Centro** da linha de cota, ou roda-o (**Ângulo**), ou envia-o para a **Base**. O texto fica sempre sobre a linha de cota: não pode ser arrastado para um sítio livre.
