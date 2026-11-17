---
title: Teksta un uzrakstu pievienošana
summary: Novietojiet telpu uzrakstus ar vienrindas tekstu, rakstiet ietītas piezīmes ar rindkopas tekstu, ierakstītu tieši vietā, un vēlāk rediģējiet tekstu.
keywords: teksts, dtext, mtext, mleader, multileader, norāde, revcloud, revīzijas mākonis, mākonis, atrast, aizstāt, atrast un aizstāt, rindkopa, ietīšana, rindu atstarpe, uzraksts, piezīme, anotācija, augstums, izlīdzināt, textmask, fona maska, maska, wipeout, pagriešana, rediģēt tekstu, ddedit, textedit, fonts
from: 4b76be99
---

## Ko jūs izveidosiet

Divi telpu uzraksti, centrēti savās telpās, piezīme, kas ietinas atbilstoši savam platumam, un pēc tam viena no uzrakstiem labojums.

## Teksta augstums un rasējuma mērogs

Teksta augstums tiek mērīts rasējuma vienībās. Rasējumā milimetros, kas tiks drukāts 1:50 mērogā, teksts, kas uz papīra ir 2.5 mm augsts, modelī jābūt 2.5 × 50 = 125 vienības augstam. Lapas cilnē, kurā zīmējat papīra vienībās, 2.5 tur nozīmē 2.5 mm uz papīra.

## Centrēta uzraksta novietošana

1. Ierakstiet `DT` un nospiediet {{key:Enter}} (vai noklikšķiniet {{ui:Teksts}} rīkjoslā). Uzvedne ir `Specify start point of text [Justify]:`.
2. Ierakstiet `J` un nospiediet {{key:Enter}}.
3. Pie `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:` ierakstiet `MC` un nospiediet {{key:Enter}}.
4. Pie `Specify insertion point of text` noklikšķiniet telpas vidū.
5. Pie `Specify height` ierakstiet `250` un nospiediet {{key:Enter}}.
6. Pie `Specify rotation angle of text <0>` nospiediet {{key:Enter}}.
7. Pie `Enter text` ierakstiet `VIRTUVE` un nospiediet {{key:Enter}}.

Uzraksts parādās, centrēts punktā, uz kura noklikšķinājāt.

8. Tukšajā uzvednē `Enter text` nospiediet {{key:Enter}}, lai pabeigtu komandu.

## Ietīstas piezīmes rakstīšana

Rindkopas teksts ({{cmd:MTEXT}}) ietinas noteiktā platumā un tiek rakstīts tieši rasējumā.

1. Ierakstiet `T` un nospiediet {{key:Enter}} vai noklikšķiniet {{ui:Rindkopa}} rīkjoslā.
2. Pie `Specify first corner` noklikšķiniet, kur jāatrodas piezīmes augšējam kreisajam stūrim.
3. Ja vispirms vēlaties mainīt augstumu, ierakstiet `H`, nospiediet {{key:Enter}}, ierakstiet `250` un nospiediet {{key:Enter}}.
4. Pie `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]` noklikšķiniet pa labi no pirmā stūra. Attālums līdz šim punktam ir platums, pēc kura teksts tiek ietīts; cik tālu uz leju noklikšķināt, nav ierobežojums.
5. Virs rasējuma atveras lodziņš ar kursoru. Ierakstiet `VISI IZMĒRI IR MILIMETROS, JA NAV NORĀDĪTS CITADI`. Vārdi ietinas platumā, kamēr rakstāt.
6. Nospiediet {{key:Enter}}, lai sāktu jaunu rindkopu, un ierakstiet `PĀRBAUDIT VIETĀ`.
7. Nospiediet {{key:Mod+Enter}}, noklikšķiniet {{ui:Labi}} vai noklikšķiniet jebkur ārpus lodziņa. Piezīme ir viens objekts.

Josla virs lodziņa maina {{ui:Augstums}}, {{ui:Rindu atstarpe}} (1 ir parasti, 1.5 ir par pusi vairāk), {{ui:Platums}} (0 = nav ietīšanas) un {{ui:Izlīdzināt}}, kamēr rakstāt. {{key:Esc}} vai {{ui:Atcelt}} to aizver, neko nepievienojot.

Opcijas otrajā stūrī: `H` augstums, `J` izlīdzinājums (`TL` augšējais kreisais ... `BR` apakšējais labais: stūris vai lodziņa vidus, kas paliek vietā), `L` rindu atstarpe, `R` pagriešana, `W` ierakstīts platums otrā stūra vietā.

