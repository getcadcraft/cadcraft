---
title: Rasējuma kārtošana ar slāņiem
summary: Izveidojiet slāņus sienām, durvīm un piezīmēm, iestatiet krāsas, padariet slāni pašreizējo un izslēdziet, iesaldējiet, bloķējiet vai atturiet slāņus no drukas.
keywords: slānis, slāņi, la, pašreizējais slānis, iesaldēt, atsaldēt, bloķēt, izslēgt, ieslēgt, drukāt, neizdrukāt, krāsa, slāņa rekvizīti, layiso, layuniso, izolēt, layoff, layfrz, laymcur, layon, laythw, pārdēvēt, laymrg, apvienot, laydel, dzēst slāni
from: ba9f0617
---

## Ko jūs izveidosiet

Trīs slāņus, Sienas, Durvis un Piezīmes, katram ar savu krāsu, ar objektiem uz katra un objektiem, kas pārvietoti starp tiem.

## Slāņu panelis

Slāņi atrodas panelī kreisajā pusē, zem {{ui:Slāņi}}. Katra rinda no kreisās uz labo parāda:

- punktu: aizpildītu pašreizējam slānim, kur tiek ievietoti jauni objekti;
- krāsas paraugu;
- slāņa nosaukumu;
- četras pogas: ieslēgt/izslēgt (acs), iesaldēt (sniegpārsla), bloķēt (atslēga) un drukāt (printeris).

Katram rasējumam ir slānis, ko sauc par `0`. Ierakstot `LA` un nospiežot {{key:Enter}}, jūs nonākat panelī.

## Izveidojiet slāņus

1. Noklikšķiniet uz {{ui:Jauns slānis}} virs saraksta. Atveras nosaukuma lodziņš.
2. Ierakstiet `Walls` un nospiediet {{key:Enter}} (vai noklikšķiniet uz {{ui:Pievienot}}).

Statusa joslā ir teikts "Pievienots slānis Walls un padarīts pašreizējs". Jaunajam slānim ir krāsa 7 (melna gaišajā motīvā, balta tumšajā).

3. Noklikšķiniet uz {{ui:Jauns slānis}} vēlreiz, ierakstiet `Doors` un nospiediet {{key:Enter}}.
4. Noklikšķiniet uz {{ui:Jauns slānis}} vēlreiz, ierakstiet `Notes` un nospiediet {{key:Enter}}.

Notes tagad ir pašreizējais.

## Piešķiriet katram slānim krāsu

1. Noklikšķiniet uz krāsas parauga rindā Walls. Atveras jūsu sistēmas krāsu izvēle.
2. Izvēlieties krāsu un apstipriniet.

Paraugs un viss uz Walls, kas ir krāsots {{ui:Pēc slāņa}}, mainās.

:::note
Izvēlēta krāsa, kas atbilst vienai no 255 standarta CAD krāsām, tiek saglabāta kā šis numurs. Jebkura cita krāsa tiek saglabāta CadCraft precīzi, bet DWG vai DXF failā tiek saglabāta kā tuvākā standarta krāsa.
:::

## Zīmējiet uz slāņa

1. Noklikšķiniet uz nosaukuma **Walls** sarakstā. Tā punkts aizpildās, un statusa joslā ir teikts "Pašreizējais slānis: Walls".
2. Uzzīmējiet taisnstūri (`REC`). Tas iet uz Walls.
3. Noklikšķiniet uz **Doors** un uzzīmējiet loku (`A`). Tas iet uz Doors.

Varat izvēlēties pašreizējo slāni arī {{ui:Pašreizējie iestatījumi}} labajā pusē (nekas nav atlasīts), sadaļā {{ui:Slānis}}.

## Pārvietojiet objektus uz citu slāni

1. Atlasiet objektus.
2. Labajā panelī izvēlieties jauno slāni sadaļā {{ui:Slānis}}.

