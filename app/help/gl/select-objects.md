---
title: Seleccionar obxectos
summary: Escoller obxectos un a un, cunha xanela ou un cruce, antes ou durante un comando, e retirar obxectos dunha selección.
keywords: seleccionar, selección, xanela, cruce, substantivo-verbo, escoller, todo, último, anterior, valla, retirar, engadir, tabulador, ciclar, solapados, selección rápida, filtro, seleccionar similares, selectsimilar, shift, deseleccionar, ctrl+a, pickfirst
from: 676508c7
---

## O que vai aprender

Como escoller os obxectos sobre os que actúa un comando. CadCraft ten dúas formas de traballar, e as dúas son válidas:

- **Primeiro a selección, despois o comando** (substantivo-verbo). Seleccione obxectos e despois escriba `M` para Mover. O comando toma a súa selección e pasa directamente á seguinte pregunta.
- **Primeiro o comando, despois a selección** (verbo-substantivo). Escriba `M`; o comando pregunta `Seleccione obxectos:`; seleccione e despois prema {{key:Enter}}.

## Escoller un obxecto de cada vez

1. Sen ningún comando en curso, prema unha liña. Resáltase e aparecen as súas asas (pequenos cadrados). O panel dereito mostra as súas propiedades.
2. Prema outro obxecto. Engádese á selección.
3. Manteña premida {{key:Shift}} e prema un obxecto seleccionado. Retírase da selección.
4. Prema {{key:Esc}}. Non queda nada seleccionado.

## Xanela e cruce

Prema unha vez nun espazo baleiro, mova o punteiro e prema de novo: obtense un rectángulo. Se preme e arrastra, debúxase en cambio un lazo a man alzada, con os mesmos dous tipos (véxase [Selección con lazo](topic:lasso-selection); Configuración pode facer que arrastrar debuxe o rectángulo). Os obxectos que obtén dependen da dirección:

| Vostede move | Caixa | Selecciona |
|---|---|---|
| De esquerda a dereita | Xanela | Só os obxectos **totalmente dentro** da caixa |
| De dereita a esquerda | Cruce | Os obxectos dentro da caixa **e** os obxectos que ela toca |

1. Debuxe algunhas liñas e círculos que se solapen.
2. Prema un espazo baleiro á esquerda dalgúns obxectos, mova cara á dereita e prema de novo. Só se seleccionan os obxectos completamente dentro.
3. Prema {{key:Esc}}.
4. Prema un espazo baleiro á dereita, mova cara á esquerda cruzando algúns obxectos e prema de novo. Selecciónase todo o que toca a caixa.
5. Manteña premida {{key:Shift}} e debuxe unha caixa ou un lazo sobre algúns obxectos seleccionados. Saen da selección.

## Seleccionar e despois executar un comando

1. Seleccione dous círculos.
2. Escriba `M` e prema {{key:Enter}}.

O historial indica `2 atopados`, e a indicación pasa directamente a `Indique o punto base`. Complete o desprazamento (véxase [Mover, copiar, xirar, escalar e espellar](topic:modify-objects)).

Cando un comando remata, a selección límpase, para que o seguinte comando comece de novo.

Comandos que toman unha selección deste xeito: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} e {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} e {{cmd:CHAMFER}} piden sempre escoller os obxectos un a un; {{cmd:TRIM}} e {{cmd:EXTEND}} aceptan un clic ou unha ruta que arrastre polas pezas (véxase [Recortar e estender](topic:trim-and-extend)).

## Executar un comando e despois seleccionar

1. Asegúrese de que non hai nada seleccionado ({{key:Esc}}).
2. Escriba `E` e prema {{key:Enter}}. A indicación di `Seleccione obxectos:`.
3. Prema obxectos, ou arrastre xanelas e cruces. O historial conta cada selección (`1 atopado`, `3 atopados`).
4. Prema {{key:Enter}}, {{key:Space}} ou o botón dereito para rematar a selección.

Os obxectos bórranse e o historial indica cantos.

Na indicación `Seleccione obxectos:` tamén pode escribir:

- `ALL`, e despois {{key:Enter}}: todos os obxectos que pode editar na lapela aberta.
- `L` (ou `LAST`), e despois {{key:Enter}}: o obxecto debuxado máis recentemente. `[Último (L)]`
- `P` (Previous): os obxectos sobre os que traballou o último comando, se aínda están. `[Anterior (P)]`
- `F` (Fence): prema ou escriba puntos ao longo dunha liña; engádese cada obxecto que a liña cruce. Prema {{key:Enter}} para rematar a valla; `U` retira o seu último punto. `[Valla (F)]`
- `W` (Window) ou `C` (Crossing): dúas esquinas, en calquera dirección que arrastre. `[Xanela (W)]` ou `C` (Cruce)
- `R` (Remove): a partir de agora, os clics, as xanelas e as vallas retiran obxectos. A indicación di `Retirar obxectos:`. `[Engadir (A)]` volve ao modo anterior.
- `?`: a lista destas opcións no historial.

Estas opcións non se mostran na indicación, como en AutoCAD.

## Escoller un de varios obxectos superpostos

Onde os obxectos se solapan ou tocan, un clic toma o máis próximo. Para obter outro:

1. Manteña o punteiro quieto sobre o lugar.
2. Prema {{key:Tab}}. Resáltase o seguinte obxecto alí, e a barra de estado indica cal é («2 de 3: Liña na capa Walls»).
3. Prema {{key:Tab}} de novo ata resaltar o que quere e despois prema sen mover o punteiro.

