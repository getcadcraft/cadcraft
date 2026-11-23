---
title: Ievietošana no faila vai bibliotēkas
summary: Ievietojiet bloku vai veselu rasējumu no cita DWG vai DXF faila un novietojiet vienumus no bibliotēkas, faila vai citas bibliotēkas, kopā ar to autoriem un atjauninājumiem.
keywords: ievietot, fails, bibliotēka, librarycraft, vienums, aprīkojums, bloks no cita rasējuma, wblock, dizaina centrs, autori, autorība, licence, atjauninājums, plūsma, item.json
from: f6e4e452
---

## Ievietot bloku no cita rasējuma

1. Ierakstiet `I` un nospiediet {{key:Enter}}, vai noklikšķiniet uz {{ui:Ievietot}} grupā Bloki.
2. Komandrindā loga apakšā tiek jautāts `Ievadiet bloka nosaukumu vai [Fails/Bibliotēka]`. Ierakstiet tur `F` un nospiediet {{key:Enter}}.
3. Izvēlieties DWG vai DXF šajā datorā. Tas tiek nolasīts šeit; tas netiek atvērts, un nekas netiek augšupielādēts.
4. Dialogā {{ui:Ievietot no}} izvēlieties bloku no saraksta (ierakstiet {{ui:Filtrēt blokus}}, lai to atrastu), vai paturiet {{ui:Viss rasējums}}. Noklikšķiniet uz {{ui:Ievietot}}.
5. Noklikšķiniet, kur tas jāieliek, un aizpildiet visus atribūtus, ko tas pieprasa.

Varat sākt arī no paneļa {{ui:Bloki}}: ierakstiet `F` tā lodziņā {{ui:Filtrēt blokus}} un nospiediet {{key:Enter}}, vai ierakstiet kaut ko, ko neviens bloks neatbilst, un noklikšķiniet uz {{ui:No faila…}}. `L` un {{ui:Bibliotēka…}} atver bibliotēku tāpat. Pirms versijas 0.10.1 burts, kas ierakstīts lodziņā {{ui:Filtrēt blokus}}, meklēja tikai šī rasējuma blokus un atbildēja "Nevienam blokam neatbilst filtrs."

Lai savus bloku rasējumu turētu pie rokas, noklikšķiniet uz {{ui:Pievienot rasējumu}} zem {{ui:Bibliotēkas}} panelī {{ui:Bloki}} un izvēlieties DWG vai DXF. Tā bloki tiek uzskaitīti ar attēliem; noklikšķiniet uz viena, lai to novietotu.

Viss rasējums ieiet kā viens bloks, kas nosaukts pēc faila. Iekšā izvēlētajā blokā esošie bloki ieiet arī. Slāņi, ko tie izmanto, tiek pievienoti šim rasējumam.

Ja citam rasējumam ir citas vienības (piemēram, collas un milimetri), CadCraft mērogo atsauci, lai tā atbilstu, un to pasaka vēsturē.

### Ja nosaukums jau ir izmantots

Ja šim rasējumam jau ir bloks ar tādu pašu nosaukumu, CadCraft jautā:

- {{ui:Paturēt esošos}} izmanto šī rasējuma bloku ar šo nosaukumu.
- {{ui:Pārdēvēt}} ieved jauno kā `Nosaukums (2)`.

Visa ievietošana ir viens solis: {{key:Mod+Z}} noņem atsauci un nokopētās definīcijas.

## Atveriet bibliotēku

Noklikšķiniet uz {{ui:Bibliotēka…}} panelī {{ui:Bloki}} vai uz {{ui:Bibliotēka}} grupā Bloki, vai ierakstiet `LIB`. Pie uzvednes `INSERT` `L` arī to atver.

Bibliotēkai ir četri avoti, kas ir cilnes:

- {{ui:Bibliotēka}}: CadCraft bibliotēka. Meklējiet pēc nosaukuma, ražotāja vai modeļa un filtrējiet pēc kategorijas.
- {{ui:Faili…}}: vienuma fails (`item.json`) no jebkuras bibliotēkas vai rasējums, izklājlapa vai 3D modelis, no kā veidot vienumus: DWG vai DXF (katrs bloks kļūst par vienumu), CSV ar nosaukuma un izmēru kolonnām, vai glTF vai OBJ modelis. Nekas netiek augšupielādēts.
- {{ui:Standarta}}: tērauda profili (kā griezumi, fasādes vai 3D elementi) un standarta detaļas, piemēram, skrūves, uzgriežņi un gultņi, kas izveidoti šeit no publicētām tabulām. Skatiet [Novietot tērauda profilus un standarta detaļas](topic:steel-and-standard-parts).
- {{ui:Citi avoti}}: citas bibliotēkas, kas atbild tāpat kā Bibliotēka. Pievienojiet to adresi vienreiz; šī pārlūkprogramma to atceras.

Katrā kartītē redzams priekšskatījums, nosaukums, ražotājs un modelis, licence un versija. Izņemts vienums ir atzīmēts ar {{ui:Atsaukts}} un iemeslu; CadCraft pirms tā novietošanas jautā.

## Novietot vienumu

1. Noklikšķiniet uz {{ui:Ievietot}} kartītē.
2. Noklikšķiniet, kur vienums jāieliek. Vispirms ierakstiet `R`, lai to pagrieztu, vai `S`, lai to mērogotu.
3. Pie `Ievadiet vienuma numuru (CC-ITEM)` nospiediet {{key:Enter}} nākamajam brīvajam numuram vai ierakstiet savu.

