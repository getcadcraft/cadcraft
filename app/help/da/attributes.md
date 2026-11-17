---
title: Blokattributter
summary: Se og ændr de værdier en blokreference bærer, f.eks. et postnummer eller en producent, og bevar dem når du gemmer en kopi.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, tegningshoved, redigér på stedet, attributeditor, attdef, definér attribut, bedit, blokeditor, bclose, attribut, attributter, attdef, attrib, mærke, postnummer, værdi, usynlig, konstant, blok, egenskaber, liste, udstyrsmærke
from: 34d307c7
---

## Hvad attributter er

En attribut er en navngivet værdi der følger med en blokreference: et udstyrsmærkes postnummer, et rummærkes navn, en døres brandklasse. Blokkens definition siger hvilke attributter den har (hver har et **mærke**, en **prompt**, en **standard** og en placering, størrelse og vinkel for sin tekst). Hver reference til blokken bærer sine egne værdier.

Nogle attributter er **usynlige**: de gemmer data, f.eks. en producent eller et modelnummer, men tegnes aldrig. Nogle er **konstante**: de er ens for hver reference og fastlagt af blokken.

## Hvor attributter kommer fra

- Blokke i DWG- og DXF-filer du åbner beholder deres attributter, med hver references værdier.
- Blokke du henter ind med {{cmd:INSERT}} og indstillingen {{ui:Fil}} beholder deres. Se [Indsæt fra en fil eller biblioteket](topic:insert-from-file-and-library).
- Biblioteksemner kommer ind som blokke med attributter: et synligt postnummer og emnets data, usynlige.
- Blokke du selv laver: definér attributter med {{cmd:ATTDEF}} først (nedenfor), og vælg dem derefter sammen med de andre objekter når du laver blokken.

## Definér attributter til dine egne blokke

1. Tegn blokkens linjer, f.eks. et rummærke.
2. Vælg {{ui:Blokke}} › {{ui:Mere}} › {{ui:Definér attribut}}, eller skriv `ATT` og tryk {{key:Enter}}.
3. Historikken viser tilstandene (`Invisible=No Constant=No Preset=No`). Skriv `I`, `C` eller `P` for at skifte én, og tryk {{key:Enter}} når de er rigtige. Usynlige værdier gemmes, men tegnes ikke. En konstant har samme værdi i hver reference. En forudindstillet spørges der ikke om når du indsætter blokken.
4. Skriv mærket (f.eks. `ROOM_NO`: store bogstaver, ingen mellemrum), prompten (`Room number`) og en standardværdi (`101`).
5. Klik hvor værdien skal, og angiv højde og rotation. Mærket vises på tegningen.
6. Lav blokken med {{cmd:BLOCK}}, og vælg linjerne og attributdefinitionerne sammen. Referencen der erstatter dem får standardværdierne, og hver ny {{cmd:INSERT}} spørger efter dem.

En valgt attributdefinition viser {{ui:Mærke}}, {{ui:Prompt}}, {{ui:Standard}} og tilstandene i {{ui:Egenskaber}}.

## Ændr en blok: blokeditoren

{{ui:Blokke}} › {{ui:Mere}} › {{ui:Redigér blok}} ({{cmd:BEDIT}}, `BE`) åbner en blok alene: skriv dens navn (eller vælg først en reference). En linje øverst siger hvilken blok du redigerer. Tegn, slet og ændr dens objekter med de sædvanlige kommandoer, og tilføj eller ændr attributdefinitioner. Klik derefter på {{ui:Gem blok}} (eller skriv {{cmd:BCLOSE}} og `S`): hver reference viser ændringen, og ét {{key:Mod+Z}} fortryder det hele. {{ui:Kassér ændringer}} (`BCLOSE`, `D`) lader blokken være som den var.

Når du tilføjede, fjernede eller ændrede attributdefinitioner, bringer gemning også hver reference i overensstemmelse: værdier du skrev, bevares, en ny attribut får sin standard, en fjernet forsvinder, og hver attribut går tilbage til hvor definitionen placerer den. Historikken siger hvor mange referencer der blev opdateret.

## Redigér et tegningshoved hvor det er (REFEDIT)

Et tegningshoved på et ark sidder ofte inde i en blok. For at ændre dets linjer eller tekster uden at forlade arket:

1. Vælg tegningshovedet, og vælg derefter {{ui:Blokke}} › {{ui:Mere}} › {{ui:Redigér på stedet}} (eller skriv {{cmd:REFEDIT}}).
2. Dets indhold bliver almindelige objekter der hvor de er. Alt andet bliver nedtonet og kan ikke ændres.
3. Ændr, slet eller tegn: nye objekter bliver en del af blokken.
4. Klik på {{ui:Gem blokken}} i linjen øverst (eller skriv {{cmd:REFCLOSE}} og `S`). Hver reference viser ændringen, og ét {{key:Mod+Z}} fortryder hele redigeringen. {{ui:Kassér}} lader blokken være som den var.

