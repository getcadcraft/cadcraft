---
title: Referència d'ordres
summary: Totes les ordres de l'aplicació de dibuix CadCraft, amb els seus àlies, les preguntes que fan, les opcions i els valors per defecte.
keywords: ordres, àlies, llista d'ordres, àrea, perímetre, measuregeom, línia, pline, cercle, arc, retalla, desfasament, dimlinear, bloc, insereix, presentació, traça, zoom, ajuda, copyclip, cutclip, pasteclip, pasteorig, copybase, duplica, selectall
from: 7db2646b
---

Escriviu un nom d'ordre o un àlies i premeu {{key:Enter}} o {{key:Space}}. No hi ha diferència entre majúscules i minúscules, i un `_`, `-`, `.` o `'` inicial s'ignora. Escriviu `HELP` (o `?`) per imprimir una llista curta de totes les ordres a l'historial de la línia d'ordres; premeu {{key:F1}} per veure aquesta ajuda.

Com llegir les indicacions: les opcions van entre claudàtors, i en trieu una escrivint-ne les lletres majúscules (`D` per a Diàmetre). Un valor per defecte va entre angle, i {{key:Enter}} l'accepta. Quan es demana un punt, podeu fer clic o escriure qualsevol dels formats de [Entrada de coordenades i distàncies](topic:coordinate-entry). Quan es demana una distància, podeu escriure un nombre o fer clic en dos punts.

Premer {{key:Enter}} quan cal un punt o un objecte, i no hi ha valor per defecte, acaba l'ordre. {{key:Esc}} la cancel·la. Tot el que fa una ordre és un sol pas de desfer.

## Dibuix

### LINE

Àlies: `L`. Segments rectes, cadascun un objecte propi.

- `Especifiqueu el primer punt` (Enter: comença des de l'últim punt indicat)
- `Especifiqueu el punt següent [Desfés (U)]`, repetit. Després de dos segments: `[Desfés (U)/Tanca (C)]`.
- `U` desfà l'últim segment, `C` tanca fins al primer punt i acaba. Enter acaba.

### PLINE

Àlies: `PL`. Una polilínia de segments de línia i arc.

- `Especifiqueu el punt inicial`
- `Especifiqueu el punt següent [Arc (A)/Tanca (CL)/Desfés (U)]` (Tanca quan hi ha dos segments)
- `A` passa a arcs: `Especifiqueu el punt final de l'arc [Línia (L)/Tanca (CL)/Desfés (U)]`. Cada arc continua tangent al segment anterior. `L` torna a les línies, `CL` tanca amb un arc.
- Enter acaba; la polilínia queda oberta.

### CIRCLE

Àlies: `C`.

