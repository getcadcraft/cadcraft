---
title: Verificar em que unidades está um desenho
summary: Veja se um desenho aberto está em milímetros, polegadas ou outra unidade, confira medindo algo e saiba por que outro programa pode indicar unidades diferentes para o mesmo DXF.
keywords: unidades, quais unidades, verificar unidades, milímetros, mm, polegadas, métrico, imperial, unidades DXF, STEP para DXF, unidades erradas, polegadas ou mm, INSUNITS, MEASUREMENT, unidades do desenho, DXF do PartCraft
from: c0ee75bb
---

## O que você vai fazer

Descobrir o que representa uma unidade em um desenho aberto e garantir que os números que você lê tenham o tamanho esperado.

## Passos

1. Abra o desenho e pressione {{key:Esc}} para não deixar nada selecionado, na guia {{ui:Modelo}}.
2. No painel da direita, em {{ui:Configurações atuais}}, leia {{ui:Unidades}}. Ele diz o que representa uma unidade do desenho: {{ui:Milímetros}}, {{ui:Polegadas}}, {{ui:Pés}} e assim por diante. Um DXF salvo a partir do PartCraft indica {{ui:Milímetros}}.
3. Confira medindo algo cujo tamanho você conhece. Digite {{cmd:DIST}} e clique nas duas extremidades de uma aresta ou de um furo. Se uma peça que você conhece com 25 mm aparecer como `25`, o desenho está em milímetros; se aparecer como cerca de `0.98`, está em polegadas.

{{ui:Sem unidade}} significa que o arquivo não informa a unidade. Nesse caso, o CadCraft trata a unidade como a do papel (milímetros em papel ISO, polegadas em papel US), e os números só estão tão corretos quanto o programa que os gerou.

## Se as unidades estiverem erradas

Mudar {{ui:Unidades}} **não redimensiona nada**: os números continuam os mesmos e só muda o que eles significam. Por isso, defina apenas para dizer o que o desenho realmente é. Se os números estiverem em milímetros e {{ui:Unidades}} disser {{ui:Polegadas}}, escolha {{ui:Milímetros}}. Se precisar da geometria em outras unidades, redimensione com {{cmd:SCALE}} (25.4 para passar de polegadas para milímetros, 1/25.4 no sentido contrário) e depois defina {{ui:Unidades}}.

Como os comprimentos são escritos (decimal, pés e polegadas, frações) é outra configuração, {{ui:Formato de comprimento}}: veja [Unidades, tamanhos de papel e escalas](topic:units-papers-scales).

## Por que outro programa pode indicar polegadas

Um DXF declara suas unidades no cabeçalho. O tipo mais antigo de DXF, o R12, não tinha variável de unidades, então um programa que lê o R12 de forma estrita ignora o que estiver escrito ali e usa o padrão dele, que costuma ser polegadas. A geometria do arquivo é a mesma nos dois casos: só o rótulo muda. O PartCraft grava seus arquivos DXF como R12 e declara milímetros de duas formas (`$INSUNITS` 4 e `$MEASUREMENT` 1), para que mais programas os leiam corretamente. Se um programa ainda indicar polegadas, defina as unidades dele como milímetros ao abrir o arquivo.

Trazer um arquivo para dentro de um desenho (em vez de abri-lo) converte as unidades dele: veja [Unidades na importação](topic:units-on-import).
