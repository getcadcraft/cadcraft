---
title: Novinky ve verzích 0.8 a 0.8.1
summary: Duch, který dokončí váš výkres, náčrty perem a fotky náčrtů převedené na geometrii, listy, které se rozvrhnou samy, detaily nabízené během kreslení, GRIDMOVE a AUTODIM, štítky, soubory vhodné pro sloučení, poznámky převedené na revize, rýsování bez zraku, limity výkresu, směrníky, písma SHX, diagramy z textu a opravy ve verzi 0.8.1.
keywords: novinky, co je nového, poznámky k vydání, seznam změn, změny, 0.8, 0.8.1, verze, nové funkce, automatické doplňování, duch, karta, sketchfix, photosketch, autosheet, detaily, gridmove, autodim, štítky, poznámky, sloučení, git, fossil, přístup, rýsování bez zraku, čtečka obrazovky, limity, směrníky, aunits, shx, diagram, ole, historie, porovnat, slovy, vlastnosti, stopy a palce, natáhnout, jazyky, vstupní zařízení, problémy, živě, asistenti
from: 9dd82db5
---

Toto se změnilo v CadCraft 0.8 a 0.8.1 oproti verzi 0.7. Verze 0.8 (1. listopadu 2026) přidává pomocníky kreslení, které pracují z vašeho vlastního výkresu, podle pravidel na vašem počítači a bez modelu. Verze 0.8.1 (2. listopadu 2026) opravuje chyby nahlášené po jejím vydání.

## Novinky

### Výkres, který dokončí váš záměr

- **Duch ukazuje, co přijde dál.** Když neběží žádný příkaz, šedý čárkovaný duch ukazuje, co podle vzorů vašeho výkresu přijde dál: další stojinu se stejnou roztečí, další stupeň schodiště, chybějící stěnu místnosti. Stiskněte {{key:Tab}} pro nakreslení jako jeden krok, který lze vrátit zpět, nebo {{key:Esc}} pro zavření. Sleduje jen nejnovější objekty, takže zůstává plynulý i u velkého výkresu. Vypněte ho v {{ui:Nastavení}} › {{ui:CadCraft}} nebo příkazem {{cmd:AUTOCOMPLETE}} `Off`.
- **Další bod při kreslení úsečky.** Uprostřed {{cmd:LINE}} nebo {{cmd:PLINE}} je duch další bod: další krok schodiště, čtvrtý roh obdélníku nebo bod, který jej uzavře. Přibližte k němu kurzor a stiskněte {{key:Tab}}, jako byste tam klikli.
- **Náčrty perem se mění na přesnou geometrii.** {{cmd:SKETCHFIX}}: nakreslete perem, myší nebo prstem hrubé tahy a každý se stane čistou úsečkou, kružnicí, obloukem, obdélníkem nebo mnohočárou, přichycenou k tomu, co je již nakresleno. Viz [Kreslení perem a získání přesné geometrie](topic:sketch-with-a-pen).
- **Fotka náčrtu se mění na výkres.** {{cmd:PHOTOSKETCH}} (`PSK`) najde papír na fotce, narovná perspektivu, použije formát papíru a měřítko, které zadáte, a obkreslí tahy pera na vrstvu pro každou barvu pera. Nápisy se neobkreslují.
- **Okótujte podle pravidel.** {{cmd:AUTODIM}} (`ADIM`) vytvoří řetězce kót podél stran, které zvolíte, celkový rozměr, šířky otvorů, průměry otvorů a s `Grid` také rozteč mřížky. Nikdy nezopakuje kótu, která tam již je.
- **Posuňte osu mřížky a soustava ji následuje.** {{cmd:GRIDMOVE}} (`GM`): stěny končící na ose mřížky se natáhnou spolu s ní, stěny podél ní, sloupy, její bublina a štítek se přesunou a kóty na ní měří novou rozteč. Jeden krok zpět.

### Listy, detaily a štítky

