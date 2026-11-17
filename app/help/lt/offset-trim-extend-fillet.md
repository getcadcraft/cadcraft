---
title: Poslinkis, apkarpymas, pratęsimas, suapvalinimas ir nuokirpimas sienoms
summary: Paverskite atskiras linijas dvigubomis sienomis su Poslinkis, sutvarkykite kampus su Suapvalinimas ir apkarpykite bei pratęskite linijas su Apkarpymas ir Pratęsimas.
keywords: poslinkis, apkarpymas, pratęsimas, suapvalinimas, nuokirpimas, nuožulna, offset, trim, extend, fillet, chamfer, bevel, break, breakatpoint, lengthen, pailginimas, sienos, kampas, pjovimas, lygiagretus, spindulys, valymas
from: c6c5cbd0
---

## Ką sukursite

Mažas kambarys su 200 storio sienomis: vidinis paviršius nubraižomas, išorinis gaunamas poslinkiu, kampai sutvarkomi, o viena siena prapjaunama durims.

## Nubraižykite vidinį paviršių

1. Įveskite `L` ir paspauskite {{key:Enter}}.
2. Įveskite `0,0` ir paspauskite {{key:Enter}}.
3. Įveskite `@5000,0` ir paspauskite {{key:Enter}}.
4. Įveskite `@0,4000` ir paspauskite {{key:Enter}}.
5. Įveskite `@-5000,0` ir paspauskite {{key:Enter}}.
6. Įveskite `C` ir paspauskite {{key:Enter}}.
7. Spustelėkite {{ui:Visas brėžinys}}.

Turite keturias atskiras linijas. (Uždara polilinija būtų poslinkinama vienu veiksmu; atskiros linijos parodo, kaip Suapvalinimas tvarko kampus.)

## Poslinkinkite išorinį paviršių

1. Įveskite `O` ir paspauskite {{key:Enter}}. Raginimas sako `Nurodykite poslinkio atstumą [Per (T)] <Per (T)>:`.
2. Įveskite `200` ir paspauskite {{key:Enter}}.
3. Prie `Pasirinkite poslinkiui objektą` spustelėkite apatinę liniją.
4. Prie `Nurodykite tašką poslinkio pusėje` spustelėkite bet kur žemiau jos. Atsiranda lygiagreti linija 200 žemiau.
5. Spustelėkite dešiniąją liniją, tada spustelėkite į jos dešinę.
6. Spustelėkite viršutinę liniją, tada spustelėkite virš jos.
7. Spustelėkite kairiąją liniją, tada spustelėkite į jos kairę.
8. Paspauskite {{key:Enter}}, kad užbaigtumėte komandą.

Turėtumėte matyti keturias išorines linijas, kiekviena tokio pat ilgio kaip jos vidinė linija, todėl išoriniai kampai nesusitinka.

:::tip
Prie atstumo raginimo paspauskite {{key:Enter}}, kad vėl panaudotumėte paskutinį atstumą. Įveskite `T` (Per): tada kiekviena kopija eina per tašką, kurį spustelėjate, koks bebūtų atstumas.
:::

{{cmd:OFFSET}} veikia su linijomis, lankais, apskritimais ir polilinijomis. Uždaros polilinijos poslinkis perkelia visą kontūrą, įskaitant kampus.

## Sutvarkykite išorinius kampus su Suapvalinimas

{{cmd:FILLET}} sujungia dvi linijas kampe: jas apkarpo arba pratęsia, kad jos susitiktų. Kai spindulys 0, kampas yra kvadratinis.

1. Įveskite `F` ir paspauskite {{key:Enter}}. Raginimas sako `Pasirinkite pirmą liniją [Spindulys (R)]:`.
2. Jei paskutinis suapvalinimas naudojo spindulį, įveskite `R`, paspauskite {{key:Enter}}, įveskite `0` ir paspauskite {{key:Enter}}.
3. Spustelėkite išorinę apatinę liniją arti jos dešiniojo galo.
4. Prie `Pasirinkite antrą liniją` spustelėkite išorinę dešiniąją liniją arti jos apatinio galo.

