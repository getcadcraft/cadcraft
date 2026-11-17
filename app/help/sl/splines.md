---
title: Zlepki in polilinije: SPLINE, SPLINEDIT, PEDIT
summary: Narišite gladko krivuljo skozi točke ali iz kontrolnega poligona, uredite njeno prileganje in kontrolne točke ter urejajte polilinije (združi, zapri, širina, prilagodi, zlepek, odkrivi) ali spremenite zlepek v polilinijo.
keywords: zlepek, splinedit, spl, spe, pedit, pe, točke prileganja, kontrolne točke, uteži, nurbs, urejanje polilinij, združi, prilegajoča krivulja, decurve, pretvori v polilinijo, natančnost, tangenta, krivulja, toleranca prileganja
from: d31f72d8
---

## Kaj boste naredili

Krivuljo skozi pet točk, nato isto krivuljo urejeno na tri načine in polilinijo iz treh črt.

## Narišite zlepek skozi točke

1. Vnesite `SPL` in pritisnite {{key:Enter}}.
2. Kliknite ali vnesite točke, skozi katere naj krivulja poteka: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Za zadnjo pritisnite {{key:Enter}}.
3. {{ui:Začetna tangenta}}: kliknite točko, proti kateri naj krivulja odhaja, ali pritisnite {{key:Enter}}, da se odloči sama. Enako storite za končno tangento.

Krivulja poteka skozi vsako točko. Namesto {{key:Enter}} vnesite `C`, da jo zaprete (krivulja se vrne k prvi točki). {{key:U}} (`Razveljavi`) odstrani zadnjo točko med risanjem.

### Narišite zlepek iz kontrolnega poligona

Pri prvem pozivu vnesite `M`, nato `Kontrolna oglišča (C)` in stopnjo od 1 do 5 (običajno 3). Zdaj so izbrane točke vogali mnogokotnika, ki krivuljo vleče proti sebi; krivulja se začne pri prvi in konča pri zadnji. Zaprt zlepek se ovije okoli, brez vogala na stiku.

### Polilinijo spremenite v zlepek

Pri prvem pozivu vnesite `Objekt` in izberite polilinije ali črte. Postanejo zlepki skozi svoja oglišča; izvirniki izginejo.

## Uredite zlepek

Izberite ga in vnesite `SPE` (ali vnesite `SPE` in ga kliknite). Ročice prikažejo točke prileganja (ali kontrolne točke zlepka, ki jih nima): povlecite eno, da preoblikujete krivuljo. Pri pozivu:

- **Podatki o prileganju** (zlepek, narisan skozi točke): `Dodaj (A)` doda točko prileganja (kliknite, kjer naj bo), `Izbriši (D)` izbriše eno (kliknite blizu nje), `Premakni (M)` premakne eno (kliknite blizu nje, nato kliknite na novo mesto), `Tangente` nastavi končni tangenti, `Počisti` odstrani točke prileganja, tako da se zlepek od takrat ureja s kontrolnimi točkami.
- **Uredi oglišče**: `Dodaj (A)` doda kontrolno točko, ne da bi spremenil krivuljo, `Premakni (M)` premakne eno, `Utež (W)` da eni **utež** (nad 1 krivuljo potegne bliže, pod 1 jo spusti).
- **Odpri** ali **Zapri**, in **Obrni** (krivulja teče v drugo smer).
- **pretvori v polilinijo** (`Polilinija`): zlepek postane polilinija; natančnost je število segmentov na vsak razpon (običajno 10).
- **Razveljavi (U)** odstrani zadnjo spremembo; **Izhod (X)** konča.

{{ui:Lastnosti}} prikaže stopnjo zlepka, koliko točk prileganja in kontrolnih točk ima, njegovo dolžino ter omogoča, da ga odprete ali zaprete.

## Uredite polilinijo

Izberite polilinijo in vnesite `PE`. Črta, lok ali zlepek, ki ga izberete, se najprej ponudi kot polilinija, v katero se pretvori (zlepek zahteva natančnost).

- **Zapri** / **Odpri** združi ali loči konca.
- **Združi** doda črte, loke in polilinije, katerih konci se stikajo s koncem polilinije. `Fuzz distance` je, kako narazen smeta biti konca, pa se še vedno združita (0 pomeni, da se morata stikati).
- **Širina** nastavi eno širino za celotno polilinijo (0 jo odstrani).
- **Prilagodi** nadomesti polilinijo z gladko krivuljo, ki poteka skozi njena oglišča; **Zlepek** pa s kubičnim B-zlepkom, ki jim sledi (začne in konča se pri prvem in zadnjem oglišču ter ostane blizu drugih). Obe postaneta polilinija kratkih segmentov, izvirni vogali pa se ohranijo, zato **Decurve** vrne.
- **Ltype gen** pove, ali črtkasta vrsta črte teče po celotni poliliniji ali se na vsakem oglišču začne znova.
- **Obrni** spremeni vrstni red njenih oglišč. **Več** (`Več (M)` pri prvem pozivu) ureja več polilinij z enakimi možnostmi.

Urejanje oglišč polilinije v {{ui:Lastnosti}} ali z ročicami ostane takšno, kot je bilo: PEDIT nima urejevalnika oglišč.

## V datotekah

DWG in DXF 2000 ohranjata zlepek kot zlepek: stopnjo, kontrolne točke, vozle, uteži, točke prileganja in tangente. Zlepek, ki ga odprete in ne spremenite, se zapiše natanko tako, kot je bil. DXF R12 zlepka nima: shrani se kot polilinija vzdolž krivulje, zgodovina pa pove, koliko segmentov.

Odmik, prirezovanje, podaljševanje, zaobljanje, prekinitev in združevanje na zlepkih ne delujejo. Zlepek razstavite z {{cmd:EXPLODE}} ali ga obdelajte s {{cmd:PEDIT}}, da dobite polilinijo, ki jo ti ukazi sprejmejo.

## Pogoste napake

- **Krivulja med tesno si ležečimi točkami preveč zaniha.** Krivulja skozi točke se ukrivi tam, kjer se ukrivijo točke. Uporabite manj točk ali kontrolni poligon.
- **„To ni zlepek.“** SPLINEDIT sprejme samo zlepke; {{cmd:PEDIT}} ureja polilinije.
- **Zaprt zlepek s prileganjem ima v drugem programu nekoliko drugačno obliko.** CadCraft ga zapre z eno gladko spojitvijo pri prvi točki; drug program ga lahko zapre s periodično krivuljo. Zaprt zlepek s kontrolnimi točkami je v obeh enak.
