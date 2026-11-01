---
title: Primii pași cu CadCraft
summary: Ce face aplicația de desenare CadCraft, unde rulează și primul desen, de la un ecran gol până la un fișier salvat.
keywords: primii pași, primul desen, nou, deschidere, salvare, salvare ca, început, tutorial, introducere, pornire rapidă
from: 1a56c575
---

CadCraft este o aplicație de desenare 2D. Desenați și editați linii, arce, polilinii, text, cote și blocuri, pregătiți planșe cu cartușe și ferestre de vizualizare și le trasați în PDF. Deschide desene DWG și DXF și le salvează ca DWG sau DXF.

Rulează în browserul dumneavoastră web. Nu trebuie instalat nimic: site-ul vă dă adresa, iar aplicația întreagă se încarcă în pagină. Desenele dumneavoastră se deschid de pe calculatorul dumneavoastră și se salvează înapoi pe el. **Nimic nu este încărcat nicăieri.**

Dacă ați desenat deja, citiți după această pagină [Venind de la alt software de desen](topic:coming-from). Majoritatea obiceiurilor se mențin, iar cele care nu se mențin sunt listate acolo.

## Preferați să fiți ghidat?

Tastați `TOUR` (sau faceți clic pe {{ui:Parcurgeți ghidul}} de pe cardul de pornire, sau {{ui:Setări}} › {{ui:CadCraft}} › {{ui:Parcurgeți din nou ghidul}}). Șase pași scurți într-o casetă peste desen: desenați o linie și un cerc, mutați-le, tăiați una, ștergeți ceva și acotați. Fiecare pas se termină când îl faceți, iar puteți sări peste un pas sau peste tot ghidul. Pornește singur doar prima dată. [Fișa rapidă](topic:cheat-sheet) are cele 40 de comenzi pe care le veți folosi cel mai des, iar [harta comenzilor](topic:command-map) pe toate.

## Ce aveți nevoie

- Un Chrome, Edge, Firefox sau Safari recent, pe un calculator Mac, Windows sau Linux. Vedeți [Browsere și platforme](common:browsers).
- Un mouse cu rotiță este cel mai comod. Un trackpad funcționează; vedeți [Mouse, trackpad și ecran tactil](topic:mouse-trackpad-touch).
- O tastatură. CadCraft se controlează prin comenzi tastate, ca majoritatea programelor de desenare.

## Ideea într-un paragraf

Tastați o comandă (sau faceți clic pe butonul ei), iar linia de comandă de jos vă pune întrebări pe rând: „Specificați primul punct”, „Specificați următorul punct”. Răspundeți la fiecare făcând clic în desen sau tastând o valoare, apoi apăsând {{key:Enter}}. {{key:Esc}} anulează. Acesta este întregul mod de interacțiune; tot restul sunt detalii.

## Primul desen

Veți desena un dreptunghi de 4000 pe 3000 din linii, veți pune un cerc în mijloc și veți salva fișierul.

1. Deschideți CadCraft. Linia de comandă de jos afișează `Comandă:`, iar zona de desenare afișează un scurt card „Începeți un desen”.
2. Tastați `L` și apăsați {{key:Enter}}. Nu trebuie să faceți clic întâi pe linia de comandă: tastați oriunde și textul ajunge acolo.
3. Promptul devine `Specificați primul punct:`. Tastați `0,0` și apăsați {{key:Enter}}.
4. Tastați `@4000,0` și apăsați {{key:Enter}}. Apare o linie care merge spre dreapta. `@` înseamnă „de la ultimul punct”.
5. Tastați `@0,3000` și apăsați {{key:Enter}}.
6. Tastați `@-4000,0` și apăsați {{key:Enter}}.
7. Tastați `C` și apăsați {{key:Enter}}. `C` este opțiunea Închidere: ultima linie se întoarce la primul punct și comanda se termină.
8. Faceți clic pe {{ui:Extinderi}} din grupul {{ui:Vizualizare}} al barei de instrumente. Dreptunghiul umple ecranul.

