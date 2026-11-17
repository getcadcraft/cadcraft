---
title: "Angiv målsætningsstørrelser, decimaler og skala"
summary: "Vælg teksthøjde, pilestørrelse, decimaler og samlet skala for nye målsætninger, ændr eksisterende, og forstå hvordan målsætningsstile virker i CadCraft."
keywords: målsætningsstil, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, samlet skala, decimaler, pilestørrelse, annoteringsskala, dimtextunit, enheder i teksten, mm, cm, m, km, millimeter, meter, dimlfac, dimpost
from: 8ec82a07
---

## Hvad du lærer

Hvor store målsætningstekst og pile er, hvordan du sætter dem for en tegning, der plottes i 1:50 eller 1:100, og hvordan du ændrer målsætninger, du allerede har lavet.

## Hvordan målsætningsstørrelser virker

Hver målsætning bærer sit eget sæt størrelser: teksthøjde, pilestørrelse, decimaler, mellemrummet omkring teksten, hvor langt målhjælpelinjer går ud over målelinjen, og hvor langt de starter fra objektet. Standarderne ligger tæt på den almindelige ISO-stil:

| Indstilling | Standard | Kommando |
|---|---|---|
| Teksthøjde | 2.5 | {{cmd:DIMTXT}} |
| Pilestørrelse | 2.5 | {{cmd:DIMASZ}} |
| Decimaler | 2 (efterfølgende nuller fjernes) | {{cmd:DIMDEC}} |
| Mellemrum omkring teksten | 0.625 | {{cmd:DIMGAP}} |
| Forlængelse ud over målelinjen | 1.25 | {{cmd:DIMEXE}} |
| Forskydning fra objektet | 0.625 | {{cmd:DIMEXO}} |
| Samlet skala | 1 | {{cmd:DIMSCALE}} |

Hver størrelse ganges med den **samlede skala**. Sæt størrelserne, som du vil have dem på papir (2.5 mm tekst), og sæt den samlede skala til plotskalaen (50 for 1:50). Teksten er så 2.5 × 50 = 125 tegningsenheder høj, og den plottes med 2.5 mm.

:::note
Navngivne målsætningsstile håndteres med {{cmd:DIMSTYLE}}: se afsnittet nedenfor. Hver målsætning bevarer også de indstillinger, den blev lavet med, så du stadig kan ændre én målsætning alene i {{ui:Egenskaber}}.
:::

## Angiv størrelserne for nye målsætninger

Begge måder nedenfor ændrer kun målsætninger, du laver bagefter.

### I panelet Aktuelle indstillinger

1. Tryk {{key:Esc}}, så intet er valgt. På fanen {{ui:Model}} står der {{ui:Aktuelle indstillinger}} i højre panel.
2. Rul ned i panelet til {{ui:Nye målsætninger}}, forbi rækkerne for lag, farve, enheder og {{ui:Lag 0}} (på en lille skærm starter den under kanten). Klik i {{ui:Samlet skala}}, skriv `50` og tryk {{key:Enter}}.
3. Sæt {{ui:Teksthøjde}}, {{ui:Pilestørrelse}} og {{ui:Decimaler}} på samme måde, hvis du vil have andre værdier.

Statuslinjen bekræfter hver enkelt, for eksempel »Samlet skala for nye målsætninger: 50«.

### Ved kommandolinjen

1. Skriv `DIMSCALE` og tryk {{key:Enter}}.
2. Ved `Enter new value for DIMSCALE <1>` skriver du `50` og trykker {{key:Enter}}.

Historikken bekræfter »DIMSCALE = 50. Nye målsætninger bruger den; vælg eksisterende for at ændre deres.« {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} og {{cmd:DIMEXO}} virker på samme måde. Tryk {{key:Enter}} ved ledeteksten for at beholde den nuværende værdi.

### Fod og tommer i målsætninger

