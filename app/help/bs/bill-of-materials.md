---
title: Specifikacije materijala po zonama
summary: Označite dijelove crteža kao zone i postavite tabelu za svaku koja broji blokove unutra. Tabele prate crtež dok radite, a vi birate koje kolone svaka prikazuje.
keywords: specifikacija materijala, bill of materials, BOM, lista dijelova, parts list, specifikacija, schedule, zona, zone, površina, area, tabela, table, prebroj, count, količina, quantity, atribut, attribute, kolone, columns, broj stavke, item number, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

**Zona** je imenovani dio crteža. **Tabela specifikacije materijala** navodi šta leži unutar jedne zone, ili u cijelom crtežu: svaki blok sa njegovom količinom i vrijednostima njegovih atributa. Crtež može imati koliko god zona i tabela treba, a jedna zona može imati više tabela sa različitim kolonama.

Alati se nalaze na kartici Blokovi pod {{ui:Bill of materials}}, u meniju Više u grupi Blokovi, i mogu se upisati.

## Napravite zonu

Upišite {{cmd:BOMZONE}} i ili

- kliknite dva suprotna ugla za pravougaonik,
- izaberite {{ui:Polygon}}, kliknite svaki ugao i pritisnite Enter da je zatvorite, ili
- izaberite {{ui:Object}} i odaberite zatvorenu poliliniju, krug, elipsu ili zatvoreni splajn. Njen obris se kopira; objekat ostaje kakav jeste.

Zatim upišite naziv zone. Zona se crta kao isprekidani obris sa svojim nazivom iznad gornjeg lijevog ugla, na sloju `BOM-ZONES`, koji se ne štampa. Uključite štampanje za taj sloj ako želite zone na papiru.

Zona je obična zatvorena polilinija: pomjerajte je, razvlačite ili vučite njene hvataljke, a njen naziv je prati. Da preimenujete zonu, uredite tekst naziva, ili upotrijebite {{cmd:BOMZONE}} i {{ui:Rename}}. {{ui:Zones}} navodi svaku zonu i koliko tabela ima.

## Postavite tabelu

Upišite {{cmd:BOMTABLE}} (ili {{cmd:BOM}}), odaberite obris zone ili njen naziv, zadajte visinu teksta i kliknite gdje ide gornji lijevi ugao tabele. Pritisnite Enter umjesto biranja zone, ili izaberite {{ui:Whole}}, za tabelu cijelog crteža.

Nova tabela prikazuje broj stavke, količinu, naziv bloka i kolonu za svaki atribut koji blokovi nose (prvih šest; ostali se nude neoznačeni). Blokovi sa istim nazivom i istim vrijednostima atributa dijele red.

## Šta se računa kao unutra

- Blok se računa u zoni koja sadrži njegovu **tačku umetanja**.
- Linija, luk, krug, polilinija, elipsa, splajn ili šrafura računaju se **cijeli** u zoni koja sadrži sredinu njenog obuhvata (za liniju, njenu sredinu). Njena dužina se ne siječe na ivici zone.
- Tačka tačno na ivici je unutra.
- Zone se mogu preklapati. Svaka zona se računa za sebe, pa je objekat u preklapanju u obje tabele.

## Tabele prate crtež

Kad dodate, pomjerate, kopirate ili brišete blok, uredite atribut, ili preoblikujete ili pomjerate zonu, svaka tabela se ponovo crta u istom koraku. Poništavanje vraća i vašu izmjenu i promjenu tabele zajedno.

Da zaustavite praćenje tabele, označite {{ui:Frozen}} u njenim postavkama. Zamrznuta tabela se mijenja samo kad uredite njene postavke ili upišete {{cmd:BOMUPDATE}}, koji sada ažurira svaku tabelu.

## Izbor kolona

Odaberite tabelu i upišite {{cmd:BOMEDIT}}. U dijalogu:

- **Kolone**: označite one koje želite prikazati (stavka, količina, naziv, sloj, dužina, površina, napomene i svaki atribut), upišite vlastito zaglavlje za bilo koju od njih, i pomjerajte ih gore ili dolje.
- {{ui:Group rows by}}: naziv bloka i vrijednosti atributa, samo naziv bloka, sloj, ili jedan atribut. U spojenom redu vrijednost koja se razlikuje među blokovima glasi „varies”.
- {{ui:Sort by}} bilo koju kolonu, rastuće ili opadajuće.
- {{ui:Title}}, {{ui:Show the title}} i {{ui:Totals row}}.
- {{ui:Count linework by layer}} dodaje jedan red po sloju sa brojem objekata, njihovom ukupnom dužinom i, za zatvorene oblike, ukupnom površinom, u jedinicama crteža.
- **Napomene**: označite kolonu Napomene, pa upišite napomenu za bilo koji red u tabeli na dnu dijaloga.

Svaka tabela zadržava svoje izbore.

## Brojevi stavki

Red zadržava svoj broj stavke dokle god je u tabeli. Novi red uzima sljedeći slobodan broj, a broj koji je već dodijeljen se ne koristi ponovo, pa balone i bilješke koje navode broj ostaju tačni. {{ui:Renumber items}} ih numeriše od 1 redom kojim se prikazuju.

Red se prepoznaje po onome što grupiše: promijenite način grupisanja ili promijenite vrijednost atributa koju grupisanje koristi, i red se računa kao novi.

## Izvoz i drugi programi

{{cmd:BOMEXPORT}}, ili {{ui:Export CSV}} u dijalogu, snima tabelu kao .csv datoteku za tabelarni program.

U DWG ili DXF datoteci tabela je obični blok linija i teksta, pa je drugi programi prikazuju i štampaju onako kako je nacrtana. Tamo nije tabelarni objekat i ne ažurira se u drugim programima. Veza sa njenom zonom čuva se u datoteci kao proširen podatak koji CadCraft čita nazad, pa je tabela ponovo živa kad ponovo otvorite crtež u CadCraftu. R12 DXF crteža bez lista ne čuva postavku „ne štampa se” sloja zone.

Razbijanje tabele pretvara je u labave linije i tekst i prekida vezu.
