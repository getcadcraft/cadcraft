---
title: Okótovanie pôdorysu
summary: Pridajte dĺžkové, zarovnané, uhlové, polomerové a priemerové kóty, reťazte ich pomocou Pokračujúca kóta a Kóta od základne a prepíšte text.
keywords: kóta, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, reťaz, séria, popisy, nástroj kóty, kde, nájsť, panel nástrojov, merať, mm, cm, m, km, jednotky
from: 9ee65123
---

## Čo vytvoríte

Okótovanú miestnosť: celkovú šírku a výšku, reťaz kót pozdĺž jednej steny, šikmú stenu, zaoblený roh a uhol.

Než začnete, prečítajte si [Nastavenie veľkostí kót](topic:dimension-settings), ak je váš výkres veľký: text kóty má štandardne výšku 2.5 jednotky výkresu, čo je v výkrese meranom v milimetroch malé. Pre nasledujúce kroky najprv napíšte `DIMSCALE`, stlačte {{key:Enter}}, napíšte `50` a stlačte {{key:Enter}}.

## Kde sú nástroje na kótovanie

So štýlom ponuky CadCraft (ten, s ktorým CadCraft začína) sú nástroje na kótovanie na paneli nástrojov nad výkresom, v skupine {{ui:Popisy}}: {{ui:Dĺžková}}, {{ui:Zarovnaná}}, {{ui:Uhol}}, {{ui:Polomer}} a {{ui:Priemer}}. Ponuka {{ui:Viac}} v tejto skupine má {{ui:Pokračujúca kóta}} a {{ui:Kóta od základne}}. Podržte ukazovateľ nad tlačidlom, aby ste videli, čo robí.

- So štýlom ponuky {{ui:Klasické kreslenie}} alebo {{ui:Pás kariet}} otvorte kartu {{ui:Popisy}}: nástroje sú na paneli {{ui:Kóty}}. {{ui:Klasické kreslenie}} má aj {{ui:Dĺžková}} na karte {{ui:Domov}} pod {{ui:Popisy}}. Pozri [Ponuky, klávesy a myš](topic:menus-keys-and-mouse).
- Alebo napíšte príkaz na príkazovom riadku pod výkresom a stlačte {{key:Enter}}: `DLI` (dĺžková), `DAL` (zarovnaná), `DAN` (uhlová), `DRA` (polomerová), `DDI` (priemerová), `DCO` (pokračovanie), `DBA` (od základne).
- Na úzkej obrazovke je panel nástrojov v jednom riadku: posuňte ho do strany, aby ste sa dostali k {{ui:Popisy}}.

