---
title: Fitxers: què s'obre, què es desa
summary: Els formats que CadCraft obre, desa i exporta, què es conserva o es converteix, i on van els fitxers.
keywords: xclip, retall, límit de xclip, lliga retallat, dwg, dxf, pdf, r12, obre, desa, exporta, importa, formats, conversió, baixada, saveas, dxfout, anomena i desa, desa dwg, format, qsave, xref, xattach, dibuix enllaçat, referència externa, lliga, torna a carregar, desvincula
from: 6d68b34e
---

## D'un cop d'ull

| Format | Obre | Desa | Observacions |
|---|---|---|---|
| DXF (text, qualsevol versió) | Sí | Sí, com a DXF R12 o DXF 2000 | El DXF binari es rebutja: deseu-lo primer com a DXF de text. |
| DWG | Sí | Sí, com a DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 o 2018) | El llegeix i l'escriu la pròpia biblioteca DWG de CadCraft (fitxers AutoCAD R13 a 2018). El vostre DWG mai no es modifica. Els fitxers malmesos, o les versions que el lector no gestiona, es rebutgen amb un missatge. |
| PDF | Porta una pàgina: com a fons o com a objectes ([Fons PDF](topic:pdf-underlay)) | Sí, en traçar | PDF vectorial d'un full, o del model a una escala. |

Cada dibuix que obriu (o que creeu amb {{ui:Nova}}) té la seva pròpia pestanya sobre l'àrea de dibuix; un dibuix nou que ningú no ha tocat encara s'utilitza en lloc d'afegir una pestanya. Feu clic a una pestanya per canviar-hi, al seu {{ui:×}} per tancar-la (CadCraft pregunta primer si hi ha canvis sense desar), o disposeu els dibuixos oberts un al costat de l'altre: vegeu [Divideix la pantalla](topic:split-screen).

## Obrir un dibuix

- Premeu {{key:Mod+O}}, feu clic a {{ui:Obre}}, o escriviu `OPEN`, i després trieu el fitxer.
- O bé arrossegueu un fitxer `.dwg` o `.dxf` a l'àrea de dibuix.

El fitxer es llegeix dins del vostre navegador. No es puja enlloc. L'historial indica quants objectes i capes han entrat i quant ha trigat, i la secció {{ui:Dibuix}} del panell esquerre mostra el format, per exemple "DWG 2018 (AC1032)".

El lector de DWG forma part de CadCraft i es descarrega amb el primer DWG que obriu després que la pàgina es carregui (unes quantes centenes de KB), així que no cal cap descàrrega separada. Llegeix el fitxer en segon pla, de manera que la pàgina continua responent mentre s'obre un DWG gran.

### Què entra

