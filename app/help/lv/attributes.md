---
title: Bloku atribūti
summary: Skatiet un mainiet vērtības, ko bloka atsauce satur, piemēram, pozīcijas numuru vai ražotāju, un saglabājiet tās, kad saglabājat kopiju.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, titulbloks, rediģēt vietā, atribūtu redaktors, attdef, definēt atribūtu, bedit, bloku redaktors, bclose, atribūts, atribūti, attrib, tags, pozīcijas numurs, vērtība, neredzams, konstants, bloks, rekvizīti, iekārtas marķējums
from: 34d307c7
---

## Kas ir atribūti

Atribūts ir nosaukta vērtība, kas pārvietojas kopā ar bloka atsauci: iekārtas marķējuma pozīcijas numurs, telpas marķējuma nosaukums, durvju ugunsdrošības klase. Bloka definīcija norāda, kādi atribūti tam ir (katram ir **tags**, **uzvedne**, **noklusējums** un vieta, izmērs un leņķis tā tekstam). Katrai bloka atsaucei ir savas vērtības.

Daži atribūti ir **neredzami**: tie glabā datus, piemēram, ražotāju vai modeļa numuru, bet nekad nezīmējas. Daži ir **konstanti**: tie ir vieni un tie paši katrai atsaucei, fiksēti blokā.

## Kur rodas atribūti

- Bloki DWG un DXF failos, ko atverat, saglabā savus atribūtus ar katras atsauces vērtībām.
- Bloki, ko ievietojat ar {{cmd:INSERT}} un opciju {{ui:Fails}}, saglabā savējos. Skatīt [Ievietot no faila vai bibliotēkas](topic:insert-from-file-and-library).
- Bibliotēkas vienumi nāk kā bloki ar atribūtiem: redzams pozīcijas numurs un vienuma dati, neredzami.

- Bloki, ko veidojat paši: vispirms definējiet atribūtus ar {{cmd:ATTDEF}} (zemāk), tad atlasiet tos kopā ar pārējiem objektiem, veidojot bloku.

## Definējiet atribūtus saviem blokiem

1. Uzzīmējiet bloka līnijas, piemēram, telpas marķējumu.
2. Izvēlieties {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Definēt atribūtu}} vai ierakstiet `ATT` un nospiediet {{key:Enter}}.
3. Vēsture rāda režīmus (`Invisible=No Constant=No Preset=No`). Ierakstiet `I`, `C` vai `P`, lai pārslēgtu vienu, un nospiediet {{key:Enter}}, kad tie ir pareizi. Neredzamas vērtības tiek paturētas, bet nezīmējas; konstantai vērtībai ir viena un tā pati vērtība katrā atsaucē; iepriekš iestatītai vērtībai nejautā, kad ievietojat bloku.
4. Ierakstiet tagu (piemēram, `ROOM_NO`: lielie burti, bez atstarpēm), uzvedni (`Telpas numurs`) un noklusējuma vērtību (`101`).
5. Noklikšķiniet, kur jāatrodas vērtībai, un norādiet augstumu un pagriezienu. Tags parādās rasējumā.
6. Izveidojiet bloku ar {{cmd:BLOCK}}, atlasot līnijas un atribūtu definīcijas kopā. Atsauce, kas tās aizstāj, saņem noklusējuma vērtības; katrs jauns {{cmd:INSERT}} tās pieprasa.

Atlasīta atribūta definīcija cilnē {{ui:Rekvizīti}} rāda {{ui:Tags}}, {{ui:Uzvedne}}, {{ui:Noklusējums}} un režīmus.

## Mainīt bloku: bloku redaktors

{{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Rediģēt bloku}} ({{cmd:BEDIT}}, `BE`) atver bloku atsevišķi: ierakstiet tā nosaukumu (vai vispirms atlasiet atsauci). Josla augšpusē norāda, kuru bloku rediģējat. Zīmējiet, dzēsiet un mainiet tā objektus ar parastajām komandām, un pievienojiet vai mainiet atribūtu definīcijas. Tad noklikšķiniet {{ui:Saglabāt bloku}} (vai ierakstiet {{cmd:BCLOSE}} un `S`): katra atsauce rāda izmaiņu, un viens {{key:Mod+Z}} atsauc visu. {{ui:Atmest izmaiņas}} ({{cmd:BCLOSE}}, `D`) atstāj bloku tādu, kāds tas bija.

Kad pievienojat, noņemat vai mainiet atribūtu definīcijas, saglabāšana arī saskaņo katru atsauci: ievadītās vērtības tiek paturētas, jaunam atribūtam tiek piešķirts noklusējums, noņemts atribūts tiek dzēsts, un katrs atribūts atgriežas tur, kur to novieto definīcija. Vēsture rāda, cik atsauču tika atjauninātas.

## Rediģēt titulbloku tā vietā (REFEDIT)

Titulbloks uz lapas bieži atrodas blokā. Lai mainītu tā līnijas vai tekstus, neizejot no lapas:

1. Atlasiet titulbloku, tad {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Rediģēt vietā}} (vai ierakstiet {{cmd:REFEDIT}}).
2. Tā saturs kļūst par parastiem objektiem tur, kur tie atrodas; viss pārējais kļūst bāls un nav maināms.
3. Mainiet, dzēsiet vai zīmējiet: jauni objekti kļūst par bloka daļu.
4. Noklikšķiniet {{ui:Saglabāt bloku}} joslā augšpusē (vai ierakstiet {{cmd:REFCLOSE}} un `S`). Katra atsauce rāda izmaiņu, un viens {{key:Mod+Z}} atsauc visu rediģēšanu. {{ui:Atmest}} atstāj bloku tādu, kāds tas bija.

