---
title: Mapové vrstvy pod výkresem
summary: Zobrazte uliční mapy, letecké snímky nebo obrázek se světovým souborem pod prostorem modelu, umístěné podle souřadnicového systému výkresu.
keywords: mapa, mapové vrstvy, maplayers, ml, geomap, podkladová mapa, letecký, satelit, dlaždice, xyz, wms, wmts, mapová služba, světový soubor, souřadnicový systém, epsg, state plane, utm, georeference, situační plán, geolokace, zeměpisná poloha, geodata, uloženo, dwg, dxf
from: f103045f
---

## Co vytvoříte

Situační plán nakreslený nad leteckým snímkem nebo uliční mapou, každý na správném místě.

## Řekněte CadCraftu, kde výkres je

1. Nastavte jednotky výkresu v {{ui:Vlastnosti}} › {{ui:Jednotky}} (například stopy nebo metry).
2. Napište {{cmd:MAPLAYERS}} (nebo `ML`) a stiskněte {{key:Enter}}.
3. V {{ui:Kde výkres je}} napište název nebo kód EPSG do pole {{ui:Najít systém}} (například `2277` nebo `Texas Central`) a zvolte ho v {{ui:Systém}}.
4. Pokud je výkres nakreslen v souřadnicích tohoto systému, nechte umístění na 0. Pokud ne, zadejte jeden bod výkresu ({{ui:X výkresu}}, {{ui:Y výkresu}}), kde tento bod leží na mřížce mapy ({{ui:Východ}}, {{ui:Sever}}), a o kolik je výkres natočen od východu ({{ui:Natočení (°)}}).
5. Klikněte na {{ui:Použít tento systém}}.

## Přidání vrstvy

1. Zapněte {{ui:Mapové vrstvy z internetu}} nahoře v dialogu. Dokud je to vypnuté, se žádný server na nic neptá; když je zapnuto, servery, které přidáte, vidí oblast na obrazovce a vaši internetovou adresu, nikdy ne váš výkres.
2. V {{ui:Přidat vrstvu}} zvolte, odkud pochází:
   - **Dlaždice (XYZ)**: adresa dlaždic s `{z}`, `{x}` a `{y}`, název a uvedení autora, které jejich poskytovatel vyžaduje.
   - **WMS**, **WMTS** nebo **ArcGIS**: adresa služby, pak {{ui:Načíst vrstvy}} a zvolte jednu.
   - **Obrázek**: PNG nebo JPEG se svým světovým souborem (a svým `.prj`, pokud existuje).
3. Vrstva se zobrazí pod výkresem. Její uvedení autora se zobrazí vpravo dole u výkresu.

Každou vrstvu v seznamu můžete skrýt, zprůhlednit více nebo méně, posunout nahoru nebo dolů, nebo odebrat.

Každá změna systému nebo vrstev je jeden krok příkazu {{cmd:UNDO}}.

## Uloženo s výkresem

Souřadnicový systém a seznam vrstev se uloží do výkresu, když ho uložíte jako DWG nebo DXF, a při dalším otevření se vrátí na kterémkoli počítači. Obrázky ze souborů se neukládají: po otevření je přidejte znovu. Přepínač {{ui:Mapové vrstvy z internetu}} se do výkresu neukládá: patří tomuto prohlížeči, takže výkres, který vám někdo pošle, nežádá žádný server o nic, dokud ho sami nezapnete.

Co vidí ostatní programy:

| Uloženo jako | Umístění výkresu | Mapové vrstvy |
|---|---|---|
| DWG 2010, 2013 nebo 2018, DXF 2000 | Zapsáno standardním způsobem, jakým programy čtou zeměpisnou polohu výkresu: kód EPSG systému, jeden bod výkresu a kde leží na mřížce mapy, jednotky a sever. | Pouze CadCraft |
| DWG 2000, 2004 nebo 2007, DXF R12 | Pouze CadCraft (CadCraft to řekne při uložení) | Pouze CadCraft |

- **Ověřeno:** ODA File Converter čte umístění bez chyb a knihovna pro DXF (ezdxf) čte kód EPSG i umístění přesně.
- **Zatím neověřeno:** zda ostatní kreslicí programy rozpoznají systém podle jeho kódu EPSG. Program, který si vede vlastní seznam systémů pod jinými názvy, může výkres zobrazit bez umístění.
- Ostatní programy zobrazí v seznamu bloků blok nazvaný `CADCRAFT_GEO`. Je to vlastní kopie CadCraftu se systémem a vrstvami; nikdy není umístěn do výkresu. Nechte ho tam.

## Výkresy z jiných programů

Když výkres z jiného programu má zeměpisné umístění, CadCraft ho přečte:

- Pokud uvádí kód EPSG, {{ui:Kde výkres je}} zobrazí tento systém a mapové vrstvy se podle něj umístí.
- Pokud CadCraft systém nezná (vlastní název jiného programu, místní síť nebo měřítkový koeficient), umístění se nepoužije, ale zachová se a uloží zpět beze změny, aby ho druhý program stále našel. Nahraďte ho volbou systému v {{ui:Kde výkres je}}.

:::note
Mapové vrstvy se kreslí jen na obrazovku: do tisku se nevykreslují. Používejte jen mapové služby, jejichž podmínky to dovolují, a jejich uvedení autora nechte viditelné.
:::
