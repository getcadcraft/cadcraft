---
title: Traça a PDF
summary: Feu un PDF d'un full a mida real, o del model a una escala o ajustat al paper, imprimiu-lo des del navegador o des de Studio, o desa'l com a PNG o SVG.
keywords: traça, imprimeix, impressora, còpies, png, svg, imatge, pdf, publica, exportpdf, paper, escala, monocrom, escala de grisos, blanc i negre, gruix de línia, ploma, configuració de pàgina, finestra de traçat, estil de traçat, taula d'estil de traçat, ctb, dependent del color, trama, plotstyles, stylesmanager
from: a4752f83
---

## Què obtindreu

Un PDF d'un full a mida real, després un PDF ràpid del model a 1:100, i una impressió.

El PDF es fa dins del navegador; no es puja res. És un PDF vectorial: les línies es mantenen nítides a qualsevol zoom, i el text es pot cercar.

## Traçar un full

1. Feu clic a la pestanya del full sota el dibuix.
2. Premeu {{key:Mod+P}}, feu clic a {{ui:Traça}}, o escriviu `PLOT` i premeu {{key:Enter}}.

S'obre el diàleg {{ui:Traça a PDF}}. Indica quin full traça i en quin paper, «a mida real … tal com el veieu». La vista prèvia de la dreta mostra el full.

