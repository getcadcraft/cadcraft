---
title: Kaip pastatyta linijų atsekimas per taškų debesį
summary: Prikabinkite lazerinį skenavimą (LAS, LAZ, E57, PLY, PCD, PTX, PTS arba XYZ) po brėžiniu, nupjaukite per jį plano pjūvį ir braižykite sienas, duris bei kolonas prisegdami objektus prie jo taškų.
keywords: taškų debesis, pointcloudattach, pcattach, pointcloud, pc, lazerinis skenavimas, skenavimas, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, kaip pastatyta, kaip pastatyta, geodezinis matavimas, pjūvis, plano pjūvis, mazgas, fiksavimas, atsekti, esama būklė
from: b0e0aae5
---

## Ką sukursite

Kaip pastatyta aukšto planą: nuskenuoto pastato sienos, nubrėžtos linijomis ir polilinijomis tiksliai ant skenavimo taškų.

## Prikabinkite debesį

1. Pirmiausia nustatykite brėžinio vienetus, jei jų dar nėra (lauke {{ui:Vienetai}} skiltyje {{ui:Ypatybės}} arba {{cmd:UNITS}}): CadCraft konvertuoja debesį iš jo paties vienetų į brėžinio vienetus.
2. Įveskite {{cmd:POINTCLOUDATTACH}} (arba `PCATTACH`) ir paspauskite {{key:Enter}}. Pasirinkite failą `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` arba `.xyz` (tema apie taškų debesų formatus paaiškina, ką kiekvienas iš jų atneša ir ką eksportuoti iš skanerio programinės įrangos). Failą taip pat galite atverti su {{ui:Atverti}}, numesti ant puslapio arba išsiųsti iš BIM peržiūros priemonės {{ui:Atsekti CadCraft programoje}}.
3. `Debesies apatinis kairysis kampas`: paspauskite {{key:Enter}}, kad būtų išlaikytos failo koordinatės (projektui susietas skenavimas sutaps su brėžiniu), arba spustelėkite vietą, kur turi būti apatinis kairysis debesies kampas.
4. Komandų eilutėje nurodoma, kiek taškų rodoma. Vaizdas priartinamas prie debesies; jis guli po linijomis, ir visi taškai matomi iš viršaus.

## Nupjaukite plano pjūvį ir atsekite

1. Įveskite {{cmd:POINTCLOUD}} (arba `PC`), tada `[Pjūvis (S)]`. Rodoma tik plona juosta, esanti 1,2 m virš žemiausio debesies taško: sienos, durų angos ir kolonos atrodo kaip aukšto planas.
2. `[Aukštis (H)]` nustato pjūvio aukštį, `[Storis (T)]` – jo storį (brėžinio vienetais). {{key:Enter}} baigia komandą.
3. Įjunkite objektų fiksavimą ({{key:F3}}) ir tarp fiksavimų pažymėkite {{ui:Mazgas}}. Braižykite su {{cmd:LINE}} arba {{cmd:PLINE}}: žymeklis prisiriš prie pjūvio taškų, pažymėtų „Taškų debesis“. Paties brėžinio galiniai, vidurio ir centro taškai turi pirmenybę prieš debesį, todėl uždarant poliliniją ji prisiriš prie pirmojo taško.
4. Pakeiskite pjūvio aukštį, kad atsekite kitą lygį, tada išjunkite pjūvį (dar kartą `[Pjūvis (S)]`), kad pamatytumėte visą debesį.

## Daugiau parinkčių

Komandoje {{cmd:POINTCLOUD}}: `[Spalva (C)]` nudažo taškus pagal failo spalvas, aukštį, intensyvumą, LiDAR klasę arba viena spalva; `[Taško dydis (SI)]` nustato taško dydį; `[Matomumas (V)]` slepia arba rodo debesį; `[Keisti mastelį (Z)]` priartina prie jo; `[Atkabinti (D)]` jį atkabina.

3D skirtuke debesis rodomas taip pat, jo žemiausias taškas – ant žemės, su tuo pačiu pjūviu.

:::note
Debesis nėra brėžinio dalis: jis neįrašomas į DWG ar DXF, o anuliavimas jo nekeičia. Atidarius brėžinį vėliau, debesį reikia prikabinti iš naujo. Failai nuskaitomi šiame kompiuteryje; nieko neįkeliama. Labai dideli skenavimai vienodai retinami iki 2 milijonų taškų. E57 failai atveriami iki 6 milijonų taškų ir 512 MB šiuo metu: didesnius skenavimus eksportuokite kaip LAS arba LAZ.
:::

## Spausdinimas

{{cmd:PLOT}} atspausdina debesį kartu su brėžiniu, po linijomis: modelio spausdinime ({{ui:Viską}} apima debesies plotą) ir kiekviename maketo vaizdo lange, PDF, PNG, SVG bei tuo, ką siunčiate spausdintuvui. Spausdinama tai, kas rodoma ekrane: pjūvis, jei jis įjungtas, pasirinktos spalvos, o paslėptas debesis nespausdinamas. Popieriuje taškai tampa mažais kvadratėliais, o kiekvieno kvadratėlio spalva atitinka aukščiausią jo tašką; spausdinime išsaugoma ne daugiau kaip maždaug 400,000 taškų (labai tankus debesis spausdinamas didesniais kvadratėliais). Debesis spausdinamas tik brėžinyje, kuriame jis buvo prikabintas; popieriaus erdvėje jis niekada nespausdinamas tiesiogiai, tik per vaizdo langą.

## Keli skenavimai

Skenavimus, atliktus iš skirtingų pozicijų, galima susieti į vieną koordinačių sistemą, patikslinti ICP metodu ir eksportuoti kaip vieną LAS arba E57: žr. [Susieti kelis skenavimus į vieną](topic:register-scans).
