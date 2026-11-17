---
title: Ievietošana no faila vai bibliotēkas
summary: Ievietojiet bloku vai veselu rasējumu no cita DWG vai DXF un novietojiet vienumus no bibliotēkas, faila vai citas bibliotēkas, ar to autorību un atjauninājumiem.
keywords: ievietot, fails, bibliotēka, librarycraft, vienums, aprīkojums, bloks no cita rasējuma, wblock, design center, autorība, licence, atjauninājums, avots, item.json
from: 316188d2
---

## Bloka ievietošana no cita rasējuma

1. Ierakstiet `I` un nospiediet {{key:Enter}}, vai noklikšķiniet uz {{ui:Ievietot}} grupā {{ui:Bloki}}.
2. Pie `Enter block name or [File/Library]` ierakstiet `F` un nospiediet {{key:Enter}}.
3. Izvēlieties DWG vai DXF šajā datorā. Tas tiek nolasīts šeit; to neatver, un nekas netiek augšupielādēts.
4. Dialogā {{ui:Ievietot no}} izvēlieties bloku no saraksta (ierakstiet laukā {{ui:Filtrēt blokus}}, lai to atrastu), vai paturiet {{ui:Viss rasējums}}. Noklikšķiniet uz {{ui:Ievietot}}.
5. Noklikšķiniet, kur tas jānovieto, un aizpildiet visus atribūtus, ko tas prasa.

Viss rasējums tiek ievietots kā viens bloks ar faila nosaukumu. Arī bloki izvēlētā bloka iekšienē tiek ievietoti. Slāņi, ko tie izmanto, tiek pievienoti šim rasējumam.

Ja citam rasējumam ir citas vienības (piemēram, collas un milimetri), CadCraft mērogo atsauci atbilstoši un par to paziņo vēsturē.

### Kad nosaukums jau ir lietots

Ja šim rasējumam jau ir bloks ar tādu pašu nosaukumu, CadCraft jautā:

- {{ui:Paturēt esošos}} izmanto šī rasējuma bloku ar šādu nosaukumu.
- {{ui:Pārdēvēt}} ievieto jauno kā `Name (2)`.

Visa ievietošana ir viens solis: {{key:Mod+Z}} noņem atsauci un nokopētās definīcijas.

## Bibliotēkas atvēršana

Noklikšķiniet uz {{ui:Bibliotēka…}} panelī {{ui:Bloki}}, vai uz {{ui:Bibliotēka}} grupā Bloki, vai ierakstiet `LIB`. Pie uzvedne `INSERT` ierakstot `L`, tā arī atveras.

Bibliotēkai ir četri avoti, kas parādīti kā cilnes:

- {{ui:Bibliotēka}}: CadCraft bibliotēka. Meklējiet pēc nosaukuma, ražotāja vai modeļa un filtrējiet pēc kategorijas.
- {{ui:Faili…}}: vienuma fails (`item.json`) no jebkuras bibliotēkas, vai rasējums, izklājlapa vai 3D modelis, no kā veidot vienumus: DWG vai DXF (katrs bloks kļūst par vienumu), CSV ar nosaukuma un izmēra kolonnām vai glTF vai OBJ modelis. Nekas netiek augšupielādēts.
- {{ui:Standarta}}: tērauda profili (kā griezumi, fasādes vai 3D elementi) un standarta detaļas, piemēram, skrūves, uzgriežņi un gultņi, kas izveidoti šeit no publicētām tabulām. Skatiet [Tērauda profilu un standarta detaļu novietošana](topic:steel-and-standard-parts).
- {{ui:Citi avoti}}: citas bibliotēkas, kas atbild tāpat kā Bibliotēka. Pievienojiet to adresi vienreiz; šī pārlūkprogramma to atceras.

Katrā kartītē redzams priekšskatījums, nosaukums, ražotājs un modelis, licence un versija. Atsaukts vienums ir atzīmēts ar {{ui:Atsaukts}} un iemeslu; CadCraft pirms novietošanas jautā.

## Vienuma novietošana

1. Kartītē noklikšķiniet uz {{ui:Ievietot}}.
2. Noklikšķiniet, kur jānovieto vienums. Vispirms ierakstiet `R`, lai to pagrieztu, vai `S`, lai to mērogotu.
3. Pie `Enter Item number (CC-ITEM)` nospiediet {{key:Enter}}, lai izmantotu nākamo brīvo numuru, vai ierakstiet savu.

