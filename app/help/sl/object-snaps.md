---
title: Lovljenje na točke objektov
summary: Z lovljenjem objektov, Orto in mrežo z miško natančno izberite krajišča, razpolovišča, središča in presečišča.
keywords: osnap, lovljenje objektov, krajišče, razpolovišče, središče, presečišče, pravokotno, kvadrant, najbližje, vozlišče, vstavitev, ortho, mreža, f3, f8, f7, polarno sledenje, polarno, polarang, sledenje lovljenju objektov, otrack, sledenje, f10, f11
from: 3cf17f94
---

## Kaj boste naredili

Pravokotnik z njegovima diagonalama, krog s središčem tam, kjer se diagonali križata, in črto od sredine ene stranice do kroga. Vsaka točka je izbrana z miško, in vsaka točka je natančna.

## Kako deluje lovljenje

Medtem ko ukaz zahteva točko, CadCraft išče točke lovljenja v razdalji približno 10 slikovnih točk od križca. Ko jo najde, se prikažeta oznaka in napis („Krajišče“, „Presečišče“), klik pa pristane **natančno** na tej točki, ne tam, kjer je križec.

Lovljenje je vklopljeno, kadar je {{ui:Lovljenje}} v vrstici stanja pritisnjeno. {{key:F3}} ga vklopi in izklopi.

Lovila, ki jih lahko uporabite, so:

| Lovilo | Pristane na |
|---|---|
| Krajišče | Konci črt, lokov in odsekov polilinij |
| Razpolovišče | Sredina črt, lokov in odsekov polilinij |
| Središče | Središče krogov in lokov ter odsekov lokov polilinij |
| Kvadrant | Točke pri 0, 90, 180 in 270 stopinjah krogov in lokov |
| Presečišče | Kjer se dva objekta križata |
| Pravokotno | Točka na objektu, pravokotna na zadnjo točko (potrebuje izhodiščno točko) |
| Tangenta | Točka na krogu ali loku, kjer se črta iz zadnje točke ravno dotika. Brez zadnje točke (prva točka črte) oznaka pravi „odloženo“: točka dotika se izračuna, ko je znana naslednja točka, zato se črta od Tangente do Tangente dotika obeh krogov |
| Najbližje | Najbližja točka na katerem koli objektu |
| Vozlišče | Točkovni objekti |
| Vstavitev | Vstavitvena točka besedila in sklicev na bloke |

Vsa so privzeto vklopljena razen Tangente in Najbližjega. Najbližje pogosto zmaga, ko želite kaj drugega; vklopite Tangento, kadar jo potrebujete.

## Izberite lovila

1. Kliknite majhno puščico ob {{ui:Lovljenje}} v vrstici stanja. Odpre se seznam {{ui:Lovljenje objektov}}.
2. Označite ali odznačite lovila. Spremembe veljajo takoj.
3. Ponovno kliknite puščico, da zaprete seznam.

CadCraft si v tem brskalniku zapomni vašo izbiro ter nastavitve {{ui:Mreža}}, {{ui:Orto}} in {{ui:Lovljenje}}.

## Koraki

1. Vnesite `REC` in pritisnite {{key:Enter}}.
2. Vnesite `0,0` in pritisnite {{key:Enter}}.
3. Vnesite `@4000,3000` in pritisnite {{key:Enter}}. Pojavi se pravokotnik.
4. Kliknite {{ui:Obseg}}.
5. Vnesite `L` in pritisnite {{key:Enter}}.
6. Premaknite križec na spodnji levi vogal. Oznaka kaže „Krajišče“. Kliknite.
7. Premaknite na zgornji desni vogal, dokler se ne prikaže „Krajišče“. Kliknite.
8. Pritisnite {{key:Enter}}, da končate črto.
9. Ponovno pritisnite {{key:Enter}}, da ponovite {{cmd:LINE}}, in na enak način narišite drugo diagonalo od spodnjega desnega do zgornjega levega vogala.
10. Vnesite `C` in pritisnite {{key:Enter}}, da začnete krog.
11. Premaknite križec tja, kjer se diagonali križata. Oznaka kaže „Presečišče“. Kliknite.
12. Vnesite `800` in pritisnite {{key:Enter}}.

Videti bi morali krog, ki je natančno središčen na križanju.

13. Vnesite `L` in pritisnite {{key:Enter}}.
14. Premaknite na sredino leve stranice pravokotnika, dokler se ne prikaže „Razpolovišče“. Kliknite.
15. Premaknite križec na krog, na njegovo levo stran. Oznaka kaže „Pravokotno“ ali „Kvadrant“; tukaj sta to ista točka. Kliknite.
16. Pritisnite {{key:Enter}}.

Nova črta teče od sredine leve stranice in se ustavi natančno na krogu.

## Preskočite lovljenje za en klik

Med klikom držite {{key:Shift}}. Lovljenje objektov se za ta klik prezre, točka pa gre natančno tja, kjer je križec (ali vzdolž smeri Orto, če je Orto vklopljen).

