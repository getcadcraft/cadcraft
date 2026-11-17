---
title: "Fitxers: què s'obre, què es desa"
summary: Els formats que CadCraft obre, desa i exporta, què es conserva o es converteix, i on van els fitxers.
keywords: xclip, retall, límit de retall, integra retallat, dwg, dxf, pdf, r12, obre, desa, exporta, importa, formats, conversió, baixada, saveas, dxfout, desa com a, dwg desa, format, qsave, xref, xattach, dibuix enllaçat, referència externa, integra, recarrega, separa
from: b8c5778d
---

## D'un cop d'ull

| Format | Obre | Desa | Notes |
|---|---|---|---|
| DXF (text o binari, qualsevol versió) | Sí | Sí, com a DXF R12, DXF 2000 o DXF 2000 (binari) | Un DXF binari s'obre igual que un de text i es desa de nou com a binari. |
| DWG | Sí | Sí, com a DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 o 2018) | Llegit i escrit per la biblioteca DWG pròpia de CadCraft (fitxers AutoCAD R13 a 2018). El vostre DWG mai no es canvia. Els fitxers malmesos, o les versions que el lector no gestiona, es rebutgen amb un missatge. |
| PDF | Porta una pàgina: com a subjacent o com a objectes ([Subjacents PDF](topic:pdf-underlay)) | Sí, en traçar | PDF vectorial d'un full, o del model a una escala. |

Cada dibuix que obriu (o que comenceu amb {{ui:Nova}}) té la seva pestanya sobre l'àrea de dibuix; un dibuix nou que ningú no ha tocat encara s'utilitza en lloc d'afegir una pestanya. Feu clic a una pestanya per canviar-hi, al seu {{ui:×}} per tancar-la (CadCraft pregunta primer si hi ha canvis sense desar), o col·loqueu els dibuixos oberts un al costat de l'altre: vegeu [Divideix la pantalla](topic:split-screen).

## Obrir un dibuix

- Premeu {{key:Mod+O}}, feu clic a {{ui:Obre}}, o escriviu `OPEN`, i després trieu el fitxer.
- O arrossegueu un fitxer `.dwg` o `.dxf` a l'àrea de dibuix.

El fitxer es llegeix dins del vostre navegador. No es puja a cap lloc. L'historial informa de quants objectes i capes han entrat i quant ha trigat, i la secció {{ui:Dibuix}} del panell de l'esquerra mostra el format, per exemple "DWG 2018 (AC1032)".

El lector de DWG forma part de CadCraft i es carrega amb el primer DWG que obriu després de carregar la pàgina (uns quants centenars de KB), de manera que no cal esperar cap baixada separada. Llegeix el fitxer en segon pla, de manera que la pàgina segueix responent mentre s'obre un DWG gran.

Un DXF es llegeix per trossos d'uns 4 MB, mai com un sol bloc de text, de manera que un DXF de més de 512 MB també s'obre. El límit és la memòria de l'ordinador: mentre s'obre un DXF, cal comptar que en fa servir aproximadament de 16 a 20 vegades la mida del fitxer (un DXF de 100 MB amb uns 690,000 objectes va fer servir uns 1.5 GB a la nostra prova).

### Què entra

