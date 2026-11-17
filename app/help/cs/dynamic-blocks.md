---
title: Dynamické bloky
summary: Co CadCraft dělá s dynamickými bloky v DWG: zachovávají své skutečné názvy, ukazují stav, ve kterém byly uloženy, přepínají stavy viditelnosti, ukazují své další hodnoty a při uložení zůstávají dynamické.
keywords: dynamický blok, dynamické bloky, viditelnost, stav viditelnosti, zrcadlení, natáhnout, vyhledávání, parametry, vlastní, vlastnosti bloku, *u bloky, dynamický
from: 26b6aa80
---

## Co funguje

DWG vytvořený s dynamickými bloky se otevře s nimi fungujícími až do této míry:

- **Jejich skutečné názvy.** Dynamický blok je v panelu {{ui:Bloky}} uveden pod svým vlastním názvem („Zásuvka“, „Dřez“), ne jako nepojmenovaný blok `*U`.
- **Stav, ve kterém byly uloženy.** Každý odkaz ukazuje přesně to, co ukazoval druhý program: stav viditelnosti, na který byl nastaven, natažený nebo zrcadlený tak, jak byl uložen.
- **Přepínání stavu viditelnosti.** Vyberte jeden odkaz (nebo několik stejných bloků), otevřete {{ui:Vlastnosti}} a v sekci {{ui:Vlastní}} zvolte jiný stav ze seznamu {{ui:Viditelnost}}. Odkaz hned ukáže tento stav, včetně svých atributů: ty, které stav skryje, zmizí, ty, které zobrazí, se objeví s hodnotami. Odkaz si zachovává všechny hodnoty, takže se nic nevrátí prázdné; {{ui:Vlastnosti}} vypisuje skryté s označením „skryto“. {{key:Mod+Z}} vrátí starý stav jedním krokem.
- **Úchyty.** Vybraný dynamický blok ukazuje své vlastní úchyty tam, kde jsou jeho parametry: malý trojúhelník pro stav viditelnosti (kliknutím získáte seznam stavů), šipky na koncích vzdálenosti, dvojitá šipka pro zrcadlení. Dnes funguje jen úchyt viditelnosti; ostatní to ve stavovém řádku oznámí.
- **Ostatní hodnoty, jen pro čtení.** Pod seznamem viditelnosti ukazuje {{ui:Vlastní}} také vzdálenosti, úhly zarovnání, stavy zrcadlení a body bloku tak, jak je výkres drží.
- **Úprava stavů viditelnosti.** Blok otevřete pomocí {{cmd:BEDIT}}: editor ukazuje jeden stav, pojmenovaný v liště nad výkresem (jiný můžete zvolit tam). Napište {{cmd:BVSTATE}} pro přepnutí, přidání (skryje vše, zobrazí vše nebo ponechá to, co je vidět), přejmenování nebo smazání stavu; {{cmd:BVHIDE}} skryje vybrané objekty ve stavu, který je zobrazen; {{cmd:BVSHOW}} zobrazí skryté zeslabené, abyste mohli kliknout na ty, které chcete vrátit. Uložte blok: odkazy nastavené na přejmenovaný stav si ho ponechají pod novým názvem a odkazy nastavené na smazaný stav ukážou první stav.
- **Zůstávají dynamické.** Uložené jako DWG ve verzi, ve které výkres přišel, bloky zůstávají dynamické se stavem, který jste zvolili: druhý program je otevře jako tytéž dynamické bloky. Stavy viditelnosti, které jste upravili, se ukládají také: jejich nové názvy, stavy, které jste přidali, a co každý z nich zobrazuje.

## Co je jen pro čtení, nebo zatím chybí

| Zatím chybí | Místo toho dnes |
|---|---|
| Změna vzdáleností, úhlů nebo zrcadlení (akce natáhnout, přesunout, zrcadlit) | Zobrazují se jen pro čtení v {{ui:Vlastní}}; upravte je v programu, který blok vytvořil. |
| Parametry vyhledávání, XY, otočení a polární | Zatím se nečtou: odkaz se zobrazí tak, jak byl uložen. |
| Tažení úchytů vzdálenosti, zrcadlení a bodu | Ukazují, kde parametry jsou; úchyt viditelnosti a seznam {{ui:Viditelnost}} ve Vlastnostech přepínají stavy. |
| Vytváření dynamických bloků (přidávání parametrů nebo stavů viditelnosti bloku, který je nemá) | Bloky, které vytvoříte v CadCraft, jsou prosté bloky; {{cmd:BPARAMETER}} to říká. |
| Přidávání nebo mazání objektů bloku se stavy viditelnosti v editoru bloků | Blok se pak uloží jako prostý blok (editor to oznámí při zavření). |
| Zachování dynamiky v jiné verzi DWG nebo v DXF | Uloží se jako prosté bloky zobrazující zvolený stav a uložení to oznámí. |

:::note
Přesun nebo změna objektů v {{cmd:BEDIT}} ponechá blok se stavy viditelnosti dynamický. Blok bez stavů nebo blok, jehož objekty byly v editoru přidány nebo smazány, se stane prostým blokem.
:::
