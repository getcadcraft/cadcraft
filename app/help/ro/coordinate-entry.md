---
title: Introducerea coordonatelor și a distanțelor
summary: Toate modurile de a introduce un punct, o distanță, un unghi sau un număr în linia de comandă CadCraft, cu exemple.
keywords: introducere dinamică, dyn, f12, tab, coordonate, absolut, relativ, polar, @, distanță directă, unghi, grade, ultimul punct, lastpoint, introducere de puncte, introducere, aritmetică, calcul, calculator, cal, plus, fracție, expresie
from: 7de9252d
---

## Puncte

Atunci când solicitarea cere un punct, tastați unul dintre următoarele și apăsați {{key:Enter}}:

| Tastați | Înseamnă | Exemplu |
|---|---|---|
| `x,y` | Absolut: măsurat de la originea 0,0 | `2500,1200` |
| `#x,y` | Tot absolut (acceptat din obișnuință) | `#2500,1200` |
| `@dx,dy` | Relativ: spre dreapta și în sus față de ultimul punct | `@600,0` |
| `@d<a` | Polar relativ: distanță și unghi față de ultimul punct | `@1500<45` |
| `d<a` | Polar absolut: distanță și unghi față de origine | `3000<90` |
| un singur număr | Distanță directă: la această distanță de punctul de bază, spre cursor | `1200` |
| `*x,y`, `@*dx,dy` | Coordonate globale cât timp este setat un SCU | `*0,0` |

Cu un SCU setat ({{cmd:UCS}}), `x,y`, `@dx,dy` și unghiul din `d<a` se măsoară de-a lungul axelor SCU. Vezi [Rotirea vederii și folosirea propriilor coordonate](topic:ucs-and-turned-view).

Sau faceți clic în desen; agățarea la obiect și {{ui:Ortogonal}} se aplică la clicuri.

Reguli:

- Virgula desparte X de Y. Zecimalele se scriu cu punct: `1250.75,300`.
- Valorile negative merg spre stânga și în jos: `@-600,0`.
- Nu tastați spații: {{key:Space}} trimite linia, ca și {{key:Enter}}.
- Numerele pot folosi exponenți: `1e3` înseamnă 1000.
- Nu se tastează unități și nici notația cu picioare și in. Tastați numere simple în unitățile desenului.

## Ultimul punct

`@` se măsoară de la **ultimul punct dat la orice solicitare de punct**, în orice comandă: un clic, o agățare sau un punct tastat. Este reținut între comenzi, astfel încât puteți începe o linie nouă la `@0,500` de locul unde s-a încheiat cea anterioară. Înainte de a da vreun punct, `@` se măsoară de la 0,0.

Câteva situații în care contează:

- În {{cmd:COPY}}, după prima copie, ultimul punct este punctul acelei copii. `@600,0` de două ori plasează copii la 600 și 1200 de original.
- După ce plasați o cotă, ultimul punct este locul unde ați plasat linia de cotă, nu capătul cotei.

Când aveți îndoieli, folosiți un punct absolut, o agățare sau o distanță directă.

## Introducerea distanței directe

Un număr simplu este o distanță de la **punctul de bază** al comenzii (punctul de unde pornește linia elastică) spre cursor:

1. Mutați cursorul în direcția dorită.
2. Tastați distanța și apăsați {{key:Enter}}.

Cu {{ui:Ortogonal}} activ, direcția se fixează pe orizontală sau pe verticală, ceea ce face din aceasta cea mai rapidă metodă de a desena pereți drepți. Dacă nu există un punct de bază sau cursorul se află exact pe el, numărul este refuzat cu mesajul „Este necesar un punct sau un cuvânt-cheie de opțiune.”

## Unghiuri

- În grade, ca număr simplu: `30`, `-45`, `112.5`.
- Măsurat în sens invers acelor de ceasornic, de la direcția X pozitivă (spre dreapta): 0 este dreapta, 90 sus, 180 stânga, 270 sau -90 jos.
- Acolo unde se cere un unghi (rotire, unghiul textului), puteți și să faceți clic: unghiul se măsoară de la punctul de bază până la clic. Înainte ca punctul de bază să existe, primul clic îl stabilește, iar solicitarea cere un al doilea punct.

## Distanțe

Acolo unde se cere o distanță (rază, decalare, înălțimea textului, factorul de scalare):