Acum ar trebui să vedeți patru linii care formează un dreptunghi, iar istoricul de deasupra liniei de comandă listează ce ați tastat.

9. Tastați `C` și apăsați {{key:Enter}} ca să porniți comanda cercului.
10. Tastați `2000,1500` și apăsați {{key:Enter}} pentru centru.
11. Tastați `500` și apăsați {{key:Enter}} pentru rază.

Apare un cerc în mijlocul dreptunghiului.

12. Apăsați {{key:Mod+S}} sau faceți clic pe {{ui:Salvare}} din grupul {{ui:Fișier}}.

Browserul descarcă `Drawing1.dwg` în dosarul obișnuit de descărcări, iar istoricul spune că a salvat o copie ca DWG. Fișierul se deschide din nou în CadCraft și în majoritatea celorlalte programe CAD. (Dacă ați ales DXF mai devreme la {{ui:Salvare ca}}, în acest browser, un desen nou se salvează ca `Drawing1.dxf`.)

:::tip
Apăsați {{key:Enter}} pe o linie de comandă goală ca să repetați ultima comandă. Apăsați {{key:Space}} în loc de {{key:Enter}} dacă preferați: în afara textului, face același lucru.
:::

## Deschiderea unui desen existent

1. Apăsați {{key:Mod+O}} sau faceți clic pe {{ui:Deschidere}}.
2. Alegeți un fișier `.dwg` sau `.dxf` în selectorul de fișiere.

Puteți trage și un fișier DWG sau DXF din {{pick:mac=Finder|windows=File Explorer|linux=managerul de fișiere}} și să-l lăsați în zona de desenare. Fișierul este citit în pagină; nu părăsește niciodată calculatorul dumneavoastră.

Vedeți [Fișiere: ce se deschide, ce se salvează](topic:files) pentru ce se păstrează și ce se convertește.

## Salvarea: la ce să vă așteptați

Salvarea într-un browser funcționează diferit de un program desktop:

- {{ui:Salvare}} descarcă **întotdeauna o copie nouă**. Nu suprascrie fișierul pe care l-ați deschis. Dacă un fișier cu același nume există deja în dosarul de descărcări, browserul adaugă de obicei un număr, de exemplu `Drawing1 (1).dwg`.
- {{ui:Salvare}} folosește formatul desenului: DWG dacă ați deschis un DWG, DXF dacă ați deschis un DXF. Ca să alegeți, apăsați {{key:Mod+Shift+S}} sau faceți clic pe {{ui:Salvare ca}}, apoi alegeți {{ui:DWG}} (și versiunea lui), {{ui:DXF R12}} sau {{ui:DXF 2000}}. Vedeți [Salvarea](topic:files#saving).
- Fișierul pe care l-ați deschis nu este modificat niciodată.
- Deschiderea altui fișier sau {{ui:Nou}} îl pune în propria filă peste zona de desenare, deci nimic din ce aveți deschis nu se închide. Dacă închideți fila unui desen sau părăsiți pagina cu modificări nesalvate, CadCraft întreabă mai întâi: {{ui:Salvare copie mai întâi}}, renunțare sau {{ui:Anulare}}. Închiderea filei browserului afișează în schimb întrebarea proprie a browserului „Părăsiți site-ul?”.

Salvarea în cloud nu este disponibilă încă. Unde ajung fișierele dumneavoastră și de ce rămân private este explicat în [Fișierele și confidențialitatea dumneavoastră](common:your-files).

## Unde să mergeți mai departe

Apăsați {{key:F1}} sau faceți clic pe {{ui:Ajutor}} din bara de sus ca să deschideți acest ajutor lângă desen oricând. Funcționează fără conexiune.

- [Ecranul CadCraft](topic:workspace) numește fiecare bară și panou.
- [Desenați cu coordonate](topic:draw-with-coordinates) este cel mai bun prim parcurs.
- [Tastatura și mouse-ul](topic:keyboard) listează fiecare tastă.
- Tastați `HELP` la linia de comandă pentru o listă cu fiecare comandă, sau citiți [Referința comenzilor](topic:commands).
