---
title: "Políticas padrão: defina com o que um novo desenho começa"
summary: "Diga uma vez qual unidade, formato de comprimento, precisão, altura de texto e papel de folha um novo desenho usa, para trabalhos métricos e imperiais, e compartilhe as políticas com o escritório como um pequeno arquivo."
keywords: padrão, padrões, políticas padrão, política, padrão do escritório, padrões do escritório, modelo, novo desenho, unidades, insunits, formato de comprimento, arquitetônico, precisão, luprec, altura do texto, papel da folha, a1, compartilhar, exportar, importar, json
from: 7b80fd13
---

## O que você vai fazer

Diga ao CadCraft com o que um novo desenho deve começar, para que ninguém no escritório precise executar UNITS e alterar as mesmas coisas a cada vez. Isto é um complemento: ele fica desligado até você ativá-lo, e uma política que você não definir mantém exatamente o padrão do próprio CadCraft.

:::note
Estes são padrões para **novos** desenhos e **novas** folhas. Um desenho que você já começou não é alterado, nem um desenho que você abre.
:::

## Passos

1. Abra as Configurações, vá para {{ui:Complementos}} e ative {{ui:Políticas padrão}}.
2. Em Configurações, abra a guia **CadCraft** e escolha {{ui:Políticas padrão}} na lista à esquerda.
3. Defina as políticas que você quer. Cada uma começa com o valor **próprio do CadCraft**. Uma política com as caixas **Métrico** e **Imperial** recebe um valor para cada tipo de desenho; preencha apenas as que você precisa.
4. Não há botão Salvar: cada alteração é salva assim que você a faz.
5. Comece um novo desenho. Ele terá as unidades, o formato de comprimento, a precisão e a altura do texto que você definiu, e a primeira nova folha dele estará no papel que você escolheu.

## As políticas

- **Unidades de um novo desenho**: nenhuma, milímetros, centímetros, metros, polegadas ou pés.
- **Formato de comprimento** e **Precisão de comprimento**: o que o comando UNITS define, para um novo desenho.
- **Altura de novo texto**, em unidades de desenho.
- **Papel de uma nova folha**: o papel que a Nova folha usa.
- **Tamanhos de anotação no papel** (Configurações › Global › {{ui:Políticas padrão}}): as alturas do escritório em milímetros, como impressas. O CadCraft usa a altura para notas e rótulos: {{cmd:ANNOSCALE}} define a altura com que um novo texto começa, nessa altura na escala de anotação. Veja [Unidades, papéis e escalas](topic:units-papers-scales#annotate-by-scale).

Um desenho em polegadas ou pés usa os valores imperiais; qualquer outro desenho usa os métricos. Um desenho sem unidades usa o sistema de unidades definido em Configurações › Global › {{ui:Políticas padrão}}, ou o métrico se nenhum estiver definido.

## Compartilhe no escritório

1. Em Configurações, abra a guia **Global** e escolha {{ui:Políticas padrão}}.
2. Clique em {{ui:Salvar em um arquivo}}. Você recebe um pequeno arquivo terminando em `.ccdefaults.json`.
3. Em outro computador, ative o complemento, abra o mesmo lugar e clique em {{ui:Carregar de um arquivo}}. As políticas do arquivo substituem as desse computador.

Um arquivo contém as políticas de todos os aplicativos do CadCraft, então o mesmo arquivo funciona no BimCraft.

## Vale saber

- Não existe política para a escala de uma folha: a vista de uma nova folha é ajustada ao desenho, e você define a escala dela na própria folha.
- Não existe política para um estilo de cota: um novo desenho não tem estilos de cota nomeados. Defina as cotas com DIMSTYLE, ou comece de um desenho que já tenha os seus.
- O arquivo é um JSON simples e aberto. Uma política que o arquivo indica e que esta versão não conhece fica de fora e é citada na mensagem; o restante é carregado.
- As políticas são guardadas neste navegador, não no desenho. Desative o complemento e tudo volta a ser o padrão do próprio CadCraft.
