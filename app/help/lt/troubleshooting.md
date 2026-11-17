---
title: Trikčių šalinimas
summary: Pranešimai, kuriuos rodo CadCraft, ir problemos, su kuriomis galite susidurti; kiekvienai pateikiama priežastis ir sprendimas.
keywords: problema, klaida, neveikia, pranešimas, neatsidaro, nežinoma komanda, nieko nevyksta, užstrigo, klavišai neveikia, tuščias, trūksta, taisymas
from: 8299b222
---

## Failų atidarymas

| Pranešimas arba požymis | Priežastis | Sprendimas |
|---|---|---|
| „CadCraft atidaro DWG ir DXF brėžinius. „…“ nėra nei vienas, nei kitas.“ | Failas nėra `.dwg` ar `.dxf`. | Atidarykite pačią brėžinio failą. PDF galima įkelti (Open klausia: importuoti ar pridėti, žr. [PDF underlays](topic:pdf-underlay)); paveikslėliai įdedami su `IMAGEATTACH`. |
| „Šis dvejetainis DXF baigiasi objekto viduryje: failas nukirptas arba sugadintas.“ | Dvejetainis DXF nutrūksta prieš savo pabaigą. | Įveskite RECOVER, kad atvertumėte tai, kas gali būti perskaityta, arba paprašykite failo dar kartą. |
| „Šis failas nėra skaitomas DXF (blogas grupės kodas eilutėje …).“ | DXF sugadintas arba iš tikrųjų nėra DXF. | Paprašykite failo dar kartą arba DWG. |
| „Šio brėžinio nepavyko perskaityti. Gali būti, kad jis sugadintas arba įrašytas versija, kurios skaitytuvas dar nepalaiko (…).“ | DWG skaitytuvas negalėjo jo perskaityti. | Paprašykite DWG, įrašyto senesne versija, arba DXF. |
| „Šis brėžinys sukurtas AutoCAD R11 / R12 (DWG AC1009), senesnis nei tai, ką skaito CadCraft …“ | DWG failai nuo Release 12 ir senesni naudoja formatą, kurio CadCraft neskaito. | Programoje, kuria jis sukurtas, įrašykite jį kaip DXF (bet kuria versija) arba kaip naujesnį DWG ir atidarykite tą. CadCraft savo {{ui:Save as}} siūlo DXF R12 programoms, kurioms reikia to senojo formato. |
| „Nepavyko atidaryti …“, po kurio nurodomas tinklo pranešimas, pirmą kartą atidarant DWG | DWG skaitytuvo nepavyko parsisiųsti: esate neprisijungę, o CadCraft neįrašytas naudoti neprisijungus, arba ryšys nutrūko. | Prisijunkite ir bandykite dar kartą arba atidarykite DXF. Spustelėkite {{ui:Save for offline}} ir palaukite „Offline ready“, kad kitą kartą DWG failai atsidarytų neprisijungus. Žr. [Working offline](common:offline). |
| Neprisijungimo mygtukas sako „Could not save“ | Kai kurie failai nebuvo parsisiųsti. | Patikrinkite ryšį ir spustelėkite mygtuką dar kartą. |
| Neprisijungimo mygtukas sako „Offline not available“ | Privatūs langai ir kai kurie valdomi kompiuteriai negali išsaugoti neprisijungimo kopijos. | Naudokite įprastą langą arba likite prisijungę. |
| CadCraft neatsidaro be ryšio | Šioje naršyklėje jis nebuvo įrašytas naudoti neprisijungus arba naršyklė tai išvalė. | Kitą kartą prisijungę spustelėkite {{ui:Save for offline}} ir palaukite „Offline ready“. |
| Brėžinys atsidaro, bet kai kurių dalių nėra | Objektų, kurių CadCraft dar nemoka piešti, arba failo sluoksnių, kurie išjungti ar užšaldyti. | Perskaitykite „About this file“ kairiajame skydelyje. Patikrinkite {{ui:Layers}} skydelį. |
| Tekstas lūžta į dvi eilutes | CadCraft piešia tekstą Helvetica tipo šriftu, kuris yra platesnis nei kai kurie CAD šriftai. | Sutrumpinkite tekstą ypatybėse arba sutikite su papildoma eilute. |
| Apskritimas rodomas kaip elipsė arba veidrodinis tekstas skaitomas teisingai | Objektas nubrėžtas pasvirusioje plokštumoje arba matomas iš apačios programoje, kuri sukūrė failą. CadCraft rodo jį matytą iš viršaus, taip kaip tos programos planas; tekstas išlieka skaitomas. | Nieko taisyti nereikia. Norint pamatyti taip, kaip mato kita programa, paprašykite brėžinio supaprastinto arba objektų, nubrėžtų iš viršaus. |
| Blokas, apskritimas ar matmuo yra kitoje vietoje, nei programoje, kuri sukūrė failą | Brėžinio atvejis, kurį CadCraft skaito neteisingai. | Praneškite mums Discord, jei galite, pridėkite failą. |