- **Listy se rozvrhnou samy.** {{cmd:AUTOSHEET}} vezme vaše pojmenované pohledy (nebo jednotlivé části modelu), zvolí formát papíru a standardní měřítko a umístí pohledy na nové listy s razítkem a popiskou názvu a měřítka. Vše zůstává upravitelné. Viz [Rozvrhněte listy za mě](topic:lay-out-sheets-for-me).
- **Detaily vaší firmy nabízené během kreslení.** {{cmd:DETAILS}} (`DET`) uchovává vaše vlastní detailní bloky. Když výběr odpovídá některému podle slov na jeho vrstvách, názvech bloků a poznámkách, stavový řádek to oznámí. Vyberte jej a umístěte. {{cmd:DETAILS}} › Sdílet uloží váš seznam do složky Dokumenty a načte to, co přidal váš tým. V {{ui:Nastavení}} se nabídky vypnou.
- **Štítky na blocích.** {{cmd:TAGS}} definuje štítek (jeho druh, hodnoty, kterých může nabývat, bloky, na které se vztahuje), nastaví jej na vybrané odkazy na bloky a vypíše je jako tabulku, kterou můžete uložit jako CSV. Definice se uchovávají v DWG. Viz [Štítky](topic:tags).
- **Limity výkresu.** {{cmd:LIMITS}} nastaví obdélník pro výkres: mřížka jej vyplní a zoom Vše jej zobrazí. Limity se zobrazují jako obrys a ukládají se do DWG a DXF spolu s limity papíru. Viz [Nastavení limitů výkresu](topic:drawing-limits).

### Práce s ostatními lidmi a jinými programy

