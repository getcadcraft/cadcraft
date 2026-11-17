---
title: "Nastavitev velikosti kot, decimalk in merila"
summary: "Izberite višino besedila, velikost puščic, decimalke in skupno merilo za nove kote, spremenite obstoječe in razumite, kako delujejo slogi kotiranja v CadCraft."
keywords: slog kotiranja, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, skupno merilo, decimalke, velikost puščice, merilo opombe, dimtextunit, enote v besedilu, mm, cm, m, km, milimetri, metri, dimlfac, dimpost
from: 8ec82a07
---

## Kaj se boste naučili

Kako veliko sta besedilo kote in puščice, kako ju nastavite za risbo, izrisano v merilu 1:50 ali 1:100, in kako spremenite kote, ki ste jih že naredili.

## Kako delujejo velikosti kot

Vsaka kota nosi svoj nabor velikosti: višina besedila, velikost puščice, decimalke, razmik okoli besedila, koliko podaljški merilne črte segajo čez merilno črto in koliko se začnejo od objekta. Privzete vrednosti so blizu običajnemu slogu ISO:

| Nastavitev | Privzeto | Ukaz |
|---|---|---|
| Višina besedila | 2.5 | {{cmd:DIMTXT}} |
| Velikost puščice | 2.5 | {{cmd:DIMASZ}} |
| Decimalke | 2 (končne ničle se izpustijo) | {{cmd:DIMDEC}} |
| Razmik okoli besedila | 0.625 | {{cmd:DIMGAP}} |
| Podaljšek čez merilno črto | 1.25 | {{cmd:DIMEXE}} |
| Odmik od objekta | 0.625 | {{cmd:DIMEXO}} |
| Skupno merilo | 1 | {{cmd:DIMSCALE}} |

Vsaka velikost se pomnoži s **skupnim merilom**. Nastavite velikosti, kot jih želite na papirju (besedilo 2.5 mm), skupno merilo pa na merilo izrisa (50 za 1:50). Besedilo je nato visoko 2.5 × 50 = 125 enot risbe, izriše pa se pri 2.5 mm.

:::note
Imenovane sloge kotiranja upravljate z {{cmd:DIMSTYLE}}: glejte spodnji razdelek. Vsaka kota prav tako hrani nastavitve, s katerimi je bila narejena, zato lahko še vedno spremenite eno samo kota v {{ui:Lastnosti}}.
:::

## Nastavite velikosti za nove kote

Obe spodnji poti spremenita samo kote, ki jih narišete pozneje.

### V podoknu Trenutne nastavitve

1. Pritisnite {{key:Esc}}, da nič ni izbrano. Na zavihku {{ui:Model}} desno podokno kaže {{ui:Trenutne nastavitve}}.
2. Pomaknite se po podoknu do {{ui:Nove kote}}, mimo vrstic sloja, barve, enot in {{ui:Sloj 0}} (na majhnem zaslonu se začne pod spodnjim robom). Kliknite v {{ui:Skupno merilo}}, vnesite `50` in pritisnite {{key:Enter}}.
3. Enako nastavite {{ui:Višina besedila}}, {{ui:Velikost puščice}} in {{ui:Decimalke}}, če želite druge vrednosti.

Vrstica stanja potrdi vsako, na primer „Skupno merilo za nove kote: 50“.

### V ukazni vrstici

1. Vnesite `DIMSCALE` in pritisnite {{key:Enter}}.
2. Na pozivu `Enter new value for DIMSCALE <1>` vnesite `50` in pritisnite {{key:Enter}}.

Zgodovina potrdi „DIMSCALE = 50. Nove kote ga uporabljajo; izberite obstoječe, da spremenite njihovega.“ {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} in {{cmd:DIMEXO}} delujejo enako. Pritisnite {{key:Enter}} na pozivu, da ohranite trenutno vrednost.

### Čevlji in palci pri kotah

