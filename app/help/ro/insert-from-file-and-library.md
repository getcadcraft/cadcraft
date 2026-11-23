---
title: Inserarea dintr-un fișier sau din bibliotecă
summary: Aduceți un bloc sau un desen întreg dintr-un DWG sau DXF și plasați elemente din Bibliotecă, dintr-un fișier sau dintr-o altă bibliotecă, cu atribuirile și actualizările lor.
keywords: inserare, fișier, bibliotecă, librarycraft, element, echipament, bloc dintr-un alt desen, wblock, centru de proiectare, atribuiri, atribuire, licență, actualizare, flux, item.json
from: f6e4e452
---

## Inserarea unui bloc dintr-un alt desen

1. Tastați `I` și apăsați {{key:Enter}}, sau faceți clic pe {{ui:Inserare}} din grupul {{ui:Blocuri}}.
2. Linia de comandă din partea de jos a ferestrei întreabă `Introduceți numele blocului sau [Fișier (F)/Bibliotecă (L)]`. Tastați `F` acolo și apăsați {{key:Enter}}.
3. Alegeți DWG sau DXF de pe acest computer. Fișierul este citit aici; nu este deschis, iar nimic nu se încarcă.
4. În dialogul {{ui:Inserare din}}, alegeți un bloc din listă (tastați în {{ui:Filtrare blocuri}} ca să-l găsiți), sau păstrați {{ui:Întregul desen}}. Faceți clic pe {{ui:Inserare}}.
5. Faceți clic unde trebuie să ajungă și completați atributele pe care le cere.

Puteți porni și din panoul {{ui:Blocuri}}: tastați `F` în caseta {{ui:Filtrare blocuri}} și apăsați {{key:Enter}}, sau tastați ceva ce nu se potrivește cu niciun bloc și faceți clic pe {{ui:Dintr-un fișier…}}. `L` și {{ui:Bibliotecă…}} deschid biblioteca la fel. Înainte de versiunea 0.10.1, o literă tastată în {{ui:Filtrare blocuri}} căuta doar blocurile acestui desen și răspundea „Niciun bloc nu se potrivește filtrului.”

Pentru a avea la îndemână un desen cu blocuri proprii, faceți clic pe {{ui:Adăugare desen}} sub {{ui:Biblioteci}} din panoul {{ui:Blocuri}} și alegeți DWG sau DXF. Blocurile lui sunt listate cu imagini; faceți clic pe unul pentru a-l plasa.

Întregul desen intră ca un singur bloc, numit după fișier. Blocurile din interiorul blocului ales vin și ele. Straturile pe care le folosesc sunt adăugate la acest desen.

Dacă celălalt desen are alte unități (de exemplu, inci și milimetri), CadCraft scalează referința ca să se potrivească și o spune în istoric.

### Când un nume este deja folosit

Dacă acest desen are deja un bloc cu același nume, CadCraft întreabă:

- {{ui:Păstrare existente}} folosește blocul acestui desen cu acel nume.
- {{ui:Redenumire}} aduce cel nou ca `Nume (2)`.

Întreaga inserare este un singur pas: {{key:Mod+Z}} elimină la loc referința și definițiile copiate.

## Deschiderea bibliotecii

Faceți clic pe {{ui:Bibliotecă…}} din panoul {{ui:Blocuri}}, sau pe {{ui:Bibliotecă}} din grupul Blocuri, ori tastați `LIB`. La promptul `INSERT`, `L` o deschide și pe ea.

Biblioteca are patru surse, sub formă de file:

- {{ui:Bibliotecă}}: biblioteca CadCraft. Căutați după nume, producător sau model și filtrați după categorie.
- {{ui:Fișiere…}}: un fișier de element (`item.json`) din orice bibliotecă, sau un desen, o foaie de calcul ori un model 3D din care să faceți elemente: un DWG sau DXF (fiecare bloc devine un element), un CSV cu coloanele nume și dimensiune, sau un model glTF ori OBJ. Nimic nu se încarcă.
- {{ui:Standard}}: profile de oțel (ca secțiuni, elevații sau bare 3D) și piese standard precum șuruburi, piulițe și rulmenți, făcute aici din tabele publicate. Vedeți [Plasarea profilelor de oțel și a pieselor standard](topic:steel-and-standard-parts).
- {{ui:Alte surse}}: alte biblioteci care răspund la fel ca Bibliotecă. Adăugați adresa lor o dată; acest browser o reține.

Fiecare card arată o previzualizare, numele, producătorul și modelul, licența și versiunea. Un element retras este marcat {{ui:Retras}}, cu motivul; CadCraft cere confirmare înainte să plasați unul.

## Plasarea unui element

1. Faceți clic pe {{ui:Plasare}} de pe un card.
2. Faceți clic unde trebuie să ajungă elementul. Tastați `R` înainte ca să-l întoarceți, sau `S` ca să-l scalați.
3. La `Introduceți numărul elementului (CC-ITEM)`, apăsați {{key:Enter}} pentru următorul număr liber, sau tastați un număr propriu.

