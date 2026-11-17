---
title: Unidades na importação: um arquivo informa suas unidades, ou você é perguntado antes
summary: Quando um arquivo que você traz para um desenho informa suas unidades, o CadCraft o converte e avisa. Quando não informa, o CadCraft pergunta antes de colocar qualquer coisa e lembra sua resposta para esse arquivo.
keywords: unidades, importar, inserir, xref, anexar, XATTACH, INSERT, OBJ, DWG, DXF, nuvem de pontos, item da biblioteca, milímetros, metros, polegadas, pés, escala, tamanho errado, grande demais, pequeno demais, 1000 vezes, perguntar, lembrado, INSUNITS
from: 558f1293
---

## O que você vai fazer

Trazer um arquivo para um desenho e ter certeza de que ele entra no tamanho certo.

## Passos

1. Traga o arquivo normalmente: `INSERT` › Arquivo, `XATTACH`, `POINTCLOUDATTACH`, ou {{ui:Arquivos}} no painel Biblioteca.
2. Se o arquivo informar suas unidades, nada é perguntado. A linha de comando diz quais unidades o arquivo informa, e a escala usada quando elas diferem das do desenho.
3. Se não informar, uma caixa de diálogo pergunta **Unidades do** arquivo. Escolha o que uma unidade no arquivo representa e clique em {{ui:Usar estas unidades}}. Nada é colocado antes da sua resposta.
4. {{ui:Cancelar}} (ou {{key:Esc}}) não traz nada.

## Quais arquivos informam suas unidades

- **DWG e DXF**: as unidades de inserção do desenho (`$INSUNITS`). Um arquivo sem elas é perguntado.
- **Nuvens de pontos**: LAS e LAZ com um sistema de coordenadas, E57, PTX e PLY informam as suas. Os outros são perguntados.
- **OBJ**: nunca informa unidades. Você é perguntado.
- **glTF e GLB**: metros, pela regra do próprio formato.
- **Imagens**: não têm tamanho próprio. `IMAGEATTACH` pede a largura, e oferece a largura que você deu a esse arquivo antes.
- **Digitalizações**: uma digitalização que informa sua densidade (pontos por polegada) entra no tamanho real, nas unidades do desenho; `SCANATTACH` ainda pede a largura.
- **O complemento Nuvens de pontos**: pergunta quando você cria uma nuvem cujo arquivo não informa unidade, e rotula os números da nuvem na unidade que ela carrega.

## Coisas úteis

- Abrir um DWG ou DXF como desenho próprio não pergunta nada: a linha de comando diz quais unidades o arquivo informa, ou que ele não informa nenhuma. {{ui:Propriedades}} define as unidades de um desenho.
- Quando este desenho também não tem unidades, um arquivo não pode ser convertido: ele é colocado número por número, e a linha de comando informa isso.
- A resposta fica lembrada para esse arquivo neste computador, em todos os aplicativos CadCraft. Na próxima vez em que ele entrar, você não é perguntado, e a linha de comando diz que as unidades lembradas foram usadas.
- Para ser perguntado de novo: a paleta de comandos ({{key:Mod+K}}) › **Perguntar de novo as unidades de arquivos importados**.
