---
title: Mouse, touchpad și atingere
summary: Cum să măriți, să deplasați, să faceți clic dreapta și să selectați în CadCraft cu un mouse cu rotiță, cu un touchpad Mac sau PC ori cu un ecran tactil, și ce diferă între browsere.
keywords: touchpad, trackpad, magic mouse, atingere, tabletă, ipad, deplasare, zoom, ciupire, clic dreapta, două degete, buton din mijloc, browser, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft este proiectat pentru un mouse cu rotiță. Totul funcționează și cu un touchpad, cu câteva obișnuințe de învățat. Ecranele tactile funcționează pentru selectare, cu limite.

## Mouse cu rotiță

- **Zoom:** rotiți rotița. Desenul se mărește în jurul crucii, deci indicați ce vreți să vedeți.
- **Deplasare:** țineți apăsată rotița și trageți, sau trageți cu butonul din dreapta.
- **Zoom la tot:** faceți dublu clic pe rotiță sau faceți clic pe {{ui:Extinderi}}.
- **Înapoi la vederea anterioară:** faceți clic pe {{ui:Precedent}} din grupul Vizualizare, sau tastați `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Un șir de pași ai rotiței contează ca o singură vedere, deci un {{ui:Precedent}} le anulează pe toate. Salvați vederile la care reveniți cu {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** clic dreapta.

## Touchpad

:::mac
- **Deplasare:** mutați două degete pe touchpad, în orice direcție: desenul urmează degetele. Puteți trage și cu un clic cu două degete ținut apăsat (o tragere cu butonul din dreapta).
- **Zoom:** ciupiți cu două degete. Zoomul urmează crucea.
- **Clic dreapta (Enter):** faceți clic cu două degete. Activați „Clic secundar” în **Setări sistem**, apoi **Trackpad**, dacă nu se întâmplă nimic. Ctrl-clic poate conta în CadCraft ca un clic obișnuit, nu ca unul dreapta, deci folosiți clicul cu două degete.
- **Zoom la o zonă:** faceți clic pe {{ui:Fereastră (W)}} din grupul Vizualizare și faceți clic pe două colțuri.
:::

:::windows linux
- **Deplasare:** mutați două degete pe touchpad, în orice direcție: desenul urmează degetele. Puteți trage și cu butonul din dreapta ținut apăsat.
- **Zoom:** ciupiți cu două degete. Zoomul urmează crucea.
- **Clic dreapta (Enter):** faceți clic cu două degete sau faceți clic în colțul din dreapta jos al touchpadului, în funcție de setările touchpadului.
- **Zoom la o zonă:** faceți clic pe {{ui:Fereastră (W)}} din grupul Vizualizare și faceți clic pe două colțuri.
:::

Ținerea apăsată a {{key:Space}} și tragerea **nu** deplasează desenul în CadCraft: {{key:Space}} este Enter.

Rotița mouse-ului zoomează în continuare, câte un pas. Un touchpad care trimite derularea în pași întregi, ca o rotiță, zoomează cu o derulare cu două degete în loc să deplaseze: micșorați, indicați zona dorită și măriți din nou. Fila 3D păstrează propriile mișcări de touchpad (vezi [Modelul în 3D](topic:3d-solids#look-around)).

## Ecrane tactile și tablete

CadCraft citește un deget ca un clic de mouse:

- O atingere alege un punct sau un obiect, sau selectează.
- Tragerea unui deget pe spațiu gol desenează un lasou (mutând mai întâi spre dreapta, o fereastră; spre stânga, o intersectare; vezi [Selectare cu lasou](topic:lasso-selection)).
- În {{cmd:TRIM}} și {{cmd:EXTEND}}, tragerea unui deget prin piese le taie sau le prelungește pe toate.
- Tragerea mânerului unui obiect selectat mută mânerul (mânerele și caseta de alegere sunt mai mari pentru deget).
- **Ciupire** cu două degete pentru a mări în jurul punctului dintre ele; mutați două degete împreună pentru a **deplasa**. Un al doilea deget anulează ce a început primul, astfel încât o ciupire nu lasă niciodată urme.
- O **apăsare lungă** (țineți nemișcat aproximativ o jumătate de secundă) este un clic dreapta: {{key:Enter}}. Termină o comandă, încheie o selecție sau repetă ultima comandă.

Sub linia de comandă apare un **rând de taste**: {{ui:Esc}}, {{ui:Anulare}}, {{ui:Refacere}}, caracterele pe care o tastatură de tabletă le ascunde (`@` `,` `<` `'` `"` `-`), {{ui:Agățare}}, {{ui:Ortogonal}}, un buton de tastatură și un {{ui:Enter}} mare. Atingeți butonul de tastatură (sau linia de comandă) pentru a tasta o comandă sau un număr.

Nu există indicare cu cursorul, deci marcajele de agățare apar doar acolo unde se află degetul.

:::touch
Folosiți un ecran tactil. Pentru orice mai mult decât o privire rapidă, o tastatură atașată și un mouse sau touchpad fac CadCraft mult mai ușor de folosit.
:::

## Browsere

CadCraft funcționează la fel în Chrome, Edge, Firefox și Safari, pe Mac, Windows și Linux. Diferențele sunt mici:

| Subiect | Ce trebuie știut |
|---|---|
| Deschiderea unui DWG | Desenele mari durează câteva secunde până se citesc în orice browser; linia de stare arată „Citire …” între timp |
| Descărcări | Fiecare browser decide unde ajung descărcările și dacă întreabă mai întâi; vezi [Browsere și calculatoare](common:browsers) |
| Deschidere pentru imprimare | Deschide PDF-ul într-o filă nouă. Dacă browserul blochează ferestrele pop-up, CadCraft descarcă PDF-ul în schimb |
| F7 | Firefox poate oferi navigarea cu cursorul de text; alegeți Nu |
| Plecare cu modificări nesalvate | Fiecare browser afișează propria întrebare „Părăsiți site-ul?”, pe care CadCraft nu o poate schimba |

:::safari
În Safari, un PDF deschis cu {{ui:Deschidere pentru imprimare}} poate apărea în filă fără să se imprime: folosiți **Fișier**, apoi **Imprimare**.
:::

:::firefox
Firefox poate întreba ce să facă cu fiecare descărcare. Alegeți să salvați fișierul sau schimbați asta o singură dată în setările Firefox, la Descărcări.
:::
