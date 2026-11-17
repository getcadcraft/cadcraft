---
title: Apkarpyti ir pratęsti
summary: Apkarpykite linijas iki vietos, kur jas kerta kitos, ir pailginkite jas, kad susijungtų su kitomis – po vieną gabalėlį arba daug iš karto, vilkdami kelią per jas.
keywords: trimextendmode, lango vilkimas, apkarpyti, pratęsti, tr, ex, greitas apkarpymas, vilkimas, laisva ranka, kelias, tvora, kirtimas, shift, pjovimo briaunos, ribinės briaunos, edgemode, režimas, standartinis, greitas, ištrinti, peržiūra, sienos, valymas
from: 25fbc5bd
---

## Ką sužinosite

Kaip veikia {{cmd:TRIM}} ir {{cmd:EXTEND}} bei greiti būdai juos naudoti: vilkite per daug gabalėlių iš karto, laikykite {{key:Shift}}, kad perjungtumėte tarp apkarpymo ir pratęsimo, ir prieš spustelėdami matykite, kas bus pašalinta.

## Apkarpyti vieną gabalėlį

1. Nubrėžkite ilgą horizontalią liniją ir dvi trumpas linijas per ją.
2. Įveskite `TR` ir paspauskite {{key:Enter}}. Istorijoje rašoma: `Dabartiniai nustatymai: Greitas režimas, briaunos: be pratęsimo`.
3. Užveskite žymeklį ant ilgos linijos tarp dviejų trumpų. Ta atkarpa pažymima pilka ir brūkšniuota: ji bus pašalinta.
4. Spustelėkite. Gabalėlis dingsta.
5. Paspauskite {{key:Enter}}, kad baigtumėte komandą.

Greitajame režime (numatytasis) kiekvienas matomas objektas yra pjovimo briauna, todėl niekada nereikia pirma rinktis briaunų. Spustelėkite gabalėlį, kurį norite pašalinti. Objektas, kurio niekas nekerta, ištrinamas visas, ir istorijoje tai nurodoma.

## Apkarpyti daug gabalėlių vienu vilkimu

1. Nubrėžkite ilgą horizontalią liniją ir dešimt trumpų vertikalių linijų per ją.
2. Įveskite `TR` ir paspauskite {{key:Enter}}.
3. Paspauskite pelės mygtuką virš ilgos linijos, kairėje nuo pirmosios vertikalios linijos, ir vilkite per visas dešimt virš ilgos linijos.

Vilkdami kelias rodomas brūkšniuota linija, o kiekvienas jos kirstas gabalėlis pažymimas pilkai. Atleiskite: visi dešimt viršutinių gabalėlių apkarpomi vienu žingsniu. Įveskite `U` ir paspauskite {{key:Enter}}, kad jie visi grįžtų vienu kartu.

:::tip
Taip pat galite spustelėti du tuščius taškus: linija tarp jų veikia kaip vilkimo kelias. Vietoj to įveskite [Tvora (F)], kad spustelėtumėte taškų seką, tada paspauskite {{key:Enter}}.
:::

:::touch
Vilkite pirštu taip pat. Bakstelėjimas ant gabalėlio jį apkarpo.
:::

## Pratęsti vietoj to su Shift

1. Nubrėžkite vertikalią liniją ir penkias trumpas horizontalias linijas į kairę nuo jos, sustojančias prieš ją.
2. Įveskite `TR` ir paspauskite {{key:Enter}}.
3. Laikykite {{key:Shift}}. Užveskite žymeklį ant trumpos linijos: dalis, per kurią ji išaugtų, rodoma pilka ir brūkšniuota.
4. Vis dar laikydami {{key:Shift}}, vilkite žemyn per penkias trumpas linijas.

Dabar visos penkios eina iki vertikalios linijos. {{key:Shift}} veikia atvirkščiai {{cmd:EXTEND}} (`EX`) komandoje: spustelėjimas pratęsia, {{key:Shift}}+spustelėjimas apkarpo. Pratęsimas pailgina galą, esantį arčiausiai vietos, kur spustelėjote arba kur kelias kerta.

## Apkarpyti lange

1. Įveskite `TR` ir paspauskite {{key:Enter}}.
2. Įveskite `C` ir paspauskite {{key:Enter}}.
3. Spustelėkite du kampus aplink gabalėlius, kuriuos norite pašalinti.

