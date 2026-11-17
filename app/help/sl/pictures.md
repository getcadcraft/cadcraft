---
title: Slike v risbi
summary: Postavite sliko PNG ali JPEG, jo obrežite na pravokotnik ali mnogokotnik, prikažite slike, ki jih uporablja DWG, in jih izrišite ostro.
keywords: pastearea, parea, kopiraj območje, kopirano območje, markupcraft, prava velikost, dejanska velikost, prekrivanje, ole, ole2frame, vdelani predmet, prilepi sliko, prilepi posnetek zaslona, ctrl+v, slika iz odložišča, posnetek zaslona, slika, picture, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, logotip, fotografija, rastrska slika, imagedef, xref, izris, pdf, ločljivost
from: 4025ac97
---

## Kaj boste naredili

Logotip podjetja postavljen v glavo risbe, obrezan na del, ki ga želite, in PDF, v katerem se natisne v svoji ločljivosti.

## Postavite sliko

1. Vpišite {{cmd:IMAGEATTACH}} (ali `IAT`) in pritisnite {{key:Enter}}. Izberite datoteko PNG ali JPEG.
2. `Določite spodnji levi vogal`: kliknite ali vpišite točko.
3. `Določite širino`: širina v enotah risbe. {{key:Enter}} ohrani ponujeno širino: ena enota na slikovno točko ali širina, ki ste jo nazadnje dali tej datoteki (poziv pove, katera).
4. `Določite kot zasuka`: {{key:Enter}} za brez zasuka.

Slika je en objekt: izberete jo po njenem okvirju in jo premikate, kopirate, zasukate, spreminjate v merilu ali brišete kot kateri koli blok.

:::note
Datoteka slike ostane z risbo, dokler je risba odprta. Shranjena DWG navede datoteko, kot to počnejo drugi programi; slikovnih točk ne hrani. Sliko shranite poleg risbe.
:::

## Prilepite posnetek zaslona ali kopirano sliko

1. Kopirajte sliko (posnetek zaslona z {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=vaše orodje za zajem zaslona}}, ali Kopiraj sliko v drugem programu ali brskalniku).
2. Kažite tja, kamor naj gre na risbi, in pritisnite {{key:Mod+V}}.

Spodnji levi vogal slike pristane na kazalcu (ali na sredini pogleda) in je široka 40 % tega, kar vidite; premaknite, spremenite v merilu in obrežite jo kot katero koli sliko. Ime je ime risbe z dodatkom `-picture-1.png` (nato `-2`, …), zgodovina pa to pove.
{{ui:Urejanje}} › {{ui:Več}} › {{ui:Prilepi sliko}} naredi isto iz menija (brskalnik lahko prej vpraša).

DWG ohrani samo ime datoteke slike, zato shranjevanje risbe shrani tudi sliko kot njeno lastno datoteko. Obe hranite v isti mapi: risba prikaže sliko iz nje. V brskalniku je to drugi prenos, zgodovina pa to pove. Če je na odložišču samo objekti CadCraft, {{key:Mod+V}} prilepi te, kot prej.

## Prilepite območje, kopirano v MarkupCraftu

{{ui:Kopiraj območje}} v MarkupCraftu kopira del lista kot sliko, ki pozna svojo velikost. CadCraft jo prilepi v tej velikosti.

1. V MarkupCraftu kopirajte območje (pravokotnik, krog ali prosta oblika; {{ui:Kopiraj kot prekrivanje}}, če želite skozenj videti svojo risbo).
2. V CadCraftu pritisnite {{key:Mod+V}}, ali vpišite {{cmd:PASTEAREA}} (ali `PAREA`), ali izberite {{ui:Urejanje}} › {{ui:Več}} › {{ui:Prilepi kopirano območje}}.
3. `Določite spodnji levi vogal kopiranega območja`: kliknite ali vpišite točko. Okvir velikosti območja sledi kazalcu.

Kako velika pristane:

- **List je imel merilo risbe:** v pravi velikosti, v enotah risbe (1:50 podrobnost 2 m stopnic je v metrski risbi dolga 2 m, v palčni risbi 78.74). Nič drugega se ne vpraša.
- **List ni imel merila:** CadCraft pove njegovo velikost na papirju in vpraša za merilo: vpišite `100` za list 1:100, pritisnite {{key:Enter}} za velikost papirja ali vpišite `P`, kliknite dve točki na prilepljeni sliki in vpišite, kako daleč sta v resnici narazen (tako kot naredi {{cmd:SCANSCALE}}). Spodnji levi vogal ostane tam, kamor ste ga postavili.