Tie pārvietojas uz šo slāni un pārņem tā krāsu, ja to krāsa ir {{ui:Pēc slāņa}}.

## Izslēgt, iesaldēt, bloķēt un drukāt

| Poga | Ko tā dara |
|---|---|
| Ieslēgt/izslēgt (acs) | Paslēpj slāņa objektus. Tos nevar redzēt, atlasīt vai pievilkt. |
| Iesaldēt (sniegpārsla) | CadCraft tas pats, kas izslēgt. Atsevišķi, jo citas programmas tos apstrādā atšķirīgi, un iestatījums tiek saglabāts. |
| Bloķēt (atslēga) | Objekti paliek redzami un jūs varat tiem pievilkties, bet tos nevar atlasīt vai mainīt. Labi fonam, pār kuru zīmējat. |
| Drukāt (printeris) | Kad nospiests, slānis tiek rādīts ekrānā, bet **netiek iekļauts drukās** un PDF. Izmantojiet to konstrukcijas līnijām un piezīmēm sev. |

Novietojiet kursoru virs pogas, lai redzētu, ko tā darīs ("Izslēgt", "Iesaldēt", "Bloķēt", "Neizdrukāt šo slāni").

Pašreizējo slāni nevar izslēgt: statusa joslā ir teikts "Tas ir pašreizējais slānis. Vispirms padariet pašreizējo citu slāni." Noklikšķinot uz slāņa nosaukuma, lai to padarītu pašreizējo, tas arī ieslēdzas un atsaldējas.

Katra slāņa izmaiņa — panelī vai ar komandu — ir viens atsaukšanas solis: {{key:Mod+Z}} to atjauno.

## Strādājiet ar slāņiem, izvēloties objektus

Jums nav jāzina slāņa nosaukums: izvēlieties objektu, kas atrodas uz tā. Ierakstiet komandu vai atveriet {{ui:Rīki}} slāņu paneļa augšdaļā.

| Komanda | Ko tā dara |
|---|---|
| {{cmd:LAYISO}} | Atlasiet objektus, nospiediet {{key:Enter}}: paliek ieslēgti tikai to slāņi, visi pārējie slāņi tiek izslēgti. Ja pašreizējais slānis ir izslēgts, viens no izolētajiem slāņiem kļūst par pašreizējo. |
| {{cmd:LAYUNISO}} | Ieslēdz atpakaļ slāņus, ko pēdējā {{cmd:LAYISO}} izslēdza, un atdod pašreizējo slāni, ko tā bija mainījusi. |
| {{cmd:LAYOFF}} | Noklikšķiniet uz objektiem vienu pēc otra: katra objekta slānis tiek izslēgts. Ierakstiet `U`, lai atsauktu pēdējo, {{key:Enter}}, lai pabeigtu. |
| {{cmd:LAYFRZ}} | Tas pats, bet iesaldē katru slāni. |
| {{cmd:LAYMCUR}} | Noklikšķiniet uz objekta: tā slānis kļūst pašreizējais (un tiek ieslēgts un atsaldēts). Ja jau ir atlasīts viens objekts, tiek izmantots tas. |
| {{cmd:LAYON}} | Ieslēdz visus slāņus. |
| {{cmd:LAYTHW}} | Atsaldē visus slāņus. |

Pašreizējo slāni šādi nekad neizslēdz vai nesaldē: vēsturē to pasaka, un vispirms varat padarīt citu slāni pašreizējo ar {{cmd:LAYMCUR}}. Izvēloties bloka atsauci, tiek izmantots pašas atsauces slānis.

## Pārdēvējiet, apvienojiet un dzēsiet slāņus

