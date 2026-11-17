---
title: Unos koordinata i udaljenosti
summary: Svi načini upisa točke, udaljenosti, kuta ili broja u naredbeni redak CadCraft-a, s primjerima.
keywords: dinamički unos, dyn, F12, Tab, koordinate, apsolutne, relativne, polarne, @, izravna udaljenost, kut, stupnjevi, zadnja točka, lastpoint, unos točaka, unos, aritmetika, izračun, kalkulator, cal, plus, razlomak, izraz
from: 7de9252d
---

## Točke

Kad naredba traži točku, upišite jedno od ovoga i pritisnite {{key:Enter}}:

| Upišete | Značenje | Primjer |
|---|---|---|
| `x,y` | Apsolutno: mjereno od ishodišta 0,0 | `2500,1200` |
| `#x,y` | Također apsolutno (prihvaćeno radi navike) | `#2500,1200` |
| `@dx,dy` | Relativno: u stranu i gore od zadnje točke | `@600,0` |
| `@d<a` | Relativno polarno: udaljenost i kut od zadnje točke | `@1500<45` |
| `d<a` | Apsolutno polarno: udaljenost i kut od ishodišta | `3000<90` |
| jedan broj | Izravna udaljenost: toliko daleko od bazne točke, prema nitnom križu | `1200` |
| `*x,y`, `@*dx,dy` | Svjetske koordinate dok je postavljen UCS | `*0,0` |

Kad je postavljen UCS ({{cmd:UCS}}), `x,y`, `@dx,dy` i kut u `d<a` mjere se duž osi UCS-a. Pogledajte [Okretanje prikaza i korištenje vlastitih koordinata](topic:ucs-and-turned-view).

Ili kliknite u crtežu; hvatanje objekata i {{ui:Orto}} primjenjuju se na klikove.

Pravila:

- Zarez odvaja X od Y. Decimale se pišu točkom: `1250.75,300`.
- Negativne vrijednosti idu lijevo i dolje: `@-600,0`.
- Ne upisujte razmake: {{key:Space}} šalje redak, kao i {{key:Enter}}.
- Brojevi mogu koristiti eksponente: `1e3` je 1000.
- Oznake jedinica se ne upisuju, a ne postoji zapis u stopama i palcima. Upisujte obične brojeve u jedinicama crteža.

## Zadnja točka

`@` broji od **zadnje točke koju ste zadali na bilo kojem upitu za točku**, u bilo kojoj naredbi: klika, hvatanja ili upisane točke. Pamti se između naredbi, pa možete započeti novu liniju `@0,500` udaljeno od mjesta gdje je prethodna završila. Prije nego zadate ijednu točku, `@` broji od 0,0.

Neka mjesta gdje je to važno:

- U {{cmd:COPY}}, nakon prve kopije zadnja točka je točka te kopije. `@600,0` dvaput postavlja kopije na 600 i 1200 od izvornika.
- Nakon što postavite kotu, zadnja točka je mjesto na kojem ste postavili mjernu crtu, a ne kraj kote.

Kad niste sigurni, upotrijebite apsolutnu točku, hvatanje ili izravnu udaljenost.

## Izravni unos udaljenosti

Goli broj je udaljenost od **bazne točke** (točke od koje kreće gumena nit) prema nitnom križu:

1. Pomaknite nitni križ u smjeru koji želite.
2. Upišite udaljenost i pritisnite {{key:Enter}}.

Uz uključen {{ui:Orto}}, smjer se prilagođava na ravno u stranu ili ravno gore i dolje, pa je ovo najbrži način za crtanje pravokutnih zidova. Ako nema bazne točke ili se nitni križ nalazi točno na njoj, broj se odbija porukom „Potrebna je točka ili ključna riječ opcije.“

## Kutovi

- U stupnjevima, kao običan broj: `30`, `-45`, `112.5`.
- Mjeri se suprotno od smjera kazaljki na satu od pozitivnog smjera osi X (koji pokazuje udesno): 0 je desno, 90 gore, 180 lijevo, 270 ili -90 dolje.
- Gdje se traži kut (rotacija, kut teksta), možete i kliknuti: kut se mjeri od bazne točke do klika. Prije nego što postoji bazna točka, prvi klik je postavlja i upit traži drugu točku.

## Udaljenosti

Gdje se traži udaljenost (polumjer, odmak, visina teksta, faktor mjerila):

