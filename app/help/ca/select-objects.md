---
title: Selecciona objectes
summary: Trieu objectes un a un, amb una finestra o una intersecció, abans o durant una ordre, i traieu objectes d'una selecció.
keywords: selecciona, selecció, finestra, intersecció, substantiu-verb, tria, tot, últim, anterior, tanca, elimina, afegeix, tab, cicla, superposats, qselect, selecció ràpida, filtre, selecciona objectes semblants, selectsimilar, shift, deselecciona, ctrl+a, pickfirst
from: 676508c7
---

## Què aprendreu

Com triar els objectes sobre els quals treballa una ordre. CadCraft té dues maneres de treballar, i totes dues són vàlides:

- **Primer seleccioneu, després l'ordre** (substantiu-verb). Seleccioneu objectes i després escriviu `M` per a Mou. L'ordre pren la vostra selecció i passa directament a la següent pregunta.
- **Primer l'ordre, després seleccioneu** (verb-substantiu). Escriviu `M`; l'ordre demana `Select objects:`; seleccioneu i després premeu {{key:Enter}}.

## Trieu un objecte cada vegada

1. Sense cap ordre en curs, feu clic en una línia. Es ressalta i apareixen les seves nanses (quadrats petits). El panell de la dreta mostra les seves propietats.
2. Feu clic en un altre objecte. S'afegeix a la selecció.
3. Manteniu {{key:Shift}} i feu clic en un objecte seleccionat. Se'n treu de la selecció.
4. Premeu {{key:Esc}}. No hi ha res seleccionat.

## Finestra i intersecció

Feu clic una vegada en un espai buit, mogueu-vos i torneu a fer clic: es dibuixa un rectangle. Si premeu i arrossegueu, es dibuixa en canvi un llaç a mà alçada, amb els mateixos dos tipus (vegeu [Selecció amb llaç](topic:lasso-selection); la Configuració pot fer que arrossegar dibuixi el rectangle). Els objectes que obteniu depenen de la direcció:

| Moveu | Quadre | Selecciona |
|---|---|---|
| D'esquerra a dreta | Finestra | Només els objectes **completament dins** del quadre |
| De dreta a esquerra | Intersecció | Els objectes dins del quadre **i** els que toca |

1. Dibuixeu unes quantes línies i cercles que se solapin.
2. Feu clic en un espai buit a l'esquerra d'alguns objectes, mogueu-vos cap a la dreta i torneu a fer clic. Només se seleccionen els objectes completament dins.
3. Premeu {{key:Esc}}.
4. Feu clic en un espai buit a la dreta, mogueu-vos cap a l'esquerra travessant alguns objectes i torneu a fer clic. Se selecciona tot el que toca el quadre.
5. Manteniu {{key:Shift}} i dibuixeu un quadre o un llaç sobre alguns objectes seleccionats. Surten de la selecció.

## Seleccioneu i després executeu una ordre

1. Seleccioneu dos cercles.
2. Escriviu `M` i premeu {{key:Enter}}.

L'historial diu `2 found`, i la indicació passa directament a `Specify base point`. Acabeu el desplaçament (vegeu [Mou, copia, gira, escala i simetria](topic:modify-objects)).

Quan acaba una ordre, la selecció es neteja, de manera que la següent ordre comença de nou.

Les ordres que accepten una selecció d'aquesta manera són: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} i {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} i {{cmd:CHAMFER}} sempre demanen triar objectes un a un; {{cmd:TRIM}} i {{cmd:EXTEND}} accepten un clic o un camí que arrossegueu entre els trossos (vegeu [Retalla i allarga](topic:trim-and-extend)).

## Executeu una ordre i després seleccioneu

1. Assegureu-vos que no hi hagi res seleccionat ({{key:Esc}}).
2. Escriviu `E` i premeu {{key:Enter}}. La indicació diu `Select objects:`.
3. Feu clic en objectes, o arrossegueu finestres i interseccions. L'historial compta cada selecció (`1 found`, `3 found`).
4. Premeu {{key:Enter}}, premeu {{key:Space}} o feu clic dret per acabar de seleccionar.

Els objectes s'esborren i l'historial diu quants.

A la indicació `Select objects:` també podeu escriure:

- `ALL`, i després {{key:Enter}}: tots els objectes que podeu editar a la pestanya oberta.
- `L` (o `LAST`), i després {{key:Enter}}: l'objecte dibuixat més recentment.
- `P` (Anterior): els objectes sobre els quals va treballar l'última ordre, si encara hi són.
- `F` (Tanca): feu clic o escriviu punts al llarg d'una línia; s'afegeix cada objecte que creua la línia. Premeu {{key:Enter}} per acabar la tanca; `U` treu el darrer punt.
- `W` (Finestra) o `C` (Intersecció): dues cantonades, en la direcció que arrossegueu.
- `R` (Elimina): a partir d'ara, els clics, les finestres i les tanques treuen objectes **fora**. La indicació diu `Remove objects:`. `A` (Afegeix) torna enrere.
- `?`: la llista d'aquestes opcions a l'historial.

Aquestes opcions no es mostren a la indicació, com a AutoCAD.

## Trieu un de diversos objectes superposats

On els objectes se superposen o es toquen, un clic pren el més proper. Per obtenir-ne un altre:

1. Manteniu el punter quiet sobre el punt.
2. Premeu {{key:Tab}}. El següent objecte d'aquell punt es ressalta, i la barra d'estat diu quin és ("2 de 3: Línia a la capa Walls").
3. Torneu a premer {{key:Tab}} fins que quedi ressaltat el que voleu, i després feu clic sense moure's.