Elementul devine un bloc numit `LIB_<name>_v<version>`, desenat în unitățile acestui desen. Dacă desenul nu are unități, elementul intră în milimetri, iar istoricul o spune; setați mai întâi {{ui:Unități}} în panoul din dreapta.

Datele lui merg cu el ca atribute invizibile: identificatorul și versiunea elementului, licența și atribuirea, producătorul, modelul, categoria și dimensiunile. Vedeți [Atributele blocului](topic:attributes).

## Elemente în limba proprie

Un element poate avea numele și descrierea în alte limbi. Când le are în limba la care este setat CadCraft ({{ui:Setări}} › {{ui:General}} › Limbă), cardul și numele elementului din bloc le folosesc. Blocul în sine păstrează un nume făcut din numele propriu al elementului, astfel încât un desen are un singur bloc pentru fiecare element, indiferent de limba care l-a plasat.

## Verificarea actualizărilor

1. Deschideți biblioteca.
2. Faceți clic pe {{ui:Verificare actualizări}}.

Fiecare element de bibliotecă din desen este listat cu numerele sale și cu faptul că este la zi, are o versiune mai nouă (și ce s-a schimbat) sau a fost retras. Faceți clic pe {{ui:Actualizare}} pe un rând, sau pe {{ui:Actualizare tot}}. Fiecare referință trece la blocul noii versiuni și își păstrează numărul elementului, cantitatea, poziția, unghiul și stratul. {{key:Mod+Z}} anulează o actualizare.

## Creditați ce ați folosit

Faceți clic pe {{ui:Atribuiri din bibliotecă}}. Fiecare element este listat cu rândul său de atribuire și cu licența.

- {{ui:Copiere atribuire}} copiază rândul unui element; {{ui:Copiere tot}} copiază fiecare rând.
- {{ui:Descărcare CSV}} salvează lista cu numerele elementelor, producătorii, modelele, licențele și atribuirile. Se deschide în orice foaie de calcul.

Licențele precum CC BY cer să creditați autorul acolo unde folosiți lucrarea. Puneți rândurile pe desen, în specificație sau în notele proiectului.

## Simboluri și resurse

Biblioteca are trei tipuri de elemente: Simboluri (convenții de desen, 2D), Tipuri (din ce este făcut un element) și Resurse (obiecte fizice). În fila {{ui:Bibliotecă}}, lista {{ui:Tip de element}} arată Simboluri și Resurse împreună, doar Simboluri sau doar Resurse. Tipurile sunt cele din care se construiește un proiect BimCraft, astfel încât CadCraft nu le listează.

## Conectarea la bibliotecă

Faceți clic pe {{ui:Conectare la bibliotecă}}. Se deschide o fereastră mică pe site; după ce vă conectați acolo, CadCraft poate arăta elementele echipei și poate înregistra ce plasați, astfel încât să aflați când se schimbă un element folosit. Conectarea ține pentru această filă a browserului. O puteți revoca oricând din pagina de securitate a contului.

## Păstrarea propriilor obiecte în Obiectele mele

{{ui:Obiectele mele}} este o listă privată din Bibliotecă, pe care o vede doar titularul contului. Nu este în biblioteca publică, nu apare în căutare și nu este arătată echipei, și urmează contul pe orice computer unde vă conectați la bibliotecă.

1. În panoul Bibliotecă, faceți clic pe {{ui:Fișiere…}} și citiți un fișier.
2. La elementul pe care îl doriți din nou, faceți clic pe {{ui:Păstrare în obiectele mele}}.
3. Mai târziu, faceți clic pe {{ui:Obiectele mele}} și apoi pe {{ui:Plasare}}. Se plasează ca orice element de bibliotecă, iar {{ui:Verificare actualizări}} îl acoperă.
4. {{ui:Eliminare din obiectele mele}} îl scoate din listă. Copiile deja plasate în desene rămân.

Trebuie să fiți conectat la bibliotecă. Citirea unui fișier nu încarcă nimic; păstrarea unui element trimite doar acel element în cont.

:::note
Obiectele mele este în testare și este posibil să nu fie deschis încă pentru acest cont. Dacă apare „Obiectele mele nu este deschis încă pentru acest cont”, puteți plasa în continuare elemente din propriile fișiere cu {{ui:Fișiere…}}.
:::

## Greșeli frecvente

- **„Crearea elementelor din tipuri IFC este în BimCraft.”** Fișierele IFC și de familie sunt citite în aplicația BimCraft. Creați elementul acolo sau în Bibliotecă, apoi folosiți `item.json` al acestuia aici.
- **„Biblioteca nu a putut fi contactată.”** Sunteți offline, sau biblioteca este oprită. Elementele deja din desen nu sunt afectate.
- **Un element este mult prea mare sau prea mic.** Unitățile desenului sunt greșite sau nu sunt setate. Anulați, setați {{ui:Unități}} și plasați-l din nou.
