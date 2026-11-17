---
title: Hvatanje za tačke na objektima
summary: Koristite hvatanja objekata, ortogonalno i mrežu da biste mišem birali tačne krajeve, središta i preseke.
keywords: osnap, hvatanje objekata, kraj, središte, presek, normala, kvadrant, najbliže, čvor, umetanje, ortogonalno, mreža, f3, f8, f7, polarno praćenje, polarno, polarang, praćenje hvatanja objekata, otrack, praćenje, f10, f11
from: 3cf17f94
---

## Šta ćete napraviti

Pravougaonik sa njegovim dijagonalama, krug sa središtem tamo gde se seku, i linija od sredine jedne strane do kruga. Svaka tačka se bira mišem, i svaka tačka je tačna.

## Kako radi hvatanje

Dok komanda traži tačku, CadCraft traži tačke hvatanja u krugu od oko 10 piksela oko ukrštenog kursora. Kada nađe jednu, pojavljuju se oznaka i natpis („Kraj“, „Presek“), a klik pada **tačno** na tu tačku, a ne tamo gde je kursor.

Hvatanja su uključena kada je {{ui:Hvatanje}} u statusnoj traci pritisnuto. {{key:F3}} ih uključuje i isključuje.

Hvatanja koja možete koristiti su:

| Hvatanje | Pada na |
|---|---|
| Kraj | Krajevi linija, lukova i segmenata polilinije |
| Sredina | Sredina linija, lukova i segmenata polilinije |
| Središte | Središte krugova i lukova, i segmenata lukova polilinije |
| Kvadrant | Tačke na 0, 90, 180 i 270 stepeni kružnica i lukova |
| Presek | Mesto gde se dva objekta seku |
| Normala | Tačka na objektu normalna na poslednju tačku (potrebna je osnovna tačka) |
| Tangenta | Tačka na krugu ili luku gde linija iz poslednje tačke samo dodiruje. Kada još nema poslednje tačke (prva tačka linije), oznaka kaže „odloženo“: tačka dodira se računa kada se zna sledeća tačka, pa linija od Tangente do Tangente dodiruje oba kruga |
| Najbliže | Najbliža tačka na bilo kom objektu |
| Čvor | Objekti tačke |
| Umetanje | Tačka umetanja teksta i referenci blokova |

Sva hvatanja su uključena podrazumevano, osim Tangente i Najbližeg. Najbliže obično pobeđuje kada želite nešto drugo; uključite Tangentu kada vam treba.

## Izaberite hvatanja

1. Kliknite malu strelicu pored {{ui:Hvatanje}} u statusnoj traci. Otvara se lista {{ui:Hvatanja objekata}}.
2. Štiklirajte ili odštiklirajte hvatanja. Promene važe odmah.
3. Ponovo kliknite strelicu da zatvorite listu.

CadCraft pamti vaš izbor, kao i podešavanja {{ui:Mreža}}, {{ui:Ortogonalno}} i {{ui:Hvatanje}} u ovom pregledaču.

## Koraci

1. Ukucajte `REC` i pritisnite {{key:Enter}}.
2. Ukucajte `0,0` i pritisnite {{key:Enter}}.
3. Ukucajte `@4000,3000` i pritisnite {{key:Enter}}. Pojavljuje se pravougaonik.
4. Kliknite {{ui:Granice}}.
5. Ukucajte `L` i pritisnite {{key:Enter}}.
6. Pomerite kursor na donji levi ugao. Oznaka pokazuje „Kraj“. Kliknite.
7. Pomerite do gornjeg desnog ugla dok se ne pojavi „Kraj“. Kliknite.
8. Pritisnite {{key:Enter}} da završite liniju.
9. Pritisnite {{key:Enter}} ponovo da ponovite {{cmd:LINE}}, i nacrtajte drugu dijagonalu od donjeg desnog ugla do gornjeg levog na isti način.
10. Ukucajte `C` i pritisnite {{key:Enter}} da počnete krug.
11. Pomerite kursor tamo gde se dijagonale seku. Oznaka pokazuje „Presek“. Kliknite.
12. Ukucajte `800` i pritisnite {{key:Enter}}.

Trebalo bi da vidite krug čije je središte tačno na preseku.

13. Ukucajte `L` i pritisnite {{key:Enter}}.
14. Pomerite do sredine leve strane pravougaonika dok se ne pojavi „Sredina“. Kliknite.
15. Pomerite kursor na krug, na njegovu levu stranu. Oznaka pokazuje „Normala“ ili „Kvadrant“; ovde su to ista tačka. Kliknite.
16. Pritisnite {{key:Enter}}.

Nova linija ide od sredine leve strane i staje tačno na krugu.

## Preskočite hvatanje za jedan klik

Držite {{key:Shift}} dok klikćete. Hvatanja objekata se ignorišu za taj klik, a tačka ide tačno tamo gde je kursor (ili duž smera ortogonalnog, ako je ortogonalno uključeno).

## Ortogonalno

