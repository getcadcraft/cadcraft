---
title: Joonise sidumine seostega
summary: Hoia jooned horisontaalsed, otsad kokku ja mõõdud fikseeritud geomeetriliste ja mõõtmeliste seostega ning lase joonisel järgneda, kui muudad mõõtu.
keywords: seos, seosed, parameetriline, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, vabadusastmed, täielikult seotud
from: f8f21fa4
---

## Mida sa valmistad

Plaat, mille laiust muudad ühest kohast: selle küljed jäävad ristnurkseks, üks nurk jääb paigale ja kõrgus jääb poole laiusest.

Seoseid saab lisada joontele, polüjoontele, ringidele, kaartele ja punktidele vahekaardil {{ui:Mudel}}. Iga lisatud seos on üks tagasivõtmise samm.

## Joonista ja seo ääris

1. Tipi `REC` ja vajuta {{key:Enter}}. Tipi `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Tipi `AUTOCONSTRAIN` ja vajuta {{key:Enter}}. Tipi `ALL`, {{key:Enter}}, seejärel veel kord {{key:Enter}}.

   Ajaloos on kirjas „Rakendatud 4 seost“. Külgede kõrval ilmuvad väikesed kastid tähtedega **H** ja **V**: need on seosteribad.
3. Tipi `GCFIX` ja vajuta {{key:Enter}}. Klõpsa vasaku alumise nurga lähedal. Ilmub kast ⊕: see nurk jääb oma kohale.

`AUTOCONSTRAIN` lisab kattuvad seosed kohtadesse, kus otsad peaaegu kokku puutuvad, ning horisontaalsed või vertikaalsed seosed kohtadesse, kus jooned on peaaegu tasased või vertikaalsed. Muuda, kui lähedal, tipi viiba juures `S` (algselt 0,05 joonise ühikut ja 1°).

## Lisa mõõdud

1. Tipi `DCHORIZONTAL` ja vajuta {{key:Enter}}.
2. Klõpsa vasaku alumise nurga lähedal, seejärel parema alumise nurga lähedal.
3. Klõpsa ristküliku alla, et paigutada mõõtejoon.
4. Viip näitab `Mõõdu tekst <d1=100>`. Tipi `width=120` ja vajuta {{key:Enter}}.

   Ristkülik on nüüd 120 lai ja silt näitab `width=120`.
5. Tipi `DCVERTICAL` ja vajuta {{key:Enter}}, tipi `O` ja vajuta {{key:Enter}}, seejärel klõpsa paremal küljel.
6. Klõpsa selle paremale poole, tipi `width/2` ja vajuta {{key:Enter}}.

   See on 60 kõrge. Silt näitab `fx: d1=width/2`: avaldis juhib seda.

Ajalugu ütleb nüüd, et kontuur on täielikult seotud. Suuruse muutmiseks muuda `width`-i (vt [Kasuta parameetreid ja võrrandeid](topic:parameters)) või tee topeltklõps sildil `width=120`, tipi uus väärtus ja vali {{ui:Rakenda}}.

## Seotud objektide teisaldamine

Teisalda, pööra, muuda mõõtkava, kasuta haardepunkte ja omaduste paneeli: kõik need säilitavad seosed. Teisaldatu jääb paigale ja ülejäänu järgneb. Kui seosed ei saa järgneda, muudatust ei tehta ja ajalugu ütleb põhjuse, näiteks „Ei tehtud: seosed hoiavad selle objekti praegusel kohal“. Objekti kustutamine kustutab ka selle seosed.

## Seotud objektide peegeldamine ja kärpimine

- {{cmd:MIRROR}} kopeerib seosed peegeldatavate objektide vahel koopiatele. Pooled (millisel pool puutuja puudutab, millisele poole kaugus mõõdetakse) arvutatakse koopia jaoks uuesti ning kopeeritud mõõtudele antakse oma nimed, nagu kleepimisel. Kui valik „Kustuta lähteobjektid“ on `Y`, jäävad seosed peegeldatud objektidele. Ajalugu ütleb, mitu neist kaasa tuli.
- {{cmd:TRIM}} säilitab joone või kaare seosed alles jäävas osas: otsa seos läheb sellele tükile, millel see ots veel on; suunareegel ({{ui:Horisontaalne}}, {{ui:Vertikaalne}}, {{ui:Paralleelne}}, {{ui:Risti}}) kehtib igal tükil; kahe välimise otsa vaheline mõõt mõõdab neid edasi. Seosed, mis hoidsid lõigatud osa, ja pikkused, mida lõige muutis ({{ui:Võrdne}}, kaare ulatus), kaovad. Kärbitud ring säilitab oma keskpunkti ja raadiuse seosed. Kärbitud polüjooned kaotavad oma seosed.

## Seosed

| Käsk | Hoiab |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | joon või lõik horisontaalne või vertikaalne (`2P`: kaks punkti horisontaalselt või vertikaalselt) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | kaks joont paralleelsed, risti või ühel sirgel |
| {{cmd:GCCOINCIDENT}} | kaks punkti kokku; `O`: punkt joonel, ringil või kaarel |
| {{cmd:GCTANGENT}} | joon ja ring või kaar, või kaks neist, puutuvad |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | kaks ringi või kaart ühel keskmel; kaks pikkust või kaks raadiust võrdsed |
| {{cmd:GCSYMMETRIC}} | kaks punkti, joont või ringi peegelduvad joone suhtes |
| {{cmd:GCFIX}} | punkt (klõpsa selle lähedal) või terve objekt (`O`) sinna, kus ta on |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | kaugus |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | raadius, läbimõõt, nurk kahe joone vahel või kaare nurk |

{{cmd:GEOMCONSTRAINT}} ja {{cmd:DIMCONSTRAINT}} küsivad, millist; {{ui:Seo}} ja {{ui:Mõõt}} rühmas {{ui:Parameetriline}} käivitavad need ning {{ui:Veel}} seal loetleb igaühe. Koht, kuhu klõpsad, valib osa: klõps otsa, keskme või keskpunkti lähedal võtab selle punkti; klõps polüjoonel võtab selle all oleva lõigu. Esimene objekt jääb paigale ja teine liigub, et temaga kohtuda.

Seos, mis on vastuolus teistega või ei lisa midagi, sest teised juba selle hõlmavad, lükatakse tagasi teatega ja midagi ei liigu.

## Vaata, vali ja eemalda

- Klõpsa seosteriba kasti (või kattuvuse ruutu või mõõdusilti), et valida see seos; ajalugu nimetab seda. Eemaldamiseks vajuta {{key:Delete}}.
- {{cmd:DELCONSTRAINT}} eemaldab kõik seosed valitud objektidelt.
- {{cmd:CONSTRAINTBAR}}: `S` näitab kõiki riba, `H` peidab need; esmalt vali objektid, et nende omi näidata või peita. {{ui:Veel}} sisaldab {{ui:Kuva seosteribad}} ja {{ui:Peida seosteribad}}.
- {{cmd:DCDISPLAY}} näitab või peidab mõõtmelised seosed. Neid ei väljastata kunagi.
- {{cmd:DCCONVERT}} muudab joontel, ringidel ja kaartel joonistatud mõõdud mõõtmelisteks seosteks.

:::note
Kui oled kasutanud AutoCADi parameetrilist joonistamist, on käsunimed ja viibad samad. Seosed ja parameetrid salvestatakse DWG- ja DXF-failidesse vormis, mida teised programmid ignoreerivad; vt [Failid](topic:files#constraints-in-files).
:::
