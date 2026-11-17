---
title: Zīmējuma organizēšana ar slāņiem
summary: Izveidojiet slāņus sienām, durvīm un piezīmēm, iestatiet krāsas, padariet slāni par pašreizējo un izslēdziet, iesaldējiet, bloķējiet slāņus vai neļaujiet tos drukāt.
keywords: slānis, slāņi, la, pašreizējais slānis, iesaldēt, atkausēt, bloķēt, izslēgt, ieslēgt, drukāt, nedrukāt, krāsa, slāņa rekvizīti, layiso, layuniso, izolēt, layoff, layfrz, laymcur, layon, laythw, pārdēvēt, laymrg, apvienot, laydel, dzēst slāni
from: cd033591
---

## Ko izveidosiet

Trīs slāņus: Walls, Doors un Notes, katram ar savu krāsu, ar objektiem uz katra un objektiem, kas pārvietoti starp tiem.

## Slāņu panelis

Slāņi atrodas kreisajā panelī zem {{ui:Slāņi}}. Katrā rindā no kreisās uz labo redzams:

- punkts: aizpildīts **pašreizējam** slānim, kurā ievietojas jauni objekti;
- krāsas paraugs;
- slāņa nosaukums;
- četras pogas: ieslēgt/izslēgt (acs), iesaldēt (sniegpārsla), bloķēt (lakats) un drukāt (printeris).

Katram zīmējumam ir slānis `0`. Ierakstot `LA` un nospiežot {{key:Enter}}, jūs nonākat panelī.

## Izveidot slāņus

1. Noklikšķiniet uz {{ui:Jauns slānis}} virs saraksta. Atveras nosaukuma lauks.
2. Ierakstiet `Walls` un nospiediet {{key:Enter}} (vai noklikšķiniet uz {{ui:Pievienot}}).

Statusa joslā ir teikts: "Pievienots slānis Walls un padarīts par pašreizējo." Jaunajam slānim tiek piešķirta krāsa 7 (gaišajā motīvā melna, tumšajā — balta).

3. Vēlreiz noklikšķiniet uz {{ui:Jauns slānis}}, ierakstiet `Doors` un nospiediet {{key:Enter}}.
4. Vēlreiz noklikšķiniet uz {{ui:Jauns slānis}}, ierakstiet `Notes` un nospiediet {{key:Enter}}.

Notes tagad ir pašreizējais.

## Piešķirt katram slānim krāsu

1. Noklikšķiniet uz krāsas parauga rindā Walls. Atveras jūsu sistēmas krāsu izvēle.
2. Izvēlieties krāsu un apstipriniet.

Paraugs un viss slānī Walls, kas krāsots {{ui:Pēc slāņa}}, mainās.

:::note
Izvēlēta krāsa, kas atbilst vienai no 255 standarta CAD krāsām, tiek saglabāta kā šis numurs. Jebkura cita krāsa CadCraft tiek saglabāta precīzi, bet DWG vai DXF failā tiek saglabāta kā tuvākā standarta krāsa.
:::

## Zīmēt uz slāņa

1. Noklikšķiniet uz nosaukuma **Walls** sarakstā. Tā punkts aizpildās, un statusa joslā ir teikts "Pašreizējais slānis: Walls".
2. Uzzīmējiet taisnstūri (`REC`). Tas tiek ievietots slānī Walls.
3. Noklikšķiniet uz **Doors** un uzzīmējiet loku (`A`). Tas tiek ievietots slānī Doors.

Pašreizējo slāni var izvēlēties arī labajā pusē sadaļā {{ui:Pašreizējie iestatījumi}} (kad nekas nav atlasīts), zem {{ui:Slānis}}.

## Pārvietot objektus uz citu slāni

1. Atlasiet objektus.
2. Labajā panelī izvēlieties jauno slāni sadaļā {{ui:Slānis}}.

Tie tiek pārvietoti uz šo slāni un pārņem tā krāsu, ja to krāsa ir {{ui:Pēc slāņa}}.

## Izslēgt, iesaldēt, bloķēt un drukāt

| Poga | Ko tā dara |
|---|---|
| Ieslēgt/izslēgt (acs) | Paslēpj slāņa objektus. Tos nevar redzēt, atlasīt vai piesaistīties tiem. |
| Iesaldēt (sniegpārsla) | CadCraft tam ir tāds pats efekts kā izslēgšanai. Tas ir atsevišķi, jo citas programmas tos apstrādā atšķirīgi, un iestatījums tiek saglabāts. |
| Bloķēt (lakats) | Objekti paliek redzami, un uz tiem var piesaistīties, bet tos nevar atlasīt vai mainīt. Labi piemērots fonam, pār kuru zīmējat. |
| Drukāt (printeris) | Kad poga ir nospiesta, slānis tiek rādīts ekrānā, bet **neiekļauts drukās** un PDF failos. Izmantojiet to konstrukcijas līnijām un piezīmēm sev. |

Novietojiet kursoru virs pogas, lai redzētu, ko tā darīs ("Izslēgt", "Iesaldēt", "Bloķēt", "Nedrukāt šo slāni").

Pašreizējo slāni nevar izslēgt: statusa joslā ir teikts "Tas ir pašreizējais slānis. Vispirms padariet pašreizējo citu slāni." Noklikšķinot uz slāņa nosaukuma, lai to padarītu pašreizējo, tas arī tiek ieslēgts un atkausēts.

Katra slāņa izmaiņa, paneļa vai komandas veidā, ir viens atsaukšanas solis: {{key:Mod+Z}} to atjauno.

## Strādāt ar slāņiem, atlasot objektus

