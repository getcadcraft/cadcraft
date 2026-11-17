---
title: Nuskenuoti brėžiniai ir atsekimas
summary: Įkelkite nuskenuotą lapą, nustatykite mastelį ir kampą, išvalykite jį, ištrinkite jo dalis, prisilipkite prie jo linijų ir atsekite jas į linijas bei lankus.
keywords: nuskenavimas, nuskenuotas brėžinys, rastras, tiff, jpeg, png, mastelis, lygiavimas, ištiesinimas, triukšmo šalinimas, slenkstis, juodai baltas, kirpimas, trynimas, atsekimas, vektorizavimas, prilipimas, lankai, brūkšniavimas, popieriniai brėžiniai, seni brėžiniai, scanattach, scantrace
from: 36227e5b
---

## Nuo popierinio lapo iki brėžinio objektų

Nuskenuotas brėžinys yra paveikslėlis. CadCraft išsaugo jums duotą paveikslėlį ir jo niekada nekeičia: kiekvienas išvalymo žingsnis sukuria naują paveikslėlį, po vieną anuliavimo žingsnį, o {{cmd:SCANINFO}} išvardija originalų failą ir nuo tada atliktus žingsnius. Niekas niekur nesiunčiama ir nieko nenuspėja mokytas modelis: išvalymas ir atsekimas yra įprastas vaizdų apdorojimas, kuris vyksta jūsų kompiuteryje.

1. **Įterpkite jį.** {{cmd:SCANATTACH}} nuskaito PNG, JPEG, TIFF (vieną puslapį arba visus daugiapuslapio failo puslapius) ar PDF puslapį, kuris yra paveikslėlis. Klausiama puslapio, apatinio kairiojo kampo ir pločio. PDF puslapio atveju dar klausiama, kiek pikselių colyje piešti puslapį.
2. **Nustatykite mastelį.** {{cmd:SCANSCALE}}: pažymėkite du taškus nuskenuotame lape, tada įveskite tikrąjį atstumą tarp jų. Lapas keičiamas mastelio atžvilgiu aplink pirmąjį tašką.
3. **Suderinkite jį.** {{cmd:SCANALIGN}}: pažymėkite du taškus nuskenuotame lape ir dvi vietas, kur jie turi būti; lapas pajudinamas ir pasukamas, kad tilptų, ir taip pat keičiamas mastelis, nebent atsakysite Ne.
4. **Ištiesinkite jį.** {{cmd:SCANDESKEW}} išmatuoja lapo ilgųjų linijų kampą ir parodo jį kartu su tikslumu. Priimkite jį arba įveskite savo, ir lapas bus pasuktas. Lape su nedaug ilgųjų linijų rodomas įspėjimas: prieš priimdami patikrinkite kampą.
5. **Išvalykite jį.** {{cmd:SCANCLEAN}} paverčia lapą juodai baltu (Auto pirmiausia išlygina popierių; Adaptive tiksliau seka popieriaus pokyčius; Level yra vienas skaičius visam lapui) ir pašalina dėmeles iki jūsų nustatyto dydžio.
6. **Iškirpkite ir ištrinkite.** {{cmd:SCANCROP}} palieka vieną langą. {{cmd:SCANERASE}} ištrina stačiakampį, daugiakampį arba lasą (paspauskite ir vilkite): antspaudus, pastabas, kavos žymę.

Išvalytas paveikslėlis yra tai, ką išsaugotas DWG laiko (IMAGE ir jo IMAGEDEF, o paveikslėlio failas laikomas šalia brėžinio, kaip ir bet kuriam paveikslėliui).

## Prisilipkite prie nuskenuoto lapo linijų

Kai {{cmd:RASTERSNAP}} įjungta (pagal numatytuosius nustatymus), objektų prilipimas taip pat randa juodai baltos nuskenuoto lapo linijas: linijų galus, jų vidurius, kampus ir susikirtimus, rodomus įprastais prilipimo žymekliais. Lapo dalis po žymekliu atsekama, kai judinate; priartinkite pakankamai, kad vienas pikselis būtų kelių ekrano pikselių dydžio. Linija, ilgesnė už atsekamą dalį, sekama iki jos galų.

## Atsekimas

{{cmd:SCANTRACE}} paverčia lapo linijas linijomis ir lankais naujame sluoksnyje (SCAN-TRACE), kaip vieną anuliavimo žingsnį, o nuskenuotas vaizdas lieka po jomis. Nustatote:

- **Nuokrypis:** kiek atsekta linija ar lankas gali nutolti nuo nuskenuoto lapo linijų, brėžinio vienetais (ataskaitoje taip pat pateikiami pikseliai). Griežtas nuokrypis seka kiekvieną nelygumą; laisvas sukuria mažiau, tiesesnių dalių.
- **Langas:** lapo kampas arba visas lapas.
- **Lankai:** išjungus, sukuriamos tik linijos.
- **Likučiai:** tai, ką atsekimas paliko nepaliestą, nubrėžiama kaip stačiakampiai sluoksnyje, kurį galite išjungti, arba nebrėžiama.

Atsekimas randa kiekvieno brūkšnio centrą, seka jį, prie jo pritaiko tiesias linijas ir apskritiminius lankus, sujungia ruožus, kurie buvo nutraukti ten, kur kirto kita linija, beveik horizontalias ir beveik vertikalias linijas padaro tiksliai horizontaliomis ir vertikaliomis bei uždaro kampus. **Tekstas ir brūkšniavimas lieka kaip rastras:** raidžių dydžio dalys atskiriamos, o trumpų lygiagrečių linijų pluoštai laikomi brūkšniavimu ir atskiriami.

Baigus ji praneša, kiek linijų ir lankų sukurta, nuokrypį ir kiek dalių paliko kaip rastrą. **Tai yra tai, ką pikseliai davė esant tam nuokrypiui, ir tai nėra teiginys, kad rezultatas teisingas.** Palyginkite jį su lapu: atsekimas gali praleisti silpną liniją, sujungti dvi labai arti esančias linijas arba nubrėžti liniją ten, kur yra tik dėmė. Pirmiausia išvalykite nuskaitymą (ištiesintas, juodai baltas, be dėmių), ir rezultatas bus daug geresnis.

## Ko ji neskaito

TIFF failai, saugomi plytelėmis, BigTIFF, TIFF su JPEG ar deflate suspaudimu, Group 3 faksų kodavimas ir atskiruose plokštumose laikomos spalvos atmetami su pranešimu; įrašykite juos iš naujo kaip juostas su LZW, PackBits, Group 4 arba be suspaudimo. Interlaced PNG failai taip pat atmetami. Failai, didesni nei 128 MB arba 100 milijonų pikselių, atmetami, o atsekimo lange gali būti ne daugiau kaip 64 milijonai pikselių.