Risba brez enot vzame milimetre, kot jih vzame podlaga PDF. Prekrivanje ohrani svoj papir prosojen in se začne tako zbledeno, kot je bilo kopirano; zunaj kroga ali proste oblike je prav tako prosojno. Prilepljeno območje je slika kot vsaka druga: premaknete, zasukate, spremenite v merilu, obrežete ali izbrišete jo; celotno lepljenje je en korak razveljavitve. Shranjeno kot DWG je IMAGE z njegovo zbledenostjo in prosojnostjo.

{{key:Mod+V}} prilepi območje, kadar je slika na odložišču njegova ali kadar je bilo območje kopirano po čemerkoli, kar ste kopirali v CadCraftu (in v zadnjih 6 urah). Drugače prilepi kot prej. {{cmd:PASTEAREA}} prilepi nazadnje kopirano območje kadarkoli.

## Prikažite slike, ki jih uporablja DWG

DWG shrani samo, kje so bile njegove slike, zato CadCraft vsako prikaže kot okvir z imenom datoteke.

1. Vpišite {{cmd:IMAGE}} (ali `IM`). Ukazna vrstica našteje vsako datoteko slike in ali se prikaže.
2. Izberite datoteke (več naenkrat). Datoteka, katere ime vsebuje ime, ki ga navaja risba, se prav tako šteje, ker izvozi pogosto dodajo predpono projekta.

## Obrežite sliko

1. Vpišite {{cmd:IMAGECLIP}} (ali `ICL`) in izberite sliko.
2. Izberite `R` in kliknite dva vogala ali `P` in kliknite točke mnogokotnika, nato {{key:Enter}}. `D` odstrani obrezo.

## Izrišite slike

Slike gredo v PDF kot slike, v svoji ločljivosti in pod črtami. V pogovornem oknu {{ui:Izris}} lahko {{ui:Slike}} omejijo na 600, 300 ali 150 dpi, da je datoteka manjša. JPEG gre noter tak, kot je.

## Kaj se shrani kje

| Oblika | Slike |
|---|---|
| DWG (vse različice) | Kot slike (IMAGE), z njihovo obrezo |
| DXF | Kot njihovi okvirji z imenom datoteke; shranjevanje to pove |

## Predmeti iz drugih programov (OLE)

Risba lahko vsebuje predmete, ki jih je naredil drug program, na primer sliko iz programa za risanje ali območje preglednice (predmeti OLE). CadCraft jih ne zažene in ne ureja, tudi novih ne more vstavljati. Kaj naredi:

- **V DXF** se predmet OLE odpre kot okvir. Če je predmet shranil svojo sliko in je ta bitna slika, je narisana znotraj okvirja; sicer okvir nosi oznako z vrsto predmeta, na primer „Microsoft Excel Worksheet (OLE)“. Okvir lahko premikate, kopirate in brišete kot blok. {{cmd:SAVEAS}} v DXF 2000 ga zapiše znova kot predmet OLE s podatki nespremenjenimi.
- **V DWG** se predmeti ohranijo in ob shranjevanju kot DWG zapišejo nazaj, bajt za bajtom, vendar **niso prikazani**: DWG ohrani mesto predmeta znotraj njegovih lastnih podatkov, CadCraft pa jih še ne bere. Zgodovina pove, koliko jih je ohranjenih. Vpišite {{cmd:OLELIST}}, da vidite, kaj so (vrsta, velikost, ali je vsak shranil sliko), in da postavite kopijo slike, kamor izberete: **Postavi** vpraša za številko, spodnji levi vogal in širino ter nariše okvir s sliko v njem. Ta kopija je okvir, ki ga lahko premaknete ali izbrišete; predmet sam ostane v risbi in se še vedno zapiše nazaj ob shranjevanju.
- Predmet, ki je prišel iz DXF, se v DWG shrani samo kot njegov okvir in oznaka; zgodovina to pove. Shranite kot DXF 2000, da ohranite sam predmet.
- Slike, ki so metadatoteke (kar shranjuje veliko programov), se ne rišejo: namesto njih se prikažeta okvir in oznaka.

## Pogoste napake

| Vidite | Zakaj | Popravek |
|---|---|---|
| Okvir z imenom datoteke | CadCraft nima datoteke | {{cmd:IMAGE}}, nato izberite datoteko |
| „To ni slika“ | Izbrani predmet ni slika | Izberite okvir slike |
