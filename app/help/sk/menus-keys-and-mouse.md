---
title: Ponuky, klávesy a myš
summary: Vyberte štýl ponuky, ktorý zodpovedá spôsobu vašej práce, priraďte ľubovoľnému príkazu vlastný kláves alebo kláves, ktorý napíše príkaz, presúvajte príkazy medzi kartami pásu a nastavte, čo robia koliesko a tlačidlá myši.
keywords: štýl ponuky, ponuky, pás kariet, panel nástrojov, riadok príkazov, klávesové skratky, skratky, klávesy, prispôsobiť, premapovať, priradiť, textové klávesy, myš, koliesko, obrátiť, smer zoomu, stredné tlačidlo, pravé tlačidlo, posun, export, import, prepínanie, známe, klasické kreslenie
from: 8bbf4f88
---

Príkazy CadCraft sú rovnaké, nech k nim pristúpite akokoľvek, a riadok príkazov je vždy k dispozícii s aliasmi (`L`, `C`, `TR` …). **Štýl ponuky** určuje iba to, kde sa tlačidlá nachádzajú na obrazovke, ako sa tam volajú a ktoré klávesy ich spúšťajú. Vyberte ho v {{ui:Nastavenia}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Ponuky, klávesy a myš}}; zmena sa prejaví hneď a tento prehliadač si ju zapamätá.

## Tri štýly

| Štýl | Čo dostanete |
|---|---|
| {{ui:CadCraft}} | Vlastný panel nástrojov CadCraft: {{ui:Súbor}}, {{ui:Kreslenie}}, {{ui:Úpravy}}, {{ui:Popisy}}, {{ui:Parametrické}}, {{ui:Bloky}}, {{ui:Listy}}, Upraviť a {{ui:Pohľad}}, každý s ponukou {{ui:Viac}}. Štart. |
| {{ui:Klasické kreslenie}} | Pás rozložený tak, ako klasické 2D kresliarske programy: ponuka {{ui:Súbor}} a rýchle tlačidlá, potom karty {{ui:Domov}} (Kreslenie, Úpravy, Popisy, Hladiny, Blok, Vlastnosti, Pomôcky, Schránka), {{ui:Vložiť}}, {{ui:Popisy}}, {{ui:Parametrické}}, {{ui:Pohľad}}, {{ui:Správa}}, {{ui:Výstup}} a {{ui:3D}}. Príkazy zadávajte ako vždy. Stredné tlačidlo posúva; pravé kliknutie je {{key:Enter}} a ťahanie pravým tlačidlom nerobí nič. |
| {{ui:Pás kariet}} | Pás jednoduchých kariet úloh: {{ui:Kreslenie}}, {{ui:Úpravy}}, {{ui:Popisy}}, {{ui:Parametrické}}, {{ui:Bloky}}, {{ui:Listy}}, {{ui:Pohľad}}, {{ui:3D}} a {{ui:Nástroje}}, s ponukou {{ui:Súbor}} a rýchlymi tlačidlami vpravo. Stredné a pravé tlačidlo posúvajú, ako v štýle samotného CadCraft. |

Každý štýl zachováva klávesy CadCraft: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, a {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} pre pomôcky kreslenia. Písmená nikdy nie sú klávesy: CadCraft ich napíše do riadku príkazov.

Pásy obsahujú aj nástroje panela Hladiny a pomôcky kreslenia zo stavového riadka. Karta {{ui:3D}} sa naplní, keď sa otvorí karta 3D pod výkresom; nástroj 3D vybraný na karte Model najprv otvorí kartu 3D a nástroj 2D vybraný na karte 3D najprv vráti na kartu Model.

:::tip
Kláves, ktorý patrí rozloženiu CadCraft, ale váš štýl ho priradil inému príkazu, nerobí nič a stavový riadok hovorí, kam jeho príkaz išiel ("V Moje klávesy, Ortogonálne je Ctrl+Alt+O"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} a šípky si vždy zachovajú svoj význam. Kým príkaz beží alebo kým sa do riadku príkazov píšu písmená, klávesy patria riadku príkazov.
:::

## Vytvorte si vlastné

1. Vyberte štýl najbližší tomu, čo chcete, a kliknite na {{ui:Prispôsobiť…}}.
2. Na {{ui:Klávesy a ponuky}} nájdite príkaz (pomáha vyhľadávacie pole). Kliknite na {{ui:Pridať kláves}} a stlačte kláves. Kliknutím na kláves ho odstránite.
3. Pri páse {{ui:Kde sa nachádza}} presunie príkaz na inú kartu a panel, do ponuky {{ui:Súbor}}, alebo na {{ui:Iba klávesy}}.
4. Na {{ui:Myš}} nastavte koliesko a tlačidlá, ktoré posúvajú výkres.
5. Dajte mu názov a kliknite na {{ui:Uložiť}}.

Uloženie vstavaného štýlu vytvorí vašu vlastnú kópiu ("Moje klasické kreslenie"); vstavaný sa nikdy nemení. Kláves priradený dvom príkazom sa zobrazí červenou a pred uložením ho treba opraviť.

## Klávesy, ktoré zadajú príkaz

{{cmd:SHORTCUTS}} (Pohľad › Viac › {{ui:Klávesové skratky…}}) priradí klávesu celý riadok príkazu, napríklad {{key:Ctrl+Alt+L}} pre `LINE` alebo {{key:F9}} pre `ZOOM E`. Tieto klávesy patria používanému štýlu: pri prvom otvorení tejto verzie sa klávesy, ktoré ste vytvorili v staršej verzii, prenesú do vášho štýlu "Moje klávesy CadCraft", raz, a fungujú ako predtým. Export štýlu ich vezme so sebou.

## Myš

- **Koliesko myši**: {{ui:Posun nahor priblíži}} (štart) alebo {{ui:Posun nahor oddiali}}, a ako rýchlo. Štipnutie na touchpade vždy zväčšuje smerom, ktorým sa pohybujú prsty.
- **Posúvať výkres pomocou**: stredného tlačidla, pravého tlačidla alebo oboch. Pravé kliknutie bez ťahania je vždy {{key:Enter}}. Ľavé tlačidlo vždy vyberá a kreslí v CadCraft, takže jeho označenie tu nič nemení.
- **Ťahanie v 3D zobrazeniach**: karta 3D si v každom štýle ponecháva vlastné tlačidlá (ľavé otáča, stredné a pravé posúva).

## Vezmite si to so sebou

{{ui:Exportovať}} uloží používaný štýl ako malý súbor `.ccinput.json`; {{ui:Importovať…}} pridá jeden, z iného počítača alebo od kolegu. Importovaný súbor môže ukazovať iba na vlastné príkazy CadCraft: všetko ostatné v ňom sa vynechá a v stavovom riadku sa spočíta. {{ui:Zmazať tento štýl}} odstráni jeden z vašich vlastných.

:::note
Tieto nastavenia zostávajú v tomto prehliadači. {{ui:Použiť tento štýl v každej aplikácii}} pod kartami štýlov spôsobí, že sa každá aplikácia otvorí v zodpovedajúcom štýle (vlastný panel nástrojov, pás alebo Klasické kreslenie), so zmenami, ktoré ste urobili v každej aplikácii. CadCraft nemá štýl s lištou ponúk: keď sa pre všetky aplikácie zvolí lišta ponúk inej aplikácie, CadCraft si ponechá vlastný panel nástrojov.
:::

Súvisiace: [Klávesnica a myš](topic:keyboard) · [Nastavenia CadCraft](topic:settings) · [Prechod z iného kresliaceho softvéru](topic:coming-from) · [Aliasy príkazov](topic:command-aliases)