Slāņa nosaukums nav jāzina: atlasiet objektu, kas tajā atrodas. Ierakstiet komandu vai atveriet {{ui:Rīki}} slāņu paneļa augšdaļā.

| Komanda | Ko tā dara |
|---|---|
| {{cmd:LAYISO}} | Atlasiet objektus, nospiediet {{key:Enter}}: ieslēgti paliek tikai to slāņi, visi pārējie slāņi tiek izslēgti. Ja pašreizējais slānis ir izslēgts, viens no izolētajiem slāņiem kļūst par pašreizējo. |
| {{cmd:LAYUNISO}} | Ieslēdz atpakaļ slāņus, ko izslēdza pēdējā {{cmd:LAYISO}} komanda, un atdod pašreizējo slāni, ko tā bija mainījusi. |
| {{cmd:LAYOFF}} | Noklikšķiniet uz objektiem pēc kārtas: katra objekta slānis tiek izslēgts. Ierakstiet `U`, lai atsauktu pēdējo, un {{key:Enter}}, lai pabeigtu. |
| {{cmd:LAYFRZ}} | Tas pats, bet katrs slānis tiek iesaldēts. |
| {{cmd:LAYMCUR}} | Noklikšķiniet uz objekta: tā slānis kļūst par pašreizējo (un tiek ieslēgts un atkausēts). Ja jau ir atlasīts viens objekts, tiek izmantots tas. |
| {{cmd:LAYON}} | Ieslēdz visus slāņus. |
| {{cmd:LAYTHW}} | Atkausē visus slāņus. |

Pašreizējo slāni šādā veidā nekad neizslēdz vai nesaldē: par to informē vēsture, un vispirms varat padarīt pašreizējo citu slāni ar {{cmd:LAYMCUR}}. Atlasot bloka atsauci, tiek izmantots paša atsauces slānis.

## Pārdēvēt, apvienot un dzēst slāņus

- {{cmd:RENAME}}: ierakstiet `LA`, veco nosaukumu un jauno. Visi slāņa objekti seko. (`B` pārdēvē bloku tāpat, ar visām tā atsaucēm.)
- {{cmd:LAYMRG}}: noklikšķiniet uz objekta katrā slānī, ko apvienot (vai ierakstiet `N` un nosaukumu), nospiediet {{key:Enter}}, tad izvēlieties mērķa slāni un atbildiet `Y`. Objekti tiek pārvietoti uz mērķi — modelī, lapās un blokos —, un apvienotie slāņi tiek dzēsti.
- {{cmd:LAYDEL}}: atlasiet objektu slānī (vai ierakstiet `N` un tā nosaukumu) un atbildiet `Y`. Slānis tiek dzēsts **kopā ar visiem tajā esošajiem objektiem** visur. Slāni 0, DEFPOINTS un pašreizējo slāni nevar dzēst.

Katra no tām ir viens atsaukšanas solis. Visas trīs atrodas {{ui:Rīki}} slāņu paneļa augšdaļā.

1. Noklikšķiniet uz vienas sienas līnijas, tad ierakstiet `LAYISO` un nospiediet {{key:Enter}}. Ieslēgts paliek tikai Walls.
2. Zīmējiet vai mainiet, kas nepieciešams, slānī Walls.
3. Ierakstiet `LAYUNISO` un nospiediet {{key:Enter}}. Doors un Notes atkal parādās.

## Biežākās kļūdas

- **Jaunas līnijas ievietojās nepareizā slānī.** Pirms zīmēšanas pārbaudiet, kurš punkts ir aizpildīts. Jauns slānis kļūst par pašreizējo, tiklīdz to pievienojat.
- **Objekts neatlasās.** Tā slānis ir bloķēts, izslēgts vai iesaldēts.
- **Slānis joprojām drukājas citā programmā.** DXF R12 nevar saglabāt "nedrukāt". CadCraft saglabā šo iestatījumu pats, ja zīmējumam ir lapa, bet citas programmas šo slāni izdrukās.
- **Slāņu nosaukumi pēc saglabāšanas ir lielajos burtos.** DXF R12 saglabā nosaukumus lielajos burtos, tāpēc `Walls` atgriežas kā `WALLS`, un atstarpes kļūst par `_`. Saglabātais DWG saglabā nosaukumus tādus, kādus ierakstījāt.
- **Slāņa pārdēvēšana, apvienošana vai dzēšana.** Izmantojiet {{cmd:RENAME}}, {{cmd:LAYMRG}} vai {{cmd:LAYDEL}} (arī {{ui:Rīki}}): skatiet iepriekš.

## Grupēt slāņus

Lai saraksts būtu īss, ievietojiet slāņus mapēs, piemēram, Esošais, Projektētais un Inženiertīkli. Katra mape ir saritināma, un tās slēdži ieslēdz vai izslēdz visus tās slāņus, iesaldē tos vai bloķē kopā. Pašreizējo slāni nekad neizslēdz.

Slāņu paneļa {{ui:Rīki}} izvēlieties {{ui:Pievienot gatavas grupas}} komplektam, kas sagatavots nelieliem dzīvojamo ēku darbiem, {{ui:Grupēt pēc nosaukuma}}, lai grupētu slāņus ar vienādu priedēkli (`E-Walls`, `E-Doors`), vai {{ui:Jauna grupa}}. Velciet slāni uz mapi vai izmantojiet sarakstu virs slāņiem pašreizējam slānim. Ierakstiet {{ui:Atrast slāni}}, lai sašaurinātu sarakstu. `LAYGROUP` (`LG`) dara to pašu komandrindā.

Paši slāņi nemainās, tāpēc citas CAD programmas tos redz kā parastu plakanu sarakstu. CadCraft grupas glabā failā.
