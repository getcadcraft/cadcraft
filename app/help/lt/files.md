---
title: Failai: kas atsidaro, kas įrašoma
summary: Formatai, kuriuos CadCraft atidaro, įrašo ir eksportuoja, kas išlaikoma ar konvertuojama, ir kur keliauja failai.
keywords: xclip, clip, xclip riba, įtraukti iškirptus, dwg, dxf, pdf, r12, atidaryti, įrašyti, eksportuoti, importuoti, formatai, konvertavimas, atsisiuntimas, saveas, dxfout, įrašyti kaip, dwg įrašymas, formatas, qsave, xref, xattach, susietas brėžinys, išorinė nuoroda, įtraukti, perkrauti, atsieti
from: b8c5778d
---

## Trumpai

| Formatas | Atidaryti | Įrašyti | Pastabos |
|---|---|---|---|
| DXF (tekstinis arba dvejetainis, bet kuri versija) | Taip | Taip, kaip DXF R12, DXF 2000 arba DXF 2000 (dvejetainis) | Dvejetainis DXF atsidaro kaip tekstinis ir įrašomas atgal kaip dvejetainis. |
| DWG | Taip | Taip, kaip DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 arba 2018) | Skaitoma ir rašoma CadCraft pačios DWG biblioteka (AutoCAD R13–2018 failai). Jūsų DWG niekada nekeičiamas. Pažeisti failai arba versijos, kurių skaitytuvas nepalaiko, atmetami su pranešimu. |
| PDF | Įkelia puslapį: kaip pagrindą arba kaip objektus ([PDF pagrindai](topic:pdf-underlay)) | Taip, spausdinant | Vektorinis lapo PDF arba modelio PDF tam tikru mastu. |

Kiekvienas atidarytas (arba pradėtas su {{ui:Nauja}}) brėžinys gauna savo kortelę virš brėžinių srities; dar niekieno nepaliestas naujas brėžinys naudojamas vietoj to, kad būtų pridėta kortelė. Spustelėkite kortelę, kad perjungtumėte, jos {{ui:×}}, kad uždarytumėte (CadCraft prieš tai paklaus, jei yra neįrašytų pakeitimų), arba išdėstykite atidarytus brėžinius šalia vienas kito: žr. [Padalinti ekraną](topic:split-screen).

## Brėžinio atidarymas

- Paspauskite {{key:Mod+O}}, spustelėkite {{ui:Atverti}} arba įveskite `OPEN`, tada pasirinkite failą.
- Arba vilkite `.dwg` ar `.dxf` failą į brėžinių sritį.

Failas nuskaitomas jūsų naršyklėje. Jis niekur neįkeliamas. Istorijoje pranešama, kiek objektų ir sluoksnių atkeliavo bei kiek laiko tai truko, o kairiojo skydelio skyrius {{ui:Brėžinys}} rodo formatą, pavyzdžiui „DWG 2018 (AC1032)“.

DWG skaitytuvas yra CadCraft dalis ir atsisiunčiamas kartu su pirmuoju DWG, kurį atidarote po puslapio įkėlimo (keli šimtai KB), todėl atskiro atsisiuntimo laukti nereikia. Jis skaito failą fone, todėl puslapis lieka atsakingas, kol didelis DWG atsidaro.

DXF skaitomas dalimis po maždaug 4 MB, niekada kaip vienas teksto blokas, todėl atsidaro ir DXF, didesnis nei 512 MB. Riboja jūsų kompiuterio atmintis: DXF atidarymo metu naudojama maždaug 16–20 kartų failo dydžio (100 MB DXF su apie 690 000 objektų mūsų bandyme naudojo apie 1,5 GB).

### Kas įkeliama

