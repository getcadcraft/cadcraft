---
title: Unos koordinata i udaljenosti
summary: Svi načini unosa tačke, udaljenosti, ugla ili broja u komandnu liniju programa CadCraft, s primjerima.
keywords: dinamički unos, dyn, f12, tab, koordinate, apsolutne, relativne, polarne, @, direktna udaljenost, ugao, stepeni, posljednja tačka, lastpoint, unos tačaka, unos, aritmetika, proračun, kalkulator, cal, plus, razlomak, izraz
from: 7de9252d
---

## Tačke

Kad upit traži tačku, upiši jedno od ovoga i pritisni {{key:Enter}}:

| Upišeš | Značenje | Primjer |
|---|---|---|
| `x,y` | Apsolutno: mjereno od ishodišta 0,0 | `2500,1200` |
| `#x,y` | Također apsolutno (prihvaćeno radi navike) | `#2500,1200` |
| `@dx,dy` | Relativno: u stranu i gore od posljednje tačke | `@600,0` |
| `@d<a` | Relativna polarna: udaljenost i ugao od posljednje tačke | `@1500<45` |
| `d<a` | Apsolutna polarna: udaljenost i ugao od ishodišta | `3000<90` |
| jedan broj | Direktna udaljenost: toliko daleko od bazne tačke, prema nišanu | `1200` |
| `*x,y`, `@*dx,dy` | Svjetske koordinate dok je UCS postavljen | `*0,0` |

Kad je UCS postavljen ({{cmd:UCS}}), `x,y`, `@dx,dy` i ugao u `d<a` mjere se duž osa UCS-a. Pogledaj [Okretanje pogleda i korištenje vlastitih koordinata](topic:ucs-and-turned-view).

Ili klikni u crtežu; hvatanje objekata i {{ui:Ortogonalno}} važe za klikove.

Pravila:

- Zarez odvaja X od Y. Decimale se pišu tačkom: `1250.75,300`.
- Negativne vrijednosti idu lijevo i dolje: `@-600,0`.
- Ne unosi razmake: {{key:Space}} šalje red, kao i {{key:Enter}}.
- Brojevi mogu koristiti eksponente: `1e3` je 1000.
- Jedinice se ne upisuju, niti notacija stopa i inča. Upiši obične brojeve u jedinicama crteža.

## Posljednja tačka

`@` broji od **posljednje tačke koju si zadao u bilo kojem upitu za tačku**, u bilo kojoj komandi: klik, hvatanje ili upisana tačka. Pamti se između komandi, pa možeš započeti novu liniju `@0,500` udaljen od mjesta gdje je prethodna završila. Prije nego što zadaš ijednu tačku, `@` broji od 0,0.

Neka mjesta gdje je ovo važno:

- U {{cmd:COPY}}, nakon prve kopije posljednja tačka je tačka te kopije. `@600,0` dva puta postavlja kopije na 600 i 1200 od originala.
- Nakon što postaviš kotu, posljednja tačka je mjesto gdje si postavio kotnu liniju, a ne kraj kote.

Kad nisi siguran, koristi apsolutnu tačku, hvatanje ili direktnu udaljenost.

## Unos direktne udaljenosti

Goli broj je udaljenost od **bazne tačke** komande (tačke od koje kreće gumena linija) prema nišanu:

1. Pomjeri nišan u željenom smjeru.
2. Upiši udaljenost i pritisni {{key:Enter}}.

Kad je {{ui:Ortogonalno}} uključeno, smjer se hvata na pravo u stranu ili pravo gore i dolje, što je ovo najbrži način za crtanje pravouglih zidova. Ako nema bazne tačke, ili je nišan tačno na njoj, broj se odbija porukom „Potrebna je tačka ili ključna riječ opcije.”

## Uglovi

- U stepenima, kao običan broj: `30`, `-45`, `112.5`.
- Mjeri se suprotno od kazaljke na satu od pozitivnog smjera X (udesno): 0 je desno, 90 gore, 180 lijevo, 270 ili -90 dolje.
- Tamo gdje se traži ugao (rotacija, ugao teksta), možeš i kliknuti: ugao se mjeri od bazne tačke do klika. Prije nego što bazna tačka postoji, prvi klik je postavlja, a upit traži drugu tačku.

## Udaljenosti

Tamo gdje se traži udaljenost (poluprečnik, odmak, visina teksta, faktor razmjere):

