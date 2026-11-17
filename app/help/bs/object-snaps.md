---
title: Hvatanje za tačke na objektima
summary: Koristite hvatanja objekata, ortogonalno i mrežu da mišem izaberete tačne krajnje tačke, središta i sjecišta.
keywords: osnap, hvatanje objekta, krajnja tačka, središnja tačka, centar, sjecište, normala, kvadrant, najbliže, čvor, umetanje, ortogonalno, mreža, f3, f8, f7, polarno praćenje, polar, polarang, praćenje hvatanja objekta, otrack, praćenje, f10, f11
from: 3cf17f94
---

## Šta ćete napraviti

Pravougaonik s njegove dvije dijagonale, krug centriran tamo gdje se sijeku, i linija od sredine jedne stranice do kruga. Svaka tačka se bira mišem, a svaka je tačna.

## Kako radi hvatanje

Dok naredba traži tačku, CadCraft traži tačke hvatanja u krugu od oko 10 piksela od nišana. Kada ga nađe, pojavi se oznaka i natpis ("Krajnja tačka", "Sjecište"), a klik pada **tačno** na tu tačku, a ne tamo gdje je nišan.

Hvatanja su uključena kada je {{ui:Hvatanje}} u statusnoj traci pritisnuto. {{key:F3}} ih uključuje i isključuje.

Hvatanja koja možete koristiti su:

| Hvatanje | Pada na |
|---|---|
| Krajnja tačka | Krajeve linija, lukova i segmenata polilinije |
| Središnja tačka | Sredinu linija, lukova i segmenata polilinije |
| Centar | Centar krugova i lukova, i segmenata lučnih polilinija |
| Kvadrant | Tačke 0, 90, 180 i 270 stepeni na krugovima i lukovima |
| Sjecište | Mjesto gdje se dva objekta sijeku |
| Normala | Tačka na objektu okomita na zadnju tačku (treba bazna tačka) |
| Tangenta | Tačka na krugu ili luku na koju linija od zadnje tačke samo dodiruje. Bez zadnje tačke (prve tačke linije), oznaka kaže "odloženo": tačka dodira računa se kad se zna sljedeća tačka, pa linija od Tangente do Tangente dodiruje oba kruga |
| Najbliže | Najbliža tačka na bilo kojem objektu |
| Čvor | Objekte tačaka |
| Umetanje | Tačku umetanja teksta i referenci blokova |

Svi su uključeni po zadanom, osim Tangente i Najbližeg. Najbliže obično pobjeđuje kad želite nešto drugo; uključite Tangentu kad vam treba.

## Izaberite hvatanja

1. Kliknite malu strelicu pored {{ui:Hvatanje}} u statusnoj traci. Otvara se lista {{ui:Hvatanja objekata}}.
2. Označite ili odznačite hvatanja. Promjene važe odmah.
3. Ponovo kliknite strelicu da zatvorite listu.

CadCraft pamti vaš izbor, kao i postavke {{ui:Mreža}}, {{ui:Ortogonalno}} i {{ui:Hvatanje}}, u ovom pregledaču.

## Koraci

1. Upiši `REC` i pritisni {{key:Enter}}.
2. Upiši `0,0` i pritisni {{key:Enter}}.
3. Upiši `@4000,3000` i pritisni {{key:Enter}}. Pojavi se pravougaonik.
4. Kliknite {{ui:Granice}}.
5. Upiši `L` i pritisni {{key:Enter}}.
6. Pomjerite nišan na donji lijevi ugao. Oznaka pokazuje "Krajnja tačka". Kliknite.
7. Pomjerite do gornjeg desnog ugla dok se ne pokaže "Krajnja tačka". Kliknite.
8. Pritisnite {{key:Enter}} da završite liniju.
9. Pritisnite {{key:Enter}} ponovo da ponovite {{cmd:LINE}}, i nacrtajte drugu dijagonalu od donjeg desnog ugla do gornjeg lijevog na isti način.
10. Upiši `C` i pritisni {{key:Enter}} da počnete krug.
11. Pomjerite nišan tamo gdje se dijagonale sijeku. Oznaka pokazuje "Sjecište". Kliknite.
12. Upiši `800` i pritisni {{key:Enter}}.

Trebalo bi da vidite krug tačno centriran na mjestu presijecanja.

13. Upiši `L` i pritisni {{key:Enter}}.
14. Pomjerite do sredine lijeve strane pravougaonika dok se ne pokaže "Središnja tačka". Kliknite.
15. Pomjerite nišan na krug, na njegovu lijevu stranu. Oznaka pokazuje "Normala" ili "Kvadrant"; ovdje je to ista tačka. Kliknite.
16. Pritisnite {{key:Enter}}.

Nova linija ide od sredine lijeve strane i zaustavlja se tačno na krugu.

## Preskočite hvatanje za jedan klik

Držite {{key:Shift}} dok klikćete. Hvatanja objekata se zanemaruju za taj klik, a tačka ide tačno tamo gdje je nišan (ili u smjeru Ortogonalno, ako je ono uključeno).