Nye målsætninger bruger tegningens længdeformat: sæt det med {{ui:Længdeformat}} i {{ui:Aktuelle indstillinger}} eller {{cmd:UNITS}} (se [Fod og tommer](topic:units-papers-scales#feet-and-inches-and-fractions)), og den næste målsætning læser `12'-6 1/2"`. {{cmd:DIMLUNIT}} sætter kun målsætningernes format (2 decimal, 3 ingeniør, 4 arkitekt, 5 brøk). For en målsætning, du allerede har lavet, vælg den og vælg {{ui:Format}} i {{ui:Egenskaber}}; med et brøkformat tager dens {{ui:Brøk}}-boks potensen af to (4 = 1/16).

## Målsætninger i mm, cm, m eller km

En målsætning måler i tegningsenheder. Den kan skrive længden i millimeter, centimeter, meter eller kilometer i stedet, med enheden efter tallet: en væg på 1250 mm læses `1250 mm`, `125 cm`, `1.25 m` eller `0.00125 km`.

1. Sæt først tegningens {{ui:Enheder}} i {{ui:Aktuelle indstillinger}} (se [Enheder, papirstørrelser og skalaer](topic:units-papers-scales#drawing-units)), så CadCraft ved, hvad en tegningsenhed er. En tegning uden enheder læses som millimeter, og {{cmd:DIMTEXTUNIT}} siger det.
2. For nye målsætninger: tryk {{key:Esc}}, så intet er valgt, og under {{ui:Nye målsætninger}} vælg {{ui:Enheder i teksten}}: {{ui:Tegningsenheder}}, `mm`, `cm`, `m` eller `km`.
3. For målsætninger, du allerede har lavet: vælg dem, og i {{ui:Egenskaber}} › {{ui:Primære enheder}} vælg {{ui:Enheder i teksten}}.

Eller skriv {{cmd:DIMTEXTUNIT}} (`DTU`) og svar `D`, `MM`, `CM`, `M` eller `KM`: med målsætninger valgt ændrer det dem (ét trin i fortryd), uden valg sætter det nye målsætninger.

{{ui:Decimaler}} ({{cmd:DIMDEC}}) bestemmer stadig, hvor mange decimaler der vises: med meter og 3 decimaler læses 1234 mm som `1.234 m`. Teksten skrives som et decimaltal. På et ark måles målsætninger i arkets papirenhed (millimeter eller tommer).

En gemt DWG eller DXF bevarer valget som målsætningens målskala (DIMLFAC) og et suffiks (DIMPOST, ` m`), så andre programmer viser den samme tekst. Ændrer du tegningens {{ui:Enheder}} senere, tilpasses målsætninger skrevet i mm, cm, m eller km igen, så de stadig siger den rigtige længde. {{ui:Angivet i hånden (skala eller suffiks)}} betyder, at målsætningens {{ui:Målskala}} eller suffiks blev sat på en anden måde; vælg en enhed for at erstatte dem.

## Ændr målsætninger, du allerede har lavet

1. Klik på én målsætning. Overskriften i højre panel lyder {{ui:Målsætning}}.
2. Indstillingerne står i sektioner; rul ned i panelet for at nå de senere:
   - {{ui:Generelt}}: {{ui:Målsætningsstil}}
   - {{ui:Geometri}}: {{ui:Art}} og {{ui:Måling}} (kun læsning)
   - {{ui:Tekst}}: {{ui:Tekst i stedet for måling}} og {{ui:Teksthøjde}}
   - {{ui:Linjer og pile}}: {{ui:Pilestørrelse}}
   - {{ui:Tilpasning}}: {{ui:Samlet skala}}
   - {{ui:Primære enheder}}: {{ui:Decimaler}}
3. Skriv en ny værdi og tryk {{key:Enter}}.

Målsætningen tegnes straks om. For vinkelmålsætninger sætter {{ui:Decimaler (°)}} vinklens decimaler.

:::note
Med flere målsætninger valgt viser panelet de rækker, de har tilfælles, og en værdi, der er forskellig mellem dem, står som {{ui:Varierer}}. En værdi, du skriver, ændrer alle valgte målsætninger i ét trin, så ét {{key:Mod+Z}} sætter dem alle tilbage.
:::

## Målsætninger fra åbnede tegninger

En målsætning fra en åbnet DWG eller DXF vises præcis, som det andet program tegnede den. Dens panel siger »Vist, som det program der lavede den, tegnede den. Ændr den, og CadCraft tegner den igen i sin egen stil.« Så snart du ændrer en værdi, flytter et greb eller flytter målsætningen, tegner CadCraft den igen med sine egne pilespidser og skrifttype, med de størrelser den læste fra filen.

Nogle målsætninger kan kun læses, som de er tegnet, ikke som redigerbare målsætninger; panelet viser så »Tegnet fra« og et blocknavn, og boksen {{ui:Om denne fil}} tæller dem.

## Almindelige fejl

- **Ændring af DIMSCALE ændrede intet på skærmen.** Indstillingen gælder nye målsætninger. Vælg de eksisterende og ændr {{ui:Samlet skala}} i panelet.
- **Decimaler viser færre cifre end sat.** Efterfølgende nuller fjernes: med 2 decimaler vises `1250` og `1250.5`, ikke `1250.00`.
- **Teksten har den rigtige højde på papir i en viewport, men er forkert i et modelplot.** Den samlede skala skal matche den skala, du plotter med. Plot med Tilpas til papir giver en mærkelig skala; vælg en standardskala i plotdialogen.
- **Enheder som mm eller m i teksten.** Vælg {{ui:Enheder i teksten}} (se [Målsætninger i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). For et andet ord efter tallet, skriv det i en tekstoverskrivning: `<> TYP.`.

## Navngivne målsætningsstile

Skriv `DIMSTYLE` (`D`) for at åbne {{ui:Målsætningsstilsadministrator}}. Den viser tegningens stile, hvor mange målsætninger hver bruger, og hvilken der er aktuel. **Standard** findes altid.

- {{ui:Gør aktuel}}: nye målsætninger bruger den stils indstillinger og bærer dens navn.
- {{ui:Ny…}}: en ny stil, der starter som en kopi af en, du vælger.
- {{ui:Redigér…}}: de samme felter som målsætningsafsnittet i {{ui:Egenskaber}} (linjer og pile, tekst, tilpasning, enheder, alternative enheder, tolerancer). Tryk {{ui:OK}}, og stilen ændres, **og hver målsætning, der bruger den, ændres med den**, indstilling for indstilling. En indstilling, du ændrede på én målsætning alene, bliver, som den er, medmindre stilen ændrede den indstilling.
- {{ui:Omdøb…}} og {{ui:Slet}}: Standard kan ikke omdøbes eller slettes, og heller ikke den aktuelle stil eller en stil, målsætninger bruger.
- {{ui:Sammenlign…}}: hvad der er forskelligt mellem to stile.
- {{ui:Anvend på valgte}}: vælg målsætninger først; de tager stilens indstillinger og dens navn.

`-DIMSTYLE` gør det samme på kommandolinjen: `Restore`, `Save` (de aktuelle indstillinger, inklusive det du skrev med {{cmd:DIMTXT}} og de andre, under et navn), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Stilene gemmes i en DWG eller DXF (dens målsætningsstiltabel) og læses fra de filer, du åbner. Den *aktuelle* stil gemmes ikke: en tegning åbnes med Standard som aktuel. Standard beholder sine egne indstillinger, mens en anden stil er aktuel.

## Ændr målsætningstekst og målhjælpelinjer

{{cmd:DIMEDIT}} (`DED`) virker på de målsætninger, du vælger: **Home** sætter teksten tilbage, hvor stilen placerer den, **New** skriver anden tekst (`<>` står for målingen), **Rotate** drejer teksten, **Oblique** skråstiller målhjælpelinjerne for lineære og justerede målsætninger til en vinkel, du skriver (tryk {{key:Enter}} for ingen). {{cmd:DIMTEDIT}} flytter teksten til **Left**, **Right** eller **Center** af målelinjen, eller drejer den (**Angle**), eller sender den **Home**. Teksten sidder altid på målelinjen: den kan ikke trækkes til et frit sted.
