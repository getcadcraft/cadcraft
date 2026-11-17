---
title: Splajny a lomené čiary: SPLINE, SPLINEDIT, PEDIT
summary: Nakreslite hladkú krivku cez body alebo z riadiaceho mnohouholníka, upravte jej interpolačné a riadiace body a upravte lomené čiary (spojiť, uzavrieť, šírka, vyhladiť, splajn, zrušiť zakrivenie) alebo premeňte splajn na lomenú čiaru.
keywords: splajn, splinedit, spl, spe, pedit, pe, interpolačné body, riadiace body, váhy, nurbs, úprava lomenej čiary, spojiť, interpolovaná krivka, zrušiť zakrivenie, previesť na lomenú čiaru, presnosť, dotyčnica, krivka, tolerancia interpolácie
from: d31f72d8
---

## Čo vytvoríte

Krivku cez päť bodov, potom tú istú krivku upravenú troma spôsobmi a lomenú čiaru zostavenú z troch čiar.

## Nakreslenie splajnu cez body

1. Napíšte `SPL` a stlačte {{key:Enter}}.
2. Kliknite alebo napíšte body, cez ktoré má krivka prechádzať: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Za posledným stlačte {{key:Enter}}.
3. {{ui:Začiatočná dotyčnica}}: kliknite na bod, smerom ku ktorému má krivka vychádzať, alebo stlačte {{key:Enter}}, aby o tom rozhodol program. Rovnako urobte koncovú dotyčnicu.

Krivka prechádza každým bodom. Namiesto {{key:Enter}} napíšte `C`, aby ste ju uzavreli (krivka sa vráti k prvému bodu). {{key:U}} (späť) vráti posledný bod späť, kým kreslíte.

### Nakreslenie z riadiaceho mnohouholníka

Na prvej výzve napíšte `M`, potom `C` (Riadiace vrcholy) a stupeň od 1 do 5 (3 je obvyklý). Body, ktoré vyberiete, sú teraz rohy mnohouholníka, ktorý ťahá krivku smerom k sebe; krivka začína na prvom a končí na poslednom. Uzavretá krivka sa obopína dookola bez rohu na spoji.

### Premena lomenej čiary na splajn

Na prvej výzve napíšte `O` (Objekt) a vyberte lomené čiary alebo čiary. Stanú sa splajnmi cez svoje vrcholy; pôvodné zmiznú.

## Úprava splajnu

Vyberte ho a napíšte `SPE` (alebo napíšte `SPE` a kliknite naň). Úchyty zobrazujú interpolačné body (alebo riadiace body splajnu, ktorý ich nemá): potiahnutím jedného zmeníte tvar krivky. Na výzve:

- **Údaje interpolácie** (splajn nakreslený cez body): `A` pridá interpolačný bod (kliknite, kam), `D` ho zmaže (kliknite blízko neho), `M` ho presunie (kliknite blízko neho a potom na nové miesto), `T` nastaví koncové dotyčnice, `P` vymaže interpolačné body, takže sa splajn odteraz upravuje cez svoje riadiace body.
- **Úprava vrcholu**: `A` pridá riadiaci bod bez zmeny krivky, `M` presunie jeden, `W` mu dá **váhu** (nad 1 pritiahne krivku bližšie k nemu, pod 1 ju pustí).
- **Otvoriť** alebo **Uzavrieť**, a **Obrátiť** (krivka beží opačným smerom).
- **Previesť na lomenú čiaru** (`P`): splajn sa stane lomenou čiarou; presnosť je počet segmentov, ktoré dostane každý úsek (10 je obvyklé).
- **Späť (U)** vráti posledný krok späť; **Koniec (X)** ukončí.

{{ui:Vlastnosti}} zobrazí stupeň splajnu, koľko interpolačných a riadiacich bodov má, jeho dĺžku a umožní ho otvoriť alebo uzavrieť.

## Úprava lomenej čiary

Vyberte lomenú čiaru a napíšte `PE`. Čiara, oblúk alebo splajn, ktorý vyberiete, sa najprv ponúkne ako lomená čiara na premenu (splajn si vyžiada presnosť).

- **Uzavrieť** / **Otvoriť** spojí alebo oddelí konce.
- **Spojiť** pridá čiary, oblúky a lomené čiary, ktorých konce sa stretávajú s koncom lomenej čiary. `Vzdialenosť tolerancie` (Fuzz distance) je, ako ďaleko od seba môžu byť konce a stále sa spojiť (0 znamená, že sa musia stretnúť).
- **Šírka** dá celej lomenej čiare jednu šírku (0 ju odstráni).
- **Vyhladiť** nahradí lomenú čiaru hladkou krivkou, ktorá prechádza jej vrcholmi; **Splajn** kubickým B-splajnom, ktorý ich sleduje (začína a končí na prvom a poslednom vrchole a drží sa blízko ostatných). Obe sa stanú lomenou čiarou z krátkych segmentov a pôvodné rohy sa zachovajú, takže **Zrušiť zakrivenie** ich vráti.
- **Gen. typu čiary** (Ltype gen) hovorí, či čiarkovaný typ čiary beží po celej lomenej čiare, alebo sa začne znova pri každom vrchole.
- **Obrátiť** zmení poradie jej vrcholov. **Viac** (`M` na prvej výzve) upraví viac lomených čiar s rovnakými možnosťami.

Úprava vrcholov lomenej čiary v {{ui:Vlastnosti}} alebo úchytmi zostáva taká, aká bola: PEDIT nemá editor vrcholov.

## V súboroch

DWG a DXF 2000 uchovajú splajn ako splajn: stupeň, riadiace body, uzly, váhy, interpolačné body a dotyčnice. Splajn, ktorý otvoríte a nezmeníte, sa zapíše späť presne tak, ako prišiel. DXF R12 splajn nepozná: uloží sa ako lomená čiara pozdĺž krivky a história uvedie, koľko ich bolo.

Odsadenie, orezanie, predĺženie, zaoblenie, prerušenie a spojenie na splajnoch nefungujú. Použite {{cmd:EXPLODE}} na splajn alebo {{cmd:PEDIT}}, aby ste dostali lomenú čiaru, s ktorou tieto príkazy pracujú.

## Časté chyby

- **Krivka medzi blízkymi bodmi presahuje.** Krivka cez body sa prehýba tam, kde sa prehýbajú body. Použite menej bodov alebo riadiaci mnohouholník.
- **"Toto nie je splajn."** SPLINEDIT berie len splajny; {{cmd:PEDIT}} upravuje lomené čiary.
- **Uzavretý splajn s interpoláciou má v inom programe mierne iný tvar.** CadCraft ho uzavrie jedným hladkým spojom v prvom bode; iný program ho môže uzavrieť periodickou krivkou. Uzavretý splajn s riadiacimi bodmi je v oboch rovnaký.