- {{cmd:RENAME}}: ierakstiet `LA`, veco nosaukumu un jauno. Katrs objekts uz slāņa seko. (`B` pārdēvē bloku tāpat, ar visām atsaucēm uz to.)
- {{cmd:LAYMRG}}: noklikšķiniet uz objekta katrā slānī, ko apvienot (vai ierakstiet `N` un nosaukumu), nospiediet {{key:Enter}}, tad izvēlieties mērķa slāni un atbildiet `Y`. Objekti pāriet uz mērķi — modelī, lapās un blokos —, un apvienotie slāņi pazūd.
- {{cmd:LAYDEL}}: izvēlieties objektu uz slāņa (vai `N` un tā nosaukumu) un atbildiet `Y`. Slānis pazūd **kopā ar katru objektu uz tā**, visur. Slāni 0, DEFPOINTS un pašreizējo slāni nevar dzēst.

Katrs ir viens atsaukšanas solis. Visi trīs atrodas {{ui:Rīki}} slāņu paneļa augšdaļā.

1. Noklikšķiniet uz vienas sienas līnijas, tad ierakstiet `LAYISO` un nospiediet {{key:Enter}}. Paliek ieslēgta tikai Walls.
2. Zīmējiet vai mainiet, kas nepieciešams, uz Walls.
3. Ierakstiet `LAYUNISO` un nospiediet {{key:Enter}}. Doors un Notes atgriežas.

## Biežākās kļūdas

- **Jaunās līnijas nonāca nepareizā slānī.** Pirms zīmēšanas pārbaudiet, kurš punkts ir aizpildīts. Jauns slānis kļūst pašreizējais, tiklīdz to pievienojat.
- **Objekts neatlasās.** Tā slānis ir bloķēts, izslēgts vai iesaldēts.
- **Slānis joprojām drukājas citā programmā.** DXF R12 nevar saglabāt "neizdrukāt". CadCraft saglabā šo iestatījumu sev, ja rasējumam ir lapa, bet citas programmas drukās šo slāni.
- **Slānu nosaukumi lielajos burtos pēc saglabāšanas.** DXF R12 glabā nosaukumus lielajos burtos, tāpēc `Walls` atgriežas kā `WALLS`, un atstarpes kļūst par `_`. Saglabāts DWG saglabā nosaukumus tā, kā tos ierakstījāt.
- **Slāna pārdēvēšana, apvienošana vai dzēšana.** Izmantojiet {{cmd:RENAME}}, {{cmd:LAYMRG}} vai {{cmd:LAYDEL}} (arī {{ui:Rīki}}): skatiet zemāk.

## Grupējiet slāņus

Lai saraksts paliktu īss, ievietojiet slāņus mapēs, piemēram, Esošais, Projektētais un Pakalpojumi. Katra mape salokās, un tās slēdži ieslēdz vai izslēdz visus tās slāņus, iesaldē vai bloķē tos kopā. Pašreizējais slānis nekad netiek izslēgts.

Panelī Slāņi {{ui:Rīki}} izvēlieties {{ui:Pievienot gatavas grupas}} komplektam, kas paredzēts maziem dzīvojamiem darbiem, {{ui:Grupēt pēc nosaukuma}}, lai grupētu slāņus, kam ir vienāds priekšvārds (`E-Walls`, `E-Doors`), vai {{ui:Jauna grupa}}. Velciet slāni uz mapi vai izmantojiet sarakstu virs slāņiem pašreizējam slānim. Ierakstiet {{ui:Atrast slāni}}, lai sašaurinātu sarakstu. `LAYGROUP` (`LG`) dara to pašu komandrindā.

Lai pārdēvētu grupu, veiciet dubultklikšķi uz tās nosaukuma (vai atlasiet to un nospiediet {{key:F2}}), ierakstiet jauno nosaukumu un nospiediet {{key:Enter}}; {{key:Esc}} paturē veco, un {{cmd:UNDO}} to atjauno. {{ui:Jauna grupa}} ir {{ui:Rīki}} slāņu panelī.

Paši slāņi nemainās, tāpēc citas CAD programmas tos redz kā parastu plakanu sarakstu. CadCraft glabā grupas failā.
