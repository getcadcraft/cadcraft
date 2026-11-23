---
title: Vloženie zo súboru alebo knižnice
summary: Prineste blok alebo celý výkres z iného DWG alebo DXF a vložte položky z Knižnice, zo súboru alebo z inej knižnice s ich uvedeniami autorov a aktualizáciami.
keywords: vložiť, súbor, knižnica, librarycraft, položka, zariadenie, blok z iného výkresu, wblock, design center, uvedenie autora, licencia, aktualizácia, kanál, item.json
from: f6e4e452
---

## Vloženie bloku z iného výkresu

1. Napíšte `I` a stlačte {{key:Enter}}, alebo kliknite na {{ui:Vložiť}} v skupine Bloky.
2. Riadok príkazov v dolnej časti okna sa pýta `Enter block name or [File/Library]`. Napíšte tam `F` a stlačte {{key:Enter}}.
3. Vyberte DWG alebo DXF na tomto počítači. Číta sa tu; neotvára sa a nič sa neodosiela.
4. V dialógu {{ui:Vložiť z}} vyberte blok zo zoznamu (píšte do {{ui:Filtrovať bloky}}, aby ste ho našli), alebo ponechajte {{ui:Celý výkres}}. Kliknite na {{ui:Vložiť}}.
5. Kliknite, kam má ísť, a vyplňte atribúty, ktoré pýta.

Môžete začať aj od panela {{ui:Bloky}}: napíšte `F` do jeho poľa {{ui:Filtrovať bloky}} a stlačte {{key:Enter}}, alebo napíšte niečo, čo sa so žiadnym blokom nezhoduje, a kliknite na {{ui:Zo súboru…}}. `L` a {{ui:Knižnica…}} otvoria knižnicu rovnako. Pred verziou 0.10.1 písmeno napísané do {{ui:Filtrovať bloky}} prehľadávalo iba bloky tohto výkresu a odpovedalo „No block matches the filter."

Ak chcete mať výkres vlastných blokov po ruke, kliknite na {{ui:Pridať výkres}} pod {{ui:Knižnice}} na paneli {{ui:Bloky}} a vyberte DWG alebo DXF. Jeho bloky sa zobrazia s obrázkami; kliknutím na jeden ho umiestnite.

Celý výkres prichádza ako jeden blok pomenovaný podľa súboru. Prichádzajú aj bloky vnútri vybraného bloku. Hladiny, ktoré používajú, sa pridajú do tohto výkresu.

Ak je iný výkres v iných jednotkách (napríklad palce a milimetre), CadCraft referenciu zmení na mierku a oznámi to v histórii.

### Keď je názov už použitý

Ak má tento výkres už blok s rovnakým názvom, CadCraft sa opýta:

- {{ui:Ponechať existujúci}} použije blok tohto výkresu s týmto názvom.
- {{ui:Premenovať}} prinesie nový ako `Name (2)`.

Celé vloženie je jeden krok: {{key:Mod+Z}} odoberie referenciu a skopírované definície.

## Otvorenie knižnice

Kliknite na {{ui:Knižnica…}} na paneli {{ui:Bloky}}, alebo na {{ui:Knižnica}} v skupine Bloky, alebo napíšte `LIB`. Pri výzve `INSERT` ju `L` tiež otvorí.

Knižnica má štyri zdroje, ako karty:

- {{ui:Knižnica}}: knižnica CadCraftu. Hľadajte podľa názvu, výrobcu alebo modelu a filtrujte podľa kategórie.
- {{ui:Súbory…}}: súbor položky (`item.json`) z ktorejkoľvek knižnice, alebo výkres, tabuľka či 3D model, z ktorých sa vytvoria položky: DWG alebo DXF (každý blok sa stane položkou), CSV so stĺpcami názvu a veľkosti, alebo model glTF či OBJ. Nič sa neodosiela.
- {{ui:Štandard}}: oceľové profily (ako rezy, pohľady alebo 3D prvky) a štandardné diely ako skrutky, matice a ložiská, vytvorené tu z uverejnených tabuliek. Pozrite [Umiestnenie oceľových profilov a štandardných dielov](topic:steel-and-standard-parts).
- {{ui:Ďalšie zdroje}}: iné knižnice, ktoré odpovedajú rovnakým spôsobom ako Knižnica. Pridajte ich adresu raz; tento prehliadač si ju zapamätá.

Každá karta zobrazuje náhľad, názov, výrobcu a model, licenciu a verziu. Stiahnutá položka je označená {{ui:Stiahnuté}} s dôvodom; CadCraft sa pred jej umiestnením opýta.

## Umiestnenie položky

1. Kliknite na {{ui:Umiestniť}} na karte.
2. Kliknite, kam položka ide. Najprv napíšte `R`, aby ste ju otočili, alebo `S`, aby ste zmenili mierku.
3. Pri `Enter Item number (CC-ITEM)` stlačte {{key:Enter}} pre najbližšie voľné číslo, alebo napíšte svoje vlastné.

