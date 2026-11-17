---
title: Myš, touchpad a dotyk
summary: Jak přibližovat, posouvat, klikat pravým tlačítkem a vybírat v CadCraftu myší s kolečkem, touchpadem na Macu nebo PC, nebo dotykovou obrazovkou, a v čem se liší prohlížeče.
keywords: touchpad, dotyková plocha, Magic Mouse, dotyk, tablet, iPad, posun, zoom, přiblížení, sevření, pravé tlačítko, dvouprstové, prostřední tlačítko, prohlížeč, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft je navržen pro myš s kolečkem. Vše funguje i s touchpadem, s několika zvyky, které je třeba se naučit. Dotykové obrazovky fungují pro výběr, s omezeními.

## Myš s kolečkem

- **Přiblížení:** otočte kolečkem. Výkres se přibližuje k zaměřovacímu křížku, takže ukažte na to, co chcete vidět.
- **Posun:** podržte kolečko a táhněte, nebo táhněte pravým tlačítkem.
- **Přiblížení na vše:** dvakrát klikněte na kolečko, nebo klikněte na {{ui:Rozsah}}.
- **Zpět na předchozí pohled:** klikněte na {{ui:Předchozí}} ve skupině Zobrazení, nebo napište `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Série kroků kolečkem se počítá jako jeden pohled, takže jedno {{ui:Předchozí}} ji vrátí. Pohledy, ke kterým se vracíte, uložte pomocí {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** klikněte pravým tlačítkem.

## Touchpad

:::mac
- **Posun:** pohybujte dvěma prsty po touchpadu libovolným směrem: výkres sleduje vaše prsty. Můžete také táhnout dvouprstovým kliknutím podrženým (tažení pravým tlačítkem).
- **Přiblížení:** stiskněte dva prsty k sobě (sevřete). Přiblížení sleduje zaměřovací křížek.
- **Pravý klik (Enter):** klikněte dvěma prsty. Pokud to nic nedělá, zapněte "Sekundární klik" v **Nastavení systému**, pak **Trackpad**. Klik s Control může v CadCraftu počítat jako obyčejný klik, nikoli jako pravý, proto použijte dvouprstový klik.
- **Přiblížení na oblast:** klikněte na {{ui:Okno}} ve skupině Zobrazení a klikněte na dva rohy.
:::

:::windows linux
- **Posun:** pohybujte dvěma prsty po touchpadu libovolným směrem: výkres sleduje vaše prsty. Můžete také táhnout s podrženým pravým tlačítkem.
- **Přiblížení:** stiskněte dva prsty k sobě. Přiblížení sleduje zaměřovací křížek.
- **Pravý klik (Enter):** klikněte dvěma prsty, nebo klikněte do pravého dolního rohu touchpadu, podle nastavení touchpadu.
- **Přiblížení na oblast:** klikněte na {{ui:Okno}} ve skupině Zobrazení a klikněte na dva rohy.
:::

Podržení klávesy {{key:Space}} a tažení výkres **neposouvá**: {{key:Space}} je Enter.

Myš s kolečkem stále přibližuje, po jednom kroku. Touchpad, který posílá rolování po celých krocích jako kolečko, přibližuje dvouprstovým rolováním místo posunu: oddalte, ukažte na oblast, kterou chcete, a znovu přibližte. Karta 3D si zachovává vlastní pohyby touchpadem (viz [Model ve 3D](topic:3d-solids#look-around)).

## Dotykové obrazovky a tablety

CadCraft bere prst jako kliknutí myší:

- Klepnutí vybere bod nebo objekt, nebo vybere.
- Tažení prstem po prázdném místě nakreslí lasso (pohyb nejprve doprava vytvoří okno, nejprve doleva křížení; viz [Výběr lasem](topic:lasso-selection)).
- U {{cmd:TRIM}} a {{cmd:EXTEND}} tažení prstem přes kusy je oříznou nebo prodlouží všechny.
- Tažení úchytu vybraného objektu přesune úchyt (úchyty a výběrový čtvereček jsou pro prst větší).
- **Sevření** dvěma prsty přibližuje kolem bodu mezi nimi; pohyb dvěma prsty společně **posouvá**. Druhý prst zruší to, co začal první, takže sevření nikdy nezanechá stopu.
- **Dlouhé stisknutí** (podržte bez pohybu asi půl sekundy) je pravý klik: {{key:Enter}}. Ukončí příkaz, dokončí výběr nebo zopakuje poslední příkaz.

Pod příkazovým řádkem se objeví **řádek kláves**: {{ui:Esc}}, {{ui:Zpět}}, {{ui:Znovu}}, znaky, které tabletová klávesnice skrývá (`@` `,` `<` `'` `"` `-`), {{ui:Přichytávání}}, {{ui:Ortogonální}}, tlačítko klávesnice a velké {{ui:Enter}}. Klepněte na tlačítko klávesnice (nebo na příkazový řádek) a napište příkaz nebo číslo.

Nejsou žádná najetí, takže značky uchopení se zobrazují jen tam, kde je váš prst.

:::touch
Používáte dotykovou obrazovku. Pro cokoli víc než rychlé prohlédnutí usnadní CadCraft práci připojená klávesnice a myš nebo touchpad.
:::

## Prohlížeče

CadCraft funguje stejně v Chrome, Edge, Firefoxu a Safari, na Macu, Windows a Linuxu. Rozdíly jsou malé:

| Téma | Co vědět |
|---|---|
| Otevření DWG | Velké výkresy se načítají několik sekund v každém prohlížeči; mezitím stavový řádek zobrazuje "Čtení …" |
| Stahování | Každý prohlížeč určuje, kam se stahování uloží a zda se má nejprve zeptat; viz [Prohlížeče a počítače](common:browsers) |
| Otevřít k tisku | Otevře PDF v nové kartě. Pokud prohlížeč blokuje vyskakovací okna, CadCraft místo toho stáhne PDF |
| F7 | Firefox může nabídnout procházení kurzorem; zvolte Ne |
| Odchod s neuloženými změnami | Každý prohlížeč zobrazí vlastní dotaz na opuštění stránky, který CadCraft nemůže změnit |

:::safari
V Safari se PDF otevřené přes {{ui:Otevřít k tisku}} může zobrazit v kartě bez tisku: použijte **Soubor**, pak **Tisk**.
:::

:::firefox
Firefox se může zeptat, co dělat s každým stahováním. Zvolte uložení souboru, nebo to změňte jednou v nastavení Firefoxu v části Stahování.
:::
