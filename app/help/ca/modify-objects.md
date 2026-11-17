---
title: Mou, copia, gira, escala, fes la simetria, estira i matriu
summary: Disposeu mobles en una habitació amb les ordres bàsiques de modificació, usant punts base, distàncies escrites i desfer.
keywords: mou, copia, gira, escala, simetria, estira, matriu, uneix, matchprop, iguala propietats, pintor, arrayrect, arraypolar, matriu polar, esborra, descompon, desfés, refés, punt base, desplaçament, modifica, alinea, distribueix, alinea en línia, espaia uniformement
from: 8eaeee6c
---

## Què creareu

Una taula amb una cadira, copiada al voltant de la taula, girada, amb simetria i redimensionada. Pel camí useu {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} i {{cmd:UNDO}}.

## Dibuixeu les peces

1. Escriviu `REC` i premeu {{key:Enter}}, escriviu `0,0` i premeu {{key:Enter}}, després escriviu `@1800,900` i premeu {{key:Enter}}. Aquesta és la taula.
2. Escriviu `REC` i premeu {{key:Enter}}, escriviu `300,-700` i premeu {{key:Enter}}, després escriviu `@450,450` i premeu {{key:Enter}}. Aquesta és una cadira, sota la taula.
3. Feu clic a {{ui:Extensió}}.

## Mou: punt base, després segon punt

Cada moviment, còpia, gir i escalat comença en un **punt base**: el punt que s'arrossega o al voltant del qual es gira.

1. Feu clic a la cadira per seleccionar-la.
2. Escriviu `M` i premeu {{key:Enter}}. L'historial diu `1 trobat`.
3. Quan aparegui `Especifiqueu el punt base`, situeu el cursor al cantó superior esquerre de la cadira (Punt final) i feu clic.
4. Quan aparegui `Especifiqueu el segon punt`, escriviu `@0,200` i premeu {{key:Enter}}.

La cadira puja 200, més a prop de la taula.

:::tip
Escriviu `D` a `Especifiqueu el punt base` per indicar un desplaçament en lloc d'un punt: CadCraft després demana `Especifiqueu el desplaçament`, i escriviu quant es desplaça en horitzontal i en vertical, per exemple `0,200` (no cal `@`).
:::

## Copia, tantes vegades com vulgueu

1. Feu clic a la cadira.
2. Escriviu `CO` i premeu {{key:Enter}}.
3. Situeu el cursor al cantó inferior esquerre de la cadira (Punt final) i feu clic com a punt base.
4. Escriviu `@600,0` i premeu {{key:Enter}}. Apareix una còpia 600 a la dreta.
5. Escriviu de nou `@600,0` i premeu {{key:Enter}}. Apareix una segona còpia 1200 a la dreta de l'original.
6. Premeu {{key:Enter}} per acabar l'ordre.

{{cmd:COPY}} continua fins que premeu {{key:Enter}}. Cada còpia es col·loca segons la distància entre el punt base i el punt que doneu. Un punt amb `@` compta des de l'últim punt introduït, que després de la primera còpia és el punt d'aquesta còpia, de manera que `@600,0` dues vegades dona còpies a 600 i 1200. Escriviu `U` i premeu {{key:Enter}} per desfer l'última còpia sense sortir de l'ordre.

Veureu tres cadires en fila sota la taula.

:::tip
{{cmd:COPY}} és per a còpies dins d'un mateix dibuix, col·locades per un punt base. Per portar objectes a un altre dibuix o pestanya, o per enganxar-los més tard, useu el porta-retalls: {{key:Mod+C}} i després {{key:Mod+V}}. {{key:Mod+D}} fa una sola còpia que es mou amb el punter. Vegeu [Copia, enganxa i duplica](topic:copy-paste).
:::

## Simetria de la fila a l'altra banda

1. Arrossegueu una intersecció (de dreta a esquerra) sobre les tres cadires, sense tocar la taula.
2. Escriviu `MI` i premeu {{key:Enter}}.
3. Quan aparegui `Especifiqueu el primer punt de la línia de simetria`, situeu el cursor al Punt mitjà del costat esquerre de la taula i feu clic.
4. Quan aparegui `Especifiqueu el segon punt de la línia de simetria`, situeu el cursor al Punt mitjà del costat dret de la taula i feu clic.
5. Quan aparegui `Esborra els objectes d'origen? [Sí (Y)/No] <N>`, premeu {{key:Enter}} per conservar-los.

