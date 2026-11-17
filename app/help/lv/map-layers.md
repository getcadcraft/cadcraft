---
title: Kartes slāņi zem zīmējuma
summary: Rādiet ielu kartes, aerofotogrāfijas vai attēlu ar pasaules failu zem modeļa telpas, novietotas pēc zīmējuma koordinātu sistēmas.
keywords: karte, kartes slāņi, maplayers, ml, geomap, pamatkarte, aerofotogrāfija, satelīts, flīzes, xyz, wms, wmts, kartes pakalpojums, pasaules fails, koordinātu sistēma, epsg, state plane, utm, georeferencēšana, situācijas plāns, ģeolokācija, ģeogrāfiskā atrašanās vieta, ģeodati, saglabāts, dwg, dxf
from: f103045f
---

## Ko izveidosiet

Situācijas plānu, kas zīmēts pāri aerofotogrāfijai vai ielu kartei, katrs pareizā vietā.

## Pasakiet CadCraft, kur atrodas zīmējums

1. Iestatiet zīmējuma vienības sadaļā {{ui:Rekvizīti}} › {{ui:Vienības}} (piemēram, pēdas vai metri).
2. Ierakstiet {{cmd:MAPLAYERS}} (vai `ML`) un nospiediet {{key:Enter}}.
3. Sadaļā {{ui:Kur atrodas rasējums}} ierakstiet nosaukumu vai EPSG kodu laukā {{ui:Atrast sistēmu}} (piemēram, `2277` vai `Texas Central`) un izvēlieties to laukā {{ui:Sistēma}}.
4. Ja zīmējums ir zīmēts šīs sistēmas pašās koordinātēs, atstājiet novietojumu 0. Ja nē, norādiet vienu zīmējuma punktu ({{ui:Rasējuma X}}, {{ui:Rasējuma Y}}), kur šis punkts atrodas kartes režģī ({{ui:Austrumi}}, {{ui:Ziemeļi}}), un to, cik tālu zīmējums pagriezts no austrumiem ({{ui:Pagriezts (°)}}).
5. Noklikšķiniet uz {{ui:Izmantot šo sistēmu}}.

## Pievienot slāni

1. Dialoga augšdaļā ieslēdziet {{ui:Kartes slāņi no interneta}}. Līdz tam neviens serveris nekā neprasa; kad tas ir ieslēgts, pievienotie serveri redz ekrānā redzamo apgabalu un jūsu interneta adresi, nekad ne jūsu zīmējumu.
2. Sadaļā {{ui:Pievienot slāni}} izvēlieties, no kurienes tas nāk:
   - **Flīzes (XYZ)**: flīzes adrese ar `{z}`, `{x}` un `{y}`, nosaukums un avota norāde, ko prasa tā nodrošinātājs.
   - **WMS**, **WMTS** vai **ArcGIS**: pakalpojuma adrese, tad {{ui:Iegūt slāņus}} un izvēlieties vienu.
   - **Attēls**: PNG vai JPEG ar tā pasaules failu (un tā `.prj`, ja tāds ir).
3. Slānis tiek rādīts zem zīmējuma. Tā avota norāde tiek rādīta zīmējuma apakšējā labajā stūrī.

Katru sarakstā esošo slāni var paslēpt, padarīt vairāk vai mazāk caurspīdīgu, pārvietot augšup vai lejup vai noņemt.

Katra sistēmas vai slāņu izmaiņa ir viens {{cmd:UNDO}} solis.

## Saglabāts kopā ar zīmējumu

Koordinātu sistēma un slāņu saraksts tiek saglabāti zīmējumā, kad to saglabājat kā DWG vai DXF, un atgriežas, kad to atverat vēlreiz jebkurā datorā. Attēli no failiem netiek saglabāti: pēc atvēršanas pievienojiet tos vēlreiz. Slēdzis {{ui:Kartes slāņi no interneta}} zīmējumā netiek saglabāts: tas pieder šim pārlūkam, tāpēc zīmējums, ko kāds jums nosūta, nevienam serverim nekā neprasa, kamēr to pats neieslēdzat.

Ko redz citas programmas:

| Saglabāts kā | Zīmējuma atrašanās vieta | Kartes slāņi |
|---|---|---|
| DWG 2010, 2013 vai 2018, DXF 2000 | Ierakstīta standarta veidā, kā programmas nolasa zīmējuma ģeogrāfisko atrašanās vietu: sistēmas EPSG kods, viens zīmējuma punkts un tā atrašanās vieta kartes režģī, vienības un ziemeļi. | Tikai CadCraft |
| DWG 2000, 2004 vai 2007, DXF R12 | Tikai CadCraft (CadCraft to paziņo, kad saglabājat) | Tikai CadCraft |

- **Pārbaudīts:** ODA File Converter nolasa atrašanās vietu bez kļūdām, un DXF bibliotēka (ezdxf) nolasa EPSG kodu un novietojumu precīzi.
- **Vēl nav pārbaudīts:** vai citas projektēšanas programmas atpazīst sistēmu pēc tās EPSG koda. Programma, kas glabā savu sistēmu sarakstu citos nosaukumos, var parādīt zīmējumu bez atrašanās vietas.
- Citas programmas blokā sarakstā rāda bloku ar nosaukumu `CADCRAFT_GEO`. Tā ir CadCraft pašas kopija sistēmai un slāņiem; tas nekad netiek novietots zīmējumā. Atstājiet to tur.

## Zīmējumi no citām programmām

Kad zīmējumam no citas programmas ir ģeogrāfiska atrašanās vieta, CadCraft to nolasa:

- Ja tajā ir nosaukts EPSG kods, {{ui:Kur atrodas rasējums}} rāda šo sistēmu, un kartes slāņi tiek novietoti pēc tās.
- Ja CadCraft nepazīst sistēmu (citas programmas savs nosaukums tai, vietējs režģis vai mēroga koeficients), atrašanās vieta netiek izmantota, bet tā tiek saglabāta un atpakaļ ierakstīta tāda, kāda bija, lai citas programmas to joprojām atrastu. Lai to aizstātu, izvēlieties sistēmu sadaļā {{ui:Kur atrodas rasējums}}.

:::note
Kartes slāņi tiek zīmēti tikai uz ekrāna: tie nedrukājas. Izmantojiet tikai tādus kartes pakalpojumus, kuru noteikumi to atļauj, un saglabājiet to avota norādi redzamu.
:::
