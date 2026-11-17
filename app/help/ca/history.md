---
title: Historial: versions i canvis
summary: Vegeu les versions d'un dibuix (les còpies que Studio guarda en desar, i les del núvol), obriu-ne o restaureu-ne una, i compareu-ne dues amb els canvis mostrats en color.
keywords: historial, versions, historial de versions, restaura, versió anterior, desfer un desament, compara, compara dibuixos, dwgcompare, canvis, afegit, eliminat, canviat, instantània, còpia de seguretat, versions del núvol
from: 141d37b3
---

## Què fareu

Una ullada a una versió anterior d'un dibuix, i una llista del que és diferent d'ara: què s'ha afegit, què s'ha eliminat i què s'ha canviat, marcat en color al dibuix.

## Obre l'Historial

Escriviu `HISTORY` (o `HIST`) i premeu {{key:Enter}}, o trieu {{ui:Historial…}} al menú {{ui:Més}} del grup {{ui:Vista}}. El tauler s'obre al costat del dibuix i es queda obert mentre treballeu, de manera que podeu desplaçar i fer zoom al dibuix amb els colors que hi surten.

L'Historial funciona a CadCraft Studio. En un navegador, el tauler només ho indica.

## D'on surten les versions

- **En aquest ordinador.** Cada vegada que obriu un dibuix des d'un fitxer a Studio, i cada vegada que el deseu, Studio guarda una còpia del fitxer al seu propi emmagatzematge en aquest ordinador. La primera còpia és {{ui:Tal com s'ha obert}}: el fitxer tal com era abans que el desesseu per primera vegada. Studio guarda les 25 còpies més recents de cada dibuix, i les més antigues són les primeres a anar-se'n quan totes les còpies sumen més de 400 MB. Un desament que no canvia res no guarda res. No es puja res.
- **Al núvol.** Quan obriu un dibuix dels vostres fitxers del núvol a Studio, el tauler també llista {{ui:Al núvol}}: totes les versions que té el núvol, amb el seu número, qui les ha desades i la nota. El tauler només les llegeix. CadCraft encara no envia els seus desaments al núvol, així que són les versions desades des d'altres dispositius i des de la web. Torneu a iniciar la sessió a Studio si diu que la sessió s'ha acabat.

Un dibuix que encara no heu desat no té còpies: deseu-lo primer.

## Obre o restaura una versió

- {{ui:Obre}} posa aquesta versió en una pestanya pròpia. El vostre dibuix no es toca.
- {{ui:Restaura}} substitueix aquest dibuix per aquella versió. Ho pregunta abans. Studio guarda una còpia del dibuix tal com està ara a l'Historial (marcada {{ui:Abans d'una restauració}}) abans de fer-ho, i no s'escriu res al fitxer fins que el deseu. Una restauració no es pot desfer amb {{key:Mod+Z}}; useu aquella còpia.

## Compara

1. Feu clic a {{ui:Compara}} en una versió. Es compara amb {{ui:El dibuix tal com està ara}}; per comparar-la amb una altra versió, trieu-la primer a {{ui:Compara amb}}.
2. Llegiu el resultat sota la llista: quants objectes s'han afegit, eliminat i canviat, i una llista d'ells. Feu clic a un element de la llista per moure la vista fins a ell.
3. Al dibuix:
   - els objectes **verds** s'han afegit,
   - els objectes **vermells** s'han eliminat (només són a la versió més antiga),
   - els objectes **taronja** han canviat: la forma nova és sòlida i l'antiga és de traços.
4. {{ui:Mostra-ho al dibuix}} activa i desactiva els colors; {{ui:Esborra els colors}} en treu el resultat. Tancar el tauler també els esborra.

La llista diu què ha canviat en un objecte modificat: el text, que s'ha mogut, la forma, la capa, el color, el tipus de línia o el gruix de línia. Cada full es compara per separat; els colors es veuen al full que és obert.

:::note
Un dibuix no té un número fix per a cada objecte, així que CadCraft fa coincidir els objectes pel que són: el mateix objecte en les dues bandes no ha canviat; un objecte del mateix tipus i capa que és dins de la seva pròpia mida respecte d'un de vell és el mateix objecte, canviat; la resta s'afegeix o s'elimina. Un objecte mogut lluny d'on era apareix com a eliminat en un lloc i com a afegit en l'altre. Una referència de bloc compta el contingut del seu bloc.
:::

## Errors habituals

- **"Encara no hi ha còpies."** Studio guarda una còpia cada vegada que s'obre i es desa un dibuix que té un fitxer en aquest ordinador. Un dibuix obert des d'una pestanya del navegador, o que mai no s'ha desat, no en té.
- **Falta la llista del núvol.** Apareix per a un dibuix obert des del núvol a Studio; un fitxer obert des del disc no és un dibuix del núvol.
- **Sembla que tot ha canviat.** Dues versions desades per programes diferents escriuen el mateix dibuix de maneres diferents (noms de blocs anònims, arrodoniments). Compareu versions desades per CadCraft.
