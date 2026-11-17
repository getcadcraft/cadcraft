---
title: Obre un DWG, edita'l i desa una còpia
summary: Obrir un dibuix que algú us ha enviat, revisar què s'ha importat, fer-hi un canvi i enviar-ne una còpia en DWG o DXF.
keywords: dwg, dxf, obre, importa, exporta, desa, r12, ida i tornada, consultor, xref, revisa dibuix, saveas, anomena i desa, desa dwg, format
from: 49de4bf6
---

## Què cal fer

Obrir un DWG d'un consultor, revisar què ha pogut i què no ha pogut mostrar CadCraft, afegir una nota, traçar un full a PDF i desar una còpia per tornar-la a enviar, com a DWG o DXF.

## Obrir el fitxer

1. Premeu {{key:Mod+O}}, o feu clic a {{ui:Obre}}.
2. Trieu el fitxer `.dwg`.

La línia d'estat mostra "Llegint …" mentre es llegeix el dibuix. Quan acaba, el dibuix omple la pantalla i l'historial diu, per exemple, "Obert plan.dwg: 18,240 objectes en 64 capes", amb el temps que ha trigat.

:::offline
Esteu fora de línia. Si el botó {{ui:Desa per fer-lo servir sense connexió}} diu "Preparat fora de línia", els fitxers DWG s'obren amb normalitat. Si no, i encara no s'ha obert cap DWG en aquesta pestanya, obrir un DWG pot fallar, perquè el lector de DWG de CadCraft es carrega amb el primer DWG: obriu un DXF, o deseu CadCraft per fer-lo servir sense connexió la pròxima vegada que sigueu en línia. Vegeu [Treballar fora de línia](common:offline).
:::

## Comproveu què ha arribat

1. Mireu la secció {{ui:Dibuix}} del tauler esquerre: format i versió, unitats, nombre d'objectes i de capes, i fulls.
2. Llegiu el quadre "Quant a aquest fitxer" que hi ha sota, si n'hi ha.

El quadre enumera:

- **Encara no es mostra:** objectes que CadCraft encara no pot dibuixar, per tipus i quantitat. Es deixen fora, no s'endevinen.
- **Presentacions (fulls) importades:** obriu-les amb les pestanyes sota el dibuix.
- **Cotes que només es poden llegir tal com estan dibuixades.**

3. Feu clic a les pestanyes sota el dibuix per veure cada full.
4. Comproveu {{ui:Unitats}} a {{ui:Configuració actual}} (sense cap selecció, pestanya {{ui:Model}}). Si diu {{ui:Sense unitats}} però sabeu que el dibuix és en mil·límetres, definiu-les, perquè les escales del full i del traçat es llegeixin bé.

:::tip
Si esperàveu una part del dibuix i no la veieu, mireu el tauler {{ui:Capes}}: la capa pot estar desactivada o congelada al fitxer. Feu clic al seu nom per fer-la actual; això l'activa.
:::

## Feu el canvi

1. Creeu una capa per a les vostres notes: feu clic a {{ui:Capa nova}}, escriviu `NOTES` i premeu {{key:Enter}}.
2. Escriviu `DT` i premeu {{key:Enter}}.
3. Feu clic on ha d'anar la nota.
4. Escriviu una alçada de text adequada al dibuix (vegeu [Afegeix text i etiquetes](topic:text)) i premeu {{key:Enter}}.
5. Premeu {{key:Enter}} per mantenir la rotació a 0.
6. Escriviu la nota i premeu {{key:Enter}}.
7. Torneu a premer {{key:Enter}} per acabar.

Les edicions de cotes importades són correctes: en quant en canvieu una, CadCraft la redibuixa amb el seu propi estil.

## Traceu un full per revisar-lo

1. Feu clic a la pestanya del full.
2. Premeu {{key:Mod+P}}.
3. Feu clic a {{ui:Baixa el PDF}}.

Vegeu [Traçat a PDF](topic:plot-pdf).

## Desa una còpia

1. Premeu {{key:Mod+S}}, o feu clic a {{ui:Desa}}.

Heu obert un DWG, així que el navegador baixa `<name>.dwg`, en la versió en què venia el DWG. L'historial diu, per exemple, "Desada una còpia com a Plan.dwg (DWG (AutoCAD 2018))." i enumera, a les línies de sota, tot el que ha canviat pel camí.

2. Llegiu aquestes línies abans d'enviar el fitxer. [Què conserva i què canvia un DWG](topic:files#what-a-dwg-keeps-and-changes) explica cadascuna.

El DWG original no es modifica mai. Cada desament és una baixada nova.

## Desa com a DWG o DXF

Per triar el format vosaltres mateixos:

1. Premeu {{key:Mod+Shift+S}}, o feu clic a {{ui:Anomena i desa}}.

