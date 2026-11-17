---
title: Naskenované výkresy a trasovanie
summary: Vložte naskenovaný list, zmerajte a narovnajte ho, vyčistite, vymažte jeho časti, uchopte k jeho čiaram a potom ho trasujte na čiary a oblúky.
keywords: sken, naskenovaný výkres, rastrový, tiff, jpeg, png, mierka, zarovnať, narovnať, odstrániť škvrny, prahovanie, čiernobiele, orez, vymazať, trasovať, vektorizovať, uchopiť, oblúky, šrafovanie, papierové výkresy, staré výkresy, scanattach, scantrace
from: 36227e5b
---

## Od papierového listu k objektom výkresu

Naskenovaný výkres je obrázok. CadCraft ponechá obrázok, ktorý ste mu dali, a nikdy ho nemení: každý krok čistenia vytvorí nový obrázok, jeden krok späť na každý; {{cmd:SCANINFO}} vypíše pôvodný súbor a kroky vykonané od neho. Nič sa nikam neodosiela a nič sa neodhaduje trénovaným modelom: čistenie a trasovanie sú bežné spracovanie obrazu a bežia na vašom počítači.

1. **Vložte ho.** {{cmd:SCANATTACH}} načíta PNG, JPEG, TIFF (jednu stranu alebo všetky strany viacstranového súboru) alebo stranu PDF, ktorá je obrázkom. Pýta sa na stranu, ľavý dolný roh a šírku. Pri strane PDF sa tiež pýta, koľko pixelov na palec sa má strana vykresliť.
2. **Zmerajte ho.** {{cmd:SCANSCALE}}: vyberte dva body na skene a potom zadajte skutočnú vzdialenosť medzi nimi. List sa zmení mierku okolo prvého bodu.
3. **Zarovnajte ho.** {{cmd:SCANALIGN}}: vyberte dva body na skene a dve miesta, kam patria; list sa posunie a otočí, aby sedel, a zmení aj mierku, pokiaľ neodpoviete Nie.
4. **Narovnajte ho.** {{cmd:SCANDESKEW}} zmeria uhol, pod ktorým ležia dlhé čiary listu, a zobrazí ho spolu s tým, ako si je istý. Prijmite ho alebo zadajte vlastný a list sa otočí. List s málo dlhými čiarami dostane upozornenie: pred prijatím skontrolujte uhol.
5. **Vyčistite ho.** {{cmd:SCANCLEAN}} prevedie list na čiernobiely (Automaticky najprv vyrovná papier; Adaptívne sleduje zmeny papiera tesnejšie; Úroveň je jedno číslo pre celý list) a odstráni škvrny až do veľkosti, ktorú nastavíte.
6. **Orežte a vymažte.** {{cmd:SCANCROP}} ponechá okno. {{cmd:SCANERASE}} vymaže obdĺžnik, mnohouholník alebo laso (stlačte a ťahajte): pečiatky, poznámky, kruh od kávy.

Vyčistený obrázok je to, čo uložený DWG obsahuje (IMAGE a jeho IMAGEDEF, so súborom obrázka vedľa výkresu, ako pri každom obrázku).

## Uchopenie k čiaram skenu

Keď je {{cmd:RASTERSNAP}} zapnuté (predvolene), uchopenie objektu nájde aj čiary čiernobieleho skenu: konce čiar, ich stredy, rohy a križovania, zobrazené obvyklými značkami uchopenia. Časť listu pod kurzorom sa trasuje, keď sa pohybujete; priblížte dostatočne, aby jeden pixel zaberal niekoľko pixelov obrazovky. Čiara dlhšia ako časť, ktorá sa trasuje, sa sleduje až na jej konce.

## Trasovanie

{{cmd:SCANTRACE}} premení čiary listu na čiary a oblúky na novej hladine (SCAN-TRACE) ako jeden krok späť, so skenom stále pod nimi. Nastavíte:

- **Tolerancia:** ako ďaleko smie trasovaná čiara alebo oblúk ležať od čiar na skene, v jednotkách výkresu (hlásenie uvádza aj pixely). Tesná tolerancia sleduje každé zvlnenie; voľná vytvorí menej a priamejších kúskov.
- **Okno:** roh listu alebo celý list.
- **Oblúky:** vypnuté vytvorí len čiary.
- **Zvyšky:** to, čo trasovanie nechalo bez zmeny, sa nakreslí ako rámčeky na hladine, ktorú môžete vypnúť, alebo sa nenakreslí.

Trasovanie nájde stred každého ťahu, sleduje ho, prispôsobí mu priame čiary a kruhové oblúky, spojí úseky, ktoré boli prerušené tam, kde ich križovala iná čiara, zmení takmer vodorovné a takmer zvislé čiary na presne vodorovné a zvislé a uzavrie rohy. **Text a šrafovanie zostanú ako rastrové:** kúsky veľkosti písma sa odložia a zväzky krátkych rovnobežných čiar sa považujú za šrafovanie a odložia sa.

Po dokončení hlási, koľko čiar a oblúkov vytvorilo, toleranciu a koľko kúskov zostalo ako rastrové. **Toto je to, čo pixely dali pri tej tolerancii, a nie tvrdenie, že výsledok je správny.** Porovnajte ho s listom: trasovanie môže prehliadnuť slabú čiaru, spojiť dve čiary, ktoré ležia veľmi blízko, alebo nakresliť čiaru tam, kde je len škvrna. Najprv vyčistite sken (narovnaný, čiernobiely, bez škvŕn) a výsledok bude oveľa lepší.

## Čo nečíta

Súbory TIFF uložené po dlaždiciach, BigTIFF, TIFF s kompresiou JPEG alebo deflate, kódovanie Group 3 faxu a farby uložené v oddelených rovinách sú odmietnuté so správou; uložte ich znova ako pásy s LZW, PackBits, Group 4 alebo bez kompresie. PNG súbory s prekladaním sú tiež odmietnuté. Súbory nad 128 MB alebo 100 miliónov pixelov sú odmietnuté a okno trasovania môže mať najviac 64 miliónov pixelov.
