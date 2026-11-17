---
title: Modelis 3D
summary: Rodykite brėžinį 3D skirtuke ir kurkite paprastus kietuosius kūnus: ištraukite (su nuolydžiu arba išilgai kelio), apsukite, stumkite ir traukite paviršius, kurkite dėžes, cilindrus ir pleištus, jungkite, atimkite ir ieškokite sankirtos, tada perkelkite, kopijuokite, sukite ir trinkite juos bei dėkite plokščius 2D vaizdus į lapą.
keywords: 3d, trys d, kietasis kūnas, kietieji kūnai, 3dsolid, sritis, kūnas, acis, sat, sab, kietieji kūnai iš kitų programų, atidaryti 3D brėžinį, extrude, ext, ištraukti, revolve, rev, sweep, nuolydis, kelias, presspull, spausti traukti, stumti traukti, dėžė, cilindras, cyl, pleištas, 3dorbit, orbit, vaizdas, vscurrent, vizualinis stilius, šešėliuotas, paslėptos linijos, rėmelis, rentgenas, xray, iso, perspektyva, lygiagretus, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, vaizdo kubas, union, uni, atimti, subtract, su, sankirta, intersect, in, boolean, jungti kietuosius kūnus, viewbase, flatshot, plokščias vaizdas, 2D vaizdas, brėžinio vaizdas, priekinis vaizdas, vaizdas iš viršaus, šoninis vaizdas, paslėptos linijos
from: 13060e71
---

## Ką sukursite

1000 × 600 kambario plotas ištraukiamas į 400 aukščio bloką, vienas paviršius pakeliamas aukštyn, šalia – cilindras; tada modelis įrašomas kartu su brėžiniu ir eksportuojamas 3D peržiūrai arba spausdintuvui.

Skirtukas {{ui:3D}} yra šalia {{ui:Model}} po brėžiniu. Jame rodomas modelio erdvės brėžinys, gulintis ant žemės savo sluoksnių spalvomis (išjungti arba užšaldyti sluoksniai lieka paslėpti), ir jūsų sukurti kietieji kūnai. Pirmą kartą atidarius, 3D vaizdas įkeliamas; vėliau jis persijungia iš karto.

## Ištraukti formą

