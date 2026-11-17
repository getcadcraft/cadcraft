---
title: Hvatanje na točke objekata
summary: Koristite hvatanja objekata, orto i mrežu da mišem odaberete točne krajnje točke, polovišta, središta i sjecišta.
keywords: osnap, hvatanje objekata, krajnja točka, polovište, središte, sjecište, okomito, kvadrant, najbliže, čvor, točka umetanja, orto, mreža, f3, f8, f7, polarno praćenje, polarno, polarang, praćenje hvatanja objekata, otrack, praćenje, f10, f11
from: 3cf17f94
---

## Što ćete izraditi

Pravokutnik s njegove dvije dijagonale, krug s središtem u točki gdje se sijeku, i linija od polovišta jedne stranice do kruga. Svaka točka odabire se mišem, a svaka je točna.

## Kako funkcionira hvatanje

Dok naredba traži točku, CadCraft traži točke hvatanja unutar otprilike 10 piksela od nišana. Kad ih nađe, pojavljuje se oznaka i naziv ("Krajnja točka", "Sjecište"), a klik pada **točno** na tu točku, a ne tamo gdje je nišan.

Hvatanja su uključena kad je {{ui:Hvatanje}} u statusnoj traci pritisnuto. {{key:F3}} ih uključuje i isključuje.

Hvatanja koja možete koristiti su:

| Hvatanje | Pada na |
|---|---|
| Krajnja točka | Krajeve linija, lukova i segmenata polilinija |
| Polovište | Sredinu linija, lukova i segmenata polilinija |
| Središte | Središte kružnica i lukova te lučnih segmenata polilinija |
| Kvadrant | Točke 0, 90, 180 i 270 stupnjeva kružnica i lukova |
| Sjecište | Mjesto gdje se dva objekta sijeku |
| Okomito | Točku na objektu okomitu na zadnju točku (treba baznu točku) |
| Tangenta | Točku na kružnici ili luku na koju linija iz zadnje točke samo dodiruje. Bez zadnje točke (prve točke linije) oznaka kaže "odgođeno": točka dodira izračunava se kad se zna sljedeća točka, pa linija od Tangente do Tangente dodiruje oba kruga |
| Najbliže | Najbližu točku na bilo kojem objektu |
| Čvor | Točkaste objekte |
| Točka umetanja | Točku umetanja teksta i referenci blokova |

Sva su uključena po zadanom osim Tangente i Najbližeg. Najbliže obično pobijedi kad želite nešto drugo; uključite Tangentu kad je trebate.

## Odaberite hvatanja

1. Kliknite malu strelicu pored {{ui:Hvatanje}} u statusnoj traci. Otvara se popis {{ui:Hvatanja objekata}}.
2. Označite ili odznačite hvatanja. Promjene se odmah primjenjuju.
3. Kliknite strelicu ponovno da zatvorite popis.

CadCraft pamti vaš izbor, kao i postavke {{ui:Mreža}}, {{ui:Orto}} i {{ui:Hvatanje}}, u ovom pregledniku.

## Koraci

1. Upišite `REC` i pritisnite {{key:Enter}}.
2. Upišite `0,0` i pritisnite {{key:Enter}}.
3. Upišite `@4000,3000` i pritisnite {{key:Enter}}. Pojavljuje se pravokutnik.
4. Kliknite {{ui:Opseg}}.
5. Upišite `L` i pritisnite {{key:Enter}}.
6. Pomaknite nišan na donji lijevi kut. Oznaka pokazuje "Krajnja točka". Kliknite.
7. Pomaknite se do gornjeg desnog kuta dok se ne pojavi "Krajnja točka". Kliknite.
8. Pritisnite {{key:Enter}} da završite liniju.
9. Pritisnite {{key:Enter}} ponovno da ponovite {{cmd:LINE}}, i nacrtajte drugu dijagonalu od donjeg desnog kuta do gornjeg lijevog na isti način.
10. Upišite `C` i pritisnite {{key:Enter}} da započnete krug.
11. Pomaknite nišan na mjesto gdje se dijagonale sijeku. Oznaka pokazuje "Sjecište". Kliknite.
12. Upišite `800` i pritisnite {{key:Enter}}.

Trebali biste vidjeti krug točno centriran na presjeku.

13. Upišite `L` i pritisnite {{key:Enter}}.
14. Pomaknite se do sredine lijeve stranice pravokutnika dok se ne pojavi "Polovište". Kliknite.
15. Pomaknite nišan na krug, na njegovu lijevu stranu. Oznaka pokazuje "Okomito" ili "Kvadrant"; ovdje su to ista točka. Kliknite.
16. Pritisnite {{key:Enter}}.

Nova linija ide od sredine lijeve strane i zaustavlja se točno na krugu.

## Preskočite hvatanje za jedan klik

Držite {{key:Shift}} dok kliknete. Hvatanja objekata se za taj klik zanemaruju, a točka ide točno tamo gdje je nišan (ili duž smjera Orto, ako je Orto uključen).