- Linijos, lankai, apskritimai, polilinijos (su lankų segmentais), elipsės, taškai, tekstas ir daugiaeilis tekstas, užpildymai, brūkšniavimai (standartiniai šablonai nupiešti kaip jų linijos, kiti – kaip vientisas tonas), blokų nuorodos su atributais (reikšmes galima redaguoti; žr. [Bloko atributai](topic:attributes)), matmenys ir maketai su jų vaizdo languais.
- Splainai įkeliami kaip splainai (laipsnis, valdymo taškai, mazgai, svoriai, tvirtinimo taškai); žr. [Splainai ir polilinijos](topic:splines).
- Daugiasrovės su viena rodyklinės linijos ir tekstu įkeliamos kaip CadCraft daugiasrovės, kurias galite redaguoti (žr. {{cmd:MLEADER}}). Kitos (su bloku, keliomis rodyklinėmis linijomis ar lenktomis linijomis) nupiešiamos taip, kaip jas nupiešė kita programa, ir juda kaip vienas objektas; istorijoje nurodoma, kiek jų.
- Paveikslėliai (vaizdai) rodomi kaip rėmelis su paveikslėlio failo pavadinimu, kol nurodysite CadCraft failą komanda {{cmd:IMAGE}}: žr. [Paveikslėliai brėžinyje](topic:pictures#show-the-pictures-a-dwg-uses). Iškirpimai rodomi kaip jų rėmelis, o po jais esantis turinys lieka matomas.
- DWG lentelės įkeliamos taip, kaip jas nupiešė kita programa.
- 3D paviršiai modelio erdvėje įkeliami skirtuke {{ui:3D}}, o ne kaip 2D objektai; taip pat tie, kurie yra blokuose, – kartą kiekvienai bloko nuorodai modelyje. Bloke ir lape jie taip pat nupiešiami plokščiai, kaip kontūrai. Žr. [Modelis 3D](topic:3d-solids).
- Sluoksniai išlaiko spalvą, įjungimo, įšaldymo, užrakinimo ir spausdinimo nustatymus. DEFPOINTS niekada nespausdinamas.
- Matmenys tampa tikrais, redaguojamais CadCraft matmenimis, kai jų taškai gali būti nuskaityti. Iš pradžių jie rodomi tiksliai taip, kaip nupiešė kita programa; vos tik pakeisite vieną, CadCraft jį perpiešia pagal savo stilių.
- Kiekvienas maketas tampa lapo skirtuku. Kitoje programoje kiekvienas maketas turi paslėptą pirmąjį vaizdo langą, kuris yra pats lapas; CadCraft jo nepaima.

### Kas dar neįkeliama

Viskas, ko CadCraft nemoka nupiešti, yra suskaičiuojama, o ne spėjama. Kairiojo skydelio langelyje „Apie šį failą“ tai išvardijama kaip „Not shown yet:“, po kiekvieno objekto tipo ir kiek jų yra. Tipiniai atvejai – lentelės DXF, tinkleliai ir 3D kietieji kūnai blokuose. 3D kietieji kūnai, sritys ir kūnai modelio erdvėje rodomi 3D skirtuke (žr. [Modelis 3D](topic:3d-solids#solids-from-other-programs)). Failuose pasukti vaizdo langai rodomi pasukti, kaip ir ten, ir išlieka pasukti įrašant; taip pat išlieka dabartinis UCS, pavadinti UCS ir pasukta vaizdo kryptis.

Tekstas nupieštas vienu Helvetica stiliaus šriftu. Etiketė, kuri telpa vienoje eilutėje siauresniame pradinės programos šriftu, CadCraft gali pereiti į dvi eilutes.

## Įrašymas

Yra trys būdai įrašyti. Kiekvienas atsisiunčia kopiją.

- **Įrašyti**: paspauskite {{key:Mod+S}}, spustelėkite {{ui:Įrašyti}} arba įveskite `SAVE` (taip pat `QSAVE`). Įrašoma brėžinio formatu: DWG, jei atidarėte DWG, DXF, jei atidarėte DXF. DWG išlaiko versiją, su kuria atėjo (2018 failas įrašomas kaip 2018). Naujas brėžinys naudoja formatą ir DWG versiją, kuriuos paskutinį kartą pasirinkote naršyklėje su {{ui:Įrašyti kaip}}; jei nieko nepasirinkote, – DWG AutoCAD 2000 formatu.
- **Įrašyti kaip**: paspauskite {{key:Mod+Shift+S}}, spustelėkite {{ui:Įrašyti kaip}} arba įveskite `SAVEAS`. Dialogas {{ui:Įrašyti kopiją kaip}} siūlo {{ui:DWG}}, su {{ui:Versija}} sąrašu (AutoCAD 2018, 2013, 2010, 2007, 2004 arba 2000), {{ui:DXF R12}} ir {{ui:DXF 2000}}, kiekvienas su failo pavadinimu, kurį jis suteiks, ir jau pasirinktu dabartiniu brėžinio formatu bei versija. Spustelėkite {{ui:Įrašyti}}, kad atsisiųstumėte, arba {{ui:Atšaukti}} (arba {{key:Esc}}), kad nieko neįrašytumėte; tada istorijoje rašoma „Neįrašyta.“. Tai, ką pasirinkote, išlieka: {{key:Mod+S}} nuo to laiko naudoja šį pasirinkimą šiam brėžiniui, o nauji brėžiniai šioje naršyklėje pradeda nuo jo.
- **DXFOUT**: įveskite `DXFOUT`. Visada atsisiunčia DXF R12 kopiją, o kitas {{key:Mod+S}} vis tiek įrašo brėžinį paties brėžinio formatu.

Naršyklė atsisiunčia `<drawing name>.dwg` arba `<drawing name>.dxf`. Kiekvienas įrašymas yra **naujas atsisiuntimas**; failas, kurį atidarėte, niekada neperrašomas ir nekeičiamas. Istorijoje tai patvirtinama, pavyzdžiui: „Kopija įrašyta kaip Plan.dwg (DWG (AutoCAD 2018)). Jūsų originalas Plan.dxf nepakeistas.“ DXF atveju rašoma „(DXF R12, atidaromas bet kurioje CAD programoje)“. Po jos einančios eilutės išvardija viską, kas pasikeitė.

Kai CadCraft veikia darbalaukio programoje, įrašymas veikia kaip kitose darbalaukio programose: {{key:Mod+S}} įrašo brėžinį atgal į atidarytą failą, jo paties formatu ir versija, o istorijoje parašoma, kur jis įrašytas. {{ui:Įrašyti kaip}} ir eksportai rodo sistemos įrašymo langą, o dukart spustelėtas `.dwg`, `.dxf` arba `.ccsheets` failas atsidaro CadCraft.

PDF atveju spausdinkite (žr. žemiau).

## Ką DWG išlaiko ir keičia

CadCraft pats rašo DWG jūsų naršyklėje, ta pačia DWG biblioteka, kuria skaito. Versiją pasirinkite {{ui:Įrašyti kaip}} lange: AutoCAD 2000 formatas (failo versija AC1015) atsidaro daugiausiai programų, net senų; naujesni formatai (2004, AC1018, iki 2018, AC1032) taip pat išlaiko tikrąsias spalvas. Niekas neįkeliama, o DWG įrašymas veikia neprisijungus.

Kiekviena versija patikrinama perskaitant įrašytus failus trijų kitų programų DWG skaitytuvais ir pačiu CadCraft. CadCraft DWG dar nebuvo atidarytas pačiame AutoCAD.

### Ką DWG išlaiko

- Linijos, lankai, apskritimai, elipsės, taškai ir polilinijos su jų lankų segmentais.
- Vienos eilutės tekstas su lygiavimu ir pločio koeficientu.
- Daugiaeilis ir apvyniotas tekstas kaip daugiaeilis tekstas. Kita programa jį vėl apvynioja iš to paties pločio.
- Objektų spalvos: pagal sluoksnį, pagal bloką, 255 standartinės spalvos ir tikrosios spalvos 2004 formatu ir naujesniuose.
- Sluoksniai su jų spalva, linijos tipu, linijos storiu ir įjungimo, įšaldymo, užrakinimo bei spausdinimo nustatymais; objektų jiems būdingi linijų tipai, linijų storiai ir linijų tipo mastelis, linijų tipų šablonai ir brėžinio linijų tipo mastelis.
- Brėžinio vienetai ir ilgio formatas (dešimtainis, pėdos ir coliai, trupmenos…).
- Blokai su bazinių taškų ir atributų apibrėžimais, įskaitant nematomus, pastoviuosius ir iš anksto nustatytus.
- Blokų nuorodos su mastelio keitimu, pasukimu ir atributų reikšmėmis.
- Vientisi užpildymai ir šablonais brūkšniuoti užpildymai su šablonu, mastelių ir kampu (paties šablono linijos, todėl kitos programos nupiešia tas pačias linijas kaip CadCraft).
- Matmenys kaip tikri matmenys: kitos programos juos perskaičiuoja, kai juos tempiate. Kiekvienas išlaiko savo nustatymus (teksto aukštį, rodyklės dydį, skaitmenis, ilgio formatą) ir savo tekstą bei turi nupieštą kopiją, kurią turi kiekvienas DWG matmuo.
- Lapai (maketai): kiekvienas lapas su savo popieriaus dydžiu ir vienetais, tuo, kas ant jo nupiešta, ir jo vaizdo languais su jų vaizdu ir mastelių.
- Pavadinti vaizdai.
- Daugiasrovės kaip daugiasrovės.
- Sluoksnių ir blokų pavadinimai, įvesti kaip rašėte, didžiosiomis ir mažosiomis raidėmis. (DXF R12 rašo didžiosiomis.)

### Ką DWG keičia

Kiekvienas iš šių punktų išvardijamas istorijoje po įrašymo, kai jis taikomas jūsų brėžiniui.

| CadCraft | Įrašytame DWG |
|---|---|
| Tikrosios spalvos (pasirinktos spalvų parinkikliu), 2000 formate | Artimiausia standartinė spalva: 2000 formate yra tik 255. Įrašykite kaip 2004 ar naujesnį, kad jas išlaikytumėte |
| Lapo pavadinti vaizdai | Popieriaus erdvės vaizdai: DWG nenurodo, kuriam lapui jie priklauso, todėl, kai CadCraft vėl atidaro failą, jie priklauso pirmajam lapui |
| Daugiaeilis tekstas su pločio koeficientu | Įprastas raidės plotis: DWG pločio koeficientas taikomas tik vienos eilutės tekstui |
| Sluoksnių ar blokų pavadinimai su simboliais, kurių DWG neleidžia | Pakeista: susieto brėžinio pavadinimas, pavyzdžiui `Base\|Walls`, tampa `Base$0$Walls` (taip pavadina susieto brėžinio įtraukimas), o kiti simboliai tampa `_` |

### Kodėl R12 ir kas konvertuojama

Kai įrašote kaip DXF, CadCraft rašo DXF R12 – versiją, kurią gali atidaryti kiekviena CAD programa. Ji senesnė nei kai kurios funkcijos, todėl kai kas įrašoma paprastesne forma:

| CadCraft | Įrašytame R12 faile |
|---|---|
| Daugiaeilis tekstas | Vienas teksto objektas kiekvienai eilutei |
| Elipsės | Polilinijos, sekančios elipsę |
| Brūkšniavimai (iš atidarytų failų) | Tik jų kontūrai |
| Tikrosios spalvos (pasirinktos spalvų parinkikliu) | Artimiausia standartinė spalva |
| Linijų storiai ir objektų linijų tipo mastelis | Išmesti: R12 neturi nei vieno, nei kito (linijų tipai išlaikomi) |
| Sluoksnių ir blokų pavadinimai | Rašomi didžiosiomis raidėmis; tarpai ir kiti simboliai tampa `_`, o pavadinimai sutrumpinami iki 31 simbolio („Title block“ tampa `TITLE_BLOCK`) |
| Sluoksniai, nustatyti nespausdinti | Kitos programos juos spausdins (CadCraft prisimena nustatymą, kai brėžinys turi lapą) |
| Matmenys | Tikri matmenys su savo nupieštu bloku, todėl kitos programos rodo juos taip, kaip matote |
| Daugiasrovės | Linijos, rodyklės galvutė ir tekstas, kuriuos jos piešia |
| Pavadinti vaizdai | Išlaikomi, pavadinimai didžiosiomis raidėmis; lapo vaizdai grįžta į pirmąjį lapą |
| Keli lapai | Pirmasis lapas yra popieriaus erdvė, kurią rodo kiekviena programa; kiti išlaikomi kaip blokai, pavadinti `CCLAYOUT_1`, `CCLAYOUT_2` … , kuriuos CadCraft atkuria kaip lapus, kai atidaro failą |

Istorijoje išvardijamas kiekvienas iš šių punktų, kurie taikėsi jūsų brėžiniui.

:::tip
Jei norite dirbti su brėžiniu kelias dienas, įrašykite jį kaip DXF ir kitą kartą atidarykite tą DXF. Viskas, ką CadCraft gali nupiešti, išlieka per šį ciklą, įskaitant matmenis, blokus ir visus lapus.
:::

## Susieti brėžiniai (išorinės nuorodos)

{{cmd:XATTACH}} (`XA`, arba {{ui:Blokai}} › {{ui:Daugiau}} › {{ui:Įdėti brėžinį kaip nuorodą (xref)}}) susieja kitą DWG arba DXF: pasirinkite failą, tada spustelėkite, kur jis turi patekti ({{key:Enter}} padeda jį į 0,0). Jis įkeliamas kaip vienas blokas, pavadintas pagal failą, tinkamu mastelių, kai du brėžiniai turi skirtingus vienetus. Jo sluoksniai ir blokai išlaiko savo pavadinimus su nuorodos pavadinimu priekyje – `Plan|Walls`, `Plan|Door` – todėl niekada nesimaišo su jūsų: įjunkite ir išjunkite susietus sluoksnius, įšaldykite ar užrakinkite juos kaip savo. Nuoroda yra tik skaitymui: pakeiskite kitą brėžinį ir nuorodą perkraukite. Tai, ką nustatote susietų sluoksnių spalvai, linijos tipui, linijos storiui, įjungimui, įšaldymui, užrakinimui ir spausdinimui, išlieka, kai perkraunate, kai brėžinį įrašote kaip DWG, kol nuoroda dar yra nuoroda, ir kai kitas brėžinys susieja šį.

{{cmd:XREF}} (`XR`): `?` išvardija nuorodas (įkeltas ar neįkeltas, kuris failas, kiek nuorodų); `A` prideda; `R` perkrauna vieną iš failo (pasirinkite failą iš naujo: naršyklė pati nepasiekia jūsų aplankų); `B` įtraukia vieną (jis tampa įprastais blokais ir sluoksniais, pavadintais `Plan$0$Walls`); `D` atsieja vieną (jo nuorodos ir sluoksniai dingsta). Kiekvienas – vienas atšaukimo žingsnis.

{{cmd:XCLIP}} (`XC`) iškerpa blokų nuorodas ir susietus brėžinius: pažymėkite juos, `N` naujai ribai, tada `R` ir du kampus arba `P` ir daugiakampio taškus ({{key:Enter}} jį uždaro); `D` pašalina iškirpimą. Rodoma ir spausdinama tik tai, kas yra viduje, o iškirpimas juda kartu su nuoroda. DWG ir DXF 2000 išlaiko iškirpimus; DXF R12 įrašo nuorodą visą ir apie tai praneša. Kai įtraukiate susietą brėžinį, turintį iškirptų nuorodų, {{cmd:XREF}} `B` klausia: `A` įtraukia viską, `C` palieka tik kiekvienos nuorodos iškirptą dalį (linijos ir lankai nupjaunami ties riba; tekstai ir įdėtieji blokai lieka, kai jų įterpimo taškas yra viduje).

Brėžinys, kurį atidarote, gali susieti failus, kurių CadCraft nemato: jis praneša, kiek jų neįkelta. Naudokite {{cmd:XREF}}, `R` ir pasirinkite kiekvieną failą, kad juos pamatytumėte.

Kai įrašote, įkelta susieta nuoroda yra **įtraukiama** į failą (kitos programos mato įprastus blokus ir sluoksnius, pavadintus `Plan$0$…`), o istorijoje tai nurodoma. Nuoroda, kuri neįkelta, lieka nuoroda į savo failą, tiek DWG, tiek DXF.

## Atidaryti 3D

{{ui:Vaizdas}} › {{ui:Daugiau}} › {{ui:Atidaryti ModelCraft}} ({{cmd:OPENIN3D}}) atidaro brėžinį 3D modeliavimo programoje naujame skirtuke, kaip DWG, neįkeliant jo. Ten atlikti pakeitimai lieka ten; įrašykite juos ten. Meniu punktas rodomas tik ten, kur ta programa gali perimti perduotą brėžinį.

## Spausdinimas į PDF

Paspauskite {{key:Mod+P}}, spustelėkite {{ui:Spausdinti}} arba įveskite `PLOT`. PDF sukuriamas naršyklėje ir atsisiunčiamas arba atidaromas naujame skirtuke spausdinimui. Žr. [Spausdinimas į PDF](topic:plot-pdf).

## Kur keliauja failai

Kiekvienas įrašymas ir kiekvienas spausdinimas yra atsisiuntimas, todėl failai atsiranda ten, kur naršyklė įprastai dedą atsisiuntimus: dažniausiai aplanke „Atsisiuntimai“. Norėdami kiekvieną kartą pasirinkti aplanką, pakeiskite atsisiuntimų nustatymą savo naršyklėje; [Naršyklės ir kompiuteriai](common:browsers) parodo, kur tai rasti.

Nieko, ką atidarote ar įrašote, mums neišsiunčiama. Žr. [Kur keliauja jūsų failai](common:your-files).

## PLN ir PLA projektų failai

CadCraft atidaro DWG ir DXF brėžinius, o ne Archicad savo failų (`.pln`, `.pla`, `.tpl`, `.bpn`). Atidarius vieną, pranešama, kas tai yra. Archicad programoje įrašykite reikalingus vaizdus ar maketus kaip DWG ir atidarykite juos čia arba eksportuokite modelį kaip IFC ir atidarykite BimCraft programoje. Ten, kur BimCraft gali perimti failą, CadCraft siūlo {{ui:Atidaryti BimCraft programoje}}.

## Jei puslapis užsidaro prieš įrašant

CadCraft saugo kiekvieno pakeisto brėžinio kopiją tik šioje naršyklėje, akimirksnį po to, kai nustojate redaguoti. Jei kortelė užsidaro, naršyklė sustoja arba kompiuteris paleidžiamas iš naujo prieš įrašant, kitą kartą paleidžiant CadCraft klausia **Atkurti jūsų darbą?**: {{ui:Atkurti}} vėl atidaro brėžinį, neįrašytą, savo kortelėje. Brėžinio įrašymas pašalina jo kopiją. Žr. [Atkurti jūsų darbą](common:recover).

## Prisijungus ir neprisijungus

Atidarymas, braižymas, įrašymas (DWG ir DXF) ir spausdinimas vyksta jūsų kompiuteryje, todėl veikia be ryšio, kai tik CadCraft įsikrovė.

Norėdami naudoti CadCraft visiškai be ryšio, prisijungę spustelėkite {{ui:Įrašyti neprisijungus}} viršutinėje juostoje. Etiketė skaičiuoja („Įrašoma 40 iš 212“) ir baigiasi „Paruošta neprisijungus“. Išsaugota kopija apima DWG skaitytuvą, iš viso apie 5 MB, todėl **DWG failai atsidaro ir neprisijungus**, kai tik jis įrašytas. Spustelėkite mygtuką dar kartą, kad pasirinktumėte {{ui:Įrašyti dar kartą (gauti naujausią versiją)}} arba {{ui:Pašalinti kopiją neprisijungus}}. „Nepavyko įrašyti“ reiškia, kad kai kurie failai neatsisiųsti: patikrinkite ryšį ir spustelėkite dar kartą. „Neprisijungus nepasiekiama“ reiškia, kad šis naršyklės langas negali saugoti kopijos (privatūs langai ir kai kurie valdomi kompiuteriai).

Be išsaugotos kopijos DWG skaitytuvas įkeliamas pirmąjį kartą, kai atidarote DWG po puslapio įkėlimo, todėl DWG atidarymas neprisijungus gali nepavykti; DXF failams jo niekada nereikia. Neperkraukite puslapio neprisijungę, nebent CadCraft yra išsaugotas.

Išsamiau žr. [Darbas neprisijungus](common:offline).

:::offline
Dabar esate neprisijungę. Brėžiniai įrašomi kaip DWG arba DXF ir spausdinami įprastai, o DXF failai atsidaro. DWG failai atsidaro, jei CadCraft rodo „Paruošta neprisijungus“, arba jei DWG skaitytuvas jau įkeltas šiame skirtuke.
:::

## Ribojimai failuose

Ribojimai ir parametrai (žr. [Brėžinio ribojimai](topic:constraints)) išsaugomi ir DWG, ir DXF. Kiekvienas ribojamas objektas turi nedidelę CadCraft pastabą (išplėstinius duomenis), o nenaudojamas blokas, pavadintas `CADCRAFT_PARAMETRIC`, laiko ribojimus ir parametrų lentelę. Kitos programos atidaro brėžinį įprastai ir abu ignoruoja; jos gali ištrinti nenaudojamą bloką, kai valo. Pastabos nurodo objektus pagal jų pačių raktą, o ne pagal failo rankenas, todėl programa, kuri perkelia rankenas, jų nesugadina. Kai kita programa ištrina ar pakeičia ribojamą objektą, CadCraft jo ribojimus nuima atidarydamas failą ir praneša, kiek jų. Failas be jų atsidaro be ribojimų.

Eskizas, eksportuotas iš detalių modeliavimo programos (`.json`), taip pat atsidaro: žr. [Eskizų perkėlimas į kitas detalių modeliavimo programas ir iš jų](topic:solidworks-sketches).

## Dar neprieinama

- Daugiasrovės kaip daugiasrovės objektai įrašytame DXF (R12 jų neturi: jos įrašomos kaip tai, ką jos piešia).
- Paveikslėliai įrašytame DXF (jie įrašomi kaip jų rėmeliai; DWG išlaiko juos kaip paveikslėlius) ir iškirpimai, slepiantys tai, kas po jais.
- Naujesnės nei 2000 versijos DXF įrašymas.
- Debesies įrašymas ir sinchronizavimas tarp kompiuterių.

Visą sąrašą žr. [Dar nesukurta](topic:not-built-yet).