- `Especifiqueu el centre del cercle [3P/2P/Ttr (tangent tangent radi)]`
- `Especifiqueu el radi del cercle [Diàmetre] <últim radi>`; `D` demana `Especifiqueu el diàmetre del cercle`.
- `2P`: dos extrems d'un diàmetre. `3P`: tres punts sobre el cercle.
- `T` (també l'ordre `TTR`, i {{ui:Dibuix}} › {{ui:Més}} › {{ui:Cercle: Tan, Tan, Radi}}): `Especifiqueu el punt de l'objecte per a la primera tangent`, la segona, i després el radi (Enter: l'últim). El cercle toca els dos objectes (línies, arcs, cercles, segments de polilínia, també dins de blocs); dels cercles que ho fan, el que toca més a prop dels punts indicats. "El cercle no existeix" quan cap no encaixa.
- `TTT` (o {{ui:Dibuix}} › {{ui:Més}} › {{ui:Cercle: Tan, Tan, Tan}}): tres objectes; el cercle que els toca tots tres, el més proper als punts indicats (tres línies donen el cercle interior o un d'exterior, segons on indiqueu).

### ARC

Àlies: `A`.

- `Especifiqueu el punt inicial de l'arc [Centre (C)]`, `Especifiqueu el segon punt de l'arc`, `Especifiqueu el punt final de l'arc`: un arc per tres punts.
- `C`: `Especifiqueu el centre de l'arc`, `Especifiqueu el punt inicial de l'arc`, `Especifiqueu el punt final de l'arc`. L'arc va en sentit antihorari des de l'inici fins al final.

### RECTANG

Àlies: `REC`, `RECTANGLE`. Una polilínia tancada.

- `Especifiqueu la primera cantonada`, `Especifiqueu l'altra cantonada`. Escriviu `@amplada,alçada` per a la segona cantonada.

### POLYGON

Àlies: `POL`. Un polígon regular com a polilínia tancada.

- `Introduïu el nombre de costats <4>` (de 3 a 1024)
- `Especifiqueu el centre del polígon`
- `Introduïu una opció [Inscrit en cercle (I)/Circumscrit al cercle (C)] <I>`
- `Especifiqueu el radi del cercle`: feu clic o escriviu un punt; la seva distància fixa la mida i la seva direcció gira el polígon.

### ELLIPSE

Àlies: `EL`.

- `Especifiqueu l'extrem de l'eix de l'el·lipse [Centre (C)]`, `Especifiqueu l'altre extrem de l'eix`, `Especifiqueu la distància a l'altre eix`
- `C`: `Especifiqueu el centre de l'el·lipse`, `Especifiqueu l'extrem de l'eix`, i després la distància a l'altre eix.
- `I` (`Isocercle`, només mentre {{cmd:ISODRAFT}} és activat): centre, i després radi o `Diàmetre`: l'el·lipse que mostra un cercle al pla isomètric actual.

### HATCH

Àlies: `H`, `BH`, `BHATCH`; o {{ui:Trama}} a la barra d'eines. Imprimeix primer el patró, l'escala i l'angle actuals.

- `Indiqueu un punt intern [Selecciona objectes (S)/Patró (P)/Escala (SC)/Angle (A)]`, repetit (`Desfés (U)` quan ja hi ha una àrea): cada clic afegeix l'àrea tancada que l'envolta, amb les formes tancades que hi ha dins com a illes. Enter fa una sola trama de totes.
- `S`: `Seleccioneu objectes tancats` (polilínies tancades, cercles, el·lipses tancades).
- `P`: `Introduïu un nom de patró, SOLID, o ? per a la llista <actual>`. `SC`: `Especifiqueu l'escala del patró`. `A`: `Especifiqueu l'angle del patró`.
- `G` (Degradat): el farciment és un degradat en lloc d'un patró. Vegeu {{cmd:GRADIENT}} per a les seves preguntes.

Vegeu [Trama i omplir àrees](topic:hatch).

### GRADIENT

Àlies: `GD`. Omple una àrea amb un degradat d'un o de dos colors. Primer demana el degradat, i després continua com {{cmd:HATCH}} (`Indiqueu un punt intern`, `S` per a objectes tancats, {{key:Enter}} per acabar).

- `Introduïu una opció de degradat [Tipus/Un color/DOs colors/Angle/Centrat/eXit] <X>`, repetit; cada vegada imprimeix el degradat tal com és ara.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, o un d'ells invertit (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Les primeres lletres n'hi ha prou.
- `O`: un color, i després la seva intensitat de 0 a 1 (0 l'enfosqueix fins al negre, 0,5 és el color mateix, 1 l'aclareix fins al blanc). `TW`: el primer i el segon color. Un color és un nombre de l'1 al 255, tres nombres com `255,128,0`, o `#rrggbb`.
- `A`: l'angle del degradat. `C`: centrat Sí o No (No desplaça el centre del degradat cap a un costat).
- Refusa un color o un tipus que no coneix, i una intensitat fora de 0 a 1.

{{cmd:HATCHEDIT}} `G` i Propietats (Degradat) canvien un degradat més tard, o converteixen qualsevol trama en un. Un degradat es dibuixa a la pantalla i s'imprimeix. DWG 2004 i posteriors el guarden com a trama de degradat real; DXF 2000 i DWG 2000 el guarden per a CadCraft, i altres programes hi veuen un farciment sòlid del primer color.

### HATCHGENERATEBOUNDARY

Àlies: `HGB`. Torna a crear el contorn a partir d'una trama que l'ha perdut. `Seleccioneu trames` (o seleccioneu-les primer), i després `Enllaça cada trama al seu nou contorn, perquè la trama el segueixi? [Sí/No] <Sí>`.

- Cada bucle de la trama es converteix en una polilínia tancada a la capa de la trama; les noves polilínies queden seleccionades. Una vora corba torna com als trossos rectes curts que la trama conserva.
- Amb Sí, la trama segueix el seu nou contorn, com una trama feta amb {{cmd:HATCH}}. Un sol pas de desfer.
- Ho indica quan no s'ha seleccionat cap trama.

### POINT

Àlies: `PO`; o {{ui:Dibuix}} › {{ui:Més}} › {{ui:Punt}}. Objectes punt, un per clic, fins a Enter.

- `Especifiqueu un punt`

### XLINE

Àlies: `XL`; o {{ui:Dibuix}} › {{ui:Més}} › {{ui:Línia de construcció}}. Línies de construcció, il·limitades en els dos sentits. Vegeu [Línies de construcció i semirectes](topic:construction-lines).

- `Especifiqueu un punt [Hor/Ver/Ang/Bisec/Desfasa]`, i després `Especifiqueu el punt per on passa` per a cada línia, fins a Enter.
- `A`: `Introduïu l'angle de la línia de construcció [Referència] <0>`; `R` demana primer `Seleccioneu un objecte de línia`.
- `B`: `Especifiqueu el vèrtex de l'angle`, `Especifiqueu el punt inicial de l'angle`, i després `Especifiqueu el punt final de l'angle` per a cada línia.
- `O`: `Especifiqueu la distància de desfasament [Per punt] <Per punt>`, i després `Seleccioneu un objecte de línia` i `Especifiqueu el costat del desfasament` (o `Especifiqueu el punt per on passa`) per a cada línia.

### RAY

Sense àlies; o {{ui:Dibuix}} › {{ui:Més}} › {{ui:Semirecta}}. `Especifiqueu el punt inicial`, i després `Especifiqueu el punt per on passa` per a cada semirecta, fins a Enter.

### TEXT

Àlies: `DT`, `DTEXT`; o {{ui:Text}} a la barra d'eines. Text d'una línia; cada línia és un objecte propi.

- `Especifiqueu el punt inicial del text [Justifica (J)]`
- `J`: `Introduïu una opció [Esquerra/Centre/Dreta/Mig/TL/MC] <L>`, i després `Especifiqueu el punt d'inserció del text`
- `Especifiqueu l'alçada <alçada actual del text>`
- `Especifiqueu l'angle de rotació del text <0>`
- `Introduïu el text`, repetit: cada Enter comença la línia següent, més avall. Enter en una línia buida acaba. {{key:Space}} escriu un espai aquí.

### DIVIDE

Àlies: `DIV`. {{cmd:DIVIDE}} posa marques en una línia, arc, cercle, polilínia, spline o el·lipse que el divideixen en parts iguals. Indiqueu l'objecte, i després doneu el nombre de parts (de 2 a 32767). Un objecte obert rep una marca menys que parts; un de tancat rep també una marca al seu inici. L'objecte mateix no es talla. Les marques són punts; `Bloc` demana en lloc d'això un bloc d'aquest dibuix i si gira per seguir l'objecte. Les longituds sobre splines i el·lipses es mesuren per cordes curtes. Refusa text, trames i altres objectes sense longitud.

### MEASURE

Àlies: `ME`. {{cmd:MEASURE}} posa una marca cada longitud donada al llarg d'una línia, arc, cercle, polilínia, spline o el·lipse, comptant des de l'extrem més proper al lloc on heu indicat (un objecte tancat: des del seu inici). Doneu la longitud escrivint-la o amb dos punts. L'extrem llunyà d'un objecte obert no rep cap marca. `Bloc` posa un bloc a cada marca en lloc d'un punt. Refusa una longitud de 0, una més llarga que l'objecte, i una que donaria més de 32767 marques.

### BOUNDARY

Àlies: `BO`, `BPOLY`. {{cmd:BOUNDARY}} fa una polilínia tancada al voltant de l'àrea que conté el punt que indiqueu, a partir de les línies, arcs, cercles, polilínies i corbes que la limiten a la pantalla. Els trossos que són sobre un arc o cercle tornen com a segments d'arc; els trossos d'el·lipses i splines tornen com a segments rectes curts. Amb `Illes` activat (la configuració inicial), cada àrea tancada dins seu rep també la seva polilínia. Continueu indicant punts; Enter acaba. Els objectes que limiten l'àrea es queden com estan. Ho indica quan cap àrea tancada conté el punt.

### BLEND

{{cmd:BLEND}} dibuixa una spline entre els extrems de dues corbes obertes. Indiqueu cada corba prop de l'extrem que voleu unir. `CONtinuïtat` tria `Tangent` (la spline surt i arriba seguint les dues corbes) o `Suau` (a més, es corba com es corben als extrems); l'elecció es manté per a la sessió. Les dues corbes no es modifiquen. Refusa objectes tancats i dos extrems que ja coincideixen.

### REGION

Àlies: `REG`. {{cmd:REGION}} converteix objectes tancats en regions: àrees planes que podeu unir, tallar i mesurar. Seleccioneu cercles, polilínies tancades, el·lipses tancades o splines tancades, o línies, arcs i polilínies obertes que tanquen un bucle d'extrem a extrem; cada bucle es converteix en una regió i substitueix els objectes d'on venia. Els arcs es mantenen com a arcs; les el·lipses i les splines es converteixen en segments rectes curts. El que no és tancat ni tanca cap bucle es deixa com està, i ho indica amb quants són. Al dibuix, una regió és una o més polilínies tancades agrupades sense nom, de manera que un clic selecciona tota la regió i una còpia és una regió pròpia; altres programes que obren el fitxer hi veuen polilínies tancades.

Amb regions al dibuix, {{cmd:UNION}}, {{cmd:SUBTRACT}} i {{cmd:INTERSECT}} de la pestanya 2D treballen sobre regions: `UNION` uneix les regions seleccionades en una (les que estan separades esdevenen una regió de diversos contorns), `SUBTRACT` demana les regions de les quals restar i després les que s'han de treure (un forat continua essent part de la regió), `INTERSECT` manté l'àrea que totes comparteixen. Cadascuna indica l'àrea del resultat i és un sol pas de desfer. Refusen quan no quedaria res o quan no hi ha res en comú. A la pestanya 3D, i en un dibuix sense regions, les mateixes ordres treballen sobre sòlids com abans.

## Modifica

Àlies: `MT`, `T`; o {{ui:Paràgraf}} a la barra d'eines. Text de paràgraf que s'ajusta a una amplada, escrit al lloc.

- `Especifiqueu la primera cantonada`
- `Especifiqueu l'altra cantonada [Alçada (H)/Justifica (J)/Interlineat (L)/Rotació (R)/Amplada (W)]`: l'amplada entre les dues cantonades és on el text s'ajusta. `H` demana `Especifiqueu l'alçada`, `J` `Introduïu la justificació [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Introduïu el factor d'interlineat (0,25 a 4)`, `R` `Especifiqueu l'angle de rotació`, `W` `Especifiqueu l'amplada (0 per no ajustar)` i salta la segona cantonada.
- Després s'obre una caixa al dibuix: escriviu; {{key:Enter}} per a un paràgraf nou; {{key:Mod+Enter}} o un clic fora per acabar; {{key:Esc}} per cancel·lar. La seva barra defineix l'alçada, l'interlineat, l'amplada i la justificació. Vegeu [Afegir text i etiquetes](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Àlies: `ED`, `DDEDIT`; o feu doble clic en un text. `Seleccioneu un text per editar`, repetit fins a {{key:Enter}}: cada un s'obre a la mateixa caixa. Iniciat sobre un text seleccionat o amb doble clic, edita aquell i acaba.

### ERASE

Àlies: `E`, `DELETE`; o premeu {{key:Delete}} amb objectes seleccionats.

- `Seleccioneu objectes` (s'omet quan ja hi ha objectes seleccionats)

### MOVE

Àlies: `M`.

- `Seleccioneu objectes`
- `Especifiqueu el punt base [Desplaçament (D)]`, `Especifiqueu el segon punt`
- `D`: `Especifiqueu el desplaçament`, escrit com `dx,dy`.

### COPY

Àlies: `CO`, `CP`. Fa còpies tantes vegades com punts doneu.

`Matriu` a la indicació del segon punt fa una fila d'una sola vegada: doneu el nombre d'elements (l'original compta com un), i després el punt on va la primera còpia; les altres segueixen amb el mateix espaiat. `Ajusta` fa que aquest punt sigui el lloc de l'última còpia, amb les altres repartides uniformement entre mig.

- `Seleccioneu objectes`
- `Especifiqueu el punt base [Desplaçament (D)]`
- `Especifiqueu el segon punt [Desfés (U)]`, repetit fins a Enter. `U` treu l'última còpia.

### ROTATE

Àlies: `RO`.

- `Seleccioneu objectes`, `Especifiqueu el punt base`
- `Especifiqueu l'angle de rotació <últim angle>`: graus, positius en sentit antihorari; o feu clic en un punt per girar cap a ell.

### SCALE

Àlies: `SC`.

- `Seleccioneu objectes`, `Especifiqueu el punt base`
- `Especifiqueu el factor d'escala`: escriviu un factor com `0.5` o `2`. Un punt indicat dona com a factor la seva distància al punt base.

### MIRROR

Àlies: `MI`.

- `Seleccioneu objectes`
- `Especifiqueu el primer punt de l'eix de simetria`, `Especifiqueu el segon punt de l'eix de simetria`
- `Esborrar els objectes d'origen? [Sí/No] <N>`

### ALIGN

Àlies: `AL`; o {{ui:Modifica}} › {{ui:Més}} › {{ui:Alinea}}.

- `Seleccioneu objectes`
- `Especifiqueu el primer punt d'origen`, `Especifiqueu el primer punt de destinació`
- `Especifiqueu el segon punt d'origen (Enter per continuar)`, `Especifiqueu el segon punt de destinació`
- `Especifiqueu el tercer punt d'origen (Enter per continuar)`, `Especifiqueu el tercer punt de destinació`
- Amb dos parells: `Escalar els objectes segons els punts d'alineació? [Sí/No] <N>`

Vegeu [Alinear objectes](topic:modify-objects#align-objects).

### ALIGNTO

- `Seleccioneu objectes` (o la selecció), `Alinea [Esquerra/Centre/Dreta/Superior/Mig/Inferior] <Esquerra>`, `A [Selecció/Primer/Últim/Punt] <Selecció>`; `P` demana el punt. La selecció es manté.

### DISTRIBUTE

- `Seleccioneu objectes` (almenys tres), `Distribueix [Horitzontalment/Verticalment] <Horitzontalment>`, `Espaia uniformement [Centres/Espais] <Espais>`. Els dos de fora es mantenen; la selecció es manté.

### ALIGNPANEL

Àlies: `ALP`; o {{ui:Modifica}} › {{ui:Més}} › {{ui:Alinea i distribueix}}. Obre el tauler que executa ALIGNTO i DISTRIBUTE amb clics.

### LASER

Àlies: `LASERCUT`; o {{ui:Vista}} › {{ui:Més}} › {{ui:Làser…}}. Obre el tauler Làser sobre el dibuix: què fa cada capa (tall, marcatge, gravat, farciment, imatge), la vista prèvia, el codi G GRBL per desar, i l'enquadrament i l'enviament per Web Serial. Vegeu [Enviar un dibuix a un làser](topic:laser-cutting).

### STRETCH

Àlies: `S`; o {{ui:Estira}}. `Seleccioneu objectes per estirar`: arrossegueu finestres d'intersecció (o escriviu `C`) sobre els extrems per moure. `Especifiqueu el punt base [Desplaçament (D)]`, `Especifiqueu el segon punt`. Els punts dins les finestres es mouen: extrems de línia, vèrtexs de polilínia (els segments d'arc mantenen la seva alçada), punts de cota; cercles, el·lipses, text, punts i blocs es mouen sencers quan el seu centre o punt d'inserció és dins. Una selecció feta abans de l'ordre manté les finestres d'intersecció (i els llaços) que la van fer, de manera que estiren igual. Sense finestra, els objectes es mouen sencers.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Àlies: `AR`; o {{ui:Matriu}}. `Seleccioneu objectes`, i després `Introduïu el tipus de matriu [Rectangular/POlar] <Rectangular>` (només ARRAY).

- Rectangular comença amb 4 columnes × 3 files, espaiades 1,5 vegades la mida dels objectes, mostrat com a vista prèvia. `Introduïu una opció [COUnt/Espaiat/COLumnes/Files/eXit] <X>`: `COU` demana columnes i files, `S` les distàncies entre columnes i entre files (negatiu vol dir cap a l'esquerra o avall), `COL` i `R` una direcció cadascuna.
- Polar demana `Especifiqueu el punt central de la matriu`, comença amb 6 elements tots al voltant, girats. `Introduïu una opció [Elements/Angle d'omplert/GIra elements/eXit] <X>`: `I` elements, `F` l'angle a omplir (+ antihorari, − horari), `ROT` Sí o No.
- {{key:Enter}} (eXit) fa les còpies, com a objectes simples. Un sol pas de desfer.
- `AS` (Associatiu) alterna entre còpies simples i una matriu que continua editable: un objecte que canvieu després amb {{cmd:ARRAYEDIT}}, pels seus nanses o a Propietats. L'elecció es recorda ({{cmd:ARRAYASSOCIATIVITY}}); comença amb còpies simples.

### ARRAYPATH

Còpies al llarg d'una corba. `Seleccioneu objectes`, i després `Seleccioneu la corba del camí`: una línia, arc, cercle, el·lipse, polilínia o spline (no un dels objectes que es matricen). El camí comença a l'extrem més proper als objectes, i el primer element són els objectes allà on estan.

- `Introduïu una opció [Mètode/Elements/Espaiat/Alinea/ASsociatiu/eXit] <X>`, amb vista prèvia. `M`: `Dividir` reparteix els elements uniformement per tot el camí, `Mesurar` en posa un cada tant de llarg. `I`: el nombre d'elements (amb Mesurar, 0 vol dir tants com hi càpiguen; un nombre més enllà del final del camí es limita al que hi cap). `SP`: la distància entre elements al llarg del camí (passa a Mesurar). `AL`: Sí fa girar cada element perquè segueixi el camí, No els deixa rectes.
- `AS` com a {{cmd:ARRAY}}. Amb ell activat, la matriu guarda la seva pròpia còpia de la forma del camí: editar després la corba del camí no mou els elements.
- Refusa un camí que no és una corba, i un sol element.

### ARRAYEDIT

Canvia una matriu feta amb ASsociatiu. `Seleccioneu la matriu` (o seleccioneu-la primer). Imprimeix com és ara i després pregunta fins a {{key:Enter}}:

- Rectangular: `COL` columnes i el seu espaiat, `R` files i el seu espaiat, `A` l'angle en què van les columnes.
- Polar: `I` elements, `F` l'angle d'omplert, `ROT` gira els elements Sí o No.
- Camí: `M` Dividir o Mesurar, `I` elements, `SP` espaiat, `AL` alinea amb el camí.
- `S` (Origen) obre els objectes que la matriu repeteix, per si sols, com l'editor de blocs. Dibuixeu i editeu allà; {{cmd:ARRAYCLOSE}} desa o descarta, i cada element segueix.
- `REP` (REPlace): `Seleccioneu els objectes de substitució`, `Especifiqueu el punt base dels objectes de substitució`, després feu clic als elements a substituir, i {{key:Enter}}. Aquests elements mostren la substitució en lloc seu; els objectes de substitució surten del dibuix i queden dins la matriu. `RES` (RESet) mostra de nou els objectes d'origen a cada element.
- Cada canvi és un sol pas de desfer. Refusa còpies simples, una referència de bloc simple i una matriu en una capa bloquejada.

Els mateixos valors són a Propietats, sota Matriu, i la matriu té nanses: el seu punt base la mou, la nansa del segon element fixa l'espaiat, la nansa després de l'últim element fixa el nombre (polar: el segon element fixa quants elements, l'últim l'angle d'omplert). {{cmd:EXPLODE}} torna una matriu a còpies simples.

### ARRAYCLOSE

Acaba {{cmd:ARRAYEDIT}} Origen: `Desar els canvis als objectes d'origen de la matriu? [Desa/Descarta] <Desa>`. Ho indica quan cap objecte d'origen de matriu és obert. {{cmd:BCLOSE}} fa el mateix.

### ARRAYASSOCIATIVITY

`Introduïu un nou valor per a ARRAYASSOCIATIVITY (1 = les matrius continuen editables, 0 = còpies simples)`. Defineix amb què comencen {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR i {{cmd:ARRAYPATH}}; la seva opció `AS` canvia la mateixa configuració. Es recorda en aquest navegador.

### OFFSET

Àlies: `O`. Línies, arcs, cercles i polilínies.

Quan una polilínia s'allunya cap a fora i els seus segments rectes se separen en una cantonada, {{cmd:OFFSETGAPTYPE}} decideix com es tanca l'espai.

- `Especifiqueu la distància de desfasament [Per punt] <última distància, o Per punt>`
- `Seleccioneu l'objecte a desfasar`, i després `Especifiqueu el punt del costat del desfasament` (o, amb Per punt, `Especifiqueu el punt per on passa`), repetit fins a Enter.

### OFFSETGAPTYPE

- `Espais de cantonada del desfasament: 0 allarga, 1 arrodoneix, 2 xamfrana`: com {{cmd:OFFSET}} tanca els espais a les cantonades exteriors d'una polilínia. `0` allarga els segments fins que es troben (la configuració inicial), `1` els uneix amb un arc al voltant de l'antiga cantonada, `2` amb un tall recte. Les cantonades interiors i els segments d'arc no es veuen afectats. Es manté per a aquesta sessió.

### EXTRIM

{{cmd:EXTRIM}} talla tot el que hi ha a un costat d'una vora. Indiqueu la vora de tall (una línia, arc, cercle, polilínia, el·lipse, spline o línia de construcció), i després un punt del costat a buidar: cada línia, arc, cercle, polilínia i línia de construcció que creua la vora perd la seva part en aquell costat, des de la vora. Mentre trieu el costat, les parts que s'eliminarien segueixen el punter. Per a una vora tancada, els costats són l'interior i l'exterior. Els objectes que només toquen la vora, i el text, les trames, les splines i les el·lipses que la creuen, es deixen com estan. Un sol pas de desfer.

### TRIMEXTENDMODE

- `Introduïu un nou valor per a TRIMEXTENDMODE (1 Ràpid, 0 Estàndard)`: com comencen {{cmd:TRIM}} i {{cmd:EXTEND}}. `1` Ràpid: cada objecte és una vora de tall o un límit. `0` Estàndard: primer demanen les vores. També `(setvar "TRIMEXTENDMODE" 0)` en LISP.

### TRIM

Àlies: `TR`. Primer imprimeix `Configuració actual: mode Ràpid (TRIMEXTENDMODE 1), vores: No allarga, arrossegar dibuixa un camí`. En mode Ràpid cada objecte visible és una vora de tall, i un objecte que no creua res s'esborra; en mode Estàndard primer pregunta `Seleccioneu les vores de tall (Enter = cada objecte)` i només talla en aquestes.

- `Seleccioneu l'objecte a retallar o Maj+clic per allargar [Vores de tall (T)/Tanca (F)/Intersecció (C)/Mode (O)/Vora (E)/Esborra (R)/Desfés (U)]`, repetit: feu clic al tros que voleu treure (es mostra gris i discontinu mentre el punter hi és), arrossegueu un camí per diversos trossos (tots van en un sol pas), o feu clic en dos llocs buits per a una tanca entre ells. {{key:Shift}} allarga en lloc de retallar. `T` tria les vores de tall (mode Estàndard), `F` demana punts de tanca, `C` dues cantonades de finestra (els trossos parcialment dins també van), `O` demana `Introduïu una opció de mode de retall [Ràpid/Estàndard]`, `E` demana `Introduïu un mode d'extensió de vora implícita [Allarga/No allarga]` (EDGEMODE), `R` esborra els objectes que seleccioneu, `U` desfà l'última selecció o arrossegament. Enter acaba. Vegeu [Retallar i allargar](topic:trim-and-extend).

- Un clic sobre una trama la talla: les vores de tall divideixen l'àrea amb trama, i el tros que heu clicat s'elimina (no queda cap contorn dibuixat al seu lloc). La trama manté el seu patró o degradat; una trama que estava enllaçada al seu contorn ja no ho està després, perquè ja no l'omple. Ho indica quan cap vora de tall divideix allà la trama, quan el clic és fora de la trama, i quan no quedaria res (feu servir {{cmd:ERASE}}). Un camí o una tanca arrossegats no retallen trames.

### EXTEND

Àlies: `EX`. Igual que TRIM però al revés: `Seleccioneu l'objecte a allargar o Maj+clic per retallar [Vores límit/Tanca/Intersecció/Mode/Vora/Desfés]`. Un clic allarga l'extrem més proper fins a la següent vora límit; un camí o una tanca arrossegats allarguen cada objecte que creuen; {{key:Shift}} retalla. `B` tria les vores límit (mode Estàndard). Mode i Vora es comparteixen amb TRIM.

### LINKVIEWS

Àlies: `SYNCVIEWS`; o {{ui:Vista}} › {{ui:Més}} › {{ui:Enllaça les vistes dels panells}}, o la icona d'enllaç a les pestanyes del dibuix. `Enllaça les vistes dels panells [ON/OFF]` (Enter agafa l'altre estat): mentre és activat, un desplaçament o un zoom al panell actiu mou tots els panells que mostren el mateix tipus d'espai. Vegeu [Dividir la pantalla](topic:split-screen).

### OPENIN3D

Sense àlies; o {{ui:Vista}} › {{ui:Més}} › {{ui:Obre a ModelCraft}}, on l'aplicació de modelatge 3D rep un dibuix lliurat. L'obre allà en una pestanya nova, com a DWG (no es puja res). Si el navegador bloqueja la pestanya, ho diu.

### LASSOMODE

`Introduïu un nou valor per a LASSOMODE (1 = llaç, 0 = rectangle)`: què dibuixa prémer i arrossegar en un lloc buit. El mateix que Configuració › CadCraft › Arrossegar per seleccionar. Vegeu [Selecció amb llaç](topic:lasso-selection).

### FILLET

Àlies: `F`. Línies, arcs, cercles i polilínies. Primer imprimeix `Configuració actual: Mode = TRIM, Radi = 0`.

- `Seleccioneu el primer objecte [Desfés (U)/Polilínia (P)/Radi (R)/Retalla (T)/Múltiple (M)]`
  - `R` demana `Especifiqueu el radi d'empalme <últim>`. `T` demana `Introduïu una opció de mode de retall [Retalla/No retallis]`: amb No retallis els objectes es queden com estan i només s'afegeix l'arc.
  - `M` manté l'ordre per a més cantonades fins a {{key:Enter}}; `U` treu l'última cantonada sense sortir de l'ordre.
  - `P` demana `Seleccioneu una polilínia 2D [Radi]` i arrodoneix cada cantonada on es troben dos segments rectes. Els empalmes que ja té se substitueixen pel nou radi; el radi 0 els treu. Les cantonades amb costats massa curts per al radi es deixen i es compten.
- `Seleccioneu el segon objecte o Maj+clic per aplicar la cantonada [Radi]`. Manteniu {{key:Shift}} en fer clic per una cantonada viva, sigui quin sigui el radi.

Feu clic a cada objecte en la part que voleu conservar. Dues línies que no es toquen s'allarguen. Dues línies paral·leles reben un semicercle que travessa l'espai, a l'extrem de la primera línia més proper al vostre clic. Un cercle mai es talla. Dos segments d'una mateixa polilínia que són seguits reben l'arc dins la polilínia; una polilínia i un altre objecte funcionen quan el tall cau sobre el primer o últim segment de la polilínia.

### CHAMFER

Àlies: `CHA`. Línies i els segments rectes de polilínies. Primer imprimeix les distàncies actuals (o la longitud i l'angle).

- `Seleccioneu la primera línia [Desfés (U)/Polilínia (P)/Distància (D)/Angle (A)/Retalla (T)/mEtode (E)/Múltiple (M)]`
  - `D` demana `Especifiqueu la primera distància del xamfrà <última>` i `Especifiqueu la segona distància del xamfrà <la primera>`: la primera es talla de la primera línia que trieu, la segona de l'altra.
  - `A` demana `Especifiqueu la longitud del xamfrà a la primera línia` i `Especifiqueu l'angle del xamfrà respecte a la primera línia`.
  - `E` (mEtode) tria quina de les dues fa servir el següent xamfrà. `T`, `M`, `U` i `P` funcionen com a {{cmd:FILLET}}.
- `Seleccioneu la segona línia o Maj+clic per aplicar la cantonada [Distància/Angle/mEtode]`. {{key:Shift}}+clic fa una cantonada viva.

Una distància més llarga que la línia es refusa (`La distància és massa gran.`).

### BREAK i BREAKATPOINT

Àlies: `BR`. `Seleccioneu l'objecte` (on feu clic és el primer punt), `Especifiqueu el segon punt de trencament [Primer punt (F)]`; `F` demana `Especifiqueu el primer punt de trencament` i `Especifiqueu el segon punt de trencament`. La part entre ells desapareix; en un cercle, en sentit antihorari des del primer punt. BREAKATPOINT demana `Especifiqueu el punt de trencament` i divideix l'objecte en dos en aquell punt (no un cercle).

### LENGTHEN

Àlies: `LEN`. `Seleccioneu un objecte per mesurar [Delta/Percentatge/Total/DInàmic]`: un clic imprimeix `Longitud actual` (i l'angle inclòs d'un arc) i torna a preguntar. `DE` demana `Introduïu la longitud delta (negativa escurça) [Angle]`, `P` `Introduïu el percentatge de longitud`, `T` `Especifiqueu la longitud total [Angle]`, `DY` arrossega. Després `Seleccioneu un objecte per canviar [Desfés (U)]`, repetit: s'hi mou l'extrem més proper al clic. Línies, arcs i polilínies obertes.

### JOIN

Àlies: `J`. `Seleccioneu objectes per unir`. Línies, arcs i polilínies obertes que es toquen d'extrem a extrem esdevenen polilínies (tancades quan la cadena es tanca); les línies d'una mateixa recta esdevenen una sola línia; els arcs d'un mateix cercle esdevenen un arc o el cercle. L'historial diu quants objectes s'han unit i quants no.

### MATCHPROP

Àlies: `MA`, `PAINTER`. `Seleccioneu l'objecte d'origen`, i després `Seleccioneu els objectes de destinació [Configuració (S)]` i {{key:Enter}}. Copia la capa i el color, i entre objectes del mateix tipus l'alçada i amplada del text, les mides de cota o el patró de trama. `S` demana `Activa o desactiva una propietat [Color/Capa/Text/Cota/Trama]`, repetit fins a {{key:Enter}}; l'elecció es recorda per a la sessió.

### EXPLODE

Àlies: `X`. Les polilínies es converteixen en línies i arcs, les referències de bloc en els seus objectes, i les cotes en línies, punts de fletxa i text. Una matriu que continua editable ({{cmd:ARRAYEDIT}}) es converteix en còpies simples dels seus objectes.

- `Seleccioneu objectes`

### GROUP

Àlies: `G`. {{cmd:GROUP}} dona als objectes seleccionats un nom comú. Seleccioneu els objectes, i després escriviu un nom (sense espais; `?` llista els grups; Enter fa un grup sense nom) i, per a un grup amb nom, una descripció opcional. A partir d'aquí, un clic en un d'ells, o una finestra que n'agafa un, els selecciona tots, de manera que es mouen, es copien i s'esborren junts; cada objecte continua essent un objecte propi. Un objecte pot estar en diversos grups. Una còpia d'un grup sencer és un grup nou sense nom; una còpia d'un sol membre per si mateix s'uneix al grup. Els grups pertanyen a l'espai on es van fer (el model o un full). Es conserven en desar com a DWG o DXF i tornar a obrir el fitxer a CadCraft; els fitxers DXF 2000 els porten també com a objectes de grup per a altres programes, i els grups fets en un altre programa es llegeixen en obrir un DXF o DWG.

### UNGROUP

{{cmd:UNGROUP}} desfà grups: seleccioneu objectes dels grups (es desfà cada grup on són) o escriviu `Nom` i el nom del grup. Els objectes es queden al dibuix. Un sol pas de desfer els torna a formar.

### GROUPEDIT

{{cmd:GROUPEDIT}} canvia un grup. Indiqueu un dels seus objectes, o `Nom` i el seu nom; un grup que ja és seleccionat es pren tal com és. Després: `Afegeix` objectes (un a un, no grup per grup), `Elimina` objectes, `REanomena` el grup, canvia la seva `Descripció`, o defineix `Seleccionable` (si un clic en un objecte selecciona el grup sencer). `eXit` o Enter acaba. Un grup sense objectes desapareix.

### PICKSTYLE

- `Selecció de grup: 0 un clic selecciona un objecte, 1 tot el seu grup`: amb `1` (la configuració inicial) un clic o una finestra sobre un objecte agrupat selecciona tot el grup; amb `0`, objectes individuals, de manera que podeu editar un sol membre. Es manté per a aquesta sessió.

## Porta-retalls

El porta-retalls propi de CadCraft: funciona dins d'un dibuix, entre dibuixos i entre pestanyes de CadCraft en aquest navegador. Vegeu [Copiar, enganxar i duplicar](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, o {{ui:Copia}} al grup {{ui:Edita}}. Copia objectes al porta-retalls, amb els blocs i les capes que fan servir. Els objectes queden seleccionats.

- `Seleccioneu objectes per copiar` (s'omet quan ja hi ha objectes seleccionats)

### CUTCLIP

{{key:Mod+X}}, o {{ui:Retalla}} al menú {{ui:Més}}. Copia objectes al porta-retalls i després els esborra (un sol pas de desfer).

- `Seleccioneu objectes per retallar` (s'omet quan ja hi ha objectes seleccionats)

### COPYBASE

Copia objectes al porta-retalls amb un punt base que indiqueu; en enganxar, aquell punt es col·loca.

- `Especifiqueu el punt base`
- `Seleccioneu objectes per copiar`

### PASTECLIP

{{key:Mod+V}}, o {{ui:Enganxa}} al grup {{ui:Edita}}. La còpia segueix el cursor, penjant de la cantonada inferior esquerra de la seva extensió (o del seu centre, o del punt de COPYBASE; vegeu [Configuració de CadCraft](topic:settings)).

- `Especifiqueu el punt d'inserció`

Els objectes enganxats queden seleccionats. Un bloc que el dibuix ja té amb el mateix nom conserva la definició d'aquest dibuix.

Quan una àrea copiada a MarkupCraft és més nova que el que va copiar CadCraft (i té menys de 6 hores), {{key:Mod+V}} i `PASTECLIP` enganxen aquella àrea en lloc seu: vegeu `PASTEAREA`.

### PASTEAREA

Àlies: `PAREA`. {{ui:Enganxa una àrea copiada}} al menú {{ui:Més}}. Enganxa una àrea copiada amb {{ui:Copia àrea}} a MarkupCraft com a imatge a la seva mida real. Vegeu [Imatges en un dibuix](topic:pictures).

- `Especifiqueu la cantonada inferior esquerra de l'àrea copiada`
- `Escala la seva mida de paper per (100 per a un full 1:100; Punts: dos punts sobre ella i la seva distància real) [Punts] <1>` (només quan el full no tenia escala de dibuix): un nombre, {{key:Enter}} per a la mida de paper, o `P`, i després `Primer punt de l'àrea enganxada`, `Segon punt de l'àrea enganxada` i la seva distància real.

### PASTEORIG

{{key:Mod+Shift+V}}, o {{ui:Enganxa al mateix lloc}} al menú {{ui:Més}}. Enganxa a les coordenades des d'on es van copiar els objectes. No pregunta res.

### DUPLICATE

Àlies: `DUP`. {{key:Mod+D}}, o {{ui:Duplica i mou}} al menú {{ui:Més}}. Una còpia dels objectes es mou amb el punter des d'on és; {{key:Esc}} no deixa res. No fa servir el porta-retalls.

- `Seleccioneu objectes per duplicar` (s'omet quan ja hi ha objectes seleccionats)
- `Especifiqueu on va la còpia (Esc no deixa res)`: feu clic, escriviu un punt, `@dx,dy` (des d'on era el punter), o una distància cap al cursor.

### SELECT

Demana `Seleccioneu objectes` (amb totes les opcions de sota) i deixa seleccionat el que heu triat, per a la següent ordre o per a `P` més tard.

### QSELECT

Àlies: `QS`. Al navegador, el diàleg {{ui:Selecció ràpida}} (vegeu [Seleccionar objectes](topic:select-objects#select-by-a-rule-quick-select)). Sense ell, la línia d'ordres demana `Introduïu el tipus d'objecte`, `Introduïu la propietat`, `Introduïu l'operador [=/<>/>/</*/Selecciona-ho tot] <=>` i `Introduïu el valor`. Les coincidències passen a ser la selecció.

### SELECTSIMILAR

Àlies: `SIM`. `Seleccioneu objectes [Configuració (SE)]` (o la selecció actual): selecciona cada objecte del mateix tipus amb la mateixa capa i el mateix color (i el mateix nom de bloc i patró de trama). `SE` demana `Activa o desactiva una propietat [Capa/COlor/Nom/PAtró/Alçada]`, repetit fins a {{key:Enter}}.

### FIND

Sense àlies; o {{ui:Edita}} › {{ui:Més}} › {{ui:Cerca i reemplaça}}. Al navegador, el diàleg {{ui:Cerca i reemplaça}} (vegeu [Afegir text i etiquetes](topic:text#find-and-replace-words)). Sense ell: `Introduïu el text a cercar`, i després `Introduïu el text de reemplaçament (Enter: selecciona el que es troba)`. Busca en text, valors d'atributs i text de cota, a la pestanya oberta o a la selecció.

### SELECTALL i DESELECT

`SELECTALL` (àlies `AI_SELALL`, {{key:Mod+A}}) selecciona cada objecte que podeu editar a la pestanya oberta. `DESELECT` (àlies `AI_DESELECT`, `SELECTNONE`; o {{key:Esc}}) esborra la selecció.

## Cotes

### DIMLINEAR

Àlies: `DLI`, `DIMLIN`. Distància horitzontal o vertical.

- `Especifiqueu l'origen de la primera línia d'extensió [Selecciona objecte (S)]` (Enter o `S`: `Seleccioneu l'objecte a acotar`, i després feu clic en un segment de línia, arc, cercle o polilínia)
- `Especifiqueu l'origen de la segona línia d'extensió`
- `Especifiqueu la ubicació de la línia de cota [Text (T)/Horitzontal (H)/Vertical (V)/Girada (R)]`. `T` demana el text (`<>` és el valor mesurat), `H` i `V` fixen la direcció, `R` demana `Especifiqueu l'angle de la línia de cota <0>`.

### DIMALIGNED

Àlies: `DAL`, `DIMALI`. La distància real entre dos punts.

- Orígens com a {{cmd:DIMLINEAR}}, i després `Especifiqueu la ubicació de la línia de cota [Text (T)]`.

### DIMANGULAR

Àlies: `DAN`, `DIMANG`.

- `Seleccioneu un arc, cercle o línia, o Enter per a un vèrtex`
- Arc: el seu angle. Cercle: `Especifiqueu el segon extrem de l'angle`. Línia: `Seleccioneu la segona línia`. Enter: `Especifiqueu el vèrtex de l'angle`, `Especifiqueu el primer extrem de l'angle`, `Especifiqueu el segon extrem de l'angle`.
- `Especifiqueu la ubicació de la línia de cota [Text (T)]`: feu clic dins l'angle per mesurar.

### DIMRADIUS i DIMDIAMETER

Àlies: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Seleccioneu un arc o cercle`, i després `Especifiqueu la ubicació de la línia de cota [Text (T)]`.

### DIMCONTINUE

Àlies: `DCO`, `DIMCONT`. Continua des de l'última cota lineal o alineada feta (o demana `Seleccioneu una cota lineal o alineada`).

- `Especifiqueu el segon origen de la línia d'extensió [Desfés (U)]`, repetit fins a Enter.

### DIMBASELINE

Àlies: `DBA`, `DIMBASE`. Com {{cmd:DIMCONTINUE}}, però cada cota comença al primer origen i s'apila més enllà.

### DIMORDINATE

Àlies: `DOR`, `DIMORD`. `Especifiqueu la ubicació de l'element`, i després `Especifiqueu l'extrem de la línia de crida [Coordenada X/Coordenada Y/Text (T)]`. Escriu quant és l'element des de l'origen del SCU en X o en Y, en una línia de crida: una línia de crida que va sobretot amunt o avall llegeix X, una que va de costat llegeix Y; `Coordenada X` i `Coordenada Y` en fixen la direcció. Definiu primer l'origen amb {{cmd:UCS}} (sense cap, és el 0,0 del dibuix). Les nanses mouen l'element, l'origen i l'extrem de la línia de crida, i el valor en segueix. Es desa com a cota de coordenada real en DWG i DXF. Refusa un extrem de línia de crida sobre el mateix element.

### DIMARC

Àlies: `DAR`. `Seleccioneu un arc o un segment d'arc de polilínia`, i després `Especifiqueu la ubicació de la cota de longitud d'arc [Text (T)]`. Mesura al llarg de l'arc (no la corda) i escriu el símbol d'arc davant del valor. Refusa un cercle complet, una línia o un segment recte de polilínia. Un DWG la guarda com a cota de longitud d'arc; un DXF la guarda com a cota angular amb la longitud com a text, i CadCraft la torna a obrir com a cota de longitud d'arc.

### DIMJOGGED

Àlies: `DJO`, `JOG`. `Seleccioneu un arc o cercle`, `Especifiqueu la substitució de la ubicació del centre`, `Especifiqueu la ubicació de la ziga`. Una cota de radi per a una corba el centre de la qual és lluny o fora del full: la línia de cota comença al punt que doneu en lloc del centre, amb una ziga, i encara escriu el radi real. Un DWG la guarda com a cota de radi amb ziga; un DXF la guarda com a cota de radi, i CadCraft la torna a obrir amb ziga.

### DIMJOGLINE

Àlies: `DJL`. `Seleccioneu una cota per afegir una ziga [Elimina (R)]`, i després `Especifiqueu la ubicació de la ziga (o premeu Enter)`. Posa un símbol de ziga a la línia d'una cota lineal o alineada, per mostrar que la distància no és a escala; el valor no canvia. `Elimina` la treu. Refusa altres tipus de cota.

### QDIM

Sense àlies. `Seleccioneu la geometria a acotar`, i després `Especifiqueu la posició de la línia de cota [Contínua (C)/Esglaonada (S)/De base (B)/Coordenada (O)/Radi (R)/Diàmetre (D)/punt de referència (P)]`. Acota diversos objectes en un sol pas, des dels extrems de línies i segments de polilínia, els centres de cercles i arcs, punts i referències de bloc. Una posició per sobre o per sota dels objectes mesura de través, i una al costat, mesura en vertical. `Contínua` encadena els punts, `De base` mesura tots des del primer, `Esglaonada` aparella parells des del mig cap a fora, `Coordenada` dona a cada punt la seva distància al punt de referència (`punt de referència` en tria un de nou), `Radi` i `Diàmetre` acoten cada cercle i arc indicats. El mode es recorda. Tot el que fa és un sol pas de desfer. Ho indica quan hi ha menys de dos punts, o cap arc ni cercle per a Radi i Diàmetre.

### DIMBREAK

Àlies: `DBREAK`. `Seleccioneu cotes per afegir o treure trencaments`, i després `Trenca on creuen altres objectes [Auto/Manual/Elimina] <Auto>`. `Auto` deixa un buit a la línia de cota i a les línies d'extensió on creua algun altre objecte, i el torna a calcular quan aquests objectes o la cota es mouen. `Manual` (una sola cota) demana dos punts i deixa un buit entre ells. `Elimina` treu tots els buits. El buit és 1,5 vegades l'alçada del text de la cota.

### DIMSPACE

Sense àlies. `Seleccioneu la cota base`, `Seleccioneu les cotes a espaiar`, `Introduïu el valor d'espaiat o Auto <Auto>`. Mou les línies de cota de cotes lineals i alineades paral·leles (o angulars sobre el mateix vèrtex) perquè quedin a la mateixa distància, comptada des de la cota base, cadascuna al costat on està. `0` les alinea amb la base; `Auto` és el doble de l'alçada del text de la cota base. Les cotes que no són paral·leles a la base es deixen estar.

### DIMINSPECT

Sense àlies. `Seleccioneu cotes`, `Forma del marc d'inspecció [Rodona/Angular/Cap/elimina] <Rodona>`, `Introduïu l'etiqueta`, `Introduïu la freqüència d'inspecció <100%>`. Dibuixa un marc al voltant del valor, amb una etiqueta abans i la freqüència d'inspecció després. `elimina` el treu. El text de tolerància es queda amb el valor.

### DIMOVERRIDE

Àlies: `DOV`, `DIMOVER`. `Introduïu el nom de la variable de cota a substituir o Esborra`, `Introduïu un nou valor per a …`, de nou fins a Enter, i després `Seleccioneu cotes`. Canvia aquests paràmetres només a les cotes seleccionades; l'estil de cota no canvia. Accepta les variables que són un nombre o un interruptor (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Esborra` torna les cotes seleccionades al seu estil. Refusa un nom que no és una variable així i un valor que no pot prendre.

### DIMREASSOCIATE

Àlies: `DRE`, `DIMREASSOC`. `Seleccioneu cotes`, i després, per a cadascuna, els seus orígens de línia d'extensió (`Especifiqueu el primer origen de la línia d'extensió sobre un objecte`: s'enganxa a un extrem o al mig d'una línia, a una cantonada de polilínia, a un centre; Enter deixa aquell punt lliure), o, per a una cota de radi, diàmetre, radi amb ziga o longitud d'arc, `Seleccioneu un arc o cercle`. La cota queda lligada a aquells objectes: quan es mouen o canvien de mida, la segueix en el mateix pas de desfer i es torna a mesurar. Moure a mà un punt lligat, o esborrar l'objecte, trenca el lligam. El lligam es desa en DWG i DXF 2000 com a dades pròpies de CadCraft; altres programes hi veuen una cota normal.

### DIMDISASSOCIATE

Àlies: `DDA`, `DIMDISASSOC`. `Seleccioneu cotes`. Les allibera dels objectes als quals estan lligades; no es mou res.

### CENTERMARK

Àlies: `CM`, `DIMCENTER`, `DCE`. `Seleccioneu un cercle o arc per afegir la marca de centre`, de nou fins a Enter. Dibuixa una creu al centre i quatre línies de centre que arriben just més enllà de la corba (tipus de línia CENTER), com a línies simples a la capa actual; la mida ve de la mida de la punta de fletxa i de l'escala general de la configuració de cota actual, i gira amb el SCU. No segueixen el cercle si aquest es mou.

### CENTERLINE

Àlies: `CL`. `Seleccioneu la primera línia`, `Seleccioneu la segona línia`. Dibuixa una línia a mig camí entre dues línies (per la bisectriu quan es toquen), una mica més llarga que elles, en tipus de línia CENTER. És una línia simple: no segueix les dues línies.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Sense àlies. Cadascuna demana `Introduïu un nou valor per a … <actual>` i fixa aquella mida per a cotes **noves**: escala general, alçada del text, mida de la punta de fletxa, decimals (fins a 8), espai al voltant del text, extensió més enllà de la línia de cota, desplaçament des de l'origen. Vegeu [Definir mides de cota](topic:dimension-settings).

### DIMLUNIT

Paràmetre de cota: el format de longitud només de les cotes noves (1 científic, 2 decimal, 3 enginyeria, 4 arquitectònic, 5 fraccionari).

### DIMSTYLE i -DIMSTYLE

Àlies: `DST`, `DDIM`, `D`. El gestor d'estils de cota: {{ui:Estableix com a actual}}, {{ui:Nou…}}, {{ui:Modifica…}}, {{ui:Canvia el nom…}}, {{ui:Suprimeix}}, {{ui:Compara…}}, {{ui:Aplica a la selecció}}. `-DIMSTYLE` a la línia d'ordres: `Estil de cota [Restaura/Desa/Elimina/Aplica/Compara/reNomena/Llista]`. Vegeu [Definir mides de cota](topic:dimension-settings#named-dimension-styles).

### DIMEDIT i DIMTEDIT

`DIMEDIT` (`DED`): `Edició de cota [Inici/Nou/Gira/Obliqua] <Inici>`, i després les cotes (o les ja seleccionades). Nou demana el text (`<>` = el mesurament); Gira un angle (0 torna el text al seu lloc); Obliqua l'angle de les línies d'extensió respecte a l'eix X (Enter = cap; només cotes lineals i alineades). `DIMTEDIT` (`DIMTED`): `Text de cota [Esquerra/Dreta/Centre/Inici/Angle] <Centre>`. Vegeu [Definir mides de cota](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Àlies: `DTU`. `Unitats al text de les cotes noves [Unitats del dibuix/mm/cm/m/km]`, o amb cotes seleccionades `Unitats al text de les cotes seleccionades`. Escriu la longitud mesurada en aquesta unitat amb la unitat després (DIMLFAC i un sufix DIMPOST); `D` torna a les unitats del dibuix. Vegeu [Cotes en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Àlies: `RC`. Imprimeix `Longitud d'arc: … Tipus: …`, i després `Especifiqueu el primer punt [Longitud d'arc/Objecte/Rectangular/Poligonal/A mà alçada]`. Rectangular demana `Especifiqueu l'altra cantonada`; Poligonal `Especifiqueu el punt següent (Enter tanca el núvol) [Desfés (U)]`; A mà alçada segueix el punter fins a un clic o {{key:Enter}}; `O` demana `Seleccioneu objecte` i `Invertir la direcció? [Sí/No] <N>` i converteix l'objecte en el núvol. `A` demana `Especifiqueu la longitud de cada arc`. `R`, `P` i `F` trien el tipus per al següent núvol. El resultat és una polilínia tancada d'arcs.

### MLEADER

Àlies: `MLD`; o {{ui:Línia de crida}}. `Especifiqueu la ubicació de la fletxa de la línia de crida [Mida de la fletxa/Distància d'aterratge/Bloc (B)]`, `Especifiqueu la ubicació d'aterratge de la línia de crida`, i després el text al quadre al lloc (o, sense ell, `Introduïu el text (una línia buida acaba)`). `Bloc` demana primer un nom de bloc i la multilínia de crida mostra aquest bloc en lloc del text. Més línies de crida: {{cmd:MLEADEREDIT}}. Es desa com a multilínia de crida real en DWG; DXF manté les línies, la fletxa i el text que dibuixa.

### MLEADEREDIT

Àlies: `MLE`. `Seleccioneu una multilínia de crida`, i després `Especifiqueu la ubicació de la fletxa de la línia de crida [Elimina línies/Contingut de bloc/Contingut de text]`: cada punt afegeix una línia de crida des d'una fletxa nova cap al mateix aterratge, fins a Enter. `Elimina línies` treu la línia de crida que cliqueu (una multilínia en conserva com a mínim una). `Contingut de bloc` demana un nom de bloc i mostra aquest bloc en lloc del text (es demanen els seus atributs); `Contingut de text` torna a posar el text. Cada línia de crida té la seva pròpia nansa. Un DWG guarda totes les línies de crida i el bloc en una sola multilínia.

### MLEADERALIGN

Àlies: `MLA`. `Seleccioneu multilínies de crida`, i després `Seleccioneu la multilínia de crida amb què alinear [Distribueix/Espaiat/Usa l'espaiat actual]` i `Especifiqueu la direcció`. Mou els aterratges de les altres multilínies (i el seu text o bloc) sobre la línia que passa per l'aterratge de la triada, en aquella direcció; les fletxes es queden on apunten. `Espaiat` també les posa a una distància igual; `Distribueix` demana dos punts i les reparteix uniformement entre ells. Calen almenys dues multilínies.

### MLEADERCOLLECT

Àlies: `MLC`. `Seleccioneu multilínies de crida`, i després `Especifiqueu la ubicació de la multilínia de crida reunida [Vertical/Horitzontal]` (Enter manté el lloc de la primera). En fa una sola a partir de diverses: el contingut de bloc va a un bloc nou que conté tots els blocs un al costat de l'altre o un sota l'altre; el contingut de text esdevé una sola nota amb una línia per a cada una. La primera multilínia manté les seves línies de crida; les altres s'eliminen. Refusa una barreja de contingut de text i de bloc.

### TABLE

Àlies: `TB`; o {{ui:Anota}} › {{ui:Més}} › {{ui:Taula}}. Fa una taula: un objecte que moveu, copieu, girar, escalar i traçar com qualsevol altre, amb les seves cel·les guardades com a dades.

- `Nombre de files de dades o [Enganxa (P)/Fitxer (F)/Estil (S)] <3>`, i després `Nombre de columnes <3>`, `Alçada del text` i `Cantonada superior esquerra de la taula`. La taula té una fila de títol (una cel·la combinada) i una fila de capçalera sobre les files de dades.
- `P`: una taula a partir de cel·les d'un full de càlcul al porta-retalls (text amb un tabulador entre cel·les). Prémer {{key:Ctrl+V}} amb aquestes cel·les al porta-retalls fa el mateix, tret que la còpia pròpia de CadCraft sigui la més nova (o que CadCraft no ho pugui distingir: aleshores enganxa la seva pròpia còpia i ho diu). `F`: una taula a partir d'un fitxer `.csv` o separat per tabuladors. La primera fila es converteix en la fila de capçalera; les amplades de columna s'ajusten al text.
- `S`: tria l'estil de taula per a aquesta taula (vegeu {{cmd:TABLESTYLE}}).
- Refusa un nombre de files o columnes que no sigui un nombre enter, i més cel·les de les que hi cap una taula (2.000 files, 200 columnes, 40.000 cel·les).
- {{cmd:EXPLODE}} converteix una taula en línies i text. Desada com a DWG, una taula és un objecte de taula real que altres programes poden editar; desada com a DXF és un bloc que la dibuixa, i CadCraft la torna a obrir com a taula.

### TABLEDIT

Àlies: `TABLEEDIT`, `TABEDIT`; o feu doble clic en una cel·la. Edita una taula.

- `Trieu una cel·la per escriure-hi (Enter per acabar) o [Fila/Columna/Mida/Combina/Desfà la combinació/Alinea/Alçada/Tipus/Esborra (CL)]`. Feu clic en una cel·la, o, amb una taula seleccionada, escriviu-ne el nom (`B3`: columna B, fila 3; la fila del títol és la fila 1). Al navegador s'obre una caixa sobre la cel·la: {{key:Enter}} manté el text, {{key:Tab}} va a la cel·la següent, {{key:Alt+Enter}} comença una línia nova, {{key:Esc}} deixa la cel·la com estava.
- Un text que comença amb `=` és una fórmula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, amb `+ - * / ^`, parèntesis i funcions com `sqrt` i `round`. La cel·la mostra el valor; una fórmula que es refereix a la seva pròpia cel·la, a una cel·la fora de la taula o a una cel·la sense nombre mostra `####` i la línia d'ordres diu per què.
- `R` / `C`: `Insereix` o `Elimina` files o columnes en una cel·la indicada (quantes, i per sobre o per sota, a l'esquerra o a la dreta). Les fórmules segueixen les cel·les a les quals es refereixen.
- `S`: l'amplada de la columna i l'alçada de la fila. Una fila mai és més baixa que el que necessita el seu text. Una taula seleccionada té també una nansa a cada vora de columna i de fila.
- `M`: combina des d'una cel·la indicada fins a una altra; `U`: desfà la combinació. `A`: alineació (`TL` dalt a l'esquerra … `MC` al mig al centre … `BR` baix a la dreta). `H`: l'alçada de text pròpia d'aquesta cel·la (0 = la de l'estil). `K`: fa que la fila sigui de títol, capçalera o dades. `CL`: buida la cel·la.
- Refusa una taula en una capa bloquejada, eliminar totes les files o columnes, i una combinació que partiria en dues una altra cel·la combinada.

### TABLESTYLE

Àlies: `TS`. Llista els estils de taula amb quantes taules fa servir cadascun, i després `Estil de taula: [Nou/Defineix/Edita/Elimina/Aplica]`.

- Un estil guarda l'alçada del text i l'alineació de les files de títol, capçalera i dades, el marge de cel·la, i quines vores es dibuixen (exteriors, entre files, entre columnes).
- `N` fa un estil a partir de l'actual i el fa actual; `S` defineix l'estil actual (les taules noves el prenen); `E` n'edita un: les taules que el fan servir es tornen a dibuixar; `A` dona a les taules seleccionades l'estil actual; `D` elimina un (no Estàndard, ni l'actual; les taules que el feien servir mantenen el seu aspecte).
- Els estils es desen amb el dibuix (DWG i DXF).

### TABLEEXPORT

Desa el que mostra una taula com a fitxer CSV (una fórmula com el seu valor). `Seleccioneu una taula`, o seleccioneu-ne una primer. Les cel·les de text que comencen amb `=`, `+`, `-` o `@` reben una `'` inicial perquè un full de càlcul no les executi.

### TABLEPASTE

Àlies: `PASTETABLE`. Fa una taula a partir de cel·les d'un full de càlcul al porta-retalls, i després demana la seva cantonada superior esquerra. El mateix que {{cmd:TABLE}} › `Enganxa`.

### DATALINK

Àlies: `DL`. `Enllaç de dades: [Nou/Llista/Elimina] <Nou>`. `N` demana un fitxer CSV, col·loca una taula d'ell i en recorda el nom; `L` llista els enllaços amb el seu fitxer, la mida, quan es va llegir i quantes taules el fan servir; `R` elimina un enllaç (les seves taules es queden com a taules simples).

### DATALINKUPDATE

Àlies: `DLU`. Torna a llegir el fitxer d'un enllaç de dades i omple de nou les taules enllaçades (s'afegeixen o s'eliminen files i columnes per correspondre). Un navegador no pot obrir un fitxer per si mateix, així que demana que trieu de nou el fitxer. Amb diversos enllaços, pregunta quin.

### FIELD

Posa un camp al dibuix: un text que es calcula sol. `Camp: [Data/Nom de fitxer/Full/Propietat/Objecte/Expressió/Codi] <Data>`:

- `D`: ara, o la data desada, creada o traçada, i un format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: el nom del fitxer, amb o sense extensió. `S`: el número del full, el seu títol, o quants fulls hi ha. `P`: una propietat del dibuix pel nom (vegeu {{cmd:DWGPROPS}}). `O`: indiqueu un objecte, i després què llegir (àrea, longitud, perímetre, radi, diàmetre, capa, nom, x, y, text, rotació, color) i els decimals. `E`: una fórmula. `C`: un text amb codis escrits tal com són, com `Full %<sheetnumber>% de %<sheetcount>%`.
- Després `Seleccioneu un text, una cel·la de taula o un bloc amb atributs on posar-lo (Enter: un text nou)`: un text indicat rep el camp afegit després del que conté; una cel·la de taula igual; una referència de bloc demana quin atribut; {{key:Enter}} demana una alçada i un punt per a un text nou.
- A la pantalla un camp té un fons gris clar; un traçat i un PDF mai no el tenen. Escriure a mà sobre el text d'un camp acaba el camp. Un camp que no es pot calcular mostra `####`.
- El camp d'un objecte troba el seu objecte per la clau que CadCraft guarda en els objectes (Configuració › CadCraft › Fitxers compatibles amb fusió); amb les claus desactivades, es rebutja.

### UPDATEFIELD

Àlies: `UPDATEFIELDS`. `Seleccioneu els objectes dels quals actualitzar els camps (Enter: tots els camps) o [Configuració]`. `S` defineix quan els camps s'actualitzen sols: escriviu les lletres de `O` obrir, `S` desar, `P` traçar, `R` regenerar (les quatre per començar), o `NONE`.

### DWGPROPS

Àlies: `DRAWINGPROPS`. Llista les propietats del dibuix, i després `Canvia: [Títol/Assumpte/Autor/Empresa/Paraules clau/cOmentaris/Personalitzada/Elimina/eXit]`. Les sis primeres són les que mostra el tauler {{ui:Detalls del dibuix}}; `U` afegeix el vostre propi nom i valor, `R` n'elimina un. Els camps les llegeixen (`%<prop:title>%`, `%<prop:Client>%`) i les segueixen de seguida. Refusa un nom personalitzat que és un dels integrats o que conté `%`, `<`, `>`, una cometa o una barra inversa.

## Paramètrica

Vegeu [Restringir un dibuix](topic:constraints) i [Usar paràmetres i equacions](topic:parameters). Les restriccions funcionen a la pestanya {{ui:Model}}.

### GEOMCONSTRAINT i les ordres GC

Àlies `GCON`: `Introduïu el tipus de restricció [Horitzontal/Vertical/Perpendicular/PAral·lela/Tangent/Coincident/CONcèntrica/COLineal/Simètrica/Igual/Fixa] <Horitzontal>`, i després les indicacions d'aquesta ordre.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Seleccioneu un objecte [2Punts] <2Punts>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Seleccioneu el primer objecte`, `Seleccioneu el segon objecte` (el segon es mou).
- {{cmd:GCCOINCIDENT}}: `Seleccioneu el primer punt [Objecte/Restringeix automàticament] <Objecte>`, `Seleccioneu el segon punt [Objecte] <Objecte>`.
- {{cmd:GCFIX}}: `Seleccioneu un punt [Objecte] <Objecte>`.
- {{cmd:GCSYMMETRIC}}: `Seleccioneu el primer objecte [2Punts] <2Punts>`, `Seleccioneu el segon objecte`, `Seleccioneu la línia de simetria`.

### DIMCONSTRAINT i les ordres DC

Àlies `DCON`: `Seleccioneu la cota associativa a convertir [Lineal/Horitzontal/Vertical/Alineada/Angular/Radial/Diàmetre/Converteix] <Alineada>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Especifiqueu el primer punt de restricció [Objecte] <Objecte>`, `Especifiqueu el segon punt de restricció`, `Especifiqueu la ubicació de la línia de cota`, `Text de la cota <d1=40>` (un nombre, una expressió, o `nom=expressió`).
- {{cmd:DCALIGNED}}: com l'anterior, amb `[Objecte/Punt i línia/2Línies]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Seleccioneu un arc o cercle`. {{cmd:DCANGULAR}}: `Seleccioneu la primera línia o arc`, `Seleccioneu la segona línia`.
- {{cmd:DCCONVERT}}: `Seleccioneu les cotes a convertir`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Seleccioneu objectes [Configuració]`. `S` demana les tolerències de distància i angle.
- {{cmd:DELCONSTRAINT}} (àlies `DELCON`): `Seleccioneu objectes`; les seves restriccions se'n van.
- {{cmd:CONSTRAINTBAR}} (àlies `CBAR`): `Seleccioneu objectes [Mostra-ho tot/Amaga-ho tot]`, i després `[Mostra/Amaga]`.
- {{cmd:DCDISPLAY}}: `Introduïu una opció [Mostra/Amaga]`.

### PARAMETERS i -PARAMETERS

{{cmd:PARAMETERS}} (àlies `PAR`, `PARAM`) obre el tauler {{ui:Paràmetres}}. `-PARAMETERS`: `Introduïu una opció [Nou/Edita/Reanomena/Elimina/?] <?>`.

### SWBOUT

Àlies `SWMACRO`. Descarrega una macro (.swb) que reconstrueix el model com un sol croquis restringit a SolidWorks. Vegeu [Moure croquis a i des d'altres modeladors de peces](topic:solidworks-sketches).

## Blocs

### ANNOSCALE

Àlies: `CANNOSCALE`. Diu l'escala d'anotació del dibuix i quants objectes anotatius conté, i després demana `Nova escala d'anotació`: escriviu `1:50`, `1:100`, `2:1`, un nombre sol (`50` és 1:50) o el nom d'una de les escales pròpies del dibuix. Cada text i cota anotativa es redimensiona perquè s'imprimeixi a la mateixa mida a la nova escala, en un sol pas de desfer; els objectes no anotatius es deixen estar, i també un objecte que té una llista d'escales sense la nova (vegeu {{cmd:OBJECTSCALE}}). Vegeu [Unitats, papers i escales](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Àlies: `OBJSCALE`. `Seleccioneu objectes anotatius`, i després `Escales d'anotació dels objectes seleccionats [Afegeix/Elimina/Escala actual/Llista/eXit] <Afegeix>`. Un text o cota anotativa guarda una llista d'escales d'anotació. `Afegeix` i `Elimina` demanen una escala (`1:50`, `2:1`, un nombre sol, o el nom d'una escala pròpia del dibuix); `Escala actual` afegeix l'escala d'anotació del dibuix; `Llista` imprimeix les escales de cada objecte. Una finestra gràfica amb una escala que és a la llista d'un objecte el mostra a la mida que imprimeix la seva alçada de paper a aquella escala, a la pantalla i als traçats. L'última escala no es pot eliminar. Els objectes no anotatius queden fora: activeu Anotatiu a Propietats primer. Les llistes es desen en DWG i DXF com a dades pròpies de CadCraft. Vegeu [Unitats, papers i escales](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Àlies: `ANNOALL`. `Mostra els objectes anotatius a totes les escales [ON/OFF]`. Activat (com comença un dibuix): un objecte anotatiu també es mostra en una finestra gràfica, o al model, l'escala de la qual no és a la seva llista, a la mida que té. Desactivat: no es mostra allà, i no es pot indicar al model. L'interruptor és un sol pas de desfer; no es guarda al fitxer.

### SCALELISTEDIT

Àlies: `SCALELIST`. `Llista d'escales [Afegeix/Edita/Elimina/Llista/Restableix]` fins a {{key:Enter}}. Afegeix: `Nom de l'escala`, `Unitats de paper`, `Unitats del dibuix`. Edita i Elimina demanen el nom de l'escala. Les escales pròpies del dibuix s'afegeixen a les llistes d'escales de finestra i de traçat i es desen amb el dibuix. Vegeu [Unitats, papers i escales](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT i PEDIT

`SPLINE` (`SPL`): `Primer punt de la spline [Mètode/Objecte] (Punts d'ajust)`. Ajust: punts per on passa la corba; `Tanca`, `Desfés`, i després `Tangent inicial` i `Tangent final` (un punt, o {{key:Enter}}). Mètode › Vèrtexs de control demana un grau (1 a 5) i dibuixa des d'un polígon de control. Objecte converteix polilínies en splines que passen pels seus vèrtexs. `SPLINEDIT` (`SPE`): `[Dades d'ajust/Edita vèrtex/converteix a Polilínia/Obre o Tanca/Inverteix/Desfés/eXit]`; Dades d'ajust `[Afegeix/Elimina/Mou/Purga/Tangents/eXit]`; Edita vèrtex `[Afegeix punt de control/Mou/Pes/eXit]`. `PEDIT` (`PE`): `[Tanca/Obre/Uneix/Amplada/Ajusta/Spline/Descorba/Generació tipus/Inverteix/Desfés/eXit]`, `M` per a diversos objectes; les línies, arcs i splines s'ofereixen primer com a polilínies. Vegeu [Splines i polilínies](topic:splines).

### BLOCK

Àlies: `B`, `BMAKE`.

- `Introduïu el nom del bloc`. Si ja existeix: `El bloc "…" ja existeix. Redefinir-lo? [Sí/No] <N>`.
- `Especifiqueu el punt base d'inserció`
- `Seleccioneu objectes`. Són substituïts per una sola referència al nou bloc.

### WBLOCK

Àlies: `W`, `-WBLOCK`. Escriu un bloc, alguns objectes o tot el dibuix com un DWG o DXF nou. `Origen de WBLOCK [Bloc/Tot el dibuix/Objectes] <Objectes>`:

- **Objectes**: `Especifiqueu el punt base d'inserció` (esdevé l'origen del dibuix nou), `Seleccioneu objectes`, i després `Format de fitxer [DWG/DXF/DXF R12]` i `Nom de fitxer del dibuix nou`, i després `Què fer amb els objectes [Conserva/Converteix a bloc/Elimina]`. Converteix els substitueix per una sola referència a un bloc amb el nom del fitxer; Elimina els treu.
- **Bloc**: `Bloc a escriure`. Els objectes propis del bloc, amb el seu punt base com a origen, incloent-hi els blocs imbricats.
- **Tot el dibuix**: cada objecte de l'espai model. Els fulls no s'escriuen; useu {{cmd:SAVEAS}} per a una còpia que els conservi.

El fitxer nou conté només les capes, tipus de línia, estils de text i de cota i blocs que usen els seus objectes, i les unitats del dibuix. La versió d'un DWG és la que va fer servir {{cmd:SAVEAS}} per última vegada. Al navegador el fitxer es descarrega; a Studio s'obre el diàleg de desar.

### ATTDEF

Àlies: `ATT`, `DDATTDEF`, `-ATTDEF`; o {{ui:Blocs}} › {{ui:Més}} › {{ui:Defineix atribut}}. Imprimeix els modes, i després `Introduïu una opció per canviar (Enter quan acabi) [Invisible/Constant/Predefinit]`, `Introduïu el nom d'etiqueta de l'atribut`, `Introduïu la indicació de l'atribut`, `Introduïu el valor per defecte de l'atribut` (`Introduïu el valor de l'atribut` si és constant), `Especifiqueu el punt inicial del text`, `Especifiqueu l'alçada del text`, `Especifiqueu l'angle de rotació del text`. {{cmd:BLOCK}} incorpora les definicions d'atribut al bloc.

### EATTEDIT i ATTEDIT

`EATTEDIT` (`DDATTE`, o feu doble clic en una referència amb atributs; {{ui:Blocs}} › {{ui:Més}} › {{ui:Edita atributs}}): `Seleccioneu una referència de bloc amb atributs`, i després el diàleg {{ui:Edita atributs}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): la mateixa referència, i després `<indicació> (<ETIQUETA>) <valor>` per a cada atribut; {{key:Enter}} manté un valor. Vegeu [Atributs](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Actualitza els atributs de les referències de quin bloc [Nom/Selecciona/Tots] <Selecciona>`. Els valors es mantenen; els atributs nous reben el seu valor per defecte, els eliminats se n'en van, i les posicions es reinicien.

### BATTMAN

{{ui:Blocs}} › {{ui:Més}} › {{ui:Gestor d'atributs}}. El diàleg: bloc, atributs (etiqueta, indicació, valor per defecte, modes, ordre), {{ui:Actualitza les referències (es conserven els valors)}}, {{ui:Aplica}}.

### REFEDIT i REFCLOSE

{{ui:Blocs}} › {{ui:Més}} › {{ui:Edita al lloc}}. `REFEDIT`: `Seleccioneu la referència de bloc a editar al lloc` (o la selecció). `REFCLOSE`: `Desar els canvis a "…" [Desa/Descarta] <Desa>`; {{ui:Desa el bloc}} i {{ui:Descarta}} de la barra fan el mateix. Tota l'edició és un sol pas de desfer. Vegeu [Atributs](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT i BCLOSE

`BE`; o {{ui:Blocs}} › {{ui:Més}} › {{ui:Edita el bloc}}. `Introduïu el nom del bloc a editar <el bloc de la referència seleccionada>` obre l'editor de blocs. `BCLOSE` demana `Tancar l'editor de blocs de "…" [Desa/Descarta] <Desa>`; {{ui:Desa el bloc}} i {{ui:Descarta els canvis}} de la franja fan el mateix. Tot el que es fa a l'editor és un sol pas de desfer.

### VIEWBASE

Àlies: `FLATSHOT`. Una vista 2D plana dels sòlids a la pestanya 3D: `Vista [Davant/Superior/Dreta/Esquerra/Darrere/Inferior/Iso]`, `Línies ocultes [Mostra/Amaga]`, una escala (`1:20`, `2:1`; {{key:Enter}} agafa la que encaixa en el full), i després el centre de la vista. Una sola referència de bloc, amb les arestes visibles a VIEW-VISIBLE i les ocultes en discontinu a VIEW-HIDDEN. Vegeu [Vistes planes en un full](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Àlies: `-PUBLISH`; o {{ui:Tots els fulls en un PDF}} al diàleg {{ui:Traça a PDF}}. `Fulls a traçar [Tots/Alguns]`: {{key:Enter}} trau tots els fulls, `S` demana noms separats per comes. Un sol PDF, una pàgina i un marcador per full. Vegeu [Tots els fulls en un PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Àlies: `SSM`, `SHEETSETMANAGER`. Us porta a la secció {{ui:Joc de fulls}} del tauler de l'esquerra: fulls de molts dibuixos, numerats i titulats, amb els seus caixetins omplerts des del joc, publicats en un sol PDF. Vegeu [Jocs de fulls](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): trieu un DWG o DXF, i després el seu punt d'inserció. {{cmd:XREF}} (`XR`, `-XREF`): `Dibuixos enllaçats [?/Adjunta/Torna a carregar/Vincula/Desvincula] (Enter: ?)`; amb més d'un enllaç, trieu-ne una referència o escriviu `N` i el seu nom. Vegeu [Dibuixos enllaçats](topic:files#linked-drawings-external-references).

### COUNT

Àlies: `BCOUNT`; o {{ui:Blocs}} › {{ui:Més}} › {{ui:Compta blocs}}. `Seleccioneu una referència de bloc a comptar, o [Tots/Exporta] (Enter: Tots)`: un clic selecciona i compta totes les referències d'aquell bloc en aquest espai; {{key:Enter}} o `A` les llista totes; `E` i després `C` (recomptes) o `A` (atributs) descarrega un CSV. Vegeu [Comptar blocs i exportar una taula de planificació](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Àlies: `I`, `DDINSERT`.

- `Introduïu el nom del bloc o [Fitxer/Biblioteca] <últim bloc>` (no hi ha diferència entre majúscules i minúscules). `F` demana un DWG o DXF, i després el dibuix sencer o un dels seus blocs; un nom ja usat demana {{ui:Mantén els existents}} o {{ui:Reanomena}}. `L` obre el tauler de la biblioteca.
- `Especifiqueu el punt d'inserció [Escala/Gira]`. `S` demana `Especifiqueu el factor d'escala`, `R` demana `Especifiqueu l'angle de rotació`; ambdós es recorden.
- Quan el bloc ja és al costat d'objectes que es repeteixen en altres llocs sense ell, una línia indica quants llocs es suggereixen, i la indicació afegeix `suGgerits`: `G` els mostra; feu clic a prop d'un per posar-hi el bloc, `A` per a tots, {{key:Enter}} per tornar. Prenen la rotació dels seus veïns i els valors per defecte dels atributs. Els dibuixos amb més de 20.000 objectes a l'espai obert no es cerquen.
- Després `Introduïu <indicació> (<ETIQUETA>) <valor per defecte>` per a cada atribut que demana el bloc. Vegeu [Atributs de bloc](topic:attributes).

### LIBRARY

Àlies: `LIB`. Obre el tauler de la biblioteca: col·loca elements, comprova actualitzacions, crèdits de la biblioteca. Sense preguntes. Vegeu [Inserir des d'un fitxer o de la biblioteca](topic:insert-from-file-and-library).

### STEELMEMBER

Àlies: `SMEMBER`; o {{ui:Barra 3D}} a la pestanya {{ui:Estàndard}} de la biblioteca. `Mida de secció <W12x26>` (tal com la llista la pestanya), i després `Punt inicial [Columna]` i `Punt final`: un element sòlid a la pestanya 3D entre els dos punts, recolzat a terra. `C` demana el punt base de la columna i la seva alçada. Un sol pas de desfer. Vegeu [Col·locar perfils d'acer i peces normalitzades](topic:steel-and-standard-parts).

### PARTSLIST

Àlies: `PLIST`. `Cantonada superior esquerra de la llista de peces`, i després `Alçada del text <2,5>`: dibuixa una taula de totes les peces normalitzades i perfils d'acer col·locats des de la biblioteca (números d'element, quantitat, peça, norma, mida, longitud, material, massa). Un sol pas de desfer. Vegeu [Col·locar perfils d'acer i peces normalitzades](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Àlies: `PU`. Elimina les definicions de blocs que no fa servir ningú. Sense preguntes.

### DELBLOCKS

O {{ui:Blocs}} › {{ui:Més}} › {{ui:Suprimeix blocs}}. `Seleccioneu el bloc a suprimir [Nom/eXit]`: indiqueu una referència de bloc, o `N` per a la llista de blocs amb un filtre (en podeu triar diversos), o `X` / {{key:Enter}} per acabar. Cada referència se'n va —al model, a cada full i dins d'altres blocs— i després la definició, i la línia d'ordres diu què s'ha suprimit i què no ha pogut. Els blocs sense nom i els dibuixos enllaçats no s'ofereixen. La indicació torna per al següent bloc; tota l'ordre és un sol pas de desfer.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} enganxa el que heu copiat ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) com un sol bloc: indiqueu el punt d'inserció i hi va una referència a un bloc nou, seleccionada. El bloc rep un nom propi (`A$C` i un número); {{cmd:RENAME}} li dona el vostre. Un sol pas de desfer elimina la referència i el bloc.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} demana el bloc a substituir i el bloc que el reemplaça (`?` llista els blocs), i després canvia cada referència al model, a cada full i dins d'altres blocs. Cada referència manté el seu lloc, escala, rotació, capa i els valors dels atributs que tenen tots dos blocs; els atributs que només té el bloc nou comencen amb els seus valors per defecte, i indica quins valors s'han perdut. Quan ningú fa servir el bloc antic, ofereix eliminar-lo. Refusa dibuixos enllaçats i un reemplaçament que posaria un bloc dins de si mateix. Un sol pas de desfer.

### MINSERT

{{cmd:MINSERT}} col·loca un bloc en files i columnes: nom del bloc, punt d'inserció, escala, rotació, nombre de files i columnes, i les distàncies entre elles. El conjunt sencer gira amb la rotació. Cadascun és una referència pròpia (10.000 com a màxim), de manera que qualsevol es pot moure o esborrar després.

### BLOCKSPALETTE

Àlies: `BLOCKSPAL`; o {{ui:Blocs}} › {{ui:Més}} › {{ui:Tauler de blocs}}. Mostra el tauler {{ui:Blocs}} amb el cursor al seu filtre. Cada bloc té una petita imatge; els col·locats més recentment van primer. Els dos botons al costat del filtre canvien entre llista i quadrícula d'imatges. Feu clic en una imatge (o a {{ui:Insereix}}) per col·locar el bloc amb {{cmd:INSERT}}, o arrossegueu-lo al dibuix per col·locar-lo on el deixeu.

{{ui:Biblioteques}}, sota la llista: {{ui:Add a drawing}} agafa un fitxer DWG o DXF propi i en llista els blocs amb imatges, i el dibuix sencer com un sol bloc. Col·locar-ne un copia la seva definició (i els blocs que conté, i les seves capes) en aquest dibuix, com fa l'opció `Fitxer` de {{cmd:INSERT}}; un bloc que ja hi és amb la mateixa definició s'usa sense preguntar, i un del mateix nom que difereix demana {{ui:Mantén els existents}} o {{ui:Reanomena}}. En un navegador el fitxer es queda fins que es tanca la pàgina. A CadCraft Studio, {{ui:Add a folder}} llista els dibuixos d'una carpeta, cadascun obert quan hi feu clic, i es recorden fitxers i carpetes. La petita x treu una biblioteca de la llista; el fitxer no es toca. La {{ui:Library}} compartida és una altra cosa: vegeu [Inserir des d'un fitxer o de la biblioteca](topic:insert-from-file-and-library).

### BCONVERT

O {{ui:Blocs}} › {{ui:Més}} › {{ui:Converteix repeticions en blocs}}. Troba geometria que es repeteix i converteix cada còpia en una referència a un sol bloc.

- `Seleccioneu els objectes que es repeteixen, o [Bloc]`: els objectes d'una còpia. `B` nomena un bloc existent per trobar còpies soltes dels seus objectes.
- `Una còpia pot ser: simètrica = No, escalada = No; capa, color, tipus i gruix = Coincideix … [Simetria/Escala/Propietats]`: `M`, `S` i `P` canvien què compta com a còpia; {{key:Enter}} cerca. Les configuracions es recorden.
- `Nom del bloc nou <Bloc1>`, i després `Especifiqueu el punt base del bloc` ({{key:Enter}} agafa la cantonada inferior esquerra de la selecció).
- Indica quants altres conjunts d'objectes són la mateixa geometria, ressalta tot el que substituiria, i pregunta `Sí/No`.

Una còpia són els mateixos objectes desplaçats i girats en qualsevol angle (i simètrics o escalats per un sol factor quan aquestes opcions són actives): cada objecte ha de tenir el seu homòleg, dins d'una milionèsima part de la mida de la selecció. Cada referència té la seva pròpia rotació i escala (una simètrica té una escala Y negativa), i la capa que els objectes compartien. Els objectes en capes bloquejades es deixen i es compten. Busca a l'espai obert (el model o el full obert). Una cerca molt gran s'atura en un límit de treball i ho diu. Un sol pas de desfer.

### BSEARCH

O {{ui:Blocs}} › {{ui:Més}} › {{ui:Cerca blocs}}. `Cerca blocs per [Nom/Atribut/Geometria] <Nom>`:

- `N`: part d'un nom de bloc, o un patró amb `*` i `?`. Llista cada bloc amb les seves referències aquí i en tot el dibuix.
- `A`: un valor d'atribut, o `ETIQUETA=valor`. Llista els blocs les referències dels quals el tenen, amb els valors trobats. Els atributs constants també compten.
- `G`: seleccioneu objectes, o una referència de bloc, i es llisten els blocs la forma dels quals s'assembla almenys un 85%, el millor primer. La mida, la rotació i la simetria no compten. La mesura compara les distàncies entre punts repartits pels contorns, de manera que troba semblants; useu {{cmd:BCONVERT}} per trobar còpies exactes.

Les referències trobades a l'espai obert queden seleccionades, a punt per a la següent ordre.

### BREPLACE

O {{ui:Blocs}} › {{ui:Més}} › {{ui:Substitueix blocs}}. `Substitueix [Seleccionats/Tots]`: `S` substitueix les referències de bloc que seleccioneu pel bloc que nomeneu; `A` demana un bloc i el seu substitut i canvia cada referència, com fa {{cmd:BLOCKREPLACE}} (el mateix codi). Una referència manté el seu lloc, escala, rotació, capa i els valors dels atributs que tenen tots dos blocs; els valors que el bloc nou no té lloc on posar s'eliminen i s'indiquen. `?` llista els blocs. Un sol pas de desfer.

### DATAEXTRACTION

Àlies: `EATTEXT`, `DX`; o {{ui:Blocs}} › {{ui:Més}} › {{ui:Extracció de dades}}. Llista blocs, els seus atributs i les propietats dels objectes en forma de taula o de fitxer CSV.

- Treballa sobre la selecció, o demana `Seleccioneu objectes (Enter: tot l'espai)`.
- `Llista: [Blocs/Objectes/Tots]` quan la selecció conté tots dos. Els blocs sense nom, les taules i les llistes de materials no es llisten mai.
- Imprimeix les columnes entre les quals triar (nom, tipus, capa, X, Y, rotació, escala, longitud, àrea, color, tipus de línia, espai, i una per cada etiqueta d'atribut), i després `Columnes, per nom o número amb comes entre elles`. {{key:Enter}} agafa les marcades amb asterisc: el nom i cada atribut per als blocs; tipus, capa i longitud per als objectes.
- `Posa les files idèntiques juntes amb un recompte? [Sí/No] <Sí>`, i després `Posa la llista en un: [Taula/Csv] <Taula>`. Una taula és una taula normal ({{cmd:TABLEDIT}} l'edita) i no és en directe: torneu a executar l'ordre quan el dibuix canviï.
- Refusa una columna que no és a la llista. Una taula té 1.999 files de dades; un fitxer CSV les admet totes.

### COUNTTABLE

Compta les referències de bloc de la selecció (o de l'espai obert) i posa els recomptes en una taula (`Bloc`, `Recompte`) o en un fitxer CSV. Per a un recompte que segueix el dibuix sol, vegeu {{cmd:BOMTABLE}}.

## Fulls i traçat

### LAYOUT

Àlies: `LO`, `NEWLAYOUT`; o el botó {{ui:+}} sota el dibuix. Un full nou amb un marc, un caixetí i una finestra gràfica, en ISO A3 (o Tabloid per a dibuixos en polzades o peus). Sense preguntes.

### MVIEW

Àlies: `MV`. Només en un full ({{cmd:VPORTS}} en un full fa el mateix).

- `Especifiqueu la cantonada de la finestra gràfica [Poligonal (P)/Objecte (O)]`, `Especifiqueu l'altra cantonada`. La finestra mostra el model sencer a una escala normalitzada.
- `P` (Poligonal): feu clic a les cantonades del contorn (`Desfés (U)`, `Tanca (C)`), {{key:Enter}} quan acabeu. Refusa menys de tres cantonades.
- `O` (Objecte): `Seleccioneu un objecte tancat per al contorn de la finestra gràfica`: una polilínia tancada, un cercle o una el·lipse en el full. La finestra en pren la forma (les corbes com a trossos rectes curts); l'objecte es queda com estava. Refusa un objecte que no és tancat.

### VPCLIP

Retalla una finestra gràfica que ja és en el full. `Seleccioneu la finestra a retallar` (o seleccioneu-la primer), i després `Seleccioneu l'objecte a retallar [Poligonal/Elimina]`:

- Feu clic en una polilínia tancada, un cercle o una el·lipse, o {{key:Enter}} (o `P`) per fer clic a les cantonades d'un polígon.
- `E` (Elimina, ofert quan la finestra està retallada) la torna un rectangle: la caixa que tenia al voltant del contorn.
- El que mostra la finestra no es mou al paper, i la seva escala es manté. El model es dibuixa i es trasllada només dins del contorn, i la vora el segueix. Un sol pas de desfer.
- Una finestra retallada té una nansa a cada cantonada del contorn, a més del seu centre i de les quatre cantonades de la seva caixa (arrossegar una cantonada de la caixa estira el contorn amb ella). Propietats mostra Contorn: Rectangle, o Retallat amb el nombre de cantonades.
- Els fitxers DWG i DXF 2000 guarden el contorn per a CadCraft. Altres programes obren la finestra com el rectangle al seu voltant; DXF R12 només guarda el rectangle.
- A la pestanya del model indica que les finestres són als fulls.

### VPORTS

Àlies: `VIEWPORTS`. {{cmd:SPLIT}} és el mateix també des d'un full, i {{ui:Vista}} › {{ui:Més}} › {{ui:Divideix un al costat de l'altre}}, {{ui:Divideix apilat}}, {{ui:Quatre panells}}, {{ui:Un panell}} l'executen. Al model: `Introduïu el nombre de panells [Simple/2/3/4] <3>`; `2` demana `[Horitzontal/Vertical] <Vertical>` (Vertical = un al costat de l'altre), `3` demana `[Esquerra/Dreta] <Dreta>` (on va el panell gran). Cada panell manté la seva pròpia vista i espai; un clic fa actiu un panell. En un full és {{cmd:MVIEW}}. Vegeu [Dividir la pantalla](topic:split-screen).

### VPVIEW

Sense àlies. Només en un full.

- `Seleccioneu la finestra` (s'omet si n'hi ha una de seleccionada), i després al model: `Especifiqueu la primera cantonada de la finestra a mostrar`, `Especifiqueu l'altra cantonada`.

### UCS

Sense àlies. Un sistema de coordenades propi; no és una edició. `Especifiqueu l'origen del SCU [Nom/Objecte/Anterior/Món/Z/3punts] <Món>`: un punt és un origen nou, i després `Especifiqueu un punt a l'eix X (Enter manté l'angle)`. `Z`: `Especifiqueu l'angle de rotació sobre l'eix Z <90>`. `3`: origen, un punt a la part positiva de l'eix X, un punt a la part positiva de l'eix Y. `OB`: `Seleccioneu un objecte per alinear el SCU`. `NA`: `[Restaura/Desa/Elimina/?]` i un nom. La vista gira perquè el nou eix X quedi horitzontal. Vegeu [Girar la vista i usar les vostres pròpies coordenades](topic:ucs-and-turned-view).

### PLAN

Sense àlies. `Introduïu una opció [SCU actual/SCU/Món] <SCU actual>`: gira la vista del panell actiu perquè l'eix X del SCU (o el del món) quedi horitzontal. Res del dibuix es mou.

### TURNLEFT, TURNRIGHT, TURNWORLD

Sense àlies; o {{ui:Vista}} › {{ui:Més}} › {{ui:Gira la vista 90° a l'esquerra}}, {{ui:Gira la vista 90° a la dreta}}, {{ui:Torna al SCG}}. Igual que `UCS Z -90`, `UCS Z 90` i `UCS W`, amb la vista que el segueix.

### VPLAYER

Sense àlies. En un full, o dins d'una finestra gràfica. `Introduïu una opció [?/Congela/Descongela/Restableix/Vpvisdflt]`: `F`, `T`, `R` demanen noms de capa (separats per comes, amb comodins `*` i `?`), i després `[Totes/Selecciona/Actual] <Actual>` finestres; Restableix torna cada capa al seu valor per defecte de "congelada en les noves finestres"; `V` defineix aquest valor per defecte (`[Congelada/Descongelada]`), que usa {{cmd:MVIEW}}. `?` llista les capes congelades a la finestra actual. La columna de finestres del tauler de Capes fa el mateix per a una sola finestra. Vegeu [Congelar una capa en una sola finestra](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Àlies: `MS`; o feu doble clic dins d'una finestra gràfica. Només en un full. Treballa sobre el model a través d'una finestra: la seleccionada, l'única del full, o `Feu clic dins de la finestra per treballar-hi`. Desplaçar i fer zoom dins canvia la vista de la finestra (una de bloqueada per pantalla la conserva i el full es mou); la nova vista s'escriu com un sol pas de desfer. Vegeu [Treballar sobre el model a través d'una finestra](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Àlies: `PS`; o feu doble clic fora de la finestra, o feu clic en una pestanya sota el dibuix. Torna al full.

### PLOT

Àlies: `PRINT`, `PUBLISH`, `EXPORTPDF`; o {{key:Mod+P}}. Obre el diàleg {{ui:Traça a PDF}}. Vegeu [Traçar a PDF](topic:plot-pdf).

### PLOTSTYLES

Àlies: `STYLESMANAGER`, `PSTABLES`; o {{ui:Edita les taules…}} al diàleg {{ui:Traça a PDF}}. Obre {{ui:Taules d'estil de traçat}}: com s'imprimeix cada color (color, gris, tinta, gruix de línia), desat amb el dibuix. Vegeu [Taules d'estil de traçat](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} mou objectes entre un full i el model a través d'una finestra, escalats i girats perquè es vegin igual des de l'altra banda. En un full, seleccioneu objectes i van al model (indiqueu la finestra quan el full en té més d'una). Mentre treballeu al model a través d'una finestra ({{cmd:MSPACE}}), els objectes seleccionats passen al full. Indica quantes vegades més grans o més petits han quedat. Les finestres es queden al seu full. Un sol pas de desfer.

### ISODRAFT

{{cmd:ISODRAFT}} activa o desactiva el dibuix isomètric (`ON` o `OFF`), o va directament al pla `Esquerra`, `Superior` o `Dret`. Mentre és activat: l'Orto ({{key:F8}}) manté les línies sobre els dos eixos del pla (esquerra: 90° i 150°; superior: 30° i 150°; dret: 30° i 90°), el seguiment polar ({{key:F10}}) segueix els mateixos eixos, l'enganxament a la quadrícula ({{key:F9}}) usa la quadrícula isomètrica, i la quadrícula ({{key:F7}}) es dibuixa amb línies a 30°, 90° i 150°. {{cmd:ELLIPSE}} guanya `Isocercle`: doneu un centre i un radi (o `Diàmetre`) i dibuixa l'el·lipse que mostra un cercle al pla actual. El dibuix continua essent pla: són ajudes per dibuixar una vista pictòrica, no un model 3D. El paràmetre és per a aquesta sessió i no es desa al fitxer.

### ISOPLANE

{{cmd:ISOPLANE}} tria el pla on treballa el dibuix isomètric: `Esquerra`, `Superior` o `Dret`. Enter passa al següent pla. Mentre el dibuix isomètric és activat, {{key:F5}} fa el mateix en mig d'una ordre; mentre és desactivat, {{key:F5}} es deixa per al navegador.

## Consulta

### CAL

Imprimeix el valor d'un càlcul, tal com es llegeix en qualsevol lloc on s'escriu una longitud.

- `Expressió`: escriviu-la, per exemple `12'6"+3/4"` o `(24'-0")/3`, i premeu {{key:Enter}}. CadCraft imprimeix `= 12'-6 3/4"   (150.75 unitats de dibuix)`. Vegeu [Aritmètica en un valor escrit](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Àlies: `DI`; o {{ui:Vista}} › {{ui:Més}} › {{ui:Mesura la distància}}.

- `Especifiqueu el primer punt`, `Especifiqueu el segon punt`. Imprimeix distància, angle, Delta X i Delta Y.

### AREA

Àlies: `AA`; o {{ui:Vista}} › {{ui:Més}} › {{ui:Àrea}}. Imprimeix l'àrea i el perímetre.

- `Especifiqueu la primera cantonada [Objecte/Afegeix àrea/Resta àrea] <Objecte>`
  - Feu clic o escriviu cantonades; a `Especifiqueu el punt següent (Enter tanca) [Desfés (U)]` premeu {{key:Enter}} per tancar el contorn. `U` treu l'última cantonada.
  - {{key:Enter}} o `O`, i després `Seleccioneu objecte`: un cercle (imprimeix la seva circumferència), una el·lipse, una polilínia (una de oberta es tanca amb una línia recta per a l'àrea, i se n'imprimeix la longitud) o una trama (els forats es descompten).
  - `A` (Afegeix àrea) i `S` (Resta àrea) mantenen un total acumulat: la indicació comença amb `(mode AFEGEIX)` o `(mode RESTA)`, cada àrea se summa o es resta, i `Àrea total = …` s'imprimeix després de cada una. En aquests modes `O` tria objectes fins a {{key:Enter}}, i {{key:Enter}} a la primera indicació acaba l'ordre.

### MEASUREGEOM

Àlies: `MEA`. `Introduïu una opció [Distància/Radi/Angle/Àrea] <Distància>`; després de cada mesura torna a preguntar, amb `eXit` per defecte.

`Ràpid` mesura al voltant del punter mentre el moveu: la distància a l'objecte més proper a la dreta, a dalt, a l'esquerra i a baix (segons els eixos del SCU actual), dibuixada mentre es mou, i l'angle on dos d'aquests veïns són rectes i es troben. Un clic escriu les quatre distàncies, l'amplada i l'alçada lliures i els angles a l'historial; Enter torna a les opcions. Llegeix el que hi ha a la pantalla.

- `D`: dos punts, com {{cmd:DIST}}.
- `R`: `Seleccioneu un arc o cercle`; imprimeix el radi i el diàmetre.
- `A`: un arc (el seu angle inclòs), una línia i després una segona línia (l'angle entre elles, cap als seus extrems llunyans), o {{key:Enter}} i tres punts (vèrtex, i després els dos extrems).
- `AR`: com {{cmd:AREA}}, una sola àrea.

### ID

Sense àlies. `Especifiqueu un punt`; imprimeix la seva X i Y.

### LIST

Àlies: `LI`, `LS`. `Seleccioneu objectes`; imprimeix el tipus, la capa i les mesures principals de cada objecte.

### MASSPROP

{{cmd:MASSPROP}} dona les propietats de secció de les regions i dels objectes tancats que seleccioneu, preses junts: àrea, perímetre, caixa envolupant, centroide, moments d'inèrcia respecte als eixos X i Y que passen per l'origen, producte d'inèrcia, radis de gir, els mateixos moments respecte al centroide, i els moments principals amb la direcció dels seus eixos. Els forats d'una regió compten com a forats. Les xifres són en unitats de dibuix i exactes per a contorns fets de línies i arcs; les el·lipses i les splines es mesuren com a segments rectes curts, i ho indica. Després de l'informe pregunta si l'escriu en un fitxer de text. Els objectes que no són tancats es deixen fora, i ho diu amb quants són.

## Vista, fitxer i altres

### ZOOM

Àlies: `Z`.

- `Especifiqueu la cantonada de la finestra, o introduïu un factor d'escala (nX) [Extensió/Tot/Finestra/Anterior/Escala/Centre]`. Feu clic en dues cantonades per a una finestra. `E`, `A` o Enter: tot el dibuix.
- `P` (Anterior, o {{ui:Anterior}} a la barra d'eines) torna a la vista anterior, fins a 10 vistes per pestanya; una sèrie de passos de roda o un desplaçament compten com una sola vista.
- Un nombre com `2`, `2x` o `0.5x` (o `S` i després el nombre) fa zoom d'entrada o de sortida per aquell factor al voltant del centre de la pantalla.
- `C` demana `Especifiqueu el punt central` i `Introduïu l'alçada o l'augment (nX)`.

### PDFATTACH, PDFIMPORT i les ordres PDF

Àlies: `PDFATT` per a {{cmd:PDFATTACH}}, `PDFIM` per a {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} posa una pàgina PDF sota el dibuix (fitxer, pàgina, punt d'inserció, escala, rotació); {{cmd:PDFIMPORT}} converteix les línies, corbes, farciments i text d'una pàgina en objectes del dibuix, en capes amb el nom del PDF, a la mida real, a una escala escrita, o escalats a partir de dos punts i una distància real. {{cmd:PDFCLIP}} retalla un subjacent, {{cmd:PDFADJUST}} defineix l'esvaïment, el contrast, el monocrom o l'activa o desactiva, {{cmd:PDFLAYERS}} activa les capes pròpies del PDF, i {{cmd:PDF}} torna a donar a CadCraft els fitxers que usen els subjacents d'un dibuix. Vegeu [Subjacents PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Àlies: `AUTOC`. Autocompletat del dibuix: sense cap ordre en curs, un fantasma gris mostra el que diuen els patrons del dibuix que ve a continuació. {{cmd:AUTOCOMPLETE}} l'activa `On` o `Off` (també Configuració › CadCraft) o `Show` mostra el que suggeriria ara. **Tab** dibuixa el fantasma com un sol pas de desfer, **Esc** l'amaga fins que canvia el dibuix. Troba tres coses en els objectes més nous: la següent còpia d'alguna cosa dibuixada dues vegades o més a un pas regular (muntants, columnes, la contrapetjada i la petjada d'una escala), els següents passos d'una escala de polilínia, i el costat que falta d'una habitació o cadena de murs. A la mitjana de {{cmd:LINE}} o {{cmd:PLINE}} el fantasma és el **següent punt**: el següent pas d'una escala (contrapetjada, petjada, contrapetjada…), la quarta cantonada d'un rectangle, el punt que el tanca, o un pas igual més. Acosteu el cursor a ell i premeu **Tab**, com si hi haguéssiu fet clic; continueu o premeu Enter. Es calcula en aquest ordinador amb regles, sense model.

### AUTOSHEET

Àlies: `ASH`. Fulls que es disposen sols. {{cmd:AUTOSHEET}} agafa les peces del dibuix (les vostres vistes amb nom, o les peces separades del model, o el model sencer), tria una mida de paper (o la que doneu), dona a cada peça una escala normalitzada (una per a totes, o la més gran que cadascuna admet) i col·loca les vistes en files en fulls nous, amb un caixetí i un peu (nom i escala) sota cada una. El que no cap en un full té el seu propi full. Un sol pas de desfer. Es calcula en aquest ordinador amb regles, sense model.

### PHOTOSKETCH

Àlies: `PSK`. Foto de croquis a dibuix. Trieu una foto (JPEG, PNG o TIFF) d'un croquis a mà sobre un full de paper. {{cmd:PHOTOSKETCH}} troba les quatre cantonades del full, en redreça la perspectiva, pren la mida de paper que indiqueu (`Paper`, o la normalitzada més propera) i l'`Escala` del croquis (1 : n), i després traça les línies del bolígraf en línies, arcs i cercles, amb una capa per a cada color de bolígraf (negre, vermell, blau, verd). Si no troba la vora del paper, pren tota la foto com el full i ho diu. El rotulat queda fora. Un sol pas de desfer. Es fa en aquest ordinador amb processament d'imatge clàssic, sense model, i no s'envia res enlloc. Vegeu també les ordres de dibuixos escanejats.

### AUTODIM

Àlies: `ADIM`. Acotació automàtica per regles. {{cmd:AUTODIM}} acota els objectes seleccionats (o tot el dibuix) a partir de les seves vores de nivell i plomada: una cadena de cotes al llarg dels costats que trieu (`Costats`), una cota total per fora, l'amplada de cada obertura (un espai entre línies de mur alineades), un diàmetre per a cada mida de forat, i amb `Quadrícula` l'espaiat entre les línies de quadrícula. Una cota que ja hi és no es torna a fer. Un sol pas de desfer. Es calcula en aquest ordinador amb regles, sense model.

### GRIDMOVE

Àlies: `GM`. Moure una línia de quadrícula arrossega el conjunt. {{cmd:GRIDMOVE}} mou una línia de quadrícula (una línia en una capa el nom de la qual diu grid o eix) i el que hi penja: els murs amb un extrem a la línia s'estiren per seguir-la, els murs al llarg d'ella es mouen sencers, les columnes (referències de bloc i cercles sobre la línia), la seva bombolla i la seva etiqueta es mouen, i les cotes amb punts sobre ella mesuren el nou espaiat. Doneu dos punts (només compta la part que travessa la línia) o `Distància`. Un sol pas de desfer ho torna tot enrere. Es fa per regles en aquest ordinador.

### DETAILS

Àlies: `DET`. Detalls que us troben. {{cmd:DETAILS}} manté els detalls propis de la vostra empresa: `Afegeix` posa un bloc d'aquest dibuix a la llista, `Llista` i `Elimina` la gestionen, i `Cerca` els ordena per a allò seleccionat (o per al que heu dibuixat per últim) segons les paraules de les seves capes, noms de blocs, patrons de trama i notes, comparades amb el nom i les notes de cada detall, de manera que un cap de finestra troba la vostra llacuna de ratlla. Trieu un número i un punt per col·locar-lo. Amb `Pista` activat (també a Configuració › CadCraft), seleccionar alguna cosa que coincideix amb un detall posa una línia a la barra d'estat. La llista es guarda en aquest navegador, en aquest ordinador, i és aquesta llista la que es cerca. `Comparteix` la posa també a la vostra carpeta Documents (`.cadcraft/firm-details.json`, amb el dibuix de cada bloc): `Recull` afegeix el que té el vostre equip i a vosaltres us falta, `Envia` afegeix el que teniu i a ells els falta, `Ambdós` fa les dues coses, i mai no se n'elimina res de cap costat. Obriu primer la carpeta Documents ({{cmd:DOCUMENTS}}); quan aquesta carpeta és una carpeta de Team Cloud Plan, tot l'equip comparteix una sola llista. Un element de detall al tauler de Biblioteca té un botó **Afegeix als detalls de la meva empresa** que el posa a la mateixa llista. Es calcula en aquest ordinador per paraules, sense model.

### SKETCHFIX

Àlies: `SKF`. Els croquis a bolígraf es converteixen en geometria precisa. Premeu i arrossegueu un traç a mà alçada cada vegada (bolígraf, ratolí o dit), i després Enter. Cada traç es llegeix com una línia, cercle, arc, rectangle o polilínia: les línies gairebé horitzontals i verticals es fan exactament horitzontals i verticals, un traç tancat i rodó esdevé un cercle, un traç tancat amb quatre cantonades rectes un rectangle, i els extrems dels traços s'estiren junts i sobre els extrems ja presents al dibuix. Un sol pas de desfer. Es calcula en aquest ordinador amb regles, sense model.

### SCANATTACH i les ordres de dibuixos escanejats

Àlies: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} no en té. Treballen sobre una imatge, cadascuna amb un sol pas de desfer. {{cmd:SCANATTACH}} insereix un PNG, JPEG, TIFF (una pàgina o totes) o una pàgina PDF que sigui una imatge. {{cmd:SCANSCALE}} escala el full a partir de dos punts indicats i la distància real. {{cmd:SCANALIGN}} el mou i gira sobre dos punts (`Escala el full per encaixar` Sí/No). {{cmd:SCANDESKEW}} mostra l'angle de les línies llargues del full i el gira quan accepteu (`Accepta`) o doneu un `Valor`. {{cmd:SCANCLEAN}} el posa en blanc i negre (`Llindar` Automàtic/Adaptatiu/Nivell, `Taques`) i `Executa`. {{cmd:SCANCROP}} conserva una finestra. {{cmd:SCANERASE}} esborra un `Rectangle`, `Polígon` o `Llaç`. {{cmd:SCANTRACE}} tradueix línies i arcs en una capa nova (`Tolerància`, `Finestra`, `Arcs`, `Sobrants`, `Executa`) i indica què ha trobat i què ha deixat com a ràster. {{cmd:SCANINFO}} llista el fitxer original i els passos. {{cmd:RASTERSNAP}} activa o desactiva l'enganxament a les línies dels fulls escanejats. Vegeu el tema Dibuixos escanejats i el traçat.

### REGEN i REGENALL

Àlies: `RE` per a {{cmd:REGEN}}, `REA` per a {{cmd:REGENALL}}. Torna a dibuixar a la pantalla el que hi ha al dibuix: {{cmd:REGEN}} la pestanya que mireu (en un full, també el model que mostren les seves finestres), {{cmd:REGENALL}} totes les pestanyes, tots els panells de pantalla dividida i tots els dibuixos oberts. Useu-les quan la imatge sembli antiga després d'un canvi automàtic o molt gran, o quan un assistent ha editat el dibuix; el dibuix en si no es toca, així que no hi ha res a desfer.

### NAMEDVIEW

Àlies: `NV`, `VIEWS`. `Introduïu una opció [?/Restaura/Desa/Finestra/Elimina] <Restaura>`, i després el nom de la vista. `S` desa la vista de la pantalla, `W` una finestra que trieu, `R` mostra una vista desada, `D` n'elimina una, `?` llista les vistes d'aquesta pestanya. Desar sota un nom existent el substitueix; cada canvi és un sol pas de desfer. Les vistes pertanyen a la pestanya on es van desar. Els fitxers DWG i DXF les guarden (la taula VIEW); les vistes d'un full tornen al primer full, perquè el fitxer no diu a quin.

### UNDO i REDO

Àlies: `U` per a {{cmd:UNDO}}; {{cmd:REDO}} no en té. També {{key:Mod+Z}} i {{key:Mod+Y}}.

### LAYER

Àlies: `LA`. Salta al tauler {{ui:Capes}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Introduïu el tipus de línia per als objectes nous` — `PerCapa`, `PerBloc` o un nom (`?` els llista: Continuous, els propis del dibuix, i DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE amb les seves mides `2` (meitat) i `X2` (doble)). {{cmd:LWEIGHT}} (`LW`): el gruix de línia per als objectes nous en mm, o `PerCapa`, `PerBloc`, `Per defecte`. {{cmd:LTSCALE}} (`LTS`): l'escala de tipus de línia del dibuix (desfeta). {{cmd:LWDISPLAY}} (`LWT`): `Mostra els gruixos de línia [ON/OFF]` — el mateix que el botó {{ui:LWT}} de la barra d'estat. Vegeu [Gruixos i tipus de línia](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Introduïu el tipus d'objecte a reanomenar [Capa/Bloc]`, `Introduïu el nom antic`, i després el nom nou; els objectes o referències el segueixen. {{cmd:LAYMRG}}: `Seleccioneu un objecte de la capa a fusionar o [Nom]` fins a {{key:Enter}}, després `Seleccioneu un objecte de la capa de destí o [Nom]` i `S`. {{cmd:LAYDEL}}: `Seleccioneu un objecte de la capa a eliminar o [Nom]`, i després `S`: la capa i tots els objectes que hi són se'n van (no la capa 0, DEFPOINTS ni la capa actual). Un sol pas de desfer cadascuna. Vegeu [Organitzar un dibuix amb capes](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Capes triant objectes; també al menú {{ui:Eines}} del tauler {{ui:Capes}}. {{cmd:LAYISO}}: `Seleccioneu objectes de la capa (o capes) a aïllar`, i després {{key:Enter}}: totes les altres capes es desactiven. {{cmd:LAYUNISO}} les torna a activar. {{cmd:LAYOFF}} i {{cmd:LAYFRZ}}: `Seleccioneu un objecte de la capa a desactivar` (o congelar), repetidament; `U` treu l'últim, {{key:Enter}} acaba. {{cmd:LAYMCUR}}: `Seleccioneu l'objecte la capa del qual serà l'actual`. {{cmd:LAYON}} activa totes les capes, {{cmd:LAYTHW}} les descongela totes. Cada ordre és un sol pas de desfer. Vegeu [Organitzar un dibuix amb capes](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} comença un dibuix buit i {{cmd:OPEN}} obre un DWG o DXF, cadascun en la seva pròpia pestanya sobre el dibuix (un dibuix nou sense modificar s'usa en lloc d'una pestanya nova). Tancar una pestanya amb canvis sense desar pregunta primer. Vegeu [Dividir la pantalla](topic:split-screen).

{{cmd:SAVE}} (àlies `QSAVE`, també {{key:Mod+S}}) descarrega una còpia en el format del dibuix: DWG si s'ha obert d'un DWG, DXF si és d'un DXF. Un dibuix nou usa el format triat per última vegada a Desa com a en aquest navegador, o DWG.

{{cmd:SAVEAS}} (també {{key:Mod+Shift+S}}) obre el diàleg {{ui:Desa una còpia com a}}: trieu {{ui:DWG}} (i la seva {{ui:Versió}}), {{ui:DXF R12}} o {{ui:DXF 2000}}, i després {{ui:Desa}}. L'elecció es queda per a aquest dibuix i per als dibuixos nous en aquest navegador.

{{cmd:DXFOUT}} descarrega sempre una còpia DXF R12, sense canviar el format que usa {{cmd:SAVE}}.

Vegeu [Fitxers: què s'obre, què es desa](topic:files#saving).

### TOUR

Àlies: `TUTORIAL`. Torna a començar el recorregut de sis passos del primer dibuix. Vegeu [Primers passos](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Àlies: `TBDOCK`. `Posició de la barra d'eines [Dalt/Baix/Esquerra/Dreta]`. Vegeu [Configuració](topic:settings#toolbar-position).

### COMMANDLINE

Àlies: `CMDLINE`. `Línia d'ordres [Acoblada a baix/Flotant/Una línia/Línies d'historial mostrades/Historial d'ordres (F2)]`: acobla o deixa flotant la línia d'ordres, la fa d'una sola línia, demana quantes línies d'historial mostrar (de 0 a 12), o obre l'historial. Vegeu [Configuració](topic:settings#command-line).

### TOPAREA

`Àrea superior [Estàndard/Compacta]`: les barres sobre el dibuix com eren, o compactes. Vegeu [Configuració](topic:settings#top-area).

### POLARANG

`Introduïu el pas de l'angle polar en graus <90>`: el pas al qual s'alinea el seguiment {{ui:Polar}} (més de 0, fins a 180). Es guarda en aquest navegador.

### UNITS

Àlies: `UN`. Com s'escriuen i s'introdueixen les longituds.

- `Introduïu el format de longitud [Científic/Decimal/Enginyeria/Arquitectònic/Fraccionari] <actual>`
- Arquitectònic i Fraccionari: `Introduïu el denominador de la fracció més petita a mostrar (1, 2, 4, 8, 16, 32, 64, 128 o 256)`. Els altres: `Introduïu el nombre de decimals (0 a 8)`.

Les cotes noves el segueixen. Un sol pas de desfer. Igual que {{ui:Format de longitud}} i {{ui:Precisió}} a {{ui:Configuració actual}}; vegeu [Peus i polzades](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Àlies: `GDS`. Veu un layout de circuit integrat (un fitxer de flux GDSII): prova de laboratori, només per veure i mesurar.

- Un selector de fitxers accepta un fitxer `.gds`; amb diverses cel·les superiors, `Introduïu la cel·la superior a dibuixar`.
- Cada capa i tipus de dades es converteix en una capa de dibuix (`GDS 1`, `GDS 2/5`); les referències i matrius es col·loquen planes, en la unitat d'usuari del fitxer (normalment micròmetres). Un sol pas de desfer. No es simula ni es comprova res, i el fitxer no es torna a escriure.

### DIAGRAM

Àlies: `TEXTDIAGRAM`, `T2D`. Un diagrama a partir de text.

- Un quadre agafa el text (o una línia amb `;` entre sentències a la línia d'ordres): un diagrama de flux Mermaid, un diagrama de components PlantUML, D2 o una llista d'origen i destinació.
- `Especifiqueu la cantonada superior esquerra del diagrama`, i després `Especifiqueu l'alçada del text`.

Els blocs i connectors són objectes normals a la capa `Diagram`, seleccionats quan acaba. Un sol pas de desfer. Vegeu [Dibuixar un diagrama a partir de text](topic:text-to-diagram).

### OLELIST

Àlies: `OLES`. Els objectes OLE que porta un DWG i que CadCraft no pot col·locar per si mateix.

- Llista cadascun: número, tipus, mida, si ha desat una imatge.
- `Introduïu una opció [Col·loca/eXit] <eXit>`: Col·loca demana el número, la cantonada inferior esquerra i l'amplada, i dibuixa un marc amb la imatge. Un sol pas de desfer; l'objecte conservat no es canvia. Vegeu [Imatges](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Àlies: `SHX`. Les vostres pròpies fonts SHX.

- `Introduïu una opció de fonts SHX [Carpeta/Fitxers/Llista/Elimina/Inverteix/Buida] <Llista>`

{{ui:Carpeta}} llegeix cada `.shx` d'una carpeta (CadCraft Studio; de nou a cada inici), {{ui:Fitxers}} agafa fitxers triats (el navegador), {{ui:Inverteix}} dispon les lletres d'un tipus de lletra de l'última a la primera. Els estils de text que citen una font carregada es dibuixen amb ella. Vegeu [Dibuixar text amb les vostres pròpies fonts SHX](topic:shx-fonts).

### LIMITS

Quina mida ha de tenir el dibuix.

- `Especifiqueu la cantonada inferior esquerra o [ON/OFF] <actual>`: un punt, `ON` o `OFF`.
- `Especifiqueu la cantonada superior dreta <actual>`.

La quadrícula omple els límits, {{cmd:ZOOM}} Tot els mostra, i amb ells ON un punt fora és rebutjat (`**Fora de límits`). Un sol pas de desfer; es desa en DWG i DXF. Vegeu [Definir els límits del dibuix](topic:drawing-limits).

### AUNITS

Àlies: `ANGUNITS`. Com es mostren i s'introdueixen els angles.

- `Introduïu el format d'angle [Graus decimals/Graus-minuts-segons/Rumbs de topògraf] <actual>`
- `Introduïu el nombre de decimals (0 a 8)`, o per als altres dos `Introduïu la precisió` (0 graus, 2 minuts, 4 segons, de 5 a 8 decimals de segon).

Un sol pas de desfer; es desa en DWG i DXF. Igual que {{ui:Format de l'angle}} a {{ui:Configuració actual}}. Vegeu [Escriure i mostrar rumbs i angles](topic:bearings-and-angles).

### APPLOAD

Àlies: `AP`; o {{ui:Vista}} › {{ui:Més}} › {{ui:Carrega l'aplicació…}}. El diàleg {{ui:Carrega aplicacions}}: carrega rutines `.lsp` i fitxers de diàleg `.dcl`, els descarrega, els torna a carregar des de l'historial, i la Suite d'inici. Les ordres `(defun c:NOM …)` d'una rutina després funcionen com qualsevol altra. Vegeu [Carregar aplicacions](topic:load-applications) i [Executar rutines LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (o {{ui:Vista}} › {{ui:Més}} › {{ui:Edita àlies…}}) obre el vostre fitxer d'àlies (línies `ALIAS, *COMMAND`); {{ui:Desa}} l'aplica. {{cmd:REINIT}} l'aplica de nou. Vegeu [Editar àlies d'ordres](topic:command-aliases).

### LISPEDIT

Àlies: `VLIDE`; o {{ui:Vista}} › {{ui:Més}} › {{ui:LISP editor}}. Obre l'editor LISP, una finestra que queda oberta al costat del dibuix.

- El text: números de línia, el parell del parèntesi del cursor marcat (en vermell si no en té), {{key:Enter}} sagna la línia nova sota el parèntesi obert, {{key:Tab}} escriu dos espais, {{key:Esc}} surt del text.
- {{ui:Carrega al dibuix}} ({{key:Ctrl+Shift+Enter}}): llegeix totes les formes, com fa {{cmd:APPLOAD}} amb el fitxer, i en crea les ordres `c:`. El fitxer apareix a la llista d'{{cmd:APPLOAD}}.
- {{ui:Executa la selecció}} ({{key:Ctrl+Enter}}): avalua les formes seleccionades, o la forma on és el cursor.
- {{ui:Atura}}: acaba una rutina en curs.
- {{ui:Consola}}: el que ha imprès la rutina, i cada error amb la seva línia; feu clic en un error per anar-hi. El text s'executa una forma de nivell superior cada vegada, de manera que la línia és la de la forma, o dins seu la línia que crida la funció que l'error anomena.
- {{ui:Nova}}, {{ui:Obre}}, {{ui:Desa}} ({{key:Ctrl+S}}): un fitxer `.lsp`. El text també es guarda en aquest navegador, de manera que tancar la finestra no el perd.
- Al costat del text: les funcions que defineix la rutina, les que crida i que aquest LISP encara no té, les que crida i que no defineix ella ni són integrades, i les llistes completes del que és integrat i del que no ho és.

Un text amb un parèntesi que mai no es tanca, o una cadena que mai no acaba, no s'executa: se n'indica la línia. No hi ha depurador pas a pas, ni punts d'aturada, ni finestra de vigilància. Vegeu [Executar rutines LISP](topic:run-lisp).

### HELP

Àlies: `?`. Imprimeix totes les ordres, els seus àlies i una descripció d'una línia a l'historial de la línia d'ordres. No obre aquesta ajuda: premeu {{key:F1}} o feu clic a {{ui:Ajuda}} per això.

## Indicació de selecció d'objectes

A qualsevol indicació `Seleccioneu objectes`: feu clic en objectes, dibuixeu finestres (d'esquerra a dreta) i intersecions (de dreta a esquerra) amb dos clics, o premeu i arrossegueu un llaç ({{key:Space}} mentre arrossegueu: finestra, intersecció, tanca), {{key:Shift}}+clic per treure, i premeu {{key:Enter}} per acabar. També podeu escriure `ALL` (tot), `L` (l'últim objecte), `P` (Anterior: el que va usar l'última ordre), `F` (Tanca: objectes que travessa una línia de punts; `U` treu un punt), `W` (Finestra), `C` (Intersecció), `R` (mode Elimina: els clics treuen objectes; la indicació diu `Elimina objectes`) i `A` (Afegeix de nou). `?` les llista. No es mostren a la indicació. {{key:Tab}} sobre objectes superposats ressalta el següent; feu clic per triar-lo. Vegeu [Seleccionar objectes](topic:select-objects).

### ACCESS

Àlies: `AX`. Dibuix sense visió. {{cmd:ACCESS}} activa o desactiva l'accés (`On`, `Off`), i canvia els sons d'enganxament (`Sound`) i les ordres dictades (`Voice`); primer diu l'estat. Amb l'accés activat, cada ordre i resultat es llegeix pel lector de pantalla, i l'àrea de dibuix té un cursor de teclat. El tema d'ajuda «Dibuix sense visió» té les tecles.

### DESCRIBE

Àlies: `DESC`. Diu què conté el dibuix: quants objectes, de quin tipus, de quina mida, quantes capes, què és seleccionat. Només llegeix; no canvia res.

### WHEREAMI

Àlies: `WHERE`. Diu on és el cursor, en les unitats del dibuix.

### NEARBY

Diu què hi ha prop del cursor, el més proper primer, cadascun amb la seva distància i el costat on és.

### SAYSEL

Diu què és seleccionat, una frase per objecte (longitud de la línia, extrems i angle; radi i centre del cercle; text tal com està escrit).

### VOICE

Activa o desactiva les ordres dictades. Es reconeixen en aquest ordinador; quan el navegador no ho pot fer, la veu queda apagada tret que trieu el servei en línia del navegador a Configuració.

### TOUCHCROSSHAIR

Àlies: `TCX`. La creueta desplaçada per dibuixar amb el dit, perquè la punta del dit no tapi el punt que escollíu. Mentre és activada, un dit sobre el dibuix no indica res: mou una creueta que queda per sobre del dit i a un costat. Les referències a objectes i el seguiment segueixen la creueta. Aixecar el dit no indica res i deixa la creueta on és. Per indicar, premeu el botó {{ui:Clic}} de la cantonada del dibuix, o toqueu qualsevol lloc del dibuix amb un segon dit. Mantenir {{ui:Clic}} mentre mogueu l'altre dit arrossega (una finestra de selecció, un llaç, una nansa). Un dit mantingut quiet, o el botó {{ui:Enter}}, és Enter. Dos dits desplacen i fan zoom com abans. Prop de la vora inferior i de la vora llunyana la creueta s'acosta al dit, perquè tota part del dibuix es pugui arribar. Un bolígraf i un ratolí indiquen sempre directament.

{{cmd:TOUCHCROSSHAIR}} diu l'estat i pregunta `ON`, `OFF`, `Auto` (només on un dit és l'únic punter, de manera que és desactivada en un ordinador amb ratolí), `Distància` (a quina distància de el dit és la creueta, de 24 a 240 píxels) o `Costat` (`Esquerra`: amunt i a l'esquerra, per a la mà dreta; `Dreta` per a l'esquerra; els botons passen a l'altra cantonada). Les mateixes opcions són a Configuració › CadCraft, i en un dispositiu amb pantalla tàctil la barra d'estat té un interruptor {{ui:Creueta desplaçada}}. Les opcions es guarden en aquest navegador.

### WHOHAS

Diu qui té obert un dibuix. A CadCraft Studio en un ordinador, obrir un DWG o DXF escriu un petit fitxer de bloqueig al costat (`Plan.dwg.cclock`: qui, des de quan, quina versió), el refresca cada minut mentre el dibuix és obert i l'elimina en tancar-lo. Obrir un dibuix que té obert una altra persona diu qui és i des de quan, i ofereix {{ui:Obre només lectura}} (Desa aleshores demana un nom nou), {{ui:Obre igualment}} (l'altra persona ho rep en el seu següent refresc) o {{ui:Cancel·la}}. Desar sobre un fitxer que una altra persona té obert pregunta primer. Un bloqueig que no s'ha refrescat en cinc minuts es diu obsolet: l'altra còpia es va tancar sense desar o l'ordinador està en repòs.

{{cmd:WHOHAS}} pregunta `Actual` (el dibuix obert), `Fitxer` (en triar-ne un), `Carpeta` (trieu una carpeta: es llista cada dibuix d'aquesta que és obert en algun lloc), `Camí` (escriviu un camí complet) o `Nom` (el nom que veuen els altres; el nom del vostre compte quan heu iniciat sessió). Studio només pot accedir a carpetes que heu triat: per a un dibuix obert des d'una carpeta que mai no es va triar, ho diu una vegada que no pot anotar el dibuix com a obert; `Carpeta` tria la carpeta, i a partir d'aquí els bloquejos hi funcionen. El bloqueig és una nota per a les persones, no una barrera: un altre programa encara pot escriure el fitxer. En un navegador no hi ha carpetes on mirar, i l'ordre ho diu.

### OVERKILL

Elimina objectes duplicats i ordena les línies i els arcs que se superposen, per a dibuixos que arriben plens de traços doblats. `Seleccioneu objectes per netejar`, {{key:Enter}}, després {{key:Enter}} una altra vegada per netejar amb la configuració mostrada, o canviar-ne una abans:

- `Tolerància`: quan de a prop han d'estar dues coordenades per comptar com la mateixa (0,000001 com a configuració inicial; 0 vol dir exactament igual).
- `Ignora`: propietats que poden diferir entre dos objectes per altra banda iguals. Escriviu un nom per canviar-la: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, o `None` / `All`. {{key:Enter}} quan acabeu.
- `Superposició`: activat o desactivat. Activat, les línies que van sobre una mateixa recta i se superposen esdevenen una sola línia (una línia que queda dins d'una altra s'elimina), i els arcs d'un mateix cercle que se superposen esdevenen un sol arc; els arcs que fan una volta completa esdevenen un cercle, i un arc sobre un cercle s'elimina.
- `Extrems`: activat o desactivat. Activat, les línies sobre una mateixa recta i els arcs d'un mateix cercle que només es toquen d'extrem a extrem esdevenen una sola peça.

Cada tipus d'objecte es verifica per duplicats: dos objectes són duplicats quan la seva geometria és la mateixa dins la tolerància i la seva capa, color, tipus de línia, escala del tipus, gruix de línia, gruix, transparència i alçada coincideixen (menys les que ignoreu). Les línies i les polilínies obertes també coincideixen quan estan dibuixades en sentit invers. El primer objecte de l'ordre de dibuix es queda i manté les seves propietats. L'ordre indica quants objectes ha revisat i quants n'ha eliminat: duplicats, trossos superposats fusionats, trossos units d'extrem a extrem. Un sol {{cmd:UNDO}} ho desfà tot. La configuració dura fins que tanqueu la finestra del dibuix.

Deixa en pau: els objectes de capes bloquejades i els objectes ocults. No fusiona línies amb una alçada (Z) (els duplicats exactes sí que s'eliminen), i no toca els segments dins d'una polilínia (no s'aprimen), ni una línia sobre un segment de polilínia, ni una polilínia tancada dibuixada en sentit invers.

### DRAWORDER

Canvia quins objectes es dibuixen davant. `Seleccioneu objectes per reordenar`, {{key:Enter}}, després `Sobre objectes`, `Sota objectes`, `Davant` o `Darrere` ({{key:Enter}} = `Darrere`). `Sobre objectes` i `Sota objectes` demanen els objectes de referència: la selecció va just davant del més davanter d'ells, o just darrere del més posterior. Els objectes seleccionats mantenen el seu propi ordre entre ells. Un sol pas de desfer. L'ordre es desa amb el dibuix en DWG i DXF, on és l'ordre en què s'escriuen els objectes.

A la pantalla CadCraft dibuixa primer les àrees amb farciment (trames sòlides, polilínies amples, màscares), després les línies, i després el text, de manera que el text sempre es llegeix sobre un farciment; l'ordre de dibuix es nota entre objectes amb farciment i entre imatges. Els altres programes que obren el fitxer dibuixen cada objecte en l'ordre desat.

### TEXTTOFRONT

Porta el text, les cotes i les línies de crida davant de tota la resta de l'espai obert: `Text`, `Cotes`, `Línies de crida` o `Tot` ({{key:Enter}} = `Tot`). Un sol pas de desfer. Ho indica quan no n'hi ha cap, o quan ja són davant.

### HATCHTOBACK

Envia cada trama de l'espai obert darrere de tota la resta, perquè els farcits deixin de tapar les línies i el text al fitxer desat. Sense indicacions. Un sol pas de desfer.

### ISOLATEOBJECTS

Àlies: `ISOLATE`. Mostra només els objectes seleccionats: tota la resta de l'espai obert desapareix de la vista fins a {{cmd:UNISOLATEOBJECTS}}. A diferència de {{cmd:LAYISO}}, funciona sobre els objectes que trieu, siguin quines siguin les seves capes, i no canvia cap capa. Els objectes ocults no es dibuixen, no es trien, no s'enganxen, no hi fa zoom i no es tracen; les ordres que accepten `ALL` els passen per alt. Allò que dibuixeu mentre els objectes estan aïllats es mostra com de costum.

Això és només per a la sessió: no es desa res d'això amb el dibuix, no és un pas de desfer, i en tornar a obrir el dibuix es mostra tot. Mentre hi ha objectes ocults, la barra d'estat mostra un botó amb el seu nombre; feu-hi clic per tornar-los a mostrar.

### HIDEOBJECTS

Amaga els objectes seleccionats fins a {{cmd:UNISOLATEOBJECTS}}. Les mateixes regles que {{cmd:ISOLATEOBJECTS}}: només per a la sessió, no desat, no és un pas de desfer.

### UNISOLATEOBJECTS

Àlies: `UNISOLATE`, `UNHIDE`. Torna a mostrar cada objecte amagat per {{cmd:ISOLATEOBJECTS}} o {{cmd:HIDEOBJECTS}}, i diu quants n'han tornat.

### LAYLOCKFADE

Defineix com es veuen els objectes de capes bloquejades i si un clic els arriba. Diu l'estat actual, i després accepta:

- un nombre de 0 a 90: la quantitat d'esvaïment en percentatge (50 com a configuració inicial). 0 desactiva l'esvaïment.
- `ON` o `OFF`: esvaïment activat o desactivat, mantenint la quantitat.
- `Triar`, i després `Sí` o `No`: un clic pot seleccionar objectes de capes bloquejades mentre no hi ha cap ordre en curs? `No` (per defecte): no es poden triar de cap manera. `Sí`: un clic o una finestra els selecciona perquè {{ui:Propietats}} els pugui mostrar; tot i això no es poden canviar, i la pròpia `Seleccioneu objectes` d'una ordre mai no els agafa.

Les referències a objectes troben objectes de capes bloquejades en tots dos casos. Els traçats mai no s'esvaeixen. Les dues configuracions són vostres, no del dibuix, i també són a {{ui:Configuració}} sota {{ui:Capes bloquejades}}.

### BURST

Descompon referències de bloc i conserva el que diuen els seus atributs. `Seleccioneu referències de bloc a descompondre`, {{key:Enter}}: cada referència es substitueix pels objectes del bloc, i el valor de cada atribut visible esdevé text simple a la capa pròpia de l'atribut (un atribut a la capa 0 va a la capa de la referència, com els altres objectes del bloc a la capa 0). Els atributs invisibles s'eliminen. Un bloc dins del bloc continua essent una referència de bloc. Un sol pas de desfer; informa de les referències descompostes i dels valors d'atribut convertits en text.

Refusa un dibuix enllaçat pel nom (vincula'l abans, o copia'n amb {{cmd:NCOPY}}), i deixa en pau els altres objectes seleccionats. Per a referències de bloc {{cmd:EXPLODE}} dona els mateixos objectes; {{cmd:BURST}} només agafa referències de bloc i compta el text dels atributs.

### TXT2MTXT

Àlies: `T2M`. Uneix textos d'una línia en un sol text de paràgraf. `Seleccioneu textos d'una línia a unir`, {{key:Enter}}, després `Paràgraf` (les línies s'ajunten i s'ajusten a l'amplada de la línia més ampla) o `Línies` (cada text continua sent una línia pròpia); {{key:Enter}} agafa el que es va usar per últim. Les línies s'ordenen de dalt a baix, i després d'esquerra a dreta, seguint la direcció del text superior. El paràgraf penja de la cantonada superior esquerra del text superior i en pren l'alçada, la rotació, l'estil, la capa i el color. Un sol pas de desfer.

El text que ja és de paràgraf, el text en blanc i els altres objectes de la selecció es deixen en pau, i l'ordre diu quants n'hi ha.

### NCOPY

Copia objectes d'una referència de bloc o d'un dibuix enllaçat al dibuix, sense descompondre res. `Trieu un objecte dins d'una referència de bloc o d'un dibuix enllaçat`: l'objecte més proper al clic es copia on es veu, per fons que sigui dins de blocs; trieu-ne més i després {{key:Enter}}. A continuació `Punt base per moure les còpies`: {{key:Enter}} les deixa al seu lloc, o doneu un punt base i un segon punt. Tota l'ordre és un sol pas de desfer.

Una còpia pren la capa on es veu: un objecte a la capa 0 dins d'un bloc va a la capa de la referència on era, i un color PerBloc passa a ser el color d'aquella referència. D'un dibuix enllaçat, la capa `Plà|Murs` esdevé `Plà$0$Murs` (el nom que dona l'enllaç), feta amb el color, tipus i gruix de línia de la capa enllaçada. El valor d'un atribut es copia com a text. Les referències de bloc en capes bloquejades no es poden triar.

### FLATTEN

Posa l'alçada (Z) i el gruix dels objectes seleccionats a 0. `Seleccioneu objectes per aplanar`, {{key:Enter}}. També aplana els objectes dins de les definicions de blocs que usa la selecció (i els blocs dins d'aquests), de manera que canvia cada referència a aquests blocs; els dibuixos enllaçats es deixen com estan. Un sol pas de desfer; informa de quants objectes han canviat, i ho diu quan cap no tenia alçada ni gruix.

El que CadCraft conserva de la tercera dimensió en un dibuix 2D és: una alçada a cercles, arcs, el·lipses, punts, text, referències de bloc, trames, línies de crida i polilínies (la seva elevació), una alçada a cada extrem d'una línia, i un gruix a línies, cercles, arcs, polilínies, punts i text, tal com els tenia el fitxer. {{cmd:FLATTEN}} posa a zero exactament aquests valors. No toca el model 3D de la pestanya 3D, ni les cares ni els sòlids 3D, i un objecte dibuixat en un pla inclinat ja es va portar al pla del dibuix quan es va obrir el fitxer.

### BREAKLINE

Dibuixa una línia amb un símbol de trencament, per a una vista que queda tallada. Diu la mida i la prolongació actuals, i després `Primer punt de la línia de trencament` (o `Mida` / `Prolongació` per canviar-les abans), `Segon punt`, i `On es posa el símbol de trencament`: feu clic al llarg de la línia, o {{key:Enter}} per al mig. El resultat és una sola polilínia a la capa actual: la línia, que passa de cada punt en la prolongació indicada, amb un traç en forma de Z tan alt com la mida i la meitat de llarg.

`Mida` i `Prolongació` es recorden com a configuració pròpia (la mida comença com el doble de l'alçada del text de cota multiplicat per l'escala de cota; la prolongació, la meitat de la mida). {{key:Enter}} repeteix l'ordre.

### AUDIT

Revisa el dibuix obert per detectar danys i els repara. {{cmd:AUDIT}} mira cada objecte del model, dels fulls i dins dels blocs, i la taula de capes, i enumera el que troba per tipus:

- nombres que no són finits o són absurdament grans;
- objectes sense mida: una línia sense longitud, un cercle sense radi, una polilínia amb un sol punt, un text sense lletres o sense alçada, una referència de bloc d'escala zero;
- objectes en una capa que el dibuix no té; referències a un bloc que no hi és; noms d'estil de text i de cota i de tipus de línia que no són al dibuix;
- blocs que es contenen a si mateixos, directament o a través d'altres blocs;
- objectes que comparteixen un identificador, una clau o un identificador de fitxer;
- cotes sense els punts des dels quals es mesuren, i trames la vora de les quals no és un contorn tancat.

Després pregunta `Corregir-los? [Sí/No]`. `No` no canvia res. `Sí` repara tot en un sol pas de desfer: s'elimina el que no es pot dibuixar (nombres dolents, sense mida, bloc que falta, cota trencada, trama sense vora utilitzable, la referència que tanca un cercle de blocs); una capa que falta es crea; els noms d'estil i de tipus de línia desconeguts tornen als valors per defecte; una clau compartida es reemplaça. Indica quants objectes s'han eliminat i quants s'han reparat. Les mateixes troballes apareixen al tauler de Problemes, cadascuna amb el seu propi {{ui:Repara}}.

No rebutja res, però només revisa el que CadCraft mateix dibuixa: les dades que es guarden per a altres programes (sòlids 3D, objectes OLE) no s'obren.

### RECOVER

Obre un DXF o DWG danyat. {{cmd:RECOVER}} demana el fitxer, llegeix el que es pot llegir en lloc de rebutjar-lo, llista el que ha omès o suposat, i després comprova i repara el dibuix com fa {{cmd:AUDIT}} amb `Sí`.

- DXF: les línies que no formen part d'un parell de codi i valor s'ometen fins que els parells tornen a quadrar; una secció sense final es tanca; un fitxer que s'ha tallat es llegeix fins al tall; un DXF binari tallat es llegeix fins al seu últim valor complet. Quan una secció, un bloc o un objecte encara no es pot llegir, s'omet i se n'indica el nom, i la lectura continua més enllà.
- DWG: els objectes que fallen les seves comprovacions o no es poden descodificar s'ometen, i una llista d'objectes perduda es reconstrueix recorrent les dades dels objectes.

El fitxer del disc no es canvia. El dibuix recuperat s'obre sense desar: deseu-lo amb un nom nou. Un fitxer del qual no es pot llegir res es refusa, amb la raó.

### LEGACYTEXT

Converteix el text escrit amb fonts vietnamites antigues de 8 bits a Unicode. Àlies curts `TEXTTOUNICODE` i `VNTEXT`.

Els dibuixos vietnamites més antics tenen el seu text com a caràcters occidentals que només la font converteix en vietnamita: text TCVN3 a les fonts ABC (`.VnTime`, `.VnArial`, i les fonts en majúscules que acaben en `H`), i text VNI a les fonts VNI (`VNI-Times`). CadCraft mostra aquest text tal com es llegeix en obrir el dibuix, segons la font del seu estil de text, de l'objecte, o d'un tram de text de paràgraf; el fitxer encara conté els caràcters antics.

{{cmd:LEGACYTEXT}} diu quants textos ha trobat en cada codificació i pregunta `Convertir … a Unicode?`. `Sí` reescriu cadascun (model, fulls, blocs, valors i definicions d'atributs) i dona als estils de text una font Unicode (Times New Roman, Arial o Courier New segons el tipus de la font antiga), en un sol pas de desfer. El format dins del text de paràgraf es manté.

Quan cap text usa una font coneguda (un estil que ha perdut el nom de la font), pregunta `Llegir els textos seleccionats com [Tcvn3/Vni/Cap]`: trieu la codificació i seleccioneu els textos. El text que ja és Unicode es deixa en pau. Els textos de substitució de cota i el text de les multilínies de crida no es converteixen.
