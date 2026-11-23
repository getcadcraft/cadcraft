---
title: Vložení ze souboru nebo z knihovny
summary: Přineste blok nebo celý výkres z jiného DWG nebo DXF a umísťujte položky z knihovny, ze souboru nebo z jiné knihovny, s jejich uvedením autora a aktualizacemi.
keywords: vložit, soubor, knihovna, librarycraft, položka, vybavení, blok z jiného výkresu, wblock, design center, uvedení autora, licence, aktualizace, zdroj, item.json
from: f6e4e452
---

## Vložení bloku z jiného výkresu

1. Napište `I` a stiskněte {{key:Enter}}, nebo klikněte na {{ui:Vložit}} ve skupině Bloky.
2. Příkazový řádek ve spodní části okna se zeptá `Enter block name or [File/Library]`. Napište tam `F` a stiskněte {{key:Enter}}.
3. Vyberte DWG nebo DXF na tomto počítači. Soubor se přečte zde; neotevírá se a nic se nenahrává.
4. V dialogu {{ui:Vložit z}} vyberte blok ze seznamu (pro hledání napište do {{ui:Filtrovat bloky}}), nebo ponechte {{ui:Celý výkres}}. Klikněte na {{ui:Vložit}}.
5. Klikněte, kam blok půjde, a vyplňte atributy, pokud se na ně zeptá.

Můžete také začít z panelu {{ui:Bloky}}: napište `F` do jeho pole {{ui:Filtrovat bloky}} a stiskněte {{key:Enter}}, nebo napište něco, co se neshoduje s žádným blokem, a klikněte na {{ui:Ze souboru…}}. `L` a {{ui:Knihovna…}} otevřou knihovnu stejným způsobem. Před verzí 0.10.1 písmeno napsané do {{ui:Filtrovat bloky}} prohledávalo jen bloky tohoto výkresu a odpovědělo „No block matches the filter.“

Chcete-li mít po ruce výkres vlastních bloků, klikněte na {{ui:Přidat výkres}} v sekci {{ui:Knihovny}} v panelu {{ui:Bloky}} a vyberte DWG nebo DXF. Jeho bloky se zobrazí s náhledy; kliknutím na jeden jej umístíte.

Celý výkres vstoupí jako jeden blok pojmenovaný podle souboru. Vstoupí i bloky uvnitř vybraného bloku. Vrstvy, které používají, se přidají do tohoto výkresu.

Je-li druhý výkres v jiných jednotkách (řekněme palce a milimetry), CadCraft odkaz přepočítá a v historii to oznámí.

### Když je název už použit

Má-li tento výkres už blok stejného názvu, CadCraft se zeptá:

- {{ui:Ponechat stávající}} použije blok tohoto výkresu se stejným názvem.
- {{ui:Přejmenovat}} přinese nový blok jako `Name (2)`.

Celé vložení je jeden krok: {{key:Mod+Z}} odstraní odkaz i zkopírované definice.

## Otevření knihovny

Klikněte na {{ui:Knihovna…}} v panelu {{ui:Bloky}}, nebo na {{ui:Knihovna}} ve skupině Bloky, anebo napište `LIB`. U výzvy `INSERT` ji otevře také `L`.

Knihovna má čtyři zdroje, jako karty:

- {{ui:Knihovna}}: knihovna CadCraftu. Hledání podle názvu, výrobce nebo modelu a filtr podle kategorie.
- {{ui:Soubory…}}: soubor položky (`item.json`) z libovolné knihovny, nebo výkres, tabulka či 3D model, z nichž se položky vytvoří: DWG nebo DXF (každý blok se stane položkou), CSV se sloupci názvu a rozměru, nebo model glTF či OBJ. Nic se nenahrává.
- {{ui:Standard}}: ocelové profily (jako průřezy, pohledy nebo 3D prvky) a normalizované díly, jako šrouby, matice a ložiska, vytvořené zde podle zveřejněných tabulek. Viz [Umístění ocelových profilů a normalizovaných dílů](topic:steel-and-standard-parts).
- {{ui:Jiné zdroje}}: jiné knihovny, které odpovídají stejným způsobem jako Knihovna. Jednou přidejte jejich adresu; tento prohlížeč si ji zapamatuje.

Každá karta ukazuje náhled, název, výrobce a model, licenci a verzi. Staženou položku označí {{ui:Staženo}} s důvodem; CadCraft se před umístěním zeptá.

## Umístění položky

1. Klikněte na {{ui:Umístit}} na kartě.
2. Klikněte, kam položka půjde. Napište nejprve `R`, aby se otočila, nebo `S`, aby se zvětšila nebo zmenšila.
3. U výzvy `Enter Item number (CC-ITEM)` stiskněte {{key:Enter}} pro další volné číslo, nebo napište vlastní.