En moure el punter es torna a començar. Això funciona sense cap ordre en curs, a `Select objects:` i a qualsevol lloc on una ordre us demani triar un objecte.

## Selecciona per una regla: Selecció ràpida

{{cmd:QSELECT}} (`QS`, o {{ui:Edita}} › {{ui:Més}} › {{ui:Selecció ràpida}}) selecciona cada objecte que coincideix amb una regla, com ara cada cercle amb un radi inferior a 50, o cada referència de bloc anomenada DOOR-900.

1. Obriu {{ui:Selecció ràpida}}.
2. Trieu {{ui:Tipus d'objecte}} (la llista compta cada tipus), i després {{ui:Propietat}}: {{ui:Capa}}, {{ui:Color}}, i per a alguns tipus {{ui:Longitud}}, {{ui:Radi}}, {{ui:Àrea}}, {{ui:Alçada del text}}, {{ui:Contingut del text}}, {{ui:Nom del bloc}} o {{ui:Patró de trama}}.
3. Trieu {{ui:Operador}} i {{ui:Valor}}. `*` coincideix amb comodins (`DOOR-*`); {{ui:Selecciona-ho tot}} pren cada objecte del tipus. El recompte de la part inferior mostra quants coincideixen a mesura que trieu.
4. {{ui:Com aplicar}}: inclou els que coincideixen, o tots els altres. {{ui:Aplica a}} {{ui:Selecció actual}} redueix el que havíeu seleccionat; {{ui:Afegir a la selecció actual}} hi afegeix.
5. Feu clic a {{ui:Selecciona}}. Després executeu l'ordre que vulgueu: la farà servir sobre la selecció.

## Selecciona objectes semblants

Seleccioneu un o més objectes i escriviu {{cmd:SELECTSIMILAR}} (`SIM`), o trieu {{ui:Edita}} › {{ui:Més}} › {{ui:Selecciona objectes semblants}}. Se seleccionen tots els objectes del mateix tipus, a la mateixa capa i amb el mateix color; les referències de bloc també necessiten el mateix bloc, i les trames el mateix patró. Escriviu `SE` a la seva indicació `Select objects` per triar què ha de coincidir.

## Selecciona ara, usa més tard

Escriviu `SELECT` i premeu {{key:Enter}}, trieu objectes amb qualsevol de les maneres anteriors, i premeu {{key:Enter}}. Es mantenen seleccionats per a l'ordre següent, i `P` els torna a triar en una indicació `Select objects:` posterior.

## Selecciona-ho tot

Sense cap ordre en curs, premeu {{key:Mod+A}}, o trieu {{ui:Selecciona-ho tot}} al menú {{ui:Edita}} › {{ui:Més}} de la barra d'eines, per seleccionar tots els objectes que podeu editar a la pestanya oberta. Si heu escrit alguna cosa a la línia d'ordres, {{key:Mod+A}} selecciona aquest text en lloc dels objectes: premeu {{key:Esc}} per esborrar-lo primer. A la indicació `Select objects:`, escriviu `ALL`. {{ui:Neteja la selecció}} al mateix menú, o {{key:Esc}}, neteja la selecció.

:::tip
Si preferiu que cada clic substitueixi la selecció (i que {{key:Shift}} hi afegeixi), definiu {{ui:Clic sobre objectes}} com a {{ui:Substitueix la selecció}} a [Configuració de CadCraft](topic:settings).
:::

## Què no es pot seleccionar

- Objectes d'una capa que és **desactivada**, **congelada** o **bloquejada**. Els objectes bloquejats continuen visibles, i encara hi podeu fer referència, però no els podeu seleccionar ni canviar.
- En una pestanya de full, el model que es mostra dins d'una finestra gràfica. Seleccioneu els objectes propis del full (el caixetí, les notes, els marcs de les finestres gràfiques). Per editar el model, aneu a la pestanya {{ui:Model}}.

## Esborra ràpidament

Seleccioneu objectes i després premeu {{key:Delete}} (o {{key:Backspace}} quan la línia d'ordres no té el cursor). En un teclat de Mac, la tecla marcada amb delete funciona quan heu fet clic al dibuix; mentre la línia d'ordres té el cursor, premeu fn i delete alhora. Això executa {{cmd:ERASE}} sobre la selecció. Si no passa res, heu escrit alguna cosa a la línia d'ordres: premeu {{key:Esc}}, o escriviu `E` i premeu {{key:Enter}}.

## Errors habituals

- **La finestra ha pres massa poc.** Heu arrossegat d'esquerra a dreta, que només pren el que és completament dins. Arrossegueu de dreta a esquerra per a una intersecció.
- **Un clic en un espai buit ha començat un quadre.** Un clic en un espai buit comença una finestra; el segon clic l'acaba. Premeu {{key:Esc}} o feu clic dret per deixar-la.
- **Un clic en un espai buit ha deixat anar la selecció.** Així és, tret que manteniu {{key:Shift}}. Per mantenir la selecció en aquest clic i esborrar-la només amb {{key:Esc}}, definiu {{ui:En fer clic en un punt buit}} com a {{ui:Manté la selecció}} a [Configuració de CadCraft](topic:settings#clicking-an-empty-spot).
- **L'ordre ha usat objectes que no volíeu.** Hi havia alguna cosa seleccionada quan l'heu iniciada. Premeu {{key:Esc}} abans d'una ordre per començar sense res seleccionat.
- **No hi ha res seleccionat després d'una ordre.** És intencionat: una ordre acabada neteja la selecció.
