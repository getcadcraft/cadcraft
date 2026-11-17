---
title: Verificar em que unidades está um desenho
summary: Veja se um desenho aberto está em milímetros, polegadas ou noutra unidade, confirme-o medindo e saiba porque é que outro programa pode indicar unidades diferentes para o mesmo DXF.
keywords: unidades, que unidades, quais unidades, verificar unidades, milímetros, mm, polegadas, métrico, imperial, unidades DXF, STEP para DXF, unidades erradas, polegadas ou mm, INSUNITS, MEASUREMENT, unidades do desenho, DXF do PartCraft
from: c0ee75bb
---

## O que vai fazer

Descubra o que representa uma unidade num desenho aberto e certifique-se de que os números que lê têm a dimensão que espera.

## Passos

1. Abra o desenho e, no separador {{ui:Modelo}}, prima {{key:Esc}} para que nada fique selecionado.
2. No painel da direita, em {{ui:Definições atuais}}, leia {{ui:Unidades}}. Indica o que representa uma unidade do desenho: {{ui:Milímetros}}, {{ui:Polegadas}}, {{ui:Pés}} e assim por diante. Um DXF guardado a partir do PartCraft indica {{ui:Milímetros}}.
3. Verifique medindo algo cujo tamanho conhece. Escreva {{cmd:DIST}} e indique as duas extremidades de uma aresta ou de um furo. Se uma peça que conhece com 25 mm for lida como `25`, o desenho está em milímetros; se for lida como cerca de `0.98`, está em polegadas.

{{ui:Sem unidades}} significa que o ficheiro não o indica. O CadCraft trata-o então como a unidade do papel (milímetros no papel ISO, polegadas no papel norte-americano), e os números só são tão corretos como o programa que os escreveu.

## Se as unidades estiverem erradas

Alterar {{ui:Unidades}} **não redimensiona nada**: os números mantêm-se e muda apenas o que significam. Por isso, defina-as apenas para indicar o que o desenho realmente é. Se os números estiverem em milímetros e {{ui:Unidades}} indicar {{ui:Polegadas}}, escolha {{ui:Milímetros}}. Se precisar que a própria geometria esteja noutras unidades, escale-a com {{cmd:SCALE}} (25.4 de polegadas para milímetros, 1/25.4 no sentido inverso) e depois defina {{ui:Unidades}}.

A forma como os comprimentos são escritos (decimal, pés e polegadas, frações) é uma definição à parte, {{ui:Formato de comprimento}}: veja [Unidades, formatos de papel e escalas](topic:units-papers-scales).

## Porque é que outro programa pode indicar polegadas

Um DXF indica as suas unidades no cabeçalho. O tipo mais antigo de DXF, o R12, não tinha qualquer variável de unidades, por isso um programa que leia o R12 de forma estrita ignora a que lá está escrita e usa a sua predefinição, que muitas vezes são polegadas. A geometria do ficheiro é a mesma em qualquer dos casos: só muda a etiqueta. O PartCraft grava os seus ficheiros DXF em R12 e indica milímetros de duas formas (`$INSUNITS` 4 e `$MEASUREMENT` 1) para que mais programas os leiam corretamente. Se um programa continuar a indicar polegadas, defina as suas unidades para milímetros ao abrir o ficheiro.

Importar um ficheiro para um desenho (em vez de o abrir) converte-lhe as unidades: veja [Unidades na importação](topic:units-on-import).