{{ui:Ortogonalno}} ({{key:F8}}) drži sledeću tačku ravno preko i ravno gore ili dole od osnovne tačke. Važi za klikove i za direktan unos rastojanja (goli broj ukucan na upitu). Hvatanja objekata pobeđuju ortogonalno: ako se prikaže oznaka hvatanja, klik ide hvatanju.

## Polarno praćenje

{{ui:Polarno}} ({{key:F10}}) je ortogonalno pod više uglova. Dok komanda ima osnovnu tačku (poslednja tačka linije, osnovna tačka pomeranja), pokazivač se poravnava kada se približi zraku iz nje pod umnoškom polarnog koraka: prikazuje se isprekidana linija, a natpis pored kursora glasi `Polar: 1200 < 30°`. Kliknite da iskoristite tu tačku, ili ukucajte rastojanje: `1200` ide tačno 1200 duž zraka.

Korak je 90° dok ga ne promenite: ukucajte {{cmd:POLARANG}}, pritisnite {{key:Enter}} i ukucajte `30` (ili 45, 22.5, 15 …). Polarno i ortogonalno se isključuju međusobno: uključivanje jednog isključuje drugo.

## Praćenje hvatanja objekata

{{ui:Praćenje}} ({{key:F11}}) poravnava pokazivač sa tačkama hvatanja na kojima ste se zadržali, tako da možete izabrati tačku u istom nivou sa jednim uglom i iznad druge, bez crtanja pomoćnih linija.

1. Uključite {{ui:Hvatanje}} i {{ui:Praćenje}}, i pokrenite komandu koja traži tačku (`L`).
2. Zadržite pokazivač na tački hvatanja, kao što je ugao, oko pola sekunde, bez klika. Mali krst je obeležava: ona je preuzeta. Zadržite ponovo da je odbacite.
3. Pomerite pokazivač ravno od nje, vodoravno ili uspravno. Isprekidana linija prati pokazivač, a natpis glasi `Track: 600 < 90°`. Kliknite ili ukucajte rastojanje.
4. Preuzmite drugu tačku i pomerite se tamo gde uspravna kroz jednu seče vodoravnu kroz drugu: pokazivač se hvata za taj presek (`Track: where two lines meet`).

Kada je uključeno i {{ui:Polarno}}, preuzete tačke se prate pod svakim polarnim uglom. Čuva se do sedam tačaka, sve dok komanda ne završi. {{key:Shift}} isključuje praćenje za jedan klik, kao i hvatanja.

## Mreža

{{ui:Mreža}} ({{key:F7}}) prikazuje mrežu linija iza crteža, sa debljim linijama na svakoj petoj; razmak se menja dok zumirate. To je samo vodič dok ne uključite {{ui:Hvatanje za mrežu}} ({{key:F9}}): tada klikovi padaju na najbližu tačku mreže, osim ako tačku prvo ne preuzme hvatanje objekta.

## Funkcijski tasteri na vašem računaru

{{key:F9}} je Hvatanje za mrežu, {{key:F10}} je Polarno, a {{key:F11}} je Praćenje.

:::mac
Na Mac-u, F3, F7, F8 i F9 obično upravljaju Mission Control-om i medijima. Držite **fn** uz taster, ili uključite standardne funkcijske tastere, kao što je opisano u [Tastatura, miševi i tačpedovi](common:keys). Dugmad u statusnoj traci uvek rade.
:::

:::firefox
U Firefox-u, F7 je takođe taster za pregledanje sa kursorom teksta (caret browsing). Ako Firefox pita da li da uključi to pregledanje, izaberite **Ne**. Koristite dugme {{ui:Mreža}} ako se pitanje stalno vraća.
:::

:::touch
Na ekranu osetljivom na dodir nema lebdenja, pa se oznaka hvatanja pojavljuje samo tamo gde prst dodirne. Uvećajte blizu za male mete, ili ukucajte koordinate.
:::

## Česte greške

- **Klik je otišao na pogrešnu tačku.** Pogledajte natpis oznake pre klika: Kraj pobeđuje Sredinu kada su obe blizu. Uvećajte, ili odštiklirajte hvatanja koja vam ne trebaju.
- **Nijedna oznaka se ne pojavljuje.** {{ui:Hvatanje}} je isključeno, ili hvatanje koje želite nije štiklirano, ili je objekat na sloju koji je isključen ili zamrznut.
- **Hvatanja hvataju pogrešnu stvar u zauzetom crtežu.** Uvećajte. Razdaljina hvatanja meri se u pikselima ekrana, pa uvećanje čini da bude manja na crtežu.
- **Očekujete da Shift daje ravnu liniju.** U CadCraft-u, Shift isključuje hvatanja za jedan klik. Koristite {{ui:Ortogonalno}} za prave linije.
- **Očekujete da tačke padnu na tačke mreže.** Uključite {{ui:Hvatanje za mrežu}} ({{key:F9}}), ili ukucajte koordinate za okrugle brojeve.
