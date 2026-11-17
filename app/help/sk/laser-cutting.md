---
title: Odoslanie výkresu na laser
summary: Otvorte panel Laser, vyberte, čo má každá hladina robiť (rezať, rysovať, gravírovať, vyplniť, obrázok), zobrazte náhľad pohybov hlavy, uložte G-kód laser-mode pre GRBL alebo ho po orámovaní úlohy odošlite z prehliadača.
keywords: laser, laserový rezač, laserový gravírovač, GRBL, G-kód, gcode, gravírovanie, výplň, dithering, gravírovanie obrázka, rysovanie, rezanie, Web Serial, orámovanie úlohy, výkon, rýchlosť, priechody, LASER, LASERCUT, CNC
from: 72b56db0
---

Panel {{ui:Laser}} mení hladiny výkresu na program pre laser s GRBL (väčšina hobby a malých dielní s diódovými a CO2 ovládačmi). Zadajte `LASER` (alebo `LASERCUT`) a stlačte {{key:Enter}}, alebo vyberte {{ui:Laser…}} v ponuke {{ui:Viac}} skupiny {{ui:Pohľad}}. V štýloch s pásom kariet je v ponuke {{ui:Súbor}} a vedľa {{ui:Vykresliť}}. Panel sa otvorí nad výkresom a zostane otvorený, kým kreslíte: náhľad sleduje každú zmenu.

:::warning
Každé nastavenie najprv vyskúšajte na odpade, noste vhodné ochranné okuliare pre váš laser, kde má laser veko, nechajte ho zatvorené, a bežiaci laser nikdy nenechávajte bez dozoru. Čísla, s ktorými hladina začína, sú zástupné hodnoty, nie odporúčania pre žiadny materiál.
:::

## Čo sa odosiela

Panel číta model (nie listy), na hladinách, ktoré sú zapnuté a odmrazené:

- Úsečky, oblúky, kružnice, lomené čiary (segmenty oblúkov zostanú oblúkmi), elipsy a splajny. Tvar, ktorý končí tam, kde začína, sa počíta ako uzavretý.
- Bloky sa rozoberú: objekt na hladine 0 vnútri bloku ide s hladinou odkazu na blok.
- Šráfovanie odošle svoju hranicu, takže zašráfované logo na hladine **Výplň** bude vyplnené.
- Obrázok (`IMAGEATTACH`) sa gravíruje na hladine nastavenej na **Gravírovať obrázok**, keď leží rovno (nie otočený ani naklonený) a jeho súbor je otvorený v CadCraft.
- Text, kóty, vynášacie čiary, body a pomocné čiary sa neodosielajú; panel oznámi, koľko ich vynechal. Ak chcete vypáliť text, nakreslite písmená ako tvary alebo ich zašráfujte.

Rozmery sa odosielajú v milimetroch z jednotiek výkresu (`UNITS`): výkres v palcoch sa vynásobí 25.4. Výkres bez nastavených jednotiek sa odošle tak, že jedna jednotka je jeden milimeter. Zaškrtnite {{ui:Iba vybrané objekty}}, ak chcete odoslať časť výkresu.

## Výber, čo má každá hladina robiť

Každá hladina s niečím na nej je riadok. {{ui:Robí}} nastaví hodnotu na **Rezať**, **Rysovať**, **Gravírovať čiary**, **Vyplniť tvary**, **Gravírovať obrázok** alebo **Neodosielať**, s {{ui:Výkon %}}, {{ui:Rýchlosť mm/min}} a počtom {{ui:Priechody}}. Každá zmena je jeden krok späť a uloží sa do výkresu: DWG (každá verzia, ktorú CadCraft uloží) a DXF zachovajú nastavenia, takže sa výkres s nimi otvorí aj nabudúce. Iné programy otvoria súbor ako predtým; uvidia jeden nepoužitý blok s názvom CADCRAFT_LASER (jeho vyčistenie tam nastavenia odstráni).

- **Výplň** vypáli vnútro uzavretých tvarov čiarami, vzdialenými {{ui:Riadkovanie}}, pod {{ui:Uhol}}, v oboch smeroch alebo v jednom, s prečnievaním, aby mala hlava rýchlosť, keď sa laser zapne; krížové šráfovanie pridá druhý priechod pod 90°. Tvar s dierou zostane pri diere otvorený.
- **Gravírovať obrázok** premení obrázok na bodky (Floyd–Steinberg, Atkinson, usporiadané alebo jednoducho čierno-biele podľa prahu) alebo, s *Stupne šedej*, na premenlivý výkon.
- Poradie: najprv obrázky a výplne, potom gravírovanie čiar, potom rysy, potom rezy, aby sa vyrezaný diel nehýbal, kým sa gravíruje. V rámci jednej hladiny dráhy idú **zvnútra von** (dierka pred doskou, v ktorej je), vždy na najbližšiu ďalšiu.

## Náhľad a potom uloženie

Náhľad zobrazuje, čo hlava robí: páliace čiary farbou, rýchle pohyby sivou a zelený rámik okolo všetkého, čo páli. Pod ním sú veľkosť, dĺžka pálenia a odhad času (bez zrýchlenia; skutočný stroj trvá dlhšie). {{ui:Uložiť G-kód…}} zapíše G-kód GRBL laser-mode: `$32=1`, `M4` (alebo `M3`) s hodnotami S, pohyby `G0` a `G1`, na konci `M5`. X0 Y0 je ľavý dolný roh úlohy, pokiaľ nezvolíte počiatok výkresu: tam nastavte pracovnú nulu vášho stroja.

## Odoslanie z prehliadača

V Chrome a Edge vás {{ui:Pripojiť…}} vyzve, aby ste vybrali USB port lasera. Nič sa nepripojí ani neodošle, kým nestlačíte tlačidlo. Najprv stlačte {{ui:Orámovať úlohu}}: hlava prejde po obálke úlohy s laserom **vypnutým** (alebo pri nízkom výkone, ktorý nastavíte pre ukazovateľ), aby ste videli, kde sa bude páliť. Až potom sa zapne {{ui:Odoslať úlohu}} a vypne sa znova, keď niečo zmeníte. {{ui:Pozastaviť}} drží hlavu, {{ui:Zastaviť}} ju tiež zastaví, resetuje ovládač (laser sa vypne) a odošle `M5`. Tam, kde chýba Web Serial (Firefox, Safari a CadCraft Studio, ktoré Web Serial zatiaľ nemá), panel ponúka iba uloženie: uložte G-kód a odošlite ho vlastným programom vášho lasera.

## Ešte nie je hotové

Ešte nie je hotové: formáty iných ovládačov (Ruida, lasery Marlin, súbory výrobcov), držiaky a nábehy, odsadenie šírky rezu (kerf), knižnice materiálov, rotačná a osi Z, zarovnanie kamery, text ako obrysy.
