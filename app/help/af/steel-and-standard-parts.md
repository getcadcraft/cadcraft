---
title: Plaas staalprofiele en standaardonderdele
summary: Teken staalprofiele, aansigte en 3D-lede uit die gepubliseerde profieltabelle, plaas boute, moere, ringe, penne, lagers, sleutels en ratte volgens hul standaarde, en lys hulle in 'n onderdeellys.
keywords: staal, profiel, vorm, W-vorm, breëflens, I-balk, kanaal, hoek, hss, buis, pyp, ipe, hea, heb, upn, balk, kolom, lid, aansig, aisc, en 10365, bout, skroef, moer, ring, pen, dowel, lager, sleutel, sleutelgleuf, rat, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, standaardonderdele, onderdeellys, materiaallys, bom, steelmember, partslist
from: 547c1048
---

Die biblioteek se {{ui:Standaard}}-oortjie het twee soorte goed, hier gemaak uit gepubliseerde tabelle (niks word afgelaai nie):

- **Staalprofiele**: 1,335 groottes. W, S, C, L, HSS en Pipe uit die AISC Shapes Database v16.0; IPE, HEA, HEB en UPN uit EN 10365:2017. DetailCraft gebruik dieselfde tabel.
- **Standaardonderdele**: sekskantkopskroewe (ISO 4017), sekskantbute (ISO 4014), sekskantmoere (ISO 4032), gewone ringe (ISO 7089), duim-sekskantbute en -moere (ASME B18.2.1 en B18.2.2), parallelle penne (ISO 2338), diepgroefbalslagers (ISO 15), parallelle sleutels (DIN 6885-1) en reguittande ratte (modules uit ISO 54).

Alles hier word onder CC0 gedeel: gebruik dit vir enigiets, geen erkenning nodig nie.

## Plaas 'n staalprofiel

1. Maak die biblioteek oop ({{ui:Biblioteek}} in die Blokke-groep, of tik `LIB`) en klik die {{ui:Standaard}}-oortjie.
2. Kies die familie in die eerste lys, byvoorbeeld {{ui:W-profiele}}. Tik in die soekkassie om die groottes te versmal: `W12` wys elke W12.
3. In {{ui:Plaas as}}, kies:
   - {{ui:Snit}}: die dwarssnit, met sy middelpunt by die invoegpunt.
   - {{ui:Hoogtepeil}}: die lid van die kant gesien, so lank as wat {{ui:Lengte (mm)}} sê, vanaf die middel van sy linkeruiteinde.
   - {{ui:3D-lid}}: 'n soliede voorwerp op die 3D-oortjie (hieronder).
4. Klik {{ui:Plaas}} op die grootte se kaart, en klik dan waar dit moet kom, soos vir enige biblioteekitem.

'n Snit of hoogtepeil word 'n blok. Sy kenmerke dra die grootte, die tabel waaruit dit kom, die lengte (vir 'n hoogtepeil) en 'n materiaal wat jy kan invul.

:::note
S-vorms, kanale en UPN word geteken met parallelle flense van die gemiddelde dikte, en hoeke met vierkantige hoeke: die werklike flense is skuins en die hoeke afgerond. W, IPE, HEA en HEB het hul wortelafronings, en HSS hul hoekradiusse.
:::

## Maak 'n 3D-lid

Kies {{ui:3D-lid}} en klik {{ui:Plaas}}, of tik {{cmd:STEELMEMBER}} (`SMEMBER`) by die opdragreël:

1. By `Section size`, druk {{key:Enter}} vir die grootte wat gewys word, of tik een, byvoorbeeld `HSS6x6x1/4` of `IPE300`.
2. Klik die beginpunt, dan die eindpunt. Die lid loop tussen hulle en staan op die grond.
3. Vir 'n kolom, tik `C`, klik sy basispunt en tik sy hoogte.

Die lid is 'n geslote soliede voorwerp op die 3D-oortjie. Skuif of kopieer dit daar soos enige ander soliede voorwerp. {{key:Mod+Z}} haal dit weer weg.

## Plaas 'n standaardonderdeel

1. Kies op die {{ui:Standaard}}-oortjie die familie, byvoorbeeld {{ui:Sekskantkopskroewe}}.
2. Vir 'n skroef, bout, pen of sleutel, tik sy {{ui:Lengte (mm)}} (duim vir die duim-families). Vir 'n rat, tik die {{ui:Tande}}, die {{ui:Vlakbreedte (mm)}} en die {{ui:Boring (mm)}}. Laat 'n blokkie leeg vir die gewone waarde wat daarin gewys word.
3. Klik {{ui:Plaas}} op die grootte en klik waar dit moet kom.

Skroewe, bute en penne word van die kant geteken met die dra-oppervlak van die kop by die invoegpunt; moere, ringe, lagers en ratte word van voor gesien; sleutels van bo. Drade word op die gewone manier geteken: die wortel as 'n dun lyn, die einde van die draad as 'n dik een. Ratte word geteken as hul kopsirkel, steeksirkel en wortelsirkel, nie tand vir tand nie.

Elke onderdeel se blok dra sy tipe, standaard, grootte, lengte en materiaal as kenmerke, en sy gewig uit die nominale vorm in staal. Verander die materiaal in die {{ui:Eienskappe}}-paneel.

Dieselfde onderdele is ook as items in die biblioteek, en PartCraft maak hulle oop as parametriese onderdele ({{ui:Standaardonderdeel}} in sy Lêer-groep).

## Maak 'n onderdeellys

- In die biblioteek, klik {{ui:Onderdeellys}}: elke standaardonderdeel en staalprofiel in die tekening, gegroepeer volgens tipe, standaard, grootte, lengte en materiaal, met die hoeveelheid en die itemnommers. {{ui:Laai CSV af}} stoor dit vir 'n sigbladprogram.
- Om dit te teken, tik {{cmd:PARTSLIST}} (`PLIST`), klik die boonste linkerhoek van die tabel, en druk {{key:Enter}} vir die gewone teksthoogte of tik een.

Die lys word uit die blokke se kenmerke gelees, so dit is steeds korrek nadat die tekening as DWG of DXF gestoor en weer oopgemaak is.

## Algemene foute

- **"Geen staalprofiel heet …"**: tik die grootte soos die {{ui:Standaard}}-oortjie dit lys: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Die lid is op die 3D-oortjie, nie in die plan nie.** {{cmd:STEELMEMBER}} maak 'n soliede voorwerp; maak die 3D-oortjie oop om dit te sien. Om die staal in die plan te wys, plaas ook 'n {{ui:Snit}} of {{ui:Hoogtepeil}}.
- **'n Lengte buite die reeks.** 'n Bout moet langer as sy kop wees, en 'n sleutel langer as wat dit breed is. Die lyn onder die kaarte sê watter waarde geweier is.
