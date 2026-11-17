---
title: Zistite, v akých jednotkách je výkres
summary: Zistite, či je otvorený výkres v milimetroch, palcoch alebo inak, overte to meraním a zistite, prečo iný program môže pri tom istom DXF uviesť iné jednotky.
keywords: jednotky, aké jednotky, ktoré jednotky, kontrola jednotiek, milimetre, mm, palce, metrické, imperiálne, jednotky DXF, STEP do DXF, nesprávne jednotky, palce alebo mm, INSUNITS, MEASUREMENT, jednotky výkresu, DXF z PartCraft
from: c0ee75bb
---

## Čo urobíte

Zistíte, čo znamená jedna jednotka v otvorenom výkrese, a overíte, že čísla, ktoré čítate, zodpovedajú veľkosti, akú očakávate.

## Postup

1. Otvorte výkres a potom stlačte {{key:Esc}}, aby nič nebolo vybraté, na karte {{ui:Model}}.
2. V pravom paneli, pod {{ui:Aktuálne nastavenia}}, prečítajte {{ui:Jednotky}}. Ukazuje, čo znamená jedna jednotka výkresu: {{ui:Milimetre}}, {{ui:Palce}}, {{ui:Stopy}} a podobne. DXF uložené z PartCraft uvádza {{ui:Milimetre}}.
3. Overte to meraním niečoho, koho veľkosť poznáte. Napíšte {{cmd:DIST}} a vyberte dva konce hrany alebo otvoru. Ak diel, ktorý poznáte, má 25 mm a zobrazí `25`, výkres je v milimetroch; ak zobrazí približne `0.98`, je v palcoch.

{{ui:Bez jednotiek}} znamená, že súbor to neuvádza. CadCraft potom berie ako jednotku papiera (milimetre na papieri ISO, palce na papieri US) a čísla sú presné len toľko, nakoľko presný je program, ktorý ich zapísal.

## Ak sú jednotky nesprávne

Zmena {{ui:Jednotky}} **nič nezmení na veľkosti**: čísla zostanú rovnaké a mení sa len to, čo znamenajú. Preto ju nastavte len vtedy, keď ňou vyjadrujete, čo výkres naozaj je. Ak sú čísla v milimetroch a {{ui:Jednotky}} uvádza {{ui:Palce}}, vyberte {{ui:Milimetre}}. Ak potrebujete samotnú geometriu v iných jednotkách, zmeňte jej mierku príkazom {{cmd:SCALE}} (25.4 z palcov na milimetre, 1/25.4 opačným smerom) a potom nastavte {{ui:Jednotky}}.

Spôsob zápisu dĺžok (desatinné čísla, stopy a palce, zlomky) je samostatné nastavenie, {{ui:Formát dĺžky}}: pozrite [Jednotky, formáty papiera a mierky](topic:units-papers-scales).

## Prečo iný program môže uvádzať palce

DXF uvádza svoje jednotky v hlavičke. Najstarší typ DXF, R12, nemal vôbec premennú jednotiek, takže program, ktorý číta R12 prísne, ignoruje hodnotu, ktorá tam je, a použije vlastnú predvolenú, ktorá je často palce. Geometria v súbore je v oboch prípadoch rovnaká; líši sa len označenie. PartCraft zapisuje svoje DXF súbory ako R12 a uvádza milimetre dvoma spôsobmi (`$INSUNITS` 4 a `$MEASUREMENT` 1), aby ich viac programov čítalo správne. Ak program stále uvádza palce, pri otvorení súboru nastavte jeho jednotky na milimetre.

Ak súbor vkladáte do výkresu (nie ho otvárate), jeho jednotky sa prepočítajú: pozrite [Jednotky pri importe](topic:units-on-import).
