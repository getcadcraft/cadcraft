---
title: Skicirajte s pisalom in dobite natančno geometrijo
summary: Riši proste poteze s pisalom, miško ali prstom, vsaka poteza pa postane čista črta, krog, lok, pravokotnik ali polilinija, ko dvignete pisalo, pripeta na to, kar je že narisano, njena velikost pa je pripravljena za prepis.
keywords: skica, pisalo, pisalo na dotik, prosto, prst, očistite, natančno, lovljenje, SKETCHLIVE, SKETCHFIX, velikost, prepis, pritisk, debelina črte, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Zaženite {{cmd:SKETCHLIVE}} (ali izberite {{ui:Risanje}} › {{ui:Več}} › Skiciraj s pisalom) in narišite potezo s pritiskom in vlečenjem. Ko dvignete pisalo, CadCraft prebere, kaj ste mislili, in to da v risbo:

| Vaša poteza | Kaj dobite |
|---|---|
| Skoraj ravna | Črta. Skoraj vodoravna ali navpična črta je narejena natanko vodoravna ali navpična. |
| Zaprta in okrogla | Krog |
| Del okrogle oblike | Lok |
| Zaprta s štirimi pravimi koti | Pravokotnik |
| Vse drugo | Polilinija s kvadratnimi stranicami |

Konci poteze se povlečejo na najbližji konec tistega, kar je že narisano, zato se skicirana stena stakne s steno ob njej.

## Prepišite velikost

Po vsaki potezi ukazna vrstica prikaže njeno velikost (dolžina črte, polmer kroga ali loka, širina pravokotnika) kot privzeto. Pritisnite {{key:Enter}}, da jo ohranite, ali vnesite število ali dolžino, na primer `12'6"`, da jo zamenjate. Črta ohrani svoj prvi konec, krog svoje središče, pravokotnik svoje prvo oglišče.

Pritisnite {{key:Enter}} na praznem pozivu, da končate, ali vnesite `U`, da vzamete zadnjo potezo nazaj. Celotna seja je en korak razveljavitve.

## Očistite več potez naenkrat

{{cmd:SKETCHFIX}} zbere poteze in jih naredi natančne, ko pritisnete {{key:Enter}}, kar ustreza hitro narisani grobi postavitvi.

:::note
Vse se izračuna na vašem računalniku po pravilih, brez modela in brez pošiljanja kamor koli.
:::

## Pritisk določa debelino črte

Kjer je pisalo za aplikacije vklopljeno (Nastavitve › Splošno › Vnosne naprave › Pisalo), poteza, narisana s pisalom, nosi vsako točko, ki jo je pisalo dalo, in njen pritisk. Lahka poteza naredi tanek predmet, trda debel: povprečni pritisk poteze izbere 0,18, 0,25, 0,35 ali 0,50 mm, ukazna vrstica pa pove, katero. Poteze, narisane z miško ali prstom, vzamejo trenutno debelino črte kot prej. {{cmd:PENPRESSURE}} to izklopi (ali spet vklopi); izbira se hrani v tem brskalniku.
