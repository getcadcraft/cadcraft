---
title: Vloženie zo súboru alebo z knižnice
summary: Prineste blok alebo celý výkres z iného DWG alebo DXF a umiestnite položky z knižnice, zo súboru alebo z inej knižnice s ich uvedením autorov a aktualizáciami.
keywords: vložiť, súbor, knižnica, librarycraft, položka, vybavenie, blok z iného výkresu, wblock, centrum návrhu, uvedenie autorov, licencia, aktualizácia, zdroj, item.json
from: 316188d2
---

## Vloženie bloku z iného výkresu

1. Zadajte `I` a stlačte {{key:Enter}}, alebo kliknite na {{ui:Vložiť}} v skupine Bloky.
2. Pri výzve `Zadajte názov bloku alebo [Súbor (F)/Knižnica (L)]` zadajte `F` a stlačte {{key:Enter}}.
3. Vyberte DWG alebo DXF na tomto počítači. Číta sa tu; neotvára sa a nič sa nenahráva.
4. V dialógovom okne {{ui:Vložiť z}} vyberte blok zo zoznamu (píšte do poľa {{ui:Filtrovať bloky}}, aby ste ho našli), alebo ponechajte {{ui:Celý výkres}}. Kliknite na {{ui:Vložiť}}.
5. Kliknite, kam má ísť, a vyplňte atribúty, ak ich vyžaduje.

Celý výkres sa vloží ako jeden blok pomenovaný podľa súboru. Aj bloky vnútri vybraného bloku prídu so ním. Hladiny, ktoré používajú, sa pridajú do tohto výkresu.

Ak je iný výkres v iných jednotkách (napríklad v palcoch a milimetroch), CadCraft prispôsobí mierku odkazu a oznámi to v histórii.

### Ak je názov už použitý

Ak tento výkres už má blok s rovnakým názvom, CadCraft sa opýta:

- {{ui:Ponechať existujúce}} použije blok tohto výkresu s týmto názvom.
- {{ui:Premenovať}} vloží nový ako `Názov (2)`.

Celé vloženie je jeden krok: {{key:Mod+Z}} odstráni odkaz aj skopírované definície.

## Otvorenie knižnice

Kliknite na {{ui:Knižnica…}} v paneli {{ui:Bloky}}, alebo na {{ui:Knižnica}} v skupine Bloky, alebo zadajte `LIB`. Pri výzve `INSERT` ju otvorí aj `L`.

Knižnica má štyri zdroje, ako karty:

- {{ui:Knižnica}}: knižnica CadCraft. Hľadajte podľa názvu, výrobcu alebo modelu a filtrujte podľa kategórie.
- {{ui:Súbory…}}: súbor položky (`item.json`) z ľubovoľnej knižnice, alebo výkres, tabuľku či 3D model, z ktorých sa vytvoria položky: DWG alebo DXF (každý blok sa stane položkou), CSV so stĺpcami názov a veľkosť, alebo model glTF či OBJ. Nič sa nenahráva.
- {{ui:Štandardné}}: oceľové profily (ako rezy, pohľady alebo 3D prvky) a štandardné diely ako skrutky, matice a ložiská, vytvorené tu z publikovaných tabuliek. Pozri [Umiestnenie oceľových profilov a štandardných dielov](topic:steel-and-standard-parts).
- {{ui:Ďalšie zdroje}}: iné knižnice, ktoré odpovedajú rovnako ako Knižnica. Ich adresu pridajte iba raz; tento prehliadač si ju zapamätá.

Každá karta zobrazuje ukážku, názov, výrobcu a model, licenciu a verziu. Stiahnutá položka je označená {{ui:Stiahnutá}} s dôvodom; CadCraft sa pred jej umiestnením opýta.

## Umiestnenie položky

1. Kliknite na {{ui:Umiestniť}} na karte.
2. Kliknite, kam má položka ísť. Najprv zadajte `R`, aby ste ju otočili, alebo `S`, aby ste zmenili jej mierku.
3. Pri výzve `Zadajte číslo položky (CC-ITEM)` stlačte {{key:Enter}} pre ďalšie voľné číslo, alebo zadajte vlastné.

