---
title: Mapové vrstvy pod výkresom
summary: Zobrazte mapy ulíc, letecké snímky alebo obrázok so svetovým súborom pod priestorom modelu, umiestnené podľa súradnicového systému výkresu.
keywords: mapa, mapové vrstvy, maplayers, ml, geomapa, podklad, letecký, satelit, dlaždice, xyz, wms, wmts, služba máp, svetový súbor, súradnicový systém, epsg, state plane, utm, georeferencovanie, situačný plán, geolokácia, zemepisná poloha, geodáta, uložené, dwg, dxf
from: f103045f
---

## Čo vytvoríte

Situačný plán nakreslený nad leteckým snímkom alebo mapou ulíc, každý na správnom mieste.

## Určte, kde sa výkres nachádza

1. Nastavte jednotky výkresu v {{ui:Vlastnosti}} › {{ui:Jednotky}} (napríklad stopy alebo metre).
2. Zadajte {{cmd:MAPLAYERS}} (alebo `ML`) a stlačte {{key:Enter}}.
3. V časti {{ui:Kde je výkres}} zadajte názov alebo kód EPSG do poľa {{ui:Nájsť systém}} (napríklad `2277` alebo `Texas Central`) a vyberte ho v {{ui:Systém}}.
4. Ak je výkres nakreslený v súradniciach tohto systému, nechajte umiestnenie na 0. Ak nie, zadajte jeden bod výkresu ({{ui:X výkresu}}, {{ui:Y výkresu}}), kde sa tento bod nachádza v mriežke mapy ({{ui:Východ}}, {{ui:Sever}}), a o koľko je výkres otočený od východu ({{ui:Otočenie (°)}}).
5. Kliknite na {{ui:Použiť tento systém}}.

## Pridanie vrstvy

1. Zapnite {{ui:Mapové vrstvy z internetu}} v hornej časti dialógu. Dovtedy sa nič nepýta od žiadneho servera; keď je zapnutý, servery, ktoré pridáte, vidia oblasť na obrazovke a vašu internetovú adresu, nikdy nie váš výkres.
2. V {{ui:Pridať vrstvu}} zvoľte, odkiaľ pochádza:
   - **Dlaždice (XYZ)**: adresa dlaždíc s `{z}`, `{x}` a `{y}`, názov a uvedenie autora, ktoré vyžaduje poskytovateľ.
   - **WMS**, **WMTS** alebo **ArcGIS**: adresa služby, potom {{ui:Získať vrstvy}} a vyberte jednu.
   - **Obrázok**: PNG alebo JPEG so svetovým súborom (a jeho `.prj`, ak existuje).
3. Vrstva sa zobrazí pod výkresom. Jej uvedenie autora sa zobrazí v pravom dolnom rohu výkresu.

Každú vrstvu v zozname môžete skryť, spraviť viac alebo menej priehľadnou, posunúť nahor alebo nadol, alebo odstrániť.

Každá zmena systému alebo vrstiev je jeden krok príkazu {{cmd:UNDO}}.

## Uložené s výkresom

Súradnicový systém a zoznam vrstiev sa uložia do výkresu, keď ho uložíte ako DWG alebo DXF, a vrátia sa, keď ho znova otvoríte, na ľubovoľnom počítači. Obrázky zo súborov sa neukladajú: po otvorení ich pridajte znova. Prepínač {{ui:Mapové vrstvy z internetu}} sa do výkresu neukladá: patrí tomuto prehliadaču, takže výkres, ktorý vám niekto pošle, nepýta od žiadneho servera nič, kým ho sami nezapnete.

Čo vidia iné programy:

| Uložené ako | Umiestnenie výkresu | Mapové vrstvy |
|---|---|---|
| DWG 2010, 2013 alebo 2018, DXF 2000 | Zapísané štandardným spôsobom, akým programy čítajú zemepisné umiestnenie výkresu: kód EPSG systému, jeden bod výkresu a jeho poloha v mriežke mapy, jednotky a sever. | Iba CadCraft |
| DWG 2000, 2004 alebo 2007, DXF R12 | Iba CadCraft (CadCraft to pri ukladaní oznámi) | Iba CadCraft |

- **Overené:** ODA File Converter číta umiestnenie bez chýb a knižnica DXF (ezdxf) číta kód EPSG a umiestnenie presne.
- **Zatiaľ neoverené:** či ostatné kresliarske programy rozpoznajú systém podľa jeho kódu EPSG. Program, ktorý má vlastný zoznam systémov pod inými názvami, môže výkres zobraziť bez umiestnenia.
- Iné programy zobrazia v zozname blokov blok s názvom `CADCRAFT_GEO`. Je to vlastná kópia CadCraft so systémom a vrstvami; nikdy sa nevkladá do výkresu. Nechajte ho tam.

## Výkresy z iných programov

Ak má výkres z iného programu zemepisné umiestnenie, CadCraft ho prečíta:

- Ak uvádza kód EPSG, {{ui:Kde je výkres}} zobrazí tento systém a mapové vrstvy sa podľa neho umiestnia.
- Ak CadCraft systém nepozná (vlastný názov iného programu, miestna sieť alebo koeficient mierky), umiestnenie sa nepoužije, ale zachová sa a uloží sa späť tak, ako bolo, aby ho iný program stále našiel. Ak ho chcete nahradiť, vyberte systém v {{ui:Kde je výkres}}.

:::note
Mapové vrstvy sa kreslia iba na obrazovku: netlačia sa. Používajte iba mapové služby, ktorých podmienky to umožňujú, a nechajte ich uvedenie autora viditeľné.
:::