Vienums kļūst par bloku ar nosaukumu `LIB_<name>_v<version>`, zīmētu šī rasējuma vienībās. Ja rasējumam nav vienību, vienums tiek ievietots milimetros un par to paziņo vēsture; vispirms labajā panelī iestatiet {{ui:Vienības}}.

Tā dati tiek pārnesti kā neredzami atribūti: vienuma id un versija, licence un autorība, ražotājs, modelis, kategorija un izmēri. Skatiet [Bloka atribūti](topic:attributes).

## Vienumi jūsu valodā

Vienums var saturēt savu nosaukumu un aprakstu citās valodās. Ja tie ir valodā, uz kuru iestatīts CadCraft (Iestatījumi › Vispārīgi › Valoda), kartītē un novietotā bloka vienuma nosaukumā tiek izmantoti tie. Pats bloks saglabā nosaukumu, kas veidots no vienuma sākotnējā nosaukuma, tāpēc rasējumā ir viens bloks katram vienumam neatkarīgi no tā, kura valoda to novietoja.

## Atjauninājumu pārbaude

1. Atveriet bibliotēku.
2. Noklikšķiniet uz {{ui:Pārbaudīt atjauninājumus}}.

Katrs bibliotēkas vienums rasējumā tiek uzskaitīts ar saviem vienumu numuriem un to, vai tas ir atjaunināts, vai ir jaunāka versija (un kas mainījās), vai arī tas ir atsaukts. Noklikšķiniet uz {{ui:Atjaunināt}} rindā vai uz {{ui:Atjaunināt visu}}. Katra atsauce pāriet uz jaunās versijas bloku un saglabā savu vienuma numuru, daudzumu, vietu, leņķi un slāni. {{key:Mod+Z}} atsauc atjauninājumu.

## Autorības norādīšana

Noklikšķiniet uz {{ui:Bibliotēkas autori}}. Katrs vienums ir uzskaitīts ar savu autorības rindu un licenci.

- {{ui:Kopēt autorību}} nokopē viena vienuma rindu; {{ui:Kopēt visu}} nokopē katru rindu.
- {{ui:Lejupielādēt CSV}} saglabā sarakstu ar vienumu numuriem, ražotājiem, modeļiem, licencēm un autorības rindām. To var atvērt jebkurā izklājlapā.

Licences, piemēram, CC BY, prasa norādīt autoru tur, kur izmantojat darbu. Ievietojiet rindas rasējumā, specifikācijā vai projekta piezīmēs.

## Simboli un resursi

Bibliotēkā ir trīs vienumu veidi: Simboli (zīmēšanas konvencijas, 2D), Tipi (no kā elements ir veidots) un Resursi (fiziski objekti). Cilnē {{ui:Bibliotēka}} saraksts {{ui:Vienuma veids}} rāda simbolus un resursus kopā, tikai simbolus vai tikai resursus. Tipi ir tas, no kā tiek veidots BimCraft projekts, tāpēc CadCraft tos neuzskaita.

## Pierakstīšanās bibliotēkā

Noklikšķiniet uz {{ui:Pierakstīties bibliotēkā}}. Atveras neliels logs vietnē; kad esat tur pierakstījies, CadCraft var rādīt jūsu komandas vienumus un reģistrēt to, ko novietojat, lai jūs uzzinātu, ja vienums, ko izmantojāt, mainās. Pierakstīšanās darbojas šai pārlūkprogrammas cilnei. To jebkurā laikā var atsaukt sava konta drošības lapā.

## Biežākās kļūdas

- **„Making items from IFC types is in BimCraft.”** IFC un ģimeņu failus nolasa lietotne BimCraft. Izveidojiet vienumu tur vai bibliotēkā un tad izmantojiet tā `item.json` šeit.
- **„The library could not be reached.”** Jūs esat bezsaistē vai bibliotēka nedarbojas. Rasējumā jau esošie vienumi netiek ietekmēti.
- **Vienums ir pārāk liels vai pārāk mazs.** Rasējuma vienības ir nepareizas vai nav iestatītas. Atsauciet, iestatiet {{ui:Vienības}} un novietojiet vienumu vēlreiz.