Vienums kļūst par bloku ar nosaukumu `LIB_<nosaukums>_v<versija>`, zīmēts šī rasējuma vienībās. Ja rasējumam nav vienību, vienums tiek ievietots milimetros, un vēsture to pasaka; vispirms iestatiet {{ui:Vienības}} labajā panelī.

Tā dati tiek nesti kā neredzami atribūti: vienuma identifikators un versija, licence un autorība, ražotājs, modelis, kategorija un izmēri. Skatiet [Bloku atribūti](topic:attributes).

## Vienumi jūsu valodā

Vienumam var būt nosaukums un apraksts citās valodās. Ja tie ir valodā, uz kuru iestatīts CadCraft (Iestatījumi › Vispārīgi › Valoda), kartīte un novietotā bloka vienuma nosaukums tos izmanto. Bloks pats saglabā nosaukumu, kas veidots no vienuma paša nosaukuma, tāpēc rasējumā ir viens bloks katram vienumam neatkarīgi no tā, kura valoda to novietoja.

## Pārbaudiet atjauninājumus

1. Atveriet bibliotēku.
2. Noklikšķiniet uz {{ui:Pārbaudīt atjauninājumus}}.

Katrs bibliotēkas vienums rasējumā tiek uzskaitīts ar savu vienuma numuru un to, vai tas ir jaunākais, vai ir jaunāka versija (un kas tajā mainījās), vai tas ir atsaukts. Noklikšķiniet uz {{ui:Atjaunināt}} rindā vai uz {{ui:Atjaunināt visu}}. Katra atsauce pāriet uz jaunās versijas bloku un saglabā savu vienuma numuru, daudzumu, vietu, leņķi un slāni. {{key:Mod+Z}} atsauc atjauninājumu.

## Norādiet to, ko izmantojāt

Noklikšķiniet uz {{ui:Bibliotēkas autori}}. Katrs vienums tiek uzskaitīts ar savu autorības rindu un licenci.

- {{ui:Kopēt autorību}} kopē viena vienuma rindu; {{ui:Kopēt visu}} kopē katru rindu.
- {{ui:Lejupielādēt CSV}} saglabā sarakstu ar vienumu numuriem, ražotājiem, modeļiem, licencēm un autorību. Tas atveras jebkurā izklājlapā.

Licences, piemēram, CC BY, prasa norādīt autoru tur, kur izmantojat darbu. Ievietojiet rindas rasējumā, specifikācijā vai projekta piezīmēs.

## Simboli un aktīvi

Bibliotēkai ir trīs veidu vienumi: Simboli (zīmēšanas konvencijas, 2D), Tipi (no kā elements sastāv) un Aktīvi (fiziski objekti). Cilnē {{ui:Bibliotēka}} saraksts {{ui:Vienuma veids}} rāda Simbolus un aktīvus kopā, tikai Simbolus vai tikai Aktīvus. Tipi ir tas, no kā veidots BimCraft projekts, tāpēc CadCraft tos neuzskaita.

## Pierakstieties bibliotēkā

Noklikšķiniet uz {{ui:Pierakstīties bibliotēkā}}. Atveras neliels logs vietnē; kad esat tur pierakstījies, CadCraft var rādīt jūsu komandas vienumus un reģistrēt to, ko novietojat, lai jūs uzzinātu, ja vienums, ko izmantojāt, mainās. Pierakstīšanās ir spēkā šai pārlūkprogrammas cilnei. Atsaukt to var jebkurā laikā jūsu konta drošības lapā.

## Turiet savus objektus sadaļā Mani objekti

{{ui:Mani objekti}} ir privāts saraksts bibliotēkā, ko redzat tikai jūs. Tas nav publiskajā bibliotēkā, meklēšanā un nav rādīts jūsu komandai, un tas seko jūsu kontam katrā datorā, kur pierakstāties bibliotēkā.

1. Bibliotēkas panelī noklikšķiniet uz {{ui:Faili…}} un nolasiet failu.
2. Vienumā, ko vēlaties atkal, noklikšķiniet uz {{ui:Saglabāt manos objektos}}.
3. Vēlāk noklikšķiniet uz {{ui:Mani objekti}} un noklikšķiniet uz {{ui:Ievietot}}. Tas tiek novietots kā jebkurš bibliotēkas vienums, un {{ui:Pārbaudīt atjauninājumus}} to aptver.
4. {{ui:Noņemt no maniem objektiem}} izņem to no saraksta. Kopijas, kas jau ir novietotas rasējumos, paliek.

Jums jābūt pierakstītam bibliotēkā. Faila nolasīšana neko neaugšupielādē; vienuma saglabāšana nosūta tikai šo vienumu uz jūsu kontu.

:::note
Mani objekti tiek pārbaudīti un jūsu kontam var vēl nebūt atvērti. Ja tur rakstīts "Mani objekti šim kontam vēl nav atvērti", joprojām varat novietot vienumus no saviem failiem ar {{ui:Faili…}}.
:::

## Biežākās kļūdas

- **"Ēku tipu no IFC veidošana ir BimCraft."** IFC un ģimenes failus lasa BimCraft lietotne. Izveidojiet vienumu tur vai bibliotēkā un pēc tam izmantojiet tā `item.json` šeit.
- **"Bibliotēkai nevar piekļūt."** Esat bezsaistē vai bibliotēka nedarbojas. Rasējumā jau esošie vienumi nav ietekmēti.
- **Vienums ir pārāk liels vai pārāk mazs.** Rasējuma vienības ir nepareizas vai nav iestatītas. Atsauciet, iestatiet {{ui:Vienības}} un novietojiet to atkal.