## Orto

{{ui:Orto}} ({{key:F8}}) drži naslednjo točko naravnost čez ali naravnost gor in dol od izhodiščne točke. Velja za klike in za neposredni vnos razdalje (goli število, vpisano na pozivu). Lovila zmagajo nad Orto: če se prikaže oznaka lovila, gre klik na lovilo.

## Polarno sledenje

{{ui:Polarno}} ({{key:F10}}) je Orto pri več kotih. Kadar ima ukaz izhodiščno točko (zadnja točka črte, izhodiščna točka premika), se kazalec poravna, kadar se približa žarku od nje pri večkratniku polarnega koraka: prikaže se pikčasta črta, poleg križca pa oznaka piše `Polarno: 1200 < 30°`. Kliknite, da uporabite to točko, ali vpišite razdaljo: `1200` gre točno 1200 vzdolž žarka.

Korak je 90° do spremembe: vpišite {{cmd:POLARANG}}, pritisnite {{key:Enter}} in vpišite `30` (ali 45, 22.5, 15 …). Polarno in Orto se izključujeta: vklop enega izklopi drugega.

## Sledenje lovljenju objektov

{{ui:Sledenje}} ({{key:F11}}) poravna kazalec s točkami lovljenja, na katerih ste se ustavili, tako da lahko izberete točko na ravni z enim vogalom in nad drugo, brez risanja pomožnih črt.

1. Vklopite {{ui:Lovljenje}} in {{ui:Sledenje}} ter zaženite ukaz, ki zahteva točko (`L`).
2. Za pol sekunde ustavite kazalec na točki lovljenja, na primer vogalu, brez klika. Majhen križ jo označi: je pridobljena. Ustavite se nanjo znova, da jo sprostite.
3. Premaknite kazalec naravnost od nje, vodoravno ali navpično. Pikčasta črta sledi kazalcu, oznaka pa glasi `Sledenje: 600 < 90°`. Kliknite ali vpišite razdaljo.
4. Pridobite drugo točko in se premaknite tja, kjer navpična črta skozi eno sreča vodoravno skozi drugo: kazalec se prilepi na to križišče (`Sledenje: kjer se srečata dve črti`).

Kadar je vklopljeno tudi {{ui:Polarno}}, pridobljene točke sledijo pri vsakem polarnem kotu. Hrani se do sedem točk, dokler se ukaz ne konča. {{key:Shift}} izklopi sledenje za en klik, enako kot lovila.

## Mreža

{{ui:Mreža}} ({{key:F7}}) prikaže mrežo črt za risbo, pri čemer je vsaka peta črta debelejša; razmik se spreminja, ko povečujete. Je samo vodilo, dokler ne vklopite {{ui:Lovljenje na mrežo}} ({{key:F9}}): tedaj klik pristane na najbližji točki mreže, razen če lovilo objekta prej vzame točko.

## Funkcijske tipke na vašem računalniku

{{key:F9}} je Lovljenje na mrežo, {{key:F10}} je Polarno, {{key:F11}} pa Sledenje.

:::mac
Na Macu F3, F7, F8 in F9 običajno nadzorujejo Mission Control in predstavnost. Držite **fn** s tipko ali vklopite standardne funkcijske tipke, kot je opisano v [Tipke, miške in sledilne ploščice](common:keys). Gumbi v vrstici stanja vedno delujejo.
:::

:::firefox
V Firefoxu je F7 tudi tipka za brskanje s kazalcem. Če Firefox vpraša, ali želite vklopiti brskanje s kazalcem, izberite **Ne**. Uporabite gumb {{ui:Mreža}}, če se vprašanje ponavlja.
:::

:::touch
Na zaslonu na dotik ni lebdenja, zato se oznaka lovila prikaže samo tam, kjer se dotakne prst. Približajte se za majhne cilje ali vpišite koordinate.
:::

## Pogoste napake

- **Klik je šel na napačno točko.** Pred klikom preberite oznako: Krajišče zmaga nad Razpolovišči, kadar sta oba blizu. Povečajte ali odznačite lovila, ki jih ne potrebujete.
- **Oznaka se ne prikaže.** {{ui:Lovljenje}} je izklopljeno, ali je lovilo, ki ga želite, odznačeno, ali pa je objekt na sloju, ki je izklopljen ali zamrznjen.
- **Lovila zgrabijo napačno stvar v zapleteni risbi.** Povečajte. Razdalja lovljenja se meri v slikovnih točkah zaslona, zato povečava pomeni manjšo razdaljo na risbi.
- **Pričakovanje, da bo Shift dal ravno črto.** V CadCraftu Shift za en klik izklopi lovila. Za ravne črte uporabite {{ui:Orto}}.
- **Pričakovanje, da točke pristanejo na točkah mreže.** Vklopite {{ui:Lovljenje na mrežo}} ({{key:F9}}) ali vpišite koordinate za okrogla števila.
