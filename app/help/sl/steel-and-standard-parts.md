---
title: Postavitev jeklenih profilov in standardnih delov
summary: Narišite jeklene profile, poglede in 3D elemente iz objavljenih tabel profilov, postavite vijake, matice, podložke, zatiče, ležaje, pera in zobnike po standardih ter jih navedite v seznamu delov.
keywords: jeklo, prerez, profil, oblika, profil W, široka prirobnica, I-nosilec, C-profil, kotnik, HSS, cev, pipe, IPE, HEA, HEB, UPN, nosilec, steber, element, pogled, AISC, EN 10365, vijak, matica, podložka, zatič, ležaj, pero, utor za pero, zobnik, ISO 4017, ISO 4014, ISO 4032, ISO 7089, ISO 2338, ISO 15, DIN 6885, ASME, standardni deli, seznam delov, kosovnica, bom, steelmember, partslist
from: 547c1048
---

Zavihek {{ui:Standardno}} v knjižnici ima dve vrsti elementov, ustvarjenih kar tu iz objavljenih tabel (nič se ne prenese):

- **Jekleni profili**: 1,335 velikosti. W, S, C, L, HSS in Pipe iz baze podatkov oblik AISC v16.0; IPE, HEA, HEB in UPN iz EN 10365:2017. DetailCraft uporablja enako tabelo.
- **Standardni deli**: vijaki s šestrobo glavo (ISO 4017), šestrobi vijaki (ISO 4014), šestrobe matice (ISO 4032), ploščate podložke (ISO 7089), palčni šestrobi vijaki in matice (ASME B18.2.1 in B18.2.2), vzporedni zatiči (ISO 2338), kroglični ležaji z globokim utorom (ISO 15), vzporedna pera (DIN 6885-1) in ravni zobniki (moduli iz ISO 54).

Vse tukaj je deljeno pod CC0: uporabite za karkoli, navedba avtorja ni potrebna.

## Postavite jekleni profil

1. Odprite knjižnico ({{ui:Knjižnica}} v skupini Bloki, ali vnesite `LIB`) in kliknite zavihek {{ui:Standardno}}.
2. Izberite družino na prvem seznamu, na primer {{ui:Profili W}}. V iskalno polje vnesite, da zožite velikosti: `W12` prikaže vse W12.
3. V {{ui:Postavi kot}} izberite:
   - {{ui:Prerez}}: prečni prerez, s središčem v vstavitveni točki.
   - {{ui:Višina}}: element, viden z boka, dolg toliko, kot navaja {{ui:Dolžina (mm)}}, od sredine svojega levega konca.
   - {{ui:3D element}}: telo na zavihku 3D (spodaj).
4. Kliknite {{ui:Postavi}} na kartici velikosti, nato kliknite, kamor naj gre, kot pri katerem koli elementu knjižnice.

Prerez ali pogled postane blok. Njegovi atributi nosijo velikost, tabelo, iz katere izvira, dolžino (za pogled) in material, ki ga lahko vnesete.

:::note
S profili, C-profili in UPN so narisani z vzporednimi prirobnicami povprečne debeline, kotniki pa s pravokotnimi vogali: prave prirobnice so nagnjene, vogali zaobljeni. W, IPE, HEA in HEB imajo zaobljene prehode korena, HSS pa polmere vogalov.
:::

## Ustvarite 3D element

Izberite {{ui:3D element}} in kliknite {{ui:Postavi}}, ali v ukazni vrstici vnesite {{cmd:STEELMEMBER}} (`SMEMBER`):

1. Pri `Velikost prereza` pritisnite {{key:Enter}} za prikazano velikost ali vnesite drugo, na primer `HSS6x6x1/4` ali `IPE300`.
2. Kliknite začetno točko, nato končno točko. Element poteka med njima in stoji na tleh.
3. Za steber vnesite `Steber (C)`, kliknite njegovo bazno točko in vnesite njegovo višino.

Element je zaprto telo na zavihku 3D. Premaknite ga ali kopirajte tam kot katero koli drugo telo. {{key:Mod+Z}} ga spet odstrani.

## Postavite standardni del

1. Na zavihku {{ui:Standardno}} izberite družino, na primer {{ui:Vijaki s šestrobo glavo}}.
2. Za vijak, zatič ali pero vnesite {{ui:Dolžina (mm)}} (palce pri palčnih družinah). Za zobnik vnesite {{ui:Zobje}}, {{ui:Širina zoba (mm)}} in {{ui:Izvrtina (mm)}}. Polje pustite prazno za običajno vrednost, prikazano v njem.
3. Kliknite {{ui:Postavi}} na velikosti in kliknite, kamor naj gre.

Vijaki in zatiči so narisani z boka, pri čemer je naležna ploskev glave v vstavitveni točki; matice, podložke, ležaji in zobniki so narisani od spredaj; pera od zgoraj. Navoji so narisani običajno: koren kot tanka črta, konec navoja kot debela. Zobniki so narisani kot krog vrha, delilni krog in krog korena, ne zob za zobom.

Blok vsakega dela nosi kot atribute svojo vrsto, standard, velikost, dolžino in material, njegovo težo pa iz nazivne oblike v jeklu. Material spremenite v podoknu {{ui:Lastnosti}}.

Isti deli so v knjižnici tudi kot elementi, PartCraft pa jih odpre kot parametrične dele ({{ui:Standardni del}} v skupini Datoteka).

## Ustvarite seznam delov

- V knjižnici kliknite {{ui:Seznam delov}}: vsak standardni del in jekleni profil v risbi, razvrščeni po vrsti, standardu, velikosti, dolžini in materialu, s količino in številkami postavk. {{ui:Prenesi CSV}} ga shrani za preglednico.
- Za risanje vnesite {{cmd:PARTSLIST}} (`PLIST`), kliknite zgornji levi kot tabele in pritisnite {{key:Enter}} za običajno višino besedila ali vnesite svojo.

Seznam se prebere iz atributov blokov, zato je še vedno pravilen tudi potem, ko risbo shranite kot DWG ali DXF in jo znova odprete.

## Pogoste napake

- **„Noben jekleni profil ni imenovan …“**: vnesite velikost tako, kot jo navaja zavihek {{ui:Standardno}}: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Element je na zavihku 3D, ne v tlorisu.** {{cmd:STEELMEMBER}} ustvari telo; odprite zavihek 3D, da ga vidite. Za prikaz jekla v tlorisu postavite tudi {{ui:Prerez}} ali {{ui:Višina}}.
- **Dolžina je izven območja.** Vijak mora biti daljši od glave, pero pa mora biti daljše, kot je široko. Vrstica pod karticami pove, katera vrednost je bila zavrnjena.