:::note
Kamēr lodziņš ir atvērts, {{key:Space}} ieraksta atstarpi un {{key:Enter}} sāk jaunu rindkopu. Saglabāts DWG glabā rindkopas tekstu kā MTEXT; DXF R12 formātam rindkopas teksta nav, tāpēc katra rindiņa tiek saglabāta kā atsevišķs teksts.
:::

### Vairākas atsevišķas rindas

{{cmd:TEXT}} (`DT`) pieprasa vienu rindu vienlaikus: katrs {{key:Enter}} sāk nākamo rindu, 1.667 reizes teksta augstuma attālumā zemāk, un katra rinda ir atsevišķs objekts. Nospiediet {{key:Enter}} tukšā rindā, lai pabeigtu.

## Izlīdzināšanas iespējas

| Iespēja | Punkts, uz kuru noklikšķināt, ir |
|---|---|
| Pa kreisi (noklusējums) | Pamatlīnijas kreisais gals |
| Centrs | Pamatlīnijas vidus |
| Pa labi | Pamatlīnijas labais gals |
| Vidus, MC | Teksta vidus gan horizontāli, gan vertikāli |
| TL | Augšējais kreisais stūris |

## Teksta rediģēšana

1. Veiciet dubultklikšķi uz teksta objekta. Tas atveras tajā pašā lodziņā kā jauns rindkopas teksts, kursors beigās.
2. Mainiet vārdus.
3. Nospiediet {{key:Mod+Enter}} vai noklikšķiniet ārpus lodziņa. Teksts rasējumā mainās; {{key:Esc}} atstāj to nemainītu.

{{cmd:TEXTEDIT}} (`ED`) dara to pašu: izvēlieties vienu tekstu pēc otra un nospiediet {{key:Enter}}, kad esat pabeidzis.

Lai mainītu tekstu, izvēlieties to labajā panelī: {{ui:Teksts}}, {{ui:Augstums}}, {{ui:Pārnešanas platums}} (0 = nav ietīšanas), {{ui:Rindu atstarpe}}, {{ui:Pagriešana}}, X un Y pozīciju un {{ui:Izlīdzināt}}. Saraksts {{ui:Izlīdzināt}} piedāvā arī Apakšā pa kreisi, ko dažkārt izmanto teksts no citām programmām.

## Formatējums rindkopas tekstā no citām programmām

Rindkopas teksts DWG vai DXF failā var saturēt kodus: krāsas pa vārdiem, treknrakstu un slīprakstu, pasvītrojumu, virspasvītrojumu un pārsvītrojumu, sakrautas daļas, piemēram, 1/2, un atšķirīgu augstumu vienam vārdam. CadCraft saglabā šos kodus, attēlo tos (ekrānā un drukātā PDF) un saglabā atpakaļ nemainītus.

Rediģējot šādu tekstu (dubultklikšķis, {{cmd:TEXTEDIT}}, labā paneļa lauks Teksts vai {{cmd:FIND}} ar aizstāšanu), jūs rediģējat tā vienkāršos vārdus. Vārds, ko ierakstāt, nonāk blakus esošajā fragmentā un iegūst tā krāsu un stilu; citi kodi paliek savās vietās. Ja pārrakstāt sakrautas daļas skaitļus, šī daļa kļūst par vienkāršu tekstu. Visa teksta iestatīšana no lauka Teksts saglabā kodus tikai tur, kur var noteikt, kuri vārdi palika.

Fontu nosaukumi (`\F`) tiek saglabāti un ierakstīti failā, bet viss tiek zīmēts vienā Helvetica tipa fontā. Rīkjoslas kodu ievadīšanai vēl nav.

## Norādīt uz kaut ko: daudzvadu norādes

{{ui:Norāde}} grupā {{ui:Anotēt}} ({{cmd:MLEADER}}, `MLD`) zīmē bultiņu, norādes līniju, īsu nolaidumu un piezīmi kā vienu objektu.

1. Noklikšķiniet {{ui:Norāde}}. Pie `Specify leader arrowhead location` noklikšķiniet to, uz ko attiecas piezīme.
2. Pie `Specify leader landing location` noklikšķiniet, kur jāatrodas piezīmei. Nolaidums pagriežas uz to pusi, uz kuru noklikšķinājāt.
3. Ierakstiet piezīmi atvērtajā lodziņā un nospiediet {{key:Mod+Enter}}.