- tastați un număr pozitiv (într-un desen în picioare și in și `12'6"` sau `6-1/2`: vezi [Picioare și in](topic:units-papers-scales#feet-and-inches-and-fractions)), sau
- faceți clic pe un punct: distanța de la punctul de bază al comenzii până la acesta, sau
- faceți clic pe două puncte când nu există punct de bază: solicitarea devine `Specificați al doilea punct`.

„Este necesar un număr pozitiv sau două puncte.” înseamnă că valoarea nu era un număr sau era negativă.

## Aritmetică într-o valoare tastată

Oriunde se tastează o lungime, o coordonată, un unghi sau un număr (linia de comandă, introducerea dinamică, casetele Proprietăți și casetele de dialog), puteți tasta un calcul cu `+`, `-`, `*`, `/` și paranteze, în loc să îl calculați mai întâi:

| Tastați | Rezultă |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (într-un desen în picioare și in) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, în unitățile desenului (când sunt setate unitățile) |
| `@4+7/16,0` | un punct la 4.4375 la dreapta celui anterior |
| `360/7` | un unghi de 51.43 grade |

- O liniuță scrisă într-o lungime face parte în continuare din ea: `4-7/16` înseamnă 4 7/16, iar `24'-6"` înseamnă 24 de picioare și 6 in. Ca să scădeți după semnul de picior, terminați mai întâi lungimea, `24'-0"-6"`, sau puneți calculul între paranteze cu spații în jurul liniuței, `(24' - 6")` (în paranteze, spațiul este spațiu; în afara lor apasă {{key:Enter}}).
- Un număr simplu adăugat unei lungimi este în unitățile desenului; înmulțirea sau împărțirea cu un număr scalează lungimea. Două lungimi înmulțite dau o arie, deci `2'*3'` este refuzat.
- `abs`, `round`, `ceil` și `floor` funcționează și ele: `round(10/3)`.
- Un calcul care nu poate fi citit este refuzat, cu indicarea locului greșelii, de exemplu „Calculul se termină prea devreme (caracterul 3): lipsește o valoare.” Nimic nu este citit niciodată ca 0. {{cmd:CAL}} afișează valoarea unui calcul.

## Introducerea dinamică

{{ui:Dyn}} ({{key:F12}}, în bara de stare) afișează valorile lângă cursor cât timp o comandă cere un punct.

- Fără punct de bază încă (primul punct al unei linii), cele două câmpuri sunt **X** și **Y**.
- După aceea, sunt **distanța** și **unghiul** față de ultimul punct.

Tastarea merge în continuare pe linia de comandă; câmpul de lângă cursor o arată, iar linia elastică o urmărește.

1. Tastați o valoare: ea intră în câmpul evidențiat.
2. Apăsați {{key:Tab}} (sau o virgulă după X). Valoarea se blochează (apare îngroșată), iar următorul câmp este evidențiat. O distanță blocată păstrează linia elastică la această lungime cât timp vizați cu mouse-ul.
3. Tastați a doua valoare sau doar vizați, apoi apăsați {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} desenează 50 în sus de la ultimul punct.

Apăsarea {{key:Enter}} după o singură valoare, fără {{key:Tab}}, funcționează ca introducere de distanță directă. Picioarele și in funcționează și în câmpuri (`12'6"`). Solicitările de distanță și de unghi (raza unui cerc, o rotire) își afișează valoarea și ele lângă cursor.

## Opțiuni și implicite

- Opțiunile apar între paranteze drepte. Tastați literele mari ale unei opțiuni (`D` pentru `[Diametru]`, `CL` pentru `[Închidere (CL)]`) și apăsați {{key:Enter}}. Începuturi mai lungi ale cuvântului funcționează și ele (`DIA`).
- Un implicit apare între paranteze unghiulare, ca `<500>`. Apăsați {{key:Enter}} sau faceți clic dreapta pentru a-l folosi.

## Alte aranjamente de tastatură și tastatura numerică

Numele comenzilor, numele scurte și literele opțiunilor sunt litere latine. Cu un aranjament grecesc, chirilic (rusă, ucraineană, belarusă, sârbă, macedoneană, bulgară), ebraic, arab, persan, thailandez sau coreean activ, nu trebuie să schimbați aranjamentul: când cuvântul tastat nu este o comandă, un nume scurt sau o opțiune așa cum apare, CadCraft îl citește după tastele apăsate. Tasta marcată `L` pe o tastatură latină pornește în continuare `LINE`, iar tasta `C` tot răspunde la opțiunea de închidere, indiferent ce literă pune aranjamentul pe ea. Lista comenzilor potrivite de deasupra liniei de comandă urmează aceeași regulă. Textul pe care îl tastați acolo unde o comandă cere text (conținutul {{cmd:TEXT}}, un nume) nu se modifică niciodată.

Pe aranjamentele la care tasta zecimală a tastaturii numerice dă o virgulă, acea tastă tastează un punct în linia de comandă și în casetele cu numere, deci `12.5` poate fi tastat de pe tastatura numerică. Tasta virgulă de pe tastatura principală separă în continuare `x,y`.

Ambele pot fi dezactivate în {{ui:Setări}}: {{ui:Comenzi pe o aranjare de tastatură ne-latină}} și {{ui:Tasta zecimală a tastaturii numerice}}.

## Afișarea coordonatelor

Bara de stare arată X și Y ale cursorului (în SCU, dacă este setat unul), după agățări și {{ui:Ortogonal}}. Cât timp o comandă are un punct de bază, adaugă `Δ` cu distanța și unghiul față de acel punct, de exemplu `Δ 1500 < 30°`: numerele pe care le-ați tasta ca `@1500<30`.

Folosiți {{cmd:ID}} pentru a afișa coordonatele unui punct și {{cmd:DIST}} pentru a măsura între două puncte.