- Línies, arcs, cercles, polilínies (amb segments d'arc), el·lipses, punts, text i text multilínia, sòlids, trames (els patrons estàndard dibuixats com les seves línies, els altres com un to pla), referències de bloc amb els seus atributs (valors que podeu editar; vegeu [Atributs de bloc](topic:attributes)), cotes, i presentacions amb les seves finestres gràfiques.
- Les splines entren com a splines (grau, punts de control, nusos, pesos, punts d'ajust); vegeu [Splines i polilínies](topic:splines).
- Les multiindicacions amb una línia de referència i text entren com a multiindicacions de CadCraft que podeu editar (vegeu {{cmd:MLEADER}}). Les altres (amb un bloc, diverses línies de crida o línies corbes) es dibuixen tal com les ha dibuixat l'altre programa i es mouen com un tot; l'historial diu quantes n'hi ha.
- Les imatges es mostren com un marc amb el nom del fitxer de la imatge fins que doneu a CadCraft el fitxer amb {{cmd:IMAGE}}: vegeu [Imatges en un dibuix](topic:pictures#show-the-pictures-a-dwg-uses). Els wipeouts es mostren com el seu marc, i el que hi ha sota continua visible.
- Les taules d'un DWG entren tal com les ha dibuixat l'altre programa.
- Les cares 3D a l'espai model entren a la pestanya {{ui:3D}}, no com a objectes 2D; també les que hi ha dins de blocs, una vegada per cada referència de bloc del model. En un bloc i en un full també es dibuixen planes, com a contorns. Vegeu [Model en 3D](topic:3d-solids).
- Les capes conserven el seu color, els ajustos d'activat, congelat, bloquejat i de traçat. DEFPOINTS mai no es traça.
- Les cotes es converteixen en cotes reals i editables de CadCraft quan es poden llegir els seus punts. Al principi es mostren exactament com les ha dibuixat l'altre programa; en el moment que en canvieu una, CadCraft la redibuixa amb el seu propi estil.
- Cada presentació es converteix en una pestanya de full. A l'altre programa, cada presentació té una primera finestra gràfica oculta que és el propi full; CadCraft la deixa fora.

### Què encara no entra

Tot allò que CadCraft no pot dibuixar es compta, no s'endevina. La caixa "Sobre aquest fitxer" del panell de l'esquerra ho enumera com a "Encara no es mostra:" seguit de cada tipus d'objecte i quants n'hi ha. Els casos típics són les taules d'un DXF, les malles i els sòlids 3D dins de blocs. Els sòlids 3D, les regions i els cossos a l'espai model es mostren a la pestanya 3D (vegeu [Model en 3D](topic:3d-solids#solids-from-other-programs)). Les finestres gràfiques girades al fitxer es mostren també girades, i mantenen el seu gir en desar; també ho fan el SCP actual, els SCP amb nom i una vista girada.

El text es dibuixa amb una sola tipografia d'estil Helvetica. Una etiqueta que cabria en una línia amb el tipus de lletra més estret del programa original pot ocupar dues línies a CadCraft.

## Desar

Hi ha tres maneres de desar. Cadascuna baixa una còpia.

- **Desa**: premeu {{key:Mod+S}}, feu clic a {{ui:Desa}}, o escriviu `SAVE` (també `QSAVE`). Desa en el format del dibuix: DWG si heu obert un DWG, DXF si heu obert un DXF. Un DWG conserva la versió amb què va arribar (un fitxer de 2018 es desa com a 2018). Un dibuix nou utilitza el format i la versió DWG que vau escollir per última vegada a {{ui:Anomena i desa}} en aquest navegador; si mai no n'heu escollit cap, DWG en el format d'AutoCAD 2000.
- **Anomena i desa**: premeu {{key:Mod+Shift+S}}, feu clic a {{ui:Anomena i desa}}, o escriviu `SAVEAS`. El diàleg {{ui:Desa una còpia com a}} ofereix {{ui:DWG}}, amb una llista {{ui:Versió}} (AutoCAD 2018, 2013, 2010, 2007, 2004 o 2000), {{ui:DXF R12}} i {{ui:DXF 2000}}, cadascun amb el nom del fitxer que tindrà, i el format i la versió actuals del dibuix ja escollits. Feu clic a {{ui:Desa}} per baixar, o a {{ui:Cancel·la}} (o {{key:Esc}}) per no desar res; l'historial diu aleshores "No s'ha desat." Allò que escolliu es manté: {{key:Mod+S}} l'utilitza per a aquest dibuix a partir d'aquell moment, i els dibuixos nous en aquest navegador en comencen amb aquesta opció.
- **DXFOUT**: escriviu `DXFOUT`. Sempre baixa una còpia DXF R12, i el següent {{key:Mod+S}} segueix desant en el format propi del dibuix.

El navegador baixa `<drawing name>.dwg` o `<drawing name>.dxf`. Cada desada és una **baixada nova**; el fitxer que heu obert mai no se sobreescriu ni es canvia. L'historial ho confirma, per exemple "S'ha desat una còpia com a Plan.dwg (DWG (AutoCAD 2018)). El vostre original Plan.dxf no ha canviat." Per a un DXF diu "(DXF R12, s'obre en qualsevol programa CAD)". Les línies sota d'això enumeren tot allò que ha canviat pel camí.

Quan CadCraft funciona a l'aplicació d'escriptori, desar funciona com en altres programes d'escriptori: {{key:Mod+S}} torna a escriure el dibuix al fitxer que heu obert, en el seu format i versió propis, i l'historial diu on s'ha desat. {{ui:Anomena i desa}} i les exportacions mostren el diàleg de desar del sistema, i un fitxer `.dwg`, `.dxf` o `.ccsheets` que feu doble clic s'obre a CadCraft.

Per a un PDF, traceu en lloc de desar.

## Què conserva i què canvia un DWG

CadCraft escriu el DWG per si mateix, dins del vostre navegador, amb la mateixa biblioteca DWG que fa servir per llegir. Escolliu la versió a {{ui:Anomena i desa}}: el format AutoCAD 2000 (versió de fitxer AC1015) s'obre en la majoria de programes, també els antics; els formats més nous (2004, AC1018, fins a 2018, AC1032) conserven també els colors reals. No es puja res, i desar un DWG funciona sense connexió.

Cada versió es verifica tornant a llegir els fitxers desats amb els lectors DWG de tres altres programes i amb el mateix CadCraft. Un DWG de CadCraft encara no s'ha obert a AutoCAD mateix.

### Què conserva un DWG

- Línies, arcs, cercles, el·lipses, punts, i polilínies amb els seus segments d'arc.
- Text d'una sola línia amb la seva alineació i factor d'amplada.
- Text multilínia i ajustat, com a text multilínia. L'altre programa el torna a ajustar des de la mateixa amplada.
- Colors dels objectes: per capa, per bloc, els 255 colors estàndard, i colors reals en el format 2004 i posteriors.
- Capes amb el seu color, tipus de línia, gruix de línia i els seus ajustos d'activat, congelat, bloquejat i de traçat; els tipus de línia, gruixos i escales de tipus de línia propis dels objectes, els patrons de tipus de línia i l'escala de tipus de línia del dibuix.
- Les unitats del dibuix i el format de longitud (decimal, peus i polzades, fraccions…).
- Blocs amb el seu punt base i les definicions d'atribut, incloses les invisibles, constants i predefinides.
- Referències de bloc amb la seva escala, rotació i valors d'atribut.
- Farciments sòlids, i trames amb patró, amb el seu patró, escala i angle (les línies pròpies del patró, de manera que els altres programes dibuixen les mateixes línies que CadCraft).
- Cotes, com a cotes reals: els altres programes les tornen a mesurar quan s'estiren. Cadascuna conserva els seus propis ajustos (alçada del text, mida de la punta de fletxa, decimals, format de longitud) i el seu text, i porta la còpia dibuixada que té cada cota d'un DWG.
- Fulls (presentacions): cada full amb la seva mida de paper i unitats, el que s'hi dibuixa, i les seves finestres gràfiques amb la seva vista i escala.
- Vistes amb nom.
- Multiindicacions, com a multiindicacions.
- Noms de capes i blocs tal com els heu escrit, en majúscules i minúscules. (DXF R12 els escriu en majúscules.)

### Què canvia un DWG

Cadascun d'aquests canvis apareix a l'historial després de desar, quan s'aplica al vostre dibuix.

| A CadCraft | Al DWG desat |
|---|---|
| Colors reals (triats amb el selector de color), en el format 2000 | El color estàndard més proper: el format 2000 només té els 255. Deseu com a 2004 o posterior per conservar-los |
| Vistes amb nom d'un full | Vistes de l'espai de paper: un DWG no diu a quin full pertanyen, de manera que quan CadCraft torna a obrir el fitxer pertanyen al primer full |
| Text multilínia amb un factor d'amplada | Amplada de lletra normal: en un DWG el factor d'amplada només s'aplica al text d'una sola línia |
| Noms de capa o de bloc amb caràcters que el DWG no permet | Canviats: un nom d'un dibuix enllaçat com `Base\|Walls` esdevé `Base$0$Walls` (com el nomena integrar un dibuix enllaçat), i els altres caràcters esdevenen `_` |

### Per què R12, i què es converteix

Quan deseu com a DXF, CadCraft escriu DXF R12, la versió que pot obrir qualsevol programa CAD. És més antiga que algunes funcions, de manera que algunes coses s'escriuen en una forma més simple:

| A CadCraft | Al fitxer R12 desat |
|---|---|
| Text multilínia | Un objecte de text per línia |
| El·lipses | Polilínies que segueixen l'el·lipse |
| Trames (de fitxers oberts) | Només els seus contorns |
| Colors reals (triats amb el selector de color) | El color estàndard més proper |
| Gruixos de línia, i escales de tipus de línia propis dels objectes | Deixats de banda: R12 no en té cap (els tipus de línia es mantenen) |
| Noms de capes i blocs | S'escriuen en majúscules; els espais i altres caràcters esdevenen `_`, i els noms es tallen a 31 caràcters ("Title block" esdevé `TITLE_BLOCK`) |
| Capes configurades per no traçar | Altres programes les traçaran (CadCraft recorda l'ajust quan el dibuix té un full) |
| Cotes | Cotes reals amb el seu propi bloc dibuixat, de manera que altres programes les mostren tal com les veieu |
| Multiindicacions | Les línies, la punta de fletxa i el text que dibuixen |
| Vistes amb nom | Conservades, amb noms en majúscules; les vistes d'un full tornen al primer full |
| Diversos fulls | El primer full és l'espai de paper que mostra qualsevol programa; els altres es conserven com a blocs anomenats `CCLAYOUT_1`, `CCLAYOUT_2` … que CadCraft torna a convertir en fulls quan obre el fitxer |

L'historial enumera cadascun d'aquests que s'aplica al vostre dibuix.

:::tip
Per continuar treballant en un dibuix durant diversos dies, deseu com a DXF i obriu aquest DXF la propera vegada. Tot allò que CadCraft pot dibuixar sobreviu al cicle complet, incloses les cotes, els blocs i tots els fulls.
:::

## Enllaços a dibuixos (referències externes)

{{cmd:XATTACH}} (`XA`, o {{ui:Blocs}} › {{ui:Més}} › {{ui:Enllaça un dibuix (xref)}}) enllaça un altre DWG o DXF: trieu el fitxer, i després feu clic on ha d'anar ({{key:Enter}} el posa a 0,0). Entra com un sol bloc anomenat segons el fitxer, a l'escala correcta quan els dos dibuixos tenen unitats diferents. Les seves capes i blocs conserven els seus noms amb el nom de l'enllaç davant, com `Plan|Walls`, `Plan|Door`, de manera que mai no es barregen amb els vostres: activeu i desactiveu les capes enllaçades, congeleu-les o bloquegeu-les com les vostres. Un enllaç és de només lectura: si canvieu l'altre dibuix, torneu-lo a carregar. El que definiu a les capes d'un enllaç (color, tipus de línia, gruix, activat/desactivat, congelat, bloquejat, traçat) es conserva quan el torneu a carregar, quan deseu el dibuix com a DWG mentre l'enllaç encara és un enllaç, i quan un altre dibuix enllaça aquest.

{{cmd:XREF}} (`XR`): `?` llista els enllaços (carregats o no, quin fitxer, quantes referències); `A` enllaça; `R` en recarrega un des del seu fitxer (torna a triar el fitxer: el navegador no pot accedir a les vostres carpetes per si mateix); `B` n'integra un (es converteix en blocs i capes ordinaris anomenats `Plan$0$Walls`); `D` el separa (se n'eliminen les seves referències i capes). Cada una és un pas de desfer.

{{cmd:XCLIP}} (`XC`) retalla referències de bloc i enllaços: seleccioneu-los, `N` per a un límit nou, després `R` i dues cantonades o `P` i els punts d'un polígon ({{key:Enter}} el tanca); `D` elimina el retall. Només es mostra i es traça el que hi ha dins, i el retall es mou amb la referència. DWG i DXF 2000 conserven els retalls; DXF R12 desa la referència sencera i ho diu. Quan integreu un enllaç que té referències retallades, {{cmd:XREF}} `B` pregunta: `A` integra-ho tot, `C` conserva només la part retallada de cada referència (les línies i els arcs es tallen al límit; els textos i els blocs imbricats es mantenen quan el seu punt d'inserció és dins).

Un dibuix que obriu pot enllaçar fitxers que CadCraft no pot veure: diu quants no estan carregats. Utilitzeu {{cmd:XREF}}, `R` i trieu cada fitxer per veure'ls.

En desar, un enllaç carregat s'**integra** al fitxer (altres programes veuen blocs i capes ordinaris anomenats `Plan$0$…`), i l'historial ho diu. Un enllaç que no està carregat es manté com un enllaç al seu fitxer, en DWG i en DXF.

## Obre en 3D

{{ui:Vista}} › {{ui:Més}} › {{ui:Obre a ModelCraft}} ({{cmd:OPENIN3D}}) obre el dibuix a l'aplicació de modelatge 3D en una pestanya nova, com a DWG, sense pujar-lo. Els canvis que hi feu s'hi queden: deseu-los allà. L'element del menú només es mostra on aquella aplicació pot rebre un dibuix lliurat.

## Traçar un PDF

Premeu {{key:Mod+P}}, feu clic a {{ui:Traça}}, o escriviu `PLOT`. El PDF es fa dins del navegador i es baixa, o s'obre en una pestanya nova per imprimir-lo. Vegeu [Traça a PDF](topic:plot-pdf).

## On van els fitxers

Cada desada i cada traçat és una baixada, de manera que els fitxers van on el navegador posa les baixades: normalment la carpeta Descàrregues. Per triar una carpeta cada vegada, canvieu l'opció de baixada del navegador; [Navegadors i ordinadors](common:browsers) mostra on.

Res del que obriu o desa s'envia a nosaltres. Vegeu [On van els vostres fitxers](common:your-files).

## Fitxers de projecte PLN i PLA

CadCraft obre fitxers DWG i DXF, no els fitxers propis d'Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). En obrir-ne un, us diu què és. A Archicad, deseu com a DWG les vistes o presentacions que necessiteu i obriu-les aquí, o exporteu el model com a IFC i obriu-lo a BimCraft. Quan BimCraft pot rebre el fitxer, CadCraft ofereix {{ui:Obre a BimCraft}}.

## Si la pàgina es tanca abans de desar

CadCraft guarda una còpia de cada dibuix que canvieu, només en aquest navegador, un moment després que deixeu d'editar. Si la pestanya es tanca, el navegador s'atura o l'ordinador es reinicia abans de desar-lo, CadCraft pregunta **Recuperar la feina?** la propera vegada que s'inicia: {{ui:Recupera}} torna a obrir el dibuix, sense desar, en la seva pròpia pestanya. Desar el dibuix elimina la seva còpia. Vegeu [Recupera la feina](common:recover).

## En línia i fora de línia

Obrir, dibuixar, desar (DWG i DXF) i traçar tot passa al vostre ordinador, de manera que funcionen sense connexió un cop CadCraft s'ha carregat.

Per usar CadCraft sense cap connexió, feu clic a {{ui:Desa per fer-lo servir sense connexió}} a la barra de dalt mentre sou en línia. L'etiqueta va comptant ("Desant 40 de 212") i acaba a "Preparat per a fora de línia". La còpia desada inclou el lector DWG, uns 5 MB en total, de manera que els **fitxers DWG també s'obren fora de línia** un cop desada. Torneu a fer clic al botó per a {{ui:Desa de nou (obté la versió més recent)}} o {{ui:Elimina la còpia sense connexió}}. "No s'ha pogut desar" vol dir que alguns fitxers no s'han baixat: comproveu la connexió i torneu a fer clic per provar-ho. "Fora de línia no disponible" vol dir que aquesta finestra del navegador no pot guardar una còpia (finestres privades i alguns ordinadors gestionats).

Sense una còpia desada, el lector DWG es descarrega la primera vegada que obriu un DWG després de carregar la pàgina, de manera que obrir un DWG sense connexió pot fallar; els DXF mai no el necessiten. No torneu a carregar la pàgina sense connexió tret que CadCraft estigui desat.

Vegeu [Treballar sense connexió](common:offline) per als detalls.

:::offline
Ara no teniu connexió. Els dibuixos es desen com a DWG o DXF i es tracen amb normalitat, i els fitxers DXF s'obren. Els fitxers DWG s'obren si CadCraft mostra "Preparat per a fora de línia", o si el lector DWG ja s'ha carregat en aquesta pestanya.
:::

## Restriccions als fitxers

Les restriccions i els paràmetres (vegeu [Restringeix un dibuix](topic:constraints)) es desen tant en DWG com en DXF. Cada objecte restringit porta una petita nota de CadCraft (dades estoses), i un bloc no utilitzat anomenat `CADCRAFT_PARAMETRIC` conté les restriccions i la taula de paràmetres. Altres programes obren el dibuix amb normalitat i ignoren les dues coses; poden eliminar el bloc no utilitzat en depurar. Les notes es refereixen als objectes per la seva pròpia clau, no pels identificadors del fitxer, de manera que un programa que reenumera els identificadors no les trenca. Quan un altre programa ha eliminat o canviat un objecte restringit, CadCraft n'elimina les restriccions en obrir el fitxer i diu quantes. Un fitxer sense elles s'obre sense restriccions.

Un esbós exportat des d'un modelador de peces (`.json`) també s'obre: vegeu [Mou croquis a i des d'altres modeladors de peces](topic:solidworks-sketches).

## No disponible encara

- Multiindicacions com a objectes de multiindicació en un DXF desat (R12 no en té: es desen com allò que dibuixen).
- Imatges en un DXF desat (es desen com als seus marcs; el DWG les conserva com a imatges), i wipeouts que amaguen el que hi ha a sota.
- Desar una versió de DXF més nova que la 2000.
- Desament al núvol i sincronització entre ordinadors.

Vegeu [Encara no implementat](topic:not-built-yet) per a la llista completa.