3. A {{ui:Estil de traçat}}, trieu {{ui:Monocrom (negre)}} per a línies negres, {{ui:Color (tal com està dibuixat)}} per mantenir els colors, {{ui:Escala de grisos}}, o una taula pròpia (vegeu [Taules d'estil de traçat](topic:plot-pdf#plot-style-tables)). El full conserva aquesta elecció: es desa amb el dibuix.
4. A {{ui:Gruix de línia}}, trieu un gruix de ploma d'entre 0.13 mm i 0.70 mm. Les línies amb el gruix per defecte s'imprimeixen a aquest gruix; les que tenen gruix propi (de capa o d'objecte, o el de la ploma del seu color a la taula) s'imprimeixen amb aquest.
5. Feu clic a {{ui:Baixa el PDF}}.

El navegador baixa un PDF amb el nom del dibuix i del full, per exemple `Drawing1-A-101 Plan.pdf`. L'historial indica la mida en bytes i la mida del paper en mil·límetres.

Un full sempre es trau a 1:1 sobre el seu propi paper. Per canviar el paper, canvieu-lo al mateix full (vegeu [Configura un full](topic:sheets-and-viewports)). Les capes marcades per no traçar-se queden fora, i també els marcs de les finestres gràfiques.

## Tots els fulls en un sol PDF

Amb dos o més fulls, el diàleg {{ui:Traça a PDF}} té {{ui:Tots els fulls en un PDF}}; o escriviu {{cmd:PUBLISH}}. {{key:Enter}} agafa tots els fulls; `S` (Alguns) demana els seus noms, separats per comes. Es baixa un sol PDF amb una pàgina per full, en l'ordre de les pestanyes, cadascuna a la seva mida de paper, i un marcador per full amb el seu nom. Cada full es trau amb la seva pròpia taula d'estil de traçat; un full sense cap triat fa servir la que heu triat per últim al diàleg, i el gruix de ploma que heu triat per últim.

## Traçar el model

1. Feu clic a la pestanya {{ui:Model}}.
2. Premeu {{key:Mod+P}}.

El diàleg diu que traça el model sobre un full de paper, i mostra més opcions:

3. A {{ui:Àrea}}, trieu què traçar:
   - {{ui:Tot (extensió)}}: tot el dibuix.
   - {{ui:El que hi ha a la pantalla}}: l'àrea que veieu ara al dibuix.
   - {{ui:Una finestra…}}: després feu clic a {{ui:Tria}}, feu clic a dues cantonades al dibuix, i el diàleg torna.
4. A {{ui:Paper}}, trieu una mida: ISO A4 a A0, Letter, Legal, Tabloid i ANSI C i D, o ARCH C, D i E.
5. A {{ui:Orientació}}, trieu {{ui:Apaïsat}} o {{ui:Vertical}}.
6. A {{ui:Escala (S)}}, trieu {{ui:Ajusta al paper}} o una escala com `1:100`.

Sota la configuració, una línia indica l'escala i quina mida surt l'àrea al paper. Si és més gran que el paper, ho diu: les vores queden retallades. Trieu una escala més petita, un paper més gran, o {{ui:Ajusta al paper}}.

7. Feu clic a {{ui:Baixa el PDF}}.

Un traçat del model deixa un marge de 5 mm a la vora, perquè la majoria d'impressores no poden imprimir fins a la vora. {{ui:Ajusta al paper}} dona una escala estranya (l'historial i la línia d'informació diuen «(ajustat)»); trieu una escala estàndard quan el dibuix ha de mesurar exacte.

:::note
Les escales es llegeixen en unitats reals. Perquè 1:100 sigui correcte, configureu {{ui:Unitats}} a {{ui:Configuració actual}} segons el que val una unitat de dibuix. Un dibuix sense unitats es considera en mil·límetres.
:::

## Taules d'estil de traçat

Una taula d'estil de traçat diu com es trau cadascun dels 255 colors estàndard de dibuix, com ho fa una taula d'estil de traçat dependent del color (CTB) en altres programes CAD. N'hi ha tres de integrades:

| Taula | S'imprimeix |
|---|---|
| {{ui:Color (tal com està dibuixat)}} | Cada objecte amb el seu propi color. |
| {{ui:Monocrom (negre)}} | Tots els colors en negre: l'elecció habitual per als dibuixos. |
| {{ui:Escala de grisos}} | Cada color com el seu gris, perquè els colors es distingeixin en una impressora en blanc i negre. |

Per fer-ne una de pròpia, per exemple línies vermelles gruixudes i negres, i la resta fines:

1. Al diàleg {{ui:Traça a PDF}}, feu clic a {{ui:Edita les taules…}} (o escriviu {{cmd:PLOTSTYLES}}).
2. Feu clic a {{ui:Nova}}, i escriviu un nom com `office` a {{ui:Nom}}. Per partir d'una taula integrada, trieu-la a {{ui:Taula}} i feu clic a {{ui:Copia}}.
3. Feu clic a un color de la quadrícula. {{key:Shift}}+clic selecciona un rang de colors, {{key:Mod}}+clic n'afegeix un més, i {{ui:Selecciona tots els colors}} els agafa tots.
4. Trieu com s'imprimeixen els colors seleccionats:
   - {{ui:S'imprimeix en}}: {{ui:El seu propi color}}, {{ui:Negre}} o {{ui:Un altre color…}}.
   - {{ui:Com a gris}}: el color com el seu gris.
   - {{ui:Tinta (%)}}: 100 és tinta plena, 50 és a mig camí cap al blanc (trama), per a línies de fons.
   - {{ui:Gruix de línia}}: {{ui:El seu propi gruix de línia}} manté el gruix de l'objecte o de la capa; un valor fa que cada línia d'aquell color s'imprimeixi a aquell gruix.
   - {{ui:Tipus de línia}}: imprimeix cada línia d'aquell color amb un altre tipus de línia (per exemple, tot el vermell en guions); {{ui:Usa el tipus de línia de l'objecte}} les deixa tal com són.
   - {{ui:Final de línia}} i {{ui:Unió de línies}}: finals de testa, quadrats o arrodonits, i cantons a inglet, en bisell o arrodonits (arrodonits, com abans, quan no en configureu cap).
   - {{ui:Estil de farciment}}: un farciment sòlid d'aquell color s'imprimeix com a línies de trama (barres horitzontals o verticals, inclinades, creuades, rombes, punts quadrats) en lloc de tinta, per a impressores i plànols on la tinta plana és massa pesada.
   La taula en si té dues opcions més: {{ui:Gruixos de línia}}, els gruixos que coneix (una línia impresa va al més proper d'aquests), i {{ui:Escala del tipus de línia}}, un factor sobre els guions de cada tipus de línia que no és ISO.
5. Feu clic a {{ui:Fet}}. La taula es guarda al dibuix, i el full (o el model) ara es trau amb ella. {{ui:Cancel·la}} descarta els canvis.

Un color amb ploma pròpia mostra un punt a la cantonada, i un punt a la part inferior quan defineix un gruix de línia. Un objecte amb color real (no un dels 255) fa servir la ploma del color estàndard més proper.

El dibuix conserva les seves taules i l'elecció de cada full quan el deseu com a DWG (2000 a 2018) o DXF (R12 o 2000), i les torna a obrir. Altres programes només veuen el nom a la configuració de pàgina de cada full (`office.ctb`), no la taula en si. Un dibuix d'un altre programa, la configuració de pàgina del qual indica una taula com `monochrome.ctb`, es traça amb la taula integrada d'aquest nom; per a qualsevol altre nom, el diàleg diu que el dibuix no la té, i traça els colors del dibuix fins que trieu una taula o en feu una amb aquest nom.

Per fer servir una taula en un altre dibuix, feu clic a {{ui:Exporta}} a {{ui:Taules d'estil de traçat}} (desa `office.plotstyle.json`), i després a {{ui:Importa…}} a l'altre dibuix. {{ui:Importa…}} també accepta un fitxer `.ctb` d'un altre programa: es llegeix segons la descripció publicada del format i **encara no s'ha comprovat amb un fitxer real**. Es llegeixen el color, la trama i el gruix de cada color; el gris, els números de ploma, els tipus de línia, els finals i unions de línia i els estils de farciment no; una taula amb nom (`.stb`) es rebutja. Compareu el primer traçat amb el que espereu, i envieu-nos el fitxer si és incorrecte.

## Imprimeix

**Al navegador**, feu clic a {{ui:Imprimeix…}}. CadCraft fa el PDF i obre per a ell el diàleg d'impressió del navegador. Hi trieu «Mida real» o 100% (no «Ajusta») per mantenir l'escala. Si el navegador no pot imprimir des de la pàgina, el PDF s'obre en una pestanya nova: imprimiu-lo des d'allà amb {{key:Mod+P}}.

També podeu fer clic a {{ui:Obre per imprimir}}: el PDF s'obre en una pestanya nova del navegador, i l'imprimiu des d'allà.

:::safari
Safari pot mostrar el PDF i esperar que useu **Fitxer** i després **Imprimeix**.
:::

Si el navegador bloqueja la pestanya nova, CadCraft baixa el PDF en lloc d'obrir-lo i ho diu a l'historial. Permeteu les finestres emergents del lloc perquè la pròxima vegada s'obri en una pestanya.

**A CadCraft Studio**, el diàleg {{ui:Traça a PDF}} llista les impressores de l'ordinador. Trieu la {{ui:Impressora}}, el {{ui:Paper de la impressora}} i el nombre de {{ui:Còpies}}, i després feu clic a {{ui:Imprimeix…}}. {{ui:Igual que el traçat}} tria el paper de la impressora que té la mida del full (A3 per a un full A3); quan la impressora no en té cap, fa servir el seu propi paper i ajusta el full a aquest. A Windows el full s'envia com a imatge de 300 dpi, perquè Windows no pot imprimir un PDF sense un programa de PDF; a Linux i macOS el PDF va directament al servei d'impressió del sistema. Res surt de l'ordinador.

## Fitxers d'imatge i SVG

{{ui:Baixa PNG}} desa el full traçat com a imatge a 300 dpi (només es redueix quan un full molt gran seria més gran del que el navegador pot fer; l'historial ho diu). {{ui:Baixa SVG}} el desa com a dibuix escalable en mil·límetres, amb les línies i el text del traçat. Tots dos surten del mateix traçat que el PDF, amb el mateix estil de traçat, gruix de línia i àrea. Les imatges col·locades al dibuix només són al PDF; l'historial diu quantes s'han deixat fora.

## Imatges

Les imatges s'imprimeixen a la seva pròpia resolució, sota les línies. {{ui:Imatges}} al diàleg les limita a 600, 300 o 150 dpi per a un fitxer més petit. Les línies, el text i els farciments sempre es mantenen nítids (vectorials), i la transparència es manté com a transparència. Vegeu [Imatges en un dibuix](topic:pictures).

## Configuracions que es recorden

El diàleg recorda el darrer paper, orientació, escala i gruix de línia en aquest navegador. La taula d'estil de traçat es guarda amb cada full al dibuix; un full sense cap triat comença amb la que heu triat per últim. Una finestra triada es manté fins que recarregueu la pàgina; després, el diàleg comença a {{ui:Tot (extensió)}}.

## Errors habituals

- **El PDF està en blanc o els botons són grisos.** No hi ha res a traçar (un model buit), o s'ha triat {{ui:Una finestra…}} i encara no n'heu triat cap («Trieu la finestra a traçar.»).
- **El text apareix com a «?» al PDF.** El text en polonès, txec, ciríl·lic, grec i altres escriptures d'Europa s'imprimeix tal com és: el PDF porta les lletres que necessita (de la font Liberation Sans, que té les amplades de Helvetica), i el text es pot seleccionar i cercar igualment. El text xinès, japonès i coreà també s'imprimeix tal com és: quan un dibuix en té, el traçat obté una font més gran (uns 10 MB, una sola vegada) i el PDF porta només els caràcters usats, així que la primera vegada necessita connexió (no en una còpia sense connexió desada abans). L'hebreu s'imprimeix amb la mateixa font incrustada que el text llatí, i el text àrab, persa i urdú fa que el traçat obtingui una font més (menys d'1 MB, una sola vegada); les línies d'escriptura de dreta a esquerra s'ordenen i les lletres s'uneixen (vegeu [Text](topic:text)). Els ideogrames rars fora d'aquestes fonts, i les escriptures que necessiten una forma complexa com l'hindi, s'imprimeixen com a «?», i l'historial els compta.
- **Totes les línies tenen el mateix gruix.** El seu gruix és el per defecte: doneu a les capes o als objectes un {{ui:Gruix de línia}} al panell de la dreta (vegeu [Gruixos de línia i tipus de línia](topic:units-papers-scales#line-weights-and-linetypes)), o definiu gruixos per color en una [taula d'estil de traçat](topic:plot-pdf#plot-style-tables).
- **«(no hi és en aquest dibuix)» al costat de l'estil de traçat.** El dibuix ve d'un altre programa i indica una taula que no inclou. Trieu-ne una de les taules, o feu-ne una amb aquest nom.
- **Es van imprimir les línies de construcció.** Feu que la seva capa no es traci: feu clic al seu botó d'impressora al panell {{ui:Capes}}.
- **La impressió és de mida incorrecta.** La impressora l'ha escalat. Imprimiu a mida real.
- **{{key:Mod+P}} va obrir el diàleg d'impressió del navegador.** El cursor era en un quadre del panell de la dreta, o hi havia un altre diàleg obert. Premeu {{key:Enter}} o {{key:Esc}} per sortir del quadre, i després torneu-ho a provar, o feu clic a {{ui:Traça}}.
- **{{key:Mod+P}} no va fer res.** Una ordre s'està executant. Premeu primer {{key:Esc}}.
