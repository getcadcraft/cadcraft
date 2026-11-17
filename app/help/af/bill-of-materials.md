---
title: Materiaallyste per sone
summary: Merk areas van 'n tekening as sones en plaas 'n tabel vir elke sone wat die blokke daarin tel. Die tabelle volg die tekening soos jy werk, en jy kies watter kolomme elkeen wys.
keywords: materiaallys, BOM, onderdeellys, skedule, sone, area, tabel, tel, attribuut, kolomme, item-nommer, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

'n **Sone** is 'n benoemde area van die tekening. 'n **Materiaallys-tabel** lys wat binne een sone lê, of in die hele tekening: elke blok met sy hoeveelheid en sy attribuutwaardes. 'n Tekening kan soveel sones en tabelle hê as jy nodig het, en een sone kan verskeie tabelle met verskillende kolomme hê.

Die gereedskap is op die Blokke-oortjie onder {{ui:Materiaallys}}, in die Blokke-groep se {{ui:Meer}}-kieslys, en kan getik word.

## Maak 'n sone

Tik {{cmd:BOMZONE}} en kies enige van:

- klik twee teenoorstaande hoeke vir 'n reghoek,
- kies {{ui:Veelhoek}}, klik elke hoek en druk Enter om dit toe te maak, of
- kies {{ui:Voorwerp}} en kies 'n geslote polilyn, 'n sirkel, 'n ellips of 'n geslote spline. Die buitelyn word gekopieer; die voorwerp bly soos dit is.

Tik dan die sone se naam. Die sone word as 'n gestippelde buitelyn getrek met sy naam bo die linkerboonste hoek, op laag `BOM-ZONES`, wat nie geplot word nie. Skakel plot vir daardie laag aan as jy sones op papier wil hê.

'n Sone is 'n gewone geslote polilyn: skuif, rek dit of sleep sy handvatsels, en sy naam volg. Om 'n sone te hernoem, wysig die naam se teks, of gebruik {{cmd:BOMZONE}} en {{ui:Hernoem}}. {{ui:Sones}} lys elke sone en hoeveel tabelle dit het.

## Plaas 'n tabel

Tik {{cmd:BOMTABLE}} (of {{cmd:BOM}}), kies die sone se buitelyn of sy naam, gee die teksthoogte en klik waar die tabel se linkerboonste hoek moet kom. Druk Enter in plaas van 'n sone te kies, of kies {{ui:Geheel}}, vir 'n tabel van die hele tekening.

'n Nuwe tabel wys die item-nommer, die hoeveelheid, die blok se naam en 'n kolom vir elke attribuut wat die blokke dra (die eerste ses; die ander word ongemerk aangebied). Blokke met dieselfde naam en dieselfde attribuutwaardes deel 'n ry.

## Wat as binne tel

- 'n Blok tel in die sone wat sy **invoegpunt** hou.
- 'n Lyn, boog, sirkel, polilyn, ellips, spline of arsering tel **heel** in die sone wat die middel van sy omvang hou (vir 'n lyn, sy middelpunt). Sy lengte word nie by die sone se rand afgesny nie.
- 'n Punt presies op die rand is binne.
- Sones kan oorvleuel. Elke sone tel vir homself, so 'n voorwerp in die oorvleueling is in albei tabelle.

## Tabelle volg die tekening

Wanneer jy 'n blok byvoeg, skuif, kopieer of uitvee, 'n attribuut wysig, of 'n sone hervorm of skuif, word elke tabel in dieselfde stap herteken. Ontdoen neem jou wysiging en die tabelverandering saam terug.

Om te keer dat 'n tabel volg, merk {{ui:Gevries}} in sy instellings. 'n Gevriesde tabel verander net as jy sy instellings wysig of {{cmd:BOMUPDATE}} tik, wat nou elke tabel opdateer.

## Kies die kolomme

Kies 'n tabel en tik {{cmd:BOMEDIT}}. In die dialoog:

- **Kolomme**: merk die wat gewys moet word (item, hoeveelheid, naam, laag, lengte, oppervlakte, opmerkings en elke attribuut), tik jou eie opskrif vir enige daarvan, en skuif hulle op of af.
- {{ui:Groepeer rye volgens}}: blok se naam en attribuutwaardes, slegs blok se naam, laag, of een attribuut. In 'n saamgevoegde ry lees 'n waarde wat tussen blokke verskil "varies".
- {{ui:Sorteer volgens}} enige kolom, oplopend of aflopend.
- {{ui:Titel}}, {{ui:Wys die titel}} en {{ui:Totaalry}}.
- {{ui:Tel lynwerk per laag}} voeg een ry per laag by met die aantal voorwerpe, hul totale lengte en, vir geslote vorms, hul totale oppervlakte, in tekeningeenhede.
- **Opmerkings**: merk die Opmerkings-kolom, tik dan 'n opmerking vir enige ry in die tabel onderaan die dialoog.

Elke tabel hou sy eie keuses.

## Item-nommers

'n Ry hou sy item-nommer solank dit in die tabel is. 'n Nuwe ry kry die volgende vrye nommer, en 'n nommer wat uitgegee is, word nooit weer gebruik nie, sodat ballonne en notas wat 'n nommer aanhaal, reg bly. {{ui:Nommer items weer}} nommer hulle vanaf 1 in die volgorde wat gewys word.

'n Ry word geken aan wat dit groepeer: verander hoe rye gegroepeer word, of verander 'n attribuutwaarde wat die groepering gebruik, en die ry tel as 'n nuwe een.

## Uitvoer en ander programme

{{cmd:BOMEXPORT}}, of {{ui:Voer CSV uit}} in die dialoog, stoor 'n tabel as 'n .csv-lêer vir 'n sigblad.

In 'n DWG- of DXF-lêer is 'n tabel 'n gewone blok lyne en teks, sodat ander programme dit wys en plot soos getrek. Dit is daar nie 'n tabelvoorwerp nie, en dit word nie in ander programme bygewerk nie. Die skakel na sy sone word in die lêer bewaar as uitbreidingsdata wat CadCraft terug lees, sodat die tabel weer lewendig is wanneer jy die tekening weer in CadCraft oopmaak. 'n R12 DXF van 'n tekening sonder 'n blad hou nie die "nie geplot"-instelling van die sone se laag nie.

Om 'n tabel te ontbind maak dit los lyne en teks en beëindig die skakel.
