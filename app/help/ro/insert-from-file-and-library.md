---
title: Inserare din fișier sau din bibliotecă
summary: Aduceți un bloc sau un desen întreg dintr-un DWG sau DXF și plasați elemente din Bibliotecă, dintr-un fișier sau dintr-o altă bibliotecă, cu atribuirile și actualizările lor.
keywords: inserare, fișier, bibliotecă, librarycraft, element, echipament, bloc dintr-un alt desen, wblock, centru de proiectare, atribuiri, atribuire, licență, actualizare, sursă, item.json
from: 316188d2
---

## Inserarea unui bloc dintr-un alt desen

1. Tastați `I` și apăsați {{key:Enter}}, sau faceți clic pe {{ui:Inserare}} în grupul Blocuri.
2. La `Enter block name or [File/Library]`, tastați `F` și apăsați {{key:Enter}}.
3. Alegeți fișierul DWG sau DXF de pe acest computer. Este citit aici; nu este deschis, iar nimic nu este încărcat.
4. În caseta de dialog {{ui:Inserare din}}, alegeți un bloc din listă (tastați în {{ui:Filtrare blocuri}} ca să-l găsiți), sau păstrați {{ui:Întregul desen}}. Faceți clic pe {{ui:Inserare}}.
5. Faceți clic unde trebuie să ajungă și completați atributele cerute.

Întregul desen intră ca un singur bloc, numit după fișier. Blocurile din blocul ales intră și ele. Straturile pe care le folosesc sunt adăugate la acest desen.

Dacă celălalt desen are alte unități (inch și milimetri, de exemplu), CadCraft scalează referința ca să se potrivească și o spune în istoric.

### Când un nume este deja folosit

Dacă acest desen are deja un bloc cu același nume, CadCraft întreabă:

- {{ui:Păstrare existente}} folosește blocul acestui desen cu acel nume.
- {{ui:Redenumire}} aduce noul bloc ca `Name (2)`.

Inserarea întreagă este un singur pas: {{key:Mod+Z}} înlătură referința și definițiile copiate.

## Deschiderea bibliotecii

Faceți clic pe {{ui:Bibliotecă…}} în panoul {{ui:Blocuri}}, sau pe {{ui:Bibliotecă}} în grupul Blocuri, sau tastați `LIB`. La promptul `INSERT`, `L` o deschide și pe aceasta.

Biblioteca are patru surse, ca file:

- {{ui:Bibliotecă}}: biblioteca CadCraft. Căutați după nume, producător sau model și filtrați după categorie.
- {{ui:Fișiere…}}: un fișier de element (`item.json`) din orice bibliotecă, sau un desen, o foaie de calcul ori un model 3D din care să faceți elemente: un DWG sau DXF (fiecare bloc devine un element), un CSV cu coloanele nume și dimensiune, sau un model glTF sau OBJ. Nimic nu este încărcat.
- {{ui:Standard}}: profile de oțel (ca secțiuni, elevații sau bare 3D) și piese standard precum șuruburi, piulițe și rulmenți, făcute aici din tabele publicate. Vedeți [Plasarea profilelor de oțel și a pieselor standard](topic:steel-and-standard-parts).
- {{ui:Alte surse}}: alte biblioteci care răspund în același fel ca Bibliotecă. Adresa lor se adaugă o singură dată; acest browser o reține.

Fiecare cartelă arată o previzualizare, numele, producătorul și modelul, licența și versiunea. Un element retras este marcat {{ui:Retras}} cu motivul; CadCraft întreabă înainte ca unul să fie plasat.

## Plasarea unui element

1. Faceți clic pe {{ui:Plasare}} de pe o cartelă.
2. Faceți clic unde trebuie să ajungă elementul. Tastați `R` mai întâi ca să-l rotiți, sau `S` ca să-l scalați.
3. La `Enter Item number (CC-ITEM)`, apăsați {{key:Enter}} pentru următorul număr liber, sau tastați un număr propriu.

Elementul devine un bloc numit `LIB_<name>_v<version>`, desenat în unitățile acestui desen. Dacă desenul nu are unități, elementul intră în milimetri, iar istoricul o spune; setați mai întâi {{ui:Unități}} din panoul din dreapta.

Datele sale merg împreună ca atribute invizibile: id-ul și versiunea elementului, licența și atribuirea, producătorul, modelul, categoria și dimensiunile. Vedeți [Atributele blocului](topic:attributes).

## Elemente în limba aleasă

Un element poate avea numele și descrierea în alte limbi. Când le are în limba la care este setat CadCraft (Setări › General › Limbă), cartela și numele elementului din blocul plasat le folosesc. Blocul în sine păstrează un nume făcut din numele propriu al elementului, astfel încât un desen are un bloc pentru fiecare element, indiferent de limba în care a fost plasat.

## Verificarea actualizărilor

1. Deschideți biblioteca.
2. Faceți clic pe {{ui:Verificare actualizări}}.

Fiecare element de bibliotecă din desen este listat cu numerele sale de element și cu faptul că este la zi, are o versiune mai nouă (și ce s-a schimbat) sau a fost retras. Faceți clic pe {{ui:Actualizare}} pe un rând, sau pe {{ui:Actualizare tot}}. Fiecare referință trece la blocul noii versiuni și își păstrează numărul de element, cantitatea, locul, unghiul și stratul. {{key:Mod+Z}} anulează o actualizare.

## Creditarea a ceea ce ați folosit

Faceți clic pe {{ui:Atribuiri din bibliotecă}}. Fiecare element este listat cu rândul său de atribuire și cu licența.

- {{ui:Copiere atribuire}} copiază rândul unui element; {{ui:Copiere tot}} copiază fiecare rând.
- {{ui:Descărcare CSV}} salvează lista cu numerele elementelor, producătorii, modelele, licențele și atribuirile. Se deschide în orice foaie de calcul.

Licențe precum CC BY cer ca autorul să fie creditat acolo unde se folosește lucrarea. Rândurile se pun pe desen, în specificație sau în notele proiectului.

## Simboluri și resurse

Biblioteca are trei tipuri de elemente: Simboluri (convenții de desen, 2D), Tipuri (din ce este făcut un element) și Resurse (obiecte fizice). În tabul {{ui:Bibliotecă}}, lista {{ui:Tip de element}} arată Simboluri și Resurse împreună, doar Simboluri sau doar Resurse. Tipurile sunt din ce este construit un proiect BimCraft, deci CadCraft nu le listează.

## Conectarea la bibliotecă

Faceți clic pe {{ui:Conectare la bibliotecă}}. Se deschide o fereastră mică pe site; odată conectat acolo, CadCraft poate arăta elementele echipei și poate înregistra ce este plasat, astfel încât să fie anunțată schimbarea unui element folosit. Conectarea ține pentru acest tab de browser. Se poate revoca oricând din pagina de securitate a contului.

## Greșeli frecvente

- **„Crearea elementelor din tipuri IFC se face în BimCraft.”** Fișierele IFC și de familie se citesc în aplicația BimCraft. Faceți elementul acolo sau în Bibliotecă, apoi folosiți `item.json` de aici.
- **„Biblioteca nu a putut fi contactată.”** Sunteți offline sau biblioteca este indisponibilă. Elementele deja din desen nu sunt afectate.
- **Un element este mult prea mare sau prea mic.** Unitățile desenului sunt greșite sau nu sunt setate. Anulați, setați {{ui:Unități}} și plasați-l din nou.