- Línies, arcs, cercles, polilínies (amb segments d'arc), el·lipses, punts, text i text multilínia, sòlids, trames (els patrons estàndard es dibuixen com a línies, els altres com un to pla), referències a blocs amb els seus atributs (valors que podeu editar; vegeu [Atributs de bloc](topic:attributes)), cotes, i disposicions amb les seves finestres gràfiques.
- Les splines entren com a splines (grau, punts de control, nusos, pesos, punts d'ajust); vegeu [Splines i polilínies](topic:splines).
- Les multilínies de crida amb una línia de crida i text entren com a multilínies de crida de CadCraft que podeu editar (vegeu {{cmd:MLEADER}}). Les altres (amb un bloc, diverses línies de crida o línies corbes) es dibuixen com les va dibuixar l'altre programa i es mouen com un sol objecte; l'historial indica quantes n'hi ha.
- Les imatges es mostren com un marc amb el nom del fitxer de la imatge fins que doneu a CadCraft el fitxer amb {{cmd:IMAGE}}: vegeu [Imatges en un dibuix](topic:pictures#show-the-pictures-a-dwg-uses). Els wipeouts es mostren com el seu marc, i el que hi ha sota continua visible.
- Les taules d'un DWG entren com les va dibuixar l'altre programa.
- Les cares 3D de l'espai model entren a la pestanya {{ui:3D}}, no com a objectes 2D; també les que hi ha dins de blocs, una vegada per cada referència de bloc del model. En un bloc i en un full també es dibuixen planes, com a contorns. Vegeu [Model en 3D](topic:3d-solids).
- Les capes conserven el seu color, activada, congelada, bloquejada i els seus ajustos de traçat. DEFPOINTS mai no es traça.
- Les cotes es converteixen en cotes reals i editables de CadCraft quan es poden llegir els seus punts. Primer es mostren exactament com les va dibuixar l'altre programa; en el moment que en canvieu una, CadCraft la torna a dibuixar amb el seu propi estil.
- Cada disposició es converteix en una pestanya de full. A l'altre programa, cada disposició té una primera finestra gràfica amagada que és el propi full; CadCraft la deixa de banda.

### Què encara no entra

Tot el que CadCraft no pot dibuixar es compta, no s'endevina. La caixa "Quant a aquest fitxer" del panell esquerre ho llista com a "Encara no es mostra:", seguit de cada tipus d'objecte i de quants n'hi ha. Els casos típics són les taules en un DXF, les malles i els sòlids 3D dins de blocs. Els sòlids 3D, les regions i els cossos de l'espai model es mostren a la pestanya 3D (vegeu [Sòlids d'altres programes](topic:3d-solids#solids-from-other-programs)). Les finestres gràfiques giratòries del fitxer es mostren giratòries, com allà, i conserven el seu gir en desar; també ho fan el SCP actual, els SCP amb nom i una vista girada.

El text es dibuixa amb un únic tipus de lletra d'estil Helvetica. Una etiqueta que cap en una línia amb el tipus de lletra més estret de l'altre programa pot passar a dues línies a CadCraft.

## Desar

Hi ha tres maneres de desar. Cadascuna baixa una còpia.

- **Desa**: premeu {{key:Mod+S}}, feu clic a {{ui:Desa}}, o escriviu `SAVE` (també `QSAVE`). Desa en el format del dibuix: DWG si heu obert un DWG, DXF si heu obert un DXF. Un DWG conserva la versió amb què ha entrat (un fitxer 2018 es desa com a 2018). Un dibuix nou fa servir el format i la versió de DWG que vau triar per últim a {{ui:Anomena i desa}} en aquest navegador; si mai no n'heu triat cap, DWG en format AutoCAD 2000.
- **Anomena i desa**: premeu {{key:Mod+Shift+S}}, feu clic a {{ui:Anomena i desa}}, o escriviu `SAVEAS`. El diàleg {{ui:Desa una còpia com a}} ofereix {{ui:DWG}}, amb una llista {{ui:Versió}} (AutoCAD 2018, 2013, 2010, 2007, 2004 o 2000), {{ui:DXF R12}} i {{ui:DXF 2000}}, cadascun amb el nom de fitxer que li donarà, i el format i la versió actuals del dibuix ja seleccionats. Feu clic a {{ui:Desa}} per baixar-lo, o a {{ui:Cancel·la}} (o {{key:Esc}}) per no desar res; l'historial aleshores diu "No desat." El que trieu es manté: {{key:Mod+S}} l'usa per a aquest dibuix a partir d'aleshores, i els dibuixos nous en aquest navegador hi comencen.
- **DXFOUT**: escriviu `DXFOUT`. Sempre baixa una còpia DXF R12, i el següent {{key:Mod+S}} encara desa en el format propi del dibuix.

El navegador baixa `<nom del dibuix>.dwg` o `<nom del dibuix>.dxf`. Cada desada és una **baixada nova**; el fitxer que heu obert mai no se sobreescriu ni es modifica. L'historial ho confirma, per exemple "Còpia desada com a Plan.dwg (DWG (AutoCAD 2018)). El Plan.dxf original no ha canviat." Per a un DXF diu "(DXF R12, s'obre en qualsevol programa CAD)". Les línies de sota enumeren tot el que ha canviat pel camí.

Quan CadCraft funciona com a aplicació d'escriptori, desar funciona com en altres programes d'escriptori: {{key:Mod+S}} escriu el dibuix de nou al fitxer que heu obert, en el seu format i versió propis, i l'historial indica on s'ha desat. {{ui:Anomena i desa}} i les exportacions mostren el diàleg de desar del sistema, i un fitxer `.dwg`, `.dxf` o `.ccsheets` que feu doble clic s'obre a CadCraft.

Per a un PDF, traceu en lloc de desar (vegeu més avall).

## Què conserva i què canvia un DWG

CadCraft escriu el DWG per si mateix, dins del vostre navegador, amb la mateixa biblioteca DWG amb què el llegeix. Trieu la versió a {{ui:Anomena i desa}}: el format AutoCAD 2000 (versió de fitxer AC1015) s'obre en més programes, els antics inclosos; els formats més nous (2004, AC1018, fins a 2018, AC1032) conserven també els colors reals. No es puja res, i desar un DWG funciona fora de línia.

Cada versió es comprova rellegint els fitxers desats amb els lectors DWG de tres altres programes i amb el propi CadCraft. Un DWG de CadCraft encara no s'ha obert a l'AutoCAD mateix.

### Què conserva un DWG

- Línies, arcs, cercles, el·lipses, punts i polilínies amb els seus segments d'arc.
- Text d'una línia amb la seva alineació i factor d'amplada.
- Text multilínia i ajustat, com a text multilínia. L'altre programa l'ajusta de nou des de la mateixa amplada.
- Colors dels objectes: per capa, per bloc, els 255 colors estàndard, i colors reals en el format 2004 i posteriors.
- Capes amb el seu color, tipus de línia, gruix de línia i els seus ajustos d'activada, congelada, bloquejada i traçat; tipus de línia, gruixos i escales de tipus de línia propis dels objectes, els patrons de tipus de línia i l'escala de tipus de línia del dibuix.
- Les unitats del dibuix i el format de longitud (decimal, peus i polzades, fraccions…).
- Blocs amb el seu punt base i les definicions d'atribut, incloses les invisibles, constants i predefinides.
- Referències de bloc amb la seva escala, rotació i valors d'atribut.
- Farciments sòlids, i trames amb patró, amb el seu patró, escala i angle (les línies pròpies del patró, de manera que els altres programes dibuixen les mateixes línies que CadCraft).
- Cotes, com a cotes reals: els altres programes les tornen a mesurar quan s'estiren. Cadascuna conserva els seus propis ajustos (alçada del text, mida de la fletxa, decimals, format de longitud) i el seu text, i porta la còpia dibuixada que té tota cota DWG.
- Fulls (disposicions): cada full amb la seva mida de paper i unitats, el que s'hi dibuixa, i les seves finestres gràfiques amb la seva vista i escala.
- Vistes amb nom.
- Multilínies de crida, com a multilínies de crida.
- Noms de capes i blocs tal com els heu escrit, en majúscules i minúscules. (DXF R12 els escriu en majúscules.)

### Què canvia en un DWG

Cadascun d'aquests punts s'indica a l'historial després de desar, quan s'aplica al vostre dibuix.

| A CadCraft | Al DWG desat |
|---|---|
| Colors reals (triats amb el selector de colors), en el format 2000 | El color estàndard més proper: el format 2000 només té els 255. Deseu com a 2004 o posterior per conservar-los |
| Vistes amb nom d'un full | Vistes de l'espai de paper: un DWG no indica a quin full pertanyen, de manera que quan CadCraft torna a obrir el fitxer pertanyen al primer full |
| Text multilínia amb un factor d'amplada | Amplada de lletra normal: en un DWG el factor d'amplada només s'aplica al text d'una línia |
| Noms de capa o de bloc amb caràcters que el DWG no permet | Canviat: un nom d'un dibuix enllaçat com `Base\|Walls` esdevé `Base$0$Walls` (la manera com ho anomena lligar un dibuix enllaçat), i els altres caràcters passen a ser `_` |

### Per què R12, i què es converteix

En desar com a DXF, CadCraft escriu DXF R12, la versió que pot obrir qualsevol programa CAD. És més antiga que algunes funcions, de manera que algunes coses s'escriuen en una forma més simple:

| A CadCraft | Al R12 desat |
|---|---|
| Multilínia | Un objecte de text per línia |
| El·lipses | Polilínies que segueixen l'el·lipse |
| Trames (dels fitxers oberts) | Només els seus contorns |
| Colors reals (triats amb el selector de colors) | El color estàndard més proper |
| Gruixos de línia, i escales de tipus de línia propis dels objectes | Eliminats: R12 no en té cap (els tipus de línia es conserven) |
| Noms de capa i de bloc | S'escriuen en majúscules; els espais i altres caràcters passen a ser `_`, i els noms es tallen a 31 caràcters (`Title block` esdevé `TITLE_BLOCK`) |
| Capes amb el traçat desactivat | Altres programes les traçaran (CadCraft recorda l'ajust quan el dibuix té un full) |
| Cotes | Cotes reals amb el seu propi bloc dibuixat, perquè altres programes les mostrin com les veieu |
| Multilínies de crida | Les línies, la punta de fletxa i el text que dibuixen |
| Vistes amb nom | Conservades, amb els noms en majúscules; les vistes d'un full tornen al primer full |
| Diversos fulls | El primer full és l'espai de paper que mostra tot programa; els altres es conserven com a blocs anomenats `CCLAYOUT_1`, `CCLAYOUT_2` … que CadCraft torna a convertir en fulls quan obre el fitxer |

L'historial enumera cadascun d'aquests que s'ha aplicat al vostre dibuix.

:::tip
Per continuar treballant en un dibuix durant diversos dies, deseu-lo com a DXF i obriu aquest DXF la propera vegada. Tot el que CadCraft pot dibuixar sobreviu al viatge d'anada i tornada, incloses les cotes, els blocs i tots els fulls.
:::

## Dibuixos enllaçats (referències externes)

{{cmd:XATTACH}} (`XA`, o {{ui:Blocs}} › {{ui:Més}} › {{ui:Enllaça un dibuix (xref)}}) enllaça un altre DWG o DXF: trieu el fitxer, i després feu clic on ha d'anar ({{key:Enter}} el col·loca a 0,0). Entra com un sol bloc amb el nom del fitxer, a l'escala correcta quan els dos dibuixos tenen unitats diferents. Les seves capes i blocs conserven els seus noms amb el nom de l'enllaç al davant: `Plan|Walls`, `Plan|Door`, de manera que mai no es barregen amb els vostres. Activeu i desactiveu, congeleu o bloquegeu les capes enllaçades com si fossin les vostres. Un enllaç és només de lectura: canvieu l'altre dibuix i torneu-lo a carregar. El que definiu a les capes d'un enllaç (color, tipus de línia, gruix de línia, activada, congelada, bloquejada, traçat) es conserva quan el torneu a carregar, quan deseu el dibuix com a DWG mentre l'enllaç encara és un enllaç, i quan un altre dibuix enllaça aquest.

{{cmd:XREF}} (`XR`): `?` llista els enllaços (carregats o no, quin fitxer, quantes referències); `A` adjunta; `R` en torna a carregar un des del seu fitxer (torneu a triar el fitxer: el navegador no pot accedir per si mateix a les vostres carpetes); `B` el lliga (es converteix en blocs i capes ordinaris anomenats `Plan$0$Walls`); `D` el desvincula (se'n van les seves referències i capes). Cada acció és un pas de desfer.

{{cmd:XCLIP}} (`XC`) retalla referències de blocs i enllaços: seleccioneu-los, `N` per a un límit nou, després `R` i dues cantonades o `P` i els punts d'un polígon ({{key:Enter}} el tanca); `D` elimina el retall. Només es mostra i es traça el que queda dins, i el retall es mou amb la referència. DWG i DXF 2000 conserven els retalls; DXF R12 desa la referència sencera i ho diu. Quan lligueu un enllaç que té referències retallades, {{cmd:XREF}} `B` pregunta: `A` lliga-ho tot, `C` conserva només la part retallada de cada referència (les línies i els arcs es tallen al límit; els textos i els blocs imbricats es queden quan el seu punt d'inserció és dins).

Un dibuix que obriu pot enllaçar fitxers que CadCraft no pot veure: ho indica i diu quants no estan carregats. Useu {{cmd:XREF}}, `R` i trieu cada fitxer per veure'ls.

En desar, un enllaç carregat es **lliga** dins del fitxer (altres programes veuen blocs i capes ordinaris anomenats `Plan$0$…`), i l'historial ho indica. Un enllaç que no està carregat es queda com un enllaç al seu fitxer, en DWG i DXF.

## Obre en 3D

{{ui:Vista}} › {{ui:Més}} › {{ui:Obre a ModelCraft}} ({{cmd:OPENIN3D}}) obre el dibuix a l'aplicació de modelatge 3D en una pestanya nova, com a DWG, sense pujar-lo. Els canvis que hi feu s'hi queden; deseu-los allà. L'element del menú només apareix on aquella aplicació pot rebre un dibuix.

## Traçar un PDF

Premeu {{key:Mod+P}}, feu clic a {{ui:Traça}}, o escriviu `PLOT`. El PDF es fa dins del navegador i es baixa, o s'obre en una pestanya nova per imprimir-lo. Vegeu [Traça a PDF](topic:plot-pdf).

## On van els fitxers

Cada desada i cada traçat és una baixada, de manera que els fitxers van on el navegador posa les baixades: normalment la carpeta de baixades. Per triar una carpeta cada vegada, canvieu l'ajust de baixades del navegador; [Navegadors i ordinadors](common:browsers) indica on és.

No s'envia res del que obriu o deseu a nosaltres. Vegeu [On van els vostres fitxers](common:your-files).

## Fitxers de projecte PLN i PLA

CadCraft obre dibuixos DWG i DXF, no els fitxers propis d'Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). En obrir-ne un, us indica què és. A Archicad, deseu les vistes o disposicions que necessiteu com a DWG i obriu-les aquí, o exporteu el model com a IFC i obriu-lo a BimCraft. Quan BimCraft pot rebre el fitxer, CadCraft ofereix {{ui:Obre a BimCraft}}.

## Si la pàgina es tanca abans de desar

CadCraft guarda una còpia de cada dibuix que canvieu, només en aquest navegador, un moment després que deixeu d'editar. Si la pestanya es tanca, el navegador s'atura o l'ordinador es reinicia abans de desar, CadCraft pregunta **Voleu recuperar el vostre treball?** la propera vegada que s'inicia: {{ui:Recupera}} torna a obrir el dibuix, sense desar, en la seva pròpia pestanya. Desar el dibuix elimina la seva còpia. Vegeu [Recupera el vostre treball](common:recover).

## En línia i fora de línia

Obrir, dibuixar, desar (DWG i DXF) i traçar, tot passa al vostre ordinador, de manera que funcionen sense connexió un cop CadCraft s'ha carregat.

Per fer servir CadCraft sense cap connexió, feu clic a {{ui:Desa per fer-lo servir sense connexió}} a la barra de dalt mentre sou en línia. L'etiqueta va comptant ("Desant 40 de 212") i acaba a "Preparat sense connexió". La còpia desada inclou el lector DWG, uns 5 MB en total, de manera que **els fitxers DWG també s'obren sense connexió** un cop desada. Torneu a fer clic al botó per a {{ui:Torna a desar (obté la versió més recent)}} o {{ui:Elimina la còpia sense connexió}}. "No s'ha pogut desar" vol dir que alguns fitxers no s'han baixat: comproveu la connexió i torneu a fer clic per provar-ho. "Sense connexió no disponible" vol dir que aquesta finestra del navegador no pot guardar una còpia (finestres privades i alguns ordinadors gestionats).

Sense una còpia desada, el lector DWG es descarrega la primera vegada que obriu un DWG després que la pàgina es carregui, de manera que obrir un DWG sense connexió pot fallar; els fitxers DXF mai no el necessiten. No recarregueu la pàgina sense connexió tret que CadCraft estigui desat.

Vegeu [Treballar fora de línia](common:offline) per als detalls.

:::offline
Ara no teniu connexió. Els dibuixos es desen com a DWG o DXF i es tracen amb normalitat, i els fitxers DXF s'obren. Els fitxers DWG s'obren si CadCraft mostra "Preparat sense connexió", o si el lector DWG ja s'ha carregat en aquesta pestanya.
:::

## Restriccions en els fitxers

Les restriccions i els paràmetres (vegeu [Restringeix un dibuix](topic:constraints)) es desen tant en DWG com en DXF. Cada objecte restringit porta una petita nota de CadCraft (dades estes), i un bloc no utilitzat anomenat `CADCRAFT_PARAMETRIC` conté les restriccions i la taula de paràmetres. Altres programes obren el dibuix amb normalitat i ignoren les dues coses; poden eliminar el bloc no utilitzat quan facin una purga. Les notes es refereixen als objectes per la seva pròpia clau, no pels identificadors del fitxer, de manera que un programa que reanomena els identificadors no les trenca. Quan un altre programa ha eliminat o canviat un objecte restringit, CadCraft descarta les restriccions que li pertanyen en obrir el fitxer i ho indica dient quantes. Un fitxer sense elles s'obre sense restriccions.

Un croquis exportat des d'un modelador de peces (`.json`) també s'obre: vegeu [Mou croquis cap a altres modeladors de peces i des d'ells](topic:solidworks-sketches).

## Encara no disponible

- Multilínies de crida com a objectes de multilínia en un DXF desat (R12 no en té: es desen com el que dibuixen).
- Imatges en un DXF desat (es desen com als seus marcs; DWG les conserva com a imatges), i els wipeouts que amaguen el que hi ha sota.
- Desar una versió de DXF més nova que la 2000.
- Desament al núvol i sincronització entre ordinadors.

Vegeu [Encara no implementat](topic:not-built-yet) per a la llista completa.