Položka sa stane blokom pomenovaným `LIB_<name>_v<version>`, nakresleným v jednotkách tohto výkresu. Ak výkres nemá jednotky, položka sa vloží v milimetroch a história to oznámi; najprv nastavte {{ui:Jednotky}} na pravom paneli.

Jej údaje idú so položkou ako neviditeľné atribúty: id a verzia položky, licencia a uvedenie autora, výrobca, model, kategória a rozmery. Pozri [Atribúty bloku](topic:attributes).

## Položky vo vašom jazyku

Položka môže mať názov a popis aj v iných jazykoch. Keď ich má v jazyku, na ktorý je CadCraft nastavený (Nastavenia › Všeobecné › Jazyk), karta a názov položky umiestneného bloku ich použijú. Samotný blok má názov odvodený z vlastného názvu položky, takže výkres má jeden blok na položku bez ohľadu na to, v akom jazyku ju umiestnil.

## Kontrola aktualizácií

1. Otvorte knižnicu.
2. Kliknite na {{ui:Skontrolovať aktualizácie}}.

Každá položka knižnice vo výkrese je uvedená s číslami položiek a tým, či je aktuálna, má novšiu verziu (a čo sa zmenilo), alebo bola stiahnutá. Kliknite na {{ui:Aktualizovať}} pri riadku, alebo na {{ui:Aktualizovať všetko}}. Každý odkaz sa presunie na blok novej verzie a zachová si číslo položky, množstvo, miesto, uhol a hladinu. {{key:Mod+Z}} aktualizáciu zruší.

## Uvedenie použitých zdrojov

Kliknite na {{ui:Uvedenie autorov knižnice}}. Každá položka je uvedená s riadkom uvedenia autora a licenciou.

- {{ui:Kopírovať uvedenie autora}} skopíruje riadok jednej položky; {{ui:Kopírovať všetko}} skopíruje všetky riadky.
- {{ui:Stiahnuť CSV}} uloží zoznam s číslami položiek, výrobcami, modelmi, licenciami a uvedeniami autorov. Otvorí sa v ľubovoľnom tabuľkovom editore.

Licencie ako CC BY vyžadujú, aby ste autora uviedli tam, kde dielo používate. Uveďte riadky na výkrese, v špecifikácii alebo v projektových poznámkach.

## Symboly a aktíva

Knižnica má tri druhy položiek: Symboly (konvencie výkresu, 2D), Typy (z čoho sa prvok skladá) a Aktíva (fyzické objekty). Na karte {{ui:Knižnica}} zoznam {{ui:Druh položky}} zobrazuje Symboly a Aktíva spolu, iba Symboly, alebo iba Aktíva. Typy sú to, z čoho sa skladá projekt BimCraft, preto ich CadCraft nevypisuje.

## Prihlásenie do knižnice

Kliknite na {{ui:Prihlásiť sa do knižnice}}. Otvorí sa malé okno na stránke; keď sa tam prihlásite, CadCraft vám môže ukázať položky vášho tímu a zaznamenať, čo umiestňujete, aby ste sa dozvedeli, keď sa položka, ktorú ste použili, zmení. Prihlásenie platí pre túto kartu prehliadača. Kedykoľvek ho môžete zrušiť na stránke zabezpečenia svojho účtu.

## Časté chyby

- **"Vytváranie položiek z typov IFC je v BimCraft."** Súbory IFC a rodín sa čítajú v aplikácii BimCraft. Položku vytvorte tam alebo v knižnici, potom tu použite jej `item.json`.
- **"Knižnicu sa nepodarilo kontaktovať."** Ste offline alebo je knižnica nedostupná. Položky, ktoré už sú vo výkrese, to neovplyvní.
- **Položka je príliš veľká alebo príliš malá.** Jednotky výkresu sú zle alebo nie sú nastavené. Vráťte krok späť, nastavte {{ui:Jednotky}} a položku umiestnite znova.
