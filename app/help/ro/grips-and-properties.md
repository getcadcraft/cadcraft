---
title: Editare cu mânere și Proprietăți
summary: Întindeți, mutați și redimensionați obiecte prin mânerele lor și tastați lungimi, raze, unghiuri și coordonate exacte în panoul Proprietăți.
keywords: mânere, proprietăți, întindere, lungime, rază, coordonate, editare, proprietăți rapide, paleta de proprietăți, modificare, strat, culoare, color
from: f22541ba
---

## Ce veți învăța

Două moduri rapide de a schimba un obiect fără o comandă: trageți-i **mânerele** sau tastați valori noi în panoul **Proprietăți** din dreapta.

## Mânere

Când selectați obiecte (până la 200 odată), fără o comandă în execuție, apar pe ele pătrățele mici. Acestea sunt mânerele:

| Obiect | Mânere |
|---|---|
| Linie | Ambele capete și mijlocul (mută toată linia) |
| Cerc | Centrul (îl mută) și patru puncte pe cerc (schimbă raza) |
| Arc | Centrul și ambele capete (schimbă locul unde începe și se termină) |
| Polilinie | Fiecare vârf |
| Text, punct, referință la bloc | Punctul de inserare |
| Elipsă | Centrul |
| Cotă | Punctele ei de definire și poziția liniei de cotă |
| Fereastră de vizualizare | Centrul (o mută) și cele patru colțuri (o redimensionează) |

### Mutarea unui mâner

1. Desenați o linie și faceți clic pe ea. Apar trei mânere.
2. Faceți clic pe mânerul de la un capăt. Bara de stare spune: „Faceți clic unde trebuie să ajungă acest mâner (Esc pentru anulare). Agățările și Ortogonal se aplică.”
3. Mutați cursorul în cruce. Apare o previzualizare.
4. Faceți clic pe poziția nouă sau agățați un punct de alt obiect și faceți clic.

Capătul se mută, iar restul liniei rămâne pe loc. Puteți, de asemenea, să apăsați pe un mâner și să-l trageți, apoi să lăsați mâna acolo unde trebuie.

:::note
Nu se poate tasta o coordonată pentru un mâner. Pentru o poziție exactă, agățați un punct sau tastați valoarea în Proprietăți.
:::

Apăsați {{key:Esc}} sau faceți clic dreapta pentru a anula mutarea unui mâner.

## Proprietăți

Panoul din dreapta arată proprietățile obiectului selectat.

1. Faceți clic pe o linie. Titlul panoului spune „Linie”.
2. Faceți clic în {{ui:Lungime}}, tastați `2500` și apăsați {{key:Enter}}.

Linia are acum lungimea exactă de 2500, păstrându-și punctul de start și unghiul. {{key:Enter}} sau un clic în altă parte aplică o valoare; {{key:Esc}} pune la loc valoarea veche. Fiecare modificare este un singur pas de anulare, chiar și atunci când se schimbă multe obiecte deodată.

Câmpurile acceptă expresii (`=2*45`) și lungimi cu unități (`3'6"`, `900mm`), fiecare punct are X, Y și Z, iar mai multe obiecte pot fi modificate împreună. Totul este descris în [Panoul Proprietăți](topic:properties-panel).

## Greșeli frecvente

- **Nu apar mânere.** Rulează o comandă (apăsați {{key:Esc}}), sau sunt selectate mai mult de 200 de obiecte, sau obiectul este pe un strat blocat.
- **Mânerul a ajuns în alt loc.** O agățare l-a prins. Țineți apăsat {{key:Shift}} în timp ce faceți clic, pentru a ignora agățările.
- **Tastarea în Proprietăți nu a făcut nimic.** Apăsați {{key:Enter}} sau faceți clic în altă parte pentru a aplica. O valoare respinsă (lungimi și raze zero sau negative, text care nu este o valoare) colorează câmpul în roșu și spune de ce.
- **Literele tastate au intrat într-un câmp din Proprietăți.** Cât timp un câmp are cursorul, tastele scriu acolo. Apăsați {{key:Enter}} sau {{key:Esc}}, apoi tastați comanda.
