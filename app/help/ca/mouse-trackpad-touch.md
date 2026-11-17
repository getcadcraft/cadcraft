---
title: Ratolí, trackpad i tàctil
summary: Com fer zoom, desplaçar, fer clic dret i triar a CadCraft amb un ratolí de roda, un trackpad de Mac o PC, o una pantalla tàctil, i què canvia entre navegadors.
keywords: trackpad, touchpad, magic mouse, tàctil, tauleta, ipad, desplaça, zoom, pinça, clic dret, dos dits, botó central, navegador, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft està pensat per a un ratolí amb roda. Tot funciona també amb un trackpad, amb uns quants hàbits a aprendre. Les pantalles tàctils serveixen per triar, amb limitacions.

## Ratolí de roda

- **Zoom:** gireu la roda. El dibuix fa zoom al voltant de la creu, així que apunteu on voleu veure.
- **Desplaça:** manteniu la roda premuda i arrossegueu, o arrossegueu amb el botó dret.
- **Zoom a tot:** feu doble clic a la roda, o feu clic a {{ui:Extensió}}.
- **Tornar a la vista anterior:** feu clic a {{ui:Anterior}} al grup de vista, o escriviu `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Un conjunt de passos de roda compta com una sola vista, de manera que un {{ui:Anterior}} les desfà totes. Deseu les vistes a les quals torneu amb {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** feu clic dret.

## Trackpad

:::mac
- **Desplaça:** mogueu dos dits sobre el trackpad, en qualsevol direcció: el dibuix segueix els dits. També podeu arrossegar mantenint premut un clic de dos dits (un arrossegament amb el botó dret).
- **Zoom:** feu pinça amb dos dits. El zoom segueix la creu.
- **Clic dret (Enter):** feu clic amb dos dits. Activeu «Clic secundari» a **Configuració del sistema**, després **Trackpad**, si no fa res. El clic amb Control pot comptar com a clic normal a CadCraft i no com a clic dret, així que useu el clic de dos dits.
- **Zoom a una àrea:** feu clic a {{ui:Finestra (W)}} al grup de vista i feu clic a dos cantons.
:::

:::windows linux
- **Desplaça:** mogueu dos dits sobre el trackpad, en qualsevol direcció: el dibuix segueix els dits. També podeu arrossegar amb el botó dret premut.
- **Zoom:** feu pinça amb dos dits. El zoom segueix la creu.
- **Clic dret (Enter):** feu clic amb dos dits, o feu clic a la cantonada inferior dreta del trackpad, segons la configuració del vostre trackpad.
- **Zoom a una àrea:** feu clic a {{ui:Finestra (W)}} al grup de vista i feu clic a dos cantons.
:::

Mantenir {{key:Space}} i arrossegar **no** desplaça a CadCraft: {{key:Space}} és Enter.

Una roda de ratolí continua fent zoom, un pas cada vegada. Un trackpad que envia el desplaçament en passos sencers, com ho fa una roda, fa zoom amb un desplaçament de dos dits en lloc de desplaçar: allunyeu la vista, apunteu l'àrea que voleu i torneu a apropar-la. La pestanya 3D manté els seus propis moviments de trackpad (vegeu [Model en 3D](topic:3d-solids#look-around)).

## Pantalles tàctils i tauletes

CadCraft interpreta un dit com un clic de ratolí:

- Un toc tria un punt o un objecte, o selecciona.
- Arrossegar un dit en un espai buit dibuixa un llaç (si hi aneu primer cap a la dreta, una finestra; si primer cap a l'esquerra, una intersecció; vegeu [Selecció amb llaç](topic:lasso-selection)).
- A {{cmd:TRIM}} i {{cmd:EXTEND}}, arrossegar un dit per sobre de trossos els retalla o els allarga tots.
- Arrossegar la nansa d'un objecte seleccionat mou la nansa (les nanses i la caixa de selecció són més grans per a un dit).
- **Feu pinça** amb dos dits per fer zoom al voltant del punt que hi ha entre ells; mogueu dos dits junts per **desplaçar**. Un segon dit cancel·la el que havia començat el primer, de manera que una pinça mai no deixa cap marca.
- Una **premsada llarga** (manteniu quiet durant mig segon aproximadament) és un clic dret: {{key:Enter}}. Acaba una ordre, acaba una selecció o repeteix l'última ordre.

Sota la línia d'ordres apareix una **fila de tecles**: {{ui:Esc}}, Desfés, Refés, els caràcters que un teclat de tauleta amaga (`@` `,` `<` `'` `"` `-`), {{ui:Pas}}, {{ui:Orto}}, un botó de teclat i un {{ui:Enter}} gran. Toqueu el botó del teclat (o la línia d'ordres) per escriure una ordre o un número.

No hi ha passada del punter, així que els marcadors de referència només apareixen on és el dit.

:::touch
Esteu usant una pantalla tàctil. Per a qualsevol cosa més que una ullada ràpida, un teclat connectat i un ratolí o un trackpad fan que CadCraft sigui molt més fàcil d'usar.
:::

## Navegadors

CadCraft funciona igual a Chrome, Edge, Firefox i Safari, a Mac, Windows i Linux. Les diferències són petites:

| Tema | Què cal saber |
|---|---|
| Obrir un DWG | Els dibuixos grans triguen uns segons a llegir-se en tots els navegadors; la línia d'estat mostra «Llegint …» mentrestant |
| Baixades | Cada navegador decideix on van les baixades i si pregunta abans; vegeu [Navegadors i ordinadors](common:browsers) |
| Obre per imprimir | Obre el PDF en una pestanya nova. Si el navegador bloqueja les finestres emergents, CadCraft baixa el PDF en lloc d'obrir-lo |
| F7 | Firefox pot oferir navegació amb cursor; trieu No |
| Sortir amb canvis sense desar | Cada navegador mostra la seva pròpia pregunta «Sortir del lloc?», que CadCraft no pot canviar |

:::safari
A Safari, un PDF obert amb {{ui:Obre per imprimir}} pot mostrar-se a la pestanya sense imprimir-se: useu **Fitxer** i després **Imprimeix**.
:::

:::firefox
Firefox pot preguntar què fer amb cada baixada. Trieu desar el fitxer, o canvieu-ho una vegada a la configuració de Firefox, a Baixades.
:::
