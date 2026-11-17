---
title: Registrácia viacerých skenov do jedného
summary: Umiestnite skeny nasnímané z rôznych pozícií do jedného súradnicového systému pomocou vybraných dvojíc bodov alebo zadaných cieľov, spresnite ich metódou ICP, uložte registráciu ako projekt a exportujte zaregistrované mračno ako LAS alebo E57. Príkaz je REGISTERSCANS.
keywords: registrovať, registrácia, skeny, mračno bodov, icp, iteratívny najbližší bod, ciele, dvojice bodov, tuhá transformácia, zarovnať, zlúčiť, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Čo budete robiť

Niekoľko skenov jedného miesta (každý z vlastnej pozície skenera) začína vo vlastných súradniciach. Zaregistrujte ich: dajte každému skenu jedno umiestnenie, aby všetky boli v jednom súradnicovom systéme, potom to uložte ako projekt a zapíšte zaregistrované mračno do jedného súboru LAS alebo E57.

## Umiestnenie skenov

1. Otvorte dialógové okno (zadajte `REGISTERSCANS` (alebo `REGSCAN`)). {{ui:Pridať skeny…}} načíta súbory LAS, LAZ, E57, PLY, PCD, PTX, PTS alebo XYZ, alebo ich pretiahnite do dialógového okna. Skeny s inými jednotkami sa odmietnu s upozornením: najskôr jeden z nich prevedte.
2. Zvoľte {{ui:Sken na presun}} a {{ui:Umiestniť voči}}. Obrázok zobrazuje každý sken v rámci tak, ako je teraz, každý inou farbou: {{ui:Pôdorys}}, {{ui:Spredu}} alebo {{ui:Zboku}}; ťahaním posúvate, kolieskom myši priblížite.
3. **Podľa dvojíc bodov.** Kliknite na {{ui:Vybrať pár}}, potom na bod na skene, ktorý chcete presunúť, a potom na to isté miesto na inom skene (roh, cieľ, pätu stĺpa). Urobte to aspoň trikrát, s bodmi, ktoré nie sú na jednej priamke a sú od seba dostatočne vzdialené. Kliknite na {{ui:Umiestniť podľa párov}}: sken sa umiestni metódou najmenších štvorcov a **Zostatok** ukáže, o koľko sa každá dvojica stále minie. Dvojica s veľkým číslom je zlý výber: odstráňte ju krížikom a umiestnite znova.
4. **Podľa cieľov.** Ak sú známe súradnice bodu (zamerané ciele), kliknite na {{ui:Vybrať, potom zadať cieľ}}, kliknite na bod na jeho skene a do riadka zadajte X, Y a Z cieľa. Dvojice a zadané ciele sa môžu voľne kombinovať.

## Spresnenie metódou ICP

Dvojice dajú hrubé umiestnenie. {{ui:Spresniť}} posúva sken, kým jeho plochy nedosadnú na plochy druhého skenu: najprv **bod k bodu**, potom **bod k rovine**. Tabuľka uvádza každý krok s jeho chybou a počtom zhodných bodov; čiara nad ňou zobrazuje klesanie chyby. {{ui:Zastaviť}} ukončí beh po prebiehajúcom kroku a ponechá dosiahnutý stav. {{ui:Späť}} vezme späť celý beh (alebo posledné umiestnenie); {{ui:Obnoviť}} vráti sken do súradníc jeho súboru.

Aby to bežalo rýchlo na notebooku, ICP pracuje s časťou bodov ({{ui:Použité body}}, 5 000 až 60 000) a ignoruje zhody vzdialenejšie ako {{ui:Najväčšia vzdialenosť zhody}} (predvolene 5 % veľkosti skenu, s postupným zmenšovaním, keď sa ustáli). Najprv potrebuje hrubé umiestnenie: skeny, ktoré sa sotva prekrývajú, hlásia, že sa nedajú zhodiť. Plochy, ktoré sú len rovné alebo len priame, nedokážu určiť polohu pozdĺž seba samých; v takom prípade pridajte dvojice.

## Uloženie a export

- {{ui:Uložiť projekt}} zapíše malý súbor `.ccscans.json`: názov každého skenu, jeho veľkosť a odtlačok prvých 64 KB spolu s jeho transformáciou. Neobsahuje body. {{ui:Otvoriť projekt…}} nájde súbory skenov podľa týchto odkazov (súbory musia byť najprv pridané) a vráti každú transformáciu späť.
- {{ui:Exportovať LAS}} a {{ui:Exportovať E57}} zapíšu jeden súbor so všetkými skenmi na ich zaregistrovanom mieste. Body v originálnoch sa nikdy neprepisujú; transformácia sa uplatní pri výstupe. Keď je zapnuté {{ui:Načítať každý bod zo súborov}}, každý súbor sa pri každom bode načíta znova (až 20 miliónov na sken); keď je vypnuté, zapíšu sa len body zobrazené v prehliadači.
- {{ui:Zobraziť zaregistrované mračno}} (CadCraft) zapíše LAS a pripojí ho pod výkres na jeho vlastných súradniciach, ako každé iné mračno.

:::note
Nič sa nikam neodosiela. Registrácia pracuje v jednotkách súborov a zachováva milimetre: LAS sa zapíše s mierkou, ktorá sa hodí (až do 0,1 mm), E57 s dvojitou presnosťou. Súradnicový systém sa prenesie do LAS len vtedy, keď každý sken uvádza ten istý kód EPSG. Zapisovač E57 je náš vlastný; overuje sa tým, že jeho súbory sa načítajú späť týmto čítačom a knižnicou libE57Format.
:::
