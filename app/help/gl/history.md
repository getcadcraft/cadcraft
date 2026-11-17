---
title: Historial: versións e cambios
summary: Vexa as versións dun debuxo (as copias que Studio garda ao gardar, e as da nube), abra ou restaure unha, e compare dúas co que cambiou amosado en cor.
keywords: historial, versións, historial de versións, restaurar, versión anterior, desfacer un gardado, comparar, comparar debuxos, dwgcompare, cambios, engadido, eliminado, cambiado, instantánea, copia de seguridade, versións na nube
from: 141d37b3
---

## O que fará

Unha ollada a unha versión anterior dun debuxo, e unha lista do que é diferente agora: o que se engadiu, o que se eliminou e o que cambiou, marcado en cor no debuxo.

## Abrir o historial

Escriba `HISTORY` (ou `HIST`) e prema {{key:Enter}}, ou escolla {{ui:Historial…}} no menú {{ui:Máis}} do grupo {{ui:Vista}}. O panel ábrese ao lado do debuxo e queda aberto mentres traballa, así que pode desprazar e facer zoom no debuxo coas cores.

O historial funciona en CadCraft Studio. Nun navegador, o panel só o indica.

## De onde veñen as versións

- **Neste computador.** Cada vez que abre un debuxo desde un ficheiro en Studio, e cada vez que o garda, Studio garda unha copia do ficheiro no seu propio almacenamento neste computador. A primeira copia é {{ui:Tal como se abriu}}: o ficheiro tal como estaba antes do primeiro gardado sobre el. Studio garda as 25 copias máis recentes de cada debuxo, e as máis antigas van primeiro cando todas as copias xuntas superan 400 MB. Un gardado que non cambia nada non garda nada. Non se envía nada.
- **Na nube.** Cando abre un debuxo dos seus ficheiros da nube en Studio, o panel tamén lista {{ui:Na nube}}: cada versión que garda a nube, co seu número, quen a gardou e a nota. O panel só as le. CadCraft aínda non envía os seus propios gardados á nube, así que estas son as versións gardadas desde outros dispositivos e desde a web. Inicie sesión de novo en Studio se indica que a sesión caducou.

Un debuxo que aínda non gardou non ten copias: gárdeo primeiro.

## Abrir ou restaurar unha versión

- {{ui:Abrir}} pon esa versión nunha pestana propia. O seu debuxo non se toca.
- {{ui:Restaurar}} substitúe este debuxo por esa versión. Pregunta antes. Studio garda unha copia do debuxo tal como está agora no Historial (marcada {{ui:Antes dunha restauración}}) antes de facelo, e non se escribe nada no ficheiro ata que garde. Unha restauración non se pode desfacer con {{key:Mod+Z}}; use esa copia.

## Comparar

1. Faga clic en {{ui:Comparar}} nunha versión. Compárase con {{ui:O debuxo tal como está agora}}; para comparala con outra versión, escolla antes esa en {{ui:Comparar con}}.
2. Lea o resultado debaixo da lista: cantos obxectos se engadiron, eliminaron e cambiaron, e unha lista deles. Faga clic nun elemento da lista para levar a vista até el.
3. No debuxo:
   - **verde**: obxectos engadidos,
   - **vermello**: obxectos eliminados (só están na versión máis antiga),
   - **laranxa**: obxectos cambiados: a nova forma é sólida e a antiga de trazos.
4. {{ui:Amosar no debuxo}} activa e desactiva as cores; {{ui:Quitar as cores}} retira o resultado. Pechar o panel tamén as quita.

A lista di o que cambiou nun obxecto modificado: o seu texto, que se moveu, a súa forma, a súa capa, cor, tipo de liña ou grosor de liña. Cada folla compárase por separado; as cores amósanse na folla aberta.

:::note
Un debuxo non ten un número estable para cada obxecto, así que CadCraft compara os obxectos polo que son: o mesmo obxecto nos dous lados non cambia; un obxecto do mesmo tipo e capa que está dentro do seu propio tamaño dun antigo é o mesmo obxecto, cambiado; o que sobra engádese ou elimínase. Un obxecto movido moi lonxe de onde estaba aparece como eliminado nun sitio e engadido no outro. Unha referencia de bloque conta o contido do seu bloque.
:::

## Erros frecuentes

- **«Aínda non hai copias.»** Studio garda unha copia en cada apertura e gardado dun debuxo que ten un ficheiro neste computador. Un debuxo aberto desde unha pestana do navegador, ou nunca gardado, non ten ningunha.
- **Falta a lista da nube.** Aparece para un debuxo aberto desde a nube en Studio; un ficheiro aberto desde o disco non é un debuxo da nube.
- **Todo parece cambiado.** Dúas versións gardadas por programas diferentes escriben o mesmo debuxo de formas distintas (nomes de bloques anónimos, redondeos). Compare versións gardadas por CadCraft.
