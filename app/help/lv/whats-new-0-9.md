---
title: Jaunumi 0.9 (iepriekšējie)
summary: Svītrojumi, kas seko savai kontūrai, slāņu grupas, stāvi vienā rasējumā, 2D viedās sienas ar durvīm un logiem, teksta stili un formatēts teksta redaktors, peldoša komandrinda, režģa piesaiste, desmit veidi, kā zīmēt loku, un dokumentu panelis.
keywords: jaunumi 0.9, iepriekšējs izlaidums, jaunumi, 0.9, izlaiduma piezīmes, izmaiņu žurnāls, svītrojums, asociatīvs svītrojums, hatchedit, pat fails, rakstu fails, slāņu grupas, laygroup, stāvi, stāvi vienā rasējumā, floorlayers, viedās sienas, siena, durvis, logs, sienu rīki, teksta stils, stils, mtext redaktors, rindkopas teksts, formatēšana, peldoša komandrinda, komandrinda, augšējā josla, kompakta, piesaiste režģim, režģa piesaiste, f9, loks, dokumentu panelis, pārbaudīt, UK tērauda izmēri, draw.io, taju teksts, dxf r12, jaunumi, 0.8, 0.8.1, versija, jaunas funkcijas, automātiskā aizpildīšana, spoks, cilne, sketchfix, photosketch, autosheet, details, gridmove, autodim, birkas, redline, apvienot, git, fossil, access, zīmēšana bez redzes, ekrāna lasītājs, robežas, azimuti, aunits, shx, diagramma, ole, vēsture, salīdzināt, vārdos, rekvizīti, pēdas un collas, stiepšana, valodas, ievades ierīces, problēmas, tiešraide, palīgi
from: 3451e64c
---

Šī ir izmaiņu kopsavilkums CadCraft 0.9 salīdzinājumā ar 0.8.1. CadCraft ir 2D un 3D zīmēšanas lietotne CadCraft Studio 0.9 un tās astoņām lietotnēm. 0.9 pabeidz plāna zīmēšanu, pievieno teksta stilus un īstu teksta redaktoru un dod vairāk vietas ekrānā.

## Jauns

### Plāna zīmēšana

- **Svītrojumi, kas seko savai kontūrai.** {{cmd:HATCH}} saistās ar to, kas to ierobežo. Pārvietojiet, pagrieziet vai mērogojiet kontūru, un svītrojums un tā raksts seko; pārveidojiet to, un svītrojums tiek aprēķināts no jauna. {{cmd:HATCHEDIT}} (`HE`) maina svītrojumu pēc tam un veido vai beidz saiti. Skatiet [Svītrojumi un aizpildījumu laukumi](topic:hatch).
- **Svītrojumu rakstu faili.** Pie {{cmd:HATCH}} jautājuma `Norādiet iekšējo punktu` ierakstiet `F` (Raksta fails) un izvēlieties `.pat` failu. Tika izmēģināti tikai faili parastajā formātā.
- **Slāņu grupas.** Panelī {{ui:Rīki}} slāņu panelī: {{ui:Jauna grupa}}, {{ui:Pievienot gatavas grupas}}, {{ui:Grupēt pēc nosaukuma}} un {{ui:Atrast slāni}}; vai ierakstiet {{cmd:LAYGROUP}} (`LG`). Skatiet [Rasējuma kārtošana ar slāņiem](topic:layers#group-layers).
- **Stāvi.** {{cmd:FLOORS}} (`FLR`) vai {{ui:Stāvi…}} izvēlnē {{ui:Vairāk}} grupā {{ui:Skats}}. Skata logs uz lapas var rādīt vienu stāvu zem {{ui:Rādītais stāvs}} rekvizītos. {{cmd:FLOORLAYERS}} pārvērš stāvus slāņos failam, ko sūtīsiet kādam citam. Skatiet [Stāvu sakraušana vienā rasējumā](topic:floors).
- **2D viedās sienas, durvis un logi.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) un {{cmd:DELOPENING}}. Stūrus, T savienojumus un krustojumus aprēķina jūsu vietā. Sienas glabā savu savienojumu ierakstu, un rekvizītos ir Neļaut savienot sākumā / beigās, Atsauces līnija un rediģējams Garums. Skatiet [Zīmēt 2D sienas, durvis un logus](topic:walls-2d).
- **Sienu rīki plāna sienām.** Ierakstiet {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} un pārējos. Tiem vēl nav rīkjoslas pogu. Skatiet [Sienu formas, griezumi, nobīdes un bloķējumi 2D sienām](topic:wall-tools-2d).

### Teksts

- **Teksta stili.** {{cmd:STYLE}} (`ST`) vai {{ui:Teksta stils}} rīkjoslā {{ui:Zīmēšana}}: nosaukti stili ar fontu, augstumu, platuma koeficientu un slīpumu. Skatiet [Iestatīt teksta fontu un izmēru ar teksta stiliem](topic:text-styles).
- **Formatēts rindkopas teksta redaktors.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} vai dubultklikšķis uz teksta atver lodziņu ar fontu, izmēru, treknrakstu, slīprakstu, pasvītrojumu, pārsvītrojumu, krāsu, izlīdzinājumu un grādu, plus-mīnus un diametra zīmēm, kā arī {{ui:Labi}} un {{ui:Atcelt}}. Skatiet [Formatēt rindkopas tekstu](topic:format-paragraph-text).
- **Diagramma no draw.io XML.** {{cmd:DIAGRAM}} (`T2D`) nolasa arī ielīmētu draw.io XML. Skatiet [Zīmēt diagrammu no teksta](topic:text-to-diagram).
- **Taju teksts PDF drukā.** Iepriekš tas drukājās kā jautājuma zīmes.