Kiekvienas gabalėlis, bent iš dalies esantis lange, apkarpomas.

Norėdami gauti langą vien vilkimu, be `C` įvedimo: {{ui:Parametrai}} › {{ui:CadCraft}} › {{ui:Vilkimas apkarpant ir pratęsiant}} › {{ui:Langas}}. Tada paspaudę tuščioje vietoje ir vilkdami nubrėžiate dėžutę, o kiekvienas ją liečiantis gabalėlis apkarpomas (arba pratęsiamas {{cmd:EXTEND}} komandoje arba su {{key:Shift}}). {{ui:Kelias}} (pradžia) grąžina laisvos rankos kelią. Komandos TRIM pradžioje nurodyta eilutė parodo, kuris režimas įjungtas.

## Pasirinkti pjovimo briaunas (standartinis režimas)

Kartais turi pjauti tik viena linija, pavyzdžiui sienos paviršius, kurį kerta daug kitų linijų.

1. Įveskite `TR` ir paspauskite {{key:Enter}}.
2. Įveskite `O` (režimas) ir paspauskite {{key:Enter}}, tada įveskite `S` (Standartinis) ir paspauskite {{key:Enter}}.
3. Kai pasirodo `Pasirinkite pjovimo briaunas`, spustelėkite briaunų linijas (arba vilkite langą), tada paspauskite {{key:Enter}}. Paspaudus {{key:Enter}} nieko nepasirinkus, kiekvienas objektas tampa briauna.
4. Spustelėkite arba vilkite per gabalėlius, kuriuos norite pašalinti.

Pjauna tik pasirinktos briaunos, o objektas, kurio nekerta jokia briauna, paliekamas nepaliestas. Režimas išlieka, kol uždarote puslapį; įveskite `O`, tada `Q`, kad grįžtumėte į greitąjį. {{cmd:TRIMEXTENDMODE}} nustato jį prieš pradedant, kaip tokio pavadinimo kintamasis kitur: `0` standartinis, `1` greitas. `T` (pjovimo briaunos) pasirenka naujas briaunas bet kada; {{cmd:EXTEND}} komandoje tai `B` (ribinės briaunos).

## Briaunos, kurios pasiektų

1. Įveskite `TR` ir paspauskite {{key:Enter}}.
2. Įveskite [Briauna (E)] ir paspauskite {{key:Enter}}, tada [Pratęsti (E)] ir paspauskite {{key:Enter}}.

Dabar pjovimo linija ar lankas, kuris sustoja anksčiau, skaičiuojamas taip, lyg eitų toliau: trumpa linija pjauna ten, kur susikirstų, jei būtų ilgesnė. Įveskite `E`, tada [Be pratęsimo (N)], kad grįžtumėte. Tai tas pats kaip EDGEMODE 1 ir 0.

## Trinti nepaliekant

Įveskite [Trinti (R)] ir paspauskite {{key:Enter}}, pasirinkite objektus ištrynimui ir paspauskite {{key:Enter}}. TRIM tęsia darbą.

## Dažnos klaidos

- **Visa linija dingo.** Greitajame režime objektas, kurio niekas nekerta, ištrinamas. Įveskite `U`, kad jį grąžintumėte, arba perjunkite į standartinį režimą (`O`, `S`).
- **„Nėra ką apkarpyti: nė viena pasirinkta briauna nekerta to objekto.“** Standartinis režimas pjauna tik pasirinktose briaunose. Įveskite `T`, kad pasirinktumėte jas iš naujo.
- **„Toje kryptyje ribos nėra.“** Pratęsimas priekyje nieko nerado. Spustelėkite arčiau galo, kuris turėtų išaugti, arba įjunkite `E` (briauna, pratęsti) ribas, kurios sustoja anksčiau.
- **Vilkimas nupiešė laisvos rankos kontūrą.** Vilkimas apkarpo tik tada, kai TRIM ar EXTEND prašo objekto. Kai komanda neveikia, vilkimas pasirenka objektus (žr. [Laisvos rankos pasirinkimas](topic:lasso-selection)).
- **Apkarpyti galima tik linijas, lankus, apskritimus ir polilinijas.** Pirma suskaidykite bloką, kad apkarpytumėte jo linijas.
