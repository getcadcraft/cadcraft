---
title: Rato, trackpad e tacto
summary: Como facer zoom, desprazar, premer co botón dereito e escoller en CadCraft cun rato con roda, cun trackpad de Mac ou de PC, ou cunha pantalla táctil, e que cambia entre navegadores.
keywords: trackpad, touchpad, magic mouse, tacto, tableta, ipad, desprazar, zoom, pinza, clic dereito, dous dedos, botón central, navegador, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft está deseñado para un rato con roda. Todo funciona tamén cun trackpad, con algúns hábitos que aprender. As pantallas táctiles serven para escoller, con límites.

## Rato con roda

- **Zoom:** xire a roda. O debuxo fai zoom arredor da cruz, así que sinale o que quere ver.
- **Desprazar:** manteña premida a roda e arrastre, ou arrastre co botón dereito.
- **Zoom a todo:** faga dobre clic na roda, ou faga clic en {{ui:Extensións}}.
- **Volver á vista anterior:** faga clic en {{ui:Anterior}} no grupo Vista, ou escriba `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Unha serie de pasos da roda conta como unha vista, así que un {{ui:Anterior}} desfai toda a serie. Garde as vistas ás que volve con {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** clic dereito.

## Trackpad

:::mac
- **Desprazar:** mova dous dedos sobre o trackpad, en calquera dirección: o debuxo segue os seus dedos. Tamén pode arrastrar cun clic de dous dedos mantido premido (un arrastre co botón dereito).
- **Zoom:** faga pinza con dous dedos. O zoom segue a cruz.
- **Clic dereito (Enter):** prema con dous dedos. Active «Clic secundario» en **Axustes do sistema**, e logo en **Trackpad**, se non fai nada. O Control-clic pode contar como un clic normal en CadCraft en lugar de como un clic dereito, así que use o clic con dous dedos.
- **Zoom a unha área:** faga clic en {{ui:Xanela}} no grupo Vista e prema dúas esquinas.
:::

:::windows linux
- **Desprazar:** mova dous dedos sobre o trackpad, en calquera dirección: o debuxo segue os seus dedos. Tamén pode arrastrar mantendo premido o botón dereito.
- **Zoom:** faga pinza con dous dedos. O zoom segue a cruz.
- **Clic dereito (Enter):** prema con dous dedos, ou prema a esquina inferior dereita do trackpad, segundo os axustes do seu trackpad.
- **Zoom a unha área:** faga clic en {{ui:Xanela}} no grupo Vista e prema dúas esquinas.
:::

Manter premida {{key:Space}} e arrastrar **non** despraza o debuxo en CadCraft: {{key:Space}} é Enter.

A roda do rato segue facendo zoom, un paso de cada vez. Un trackpad que envía o desprazamento en pasos enteiros, como unha roda, fai zoom con desprazamento de dous dedos en lugar de desprazar: aleje, sinale a zona que quere e volva achegar. A pestana 3D mantén os seus propios movementos do trackpad (vexa [Modelar en 3D](topic:3d-solids#look-around)).

## Pantallas táctiles e tabletas

CadCraft le un dedo como un clic do rato:

- Un toque escolle un punto ou un obxecto, ou selecciona.
- Arrastrar un dedo sobre un espazo baleiro debuxa un lazo (movéndose primeiro cara á dereita, unha xanela; cara á esquerda primeiro, un cruzamento; vexa [Selección con lazo](topic:lasso-selection)).
- En {{cmd:TRIM}} e {{cmd:EXTEND}}, arrastrar un dedo por varias pezas recorta ou estende todas.
- Arrastrar a pinza dun obxecto seleccionado move a pinza (as pinzas e a caixa de escolla son máis grandes para un dedo).
- **Pinza** con dous dedos para facer zoom arredor do punto que hai entre eles; mova dous dedos xuntos para **desprazar**. Un segundo dedo cancela o que comezou o primeiro, así que unha pinza nunca deixa marca.
- Unha **pulsación longa** (manter quieto durante uns medio segundo) é un clic dereito: {{key:Enter}}. Remata un comando, completa unha selección, ou repite o último comando.

Debaixo da liña de comandos aparece unha **fila de teclas**: {{ui:Esc}}, {{ui:Desfacer}}, {{ui:Refacer}}, os caracteres que un teclado de tableta oculta (`@` `,` `<` `'` `"` `-`), {{ui:Enganche}}, {{ui:Orto}}, un botón de teclado e un {{ui:Enter}} grande. Toque o botón do teclado (ou a liña de comandos) para escribir un comando ou un número.

Non hai pasar o punteiro por riba, así que os marcadores de enganche só aparecen onde está o seu dedo.

:::touch
Está usando unha pantalla táctil. Para algo máis que unha ollada rápida, un teclado conectado e un rato ou un trackpad fan que CadCraft sexa moito máis fácil de usar.
:::

## Navegadores

CadCraft funciona igual en Chrome, Edge, Firefox e Safari, en Mac, Windows e Linux. As diferenzas son pequenas:

| Tema | Que hai que saber |
|---|---|
| Abrir un DWG | Os debuxos grandes tardan uns segundos en lerse en todos os navegadores; a liña de estado mostra « Lendo … » mentres tanto |
| Descargas | Cada navegador decide onde van as descargas e se pregunta antes; vexa [Navegadores e ordenadores](common:browsers) |
| Abrir para imprimir | Abre o PDF nunha pestana nova. Se o navegador bloquea as xanelas emerxentes, CadCraft descarga o PDF no seu lugar |
| F7 | Firefox pode ofrecer a navegación con cursor; escolla Non |
| Saír con cambios sen gardar | Cada navegador mostra a súa propia pregunta « Saír do sitio? », que CadCraft non pode cambiar |

:::safari
En Safari, un PDF aberto con {{ui:Abrir para imprimir}} pode mostrarse na pestana sen imprimirse: use **Ficheiro**, e logo **Imprimir**.
:::

:::firefox
Firefox pode preguntar que facer con cada descarga. Escolla gardar o ficheiro, ou cambie isto unha vez nos axustes de Firefox, en Descargas.
:::