- upiši pozitivan broj (u crtežu u stopama i inčima još i `12'6"` ili `6-1/2`: vidi [Stope i inči](topic:units-papers-scales#feet-and-inches-and-fractions)), ili
- klikni tačku: udaljenost od bazne tačke komande do nje, ili
- klikni dvije tačke kad nema bazne tačke: upit se mijenja u `Zadaj drugu tačku`.

„Potreban je pozitivan broj ili dvije tačke.” znači da vrijednost nije broj ili je negativna.

## Aritmetika u upisanoj vrijednosti

Svugdje gdje se upisuje dužina, koordinata, ugao ili broj (komandna linija, dinamički unos, polja Svojstava i dijalozi), možeš upisati proračun sa `+`, `-`, `*`, `/` i zagradama umjesto da ga prethodno izračunaš:

| Upiši | Daje |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (u crtežu u stopama i inčima) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, u jedinicama crteža (kad su jedinice postavljene) |
| `@4+7/16,0` | tačka 4.4375 desno od posljednje |
| `360/7` | ugao od 51.43 stepena |

- Crtica upisana u dužinu i dalje je njen dio: `4-7/16` je 4 7/16 i `24'-6"` je 24 stope 6 inča. Za oduzimanje nakon oznake za stope, prvo završi dužinu, `24'-0"-6"`, ili stavi proračun u zagrade s razmacima oko crtice, `(24' - 6")` (unutar zagrada razmak je razmak; inače pritiska {{key:Enter}}).
- Obični broj dodat dužini je u jedinicama crteža; množenje ili dijeljenje njime skalira dužinu. Dvije dužine pomnožene daju površinu, pa se `2'*3'` odbija.
- Također rade `abs`, `round`, `ceil` i `floor`: `round(10/3)`.
- Proračun koji se ne može pročitati se odbija uz naznaku gdje je pogriješio, na primjer „Proračun završava prerano (znak 3): vrijednost nedostaje.” Ništa se nikad ne čita kao 0. {{cmd:CAL}} ispisuje vrijednost proračuna.

## Dinamički unos

{{ui:Dyn}} ({{key:F12}}, u statusnoj traci) prikazuje vrijednosti pored nišana dok komanda traži tačku.

- Dok nema bazne tačke (prva tačka linije), dva polja su **X** i **Y**.
- Nakon toga, to su **udaljenost** i **ugao** od posljednje tačke.

Unos i dalje ide u komandnu liniju; polje pored nišana ga prikazuje, a gumena linija ga prati.

1. Upiši vrijednost: ide u označeno polje.
2. Pritisni {{key:Tab}} (ili zarez nakon X). Vrijednost se zaključava (prikazuje se podebljano) i označava se sljedeće polje. Zaključana udaljenost drži gumenu liniju te dužine dok nišaniš mišem.
3. Upiši drugu vrijednost ili samo nišani, i pritisni {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} crta 50 pravo gore od posljednje tačke.

Pritisak na {{key:Enter}} nakon jedne vrijednosti bez {{key:Tab}} radi kao unos direktne udaljenosti. Stope i inči rade i u poljima (`12'6"`). Upiti za udaljenost i ugao (poluprečnik kruga, rotacija) također prikazuju svoju vrijednost pored nišana.

## Opcije i zadane vrijednosti

- Opcije su prikazane u uglastim zagradama. Upiši velika slova opcije (`D` za `[Diameter]`, `CL` za `CLose`) i pritisni {{key:Enter}}. Duži početak riječi također radi (`DIA`).
- Zadana vrijednost je prikazana u oštrim zagradama, na primjer `<500>`. Pritisni {{key:Enter}} ili desni klik da je upotrijebiš.

## Drugi rasporedi tastature i numerički dio

Nazivi komandi, kratka imena i slova opcija su latinična slova. Kad je aktivan grčki, ćirilični (ruski, ukrajinski, bjeloruski, srpski, makedonski, bugarski), hebrejski, arapski, perzijski, tajlandski ili korejski raspored, ne moraš mijenjati raspored: kad riječ koju si upisao nije komanda, kratko ime ili opcija u tom obliku, CadCraft je čita prema tipkama koje si pritisnuo. Tipka obilježena sa `L` na latiničnoj tastaturi i dalje pokreće `LINE`, a tipka `C` i dalje odgovara sa `Close`, bez obzira koje slovo raspored stavlja na nju. Lista podudarnih komandi iznad komandne linije slijedi isto pravilo. Tekst koji upisuješ tamo gdje komanda traži tekst (sadržaj {{cmd:TEXT}}, ime) se nikad ne mijenja.

Na rasporedima čija decimalna tipka na numeričkom dijelu daje zarez, ta tipka upisuje tačku u komandnu liniju i u polja za brojeve, pa se `12.5` može upisati na numeričkoj tastaturi. Tipka zareza na glavnoj tastaturi i dalje odvaja `x,y`.

Oboje se može isključiti u {{ui:Postavke}}: {{ui:Commands on a non-Latin keyboard layout}} i {{ui:Keypad decimal key}}.


## Prikaz koordinata

Statusna traka prikazuje X i Y nišana (u UCS-u kad je postavljen), nakon hvatanja i {{ui:Ortogonalno}}. Dok komanda ima baznu tačku, dodaje `Δ` s udaljenošću i uglom od te tačke, na primjer `Δ 1500 < 30°`: brojevi koje bi upisao kao `@1500<30`.

Koristi {{cmd:ID}} za ispis koordinata tačke i {{cmd:DIST}} za mjerenje između dvije tačke.
