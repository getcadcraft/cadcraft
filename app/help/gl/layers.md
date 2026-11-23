---
title: Organizar un debuxo con capas
summary: Cree capas para muros, portas e notas, fixe cores, faga unha capa actual e apague, conxele, bloquee ou impida o trazado das capas.
keywords: capa, capas, la, capa actual, conxelar, descongelar, bloquear, apagar, acender, trazar, non trazar, cor, propiedades da capa, layiso, layuniso, illar, layoff, layfrz, laymcur, layon, laythw, renomear, laymrg, combinar, laydel, eliminar capa
from: ba9f0617
---

## Que vai facer

Tres capas, Walls, Doors e Notes, cada unha coa súa cor, con obxectos debuxados en cada unha e movidos entre elas.

## O panel Capas

As capas viven no panel da esquerda, baixo {{ui:Capas}}. Cada fila mostra, de esquerda a dereita:

- un punto: cheo para a **capa actual**, onde van os obxectos novos;
- unha mostra de cor;
- o nome da capa;
- catro botóns: activar/desactivar (ollo), conxelar (floco), bloquear (cadeado) e trazar (impresora).

Cada debuxo ten unha capa chamada `0`. Escribir `LA` e premer {{key:Enter}} leva ao panel.

## Crear capas

1. Prema {{ui:Nova capa}} sobre a lista. Abrirase unha caixa de nome.
2. Escriba `Walls` e prema {{key:Enter}} (ou prema {{ui:Engadir}}).

A barra de estado di «Added layer Walls and made it current.» A nova capa recibe a cor 7 (negro no tema claro, branco no escuro).

3. Prema de novo {{ui:Nova capa}}, escriba `Doors` e prema {{key:Enter}}.
4. Prema de novo {{ui:Nova capa}}, escriba `Notes` e prema {{key:Enter}}.

Agora Notes é a capa actual.

## Dar a cada capa unha cor

1. Prema a mostra de cor da fila de Walls. Abrirase o selector de cores do seu sistema.
2. Escolla unha cor e confírmea.

A mostra e todo o que está en Walls coloreado como {{ui:Por capa}} cambian.

:::note
Unha cor escollida que coincide cunha das 255 cores CAD estándar gárdase como ese número. Calquera outra cor consérvase exactamente en CadCraft, pero gárdase como a cor estándar máis próxima nun ficheiro DWG ou DXF.
:::

## Debuxar nunha capa

1. Prema o nome **Walls** na lista. O seu punto énchese e a barra de estado di «Current layer: Walls».
2. Debuxe un rectángulo (`REC`). Vai a Walls.
3. Prema **Doors**, e debuxe un arco (`A`). Vai a Doors.

Tamén pode escoller a capa actual en {{ui:Configuración actual}} á dereita (sen nada seleccionado), baixo {{ui:Capa}}.

## Mover obxectos a outra capa

1. Seleccione os obxectos.
2. No panel dereito, escolla a nova capa en {{ui:Capa}}.

Pasan a esa capa e toman a súa cor se a cor é {{ui:Por capa}}.

## Apagar, conxelar, bloquear e trazar

| Botón | Que fai |
|---|---|
| Activar/desactivar (ollo) | Oculta os obxectos da capa. Non se ven, non se seleccionan nin se enganchan. |
| Conxelar (floco) | Mesmo efecto que apagar en CadCraft. Mantense separado porque outros programas os tratan de xeito distinto, e a opción gárdase. |
| Bloquear (cadeado) | Os obxectos seguen visibles e pode enganchalos, pero non se poden seleccionar nin cambiar. Útil para un fondo sobre o que debuxar. |
| Trazar (impresora) | Cando está premido, a capa móstrase na pantalla pero **non se inclúe nos trazados** nin nos PDF. Úseo para liñas de construción e notas para vostede mesmo. |

Pase o rato sobre un botón para ver o que fará («Desactivar», «Conxelar», «Bloquear», «Non trazar esta capa»).

Non pode apagar a capa actual: a barra de estado di «That is the current layer. Make another layer current first.» Premer o nome dunha capa para facela actual tamén a activa e a descongela.

Cada cambio de capa, no panel ou por un comando, é un paso de desfacer: {{key:Mod+Z}} o devolve.

## Traballar con capas seleccionando obxectos

Non cómpre coñecer o nome dunha capa: seleccione un obxecto que estea nela. Escriba o comando, ou abra {{ui:Ferramentas}} na parte superior do panel {{ui:Capas}}.