## Komandinė eilutė

| Pranešimas arba požymis | Priežastis | Sprendimas |
|---|---|---|
| „Unknown command “…”. Type HELP for the list.“ | Nėra komandos ar pseudonimo tokiu pavadinimu. | Įveskite `HELP` arba žr. [Command reference](topic:commands). Kai kurios įprastos komandos [dar neįgyvendintos](topic:not-built-yet). |
| „No such command“ šalia komandinės eilutės rašant | Tai, ką įvedėte, dar neatitinka nieko. | Tęskite rašymą arba patikrinkite rašybą. |
| „Point or option keyword required.“ | Tai, ką įvedėte, nėra taškas ar parinktis. | Patikrinkite formatą: `x,y`, `@dx,dy`, `@d<a` arba vienas skaičius. Žr. [Coordinate and distance entry](topic:coordinate-entry). |
| „Requires a positive number or two points.“ | Atstumas buvo neigiamas arba ne skaičius. | Įveskite teigiamą skaičių arba spustelėkite du taškus. |
| „Requires an angle in degrees or two points.“ | Kampas nebuvo skaičius. | Įveskite laipsnius kaip paprastą skaičių. |
| „Requires a number.“ | Tikėtasi skaičiaus. | Įveskite tik skaitmenis. |
| „Invalid option keyword.“ | Raidės neatitinka jokios parinkties. | Įveskite didžiąsias raides, rodomas laužtiniuose skliaustuose. |
| `*Atšaukti*` | Paspaudėte {{key:Esc}} arba {{key:Enter}} ten, kur reikėjo taško. | Paleiskite komandą iš naujo. |
| Rašymas nepasiekia komandinės eilutės | Skydelio ar dialogo langelyje yra žymeklis. | Paspauskite {{key:Enter}} arba {{key:Esc}} arba spustelėkite brėžinį. |
| Komanda naudoja objektus, kurių nepasirinkote | Jie buvo pažymėti prieš jai pradedant. | Paspauskite {{key:Esc}} prieš komandą. |
| Linija nuėjo kur nors netikėtai | `x,y` yra absoliutus. | Naudokite `@dx,dy` santykiniams taškams. |
| „Finish or cancel the current command first (Esc).“ | Paspaudėte {{key:Mod+S}}, kol vykdoma komanda. | Paspauskite {{key:Esc}}, tada įrašykite. |
| „Could not save as DWG (AutoCAD 2000): … Try Save as, then DXF.“ | Kažkas brėžinyje negalėjo būti įrašyta kaip DWG. | Paspauskite {{key:Mod+Shift+S}}, pasirinkite {{ui:DXF R12}} ir spustelėkite {{ui:Save}}. |
| „Not saved.“ | Uždarėte dialogą {{ui:Save a copy as}} su {{ui:Cancel}} arba {{key:Esc}}. | Paspauskite {{key:Mod+Shift+S}} dar kartą ir spustelėkite {{ui:Save}}. |

## Redagavimas

