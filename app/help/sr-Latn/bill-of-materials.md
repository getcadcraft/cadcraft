---
title: Spisak materijala po zonama
summary: Označite oblasti crteža kao zone i postavite tabelu za svaku, koja broji blokove unutra. Tabele prate crtež dok radite, a vi birate koje kolone svaka prikazuje.
keywords: spisak materijala, BOM, lista delova, specifikacija, zona, oblast, tabela, broj, atribut, kolone, broj stavke, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

**zona** je imenovana oblast crteža. **Tabela spiska materijala** navodi šta leži unutar jedne zone, ili u celom crtežu: svaki blok sa svojom količinom i vrednostima atributa. Crtež može imati koliko god zona i tabela treba, a jedna zona može imati nekoliko tabela sa različitim kolonama.

Alati su na kartici Blokovi, pod {{ui:Spisak materijala}}, u meniju {{ui:Više}} grupe Blokovi, i mogu se ukucati.

## Napravite zonu

Ukucajte {{cmd:BOMZONE}} i izaberite jedno od:

- kliknite dva suprotna ugla za pravougaonik,
- izaberite {{ui:Poligon}}, kliknite svaki ugao i pritisnite Enter da ga zatvorite, ili
- izaberite {{ui:Objekat}} i izaberite zatvorenu polilinija, krug, elipsu ili zatvoreni splajn. Njegov obris se kopira; objekat ostaje kakav je.

Zatim ukucajte ime zone. Zona se crta isprekidanim obrisom, sa imenom iznad gornjeg levog ugla, na sloju `BOM-ZONES`, koji se ne štampa. Uključite štampanje za taj sloj ako želite zone na papiru.

Zona je obična zatvorena polilinija: pomerajte je, razvlačite ili vucite njene hvataljke, a njeno ime prati. Da preimenujete zonu, izmenite tekst imena, ili koristite {{cmd:BOMZONE}} i {{ui:Preimenuj}}. {{ui:Zone}} navodi svaku zonu i koliko tabela ima.

## Postavite tabelu

Ukucajte {{cmd:BOMTABLE}} (ili {{cmd:BOM}}), izaberite obris zone ili njeno ime, zadajte visinu teksta i kliknite mesto gde ide gornji levi ugao tabele. Pritisnite Enter umesto biranja zone, ili izaberite {{ui:Ceo}}, za tabelu celog crteža.

Nova tabela prikazuje broj stavke, količinu, ime bloka i kolonu za svaki atribut koji blokovi nose (prvih šest; ostale se nude bez oznake). Blokovi sa istim imenom i istim vrednostima atributa dele jedan red.

## Šta se računa kao unutra

- Blok se računa u zoni koja sadrži njegovu **tačku umetanja**.
- Linija, luk, krug, polilinija, elipsa, splajn ili šrafura računa se **celo** u zoni koja sadrži sredinu njenih granica (za liniju, njenu središnju tačku). Njena dužina se ne seče na ivici zone.
- Tačka tačno na ivici je unutra.
- Zone mogu da se preklapaju. Svaka zona računa za sebe, pa je objekat u preklapanju u obe tabele.

## Tabele prate crtež

Kada dodajete, pomerate, kopirate ili brišete blok, menjate atribut, ili preoblikujete ili pomerate zonu, svaka tabela se ponovo crta u istom koraku. Poništavanje vraća vašu izmenu i promenu tabele zajedno.

Da tabela ne prati, označite {{ui:Zamrznuto}} u njenim podešavanjima. Zamrznuta tabela se menja samo kada menjate njena podešavanja ili ukucate {{cmd:BOMUPDATE}}, koji sada ažurira svaku tabelu.

## Izaberite kolone

Izaberite tabelu i ukucajte {{cmd:BOMEDIT}}. U dijalogu:

- **Kolone**: označite one koje želite da prikažete (stavka, količina, ime, sloj, dužina, površina, napomene i svaki atribut), ukucajte svoj naslov za bilo koju od njih, i pomerajte ih gore ili dole.
- {{ui:Grupiši redove po}}: ime bloka i vrednosti atributa, samo ime bloka, sloj, ili jedan atribut. U spojenom redu vrednost koja se razlikuje među blokovima glasi „varira“.
- {{ui:Sortiraj po}} bilo kojoj koloni, rastuće ili opadajuće.
- {{ui:Naslov}}, {{ui:Prikaži naslov}} i {{ui:Red ukupnih zbirova}}.
- {{ui:Prebroj linije po sloju}} dodaje po jedan red za svaki sloj, sa brojem objekata, njihovom ukupnom dužinom i, za zatvorene oblike, ukupnom površinom, u jedinicama crteža.
- **Napomene**: označite kolonu Napomene, pa ukucajte napomenu za bilo koji red u tabeli, u donjem delu dijaloga.

Svaka tabela čuva svoje izbore.

## Brojevi stavki

Red zadržava svoj broj stavke dok je u tabeli. Novi red dobija sledeći slobodan broj, a dati broj se ne koristi ponovo, pa baloni i beleške koje navode broj ostaju tačni. {{ui:Ponovo numeriši stavke}} numeriše ih od 1, po redu kojim se prikazuju.

Red je prepoznat po onome što grupiše: promenite način grupisanja, ili promenite vrednost atributa koju grupisanje koristi, i red se računa kao nov.

## Izvoz i drugi programi

{{cmd:BOMEXPORT}}, ili {{ui:Izvezi CSV}} u dijalogu, čuva tabelu kao .csv datoteku za tabelarnu obradu.

U DWG ili DXF datoteci tabela je običan blok linija i teksta, pa je drugi programi prikazuju i štampaju kao nacrtano. To nije tabela objekat, i ne ažurira se u drugim programima. Veza sa zonom čuva se u datoteci kao prošireni podatak koji CadCraft čita, pa je tabela ponovo aktivna kada ponovo otvorite crtež u programu CadCraft. R12 DXF crteža bez lista ne čuva podešavanje „nije štampano“ za sloj zone.

Razbijanje tabele pretvara je u samostalne linije i tekst i prekida vezu.
