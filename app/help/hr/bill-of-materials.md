---
title: Sastavnice po zonama
summary: Označite područja crteža kao zone i postavite tablicu za svaku koja broji blokove unutar nje. Tablice prate crtež dok radite, a vi birate koje stupce svaka prikazuje.
keywords: sastavnica, BOM, popis dijelova, specifikacija, zona, područje, tablica, broj, količina, atribut, stupci, broj stavke, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

**Zona** je imenovano područje crteža. **Tablica sastavnice** popisuje što leži unutar jedne zone ili u cijelom crtežu: svaki blok s njegovom količinom i vrijednostima atributa. Crtež može imati onoliko zona i tablica koliko trebate, a jedna zona može imati više tablica s različitim stupcima.

Alati su na kartici {{ui:Blokovi}} pod {{ui:Sastavnica}}, u izborniku {{ui:Više}} grupe Blokovi, a mogu se i upisati.

## Izradite zonu

Upišite {{cmd:BOMZONE}} i onda

- kliknite dva suprotna kuta za pravokutnik,
- odaberite {{ui:Poligon}}, kliknite svaki kut i pritisnite {{key:Enter}} da ga zatvorite, ili
- odaberite {{ui:Objekt}} i odaberite zatvorenu polilinija, kružnicu, elipsu ili zatvoreni spline. Njegov obris se kopira; objekt ostaje kakav je.

Zatim upišite naziv zone. Zona se crta kao crtkani obris s nazivom iznad gornjeg lijevog kuta, na sloju `BOM-ZONES`, koji se ne ispisuje. Uključite ispis za taj sloj ako želite zone na papiru.

Zona je obična zatvorena polilinija: pomičite je, rastežite ili vučite njezine ručke, a naziv je slijedi. Za preimenovanje zone uredite tekst naziva ili upotrijebite {{cmd:BOMZONE}} i {{ui:Preimenuj}}. {{ui:Zone}} popisuje svaku zonu i koliko tablica ima.

## Postavite tablicu

Upišite {{cmd:BOMTABLE}} (ili {{cmd:BOM}}), odaberite obris zone ili njezin naziv, zadajte visinu teksta i kliknite gdje ide gornji lijevi kut tablice. Pritisnite {{key:Enter}} umjesto odabira zone, ili odaberite {{ui:Cijelo}}, za tablicu cijelog crteža.

Nova tablica prikazuje broj stavke, količinu, naziv bloka i stupac za svaki atribut koji blokovi nose (prvih šest; ostali se nude bez oznake). Blokovi s istim nazivom i istim vrijednostima atributa dijele redak.

## Što se broji kao unutra

- Blok se broji u zoni koja sadrži njegovu **točku umetanja**.
- Linija, luk, kružnica, polilinija, elipsa, spline ili šrafura broje se **cijele** u zoni koja sadrži sredinu njihova opsega (za liniju, njezino polovište). Njezina duljina se ne reže na rubu zone.
- Točka točno na rubu je unutra.
- Zone se mogu preklapati. Svaka zona se broji sama za sebe, pa je objekt u preklapanju u obje tablice.

## Tablice prate crtež

Kad dodate, pomaknete, kopirate ili izbrišete blok, uredite atribut, ili preoblikujete ili pomaknete zonu, svaka tablica se ponovno crta u istom koraku. Poništavanje vraća vašu izmjenu i promjenu tablice zajedno.

Da tablica prestane pratiti, označite {{ui:Zamrznuto}} u njezinim postavkama. Zamrznuta tablica se mijenja samo kad uredite njezine postavke ili upišete {{cmd:BOMUPDATE}}, koji sada ažurira svaku tablicu.

## Odaberite stupce

Odaberite tablicu i upišite {{cmd:BOMEDIT}}. U dijaloškom okviru:

- **Stupci**: označite one koje želite prikazati (stavka, količina, naziv, sloj, duljina, površina, napomene i svaki atribut), upišite vlastito zaglavlje za bilo koji od njih i pomičite ih gore ili dolje.
- {{ui:Grupiraj retke po}}: naziv bloka i vrijednosti atributa, samo naziv bloka, sloj ili jedan atribut. U spojenom retku vrijednost koja se razlikuje među blokovima čita se „varira“.
- {{ui:Razvrstaj po}} bilo kojem stupcu, uzlazno ili silazno.
- {{ui:Naslov}}, {{ui:Prikaži naslov}} i {{ui:Redak ukupno}}.
- {{ui:Prebroji linije po sloju}} dodaje jedan redak po sloju s brojem objekata, njihovom ukupnom duljinom i, za zatvorene oblike, ukupnom površinom, u jedinicama crteža.
- **Napomene**: označite stupac Napomene, zatim upišite napomenu za bilo koji redak u tablici na dnu dijaloškog okvira.

Svaka tablica zadržava vlastite izbore.

## Brojevi stavki

Redak zadržava svoj broj stavke dok je u tablici. Novi redak uzima sljedeći slobodni broj, a broj koji je jednom dodijeljen se ne koristi ponovno, pa oznake i bilješke koje navode broj ostaju točne. {{ui:Ponovno numeriraj stavke}} ih numerira od 1 po redoslijedu prikaza.

Redak se prepoznaje po onome što grupira: promijenite način grupiranja redaka ili vrijednost atributa koju grupiranje koristi, i redak se smatra novim.

## Izvoz i drugi programi

{{cmd:BOMEXPORT}}, ili {{ui:Izvezi CSV}} u dijaloškom okviru, sprema tablicu kao .csv datoteku za proračunsku tablicu.

U DWG ili DXF datoteci tablica je obični blok linija i teksta, pa je drugi programi prikazuju i ispisuju kakva je nacrtana. Tamo nije tablični objekt i ne ažurira se u drugim programima. Veza s njezinom zonom čuva se u datoteci kao podatak proširenja koji CadCraft čita, pa je tablica ponovno aktivna kad ponovno otvorite crtež u CadCraftu. R12 DXF crteža bez lista ne čuva postavku „nije ispisano“ sloja zone.

Rastavljanje tablice pretvara je u labave linije i tekst i prekida vezu.