1. Skirtuke {{ui:Model}} įveskite `REC` ir paspauskite {{key:Enter}}. Įveskite `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Spustelėkite skirtuką {{ui:3D}}. Įrankių juostoje vietoj brėžinio grupių rodoma grupė {{ui:3D}}.
3. Spustelėkite {{ui:Extrude}} (arba įveskite {{cmd:EXTRUDE}}, `EXT`). Spustelėkite stačiakampio viduje, tada paspauskite {{key:Enter}}.
4. Įveskite `400` ir paspauskite {{key:Enter}}. Istorijoje rašoma „Ištrauktas 1 kietasis kūnas, 400 aukščio“ ir jo tūris.

Uždarosios polilinijos (įskaitant lankus), stačiakampiai, daugiakampiai, apskritimai ir elipsės ištraukiami; linijos ir atviros polilinijos – ne, o istorijoje nurodoma priežastis. Taip pat galite pirmiausia pasirinkti figūras skirtuke {{ui:Model}} ir ten įvesti `EXTRUDE`. Vietoj aukščio įvedimo galite jį nurodyti spustelėdami: kontūras seka žymeklį aukštyn ir žemyn. Neigiamas aukštis eina žemyn. Aukščio raginime įveskite `[Trinti (D)]`, kad ištraukus ištrintumėte 2D figūras (dar kartą `D` jas palieka).

Aukščio raginime `[Nuolydis (T)]` (Taper angle) prašo kampo laipsniais: šonai pasvyra į vidų per tą kampą, todėl viršus mažesnis (neigiamas kampas jį daro didesnį); per status kampas atmetamas. `[Kelias (P)]` vietoj to nuvedą figūras išilgai kelio (žr. žemiau).

## Apsukimas ir nuvedimas

- {{cmd:REVOLVE}} (`REV`, arba {{ui:More}} › {{ui:Revolve about an axis}}): pasirinkite uždaras figūras, paspauskite {{key:Enter}}, tada spustelėkite dviejų ašies galus (arba įveskite `X` arba `Y` – brėžinio ašį per 0,0), tada įveskite kampą arba paspauskite {{key:Enter}}, kad apsisuktų per visą ratą. Figūra sukasi apie ašį ir iškyla iš žemės: nubrėžkite pusės vazos kontūrą šalia linijos ir apsukite jį apie tą liniją. Figūra gali liestis su ašimi, bet jos nekirsti. Pilnas apsisukimas turi 48 žingsnius.
- {{cmd:SWEEP}} (arba {{ui:More}} › {{ui:Sweep along a path}}, arba `[Kelias (P)]` ištraukimo aukščio raginime): pasirinkite uždaras figūras (profilį), paspauskite {{key:Enter}}, tada spustelėkite kelią: liniją, polilinija, lanką, apskritimą ar elipsę. Profilis atsistoja skersai kelio, jo vidurys ant kelio, ir eina palei jį; kampai suįstrižinami, o uždaras kelias sudaro žiedą. Mažas stačiakampis, nuvestas palei kambario kontūrą, tampa grindjuoste; apskritimas palei polilinija – vamzdžiu.

## Paviršiaus stūmimas ir traukimas

1. Spustelėkite {{ui:Press/pull}} (arba įveskite {{cmd:PRESSPULL}}).
2. Spustelėkite viršutinį bloko paviršių.
3. Įveskite `100` ir paspauskite {{key:Enter}}, arba pajudinkite žymeklį ir spustelėkite. Blokas tampa 500 aukščio.

## Dėžės, cilindrai ir pleištai

- {{cmd:BOX}}: spustelėkite arba įveskite du kampus, tada aukštį.
- {{cmd:CYLINDER}} (`CYL`): centras, spindulys, tada aukštis. Cilindrai ir ištrauktieji apskritimai turi 48 kraštines, šešėliuojami sklandžiai.
- {{cmd:WEDGE}} (`WE`): du kampai ir aukštis. Pirmame kampe jis yra pilno aukščio, o kitame nusileidžia iki nulio.

Skirtuke {{ui:3D}} spustelėjimas patenka į paviršių ar briauną po žymekliu, kitu atveju – ant žemės, todėl dėžė gali stovėti ant kito kietojo kūno.

## Kietųjų kūnų perkėlimas, kopijavimas, sukimas ir trynimas

Skirtuke {{ui:3D}} spustelėjimas pažymi kietąjį kūną; vilkite iš kairės į dešinę rėmeliui, iš dešinės į kairę – kertančiam rėmeliui. Tada:

- {{cmd:MOVE}}: spustelėkite bazinį tašką ir vietą, kur jis turi eiti, arba įveskite `<100,0,0>` (arba `@100,0`) atstumui palei X, Y ir Z.
- {{cmd:COPY}}: tas pats, bet originalas lieka.
- {{cmd:ROTATE}}: įveskite kampą (sukasi apie pažymėto pasirinkimo vidurį, aplink Z), arba spustelėkite centrą, pradžios tašką ir kampą.
- {{cmd:ERASE}} arba {{key:Delete}}.

## Kietųjų kūnų jungimas, atėmimas ir sankirta

Atidarykite {{ui:More}} 3D įrankių juostoje arba įveskite komandą:

- {{cmd:UNION}} (`UNI`): pasirinkite kietuosius kūnus, paspauskite {{key:Enter}}: jie tampa vienu kietuoju kūnu.
- {{cmd:SUBTRACT}} (`SU`): pasirinkite kietuosius kūnus, kuriuos palikti, paspauskite {{key:Enter}}, tada tuos, kuriuos atimti, ir paspauskite {{key:Enter}}. Skylė per bloką: nubrėžkite cilindrą per jį, tada atimkite cilindrą.
- {{cmd:INTERSECT}} (`IN`): pasirinkite kietuosius kūnus, paspauskite {{key:Enter}}: lieka tik tai, kas jiems visiems bendra.

Istorijoje nurodomas rezultato tūris. Kiekviena operacija yra vienas atšaukimo žingsnis. Pirmoji, kurią paleisite, įkelia 3D loginių operacijų variklį (apie 0,5 MB; įtrauktas į {{ui:Save for offline}}). Jungti galima tik uždarus kietuosius kūnus: kietasis kūnas su atviromis briaunomis (iš kitos programos laisvų 3D paviršių) atmetamas, o priežastis nurodoma. Rezultatas – vienas kietasis kūnas; kreivi paviršiai lieka sudaryti iš plokščių facetų, kaip ir cilindras.

Du kartus spustelėkite kietąjį kūną, kad redaguotumėte jo paviršius ir briaunas atskirai; {{key:Esc}} jį vėl uždaro. Kiekvienas 3D pakeitimas yra vienas atšaukimo žingsnis toje pačioje istorijoje kaip ir brėžinys: {{key:Mod+Z}} atšaukia paskutinį jūsų veiksmą abiejuose skirtukuose.

## Plokšti vaizdai lape

1. Atverkite lapo skirtuką (arba likite ant {{ui:Model}}), tada įveskite {{cmd:VIEWBASE}} (arba `FLATSHOT`).
2. Pasirinkite vaizdą: {{key:Enter}} – priekinis vaizdas, arba `[Viršus (T)]`, `[Dešinė (R)]`, `[Kairė (L)]`, `[Galas (BA)]`, `[Apačia (BO)]`, `I` (Izometrija).
3. {{key:Enter}} rodo paslėptas linijas, brūkšniuotas; `[Nerodyti (H)]` jų neįtraukia.
4. {{key:Enter}} paima mastelį, kurį siūlo CadCraft: lape – didžiausią standartinį mastelį (pvz., 1:20), kuriuo vaizdas telpa į mažiau nei pusę popieriaus. Arba įveskite vieną: `1:50`, `2:1`.
5. Spustelėkite arba įveskite, kur eis vaizdo centras.

Vaizdas yra viena bloko nuoroda, `VIEW-FRONT-1` ir t. t.: matomos briaunos yra sluoksnyje VIEW-VISIBLE (0,5 mm), paslėptos – VIEW-HIDDEN (brūkšniuotos, 0,25 mm). Perkelkite, matuokite ir spausdinkite jį kaip bet kurį kitą brėžinio objektą. Tai kietųjų kūnų vaizdas tuo metu, kai jį sukūrėte: po jų pakeitimo ištrinkite vaizdą ir vėl paleiskite {{cmd:VIEWBASE}}. Daugiau vaizdų – paleiskite kartą kiekvienam.

## Apžvalga

Vilkite ratuką, kad sukiotumėte orbitą, {{key:Shift}} + ratuko vilkimas arba dešinysis mygtukas – slinkimui, o ratuką sukite, kad keistumėte mastelį prie žymeklio. Jutikliniu kilimėliu du pirštai sukasi, o suspaudimas keičia mastelį. Dešinysis spustelėjimas be vilkimo yra {{key:Enter}}, kaip ir kituose skirtukuose. `3DORBIT` leidžia kairiajam mygtukui sukti orbitą, kol paspausite {{key:Enter}} arba {{key:Esc}}.

- {{ui:Views}} (arba {{cmd:VIEW}}): Izometrija, Viršus, Apačia, Priekis, Galas, Kairė, Dešinė, Perspektyva arba Lygiagretus, ir Priartinti prie viso.
- {{ui:Style}} (arba {{cmd:VSCURRENT}}, `VS`): Šešėliuotas, Šešėliuotas su briaunomis, Paslėpta linija, Rėmelis arba Rentgenas.

Taškai, kuriuos spustelite, prisitraukia prie kietųjų kūnų (kampų, briaunų, paviršių) ir prie 2D brėžinio ant žemės: jo linijų ir lankų galų bei vidurių ir taškų palei juos. 2D linijos skirtuke {{ui:3D}} niekada nepasirenkamos. Kai komanda prašo 2D objektų (EXTRUDE, REVOLVE, SWEEP), spustelėjimas parenka vieną, vilkimas iš kairės į dešinę paima tai, kas visiškai telpa rėmelyje, o vilkimas iš dešinės į kairę paima tai, ką rėmelis kerta, kaip ir skirtuke {{ui:Model}}.

Viršutiniame dešiniajame 3D skirtuko kampe yra vaizdo kubas: spustelėkite paviršių, briauną ar kampą, kad žiūrėtumėte iš ten; vilkite, kad sukiotumėte orbitą, o namelio mygtukas grąžina izometrinį vaizdą. Tai {{ui:Automatic}} – {{ui:Corner indicator}} pradžia [CadCraft nustatymuose](topic:settings). Nustačius į {{ui:View cube}}, skirtuke {{ui:Model}} taip pat rodomas kubas, žiūrintis iš viršaus; spustelėjus bet kurią kitą pusę atsidaro 3D skirtukas, žiūrintis iš ten. Nustačius į {{ui:Axis icon}}, abiejuose skirtukuose rodomas ašių žymeklis.

## Kietieji kūnai iš kitų programų

Brėžinys iš kitos programos gali turėti 3D kietųjų kūnų, sričių ir kūnų (3DSOLID, REGION, BODY: kita programa išsaugo jų formą kaip ACIS duomenis). CadCraft rodo tuos, kurie yra modelio erdvėje, skirtuke 3D, jų sluoksnio spalva ir su savo briaunomis, pirmą kartą atidarius skirtuką; komandinė eilutė tada nurodo, kiek jų nupiešta.

- Jie rodomi tokie, kokie yra: negalite jų pasirinkti, perkelti ar keisti. Išjungti ar užšaldyti sluoksniai juos paslepia.
- Įrašant kaip DWG, kiekvienas jų įrašomas atgal nepakitęs, bet kuria DWG versija, kad kita programa juos vėl gautų. DXF failai jų neišsaugo: CadCraft juos įrašo tik į DWG ir apie tai praneša įrašydamas kaip DXF.
- Nupiešta: plokšti paviršiai ir paviršiai ant cilindrų, kūgių, sferų, toro bei paprastų splainų paviršių, su tiesiomis, apvaliomis ir splaino briaunomis. Paviršius bet kokiame kitame paviršiuje arba tas, kurio CadCraft negali išdėstyti, nespėjamas: jis praleidžiamas ir išvardijamas, pvz., „Dar nepiešiama (3D kietieji kūnai): 2 paviršiai ant spline-surface (sweepsur), paviršius, kurio dar nepiešiama.“
- Kietieji kūnai blokuose kol kas nerodomi; „Apie šį failą“ juos suskaičiuoja.

Kreivi paviršiai piešiami kaip maži plokšti gabalėliai, apie 7.5° atstumu, todėl kreivas kietasis kūnas iš arti atrodo šiek tiek briaunotas.

## Įrašymas ir eksportavimas

Įrašant išsaugomas 3D modelis, tiek DWG, tiek DXF formatu. Kiekvienas paviršius įrašomas kaip 3D paviršius sluoksnyje `CC-3D`, kad kitos programos rodytų kietuosius kūnus, o CadCraft failo viduje išsaugo savo tikslią kopiją, kurią nuskaito atidarę brėžinį iš naujo, su 3D vaizdu tokiu, koks buvo (kamera, projekcija ir vizualinis stilius). Kitų programų sukurti 3D paviršiai patenka į 3D skirtuką kaip laisvi paviršiai, sugrupuoti į vieną grupę. 3D paviršius bloke įeina po kartą kiekvienai nuorodai į tą bloką modelyje, išdėstytas ir pasuktas kaip nuoroda; pačiame bloke ir lape 3D paviršius nupiešiamas plokščias, kaip jo kontūras.

{{ui:Export}} 3D grupėje atsiunčia vien kietuosius kūnus: GLB peržiūros priemonėms ir internetui ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) arba STL 3D spausdinimui, milimetrais ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} klausia, kurį norite.

:::note
3D modelis yra natūralaus dydžio. Brėžinys be vienetų laikomas milimetrais, todėl `1000` yra vienas metras. Jei vėliau pakeisite brėžinio vienetus (Ypatybės, kai nieko nepažymėta), kietieji kūnai keičiasi kartu su jais, kad liktų ant brėžinio, ir istorijoje tai nurodoma. Vienas {{key:Mod+Z}} atšaukia vienetų pakeitimą ir mastelio keitimą kartu.
:::
