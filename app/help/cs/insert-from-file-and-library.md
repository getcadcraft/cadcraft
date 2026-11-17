---
title: Vložení ze souboru nebo knihovny
summary: Přeneste blok, nebo celý výkres z jiného DWG nebo DXF a vkládejte položky z knihovny, ze souboru nebo z jiné knihovny, včetně uvedení autorů a aktualizací.
keywords: vložit, soubor, knihovna, librarycraft, položka, vybavení, blok z jiného výkresu, wblock, design center, uvedení autora, licence, aktualizace, zdroj, item.json
from: 316188d2
---

## Vložení bloku z jiného výkresu

1. Napište `I` a stiskněte {{key:Enter}}, nebo klikněte na {{ui:Vložit}} ve skupině Bloky.
2. Při výzvě `Zadejte název bloku nebo [Soubor (F)/Knihovna (L)]` napište `F` a stiskněte {{key:Enter}}.
3. Vyberte DWG nebo DXF na tomto počítači. Soubor se načte zde; neotevře se a nic se nenahrává.
4. V dialogu {{ui:Vložit z}} vyberte blok ze seznamu (pro hledání pište do {{ui:Filtrovat bloky}}), nebo ponechte {{ui:Celý výkres}}. Klikněte na {{ui:Vložit}}.
5. Klikněte na místo, kam má blok jít, a vyplňte atributy, pokud je požadují.

Celý výkres se vloží jako jeden blok pojmenovaný podle souboru. Bloky uvnitř vybraného bloku se vloží také. Vrstvy, které používají, se přidají do tohoto výkresu.

Pokud je druhý výkres v jiných jednotkách (třeba palce a milimetry), CadCraft odkaz přepočítá a oznámí to v historii.

### Když je název už použit

Pokud tento výkres už má blok stejného jména, CadCraft se zeptá:

- {{ui:Ponechat stávající}} použije blok tohoto výkresu s tímto jménem.
- {{ui:Přejmenovat}} vloží nový jako `Název (2)`.

Celé vložení je jeden krok: {{key:Mod+Z}} odstraní odkaz i zkopírované definice.

## Otevření knihovny

Klikněte na {{ui:Knihovna…}} v panelu {{ui:Bloky}}, nebo na {{ui:Knihovna}} ve skupině Bloky, nebo napište `LIB`. Při výzvě `INSERT` otevře knihovnu také `L`.

Knihovna má čtyři zdroje, jako karty:

- {{ui:Knihovna}}: knihovna CadCraft. Hledejte podle názvu, výrobce nebo modelu a filtrujte podle kategorie.
- {{ui:Soubory…}}: soubor položky (`item.json`) z libovolné knihovny, nebo výkres, tabulku či 3D model, z něhož se položky vytvoří: DWG nebo DXF (každý blok se stane položkou), CSV se sloupci názvu a velikosti, nebo model glTF či OBJ. Nic se nenahrává.
- {{ui:Standardní}}: ocelové profily (jako řezy, pohledy nebo 3D prvky) a normalizované díly, jako šrouby, matice a ložiska, vytvořené zde z publikovaných tabulek. Viz [Umístění ocelových profilů a normalizovaných dílů](topic:steel-and-standard-parts).
- {{ui:Jiné zdroje}}: jiné knihovny, které odpovídají stejným způsobem jako Knihovna. Jejich adresu přidáte jednou; tento prohlížeč si ji zapamatuje.

Každá karta ukazuje náhled, název, výrobce a model, licenci a verzi. Stažená položka je označena {{ui:Vyřazeno}} s důvodem; než ji umístíte, CadCraft se zeptá.

## Umístění položky

1. Klikněte na {{ui:Umístit}} na kartě.
2. Klikněte na místo, kam položka má jít. Nejprve napište `R`, pokud ji chcete otočit, nebo `S`, pokud ji chcete zvětšit či zmenšit.
3. Při výzvě `Zadejte číslo položky (CC-ITEM)` stiskněte {{key:Enter}} pro další volné číslo, nebo napište vlastní.

Položka se stane blokem pojmenovaným `LIB_<name>_v<version>`, nakresleným v jednotkách tohoto výkresu. Pokud výkres nemá jednotky, položka se vloží v milimetrech a historie to oznámí; nejprve nastavte {{ui:Jednotky}} v pravém panelu.

Její data se přenesou jako neviditelné atributy: id položky a verze, licence a uvedení autora, výrobce, model, kategorie a rozměry. Viz [Atributy bloku](topic:attributes).

## Položky ve vašem jazyce

Položka může mít název a popis i v jiných jazycích. Má-li je v jazyce, na který je CadCraft nastaven (Nastavení › Obecné › Jazyk), karta a název položky umístěného bloku je použijí. Blok sám má název vytvořený z vlastního názvu položky, takže výkres má jeden blok na položku bez ohledu na to, jakým jazykem ji umístil.

## Kontrola aktualizací

1. Otevřete knihovnu.
2. Klikněte na {{ui:Zkontrolovat aktualizace}}.

Každá položka knihovny ve výkresu je uvedena se svými čísly položek a s tím, zda je aktuální, má novější verzi (a uvádí, co se změnilo), nebo byla vyřazena. Klikněte na {{ui:Aktualizovat}} u řádku, nebo na {{ui:Aktualizovat vše}}. Každý odkaz přejde na blok nové verze a zachová své číslo položky, množství, polohu, úhel a vrstvu. {{key:Mod+Z}} aktualizaci vrátí zpět.

## Uvedení použitého

Klikněte na {{ui:Zdroje knihovny}}. Každá položka je uvedena se svým řádkem o autorovi a licencí.

- {{ui:Kopírovat uvedení autora}} zkopíruje řádek jedné položky; {{ui:Kopírovat vše}} zkopíruje všechny řádky.
- {{ui:Stáhnout CSV}} uloží seznam s čísly položek, výrobci, modely, licencemi a uvedeními autorů. Otevře se v libovolném tabulkovém editoru.

Licence jako CC BY vyžadují uvést autora tam, kde dílo použijete. Řádky uveďte na výkresu, ve specifikaci nebo v projektových poznámkách.

## Symboly a objekty

Knihovna má tři druhy položek: Symboly (kreslířské konvence, 2D), Typy (z čeho se prvek skládá) a Objekty (fyzické předměty). Na kartě {{ui:Knihovna}} seznam {{ui:Druh položky}} ukazuje Symboly a objekty dohromady, jen Symboly, nebo jen Objekty. Typy jsou to, z čeho se skládá projekt BimCraft, takže je CadCraft neuvádí.

## Přihlášení do knihovny

Klikněte na {{ui:Přihlásit se do knihovny}}. Otevře se malé okno na webu; jakmile se tam přihlásíte, CadCraft může zobrazit položky vašeho týmu a zaznamenat, co umístíte, takže se dozvíte, když se položka, kterou jste použili, změní. Přihlášení platí pro tuto kartu prohlížeče. Kdykoli ho můžete zrušit na stránce zabezpečení svého účtu.

## Časté chyby

- **"Vytváření položek z typů IFC je v BimCraftu."** Soubory IFC a rodin se čtou v aplikaci BimCraft. Položku vytvořte tam nebo v Knihovně a poté zde použijte její `item.json`.
- **"Knihovnu nelze dosáhnout."** Jste offline, nebo je knihovna nedostupná. Položky už ve výkresu nejsou dotčeny.
- **Položka je příliš velká nebo malá.** Jednotky výkresu jsou špatně nebo nejsou nastaveny. Vraťte zpět, nastavte {{ui:Jednotky}} a položku umístěte znovu.