| Comando | Que fai |
|---|---|
| {{cmd:LAYISO}} | Seleccione obxectos e prema {{key:Enter}}: só as súas capas quedan activas, e apágase cada outra capa. Se a capa actual está apagada, unha das capas illadas faise actual. |
| {{cmd:LAYUNISO}} | Volve activar as capas que apagou o último {{cmd:LAYISO}}, e devolve a capa actual que cambiou. |
| {{cmd:LAYOFF}} | Faga clic en obxectos un tras outro: apágase a capa de cada un. Escriba `U` para desfacer o último, {{key:Enter}} para rematar. |
| {{cmd:LAYFRZ}} | O mesmo, conxelando cada capa. |
| {{cmd:LAYMCUR}} | Faga clic nun obxecto: a súa capa faise actual (e tamén se activa e descongela). Se xa hai un obxecto seleccionado, úsase ese. |
| {{cmd:LAYON}} | Activa todas as capas. |
| {{cmd:LAYTHW}} | Descongela todas as capas. |

A capa actual nunca se apaga nin se conxela desta maneira: a historia dío, e pode facer actual outra capa con {{cmd:LAYMCUR}} primeiro. Ao escoller unha referencia de bloque úsase a propia capa da referencia.

## Renomear, combinar e eliminar capas

- {{cmd:RENAME}}: escriba `LA`, o nome antigo e o novo. Cada obxecto da capa segue o cambio. (`B` renomea un bloque do mesmo xeito, con cada referencia a el.)
- {{cmd:LAYMRG}}: faga clic nun obxecto de cada capa para combinar (ou escriba `N` e un nome), prema {{key:Enter}}, despois escolla a capa de destino e responda `Y`. Os obxectos pasan ao destino —no modelo, nas follas e dentro dos bloques— e as capas combinadas desaparecen.
- {{cmd:LAYDEL}}: escolla un obxecto da capa (ou `N` e o seu nome) e responda `Y`. A capa desaparece **con cada obxecto que contén**, en todas partes. Non se poden eliminar a capa 0, DEFPOINTS nin a capa actual.

Cada un é un paso de desfacer. Os tres están en {{ui:Ferramentas}} na parte superior do panel {{ui:Capas}}.

1. Faga clic nunha liña de muro, despois escriba `LAYISO` e prema {{key:Enter}}. Só Walls queda activa.
2. Debuxe ou cambie o que precise en Walls.
3. Escriba `LAYUNISO` e prema {{key:Enter}}. Doors e Notes volven.

## Erros comúns

- **As liñas novas foron á capa equivocada.** Compruebe que punto está cheo antes de debuxar. Unha capa nova faise actual en canto a engade.
- **Un obxecto non se selecciona.** A súa capa está bloqueada, apagada ou conxelada.
- **A capa segue imprimíndose noutro programa.** DXF R12 non pode gardar «non trazar». CadCraft conserva a opción para si cando o debuxo ten unha folla, pero os outros programas trazarán esa capa.
- **Nomes de capa en maiúsculas despois de gardar.** DXF R12 garda os nomes en maiúsculas, así que `Walls` volve como `WALLS`, e os espazos pasan a `_`. Un DWG gardado conserva os nomes como os escribiu.
- **Renomear, combinar ou eliminar unha capa.** Use {{cmd:RENAME}}, {{cmd:LAYMRG}} ou {{cmd:LAYDEL}} (tamén en {{ui:Ferramentas}}): vexa abaixo.

## Agrupar capas

Para manter a lista curta, póñaas en carpetas, como Existing, Proposed e Services. Cada carpeta pregáse, e os seus interruptores activan ou apagan todas as súas capas, conxélanas ou bloquéanas xuntas. A capa actual nunca se apaga.

En {{ui:Ferramentas}} no panel Capas, escolla {{ui:Engadir grupos prefabricados}} para un conxunto feito para pequenos traballos residenciais, {{ui:Agrupar por nome}} para agrupar capas que comparten un prefixo (`E-Walls`, `E-Doors`), ou {{ui:Novo grupo}}. Arrastre unha capa sobre unha carpeta, ou use a lista sobre as capas para a capa actual. Escriba en {{ui:Buscar unha capa}} para reducir a lista. `LAYGROUP` (`LG`) fai o mesmo na liña de comandos.

Para renomear un grupo, faga dobre clic no seu nome (ou selecciónao e prema {{key:F2}}), escriba o novo nome e prema {{key:Enter}}; {{key:Esc}} conserva o antigo, e {{cmd:UNDO}} o devolve. {{ui:Novo grupo}} está en {{ui:Ferramentas}} no panel Capas.

As capas en si non cambian, así que outros programas CAD as ven como unha lista plana normal. CadCraft conserva os grupos no ficheiro.
