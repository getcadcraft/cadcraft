---
title: Splines i polilínies: SPLINE, SPLINEDIT, PEDIT
summary: Dibuixar una corba suau que passi per punts o a partir d'un polígon de control, editar-ne l'ajust i els punts de control, i editar polilínies (unir, tancar, amplada, ajustar, spline, descorbar) o convertir una spline en polilínia.
keywords: spline, splinedit, spl, spe, pedit, pe, punts d'ajust, punts de control, pesos, nurbs, edició de polilínies, unir, corba d'ajust, descorbar, convertir en polilínia, precisió, tangent, corba, distància de tolerància
from: d31f72d8
---

## Què fareu

Una corba que passa per cinc punts, després la mateixa corba editada de tres maneres, i una polilínia feta amb tres línies.

## Dibuixar una spline per punts

1. Escriviu `SPL` i premeu {{key:Enter}}.
2. Feu clic o escriviu els punts pels quals ha de passar la corba: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Premeu {{key:Enter}} després de l'últim.
3. {{ui:Tangent inicial}}: feu clic en un punt cap al qual ha de sortir la corba, o premeu {{key:Enter}} perquè la decideixi. Feu el mateix per a la tangent final.

La corba passa per cada punt. Escriviu `C` en lloc de {{key:Enter}} per tancar-la (la corba torna al primer punt). {{key:U}} (`Undo`) treu l'últim punt mentre dibuixeu.

### Dibuixar-ne una a partir d'un polígon de control

Escriviu `M` al primer indicador, després `C` (Vèrtexs de control) i un grau de l'1 al 5 (el 3 és l'habitual). Ara els punts que trieu són les cantonades d'un polígon que atrau la corba cap a elles; la corba comença al primer i acaba al darrer. Una corba tancada fa la volta, sense cap cantonada a la unió.

### Convertir una polilínia en spline

Al primer indicador, escriviu `O` (Objecte) i seleccioneu polilínies o línies. Es converteixen en splines pels seus vèrtexs, i els originals se suprimeixen.

## Editar una spline

Seleccioneu-la i escriviu `SPE` (o escriviu `SPE` i feu clic a sobre). Les nanses mostren els punts d'ajust (o els punts de control d'una spline que no en té): arrossegueu-ne un per remodelar la corba. A la línia d'ordres:

- **Dades d'ajust** (una spline dibuixada per punts): `A` afegeix un punt d'ajust (feu clic on), `D` n'elimina un (feu clic a prop), `M` en mou un (feu clic a prop i després al nou lloc), `T` fixa les tangents finals, `P` neteja els punts d'ajust, de manera que a partir d'aquí la spline s'edita pels seus punts de control.
- **Edita vèrtex**: `A` afegeix un punt de control sense canviar la corba, `M` en mou un, `W` li dona un **pes** (per sobre de 1 atrau més la corba cap a ell; per sota de 1 la deixa anar).
- **Obert** o **Tancat**, i **Inverteix** (la corba va en l'altre sentit).
- **Converteix en polilínia** (`P`): la spline es converteix en una polilínia; la precisió és el nombre de segments que té cada tram (el 10 és l'habitual).
- **Desfés** (`Undo`) treu l'últim canvi; **Surt** (X) acaba.

{{ui:Propietats}} mostra el grau d'una spline, quants punts d'ajust i de control té, la seva longitud, i permet obrir-la o tancar-la.

## Editar una polilínia

Seleccioneu una polilínia i escriviu `PE`. Una línia, un arc o una spline que trieu s'ofereix primer com a polilínia en què convertir-se (una spline demana la precisió).

- **Tanca (C)** / **Obre (O)** uneix o separa els extrems.
- **Uneix (J)** afegeix línies, arcs i polilínies els extrems dels quals coincideixen amb l'extrem de la polilínia. `Fuzz distance` és la distància que poden tenir els extrems entre si i encara unir-se (0 vol dir que han de coincidir).
- **Amplada (W)** dona a tota la polilínia una sola amplada (0 la treu).
- **Ajusta (F)** substitueix la polilínia per una corba suau que passa pels seus vèrtexs; **Spline** ho fa per una B-spline cúbica que els segueix (comença i acaba al primer i al darrer vèrtex i es manté a prop dels altres). Totes dues es converteixen en una polilínia de segments curts, i les cantonades originals es conserven, de manera que **Descorba (D)** les torna.
- **Generació de tipus de línia** indica si un tipus de línia discontinu continua al llarg de tota la polilínia o torna a començar a cada vèrtex.
- **Inverteix (R)** canvia l'ordre dels seus vèrtexs. **Múltiple** (`M` al primer indicador) edita diverses polilínies amb les mateixes opcions.

Editar els vèrtexs d'una polilínia a {{ui:Propietats}} o amb nanses es manté tal com estava: PEDIT no té editor de vèrtexs.

## Als fitxers

DWG i DXF 2000 mantenen una spline com a spline: grau, punts de control, nusos, pesos, punts d'ajust i tangents. Una spline que obriu i no canvieu s'escriu de nou exactament tal com venia. DXF R12 no té splines: es desa com a polilínia al llarg de la corba, i l'historial indica quantes.

Desfasament, Retalla, Allarga, Empalma, Trenca i Uneix no funcionen amb splines. Apliqueu {{cmd:EXPLODE}} a una spline, o {{cmd:PEDIT}}, per obtenir una polilínia que aquestes ordres accepten.

## Errors habituals

- **La corba es passa de llarg entre punts propers.** Una corba que passa per punts es corba on es corben els punts. Useu menys punts, o un polígon de control.
- **"That is not a spline."** Això no és una spline. SPLINEDIT només accepta splines; {{cmd:PEDIT}} edita polilínies.
- **Una spline d'ajust tancada té una forma lleugerament diferent en un altre programa.** CadCraft la tanca amb una unió suau al primer punt; un altre programa pot tancar-la amb una corba periòdica. Una spline tancada de punts de control és igual en tots dos.