Saistītu rasējumu, dinamisku bloku vai atsauci, kas mērogota atšķirīgi pa platumu un augstumu, nevar rediģēt vietā: izmantojiet {{cmd:BEDIT}} (vai atveriet saistīto rasējumu).

:::note
Saglabājiet vai atmetiet bloka redaktorā, pirms saglabājat rasējumu: fails, kas saglabāts, kamēr redaktors ir atvērts, satur bloku tādu, kāds tas bija pirms redaktora.
:::

## Aizpildiet tos, ievietojot bloku

1. Ierakstiet `I` un nospiediet {{key:Enter}}, ierakstiet bloka nosaukumu un nospiediet {{key:Enter}}.
2. Noklikšķiniet, kur tam jāatrodas.
3. CadCraft jautā katru vērtību, piemēram, `Enter Item number (ITEM) <>`. Ierakstiet vērtību un nospiediet {{key:Enter}}, vai nospiediet {{key:Enter}}, lai paturētu noklusējumu, kas rādīts leņķa iekavās.

Vērtības, ko bloks atzīmē kā iepriekš iestatītas, un konstantas vērtības netiek pieprasītas. Tās paņem savu noklusējumu.

## Skatīt un mainīt vērtības

1. Noklikšķiniet uz bloka atsauces.
2. Labajā panelī zem {{ui:Atribūti}} katram tagam ir sava vērtība. Neredzamie rāda `hidden`.
3. Noklikšķiniet uz vērtības, ierakstiet jauno un nospiediet {{key:Enter}}.

Rasējums uzreiz rāda jauno vērtību. Katra izmaiņa ir viens solis: {{key:Mod+Z}} to atsauc.

**Atribūtu redaktors.** Veiciet dubultklikšķi uz atsauces ar atribūtiem (vai {{cmd:EATTEDIT}}): dialogs {{ui:Rediģēt atribūtus}} uzskaita katru tagu ar tā uzvedni un vērtību. Ierakstiet jaunas vērtības; noklikšķiniet uz rindas, lai mainītu šī atribūta {{ui:Augstums}}, {{ui:Pagriešana}}, {{ui:Platuma koeficients}}, {{ui:Izlīdzināt}}, {{ui:Slānis}}, {{ui:Krāsa}} un {{ui:Neredzams}} tikai šai atsaucei. {{ui:Lietot}} atstāj dialogu atvērtu; {{ui:Labi}} lieto un aizver. Katrs {{ui:Lietot}} vai {{ui:Labi}} ir viens atsaukšanas solis.

**Komandrindā** {{cmd:ATTEDIT}} jautā katru vērtību pēc kārtas: ierakstiet jaunu vai nospiediet {{key:Enter}}, lai paturētu esošo.

## Mainīt atribūtu definīcijas (BATTMAN, ATTSYNC)

{{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Atribūtu pārvaldnieks}} ({{cmd:BATTMAN}}) uzskaita bloka atribūtus: mainiet tagu, uzvedni vai noklusējumu, atzīmējiet {{ui:Neredzams}}, {{ui:Konstants}} vai {{ui:Iepriekš iestatīts}}, un pārvietojiet tos augšup vai lejup (kārtība, kādā vērtības tiek pieprasītas). Ar atzīmētu {{ui:Atjaunināt atsauces (vērtības saglabātas)}} {{ui:Lietot}} arī saskaņo katru atsauci; pārdēvēts tags paturē savas vērtības. Katrs {{ui:Lietot}} ir viens atsaukšanas solis.

{{cmd:ATTSYNC}} saskaņo atsauces ar to bloku definīcijām manuāli: `S` izvēlas atsauci, `N` nosauc bloku, `A` apstrādā katru bloku. Vērtības tiek paturētas.

Bibliotēkas vienuma pašu lauku (tā id, versija, licence un atribūcija) vērtības tiek rādītas, bet nav rediģējamas, lai atjauninājumu pārbaude turpinātu darboties. Tā pozīcijas numurs un daudzums ir jūsu maināmi.

## Uzskaitīt tos

Atlasiet atsauces un ierakstiet `LI` (priekš {{cmd:LIST}}). Vēsture rāda katru atribūtu kā `TAG = vērtība`, ar `(invisible)` vai `(constant)' tur, kur tas attiecas.

## Pārvietošana, pagriešana un izvēršana

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} un {{cmd:MIRROR}} saglabā vērtības; teksts pārvietojas kopā ar bloku un paliek salasāms.
- {{cmd:EXPLODE}} pārvērš redzamos atribūtus par vienkāršu tekstu ar to vērtībām. Neredzamie tiek izmesti.

## Saglabāšana

Saglabāts DWG un saglabāts DXF abi paturē katru atribūtu: katra bloka definīcijas (arī neredzamās, konstantās un iepriekš iestatītās) un katras atsauces vērtības. Citas CAD programmas tos lasa kā parastus bloka atribūtus.

DXF R12 vērtība, kas garāka par 255 rakstzīmēm, tiek apgriezta līdz 255, un vēsture par to paziņo.

## Biežākās kļūdas

- **Vērtība nerādās rasējumā.** Tā ir neredzama vai tukša. Neredzamās vērtības joprojām rādās labajā panelī.
- **Vērtība, ko ierakstīju, nokļuva komandrindā.** Vispirms noklikšķiniet vērtību lodziņā labajā panelī.
