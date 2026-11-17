---
title: Unidades na importação: um ficheiro indica as suas unidades, ou é perguntado primeiro
summary: Quando um ficheiro que traz para um desenho indica as suas unidades, o CadCraft converte-o e indica-o. Quando não indica, o CadCraft pergunta antes de colocar qualquer coisa e memoriza a sua resposta para esse ficheiro.
keywords: unidades, importação, inserir, xref, anexar, XATTACH, INSERT, OBJ, DWG, DXF, nuvem de pontos, item da biblioteca, milímetros, metros, polegadas, pés, escala, tamanho errado, demasiado grande, demasiado pequeno, 1000 vezes, perguntar, memorizado, INSUNITS
from: 558f1293
---

## O que vai fazer

Traga um ficheiro para um desenho e certifique-se de que entra com o tamanho certo.

## Passos

1. Traga o ficheiro como habitualmente: {{cmd:INSERT}} › Ficheiro, {{cmd:XATTACH}}, {{cmd:POINTCLOUDATTACH}}, ou {{ui:Ficheiros}} no painel da Biblioteca.
2. Se o ficheiro indicar as suas unidades, não é perguntado nada. A linha de comandos indica as unidades que o ficheiro indica, e a escala usada quando são diferentes das do desenho.
3. Se não indicar, uma caixa de diálogo pergunta pelas **Unidades de** do ficheiro. Escolha o que é uma unidade no ficheiro e clique em {{ui:Usar estas unidades}}. Nada é colocado antes de responder.
4. {{ui:Cancelar}} (ou {{key:Esc}}) não traz nada.

## Que ficheiros indicam as suas unidades

- **DWG e DXF**: as unidades de inserção do desenho (`$INSUNITS`). Quando não as tem, pergunta-se.
- **Nuvens de pontos**: LAS e LAZ com um sistema de coordenadas, E57, PTX e PLY indicam as suas. Para os outros, pergunta-se.
- **OBJ**: nunca indica unidades. Pergunta-se.
- **glTF e GLB**: metros, pela regra do próprio formato.
- **Imagens**: não têm tamanho próprio. `IMAGEATTACH` pede a largura, e oferece a largura que indicou para esse ficheiro antes.
- **Digitalizações**: uma digitalização que indica a sua densidade (pontos por polegada) entra com o seu tamanho real nas unidades do desenho; `SCANATTACH` continua a pedir a largura.
- **O suplemento Nuvens de pontos**: pergunta quando cria uma nuvem cujo ficheiro não indica unidade, e rotula os números da nuvem na unidade que tem.

## Bom saber

- Abrir um DWG ou DXF como desenho próprio não pergunta nada: a linha de comandos indica que unidades o ficheiro indica, ou que não indica nenhuma. As {{ui:Propriedades}} definem as unidades de um desenho.
- Quando este desenho também não tem unidades, um ficheiro não pode ser convertido: é colocado número a número e a linha de comandos indica-o.
- A resposta fica memorizada para esse ficheiro neste computador, em todas as aplicações do CadCraft. Na próxima vez que entrar, não se pergunta, e a linha de comandos indica que foram usadas as unidades memorizadas.
- Para voltar a ser perguntado: a paleta de comandos ({{key:Mod+K}}) › **Perguntar de novo as unidades dos ficheiros importados**.