Dvi linijos dabar susitinka aštriame kampe, ir komanda baigiasi.

5. Paspauskite {{key:Enter}}, kad pakartotumėte {{cmd:FILLET}}, ir padarykite kitą kampą.
6. Kartokite, kol visi keturi išoriniai kampai susitiks.

Spustelėkite kiekvieną liniją ant dalies, kurią norite **išlaikyti**. Su spinduliu didesniu nei 0 Suapvalinimas tarp linijų prideda lanką.

:::tip
Prie pirmojo raginimo įveskite `M`, kad padarytumėte visus keturis kampus vienu kartu, arba nubraižykite išorinį paviršių kaip vieną uždarą polilinią ir įveskite `P`: visi kampai padaromi iš karto. Laikykite {{key:Shift}} spustelėdami antrą liniją, kad gautumėte aštrų kampą nekeisdami spindulio.
:::

## Nuožulninkite kampą su Nuokirpimas

{{cmd:CHAMFER}} nukerta kampą tiesia linija.

1. Įveskite `CHA` ir paspauskite {{key:Enter}}.
2. Įveskite `D` ir paspauskite {{key:Enter}}. Įveskite `300` ir paspauskite {{key:Enter}} pirmam atstumui, tada paspauskite {{key:Enter}}, kad antram taip pat būtų 300.
3. Spustelėkite vidinę viršutinę liniją arti jos kairiojo galo, tada vidinę kairiąją liniją arti jos viršutinio galo.

Kampas nukertamas 300 išilgai kiekvienos linijos, o nuožulni linija juos sujungia. Įveskite `A` vietoj `D`, kad nurodytumėte ilgį pirmoje linijoje ir kampą.

## Iškirskite duris su Apkarpymas

Pirmiausia nubraižykite dvi durų staktas per apatinę sieną, tada apkarpykite sienos linijas tarp jų.

1. Įveskite `L` ir paspauskite {{key:Enter}}.
2. Įveskite `1000,200` ir paspauskite {{key:Enter}}.
3. Įveskite `@0,-600` ir paspauskite {{key:Enter}}, tada dar kartą paspauskite {{key:Enter}}.
4. Paspauskite {{key:Enter}}, kad pakartotumėte {{cmd:LINE}}.
5. Įveskite `1900,200` ir paspauskite {{key:Enter}}.
6. Įveskite `@0,-600` ir paspauskite {{key:Enter}}, tada dar kartą paspauskite {{key:Enter}}.

Dabar turite dvi trumpas linijas, kertančias apatinę sieną 900 atstumu viena nuo kitos.

7. Įveskite `TR` ir paspauskite {{key:Enter}}. Istorijoje rašoma `Dabartiniai nustatymai: Greitasis režimas, kraštinės: be pratęsimo`.
8. Spustelėkite vidinę apatinę liniją tarp dviejų staktų. Ta dalis dingsta. (Pirmiausia užveskite žymeklį ant jos: dalis, kuri bus pašalinta, tampa pilka ir brūkšniuota.)
9. Spustelėkite išorinę apatinę liniją tarp dviejų staktų. Ta dalis taip pat dingsta.
10. Spustelėkite kiekvienos staktos dalį, kuri kyšo virš sienos, ir dalį žemiau jos.
11. Paspauskite {{key:Enter}}, kad užbaigtumėte komandą.

Turėtumėte matyti 900 angą apatinėje sienoje, o staktos uždaro sienos galus.

Greituoju režimu (numatytasis) Apkarpymas nereikalauja iš pradžių pasirinkti pjovimo kraštų: kiekvienas matomas objektas yra pjovimo kraštas. Pasirinkite dalį, kurią norite pašalinti, arba vilkite kelią per kelias dalis, kad apkarpytumėte jas visas iš karto. Įveskite `U` ir paspauskite {{key:Enter}}, kad grąžintumėte paskutinį pasirinkimą ar vilkimą nepalikdami komandos. Tvora, kertantis langas, pasirinkti pjovimo kraštai ir {{key:Shift}} pratęsimui aprašyti [Apkarpymas ir pratęsimas](topic:trim-and-extend).