## Orto

{{ui:Orto}} ({{key:F8}}) drži sljedeću točku ravno vodoravno ili okomito od bazne točke. Primjenjuje se na klikove i na izravan unos udaljenosti (goli broj upisan na upitu). Hvatanja objekata imaju prednost nad Ortom: ako se pokaže oznaka hvatanja, klik ide na hvatanje.

## Polarno praćenje

{{ui:Polarno}} ({{key:F10}}) je Orto pod više kutova. Dok naredba ima baznu točku (zadnju točku linije, baznu točku pomicanja), pokazivač se poravnava kad se približi zraci iz nje pod višekratnikom polarnog koraka: prikazuje se točkasta linija i oznaka uz nišan čita `Polar: 1200 < 30°`. Kliknite da uzmete tu točku ili upišite udaljenost: `1200` ide točno 1200 duž zrake.

Korak je 90° dok ga ne promijenite: upišite {{cmd:POLARANG}}, pritisnite {{key:Enter}} i upišite `30` (ili 45, 22.5, 15 …). Polarno i Orto se međusobno isključuju: uključivanje jednog isključuje drugi.

## Praćenje hvatanja objekata

{{ui:Praćenje}} ({{key:F11}}) poravnava pokazivač s točkama hvatanja na kojima ste se zadržali, pa možete odabrati točku u razini s jednim kutom i iznad drugoga, bez crtanja pomoćnih linija.

1. Uključite {{ui:Hvatanje}} i {{ui:Praćenje}}, i pokrenite naredbu koja traži točku (`L`).
2. Zadržite pokazivač na točki hvatanja, poput kuta, pola sekunde, bez klika. Mali križić je označava: uhvaćena je. Ponovno se zadržite na njoj da je otpustite.
3. Pomaknite pokazivač ravno od nje, vodoravno ili okomito. Točkasta linija prati pokazivač, a oznaka čita `Track: 600 < 90°`. Kliknite ili upišite udaljenost.
4. Uhvatite drugu točku i pomaknite se do mjesta gdje okomica kroz jednu sijeće vodoravnu kroz drugu: pokazivač se hvata na to sjecište (`Track: where two lines meet`).

Kad je uključeno i {{ui:Polarno}}, uhvaćene točke prate se na svakom polarnom kutu. Čuva se do sedam točaka dok naredba ne završi. {{key:Shift}} isključuje praćenje za jedan klik, kao i hvatanja.

## Mreža

{{ui:Mreža}} ({{key:F7}}) prikazuje mrežu linija iza crteža, s debljim linijama svake pete; razmak se mijenja pri zumiranju. Ona je samo vodilica dok ne uključite {{ui:Hvatanje na mrežu}} ({{key:F9}}): tada klikovi padaju na najbližu točku mreže, osim ako hvatanje objekta ne preuzme točku prvo.

## Funkcijske tipke na vašem računalu

{{key:F9}} je Hvatanje na mrežu, {{key:F10}} je Polarno, a {{key:F11}} je Praćenje.

:::mac
Na Macu F3, F7, F8 i F9 obično upravljaju Mission Controlom i medijem. Držite **fn** uz tipku, ili uključite standardne funkcijske tipke, kako je opisano u [Tipke, miševi i trackpadovi](common:keys). Gumbi u statusnoj traci uvijek rade.
:::

:::firefox
U Firefoxu je F7 i tipka za pregledavanje s tekstualnim kursorom (caret browsing). Ako Firefox pita želite li je uključiti, odaberite **Ne**. Upotrijebite gumb {{ui:Mreža}} ako se pitanje stalno vraća.
:::

:::touch
Na zaslonu osjetljivom na dodir nema lebdenja, pa se oznaka hvatanja pojavljuje samo gdje prst dodirne. Zumirajte izbliza za male mete ili upisujte koordinate.
:::

## Česte pogreške

- **Klik je otišao na krivu točku.** Pogledajte oznaku prije klika: Krajnja točka pobjeđuje Polovište kad su oba blizu. Zumirajte ili odznačite hvatanja koja vam ne trebaju.
- **Nijedna oznaka se ne pojavljuje.** {{ui:Hvatanje}} je isključeno, ili je hvatanje koje želite odznačeno, ili je objekt na sloju koji je isključen ili zamrznut.
- **Hvatanja hvataju krivu stvar u gustom crtežu.** Zumirajte. Udaljenost hvatanja mjeri se u pikselima zaslona, pa zumiranje čini da se na crtežu manje hvata.
- **Očekujete da Shift da ravnu liniju.** U CadCraftu Shift isključuje hvatanja za jedan klik. Za ravne linije upotrijebite {{ui:Orto}}.
- **Očekujete da točke padnu na točke mreže.** Uključite {{ui:Hvatanje na mrežu}} ({{key:F9}}), ili upišite koordinate za okrugle brojeve.