- upišite pozitivan broj (u crtežu u stopama i palcima također `12'6"` ili `6-1/2`: pogledajte [Stope i palci](topic:units-papers-scales#feet-and-inches-and-fractions)), ili
- kliknite točku: udaljenost od bazne točke naredbe do nje, ili
- kliknite dvije točke kad nema bazne točke: upit se mijenja u `Odredite drugu točku`.

Poruka „Potreban je pozitivan broj ili dvije točke.“ znači da vrijednost nije broj ili je negativna.

## Aritmetika u upisanoj vrijednosti

Gdje god se upisuje duljina, koordinata, kut ili broj (redak naredbi, dinamički unos, okviri Svojstava i dijalozi), možete upisati izračun s `+`, `-`, `*`, `/` i zagradama, umjesto da ga prvo sami izračunate:

| Upišete | Daje |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (u crtežu u stopama i palcima) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, u jedinicama crteža (kad su jedinice postavljene) |
| `@4+7/16,0` | točka 4.4375 desno od zadnje |
| `360/7` | kut od 51.43 stupnja |

- Crtica upisana u duljinu i dalje je njezin dio: `4-7/16` je 4 7/16, a `24'-6"` je 24 stope i 6 palaca. Za oduzimanje nakon oznake za stope prvo dovršite duljinu, `24'-0"-6"`, ili stavite izračun u zagrade s razmacima oko crtice, `(24' - 6")` (unutar zagrada razmak je razmak; drugdje pritisne {{key:Enter}}).
- Običan broj dodan duljini je u jedinicama crteža; množenje ili dijeljenje njime skalira duljinu. Dvije duljine pomnožene međusobno daju površinu, pa je `2'*3'` odbijeno.
- Funkcije `abs`, `round`, `ceil` i `floor` također rade: `round(10/3)`.
- Izračun koji se ne može pročitati odbija se uz pokazivanje gdje je pogriješio, na primjer „Izračun završava prerano (znak 3): vrijednost nedostaje.“ Ništa se nikad ne čita kao 0. {{cmd:CAL}} ispisuje vrijednost izračuna.

## Dinamički unos

{{ui:Dyn}} ({{key:F12}}, u statusnoj traci) prikazuje vrijednosti uz nitni križ dok naredba traži točku.

- Dok još nema bazne točke (prva točka linije), dva polja su **X** i **Y**.
- Nakon toga su to **udaljenost** i **kut** od zadnje točke.

Upisivanje i dalje ide u redak naredbi; polje uz nitni križ to prikazuje, a gumena nit slijedi.

1. Upišite vrijednost: ona ide u označeno polje.
2. Pritisnite {{key:Tab}} (ili zarez nakon X). Vrijednost se zaključava (prikazana podebljano), a označeno je sljedeće polje. Zaključana udaljenost zadržava gumenu nit toliko dugom dok mišem ciljate.
3. Upišite drugu vrijednost ili samo ciljajte i pritisnite {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} crta 50 ravno gore od zadnje točke.

Pritisak {{key:Enter}} nakon jedne vrijednosti bez {{key:Tab}} radi kao izravni unos udaljenosti. Stope i palci rade i u poljima (`12'6"`). Upiti za udaljenost i kut (polumjer kružnice, rotacija) također prikazuju svoju vrijednost uz nitni križ.

## Opcije i zadane vrijednosti

- Opcije se prikazuju u uglatim zagradama. Upišite velika slova opcije (`D` za `[Promjer (D)]`, `CL` za `[Zatvori (CL)]`) i pritisnite {{key:Enter}}. Duži početak riječi također radi (`DIA`).
- Zadana vrijednost je u kutnim zagradama, kao `<500>`. Pritisnite {{key:Enter}} ili desnu tipku miša da je upotrijebite.

## Drugi rasporedi tipkovnice i brojčana tipkovnica

Nazivi naredbi, kratki nazivi i slova opcija su latinična slova. S grčkim, ćirilskim (ruskim, ukrajinskim, bjeloruskim, srpskim, makedonskim, bugarskim), hebrejskim, arapskim, perzijskim, tajlandskim ili korejskim rasporedom ne morate mijenjati raspored: kad riječ koju ste upisali nije naredba, kratki naziv ili opcija u obliku u kojem stoji, CadCraft je čita prema pritisnutim tipkama. Tipka označena `L` na latiničnoj tipkovnici i dalje pokreće `LINE`, a tipka `C` i dalje odgovara opciji za zatvaranje, koje god slovo raspored stavlja na nju. Popis podudarnih naredbi iznad retka naredbi slijedi isto pravilo. Tekst koji upisujete tamo gdje naredba traži tekst (sadržaj {{cmd:TEXT}}, naziv) nikad se ne mijenja.

Na rasporedima čija tipka decimalnog zareza na brojčanoj tipkovnici daje zarez, ta tipka upisuje točku u retku naredbi i u okvirima za brojeve, pa se `12.5` može upisati s brojčane tipkovnice. Zarez na glavnoj tipkovnici i dalje odvaja `x,y`.

Oboje se može isključiti u {{ui:Postavke}}: {{ui:Commands on a non-Latin keyboard layout}} i {{ui:Keypad decimal key}}.

## Prikaz koordinata

Statusna traka prikazuje X i Y nitnog križa (u UCS-u kad je postavljen), nakon hvatanja i {{ui:Orto}}. Dok naredba ima baznu točku, dodaje `Δ` s udaljenosti i kutom od te točke, na primjer `Δ 1500 < 30°`: to su brojevi koje biste upisali kao `@1500<30`.

Upotrijebite {{cmd:ID}} za ispis koordinata točke i {{cmd:DIST}} za mjerenje između dviju točaka.