## Pratęskite liniją iki kitos

{{cmd:EXTEND}} pailgina linijos, lanko ar polilinijos galą, kol jis susitinka su kitu objektu tame kryptyje.

1. Įveskite `L` ir paspauskite {{key:Enter}}.
2. Įveskite `1000,2000` ir paspauskite {{key:Enter}}.
3. Įveskite `@2000,0` ir paspauskite {{key:Enter}}, tada dar kartą paspauskite {{key:Enter}}. Linija sustoja 2000 trumpiau nei dešinė siena.
4. Įveskite `EX` ir paspauskite {{key:Enter}}.
5. Spustelėkite naują liniją arti jos dešiniojo galo.
6. Paspauskite {{key:Enter}}, kad užbaigtumėte komandą.

Linija dabar eina iki vidinio dešinės sienos paviršiaus. Kiekvienas matomas objektas yra riba; spustelėkite arti galo, kuris turėtų augti. Komandoje {{cmd:TRIM}} tą patį daro {{key:Shift}}+spustelėjimas.

## Nutraukti ir pailginti

{{cmd:BREAK}} (`BR`, arba {{ui:Keitimas}} › {{ui:Daugiau}} › {{ui:Nutraukti}}) išpjauna tarpą be pjovimo krašto: spustelėkite objektą, kur tarpas prasideda (tas spustelėjimas yra pirmas taškas), tada spustelėkite, kur jis baigiasi. Apskritime dalis prieš laikrodžio rodyklę nuo pirmo iki antro taško yra pašalinama. Antru klausimu `F` leidžia vėl nurodyti pirmą tašką, o {{cmd:BREAKATPOINT}} perskiria objektą į dvi dalis viename taške be tarpo.

{{cmd:LENGTHEN}} (`LEN`) keičia ilgį viename gale:

1. Įveskite `LEN` ir paspauskite {{key:Enter}}. Spustelėkite liniją, kad pamatytumėte jos dabartinį ilgį; raginimas paklausia dar kartą.
2. Pasirinkite būdą: `DE` (Delta: pridedama suma, neigiama – atimama; `A` lanko kampui), `P` (Procentai: 50 perpus sumažina ilgį), `T` (Visas (T): ilgis, koks turėtų būti) arba `DY` (Dinaminis: vilkite galą).
3. Spustelėkite kiekvieną objektą arti galo, kuris turėtų judėti. `U` grąžina paskutinį; {{key:Enter}} baigia.

Linijas, lankus ir atviras polilinijas (jų galo atkarpą) galima pailginti.

## Dažniausios klaidos

- **Dingo visa linija.** Nieko jos nekirto, todėl greitasis režimas ją ištrynė. Įveskite `U`, kad ją grąžintumėte; patikrinkite, ar pjovimo linija tikrai kerta ją (priartinkite) ir nėra sluoksnyje, kuris išjungtas.
- **„Šia kryptimi nėra ribos.“** Pratęsimas nerado, į ką atsitrenkti. Spustelėkite arčiau galo, kuris turėtų augti.
- **„Spindulys per didelis.“** Lankas išeitų už vienos iš linijų galo. Naudokite mažesnį spindulį.
- **„Atviros polilinijos apkarpyti galima tik pirmą ar paskutinę atkarpą.“** Pasirinkite dvi greta esančias polilinijos atkarpas arba įveskite `P`, kad suapvalintumėte kiekvieną jos kampą.
- **Poslinkis nuėjo į netinkamą pusę.** Pusė yra ta, kur spustelėjate po objekto pasirinkimo. Anuliuokite su {{key:Mod+Z}} ir spustelėkite kitoje pusėje.
- **„Per toli poslinkinti negalima.“** Poslinkis apverstų lanko, apskritimo ar polilinijos vidų išorėn. Naudokite mažesnį atstumą.