Položka se stane blokem pojmenovaným `LIB_<name>_v<version>`, nakresleným v jednotkách tohoto výkresu. Nemá-li výkres jednotky, položka se vloží v milimetrech a historie to řekne; nejprve nastavte {{ui:Jednotky}} v pravém panelu.

Její data se přenesou jako neviditelné atributy: id a verze položky, licence a uvedení autora, výrobce, model, kategorie a rozměry. Viz [Atributy bloků](topic:attributes).

## Položky ve vašem jazyce

Položka může nést svůj název a popis i v jiných jazycích. Má-li je v jazyce, na který je CadCraft nastaven (Nastavení › Obecné › Jazyk), karta a název položky u umístěného bloku je použijí. Samotný blok nese název odvozený z vlastního názvu položky, takže výkres má jeden blok na položku bez ohledu na to, jakým jazykem byla umístěna.

## Kontrola aktualizací

1. Otevřete knihovnu.
2. Klikněte na {{ui:Zkontrolovat aktualizace}}.

Každá položka knihovny ve výkresu je uvedena se svými čísly položek a s tím, zda je aktuální, má novější verzi (a co se změnilo), nebo byla stažena. Klikněte na {{ui:Aktualizovat}} u řádku, nebo na {{ui:Aktualizovat vše}}. Každý odkaz přejde na blok nové verze a zachová své číslo položky, množství, místo, úhel a vrstvu. {{key:Mod+Z}} aktualizaci vrátí zpět.

## Uvedení autorů zdrojů, které jste použili

Klikněte na {{ui:Zdroje knihovny}}. Každá položka je uvedena se svým řádkem uvedení autora a licencí.

- {{ui:Kopírovat uvedení autora}} zkopíruje řádek jedné položky; {{ui:Kopírovat vše}} zkopíruje všechny řádky.
- {{ui:Stáhnout CSV}} uloží seznam s čísly položek, výrobci, modely, licencemi a uvedeními autora. Otevře se v libovolném tabulkovém procesoru.

Licence jako CC BY žádají, abyste autora uvedli všude, kde dílo použijete. Řádky umístěte na výkres, do specifikace nebo do poznámek k projektu.

## Symboly a prostředky

Knihovna má tři druhy položek: Symboly (kreslířské konvence, 2D), Typy (z čeho se prvek skládá) a Prostředky (fyzické objekty). Na kartě {{ui:Knihovna}} seznam {{ui:Druh položky}} ukazuje Symboly a prostředky společně, jen Symboly, nebo jen Prostředky. Typy jsou to, z čeho se skládá projekt BimCraftu, takže je CadCraft nevypisuje.

## Přihlášení do knihovny

Klikněte na {{ui:Přihlásit se do knihovny}}. Otevře se malé okno na stránce; jakmile se tam přihlásíte, CadCraft může ukázat položky vašeho týmu a zaznamenat, co umísťujete, takže se dozvíte, když se položka, kterou jste použili, změní. Přihlášení platí pro tuto kartu prohlížeče. Kdykoli je můžete zrušit na stránce zabezpečení svého účtu.

## Ukládání vlastních objektů do {{ui:Moje objekty}}

{{ui:Moje objekty}} je soukromý seznam v Knihovně, který vidíte jen vy. Není ve veřejné knihovně, není ve hledání a není vidět vašemu týmu; sleduje váš účet na každém počítači, na němž se do knihovny přihlásíte.

1. V panelu Knihovny klikněte na {{ui:Soubory…}} a přečtěte soubor.
2. U položky, kterou chcete mít znovu po ruce, klikněte na {{ui:Uložit do mých objektů}}.
3. Později klikněte na {{ui:Moje objekty}} a na {{ui:Umístit}}. Umístí se jako každá jiná položka knihovny a {{ui:Zkontrolovat aktualizace}} se na ni vztahuje.
4. {{ui:Odebrat z mých objektů}} ji ze seznamu vyjme. Kopie už umístěné ve výkresech zůstanou.

Musíte být přihlášeni do knihovny. Čtení souboru nic nenahrává; uložení položky odešle jen tuto jednu položku na váš účet.

:::note
Moje objekty se zkouší a pro váš účet nemusí být ještě otevřené. Hlásí-li „My objects is not open for this account yet“, můžete i tak umisťovat položky ze svých souborů pomocí {{ui:Soubory…}}.
:::

## Časté chyby

- **„Making items from IFC types is in BimCraft.“** Soubory IFC a rodin se čtou v aplikaci BimCraft. Položku vytvořte tam nebo v Knihovně a potom zde použijte její `item.json`.
- **„The library could not be reached.“** Jste offline, nebo je knihovna nedostupná. Položky už ve výkresu tím nejsou dotčeny.
- **Položka je příliš velká nebo malá.** Jednotky výkresu jsou špatně nebo nejsou nastaveny. Vraťte se zpět, nastavte {{ui:Jednotky}} a položku umístěte znovu.