Ak chcete dĺžky zobraziť v milimetroch, centimetroch, metroch alebo kilometroch, pozri [Kóty v mm, cm, m alebo km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Nakreslite niečo na okótovanie

1. Napíšte `PL` a stlačte {{key:Enter}}.
2. Napíšte `0,0` a stlačte {{key:Enter}}.
3. Napíšte `@6000,0` a stlačte {{key:Enter}}.
4. Napíšte `@1500<60` a stlačte {{key:Enter}}.
5. Napíšte `@0,2700` a stlačte {{key:Enter}}.
6. Napíšte `@-6750,0` a stlačte {{key:Enter}}.
7. Napíšte `C` a stlačte {{key:Enter}}. Obrys sa uzavrie.
8. Napíšte `C` a stlačte {{key:Enter}}, aby ste začali kružnicu.
9. Kliknite vnútri miestnosti, ďaleko od stien, pre stred.
10. Napíšte `600` a stlačte {{key:Enter}}. Toto je stĺp.
11. Kliknite na {{ui:Rozsah}}.

## Dĺžková: vodorovná alebo zvislá

1. Napíšte `DLI` a stlačte {{key:Enter}}.
2. Pri `Specify first extension line origin` sa prichyťte k ľavému dolnému rohu (koncový bod) a kliknite.
3. Pri `Specify second extension line origin` sa prichyťte k pravému dolnému rohu a kliknite.
4. Presuňte krížik pod miestnosť. Kóta ho nasleduje, vodorovne.
5. Kliknutím umiestnite kótovaciu čiaru.

História uvedie `Dimension text = 6000`.

Miesto, kam umiestnite čiaru, určuje smer: pod alebo nad dá vodorovnú kótu, vľavo alebo vpravo zvislú. Ak to chcete vynútiť, pred umiestnením napíšte `H` (vodorovne), `V` (zvisle) alebo `R` (otočené, potom uhol).

:::tip
Pri prvej výzve stlačte {{key:Enter}} namiesto výberu bodu a potom kliknite na čiaru, oblúk, kružnicu alebo segment lomenej čiary. CadCraft zoberie za vás oba konce.
:::

## Pokračovanie: reťaz kót

{{cmd:DIMCONTINUE}} ({{ui:Popisy}} › {{ui:Viac}} › {{ui:Pokračujúca kóta}}, alebo `DCO`) pokračuje od poslednej dĺžkovej alebo zarovnanej kóty, ktorú ste vytvorili, pričom každá nová začína tam, kde skončila predchádzajúca.

1. Napíšte `DLI` a stlačte {{key:Enter}}.
2. Napíšte `0,0` a stlačte {{key:Enter}} pre prvý začiatok.
3. Napíšte `2000,0` a stlačte {{key:Enter}} pre druhý začiatok.
4. Kliknutím pod miestnosť ju umiestnite.
5. Napíšte `DCO` a stlačte {{key:Enter}}.
6. Napíšte `4500,0` a stlačte {{key:Enter}}. Druhá kóta nadväzuje na prvú, na tej istej čiare.
7. Prichyťte sa k pravému dolnému rohu a kliknite. Tretia kóta reťaz dokončí.
8. Stlačením {{key:Enter}} ukončite príkaz.

:::note
Tu sú body zapísané ako absolútne súradnice úmyselne. Bod s @ počíta od posledného bodu, ktorý ste zadali, a posledný bod je miesto, kam ste umiestnili predchádzajúcu kótovaciu čiaru, nie koniec kóty. Absolútne body, uchopenia alebo samotná vzdialenosť so zapnutým {{ui:Ortho}} sú v reťazi kót bezpečnejšie.
:::

Napíšte `U` a stlačte {{key:Enter}}, aby ste odobrali poslednú kótu v reťazi bez opustenia príkazu.

## Od základne: kóty zložené z jednej čiary

{{cmd:DIMBASELINE}} ({{ui:Popisy}} › {{ui:Viac}} › {{ui:Kóta od základne}}, alebo `DBA`) meria každú novú kótu od prvého začiatku poslednej kóty a každú ďalšiu umiestňuje o krok ďalej.

1. Napíšte `DLI` a stlačte {{key:Enter}}.
2. Prichyťte sa k ľavému dolnému rohu a kliknite.
3. Prichyťte sa k ľavému hornému rohu a kliknite.
4. Presuňte krížik naľavo od miestnosti a kliknite. Objaví sa zvislá kóta.
5. Napíšte `DBA` a stlačte {{key:Enter}}.
6. Prichyťte sa k hornému koncu steny pod uhlom 60 stupňov (koncový bod) a kliknite. Objaví sa druhá zvislá kóta, o krok ďalej než prvá.
7. Stlačením {{key:Enter}} ukončite.

## Zarovnaná: skutočná dĺžka šikmej čiary

1. Napíšte `DAL` a stlačte {{key:Enter}}.
2. Stlačte {{key:Enter}}, aby ste vybrali objekt.
3. Kliknite na stenu pod uhlom 60 stupňov.
4. Pohnite smerom von a kliknutím umiestnite.

Text zobrazuje 1500: skutočnú dĺžku, meranú pozdĺž steny.

## Polomer a priemer

1. Napíšte `DRA` a stlačte {{key:Enter}}.
2. Kliknite na kružnicu stĺpa.
3. Pohnite krížikom. Vynášacia čiara smeruje zo stredu ku krížiku.
4. Kliknutím umiestnite text.

Text zobrazuje `R600`. {{cmd:DIMDIAMETER}} (`DDI`) robí to isté so značkou ⌀ a priemerom.

## Uhlová

Steny tu sú jedna lomená čiara, takže roh merajte podľa jeho vrcholu. (Medzi dvoma samostatnými čiarami môžete namiesto toho kliknúť na čiary.)

1. Napíšte `DAN` a stlačte {{key:Enter}}.
2. Pri `Select arc, circle or line, or Enter for a vertex` stlačte {{key:Enter}}.
3. Pri `Specify angle vertex` sa prichyťte k pravému dolnému rohu a kliknite.
4. Pri `Specify first angle endpoint` sa prichyťte k ľavému dolnému rohu a kliknite.
5. Pri `Specify second angle endpoint` sa prichyťte k hornému koncu steny pod uhlom 60 stupňov a kliknite.
6. Presuňte krížik do miestnosti, blízko rohu, a kliknite.

Text zobrazuje `120°`, vnútorný uhol rohu. Umiestnená na druhej strane rohu kóta namiesto toho meria uhol na tejto strane. Pri prvej výzve kliknite na oblúk, ak chcete okótovať uhol, ktorý zakrýva, alebo kliknite na dve čiary, ak chcete okótovať uhol medzi nimi.

## Zmena textu

Ak chcete napísať vlastný text, pred umiestnením kóty napíšte `T` a stlačte {{key:Enter}}, potom napíšte text. V texte `<>` znamená nameranú hodnotu: `<> TYP.` dá `6000 TYP.`. Na prázdnom riadku stlačte {{key:Enter}}, aby ste ponechali nameranú hodnotu.

Ak chcete zmeniť existujúcu kótu:

1. Kliknite na ňu.
2. V pravom paneli napíšte do poľa {{ui:Text}}. Ak ho necháte prázdne, zobrazí sa nameraná hodnota.
3. Stlačte {{key:Enter}}.

## Kóty nasledujú geometriu

Kóta si pamätá svoje body. Pretiahnite jeden z jej úchytov alebo ju presuňte, otočte či zmeňte mierku spolu s objektmi, ktoré meria, a znova sa zmeria. Ak natiahnete geometriu bez presunu kóty, kóta nenasleduje: ponechá si vlastné body.

## Časté chyby

- **Text a šípky sú mikroskopické alebo obrovské.** Nastavte celkovú mierku: pozri [Nastavenie veľkostí kót](topic:dimension-settings).
- **"Vyberte bod vnútri uhla, ktorý chcete merať."** Bod, na ktorý ste kliknuli pre uhlovú kótu, leží na jednom z ramien. Presuňte ho do uhla.
- **Pokračovanie začalo od nesprávnej kóty.** Vždy pokračuje od poslednej dĺžkovej alebo zarovnanej kóty vytvorenej v tejto relácii. Najprv vytvorte (alebo znova vytvorte) kótu, od ktorej sa má pokračovať.
- **Kóta vyšla zvislo.** Umiestnili ste ju nabok. Pred umiestnením napíšte `H`.
- **Stopy a palce.** Najprv nastavte formát dĺžky výkresu na {{ui:Architektonický}} alebo {{ui:Formát}} kóty v {{ui:Vlastnosti}}: pozri [Stopy a palce v kótach](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Čísla nie sú v jednotke, akú chcete.** Zvoľte {{ui:Jednotky v texte}}: pozri [Kóty v mm, cm, m alebo km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