Položka sa stane blokom pomenovaným `LIB_<name>_v<version>`, nakresleným v jednotkách tohto výkresu. Ak výkres nemá jednotky, položka sa vloží v milimetroch a história to povie; najprv nastavte {{ui:Jednotky}} v pravom paneli.

Jej údaje cestujú ako neviditeľné atribúty: id položky a verzia, licencia a uvedenie autora, výrobca, model, kategória a rozmery. Pozrite [Atribúty bloku](topic:attributes).

## Položky vo vašom jazyku

Položka môže niesť svoj názov a popis v iných jazykoch. Keď ich má v jazyku, na ktorý je CadCraft nastavený (Nastavenia › Všeobecné › Jazyk), karta a názov položky umiestneného bloku ich použijú. Samotný blok si ponecháva názov odvodený z vlastného názvu položky, takže výkres má jeden blok na položku bez ohľadu na to, v ktorom jazyku ju umiestnil.

## Kontrola aktualizácií

1. Otvorte knižnicu.
2. Kliknite na {{ui:Kontrola aktualizácií}}.

Každá položka knižnice vo výkrese sa vypíše s jej číslami položiek a s tým, či je aktuálna, má novšiu verziu (a čo sa zmenilo), alebo bola stiahnutá. Kliknite na {{ui:Aktualizovať}} v riadku alebo na {{ui:Aktualizovať všetko}}. Každá referencia sa presunie na blok novej verzie a zachová si číslo položky, množstvo, miesto, uhol a hladinu. {{key:Mod+Z}} zruší aktualizáciu.

## Uvedenie autorov pre to, čo ste použili

Kliknite na {{ui:Uvedenia autorov knižnice}}. Každá položka je vypísaná s riadkom uvedenia autora a licenciou.

- {{ui:Kopírovať uvedenie autora}} skopíruje riadok jednej položky; {{ui:Kopírovať všetko}} skopíruje každý riadok.
- {{ui:Stiahnuť CSV}} uloží zoznam s číslami položiek, výrobcami, modelmi, licenciami a uvedeniami autorov. Otvorí sa v ľubovoľnej tabuľkovej aplikácii.

Licencie ako CC BY od vás žiadajú uviesť autora tam, kde dielo používate. Dajte riadky na výkres, do špecifikácie alebo do projektových poznámok.

## Symboly a zdroje

Knižnica má tri druhy položiek: Symboly (konvencie kreslenia, 2D), Typy (z čoho sa prvok skladá) a Zdroje (fyzické objekty). Na karte {{ui:Knižnica}} zoznam {{ui:Druh položky}} zobrazuje Symboly a zdroje spolu, iba Symboly alebo iba Zdroje. Typy sú to, z čoho sa skladá projekt BimCraft, takže ich CadCraft nevypisuje.

## Prihlásenie do knižnice

Kliknite na {{ui:Prihlásiť sa do knižnice}}. Otvorí sa malé okno na stránke; keď sa tam prihlásite, CadCraft vám môže ukázať položky vášho tímu a zaznamenať, čo umiestňujete, takže sa dozviete, keď sa zmení položka, ktorú ste použili. Prihlásenie platí pre túto kartu prehliadača. Kedykoľvek ho zrušte na stránke zabezpečenia vášho účtu.

## Ponechanie vlastných objektov v Mojich objektoch

{{ui:Moje objekty}} je súkromný zoznam v Knižnici, ktorý vidíte iba vy. Nie je vo verejnej knižnici, nie je vo vyhľadávaní a nezobrazuje sa vášmu tímu a nasleduje váš účet na každom počítači, kde sa prihlásite do knižnice.

1. V paneli Knižnica kliknite na {{ui:Súbory…}} a prečítajte súbor.
2. Pri položke, ktorú chcete znova, kliknite na {{ui:Ponechať v mojich objektoch}}.
3. Neskôr kliknite na {{ui:Moje objekty}} a kliknite na {{ui:Umiestniť}}. Umiestni sa ako každá položka knižnice a {{ui:Kontrola aktualizácií}} ju pokrýva.
4. {{ui:Odstrániť z mojich objektov}} ju odstráni zo zoznamu. Kópie už umiestnené vo výkresoch zostanú.

Musíte byť prihlásení do knižnice. Čítanie súboru nič neodosiela; ponechanie položky odošle len túto jednu položku na váš účet.

:::note
Moje objekty sa testuje a pre váš účet nemusí byť ešte otvorené. Ak píše „My objects is not open for this account yet", môžete stále umiestňovať položky z vlastných súborov cez {{ui:Súbory…}}.
:::

## Časté chyby

- **„Making items from IFC types is in BimCraft."** Súbory IFC a rodiny sa čítajú v aplikácii BimCraft. Vytvorte položku tam alebo v Knižnici a potom použite jej `item.json` tu.
- **„The library could not be reached."** Ste offline alebo knižnica nefunguje. Položky už vo výkrese nie sú ovplyvnené.
- **Položka je príliš veľká alebo príliš malá.** Jednotky výkresu sú zlé alebo nenastavené. Vráťte krok späť, nastavte {{ui:Jednotky}} a umiestnite ju znova.
