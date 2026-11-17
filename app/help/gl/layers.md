---
title: Organizar un debuxo con capas
summary: Cree capas para muros, portas e notas, defina cores, faga unha capa actual e apague capas, conxélelas, bloquéeas ou impida que se tracen.
keywords: capa, capas, la, capa actual, conxelar, descongelar, bloquear, apagar, acender, trazar, non trazar, cor, propiedades da capa, layiso, layuniso, illar, layoff, layfrz, laymcur, layon, laythw, renomear, laymrg, combinar, laydel, eliminar capa
from: cd033591
---

## O que vai facer

Tres capas, Muros, Portas e Notas, cada unha coa súa cor, con obxectos debuxados en cada unha e movidos entre elas.

## O panel de capas

As capas están no panel da esquerda, baixo {{ui:Layers}}. Cada fila mostra, de esquerda a dereita:

- un punto: cheo para a capa **actual**, onde van os novos obxectos;
- unha mostra de cor;
- o nome da capa;
- catro botóns: acender/apagar (ollo), conxelar (floco de neve), bloquear (cadeado) e trazar (impresora).

Todo debuxo ten unha capa chamada `0`. Escribir `LA` e premer {{key:Enter}} leva ao panel.

## Crear capas

1. Prema {{ui:New layer}} sobre a lista. Ábrese unha caixa de nome.
2. Escriba `Muros` e prema {{key:Enter}} (ou prema {{ui:Add}}).

A barra de estado indica "Capa Muros engadida e definida como actual." A nova capa recibe a cor 7 (negro no tema claro, branco no escuro).

3. Prema de novo {{ui:New layer}}, escriba `Portas` e prema {{key:Enter}}.
4. Prema de novo {{ui:New layer}}, escriba `Notas` e prema {{key:Enter}}.

Notas é agora a capa actual.

## Dar unha cor a cada capa

1. Prema a mostra de cor da fila de Muros. Ábrese o selector de cores do sistema.
2. Escolla unha cor e confirme.

A mostra e todo o que está en Muros coa cor {{ui:By layer}} cambian.

:::note
Unha cor escollida que coincida cunha das 255 cores CAD normalizadas gárdase como ese número. Calquera outra cor consérvase exactamente en CadCraft, pero gárdase como a cor normalizada máis próxima nun ficheiro DWG ou DXF.
:::

## Debuxar nunha capa

1. Prema o nome **Muros** na lista. A súa marca énchese e a barra de estado indica "Capa actual: Muros".
2. Debuxe un rectángulo (`REC`). Vai en Muros.
3. Prema **Portas** e debuxe un arco (`A`). Vai en Portas.

Tamén pode escoller a capa actual en {{ui:Current settings}} á dereita (sen nada seleccionado), baixo {{ui:Layer}}.

## Mover obxectos a outra capa

1. Seleccione os obxectos.
2. No panel da dereita, escolla a nova capa en {{ui:Layer}}.

Pasan a esa capa e toman a súa cor se a súa cor é {{ui:By layer}}.

## Apagar, conxelar, bloquear e trazar

| Botón | Que fai |
|---|---|
| Acender/apagar (ollo) | Oculta os obxectos da capa. Non se poden ver, seleccionar nin fixar. |
| Conxelar (floco de neve) | Mesmo efecto que apagar en CadCraft. Mantense separado porque outros programas tratan estas cousas de xeito distinto, e a configuración gárdase. |
| Bloquear (cadeado) | Os obxectos seguen visibles e pode fixar a eles, pero non se poden seleccionar nin cambiar. Útil para un fondo sobre o que traza. |
| Trazar (impresora) | Cando está premido, a capa móstrase na pantalla pero **sae dos trazados** e dos PDF. Use para liñas de construción e notas para vostede. |

Pase o cursor sobre un botón para ver o que fará ("Apagar", "Conxelar", "Bloquear", "Non trazar esta capa").

Non pode apagar a capa actual: a barra de estado di "Esa é a capa actual. Primeiro defina outra capa como actual." Facer actual unha capa premendo o seu nome tamén a acende e descongela.

Cada cambio de capa, no panel ou cun comando, é un paso de desfacer: {{key:Mod+Z}} o devolve.

## Traballar con capas escollendo obxectos

Non precisa coñecer o nome dunha capa: escolla un obxecto nela. Escriba o comando ou abra {{ui:Tools}} na parte superior do panel {{ui:Layers}}.

