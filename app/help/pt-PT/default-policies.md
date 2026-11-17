---
title: "Políticas predefinidas: defina com o que começa um desenho novo"
summary: "Indique uma vez as unidades, o formato de comprimento, a precisão, a altura do texto e o papel da folha com que começa um desenho novo, para trabalho métrico e em polegadas, e partilhe as políticas pelo escritório num pequeno ficheiro."
keywords: predefinido, predefinidos, políticas predefinidas, política, padrão do escritório, predefinições do escritório, modelo, novo desenho, unidades, insunits, formato de comprimento, arquitetónico, precisão, luprec, altura do texto, papel da folha, a1, partilhar, exportar, importar, json
from: 7b80fd13
---

## O que vai fazer

Diga ao CadCraft com o que deve começar um desenho novo, para que ninguém no escritório tenha de executar UNITS e alterar as mesmas coisas de cada vez. Isto é um suplemento: fica desligado até o ligar, e uma política não definida deixa a predefinição do próprio CadCraft exatamente como está.

:::note
Estas são predefinições para desenhos **novos** e folhas **novas**. Um desenho que já começou não é alterado, nem um desenho que abra.
:::

## Passos

1. Abra as Definições, vá a {{ui:Suplementos}} e ligue {{ui:Políticas predefinidas}}.
2. Nas Definições, abra o separador **CadCraft** e escolha {{ui:Políticas predefinidas}} na lista à esquerda.
3. Defina as políticas que quiser. Cada uma começa na do **próprio CadCraft**. Uma política com uma caixa **Métrico** e outra **Imperial** recebe um valor para cada tipo de desenho; preencha apenas as que são necessárias.
4. Não há botão Guardar: cada alteração fica guardada à medida que a faz.
5. Comece um desenho novo. Terá as unidades, o formato de comprimento, a precisão e a altura do texto que definiu, e a sua primeira folha nova estará no papel que escolheu.

## As políticas

- **Unidades de um desenho novo**: nenhuma, milímetros, centímetros, metros, polegadas ou pés.
- **Formato de comprimento** e **Precisão de comprimento**: o que o comando UNITS define, para um desenho novo.
- **Altura de texto novo**, em unidades de desenho.
- **Papel de uma folha nova**: o papel que a {{ui:Nova folha}} usa.
- **Tamanhos de anotação no papel** (Definições › Global › Políticas predefinidas): as alturas do escritório em milímetros, tal como impressas. O CadCraft usa a das notas e etiquetas: {{cmd:ANNOSCALE}} define que o texto novo começa com essa altura na escala de anotação. Veja [Unidades, papéis e escalas](topic:units-papers-scales#annotate-by-scale).

Um desenho em polegadas ou pés usa os valores Imperial; qualquer outro desenho usa os métricos. Um desenho sem unidades usa o sistema definido em Definições › Global › Políticas predefinidas, ou o Métrico se nenhum estiver definido.

## Partilhar pelo escritório

1. Nas Definições, abra o separador **Global** e escolha {{ui:Políticas predefinidas}}.
2. Clique em {{ui:Guardar num ficheiro}}. Obtém um pequeno ficheiro que termina em `.ccdefaults.json`.
3. Noutro computador, ligue o suplemento, abra o mesmo sítio e clique em {{ui:Carregar de um ficheiro}}. As políticas do ficheiro substituem as desse computador.

Um só ficheiro guarda as políticas de todas as aplicações do CadCraft, por isso o mesmo ficheiro funciona no BimCraft.

## Bom saber

- Não há política para a escala de uma folha: a vista de uma folha nova é ajustada ao desenho, e a escala define-se na própria folha.
- Não há política para um estilo de cota: um desenho novo não tem estilos de cota com nome. Defina as cotas com DIMSTYLE, ou comece por um desenho que já os tenha.
- O ficheiro é JSON simples e aberto. Uma política que o ficheiro indica e que esta versão não conhece fica de fora e é indicada na mensagem; o resto carrega-se na mesma.
- As políticas ficam guardadas neste navegador, não no desenho. Desligue o suplemento e tudo volta a ser o do próprio CadCraft.