Veureu tres cadires sota la taula i tres cadires simètriques per sobre. El text d'una selecció simètrica continua llegible: es col·loca simètric, però no s'escriu al revés.

## Gireu una cadira

1. Feu clic a la cadira més a la dreta sota la taula.
2. Escriviu `RO` i premeu {{key:Enter}}.
3. Situeu el cursor al cantó inferior dret de la cadira i feu clic com a punt base.
4. Escriviu `90` i premeu {{key:Enter}}.

La cadira gira 90 graus en sentit antihorari al voltant del punt base. Un angle negatiu gira en sentit horari. En lloc d'escriure, podeu fer clic en un segon punt: l'angle es mesura des del punt base fins a aquest punt.

## Escala la taula

1. Seleccioneu la taula.
2. Escriviu `SC` i premeu {{key:Enter}}.
3. Situeu el cursor al cantó inferior esquerre de la taula i feu clic com a punt base.
4. Escriviu `1.2` i premeu {{key:Enter}}.

La taula és un 20% més gran, creixent des del punt base. Un factor inferior a 1 la fa més petita.

:::note
Si feu clic en un punt en lloc d'escriure el factor d'escala, el factor és la distància entre el punt base i aquell punt. Fer clic a una unitat de dibuix de distància dona un factor d'1. Normalment voldreu escriure el número.
:::

## Desfer i refer

- {{key:Mod+Z}}, el botó {{ui:Desfés}}, o `U` i després {{key:Enter}} desfan l'última ordre. Una ordre sencera és un sol pas: desfer una {{cmd:COPY}} que va fer cinc còpies n'elimina les cinc.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, el botó {{ui:Refés}} o `REDO` la tornen a aplicar.
- L'historial indica què s'ha desfet («S'ha desfet COPY»).

CadCraft guarda els últims 500 passos. La configuració de capes (activa, congelada, bloquejada, color) són paràmetres, no edicions, i no es desfan.

## Estira una habitació més ampla

{{cmd:STRETCH}} (`S`, o {{ui:Estira}}) mou només el que hi ha dins d'una finestra d'intersecció: els cantons i els extrems de línia que hi són dins es mouen, la resta es queda, de manera que l'habitació s'eixampla en lloc de moure's sencera.

1. Escriviu `S` i premeu {{key:Enter}}.
2. Arrossegueu una finestra de dreta a esquerra sobre el mur de la dreta, de manera que cobreixi els cantons del mur i els extrems de tot el que hi toca.
3. Premeu {{key:Enter}}.
4. Feu clic en un punt base, després escriviu `@600,0` i premeu {{key:Enter}}.

El rectangle és 600 més ample; les línies que acabaven al mur continuen acabant-hi. Un arc amb un extrem a dins conserva la seva alçada, els cercles i el text es mouen quan el centre o el punt d'inserció és a dins, i una cota mesura la seva nova longitud. Els objectes triats un per un, sense finestra, simplement es desplacen.

També podeu seleccionar primer: arrossegueu la finestra d'intersecció (o un llaç d'intersecció) sobre el mur sense cap ordre en curs, després escriviu `S`. STRETCH agafa aquesta selecció i estira el que contenen les seves finestres, igual que si les haguéssiu arrossegat en la seva pròpia petició.

## Matriu: files i columnes, o al voltant d'un centre

{{cmd:ARRAY}} (`AR`, o {{ui:Matriu}}) copia la selecció en una quadrícula o en un cercle.

1. Seleccioneu una cadira, escriviu `AR` i premeu {{key:Enter}}. Premeu {{key:Enter}} per a Rectangular.
2. Apareix una vista prèvia de 4 columnes i 3 files. Escriviu `COU`, premeu {{key:Enter}}, després `5` per a columnes i `2` per a files.
3. Escriviu `S`, premeu {{key:Enter}}, després `600` entre columnes i `-900` entre files (un negatiu baixa).
4. Premeu {{key:Enter}} per fer les còpies.

