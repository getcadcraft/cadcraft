---
title: Failai: kas atveriama, kas įrašoma
summary: Formatai, kuriuos CadCraft atveria, įrašo ir eksportuoja, kas išsaugoma arba konvertuojama ir kur keliauja failai.
keywords: xclip, clip, xclip riba, pririšti iškirptą, dwg, dxf, pdf, atverti, įrašyti, eksportuoti, importuoti, formatai, konvertavimas, atsisiuntimas, įrašyti kaip, dwg įrašymas, formatas, qsave, xref, xattach, susietas brėžinys, išorinė nuoroda, pririšti, perkrauti, atjungti
from: 6d68b34e
---

## Trumpai

| Formatas | Atverti | Įrašyti | Pastabos |
|---|---|---|---|
| DXF (tekstinis, bet kuri versija) | Taip | Taip, kaip DXF R12 arba DXF 2000 | Dvejetainis DXF nepriimamas: pirmiausia įrašykite jį kaip tekstinį DXF. |
| DWG | Taip | Taip, kaip DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 arba 2018) | Skaitoma ir rašoma CadCraft savąja DWG biblioteka (AutoCAD R13–2018 failai). Jūsų DWG niekada nekeičiamas. Sugadinti failai arba versijos, kurių skaitiklis nepalaiko, atmetami su pranešimu. |
| PDF | Įkelia puslapį kaip pagrindą arba kaip objektus ([PDF pagrindai](topic:pdf-underlay)) | Taip, spausdinant | Lapo vektorinis PDF arba modelis tam tikru mastelyje. |

Kiekvienas atidarytas brėžinys (arba pradėtas su {{ui:Nauja}}) gauna savo skirtuką virš brėžinio srities. Dar niekieno nepaliestas naujas brėžinys naudojamas vietoj naujo skirtuko. Spustelėkite skirtuką, kad perjungtumėte, spustelėkite jo {{ui:×}}, kad uždarytumėte (CadCraft prieš tai paklaus, jei yra neįrašytų pakeitimų), arba išdėstykite atvirus brėžinius šalia vienas kito: žr. [Padalinti ekraną](topic:split-screen).

## Brėžinio atidarymas

- Paspauskite {{key:Mod+O}}, spustelėkite {{ui:Open}} arba įveskite `OPEN`, tada pasirinkite failą.
- Arba vilkite `.dwg` ar `.dxf` failą į brėžinio sritį.

Failas skaitomas jūsų naršyklėje. Niekur neįkeliamas. Istorijoje nurodoma, kiek objektų ir sluoksnių įkelta bei kiek tai truko, o kairiojo skydelio skyrius {{ui:Drawing}} rodo formatą, pavyzdžiui, „DWG 2018 (AC1032)“.

DWG skaitiklis yra CadCraft dalis ir įkeliamas kartu su pirmuoju DWG, kurį atidarote po puslapio įkėlimo (kelios šimtai KB), todėl atskiro atsisiuntimo laukti nereikia. Jis skaito failą fone, todėl puslapis reaguoja, kol atidaromas didelis DWG.

### Kas įkeliama

