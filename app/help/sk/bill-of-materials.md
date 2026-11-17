---
title: Kusovníky podľa zón
summary: Označte oblasti výkresu ako zóny a umiestnite tabuľku pre každú z nich, ktorá počíta bloky vnútri nej. Tabuľky sledujú výkres počas vašej práce a vy vyberiete, ktoré stĺpce každá zobrazuje.
keywords: kusovník, BOM, zoznam súčastí, rozpis, zóna, oblasť, tabuľka, počet, atribút, stĺpce, číslo položky, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

**Zóna** je pomenovaná oblasť výkresu. **Tabuľka kusovníka** vypisuje, čo leží vnútri jednej zóny alebo vo celom výkrese: každý blok s jeho množstvom a hodnotami atribútov. Výkres môže mať toľko zón a tabuliek, koľko potrebujete, a jedna zóna môže mať niekoľko tabuliek s rôznymi stĺpcami.

Nástroje sú na karte Bloky pod {{ui:Kusovník}}, v ponuke {{ui:Viac}} skupiny Bloky, a dajú sa napísať.

## Vytvorenie zóny

Napíšte {{cmd:BOMZONE}} a buď:

- kliknite na dva protiľahlé rohy pre obdĺžnik,
- vyberte {{ui:Mnohouholník}}, kliknite na každý roh a stlačte Enter na uzavretie, alebo
- vyberte {{ui:Objekt}} a potom uzavretú polyline, kružnicu, elipsu alebo uzavretú spline. Jej obrys sa skopíruje; objekt zostane, ako je.

Potom napíšte názov zóny. Zóna sa kreslí ako prerušovaný obrys s názvom nad ľavým horným rohom, na hladine `BOM-ZONES`, ktorá sa nevykresľuje. Ak chcete zóny na papieri, zapnite vykresľovanie pre túto hladinu.

Zóna je obyčajná uzavretá polyline: presúvajte ju, naťahujte alebo ťahajte jej úchyty a jej názov sa pohne spolu s ňou. Na premenovanie zóny upravte text názvu alebo použite {{cmd:BOMZONE}} a {{ui:Premenovať}}. {{ui:Zóny}} vypisuje každú zónu a koľko tabuliek má.

## Umiestnenie tabuľky

Napíšte {{cmd:BOMTABLE}} (alebo {{cmd:BOM}}), vyberte obrys zóny alebo jej názov, zadajte výšku textu a kliknite, kam má ísť ľavý horný roh tabuľky. Stlačte {{key:Enter}} namiesto výberu zóny, alebo vyberte {{ui:Celé}}, pre tabuľku celého výkresu.

Nová tabuľka zobrazuje číslo položky, množstvo, názov bloku a stĺpec pre každý atribút, ktorý blok nesie (prvých šesť; ostatné sa ponúknu neoznačené). Bloky s rovnakým názvom a rovnakými hodnotami atribútov zdieľajú jeden riadok.

## Čo sa počíta ako vnútri

- Blok sa počíta do zóny, ktorá obsahuje jeho **vkladací bod**.
- Čiara, oblúk, kružnica, polylinia, elipsa, spline alebo šrafovanie sa počítajú **celé** do zóny, ktorá obsahuje stred jeho rozsahu (pri čiare jej stred). Jej dĺžka sa na okraji zóny neorezáva.
- Bod presne na hrane je vnútri.
- Zóny sa môžu prekrývať. Každá zóna počíta sama za seba, takže objekt v prekrytí je v oboch tabuľkách.

## Tabuľky sledujú výkres

Keď pridáte, presuniete, skopírujete alebo zmažete blok, upravíte atribút, alebo zmeníte tvar či pohnete zónou, každá tabuľka sa prekreslí v tom istom kroku. Krok späť vráti späť vašu úpravu aj zmenu tabuľky spolu.

Ak chcete, aby tabuľka prestala sledovať, zaškrtnite {{ui:Zmrazené}} v jej nastaveniach. Zmrazená tabuľka sa mení len vtedy, keď upravíte jej nastavenia alebo napíšete {{cmd:BOMUPDATE}}, ktorý aktualizuje každú tabuľku hneď.

## Výber stĺpcov

Vyberte tabuľku a napíšte {{cmd:BOMEDIT}}. V dialógu:

- **Stĺpce**: zaškrtnite tie, ktoré chcete zobraziť (položka, množstvo, názov, hladina, dĺžka, plocha, poznámky a každý atribút), napíšte vlastný nadpis pre ktorýkoľvek z nich a posúvajte ich nahor alebo nadol.
- {{ui:Zoskupiť riadky podľa}}: názov bloku a hodnoty atribútov, iba názov bloku, hladina alebo jeden atribút. V zlúčenom riadku je hodnota, ktorá sa medzi blokmi líši, zobrazená ako „rôzne“.
- {{ui:Zoradiť podľa}} ľubovoľného stĺpca, vzostupne alebo zostupne.
- {{ui:Názov}}, {{ui:Zobraziť názov}} a {{ui:Riadok súčtov}}.
- {{ui:Počítať čiary podľa hladiny}} pridá jeden riadok na hladinu s počtom objektov, ich celkovou dĺžkou a pri uzavretých tvaroch aj celkovou plochou, v jednotkách výkresu.
- **Poznámky**: zaškrtnite stĺpec Poznámky a potom napíšte poznámku pre ľubovoľný riadok v tabuľke v dolnej časti dialógu.

Každá tabuľka si ponecháva vlastné voľby.

## Čísla položiek

Riadok si ponechá svoje číslo položky, pokiaľ je v tabuľke. Nový riadok dostane ďalšie voľné číslo a číslo, ktoré bolo pridelené, sa už nepoužije, takže bubliny a poznámky, ktoré citujú číslo, zostanú správne. {{ui:Prečíslovať položky}} ich očísluje od 1 v zobrazenom poradí.

Riadok je známy podľa toho, čo zoskupuje: zmeňte, ako sa riadky zoskupujú, alebo zmeňte hodnotu atribútu, ktorú zoskupenie používa, a riadok sa počíta ako nový.

## Export a iné programy

{{cmd:BOMEXPORT}}, alebo {{ui:Exportovať CSV}} v dialógu, uloží tabuľku ako súbor .csv pre tabuľkový procesor.

V súbore DWG alebo DXF je tabuľka obyčajný blok čiar a textu, takže ho ostatné programy zobrazia a vykreslia tak, ako je nakreslený. Nie je to tam objekt tabuľky a v iných programoch sa neaktualizuje. Prepojenie na jej zónu sa uchováva v súbore ako rozširujúce údaje, ktoré CadCraft číta späť, takže tabuľka je znova živá, keď výkres znova otvoríte v CadCraft. R12 DXF výkresu bez listu neuchováva nastavenie „nevykresľuje sa“ pre hladinu zóny.

Rozložením tabuľky sa zmení na voľné čiary a text a ukončí sa prepojenie.