En ekstern reference (Xref), en dynamisk blok eller en reference der er skaleret forskelligt hen over og op, kan ikke redigeres på stedet: brug {{cmd:BEDIT}} (eller åbn den eksterne tegning).

:::note
Gem eller kassér i blokeditoren før du gemmer tegningen: en fil der gemmes mens editoren er åben, har blokken som den var før.
:::

## Udfyld dem når du placerer en blok

1. Skriv `I` og tryk {{key:Enter}}, skriv blokkens navn og tryk {{key:Enter}}.
2. Klik hvor den skal være.
3. CadCraft spørger efter hver værdi, f.eks. `Enter Item number (ITEM) <>`. Skriv værdien og tryk {{key:Enter}}, eller tryk {{key:Enter}} for at beholde standarden vist i vinkelparenteserne.

Værdier som blokken markerer som forudindstillede, og konstante, spørges der ikke om. De får deres standard.

## Se og ændr værdierne

1. Klik på en blokreference.
2. I højre panel, under {{ui:Attributter}}, har hvert mærke sin værdi. Usynlige siger `hidden`.
3. Klik på en værdi, skriv den nye, og tryk {{key:Enter}}.

Tegningen viser den nye værdi med det samme. Hver ændring er ét trin: {{key:Mod+Z}} fortryder den.

**Attributeditoren.** Dobbeltklik på en reference med attributter (eller {{cmd:EATTEDIT}}): dialogen {{ui:Redigér attributter}} lister hvert mærke med sin prompt og værdi. Skriv nye værdier. Klik på en række for at ændre den attributs {{ui:Højde}}, {{ui:Rotation}}, {{ui:Breddefaktor}}, {{ui:Justér}}, {{ui:Lag}}, {{ui:Farve}} og {{ui:Usynlig}}, for kun denne reference. {{ui:Anvend}} lader dialogen være åben, og {{ui:OK}} anvender og lukker. Hver {{ui:Anvend}} eller {{ui:OK}} er ét fortryd-trin.

**På kommandolinjen** spørger {{cmd:ATTEDIT}} hver værdi i tur og orden: skriv en ny, eller tryk {{key:Enter}} for at beholde den.

## Ændr attributdefinitionerne (BATTMAN, ATTSYNC)

{{ui:Blokke}} › {{ui:Mere}} › {{ui:Attributadministrator}} ({{cmd:BATTMAN}}) lister en bloks attributter: ændr et mærke, en prompt eller en standard, sæt flueben i {{ui:Usynlig}}, {{ui:Konstant}} eller {{ui:Forudindstillet}}, og flyt dem op eller ned (rækkefølgen værdierne spørges i). Med {{ui:Opdatér referencerne (værdier bevaret)}} sat af, bringer {{ui:Anvend}} også hver reference i overensstemmelse. Et omdøbt mærke beholder sine værdier. Hver {{ui:Anvend}} er ét fortryd-trin.

{{cmd:ATTSYNC}} bringer referencer i overensstemmelse med deres blokkes definitioner manuelt: `S` vælger en reference, `N` navngiver en blok, `A` gør alle blokke. Værdier bevares.

Værdierne i et biblioteksemnes egne felter (dets id, version, licens og kildeangivelse) vises, men kan ikke redigeres, så opdateringstjek fortsat virker. Dets postnummer og antal må du gerne ændre.

## List dem

Vælg referencer, og skriv `LI` (for {{cmd:LIST}}). Historikken viser hver attribut som `TAG = value`, med `(invisible)` eller `(constant)` hvor det gælder.

## Flyt, drej og eksplodér

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} og {{cmd:MIRROR}} beholder værdierne. Teksten flytter med blokken og forbliver læselig.
- {{cmd:EXPLODE}} gør de synlige attributter til almindelig tekst med deres værdier. De usynlige udelades.

## Gem

En gemt DWG og en gemt DXF beholder begge hver attribut: hver blok's definitioner (også de usynlige, konstante og forudindstillede) og hver references værdier. Andre CAD-programmer læser dem som almindelige blokattributter.

I en DXF R12 afkortes en værdi der er længere end 255 tegn til 255, og historikken siger det.

## Almindelige fejl

- **En værdi vises ikke på tegningen.** Den er usynlig, eller den er tom. Usynlige værdier vises stadig i højre panel.
- **Den værdi jeg skrev, gik til kommandolinjen.** Klik først ind i værdifeltet i højre panel.