| Comando | Que fai |
|---|---|
| {{cmd:LAYISO}} | Seleccione obxectos e prema {{key:Enter}}: só as súas capas quedan acesas, e apágase todas as demais. Se a capa actual está apagada, unha das capas illadas faise actual. |
| {{cmd:LAYUNISO}} | Acende de novo as capas que apagou o último {{cmd:LAYISO}}, e devolve a capa actual que cambiou. |
| {{cmd:LAYOFF}} | Prema obxectos un tras outro: apágase a capa de cada un. Escriba `U` para desfacer o último, e {{key:Enter}} para rematar. |
| {{cmd:LAYFRZ}} | Igual, conxelando cada capa. |
| {{cmd:LAYMCUR}} | Prema un obxecto: a súa capa faise actual (e acéndese e descongélase). Se xa hai un obxecto seleccionado, úsase ese. |
| {{cmd:LAYON}} | Acende todas as capas. |
| {{cmd:LAYTHW}} | Descongela todas as capas. |

A capa actual nunca se apaga nin se conxela deste xeito: o historial así o indica, e pode facer outra capa actual con {{cmd:LAYMCUR}} antes. Ao escoller unha referencia de bloque úsase a propia capa da referencia.

## Renomear, combinar e eliminar capas

- {{cmd:RENAME}}: escriba `LA`, o nome antigo e o novo. Todo obxecto da capa segue o cambio. (`B` renomea un bloque do mesmo xeito, con todas as súas referencias.)
- {{cmd:LAYMRG}}: prema un obxecto de cada capa para combinar (ou escriba `N` e un nome), prema {{key:Enter}}, logo escolla a capa destino e responda `Y`. Os obxectos pasan ao destino (no modelo, nas follas e dentro dos bloques) e as capas combinadas desaparecen.
- {{cmd:LAYDEL}}: escolla un obxecto da capa (ou `N` e o seu nome) e responda `Y`. A capa vai **con todos os obxectos que contén**, en todas partes. A capa 0, DEFPOINTS e a capa actual non se poden eliminar.

Cada un é un paso de desfacer. Os tres están en {{ui:Tools}} na parte superior do panel {{ui:Layers}}.

1. Prema unha liña de muro, logo escriba `LAYISO` e prema {{key:Enter}}. Só Muros queda acesa.
2. Debuxe ou cambie o que precise en Muros.
3. Escriba `LAYUNISO` e prema {{key:Enter}}. Portas e Notas volven.

## Erros frecuentes

- **As liñas novas foron á capa equivocada.** Comprobe que punto está cheo antes de debuxar. Unha capa nova faise actual en canto a engade.
- **Un obxecto non se selecciona.** A súa capa está bloqueada, apagada ou conxelada.
- **A capa segue trazándose noutro programa.** DXF R12 non pode gardar "non trazar". CadCraft conserva a configuración para si cando o debuxo ten unha folla, pero outros programas trazarán esa capa.
- **Nomes de capas en maiúsculas despois de gardar.** DXF R12 garda os nomes en maiúsculas, polo que `Muros` volve como `MUROS`, e os espazos pasan a ser `_`. Un DWG gardado conserva os nomes como os escribiu.
- **Renomear, combinar ou eliminar unha capa.** Use {{cmd:RENAME}}, {{cmd:LAYMRG}} ou {{cmd:LAYDEL}} (tamén en {{ui:Tools}}): vexa a continuación.

## Agrupar capas

Manteña a lista curta gardando as capas en carpetas, como Existente, Proposto e Servizos. Cada carpeta pregásese, e os seus interruptores acenden ou apagan todas as súas capas, ou as conxelan ou bloquean xuntas. A capa actual nunca se apaga.

En {{ui:Tools}} do panel {{ui:Layers}}, escolla {{ui:Add ready-made groups}} para un conxunto feito para pequenos traballos residenciais, {{ui:Group by name}} para agrupar as capas que comparten un prefixo (`E-Muros`, `E-Portas`), ou {{ui:New group}}. Arrastre unha capa sobre unha carpeta, ou use a lista sobre as capas para a capa actual. Escriba en {{ui:Find a layer}} para reducir a lista. `LAYGROUP` (`LG`) fai o mesmo na liña de comandos.

As capas en si non cambian, así que outros programas CAD as ven como unha lista plana normal. CadCraft garda os grupos no ficheiro.
