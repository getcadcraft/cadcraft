---
title: Unos koordinata i rastojanja
summary: Svi načini unosa tačke, rastojanja, ugla ili broja u komandnu liniju programa CadCraft, sa primerima.
keywords: dinamički unos, dinam, f12, tab, koordinate, apsolutno, relativno, polarno, @, direktno rastojanje, ugao, stepeni, poslednja tačka, lastpoint, unos tačaka, unos, aritmetika, proračun, kalkulator, cal, plus, razlomak, izraz
from: 7de9252d
---

## Tačke

Kada komanda traži tačku, ukucaj jedan od ovih oblika i pritisni {{key:Enter}}:

| Ukucaš | Značenje | Primer |
|---|---|---|
| `x,y` | Apsolutno: meri se od početka 0,0 | `2500,1200` |
| `#x,y` | Takođe apsolutno (prihvata se radi navike) | `#2500,1200` |
| `@dx,dy` | Relativno: preko i gore od poslednje tačke | `@600,0` |
| `@d<a` | Relativno polarno: rastojanje i ugao od poslednje tačke | `@1500<45` |
| `d<a` | Apsolutno polarno: rastojanje i ugao od početka | `3000<90` |
| jedan broj | Direktno rastojanje: toliko daleko od osnovne tačke, prema ukrsnici | `1200` |
| `*x,y`, `@*dx,dy` | Svetske koordinate dok je postavljen UCS | `*0,0` |

Kada je postavljen UCS ({{cmd:UCS}}), `x,y`, `@dx,dy` i ugao u `d<a` mere se duž osa UCS-a. Pogledaj [Okreni pogled i koristi sopstvene koordinate](topic:ucs-and-turned-view).

Ili klikni u crtežu; hvatanje objekata i {{ui:Ortho}} važe za klikove.

Pravila:

- Zarez razdvaja X od Y. Decimale se pišu tačkom: `1250.75,300`.
- Negativne vrednosti idu levo i dole: `@-600,0`.
- Ne kucaj razmake: {{key:Space}} šalje red, kao {{key:Enter}}.
- Brojevi mogu koristiti eksponente: `1e3` je 1000.
- Jedinice se ne kucaju, i nema notacije u stopama i inčima. Kucaj obične brojeve u jedinicama crteža.

## Poslednja tačka

`@` računa od **poslednje tačke koju si dao na bilo kom upitu za tačku**, u bilo kojoj komandi: klik, hvatanje ili ukucana tačka. Pamti se između komandi, pa možeš započeti novu liniju `@0,500` daleko od mesta gde je prethodna završila. Pre nego što daš bilo koju tačku, `@` računa od 0,0.

Neka mesta gde je ovo važno:

- U {{cmd:COPY}}, posle prve kopije poslednja tačka je tačka te kopije. `@600,0` dvaput postavlja kopije na 600 i 1200 od originala.
- Posle postavljanja kote, poslednja tačka je mesto gde si postavio liniju kote, a ne kraj kote.

Kada nisi siguran, koristi apsolutnu tačku, hvatanje ili direktno rastojanje.

## Direktni unos rastojanja

Goli broj je rastojanje od **osnovne tačke** komande (tačke od koje kreće gumena traka) prema ukrsnici:

1. Pomeri ukrsnicu u smeru koji želiš.
2. Ukucaj rastojanje i pritisni {{key:Enter}}.

Kada je uključeno {{ui:Ortho}}, smer se hvata na pravu horizontalu ili vertikalu, što čini ovo najbržim načinom za crtanje pravih zidova. Ako nema osnovne tačke ili je ukrsnica tačno na njoj, broj se odbija uz poruku: "Potrebna je tačka ili ključna reč opcije."

## Uglovi

- U stepenima, kao običan broj: `30`, `-45`, `112.5`.
- Meri se suprotno kretanju kazaljke na satu od pozitivnog smera X (usmerenog udesno): 0 je desno, 90 gore, 180 levo, 270 ili -90 dole.
- Gde se traži ugao (rotacija, ugao teksta), možeš i kliknuti: ugao se meri od osnovne tačke do klika. Pre nego što postoji osnovna tačka, prvi klik je postavlja, a upit traži drugu tačku.

## Rastojanja

Gde se traži rastojanje (poluprečnik, ofset, visina teksta, faktor razmere):