| Pranešimas arba požymis | Priežastis | Sprendimas |
|---|---|---|
| Objekto nepavyksta pažymėti | Jo sluoksnis užrakintas, išjungtas ar užšaldytas; arba esate lape, o objektas yra modelis vaizdo lange. | Atrakinkite sluoksnį arba eikite į skirtuką {{ui:Model}}. |
| „Nothing found there.“ | Po spustelėjimu nėra objekto. | Priartinkite ir spustelėkite pačią liniją. |
| „Nothing crosses that object there.“ | {{cmd:TRIM}} nerado objekto, kertančio pasirinktą dalį. | Patikrinkite, ar pjovimo linija tikrai jį kerta. |
| „Cannot trim that object.“ | Apkirpimas veikia su linijomis, lankais, apskritimais ir polilinijomis. | Pirma suskaidykite blokus arba ištrinkite ir nupieškite iš naujo. |
| „No boundary in that direction.“ | {{cmd:EXTEND}} nerado, prie ko prisijungti. | Pasirinkite arčiau galo, kuris turi pailgėti. |
| „Cannot offset that object.“ | Lygiagretus nuokrypis veikia su linijomis, lankais, apskritimais ir polilinijomis. | Pirma suskaidykite jį arba nubrėžkite lygiagrečią liniją. |
| „Cannot offset that far.“ | Nuokrypis apvertų formą iš vidaus į išorę. | Naudokite mažesnį atstumą. |
| „Radius is too large.“ arba „Distance is too large.“ | Suapvalinimas arba nuokirtis išeitų už linijos galo. | Nustatykite mažesnį spindulį su `R` arba mažesnius atstumus su `D`. |
| „Only the first or last segment of an open polyline can be cut back.“ | Kampas įsiskverbtų į polilinijos vidurį. | Pasirinkite du greta esančius polilinijos segmentus arba naudokite `P` kiekvienam kampui. |
| „Pick a second, different line.“ | Antrasis pasirinkimas buvo ta pati linija arba ne linija. | Pasirinkite kitą liniją. |
| „Only polylines, block references and dimensions explode.“ | Pasirinkime nebuvo ką suskaidyti. | Pasirinkite polilinija, bloko nuorodą arba matmenį. |
| „That is the current layer. Make another layer current first.“ | Bandėte išjungti dabartinį sluoksnį. | Spustelėkite kito sluoksnio pavadinimą, tada išjunkite šį. |
| „There is already a layer called …“ | Sluoksnių pavadinimai turi būti unikalūs. | Pasirinkite kitą pavadinimą. |
| „Nothing to undo.“ | Nebėra ką atšaukti arba atvėrėte ar pradėjote brėžinį (tai išvalo istoriją). | — |

## Matmenys ir blokai

| Pranešimas arba požymis | Priežastis | Sprendimas |
|---|---|---|
| Matmenų tekstas ir rodyklės yra labai maži arba labai dideli | Dydžiai matuojami brėžinio vienetais; bendras mastelis netinka brėžiniui. | Nustatykite {{cmd:DIMSCALE}} spausdinimo masteliui; žr. [Set dimension sizes](topic:dimension-settings). |
| „Pick a point inside the angle you want to measure.“ | Kampinio matmens vieta yra ant krašto. | Spustelėkite kampo viduje. |
| „Those lines are parallel.“ | Lygiagrečių linijų kampo nėra. | Pasirinkite dvi susikertančias linijas. |
| „Pick a linear or aligned dimension.“ | {{cmd:DIMCONTINUE}} arba {{cmd:DIMBASELINE}} reikia pradinio tiesinio ar lygiuoto matmens. | Pasirinkite tiesinį ar lygiuotą matmenį. |
| „This drawing has no blocks yet: F inserts one from a file, L from the library …“ | Brėžinys neturi savo blokų. | Įveskite `F` arba `L`, arba sukurkite bloką su {{cmd:BLOCK}}. |
| „No block called “…”.“ | Pavadinimas neteisingas. | Pranešime pateikiamas blokų sąrašas. |
| „A block name cannot start with * or use …“, po kurio nurodytas simbolių sąrašas | Pavadinime yra simbolis, kurio blokai negali naudoti. | Naudokite raides, skaitmenis, `-` ir `_`. |
| „A block cannot contain itself.“ | Pasirinkime yra nuoroda į kuriamą bloką. | Palikite tą nuorodą. |
| „No objects selected; nothing made.“ | Paspaudėte {{key:Enter}} prieš pasirinkdami. | Paleiskite {{cmd:BLOCK}} dar kartą ir pasirinkite objektus. |

## Lapai ir spausdinimas