Nove kote uporabljajo format dolžin risbe: nastavite ga z {{ui:Format dolžin}} v {{ui:Trenutne nastavitve}} ali z {{cmd:UNITS}} (glejte [Čevlji in palci](topic:units-papers-scales#feet-and-inches-and-fractions)), naslednja kota pa prebere `12'-6 1/2"`. {{cmd:DIMLUNIT}} nastavi samo format kot (2 decimalki, 3 inženirski, 4 arhitekturni, 5 ulomski). Za kot, ki ste jo že naredili, jo izberite in izberite {{ui:Format}} v {{ui:Lastnosti}}; pri ulomskem formatu polje {{ui:Ulomek}} vzame potenco dveh (4 = 1/16).

## Kote v mm, cm, m ali km

Kota meri v enotah risbe. Lahko to dolžino zapiše v milimetrih, centimetrih, metrih ali kilometrih, z enoto za številom: zid 1250 mm bere `1250 mm`, `125 cm`, `1.25 m` ali `0.00125 km`.

1. Najprej nastavite {{ui:Enote}} risbe v {{ui:Trenutne nastavitve}} (glejte [Enote, formati papirja in merila](topic:units-papers-scales#drawing-units)), da CadCraft ve, kaj je ena enota risbe. Risba brez enot se bere kot milimetri, {{cmd:DIMTEXTUNIT}} pa to pove.
2. Za nove kote: pritisnite {{key:Esc}}, da nič ni izbrano, in pod {{ui:Nove kote}} izberite {{ui:Enote v besedilu}}: {{ui:Enote risbe}}, `mm`, `cm`, `m` ali `km`.
3. Za kote, ki ste jih že naredili: izberite jih, nato v {{ui:Lastnosti}} › {{ui:Primarne enote}} izberite {{ui:Enote v besedilu}}.

Lahko tudi vnesete {{cmd:DIMTEXTUNIT}} (`DTU`) in odgovorite `D`, `MM`, `CM`, `M` ali `KM`: z izbranimi kotami jih spremeni (en korak razveljavitve), brez izbora pa nastavi nove kote.

{{ui:Decimalke}} ({{cmd:DIMDEC}}) še vedno nastavlja, koliko decimalnih mest se prikaže: z metri in 3 decimalkami se 1234 mm prebere `1.234 m`. Besedilo je zapisano kot decimalno število. Na listu se kote merijo v papirni enoti lista (milimetri ali palci).

Shranjeni DWG ali DXF ohrani izbiro kot merilo mere kote (DIMLFAC) in pripono (DIMPOST, ` m`), da drugi programi prikažejo isto besedilo. Če pozneje spremenite {{ui:Enote}} risbe, se kote, zapisane v mm, cm, m ali km, prilagodijo, tako da še vedno pravijo pravilno dolžino. {{ui:Nastavljeno ročno (merilo ali pripona)}} pomeni, da sta bila {{ui:Merilo mere}} ali pripona kote nastavljena drugače; izberite enoto, da ju zamenjate.

## Spremenite kote, ki ste jih že naredili

1. Kliknite eno koto. Glava desnega podokna bere {{ui:Kota}}.
2. Nastavitve so v razdelkih; pomaknite se po podoknu do poznejših:
   - {{ui:Splošno}}: {{ui:Slog kotiranja}}
   - {{ui:Geometrija}}: {{ui:Vrsta}} in {{ui:Mera}} (samo za branje)
   - {{ui:Text}} (Besedilo): {{ui:Povozitev besedila}} in {{ui:Višina besedila}}
   - {{ui:Črte in puščice}}: {{ui:Velikost puščice}}
   - {{ui:Prileganje}}: {{ui:Skupno merilo}}
   - {{ui:Primarne enote}}: {{ui:Decimalke}}
3. Vnesite novo vrednost in pritisnite {{key:Enter}}.

Kota se takoj prerisa. Pri kotnih merah {{ui:Decimalke (°)}} nastavi decimalke kota.

:::note
Če je izbranih več kot ena kota, podokno prikaže vrstice, ki jih imajo skupne; vrednost, ki se med njimi razlikuje, je {{ui:Različno}}. Vrednost, ki jo vnesete, spremeni vsako izbrano koto v enem koraku, zato en {{key:Mod+Z}} vse vrne nazaj.
:::

## Kote iz odprtih risb

Kota iz odprte datoteke DWG ali DXF je prikazana točno tako, kot jo je narisal drugi program. Njeno podokno pravi „Prikazano, kot jo je narisal program, ki jo je ustvaril. Če jo spremenite, CadCraft jo nariše znova v svojem slogu.“ Takoj ko spremenite katero koli vrednost, premaknete ročico ali premaknete koto, jo CadCraft prerisa s svojimi puščicami in pisavo, z velikostmi, ki jih je prebral iz datoteke.

Nekatere kote je mogoče prebrati samo kot narisane, ne kot urejljive kote; podokno nato pokaže „Narisano iz“ in ime bloka, okno „O tej datoteki“ pa jih šteje.

## Pogoste napake

- **Sprememba DIMSCALE ni ničesar spremenila na zaslonu.** Nastavitev velja za nove kote. Izberite obstoječe in spremenite {{ui:Skupno merilo}} v podoknu.
- **Decimalke kažejo manj številk, kot ste nastavili.** Končne ničle se izpustijo: pri 2 decimalkah se prikaže `1250` in `1250.5`, ne `1250.00`.
- **Besedilo je na papirju v pogledu prave višine, v izrisu modela pa napačno.** Skupno merilo se mora ujemati z merilom, pri katerem izrisujete. Izris z možnostjo Prilagodi papirju da nenavadno merilo; izberite standardno merilo v pogovornem oknu za izris.
- **Enote, kot sta mm ali m, v besedilu.** Izberite {{ui:Enote v besedilu}} (glejte [Kote v mm, cm, m ali km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Za katero koli drugo besedo za številko jo vnesite v povozitev: `<> TYP.`.

## Imenovani slogi kotiranja

Vnesite `DIMSTYLE` (`D`), da odprete {{ui:Upravitelj slogov kotiranja}}. Našteva sloge risbe, koliko kot uporablja vsak in kateri je trenutni. **Standard** je vedno na voljo.

- {{ui:Nastavi kot trenutno}}: nove kote uporabijo nastavitve tega sloga in prevzamejo njegovo ime.
- {{ui:Novo…}}: nov slog, ki se začne kot kopija tistega, ki ga izberete.
- {{ui:Spremeni…}}: ista polja kot razdelek kote v {{ui:Lastnosti}} (črte in puščice, besedilo, prileganje, enote, alternativne enote, tolerance). Pritisnite {{ui:V redu}} in slog se spremeni **in vsaka kota, ki ga uporablja, se spremeni z njim**, nastavitev za nastavitvijo. Nastavitev, ki ste jo spremenili samo na eni koti, ostane, kakršna je, razen če jo slog spremeni.
- {{ui:Preimenuj…}} in {{ui:Izbriši}}: Standarda ni mogoče preimenovati ali izbrisati, prav tako ni mogoče trenutnega sloga ali sloga, ki ga kote uporabljajo.
- {{ui:Primerjaj…}}: kaj se razlikuje med dvema slogoma.
- {{ui:Uporabi za izbrane}}: najprej izberite kote; prevzamejo nastavitve sloga in njegovo ime.

`-DIMSTYLE` naredi enako v ukazni vrstici: `Restore`, `Save` (trenutne nastavitve, vključno z vnosi z {{cmd:DIMTXT}} in drugimi, pod imenom), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Slogi so shranjeni v datoteki DWG ali DXF (v njeni tabeli slogov kotiranja) in se preberejo iz datotek, ki jih odprete. *Trenutni* slog se ne shrani: risba se odpre s trenutnim slogom Standard. Standard ohrani svoje nastavitve, medtem ko je drug slog trenutni.

## Spremenite besedilo kote in pomožne črte

{{cmd:DIMEDIT}} (`DED`) deluje na kotah, ki jih izberete: **Domov** vrne besedilo tja, kamor ga postavi slog, **Novo** vnese drugo besedilo (`<>` pomeni izmerjeno vrednost), **Zasukaj** zasuče besedilo, **Poševno** nagne pomožne črte linearnih in poravnanih kot pod kotom, ki ga vnesete (pritisnite {{key:Enter}} za nobenega). {{cmd:DIMTEDIT}} premakne besedilo na **levo**, **desno** ali **sredino** merilne črte ali ga zasuče (**kot**) ali pošlje **Domov**. Besedilo je vedno na merilni črti: ne more se povleči na prosto mesto.