- **Proměňte poznámku v revizi.** {{cmd:REDLINE}} načte balíček, který zapisuje MarkupCraft, a vypíše každou změnu. Každou přijměte nebo zamítněte s poznámkou. Přijaté dostanou oblak revize a záznam revizí v jednom kroku zpět. Uložte soubor odpovědí, který uzavře poznámky v MarkupCraft. Viz [Proměňte poznámku v revizi](topic:redline-to-revision).
- **Výkresy, které git a Fossil umějí sloučit.** Když je v {{ui:Nastavení}} › {{ui:CadCraft}} zapnuto {{ui:Soubory vhodné pro sloučení}}, každý objekt dostane klíč, který se nikdy nemění (soubory jsou asi o 10 procent větší). `cadcraft merge base ours theirs` pak sloučí úpravy dvou lidí v jednom souboru DWG nebo DXF objekt po objektu a hlásí jen místa, kde dvě osoby změnily totéž. Viz [Sloučení úprav jednoho výkresu od dvou lidí](topic:merge-drawings).
- **Co se změnilo, slovy.** V {{ui:Historie}} dává Porovnat jednoduchý seznam: kde se věci změnily, jak velká jsou místa, co bylo přidáno, odebráno nebo změněno a text, který se upravil. Viz [Vyjádřete slovy, co se změnilo](topic:changes-in-words).
- **Směrníky a úhly.** Zadejte směr jako geodetický směrník, například N45°23'30"E, nebo ve stupních, minutách a sekundách, kdekoli se žádá úhel. AUNITS nastavuje, jak se úhly zobrazují. Viz [Zadávání a zobrazení směrníků a úhlů](topic:bearings-and-angles).
- **Vlastní písma SHX.** Přidejte složku s písmy SHX. Texty se stylem, který je pojmenuje, se v nich kreslí, na obrazovce i ve výtiscích. Viz [Kreslení textu ve vlastních písmech SHX](topic:shx-fonts).
- **Diagram z textu.** {{cmd:DIAGRAM}} načte vývojový diagram Mermaid, diagram komponent PlantUML, D2 nebo seznam od-do a nakreslí bloky a spojnice, které můžete upravovat. Viz [Kreslení diagramu z textu](topic:text-to-diagram).
- **Objekty OLE v DWG.** {{cmd:OLELIST}} vypíše objekty OLE, které DWG obsahuje a které CadCraft sám umístit nemůže, a umístí kopii obrázku tam, kam řeknete. Viz [Obrázky](topic:pictures#objects-from-other-programs-ole).
- **Vaše výpočty zůstávají s výkresem.** Listy výpočtů a důvody návrhu se uchovávají v DWG spolu s tabulkou tříd.

### Rýsování bez zraku

- Zapněte {{ui:Rýsování bez zraku}} v {{ui:Nastavení}} (nebo napište {{cmd:ACCESS}} a odpovězte `On`). CadCraft předčítá každý příkaz a výsledek přes čtečku obrazovky, popisuje výkres a to, co je blízko kurzoru, umožňuje posouvat kurzor a vybírat body klávesnicí a přehrává zvuk pro každé uchopení a úchyt. Tam, kde váš prohlížeč umí na počítači rozpoznávat řeč, lze příkazy vyslovovat. Viz [Rýsování bez zraku](topic:draft-without-sight).

### Ve všech aplikacích

- **Jazyky.** 54 jazyků; deset je nových (litevština, lotyština, bosenština, maráthí, telugština, albánština, afrikánština, filipínština, svahilština, uzbečtina). Jazyky kromě angličtiny jsou strojové koncepty, dokud je neprečte rodilý mluvčí.
- **Vstupní zařízení.** Touchpad, pero, 3D myš, herní ovladač a ovládání MIDI.
- **Panely nástrojů a mřížka vlastností.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Řádky panelu nástrojů}} nabízí Zalamovat, 2 řádky nebo 1 řádek v ostatních aplikacích. CadCraft má vlastní nastavení v {{ui:Nastavení}} › {{ui:CadCraft}} (viz [Řádky panelu nástrojů](topic:settings#toolbar-rows)). Sdílená mřížka vlastností je ve třech dalších aplikacích, ne v aplikaci CadCraft.
- **Problémy, Živě a doplňky.** Sdílený panel Problémy, který varuje ve všech aplikacích, zobrazení Živě, které ukazuje, kdo je kde v CadCraft Studio (viz [Práce na jednom výkresu společně](topic:work-live)), a seznam doplňků.
- **Připojte svou AI.** Jedno připojení z CadCraft Studio ke všem osmi aplikacím, s úrovní jen pro čtení, návrhy nebo úpravy pro každou aplikaci a srozumitelným záznamem toho, co asistent udělal. CadCraft nemá vlastní AI a Zeptat se ve všech aplikacích používá AI, kterou připojíte.

## Opraveno ve verzi 0.8.1

- **Vlastnosti ukazovaly 150 místo 12'-6"** ve výkresech v stopách a palcích. Pole, která čte aplikace sama, znovu zachovávají svůj text.
- **Soubory DWG, jejichž sekce tříd se četla jako špatný typ** (GitHub cadcraft#5), se nyní otevírají správně.
- **Zaměřovací kříž se už nezobrazuje za vyskakovacími okny.**
- **Studio a balené verze mohou přepínat jazyk za běhu.** Dříve byly jen v angličtině. Zatím není otestováno na každé platformě: dejte nám vědět, pokud se jazyk nezmění.
- **Tablety na výšku** uvolněnou výšku mřížky přidávají plátnu a režim listů začíná při 760 px nebo méně.
- **STRETCH s křížovým oknem a LIMITS** byly nahlášeny ve Studiu 0.8.0, ale ve webovém sestavení 0.8 už byly správně. Instalátor hlásícího byl starší. Studio 0.8.1 je obsahuje.

## Zatím není v této verzi

- **Verze 0.8 a 0.8.1 nejsou podepsány kódem.** Windows může varovat (zvolte {{ui:Další informace}}, pak {{ui:Spustit i přesto}}). Na Macu klikněte pravým tlačítkem na CadCraft Studio a zvolte {{ui:Otevřít}}. Verze pro obchody jsou pozastaveny a sestavení pro iPad a iPhone nebylo pro 0.8.1 znovu vytvořeno.
- **Náčrty perem a fotky náčrtů** byly zkoušeny jen na smyšlených fotkách a s myší, zatím ne s reálným perem, dotykovou obrazovkou nebo ručním náčrtem na papíře.
- **Rýsování bez zraku** bylo testováno automatickými kontrolami, zatím ne s čtečkou obrazovky nebo s nevidomým testerem.
- **Sdílení detailů** nebylo ověřeno dvěma osobami a složka Team Cloud Plan jako složka Dokumenty zatím není hotová.
- **Sloučení** funguje pro soubory DWG a DXF z aplikace CadCraft. Pro soubory ostatních aplikací ještě není hotovo.
- **Zpět napříč okny:** CadCraft hlásí každý dokončený krok, ale Studio zatím nemá jedno společné Zpět pro všechny aplikace. Každá aplikace vrací zpět své vlastní kroky.
- **OLE objekty v DWG** se uchovávají, ale nekreslí se na místě.
- **Čtení tabulek stylů vykreslení (soubory CTB)** z jiných programů je hotové, ale nebylo ověřeno na souboru z jiného programu.
- **Připojte svou AI:** připojení jedním kliknutím ve Studiu, hostovaný konektor pro AI v prohlížeči, váš vlastní API klíč uvnitř Studia a zveřejněný balíček MCP nejsou v této verzi slíbeny.

Starší verzi najdete v [Novinky ve verzi 0.7](topic:whats-new-0-7).