### Vairāk vietas un zīmēšanas palīglīdzekļi

- **Peldoša, plānāka komandrinda un kompakta augšējā josla.** Velciet komandrindas rokturi, lai to padarītu peldošu, velciet tās augšējo malu, lai būtu mazāk rindu, {{key:F2}} atver vēsturi. {{ui:Iestatījumi}} › {{ui:CadCraft}} › {{ui:Komandrinda}} un augšējās joslas izvēles ir tādas pašas. Skatiet [Iestatījumi](topic:settings#command-line).
- **Objektu piesaistes izvēlne.** Labais klikšķis uz {{ui:Piesaiste}} statusa joslā vai ierakstiet {{cmd:OSNAP}}.
- **Piesaiste režģim.** Poga {{ui:Režģa piesaiste}} statusa joslā vai {{key:F9}}: izvēlētie punkti pāriet uz tuvāko režģa punktu, kad neviena objekta piesaiste nav ņēmusi punktu.
- **Loks desmit veidos un Turpināt.** {{ui:Loks}} rīkjoslā {{ui:Zīmēšana}} vai {{cmd:ARC}}: 3 punkti, Sākums/Centrs/Beigas saime un Centrs/Sākums/Beigas saime, un Turpināt (nospiediet {{key:Enter}} sākuma punktā) no pēdējās līnijas, loka vai polilīnijas.
- **Dokumentu panelis.** {{cmd:DOCUMENTS}} (`DOCS`) vai {{ui:Dokumenti…}} izvēlnē {{ui:Vairāk}} grupā {{ui:Skats}}: pārskatījums, statuss un izņemšana katram rasējumam projekta mapē. Tas atveras kā centrēts dialogs. Skatiet [Dokumenti](topic:documents).

### Faili

- **UK tērauda izmēri.** 976 profili panelī {{ui:Standarta}}, ierakstīti kā rasējumos (piemēram, `305x165x40 UB`).
- **Dienvidāfrikas paketes** (zīmēšanas prakse un būvnoteikumi) kā Būvnoteikumu papildinājuma paketes. Skaitļi nav pārbaudīti.
- **CadCraft papildinājumi,** pievienoti pēc pieprasījuma un pēc noklusējuma izslēgti: iekštelpu apgaismojuma projektēšana, mikroshēmu projektēšana (HDL līdz izkārtojumam), maršrutētāja griešana, shēmu simulācija, rullīšu ķēdes zobrati un Būvnoteikumu valstu paketes.

## Labots

- Svītrojuma pārvietošana, pagriešana vai mērogošana atstāja tā rakstu.
- {{cmd:GRIDMOVE}} pārvietoja visu plāna sienu, kas tikai sākas uz režģa līnijas. Siena tagad tiek vērtēta pēc saviem galiem.
- Režģis tika rādīts tikai rasējuma robežās pat ar izslēgtām robežām.
- Bloku saraksts sānu panelī ritina, un nosaukums, kas nav bloks, uzskaita blokus, kas sākas ar to ("Vai jūs domājāt").
- DXF R12 faili, ko AutoCAD noraidīja ("Nezināma grupa 1001 tabulai"), tagad atveras.
- Ļoti lieli faili (apmēram 70 000 vienību un vairāk) neatvērās ar "Maximum call stack size exceeded".
- DWG faili no AutoCAD 2018 un jaunākiem ar augstu uzturēšanas versiju neatvērās ar "bad BITLONG code 11".
- Rindkopas teksta lodziņā jauns izmērs, ierakstīts atlasītai daļai, saglabā atlasi.

## Visās lietotnēs

Bootstrap rīka padomi katrai vadībai ar norādi, sākuma padoms, ko varat aizvērt, cilņu joslas, kas ritina, ja tās neiederas, un pārlūkprogrammas cilnes nosaukums, kas seko atvērtajam rasējumam (`<rasējums> - CadCraft | CadCraft`). {{ui:Iestatījumi}} › {{ui:Izkārtojums}} tagad ir nolaižams saraksts ar divrindu izvēlēm. Valodu saraksts {{ui:Iestatījumi}} ir garāks nekā 0.8. Sadarbība reāllaikā, Bibliotēkas kolekcijas un svara un temperatūras vienības ir aprakstītas Studio piezīmēs.

## Godīgi ierobežojumi

- Rindkopas tekstam nav aizzīmju vai numurētu sarakstu, tabulatoru lineāla vai izlīdzināšanas pa platumu. Drukātie PDF iestata tekstu fontā Helvetica.
- Plāna sienas ir taisnas, tāpēc loks tiek zīmēts kā īsas sienas. Sienu rīka kopienas pārbaude vēl gaida.
- Slāņu grupas nav rakstītas AutoCAD savā formātā, tāpēc AutoCAD rāda plakanu sarakstu. Citas programmas rāda visus stāvus kopā, ja vien neizpildāt {{cmd:FLOORLAYERS}}.
- Dokumentu paneli divi cilvēki nav izmēģinājuši uz reāla koplietojamā diska. Maršrutētāja griešana nav darbojusies uz neviena reāla datora. Apgaismojuma aprēķins ir pārbaudīts pret fotonu trasējumu, nevis citu programmu. Inženiertehniskie papildinājumi ir pārbaudes rīki, nevis inženiera pārskatīšanas aizstājējs.
- Valodas, kas nav angļu, ir mašīntulkojumu melnraksti, un daži jaunie vārdi ir tikai angļu valodā.