El diàleg {{ui:Desa una còpia com a}} s'obre amb quatre opcions, cadascuna amb el nom de fitxer que li donarà: {{ui:DWG}}, amb la seva llista {{ui:Versió}}, {{ui:DXF R12}}, {{ui:DXF 2000}} i {{ui:DXF 2000 (binary)}}. El format i la versió actuals del dibuix ja estan seleccionats.

2. Feu clic al format que voleu. Per al DWG, trieu la versió que fa servir l'altra oficina, o una de més antiga: AutoCAD 2018, 2013, 2010, 2007, 2004 o 2000.
3. Feu clic a {{ui:Desa}}.

La còpia es baixa. A partir d'aquí, {{key:Mod+S}} desa aquest dibuix en aquest format, i els dibuixos nous també començaran amb ell, en aquest navegador. {{ui:Cancel·la}} o {{key:Esc}} no desa res, i l'historial diu "No s'ha desat."

Quin triar:

- **DWG** conserva més: fulls amb les seves finestres gràfiques, cotes reals, patrons de trama, noms de capes i de blocs tal com els heu escrit, i text multilínia com a text multilínia. La versió AutoCAD 2000 s'obre en més programes; la 2004 i posteriors conserven també els colors reals.
- **DXF 2000** és un fitxer de text que conserva gairebé tot el que conserva un DWG: cada full com a presentació amb les seves finestres gràfiques, cotes reals, patrons de trama, colors reals, gruixos de línia, tipus de línia, i noms tal com els heu escrit. S'obre en AutoCAD 2000 i posteriors i en la majoria de programes CAD. Els multilíders es converteixen en les línies, punxes de fletxa i text que dibuixen. Un DXF obert en versió 2000 o posterior es desa com a DXF 2000.
- **DXF 2000 (binary)** conté el mateix que DXF 2000 en la forma binària del format: un fitxer més petit que conserva cada número exactament. Els fitxers DXF binaris d'altres programes s'obren com els de text, i un dibuix obert des d'un DXF binari es torna a desar com a binari.
- **DXF R12** s'obre en gairebé qualsevol programa CAD. Conserva el primer full amb les seves finestres gràfiques, i els altres fulls de CadCraft. Simplifica les coses més noves, com el text multilínia i les trames.

## Què veurà l'altra oficina

En un DWG:

- Línies, arcs, cercles, el·lipses, polilínies, text, text multilínia, blocs amb els seus atributs, farciments sòlids, patrons de trama i capes tal com els veieu.
- Cotes reals: l'altre programa les torna a mesurar quan s'estiren.
- Cada full, amb el seu paper i les seves finestres gràfiques.
- Multilíders com a multilíders. A la versió AutoCAD 2000, els colors reals passen al color estàndard més proper.

En un DXF R12:

- Línies, arcs, cercles, polilínies, text, referències de bloc i cotes tal com les veieu. Les cotes continuen sent cotes reals.
- Noms de capa en majúscules, amb els espais convertits en `_`.
- El primer full com a espai de paper del dibuix, amb les seves finestres gràfiques. Els altres fulls arriben com a blocs anomenats `CCLAYOUT_1` i així successivament; si necessiten cada full com a presentació, traceu també un PDF de cada full per a ells.
- Text multilínia com a línies separades, el·lipses com a polilínies, trames com a contorns.

En qualsevol cas, tot el que surt com a "Encara no es mostra" quan heu obert el DWG **no** és a la còpia, tret que l'historial digui que s'ha conservat: els objectes OLE d'un DWG i els seus sòlids 3D a l'espai model s'escriuen de nou quan deseu com a DWG. Digueu-ho, i envieu també un PDF.

## Errors habituals

- **"CadCraft obre dibuixos DWG i DXF."** El fitxer té una altra extensió. Comproveu que sigui un `.dwg` o un `.dxf`.
- **"Aquest dibuix no s'ha pogut llegir."** El DWG està malmès o és en una versió que el lector no gestiona. Demaneu un DXF, o el DWG desat en una versió més antiga.
- **"Aquest DXF binari acaba enmig d'un objecte."** El fitxer s'ha tallat o està malmès. Escriviu RECOVER per obrir el que es pot llegir, o demaneu de nou el fitxer.
- **El fitxer desat es diu `name (1).dwg` o `name (1).dxf`.** El navegador ho fa quan ja hi ha un fitxer amb el mateix nom a la carpeta.
- **Tenen un programa més antic que no pot obrir el DWG.** Deseu com a DWG amb {{ui:Versió}} {{ui:AutoCAD 2000}}, o com a {{ui:DXF R12}}: gairebé qualsevol programa CAD l'obre.
- **Falten parts del dibuix.** Els dibuixos enllaçats (xrefs) no es carreguen fins que no n'escolliu els fitxers ({{cmd:XREF}}, `R`), i les imatges es mostren com a marcs amb els noms dels fitxers.
