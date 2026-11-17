---
title: Odeslání výkresu do laseru
summary: Otevřete panel Laser, nastavte, co dělá každá vrstva (řezat, rýhovat, gravírovat, vyplnit, obrázek), prohlédněte si pohyby hlavy, uložte G-code v režimu laseru GRBL, nebo ho odešlete z prohlížeče po projetí obrysu úlohy.
keywords: laser, řezací laser, gravírovací laser, GRBL, G-code, gcode, gravírování, výplň, dithering, gravírování obrázku, rýhování, řezání, Web Serial, projet obrys úlohy, výkon, rychlost, průchody, LASER, LASERCUT, CNC
from: 72b56db0
---

Panel {{ui:Laser}} převádí vrstvy výkresu na program pro laser, který běží na GRBL (většina hobby a malých dílen s diodovými a CO2 řadiči). Napište `LASER` (nebo `LASERCUT`) a stiskněte {{key:Enter}}, nebo vyberte {{ui:Laser…}} v nabídce {{ui:Více}} skupiny {{ui:Pohled}}. V pásových stylech je v nabídce {{ui:Soubor}} a vedle {{ui:Vykreslit}}. Panel se otevře nad výkresem a zůstane otevřený při kreslení: náhled sleduje každou změnu.

:::warning
Každé nastavení nejprve vyzkoušejte na odřezcích, noste ochranné brýle vhodné pro váš laser, tam, kde je víko, nechte ho zavřené, a běžící laser nikdy nenechávejte bez dozoru. Čísla, se kterými vrstva začíná, jsou zástupné hodnoty, nejde o doporučení pro žádný materiál.
:::

## Co se odesílá

Panel čte model (ne listy), na vrstvách, které jsou zapnuté a odmrazené:

- Úsečky, oblouky, kružnice, mnohočáry (oblouky zůstávají oblouky), elipsy a spliny. Tvar, který končí tam, kde začíná, se počítá jako uzavřený.
- Bloky se rozloží: objekt na vrstvě 0 uvnitř bloku jde s vrstvou odkazu na blok.
- Šrafa odešle svou hranici, takže vyšrafované logo na vrstvě **Vyplnit** se vyplní.
- Obrázek (`IMAGEATTACH`) se vygravíruje na vrstvě nastavené na **Gravírovat obrázek**, pokud leží rovně (není otočený ani šikmý) a jeho soubor je otevřený v CadCraftu.
- Text, kóty, výnosky, body a konstrukční čáry se neodesílají; panel ukazuje, kolik jich vynechal. Chcete-li vypálit text, nakreslete písmena jako tvary, nebo je vyšrafujte.

Rozměry jdou v milimetrech z jednotek výkresu (`UNITS`): výkres v palcích se násobí 25,4. Výkres bez nastavených jednotek se odešle tak, že jedna jednotka je jeden milimetr. Zaškrtněte {{ui:Jen vybrané objekty}}, chcete-li odeslat jen část výkresu.

## Nastavte, co dělá každá vrstva

Každá vrstva s něčím je řádek. {{ui:Dělá}} ji nastaví na **Řezat**, **Rýhovat**, **Gravírovat čáry**, **Vyplnit tvary**, **Gravírovat obrázek** nebo **Neodesílat**, s {{ui:Výkon %}}, {{ui:Rychlost mm/min}} a počtem {{ui:Průchody}}. Každá změna je jeden krok zpět a ukládá se do výkresu: DWG (každá verze, kterou CadCraft ukládá) a DXF si nastavení zachovají, takže se výkres příště otevře s nimi. Jiné programy soubor otevřou jako dřív; uvidí jeden nepoužitý blok s názvem CADCRAFT_LASER (jeho vyčištěním v tom programu se nastavení odstraní).

- **Vyplnit** vypálí vnitřek uzavřených tvarů čárami s rozestupem podle {{ui:Řádkování}}, pod {{ui:Úhel}}, v obou směrech nebo v jednom, s přejezdem, aby hlava měla rychlost, když se laser zapne; křížová šrafa přidá druhý průchod pod 90°. Tvar s dírou zůstane v místě díry otevřený.
- **Gravírovat obrázek** převede obrázek na tečky (Floyd–Steinberg, Atkinson, uspořádaný, nebo prostě černobílý s prahem), nebo s *Stupni šedi* na proměnný výkon.
- Pořadí: nejprve obrázky a výplně, pak gravírování čar, pak rýhy, pak řezy, takže se vyříznutá část během gravírování nepohne. Na jedné vrstvě jdou dráhy **od vnitřku ven** (díra před deskou, ve které je), a pak nejbližší.

## Náhled, pak uložení

Náhled ukazuje, co hlava dělá: vypalované čáry barevně, rychlé pohyby šedě a zelený rámeček kolem všeho, co se vypaluje. Pod ním jsou velikost, délka vypalování a odhad času (bez zrychlení; skutečný stroj trvá déle). {{ui:Uložit G-code…}} zapíše G-code v režimu laseru GRBL: `$32=1`, `M4` (nebo `M3`) s hodnotami S, pohyby `G0` a `G1`, na konci `M5`. X0 Y0 je levý dolní roh úlohy, pokud nezvolíte počátek výkresu: nastavte tam nulu práce vašeho stroje.

## Odeslání z prohlížeče

V Chrome a Edge se {{ui:Připojit…}} zeptá, který USB port laseru použít. Nic se nepřipojí ani neodešle, dokud nestisknete tlačítko. Nejprve stiskněte {{ui:Projet obrys úlohy}}: hlava projede obdélník úlohy s laserem **vypnutým** (nebo na nízkém výkonu, který nastavíte pro ukazovátko), abyste viděli, kde se bude vypalovat. Teprve pak se zapne {{ui:Odeslat úlohu}}, a pokud cokoli změníte, zase se vypne. {{ui:Pozastavit}} hlavu podrží, {{ui:Zastavit}} ji také podrží, resetuje řadič (laser se vypne) a odešle `M5`. Tam, kde chybí Web Serial (Firefox, Safari a CadCraft Studio, které zatím Web Serial nemá), panel nabízí jen uložení: uložte G-code a odešlete jej vlastním programem vašeho laseru.

## Ještě není hotovo

Ještě není hotovo: formáty jiných řadičů (Ruida, lasery s Marlinem, soubory výrobců), karty a náběhy, kompenzace šířky řezu, knihovny materiálů, rotační a osy Z, zarovnání kamerou, text jako obrysy.