Mover o punteiro volve comezar. Isto funciona sen ningún comando en curso, na indicación `Seleccione obxectos:` e en calquera lugar onde un comando pida escoller un obxecto.

## Seleccionar por unha regra: Selección rápida

{{cmd:QSELECT}} (`QS`, ou {{ui:Editar}} › {{ui:Máis}} › {{ui:Selección rápida}}) selecciona cada obxecto que cumpra unha regra, como todos os círculos cun raio menor de 50, ou todas as referencias de bloque chamadas DOOR-900.

1. Abra {{ui:Selección rápida}}.
2. Escolla {{ui:Tipo de obxecto}} (a lista conta cada tipo) e despois {{ui:Propiedade}}: {{ui:Capa}}, {{ui:Cor}} e, para algúns tipos, {{ui:Lonxitude}}, {{ui:Raio}}, {{ui:Superficie}}, {{ui:Altura do texto}}, {{ui:Contido do texto}}, {{ui:Nome do bloque}} ou {{ui:Patrón de trama}}.
3. Escolla {{ui:Operador}} e {{ui:Valor}}. `*` coincide con comodíns (`DOOR-*`); {{ui:Seleccionar todo}} toma todos os obxectos do tipo. O contador da parte inferior mostra cantos coinciden segundo escolle.
4. {{ui:Modo de aplicación}}: incluír as coincidencias, ou todo o resto. {{ui:Aplicar a}} {{ui:Selección actual}} reduce o que tiña seleccionado; {{ui:Engadir á selección actual}} engade a ela.
5. Prema {{ui:Seleccionar}}. Despois execute o comando que queira: usará a selección.

## Seleccionar similares

Seleccione un ou varios obxectos e escriba {{cmd:SELECTSIMILAR}} (`SIM`), ou escolla {{ui:Editar}} › {{ui:Máis}} › {{ui:Seleccionar similares}}. Selecciónase cada obxecto do mesmo tipo, na mesma capa e coa mesma cor; as referencias de bloque necesitan ademais o mesmo bloque, e as tramas, o mesmo patrón. Escriba `SE` na súa indicación `Seleccione obxectos` para escoller o que debe coincidir.

## Seleccionar agora, usar despois

Escriba `SELECT` e prema {{key:Enter}}, escolla obxectos con calquera dos modos anteriores e prema {{key:Enter}}. Quedan seleccionados para o seguinte comando, e `[Anterior (P)]` volve escollelos nunha indicación `Seleccione obxectos:` posterior.

## Seleccionar todo

Sen ningún comando en curso, prema {{key:Mod+A}}, ou escolla {{ui:Seleccionar todo}} no menú {{ui:Editar}} › {{ui:Máis}} da barra de ferramentas, para seleccionar cada obxecto que pode editar na lapela aberta. Se escribiu algo na liña de comandos, {{key:Mod+A}} selecciona ese texto: prema antes {{key:Esc}} para borralo. Na indicación `Seleccione obxectos`, escriba `[Todo (ALL)]`. {{ui:Non seleccionar nada}} no mesmo menú, ou {{key:Esc}}, limpa a selección.

:::tip
Se prefire que cada clic substitúa a selección (e que {{key:Shift}} a engada), estableza {{ui:Facer clic en obxectos}} en {{ui:Substitúe a selección}} en [Configuración de CadCraft](topic:settings).
:::

## O que non se pode seleccionar

- Obxectos dunha capa que está **desactivada**, **conxelada** ou **bloqueada**. Os obxectos bloqueados seguen visibles, e aínda pode enganchar a eles, pero non se poden seleccionar nin cambiar.
- Nunha lapela de folla, o modelo que se mostra dentro dunha viewport. Vostede selecciona os obxectos propios da folla (a cartela, as notas, os marcos das viewports). Para editar o modelo, vaia á lapela {{ui:Modelo}}.

## Borrar rapidamente

Seleccione obxectos e prema {{key:Delete}} (ou {{key:Backspace}} cando a liña de comandos non ten o cursor). Nun teclado de Mac, a tecla rotulada como delete funciona cando xa prema no debuxo; mentres a liña de comandos ten o cursor, prema fn e delete xuntas. Isto executa {{cmd:ERASE}} sobre a selección. Se non pasa nada, escribiu algo na liña de comandos: prema {{key:Esc}}, ou escriba `E` e prema {{key:Enter}}.

## Erros habituais

- **A xanela colleu moi pouco.** Arrastrou de esquerda a dereita, o que só toma o que está completamente dentro. Arrastre de dereita a esquerda para un cruce.
- **Un clic nun espazo baleiro iniciou unha caixa.** Un clic nun espazo baleiro inicia unha xanela; o segundo clic remata. Prema {{key:Esc}} ou o botón dereito para descartala.
- **Un clic nun espazo baleiro soltou a selección.** Así é, a menos que manteña premida {{key:Shift}}. Para conservar a selección nese clic e borrala só con {{key:Esc}}, estableza {{ui:Clic nun lugar baleiro}} en {{ui:Mantén a selección}} en [Configuración de CadCraft](topic:settings#clicking-an-empty-spot).
- **O comando usou obxectos que non pretendía.** Algo seguía seleccionado ao iniciar o comando. Prema {{key:Esc}} antes dun comando para empezar sen nada seleccionado.
- **Non queda nada seleccionado despois dun comando.** É intencionado: un comando acabado limpa a selección.