`A` un `L` pirmajā jautājumā iestata bultiņas izmēru un nolaiduma garumu; teksta augstums nāk no {{ui:Teksta augstums}} jauniem izmēriem, reizinot ar {{ui:Kopējais mērogs}}. Veiciet dubultklikšķi uz daudzvadu norādes, lai mainītu tās vārdus. Rokturi pārvieto bultiņu un nolaidumu; piezīme seko nolaidumam. {{ui:Rekvizīti}}: {{ui:Teksts}}, {{ui:Augstums}}, {{ui:Pārnešanas platums}}, {{ui:Bultiņas izmērs}} un {{ui:Nolaišanās attālums}}.

:::note
Daudzvadu norādes DWG tiek saglabātas kā īstas daudzvadu norādes. DXF R12 vai 2000 formātā tādu nav, tāpēc tur tās tiek saglabātas kā līnijas, bultiņa un teksts, ko tās zīmē.
:::

## Izmaiņu atzīmēšana ar revīzijas mākoni

{{ui:Anotēt}} › {{ui:Vairāk}} › {{ui:Revīzijas mākonis}} ({{cmd:REVCLOUD}}, `RC`) zīmē mākoni no lokiem ap to, kas mainījies. Vēsture rāda loka garumu un tipu, ko tas izmantos.

- **Taisnstūra** (pirmoreiz): noklikšķiniet divus stūrus.
- `P` **Daudzstūra**: noklikšķiniet stūrus; {{key:Enter}} aizver mākoni.
- `F` **Brīvroku**: noklikšķiniet, kur tas sākas, un pārvietojiet rādītāju ap apgabalu bez klikšķiem; loks tiek pievienots ik pēc loka garuma. Noklikšķiniet vai nospiediet {{key:Enter}}, lai to aizvērtu.
- `O` **Objekta**: izvēlieties slēgtu polilīniju, riņķi vai elipsi (vai līniju, loku vai atvērtu polilīniju); tā kļūst par mākoni. `Reverse direction?` `Y` pagriež lokus uz iekšu.
- `A` **Loka garums**: katra loka garums. Izvēlieties to, kas atbilst drukas mērogam.

Mākonis ir slēgta polilīnija no lokiem, tāpēc tas tiek saglabāts jebkurā formātā.

## Vārdu atrašana un aizstāšana

{{ui:Rediģēt}} › {{ui:Vairāk}} › {{ui:Atrast un aizstāt}} ({{cmd:FIND}}) meklē tekstā, bloku atribūtu vērtībās un izmēru tekstā atvērtajā cilnē (vai tikai atlasītajos objektos).

1. Ierakstiet vārdus laukā {{ui:Atrast}}. Saraksts rāda katru vietu, kur tie ir, un skaitu.
2. Ja vajag, izvēlieties {{ui:Ievērot reģistru}}, {{ui:Tikai veseli vārdi}} vai {{ui:Izmantot aizstājējzīmes (* un ?)}}, un noņemiet atzīmi no tā, kur nemeklēt.
3. Noklikšķiniet {{ui:Atlasīt atrastos}}, lai atlasītu šos objektus, vai ierakstiet jaunos vārdus laukā {{ui:Aizstāt ar}} (saraksts rāda, kas katrs kļūst) un noklikšķiniet {{ui:Aizstāt visus}}. Viens {{key:Mod+Z}} atsauc visas aizstāšanas.

Izmēra izmērītā vērtība nav teksts, tāpēc to nekad neaizstāj: tekstā `<> TYP.` var mainīt tikai `TYP.`.

## Līniju paslēpšana aiz uzraksta

1. Atlasiet tekstus, ierakstiet {{cmd:TEXTMASK}} un nospiediet {{key:Enter}}.
2. `B` aizkrāso rasējuma fonu aiz tiem; `C` pieprasa krāsas numuru. `O` noņem masku.
3. `Border offset factor`: {{key:Enter}} saglabā 1.5, tas ir puse no teksta augstuma ap tekstu.

Maska paslēpj līnijas zem teksta ekrānā un drukājot. DWG 2004 vai jaunāks un DXF 2000 to saglabā; DWG 2000 formāts un DXF R12 to nevar, un saglabāšanas brīdī par to tiek paziņots.