## Ortogonalno

{{ui:Ortogonalno}} ({{key:F8}}) drži sljedeću tačku pravo vodoravno ili okomito od bazne tačke. Važi za klikove i za unos direktnog rastojanja (goli broj upisan na upitu). Hvatanja objekata pobjeđuju Ortogonalno: ako se pokaže oznaka hvatanja, klik ide na hvatanje.

## Polarno praćenje

{{ui:Polar}} ({{key:F10}}) je Ortogonalno pod više uglova. Dok naredba ima baznu tačku (zadnju tačku linije, baznu tačku pomjeranja), pokazivač se poravnava kad se približi zraku iz nje pod višekratnikom polarnog koraka: prikazuje se isprekidana linija, a natpis pored nišana glasi `Polar: 1200 < 30°`. Kliknite da uzmete tu tačku, ili upišite rastojanje: `1200` ide tačno 1200 duž zraka.

Korak je 90° dok ga ne promijenite: upiši {{cmd:POLARANG}}, pritisni {{key:Enter}}, pa upiši `30` (ili 45, 22.5, 15 …). Polarno i Ortogonalno se međusobno isključuju: uključivanje jednog isključuje drugo.

## Praćenje hvatanja objekata

{{ui:Prati}} ({{key:F11}}) poravnava pokazivač s tačkama hvatanja na kojima ste se zadržali, pa možete odabrati tačku na istom nivou s jednim uglom i iznad druge, bez crtanja pomoćnih linija.

1. Uključite {{ui:Hvatanje}} i {{ui:Prati}}, i pokrenite naredbu koja traži tačku (`L`).
2. Zadržite pokazivač na tački hvatanja, kao što je ugao, pola sekunde, bez klika. Pojavi se mali krst koji je označava: tačka je uzeta. Zadržite opet da je ispustite.
3. Pomjerite pokazivač ravno od nje, vodoravno ili okomito. Isprekidana linija prati pokazivač, a natpis glasi `Track: 600 < 90°`. Kliknite, ili upišite rastojanje.
4. Uzmite drugu tačku, pa pomjerite tamo gdje se okomita kroz jednu i vodoravna kroz drugu sijeku: pokazivač se hvata za to sjecište (`Track: where two lines meet`).

Kad je {{ui:Polar}} također uključeno, uzete tačke se prate pod svakim polarnim uglom. Može se zadržati do sedam tačaka, dok naredba ne završi. {{key:Shift}} isključuje praćenje za jedan klik, kao i hvatanja.

## Mreža

{{ui:Mreža}} ({{key:F7}}) prikazuje mrežu linija iza crteža, s debljim linijama na svakoj petoj; razmak se mijenja kako zumirate. To je samo vodilja dok ne uključite {{ui:Hvatanje za mrežu}} ({{key:F9}}): tada klikovi padaju na najbližu tačku mreže, osim ako hvatanje objekta ne uzme tačku prije toga.

## Funkcijski tasteri na vašem računaru

{{key:F9}} je Hvatanje za mrežu, {{key:F10}} je Polar i {{key:F11}} je Prati.

:::mac
Na Mac-u, F3, F7, F8 i F9 obično upravljaju Mission Control i medijem. Držite **fn** uz taster, ili uključite standardne funkcijske tastere, kako je opisano u [Tasteri, miševi i tačpedovi](common:keys). Dugmad u statusnoj traci uvijek rade.
:::

:::firefox
U Firefoxu, F7 je također taster za pregledanje sa kursorom. Ako Firefox pita da li da uključi pregledanje sa kursorom, izaberite **Ne**. Koristite dugme {{ui:Mreža}} ako se pitanje stalno vraća.
:::

:::touch
Na ekranu osjetljivom na dodir nema lebdenja, pa se oznaka hvatanja pojavi samo tamo gdje prst dodirne. Zumirajte blizu za male mete, ili upisujte koordinate.
:::

## Česte greške

- **Klik je otišao na pogrešnu tačku.** Pogledajte natpis oznake prije klika: Krajnja tačka pobjeđuje Središnju tačku kad su obje blizu. Zumirajte, ili odznačite hvatanja koja ne trebate.
- **Oznaka se ne pojavljuje.** {{ui:Hvatanje}} je isključeno, ili hvatanje koje želite nije označeno, ili je objekat na sloju koji je isključen ili zamrznut.
- **Hvatanja hvataju pogrešnu stvar u zauzetom crtežu.** Zumirajte. Razmak hvatanja mjeri se u pikselima ekrana, pa zumiranje ga čini manjim na crtežu.
- **Očekivanje da Shift daje pravu liniju.** U CadCraftu, Shift isključuje hvatanja za jedan klik. Za prave linije koristite {{ui:Ortogonalno}}.
- **Očekivanje da tačke padaju na tačke mreže.** Uključite {{ui:Hvatanje za mrežu}} ({{key:F9}}), ili upišite koordinate za okrugle brojeve.