- Linijos, lankai, apskritimai, polilinijos (su lankų atkarpomis), elipsės, taškai, tekstas ir kelių eilučių tekstas, kietieji kūnai, brūkšniuotės (standartiniai raštai nubrėžiami kaip linijos, kiti – kaip vientisas tonas), blokų nuorodos su atributais (reikšmes galite redaguoti; žr. [Bloko atributai](topic:attributes)), matmenys ir maketai su jų vaizdo langais.
- Splainai įkeliami kaip splainai (laipsnis, valdymo taškai, mazgai, svoriai, tvirtinimo taškai); žr. [Splainai ir polilinijos](topic:splines).
- Daugiakryptės nuorodos su viena nuorodos linija ir tekstu įkeliamos kaip CadCraft daugiakryptės nuorodos, kurias galite redaguoti (žr. {{cmd:MLEADER}}). Kitos (su bloku, keliomis nuorodų linijomis arba lenktomis linijomis) nubrėžiamos taip, kaip jas nubrėžė kita programa, ir juda kaip vienas objektas; istorijoje nurodoma, kiek jų yra.
- Paveikslėliai rodomi kaip rėmelis su paveikslėlio failo pavadinimu, kol nenurodysite CadCraft failo su {{cmd:IMAGE}}: žr. [Paveikslėliai brėžinyje](topic:pictures#show-the-pictures-a-dwg-uses). Išmušimai rodomi kaip jų rėmelis, o tai, kas po jais, lieka matoma.
- DWG lentelės įkeliamos taip, kaip jas nubrėžė kita programa.
- Modelio erdvės 3D veidai įkeliami skirtuke {{ui:3D}}, o ne kaip 2D objektai; taip pat ir esantys blokuose – kartą kiekvienai bloko nuorodai modelyje. Blokuose ir lape jie taip pat nubrėžiami plokščiai, kaip kontūrai. Žr. [Modelis 3D](topic:3d-solids).
- Sluoksniai išlaiko savo spalvą, įjungimo, įšaldymo, užrakinimo ir spausdinimo nustatymus. DEFPOINTS niekada nespausdinamas.
- Matmenys tampa tikrais, redaguojamais CadCraft matmenimis tose vietose, kur galima nuskaityti jų taškus. Iš pradžių jie rodomi tiksliai taip, kaip nubrėžė kita programa; kai tik pakeisite vieną, CadCraft jį perbrėžia pagal savo stilių.
- Kiekvienas maketas tampa lapo skirtuku. Kitoje programoje kiekvienas maketas turi paslėptą pirmąjį vaizdo langą, kuris yra pats lapas; CadCraft jo nepaiso.

### Kas dar neįkeliama

Tai, ko CadCraft nepavyksta nubrėžti, yra suskaičiuojama, o ne spėjama. Langelyje „Apie šį failą“ kairiajame skydelyje tai išvardyta kaip „Dar nerodoma:“ ir nurodytas kiekvienos rūšies objektų skaičius. Tipiniai atvejai: lentelės DXF, tinklai ir 3D kietieji kūnai blokuose. 3D kietieji kūnai, regionai ir kūnai modelio erdvėje rodomi 3D skirtuke (žr. [Modelis 3D](topic:3d-solids#solids-from-other-programs)). Vaizdo langai, pasukti faile, rodomi pasukti, kaip ir ten, ir išlaiko savo pasukimą įrašant; taip pat išlieka dabartinis UCS, pavadinti UCS ir pasuktas vaizdas.

Tekstas nubrėžiamas vienu Helvetica tipo šriftu. Etiketė, kuri originalioje programoje telpa vienoje eilutėje siauresniu šriftu, CadCraft gali persikelti į dvi eilutes.

## Įrašymas

Yra trys įrašymo būdai. Kiekvienas atsisiunčia kopiją.

- **Įrašyti**: paspauskite {{key:Mod+S}}, spustelėkite {{ui:Save}} arba įveskite `SAVE` (taip pat `QSAVE`). Įrašoma brėžinio formatu: DWG, jei atidarėte DWG, DXF, jei atidarėte DXF. DWG išlaiko versiją, su kuria buvo atidarytas (2018 m. failas įrašomas kaip 2018). Naujas brėžinys naudoja formatą ir DWG versiją, kuriuos paskutinį kartą pasirinkote naršyklėje per {{ui:Save as}}; jei nieko nepasirinkote, – DWG AutoCAD 2000 formatu.
- **Įrašyti kaip**: paspauskite {{key:Mod+Shift+S}}, spustelėkite {{ui:Save as}} arba įveskite `SAVEAS`. Dialogas {{ui:Save a copy as}} siūlo {{ui:DWG}}, sąrašą {{ui:Version}} (AutoCAD 2018, 2013, 2010, 2007, 2004 arba 2000), {{ui:DXF R12}} ir {{ui:DXF 2000}}, kiekvieną su failo pavadinimu, kurį jis suteiks, ir jau pasirinktu dabartiniu brėžinio formatu bei versija. Spustelėkite {{ui:Save}}, kad atsisiųstumėte, arba {{ui:Cancel}} (arba {{key:Esc}}), kad nieko neįrašytumėte; tada istorijoje rašoma „Neįrašyta.“ Tai, ką pasirinksite, išlieka: {{key:Mod+S}} nuo tada naudoja šį pasirinkimą šiam brėžiniui, o nauji brėžiniai šioje naršyklėje pradedami su juo.
- **DXFOUT**: įveskite `DXFOUT`. Visada atsisiunčiama DXF R12 kopija, o kitas {{key:Mod+S}} vis tiek įrašo brėžinio paties formatu.

Naršyklė atsisiunčia `<brėžinio pavadinimas>.dwg` arba `<brėžinio pavadinimas>.dxf`. Kiekvienas įrašymas yra **naujas atsisiuntimas**; atidarytas failas niekada nepERrašomas ir nekeičiamas. Istorija tai patvirtina, pavyzdžiui: „Įrašyta kopija kaip Plan.dwg (DWG (AutoCAD 2018)). Jūsų originalus Plan.dxf nepakeistas.“ DXF atveju rašoma „(DXF R12, atsidaro bet kurioje CAD programoje)“. Po ja išvardytos eilutės nurodo, kas pakito.

Kai CadCraft veikia darbalaukio programoje, įrašymas veikia taip, kaip kitose darbalaukio programose: {{key:Mod+S}} įrašo brėžinį atgal į atidarytą failą, jo paties formatu ir versija, o istorijoje nurodoma, kur jis įrašytas. {{ui:Save as}} ir eksportai rodo sistemos įrašymo dialogą, o `.dwg`, `.dxf` ar `.ccsheets` failas, kurį dukart spustelėsite, atsidaro CadCraft.

PDF įrašykite spausdinant (žr. žemiau).

## Ką DWG išlaiko ir keičia

CadCraft pats rašo DWG jūsų naršyklėje, ta pačia DWG biblioteka, kuria ir skaito. Versiją pasirinkite skiltyje {{ui:Save as}}: AutoCAD 2000 formatas (failo versija AC1015) atsidaro daugiausia programų, net senų; naujesni formatai (2004, AC1018, iki 2018, AC1032) taip pat išlaiko tikras spalvas. Niekas neįkeliama, o DWG įrašymas veikia neprisijungus.

Kiekviena versija patikrinama perskaitant įrašytus failus trijų kitų programų DWG skaitikliais ir pačiu CadCraft. CadCraft DWG dar nebuvo atidarytas pačiame AutoCAD.

### Ką DWG išlaiko

- Linijos, lankai, apskritimai, elipsės, taškai ir polilinijos su lankų atkarpomis.
- Vienos eilutės tekstas su lygiavimu ir pločio koeficientu.
- Kelių eilučių ir perkeltas tekstas kaip kelių eilučių tekstas. Kita programa jį vėl perkelia iš to paties pločio.
- Objektų spalvos: pagal sluoksnį, pagal bloką, 255 standartinės spalvos ir tikros spalvos 2004 formatu ir naujesniuose.
- Sluoksniai su spalva, linijos tipu, linijos storiu ir įjungimo, įšaldymo, užrakinimo bei spausdinimo nustatymais; objektų linijų tipai, linijų storiai ir linijų tipų masteliai, linijų tipų raštai ir brėžinio linijų tipo mastelis.
- Brėžinio vienetai ir ilgio formatas (dešimtainis, pėdos ir coliai, trupmenos…).
- Blokai su bazės tašku ir atributų aprašais, įskaitant nematomus, pastoviuosius ir iš anksto nustatytus.
- Blokų nuorodos su jų masteliu, pasukimu ir atributų reikšmėmis.
- Vientisi užpildai ir raštuotos brėžinės su raštu, mastelių ir kampu (paties rašto linijos, todėl kitos programos nubrėžia tas pačias linijas kaip CadCraft).
- Matmenys kaip tikri matmenys: kitos programos juos perskaičiuoja, kai jie ištempiami. Kiekvienas išlaiko savo nustatymus (teksto aukštį, rodyklės dydį, dešimtainius skaitmenis, ilgio formatą) ir savo tekstą bei turi nubrėžtą kopiją, kurią turi kiekvienas DWG matmuo.
- Lapai (maketai): kiekvienas lapas su savo popieriaus dydžiu ir vienetais, ant jo nubrėžtais objektais bei vaizdo langais su jų vaizdu ir masteliu.
- Pavadintos vaizdos.
- Daugiakryptės nuorodos kaip daugiakryptės nuorodos.
- Sluoksnių ir blokų pavadinimai taip, kaip juos įvedėte, didžiosiomis ir mažosiomis raidėmis. (DXF R12 rašo didžiosiomis raidėmis.)

### Ką DWG keičia

Kiekvienas iš šių punktų po įrašymo išvardijamas istorijoje, kai jis taikomas jūsų brėžiniui.

| CadCraft | Įrašytame DWG |
|---|---|
| Tikros spalvos (parinktos spalvų parinkikliu), 2000 formatu | Artimiausia standartinė spalva: 2000 formatas turi tik 255. Įrašykite kaip 2004 ar naujesnį, kad jas išlaikytumėte |
| Pavadintos lapų vaizdos | Popieriaus erdvės vaizdos: DWG nenurodo, kuriam lapui jos priklauso, todėl, CadCraft vėl atidarius failą, jos priklauso pirmajam lapui |
| Kelių eilučių tekstas su pločio koeficientu | Įprastas raidės plotis: DWG pločio koeficientas taikomas tik vienos eilutės tekstui |
| Sluoksnių ar blokų pavadinimai su simboliais, kurių DWG neleidžia | Pakeista: susietos brėžinio pavadinimas, pavyzdžiui `Base\|Walls`, tampa `Base$0$Walls` (taip pavadina susieto brėžinio pririšimas), o kiti simboliai pakeičiami `_` |

### Kodėl R12 ir kas konvertuojama

Kai įrašote kaip DXF, CadCraft rašo DXF R12 – versiją, kurią gali atidaryti bet kuri CAD programa. Ji senesnė už kai kurias funkcijas, todėl kai kas įrašoma paprastesne forma:

| CadCraft | Įrašytame R12 faile |
|---|---|
| Kelių eilučių tekstas | Vienas teksto objektas kiekvienai eilutei |
| Elipsės | Polilinijos, sekančios elipsę |
| Brūkšniuotės (iš atidarytų failų) | Tik jų kontūrai |
| Tikros spalvos (parinktos spalvų parinkikliu) | Artimiausia standartinė spalva |
| Linijų storiai ir objektų linijų tipų masteliai | Praleidžiami: R12 jų neturi (linijų tipai išlaikomi) |
| Sluoksnių ir blokų pavadinimai | Rašomi didžiosiomis raidėmis; tarpai ir kiti simboliai tampa `_`, o pavadinimai sutrumpinami iki 31 simbolio („Title block“ tampa `TITLE_BLOCK`) |
| Sluoksniai, nustatyti nespausdinti | Kitos programos juos atspausdins (CadCraft prisimena nustatymą, kai brėžinyje yra lapas) |
| Matmenys | Tikri matmenys su savo nubrėžtu blokui, todėl kitos programos rodo juos taip, kaip matote |
| Daugiakryptės nuorodos | Linijos, rodyklė ir tekstas, kuriuos jos nubrėžia |
| Pavadintos vaizdos | Išlaikomos, pavadinimai rašomi didžiosiomis raidėmis; lapo vaizdos grįžta į pirmąjį lapą |
| Keli lapai | Pirmasis lapas yra popieriaus erdvė, kurią rodo visos programos; kiti išlaikomi kaip blokai, pavadinti `CCLAYOUT_1`, `CCLAYOUT_2` … ir kuriuos CadCraft paverčia atgal į lapus, kai atidaro failą |

Istorijoje išvardijama kiekvienas iš šių punktų, taikomas jūsų brėžiniui.

:::tip
Norėdami kelias dienas dirbti su brėžiniu, įrašykite kaip DXF ir kitą kartą atidarykite tą DXF. Viskas, ką CadCraft gali nubrėžti, išlieka po šio ciklo, įskaitant matmenis, blokus ir visus lapus.
:::

## Susietieji brėžiniai (išorinės nuorodos)

{{cmd:XATTACH}} (`XA`, arba {{ui:Blocks}} › {{ui:More}} › {{ui:Link a drawing (xref)}}) susieja kitą DWG arba DXF: pasirinkite failą, tada spustelėkite, kur jis turi būti ({{key:Enter}} įdeda jį į 0,0). Jis įkeliamas kaip vienas blokas, pavadintas pagal failą, tinkamu masteliu, kai abiejų brėžinių vienetai skiriasi. Jo sluoksniai ir blokai išlaiko savo pavadinimus, prieš kuriuos rašomas susiejimo pavadinimas, pavyzdžiui, `Plan|Walls`, `Plan|Door`, todėl niekada nesimaišo su jūsų objektais: susietus sluoksnius įjunkite ir išjunkite, įšaldykite ar užrakinkite kaip savuosius. Susiejimas yra tik skaitomas: pakeitę kitą brėžinį, perkraukite jį. Ką nustatote susieto sluoksniams (spalvą, linijos tipą, linijos storį, įjungimą ar išjungimą, įšaldymą, užrakinimą, spausdinimą), išlieka perkrovus, kai brėžinį įrašote kaip DWG, kol susiejimas dar yra susiejimas, ir kai kitas brėžinys susieja šį.

{{cmd:XREF}} (`XR`): `?` išvardija susiejimus (įkeltus ar ne, kuris failas, kiek nuorodų); `A` pridės; `R` perkrauna vieną iš failo (pasirinkite failą iš naujo: naršyklė pati nepasiekia jūsų aplankų); `B` pririša vieną (jis tampa įprastais blokais ir sluoksniais, pavadintais `Plan$0$Walls`); `D` atjungia vieną (jo nuorodos ir sluoksniai dingsta). Kiekvienas yra vienas anuliavimo žingsnis.

{{cmd:XCLIP}} (`XC`) iškerpa blokų nuorodas ir susiejimus: pažymėkite juos, `N` naujai ribai, tada `R` ir du kampus arba `P` ir daugiakampio taškus ({{key:Enter}} uždaro jį); `D` pašalina iškirpimą. Rodoma ir spausdinama tik tai, kas yra viduje, o iškirpimas juda kartu su nuoroda. DWG ir DXF 2000 išlaiko iškirpimus; DXF R12 įrašo nuorodą visą ir apie tai praneša. Kai pririšate susiejimą, kuris turi iškirptų nuorodų, {{cmd:XREF}} `B` klausia: `A` pririša viską, `C` palieka tik kiekvienos nuorodos iškirptą dalį (linijos ir lankai nupjaunami ties riba; tekstai ir įdėtieji blokai lieka, kai jų įterpimo taškas yra viduje).

Atidarytas brėžinys gali susieti failus, kurių CadCraft negali matyti: jis parodo, kiek jų neįkelta. Naudokite {{cmd:XREF}}, `R` ir pasirinkite kiekvieną failą, kad juos pamatytumėte.

Kai įrašote, įkeltas susiejimas **pririšamas** į failą (kitos programos mato įprastus blokus ir sluoksnius, pavadintus `Plan$0$…`), ir istorijoje tai nurodoma. Neįkeltas susiejimas lieka susiejimu su savo failu tiek DWG, tiek DXF.

## Atidaryti 3D

{{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} ({{cmd:OPENIN3D}}) atveria brėžinį 3D modeliavimo programoje naujame skirtuke, kaip DWG, jo neįkeliant. Ten padaryti pakeitimai lieka ten; įrašykite juos ten. Meniu punktas rodomas tik ten, kur ta programa gali perimti perduotą brėžinį.

## Brėžinio spausdinimas į PDF

Paspauskite {{key:Mod+P}}, spustelėkite {{ui:Plot}} arba įveskite `PLOT`. PDF sukuriamas naršyklėje ir atsisiunčiamas arba atidaromas naujame skirtuke spausdinimui. Žr. [Spausdinti į PDF](topic:plot-pdf).

## Kur keliauja failai

Kiekvienas įrašymas ir kiekvienas spausdinimas yra atsisiuntimas, todėl failai atsiduria ten, kur naršyklė deda atsisiuntimus: paprastai aplanke Downloads. Jei norite kiekvieną kartą rinktis aplanką, pakeiskite atsisiuntimų nustatymą naršyklėje; [Naršyklės ir kompiuteriai](common:browsers) parodo, kur tai rasti.

Nieko, ką atidarote ar įrašote, mes nesiunčiame. Žr. [Kur keliauja jūsų failai](common:your-files).

## PLN ir PLA projekto failai

CadCraft atveria DWG ir DXF brėžinius, o ne Archicad savuosius failus (`.pln`, `.pla`, `.tpl`, `.bpn`). Atidarius vieną, pranešama, koks jis yra. Archicad programoje įrašykite reikalingus vaizdus ar maketus kaip DWG ir atidarykite juos čia arba eksportuokite modelį kaip IFC ir atidarykite jį BimCraft programoje. Kai BimCraft gali perimti failą, CadCraft pasiūlo {{ui:Open in BimCraft}}.

## Jei puslapis užsidaro prieš įrašant

CadCraft saugo kiekvieno pakeisto brėžinio kopiją tik šioje naršyklėje, netrukus po to, kai baigiate redaguoti. Jei skirtukas užsidaro, naršyklė sustoja arba kompiuteris paleidžiamas iš naujo prieš įrašant, kitą kartą paleidus CadCraft klausiama **Atkurti jūsų darbą?**: {{ui:Recover}} vėl atidaro brėžinį neįrašytą, savo skirtuke. Įrašius brėžinį, jo kopija pašalinama. Žr. [Atkurti jūsų darbą](common:recover).

## Prisijungus ir neprisijungus

Atidarymas, brėžimas, įrašymas (DWG ir DXF) ir spausdinimas vyksta jūsų kompiuteryje, todėl veikia be ryšio, kai CadCraft jau įkeltas.

Kad naudotumėte CadCraft be jokio ryšio, būdami prisijungę, viršutinėje juostoje spustelėkite {{ui:Save for offline}}. Etiketė skaičiuoja („Įrašoma 40 iš 212“) ir baigiasi „Paruošta neprisijungus“. Įrašytoje kopijoje yra DWG skaitiklis, iš viso apie 5 MB, todėl **DWG failai atsidaro ir neprisijungus**, kai tik ji įrašyta. Spustelėkite mygtuką dar kartą, kad atliktumėte {{ui:Save again (get the newest version)}} arba {{ui:Remove the offline copy}}. „Nepavyko įrašyti“ reiškia, kad kai kurie failai neatsisiuntė: patikrinkite ryšį ir spustelėkite, kad bandytumėte dar kartą. „Neprisijungus nepasiekiama“ reiškia, kad šis naršyklės langas negali išsaugoti kopijos (privatūs langai ir kai kurie valdomi kompiuteriai).

Be įrašytos kopijos DWG skaitiklis įkeliamas pirmą kartą, kai atidarote DWG po puslapio įkėlimo, todėl DWG atidarymas neprisijungus gali nepavykti; DXF failams jo niekada nereikia. Neperkraukite puslapio neprisijungę, nebent CadCraft yra įrašytas.

Išsamiau žr. [Darbas neprisijungus](common:offline).

:::offline
Dabar esate neprisijungę. Brėžiniai įrašomi kaip DWG arba DXF ir spausdinami įprastai, DXF failai atsidaro. DWG failai atsidaro, jei CadCraft rodo „Paruošta neprisijungus“, arba jei DWG skaitiklis jau įkeltas šiame skirtuke.
:::

## Apribojimai failuose

Apribojimai ir parametrai (žr. [Apriboti brėžinį](topic:constraints)) įrašomi tiek DWG, tiek DXF. Kiekvienas apribotas objektas turi mažą CadCraft pastabą (išplėstiniai duomenys), o nenaudojamas blokas, pavadintas `CADCRAFT_PARAMETRIC`, saugo apribojimus ir parametrų lentelę. Kitos programos atidaro brėžinį įprastai ir šiuos abu ignoruoja; išvalydamos jie gali ištrinti nenaudojamą bloką. Pastabos nurodo objektus pagal jų pačių raktą, o ne pagal failo rankenas, todėl programa, kuri perkelia rankenas, jų nesugadina. Kai kita programa ištrina ar pakeičia apribotą objektą, CadCraft atidarant failą atsisako apribojimų jam ir praneša, kiek jų. Failas be jų atsidaro be apribojimų.

Iš detalių modeliavimo programos eksportuotas eskizas (`.json`) taip pat atsidaro: žr. [Perkelkite eskizus į kitas detalių modeliavimo programas ir iš jų](topic:solidworks-sketches).

## Dar nepasiekiama

- Daugiakryptės nuorodos kaip daugiakryptės nuorodos objektai įrašytame DXF (R12 jų neturi: jos įrašomos kaip tai, ką nubrėžia).
- Paveikslėliai įrašytame DXF (jie įrašomi kaip jų rėmeliai; DWG išlaiko juos kaip paveikslėlius) ir išmušimai, kurie slepia tai, kas po jais.
- DXF įrašymas naujesne versija nei 2000.
- Debesų įrašymas ir sinchronizavimas tarp kompiuterių.

Pilną sąrašą žr. [Dar nepadaryta](topic:not-built-yet).