- ukucaj pozitivan broj (u crtežu u stopama i inčima i `12'6"` ili `6-1/2`: pogledaj [Stope i inči](topic:units-papers-scales#feet-and-inches-and-fractions)), ili
- klikni tačku: rastojanje od osnovne tačke komande do nje, ili
- klikni dve tačke kada nema osnovne tačke: upit se menja u `Specify second point`.

„Potreban je pozitivan broj ili dve tačke.“ znači da vrednost nije broj ili je negativna.

## Aritmetika u ukucanoj vrednosti

Gde god se ukucava dužina, koordinata, ugao ili broj (komandna linija, dinamički unos, polja svojstava i dijalozi), možeš ukucati proračun sa `+`, `-`, `*`, `/` i zagradama umesto da ga prvo sam izračunaš:

| Ukucaš | Dobija se |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (u crtežu u stopama i inčima) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, u jedinicama crteža (kada su jedinice podešene) |
| `@4+7/16,0` | tačka 4.4375 desno od poslednje |
| `360/7` | ugao od 51.43 stepeni |

- Crtica upisana u dužinu i dalje je njen deo: `4-7/16` je 4 7/16, a `24'-6"` je 24 stope 6 inča. Da oduzmeš posle oznake za stope, prvo završi dužinu, `24'-0"-6"`, ili stavi proračun u zagrade sa razmacima oko crtice, `(24' - 6")` (unutar zagrada razmak je obični razmak; inače razmak pritiska {{key:Enter}}).
- Goli broj dodat dužini je u jedinicama crteža; množenje ili deljenje njome skalira dužinu. Dve dužine pomnožene daju površinu, pa je `2'*3'` odbijeno.
- `abs`, `round`, `ceil` i `floor` takođe rade: `round(10/3)`.
- Proračun koji se ne može pročitati odbija se uz navod gde je pošlo po zlu, na primer: „Proračun se završava prerano (znak 3): vrednost nedostaje.“ Ništa se nikada ne čita kao 0. {{cmd:CAL}} ispisuje vrednost proračuna.

## Dinamički unos

{{ui:Dyn}} ({{key:F12}}, u statusnoj traci) stavlja vrednosti pored ukrsnice dok komanda traži tačku.

- Dok nema osnovne tačke (prve tačke linije), dva polja su **X** i **Y**.
- Posle toga su to **rastojanje** i **ugao** od poslednje tačke.

Ukucavanje i dalje ide u komandnu liniju; polje pored ukrsnice prikazuje ga, a gumena traka prati.

1. Ukucaj vrednost: ide u istaknuto polje.
2. Pritisni {{key:Tab}} (ili zarez posle X). Vrednost se zaključava (prikazuje se podebljano) i sledeće polje se ističe. Zaključano rastojanje drži gumenu traku te dužine dok nišaniš mišem.
3. Ukucaj drugu vrednost ili samo nišani, pa pritisni {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} crta 50 pravo gore od poslednje tačke.

Pritisak na {{key:Enter}} posle jedne vrednosti bez {{key:Tab}} radi kao direktni unos rastojanja. Stope i inči rade i u poljima (`12'6"`). Upiti za rastojanje i ugao (poluprečnik kruga, rotacija) takođe prikazuju svoju vrednost pored ukrsnice.

## Opcije i podrazumevane vrednosti

- Opcije su u uglastim zagradama. Ukucaj velika slova opcije (`D` za `[Diameter]`, `CL` za `CLose`) i pritisni {{key:Enter}}. Duži početci reči takođe rade (`DIA`).
- Podrazumevana vrednost je u ugaonim zagradama, na primer `<500>`. Pritisni {{key:Enter}} ili desni klik da je upotrebiš.

## Drugi rasporedi tastature i numerička tastatura

Nazivi komandi, kratki nazivi i slova opcija su latinična slova. Kada je aktivan grčki, ćirilični (ruski, ukrajinski, beloruski, srpski, makedonski, bugarski), hebrejski, arapski, persijski, tajlandski ili korejski raspored, ne moraš menjati raspored: kada reč koju si ukucao nije komanda, kratki naziv ili opcija u obliku u kom stoji, CadCraft je čita prema tasterima koje si pritisnuo. Taster označen `L` na latiničnoj tastaturi i dalje pokreće `LINE`, a taster `C` i dalje odgovara `Close`, koje god slovo raspored stavi na njega. Lista odgovarajućih komandi iznad komandne linije prati isto pravilo. Tekst koji ukucaš tamo gde komanda traži tekst (sadržaj {{cmd:TEXT}}, naziv) se nikada ne menja.

Na rasporedima čiji taster za decimalni zarez na numeričkoj tastaturi daje zarez, taj taster ukucava tačku u komandnoj liniji i u poljima za brojeve, pa se `12.5` može ukucati sa numeričke tastature. Zarez na glavnoj tastaturi i dalje razdvaja `x,y`.

Oboje se može isključiti u {{ui:Settings}}: {{ui:Commands on a non-Latin keyboard layout}} i {{ui:Keypad decimal key}}.

## Prikaz koordinata

Statusna traka prikazuje X i Y ukrsnice (u UCS-u kada je postavljen), posle hvatanja i {{ui:Ortho}}. Dok komanda ima osnovnu tačku, dodaje `Δ` sa rastojanjem i uglom od te tačke, na primer `Δ 1500 < 30°`: brojevi koje bi ukucao kao `@1500<30`.

Koristi {{cmd:ID}} za ispis koordinata tačke, a {{cmd:DIST}} za merenje između dve tačke.