| Pranešimas arba požymis | Priežastis | Sprendimas |
|---|---|---|
| „Viewports go on a layout. Open a layout tab (or make one with LAYOUT) first.“ | {{cmd:MVIEW}} skirtuke {{ui:Model}}. | Pirma spustelėkite lapo skirtuką. |
| „Open the layout with the viewport first.“ | {{cmd:VPVIEW}} skirtuke {{ui:Model}}. | Pirma spustelėkite lapo skirtuką. |
| Vaizdo lango mastelis atrodo dešimt kartų neteisingas | Brėžinio vienetai neteisingi. | Nustatykite {{ui:Units}} skiltyje {{ui:Current settings}}. |
| „There is nothing to plot yet.“ | Modelis tuščias. | Nubrėžkite ką nors arba atidarykite brėžinį. |
| „Pick the window to plot.“ | Pasirinktas {{ui:A window…}}, bet langas nebuvo nurodytas. | Spustelėkite {{ui:Pick}} ir pasirinkite du kampus. |
| „… bigger than the paper: the edges are cut off.“ | Plotas tame mastelyje netelpa. | Pasirinkite mažesnį mastelį, didesnį popierių arba {{ui:Fit to paper}}. |
| „The browser blocked the new tab, so the PDF was downloaded instead.“ | Svetainei blokuojami iššokantys langai. | Atidarykite parsisiųstą PDF arba leiskite svetainei iššokančius langus. |
| Simboliai spausdinami kaip „?“ | PDF šriftai neturi tų raidžių (retos ideogramos, hindi ir kitos scenarijus, reikalaujančios sudėtingo formavimo, …), arba didesnio šrifto nepavyko parsisiųsti (neprisijungus). Europiečių raštas, kirilica, graikų, hebrajų, arabų, persų, urdu, tajų, kinų, japonų ir korėjiečių kalbos spausdinamos kaip yra. | Arabiškam raštui, tajų, kinų, japonų ar korėjiečių kalbai spausdinkite dar kartą prisijungę. Kiti raštai dar neįgyvendinti. |
| PDF rodomos konstrukcinės linijos | Jų sluoksnis spausdinamas. | Spustelėkite sluoksnio spausdintuvo mygtuką. |
| Visos linijos vienodai storos | Jų linijos storis yra {{ui:Default}}, todėl jos spausdinamos dialogo pieštuko storiu. | Nustatykite sluoksniams arba objektams {{ui:Lineweight}} dešiniajame skydelyje arba pasirinkite {{ui:Line weight}} dialoge. Norint matyti linijų storius ekrane, spustelėkite {{ui:LWT}} būsenos juostoje. |

## Klavišai ir ekranas

| Požymis | Priežastis | Sprendimas |
|---|---|---|
| F3, F7 arba F8 keičia garsumą arba atidaro Mission Control | „Mac“ funkciniai klavišai. | Laikykite **fn** arba naudokite būsenos juostos mygtukus. Žr. [Keys, mice and trackpads](common:keys). |
| F7 klausia apie caret browsing | Firefox pats naudoja F7. | Pasirinkite No; naudokite {{ui:Grid}} mygtuką. |
| {{key:Mod+N}} atvėrė naršyklės langą | Naršyklė tą klavišą laiko sau. | Spustelėkite {{ui:New}} arba įveskite `NEW`. |
| {{key:Mod+A}} pažymėjo komandinės eilutės tekstą | Komandinė eilutė turėjo žymeklį. | Pirma spustelėkite objektą arba įveskite `ALL` užklausoje `Select objects`. |
| {{key:Delete}} netrina | Komandinė eilutė turėjo žymeklį. | Įveskite `E` ir paspauskite {{key:Enter}}. |
| Dešinysis spustelėjimas nieko nedaro „Mac“ jutiklinėje plokštėje | Spustelėjimas su Control gali būti laikomas paprastu spustelėjimu. | Spustelėkite dviem pirštais. |
| Jutiklinėje plokštėje nieko nepostumia | Nėra vidurinio mygtuko, o tarpas nepostumia. | Perbraukite dviem pirštais: 2D vaizdas postumiamas (suspaudimas ir pelės ratukas priartina). Arba vilkite laikydami dešinįjį spustelėjimą. |
| Pirmas {{key:Esc}} išjungė visą ekraną | Naršyklė naudoja Esc iš viso ekrano išeiti. | Paspauskite {{key:Esc}} dar kartą, kad atšauktumėte komandą. |
| {{key:F1}} nieko nedaro „Mac“ | F1 yra ryškumo klavišas. | Laikykite **fn** arba spustelėkite {{ui:Help}}. |
| Rašymas patenka į žinyno paieškos lauką | Žinyno skydelyje yra žymeklis. | Spustelėkite brėžinį. |
| Brėžinys tapo tuščias | Priartinote labai toli. | Spustelėkite {{ui:Extents}} arba du kartus spustelėkite ratuką. |
| „Leave site?“ uždarant skirtuką | Yra neįrašytų pakeitimų. | Likite, įrašykite su {{key:Mod+S}} ir tada uždarykite. |