## Fonts

Visi teksti tiek zīmēti Helvetica tipa fontā, ekrānā un PDF failos. Tekstam no atvērtiem rasējumiem saglabājas vārdi, augstums un pozīcija, bet ne sākotnējais fonts (fonta nosaukums rindkopas tekstā tiek saglabāts failā, skat. iepriekš).

Drukātos PDF failos jebkurš Eiropas rakstu, kirilicas vai grieķu teksts tiek drukāts kā pats (PDF satur vajadzīgos burtus, un tekstu joprojām var atlasīt un meklēt). Ķīniešu, japāņu un korejiešu teksts arī tiek drukāts kā pats (pirmoreiz, kad tas vajadzīgs, drukāšana ielādē lielāku fontu). Arābu, persiešu, urdu un ebreju teksts arī tiek drukāts kā pats (skat. nākamo sadaļu). Rakstzīmes, kurām nevienā fontā nav burta, tiek drukātas kā "?", un vēsturē tiek norādīts, cik to bija.

## Teksts no labās uz kreiso pusi: arābu, persiešu, urdu, ebreju

Ierakstiet tekstu kā jebkur citur: {{cmd:TEXT}} un {{cmd:MTEXT}} zīmē katru rindu lasīšanas secībā. Rindu, kuras pirmais burts ir arābu vai ebreju, lasa no labās uz kreiso pusi; cipari un latīņu vārdi tajā saglabā savu kārtību no kreisās uz labo, un arābu rakstības burti ir savienoti. Rinda, kas sākas ar latīņu burtu, paliek no kreisās uz labo pusi, un tajā esošie vārdi no labās uz kreiso paliek savās vietās. Katrai daudzrindu teksta rindkopai ir savs virziens, un ietīta rindkopa to saglabā katrā rindā.

Teksts tiek saglabāts tā, kā to ierakstījāt, tāpēc DWG un DXF faili to apmainās ar citām programmām nemainītu. Ievietošanas punkts un izlīdzināšana ({{ui:Pa kreisi}}, {{ui:Centrs}}, {{ui:Pa labi}}) nozīmē to pašu pusi, kas jebkuram tekstam: piezīme no labās uz kreiso pusi, kurai jāpiekaras no sava labā gala, vajag {{ui:Pa labi}}.

Ekrānā burti nāk no jūsu sistēmas fontiem. Drukātā PDF ebreju teksts izmanto to pašu iegulto fontu kā latīņu teksts; arābu rakstības teksts liek drukāšanai ielādēt vēl vienu fontu (mazāku par 1 MB, vienu reizi), un tad viss PDF tiek drukāts šajā fontā. Šim fontam nav savas formas trim urdu rakstzīmēm (heh goal, yeh barree un urdu pilnais punkts): tās tiek drukātas tuvākā arābu burta formā. Rasējums, kurā ir gan arābu rakstības, gan ķīniešu, japāņu vai korejiešu teksts, vienu no tiem drukā kā "?", jo drukājumā ir viens fonts. Ielādēta SHX fonta teksts tiek sakārtots un savienots, ja fontā burti atrodas savās Unicode vietās; vecajiem fontiem, kuru burti jau ir veidoti, izmantojiet {{ui:Pagriezt}} komandā {{cmd:SHXFONTS}}, kā līdz šim.

## Biežākās kļūdas

- **Teksts ir pārāk mazs, lai to redzētu.** Augstums ir rasējuma vienībās. Lielā rasējumā izmantojiet lielu augstumu (skat. augstāk) vai tuviniet.
- **Komanda beidzās pēc vienas rindas.** Jūs nospiedāt {{key:Enter}} tukšā rindā komandā {{cmd:TEXT}}. Sāciet to vēlreiz vai izmantojiet rindkopas tekstu (`T`), kur {{key:Enter}} sāk jaunu rindkopu.
- **`T` atvēra lodziņu, nevis prasīja rindu.** Kā AutoCAD, `T` ir rindkopas teksts ({{cmd:MTEXT}}); vienrindas teksts ir `DT`.
- **Teksts ietinas citur nekā AutoCAD.** CadCraft ietin, izmantojot Helvetica platumus; cits fonts var vienu vārdu ietilpināt rindā vairāk vai mazāk.
- **Teksts atspoguļotā kopijā.** Tas tiek novietots atspoguļoti, bet paliek lasāms no kreisās uz labo pusi.