Per a un anell de cadires al voltant d'una taula, trieu `PO` (Polar) en lloc d'això, feu clic al centre de la taula i definiu `I` (elements), `F` (angle d'emplenament: 360 per a tota la volta, 180 per a mitja) i `ROT` (si les còpies giren per encarar el centre). {{cmd:ARRAYRECT}} i {{cmd:ARRAYPOLAR}} salten la pregunta.

## Uneix peces en una polilínia

{{cmd:JOIN}} (`J`, o {{ui:Modifica}} › {{ui:Més}} › {{ui:Uneix}}): seleccioneu línies, arcs i polilínies obertes els extrems de les quals es toquen, i premeu {{key:Enter}}. Esdevenen una sola polilínia, tancada quan donen la volta completa, que després podeu desfasar de cop. Les línies que estan sobre una mateixa recta esdevenen una sola línia encara que tinguin buits entre elles; els arcs d'un mateix cercle esdevenen un sol arc, o el cercle.

## Iguala propietats

{{cmd:MATCHPROP}} (`MA`, o {{ui:Modifica}} › {{ui:Més}} › {{ui:Iguala propietats}}): feu clic a l'objecte l'aspecte del qual voleu, després seleccioneu els objectes que cal canviar i premeu {{key:Enter}}. Prenen la seva capa i el seu color; un text pren la seva alçada, una cota les seves mides, una trama el seu patró. Escriviu `S` (Configuració) a la segona pregunta per desactivar-ne alguna.

## Alinea objectes

**Per punts.** {{cmd:ALIGN}} (`AL`, o {{ui:Modifica}} › {{ui:Més}} › {{ui:Alinea}}): seleccioneu els objectes i premeu {{key:Enter}}, després feu clic en un punt d'ells (l'origen) i en el lloc on hauria d'anar (la destinació).

- Un parell els mou. Premeu {{key:Enter}} a `Especifiqueu el segon punt d'origen` per aturar-vos-hi.
- Dos parells els giren també, de manera que la línia entre els dos punts d'origen queda al llarg de la línia entre els dos punts de destinació. CadCraft després pregunta `Escala els objectes segons els punts d'alineació?`: `Y` els fa més grans o més petits en la mateixa proporció.
- Un tercer parell els fa simètrics quan els seus dos punts són a costats oposats d'aquella línia.

**Vores i espaiat.** {{ui:Modifica}} › {{ui:Més}} › {{ui:Alinea i distribueix}} (o `ALIGNPANEL`) obre un petit tauler sobre el dibuix. Seleccioneu objectes, després:

- trieu amb què alinear a {{ui:Alinea a}} (tota la selecció, el primer o l'últim objecte que heu triat, o un punt on feu clic) i feu clic a {{ui:Esquerra}}, {{ui:Centre}}, {{ui:Dreta}}, {{ui:Superior}}, {{ui:Al mig}} o {{ui:Inferior}};
- o trieu {{ui:Espais iguals}} o {{ui:Centres iguals}} i feu clic a {{ui:De costat a costat}} o {{ui:Amunt i avall}}: els dos objectes exteriors es queden, i la resta se situa de manera uniforme entre ells (almenys tres objectes).

Cada clic és un pas per desfer, i la selecció es manté, de manera que podeu provar una altra cosa. Cada objecte es compta pel seu quadre envolvent, en el SCP quan n'hi ha un d'establert. A la línia d'ordres, el mateix és {{cmd:ALIGNTO}} i {{cmd:DISTRIBUTE}}.

## Esborra i descompon

- {{cmd:ERASE}} (`E`, o {{key:Delete}}) suprimeix els objectes seleccionats.
- {{cmd:EXPLODE}} (`X`) descompon una polilínia en línies i arcs, una referència de bloc en els seus objectes, i una cota en línies, punxes de fletxa i text. Les cotes descompostes ja no es mesuren soles.

## Errors habituals

- **Escriure una distància sense `@` al segon punt.** `600,0` és el punt absolut 600,0, no «600 a la dreta». Useu `@600,0`, o un `600` simple amb la creu apuntant cap a la direcció correcta.
- **El gir ha anat en sentit contrari.** Els angles positius giren en sentit antihorari.
- **Desfer ha tret més del que esperàveu.** Un sol desfer treu l'última ordre sencera, incloses totes les còpies que ha fet.
- **L'ordre no ha demanat seleccionar objectes.** Els objectes ja estaven seleccionats, i els ha usat. Premeu {{key:Esc}} primer per començar sense res seleccionat.
