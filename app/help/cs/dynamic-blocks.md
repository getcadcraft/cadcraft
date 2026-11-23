---
title: Dynamické bloky
summary: Co CadCraft dělá s dynamickými bloky v DWG: zachovávají své skutečné názvy, zobrazují stav, v němž byly uloženy, přepínají stavy viditelnosti, ukazují své další hodnoty a při uložení zůstávají dynamické.
keywords: dynamický blok, dynamické bloky, viditelnost, stav viditelnosti, převrácení, natažení, vyhledání, parametry, vlastní, vlastnosti bloku, *u bloky, dynamický
from: dea2ee7c
---

## Co funguje

Výkres DWG s dynamickými bloky se otevře s těmito funkcemi:

- **Jejich skutečné názvy.** Dynamický blok je uveden v panelu {{ui:Bloky}} pod vlastním názvem („Receptacle“, „Sink“), a ne jako nepojmenovaný blok `*U`.
- **Stav, v němž byly uloženy.** Každý odkaz zobrazuje přesně to, co ukazoval jiný program: stav viditelnosti, na který byl nastaven, a natažení nebo převrácení tak, jak bylo uloženo.
- **Přepínání stavu viditelnosti.** Vyberte jeden odkaz (nebo několik stejných bloků), otevřete {{ui:Vlastnosti}} a v sekci {{ui:Vlastní}} zvolte jiný stav ze seznamu {{ui:Viditelnost}}. Odkaz ihned zobrazí ten stav, i jeho atributy: ty, které stav skrývá, zmizí; ty, které zobrazuje, se objeví se svými hodnotami. Odkaz si ponechá všechny hodnoty, takže nic nezůstane prázdné; {{ui:Vlastnosti}} uvádí skryté hodnoty označené „skryto“. {{key:Mod+Z}} vrátí starý stav jedním krokem.
- **Úchyty.** Vybraný dynamický blok ukazuje vlastní úchyty tam, kde jsou jeho parametry: malý trojúhelník pro stav viditelnosti (kliknutím se otevře seznam stavů), šipky na koncích vzdálenosti a dvojitou šipku pro převrácení. Dnes funguje jen úchyt viditelnosti; ostatní o tom informují ve stavovém řádku.
- **Další hodnoty, jen pro čtení.** Pod seznamem viditelnosti zobrazuje {{ui:Vlastní}} také vzdálenosti bloku, úhly zarovnání, stavy převrácení a body tak, jak je drží výkres.
- **Úprava stavů viditelnosti.** Blok otevřete příkazem {{cmd:BEDIT}}: editor zobrazí jeden stav, pojmenovaný v pruhu nad výkresem (jiný zvolíte tam). Napište {{cmd:BVSTATE}} pro přepnutí, přidání (skryje vše, zobrazí vše, nebo ponechá to, co je vidět), přejmenování nebo smazání stavu; {{cmd:BVHIDE}} skryje vybrané objekty v zobrazeném stavu; {{cmd:BVSHOW}} zobrazí skryté objekty vybledlé, abyste mohli kliknout na ty, které chcete vrátit. Při uložení bloku si odkazy nastavené na přejmenovaný stav ponechají jeho nový název a odkazy nastavené na smazaný stav zobrazí první stav.
- **Zůstávají dynamické.** Uložené jako DWG ve verzi, v jaké výkres přišel, zůstanou bloky dynamické se stavem, který jste zvolili: druhý program je otevře jako tytéž dynamické bloky. Upravené stavy viditelnosti se ukládají také: jejich nové názvy, přidané stavy a to, co každý z nich zobrazuje.

## Co je jen pro čtení nebo zatím není

| Zatím není | Místo toho dnes |
|---|---|
| Změna vzdáleností, úhlů nebo převrácení (akce natažení, přesunu, převrácení) | Zobrazují se jen pro čtení v {{ui:Vlastní}}; upravte je v programu, který blok vytvořil. |
| Parametry vyhledávání, XY, otočení a polární parametry | Zatím se nečtou: odkaz se zobrazí tak, jak byl uložen. |
| Tažení úchytů vzdálenosti, převrácení a bodů | Ukazují, kde parametry jsou; úchyt viditelnosti a seznam {{ui:Viditelnost}} ve Vlastnostech přepínají stavy. |
| Vytváření dynamických bloků druhu druhého programu (natažení, převrácení, vyhledávání) | Bloky, které vytvoříte v CadCraftu, jsou prosté bloky; {{cmd:BPARAMETER}} to říká. Vlastní parametry a více parametrů viditelnosti jsou ve správci parametrů (viz „Vlastní parametry a stavy viditelnosti“ níže). |
| Přidávání nebo mazání objektů bloku se stavy viditelnosti v editoru bloků | Blok se pak uloží jako prostý blok (editor to oznámí při zavření). |
| Zachování dynamiky v jiné verzi DWG nebo v DXF | Uloží se jako prosté bloky zobrazující zvolený stav a uložení to oznámí. |

:::note
Přesun nebo změna objektů v {{cmd:BEDIT}} udrží blok se stavy viditelnosti dynamický. Blok bez stavů nebo blok, jehož objekty byly v editoru přidány či smazány, se stane prostým blokem.
:::

## Vlastní parametry a stavy viditelnosti

Blok vytvořený v CadCraftu může nést vlastní parametry a **více** parametrů viditelnosti, každý se svými stavy. Napište {{cmd:BPARAMS}} (nebo `BPM`), aby se otevřel **správce parametrů** pro blok, který upravujete v {{cmd:BEDIT}}, pro blok vybraného odkazu, nebo pro blok, který zadáte.

- **Parametry**: název, typ (číslo, délka, úhel, počet, ano/ne) a hodnota, nebo vzorec nad jinými parametry (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Výsledek}} ukazuje výsledek. Vzorec, který nefunguje, nebo hodnota, která se do svého typu nevejde (počet 1,5), se odmítne a správce řekne proč; nic jiného se nezmění.
- **Parametry viditelnosti**: {{ui:Přidat parametr viditelnosti}} vytvoří jeden s prvním stavem. Každý stav lze přejmenovat, odebrat (poslední zůstane) nebo mu přiřadit číslo „zobrazí se, když“. Vzorec vybere stav z parametrů (stav, jehož číslo odpovídá, jinak stav na tomto místě v seznamu); bez vzorce si každý odkaz volí sám.
- **Umístění objektů do stavu**: v editoru bloků vyberte objekty, napište {{cmd:BPARAMS}} a klikněte na {{ui:Vložit vybrané objekty sem}} u stavu. Objekty, které žádný parametr viditelnosti neuvádí, se zobrazují vždy.
- **Tento odkaz**: spuštěný nad vybraným odkazem správce ukazuje také vlastní hodnoty a stavy tohoto odkazu.

Mimo editor bloků je každá změna jeden krok zpět. V editoru bloků patří změny editoru: {{ui:Uložit blok}} je zachová. `-BPARAMS` totéž požádá na příkazovém řádku.

**V souboru.** DWG a DXF uchovávají parametry, to, které objekty jsou v kterém stavu, a vlastní hodnoty každého odkazu, ve vlastních záznamech CadCraftu; když soubor znovu otevřete v CadCraftu, vše je zpět. Jiný program vidí každý odkaz jako blok se všemi jeho objekty, protože DWG drží nejvýš jeden parametr viditelnosti na blok svého vlastního druhu. Odkaz, který jiný program přesunul, nebo blok, jehož objekty změnil, se vrátí bez částí, které už nesedí (nic se nedomýšlí).
