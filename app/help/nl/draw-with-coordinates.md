---
title: Tekenen met coördinaten
summary: Teken een exacte vloeromtrek door absolute, relatieve en polaire coördinaten te typen, en door directe afstandsinvoer.
keywords: lijn, pline, polylijn, coördinaten, relatief, polair, absoluut, directe afstand, @, punten typen, exact, ortho
from: 19e82350
---

## Wat u gaat maken

De omtrek van een L-vormige kamer, 6000 bij 4500 met een inham van 2000 bij 1500, exact getekend, plus een wand onder 30 graden. U gebruikt alle vier de manieren om een punt te typen. Werk in millimeters: één tekeneenheid staat voor één millimeter.

Het snelle overzicht van elk formaat staat in [Coördinaten- en afstandsinvoer](topic:coordinate-entry).

## Voordat u begint

1. Open CadCraft. Als er al een tekening open is, klikt u eerst op {{ui:Nieuw}}.
2. Druk op {{key:Esc}} zodat niets geselecteerd is. Het rechterpaneel toont {{ui:Huidige instellingen}}.
3. Stel {{ui:Eenheden}} in op {{ui:Millimeter}}. Er wordt niets geschaald; dit vertelt alleen aan bladen en plots wat één eenheid betekent.

## Absolute coördinaten: het eerste punt

Een absolute coördinaat is een positie gemeten vanaf de oorsprong, getypt als `x,y`.

1. Typ `L` en druk op {{key:Enter}}. De prompt luidt `Specify first point:`.
2. Typ `0,0` en druk op {{key:Enter}}.

De lijn rekt nu mee van de oorsprong naar het kruishaar. De coördinaten in de statusbalk tonen de afstand en hoek vanaf het startpunt terwijl u beweegt.

## Relatieve coördinaten: @dx,dy

Een relatieve coördinaat typt u als `@dx,dy`: zoveel horizontaal, zoveel verticaal, vanaf het laatste punt. Negatieve getallen gaan naar links of omlaag.

3. Typ `@6000,0` en druk op {{key:Enter}}. Een lijn van 6000 loopt naar rechts.
4. Typ `@0,3000` en druk op {{key:Enter}}.
5. Typ `@-2000,0` en druk op {{key:Enter}}.
6. Typ `@0,1500` en druk op {{key:Enter}}.

U ziet vier aaneengesloten lijnen die langs de rechterkant van de kamer omhoog lopen.

## Directe afstandsinvoer: een los getal

Wanneer u één getal typt, gaat CadCraft die afstand in de richting van het kruishaar. Zet Ortho aan zodat de richting horizontaal of verticaal wordt vastgelegd.

7. Druk op {{key:F8}}, of klik op {{ui:Ortho}} in de statusbalk. De statusbalk zegt "Ortho aan".
8. Beweeg het kruishaar naar links van het laatste punt. De meelopende lijn blijft horizontaal.
9. Typ `4000` en druk op {{key:Enter}}. De lijn gaat 4000 naar links.
10. Beweeg het kruishaar onder het laatste punt.
11. Typ `4500` en druk op {{key:Enter}}. U bent terug bij het startpunt.
12. Druk op {{key:Enter}} op de lege prompt om de opdracht te beëindigen.

:::mac
F8 kan op een Mac-toetsenbord het afspelen van media regelen. Houd **fn** ingedrukt en druk op F8, of klik op {{ui:Ortho}}. Zie [Toetsen, muizen en trackpads](common:keys).
:::

U heeft nu een gesloten, L-vormige omtrek van zes afzonderlijke lijnen.

13. Klik op {{ui:Alles tonen}} om alles te zien.

## Poolcoördinaten: @afstand<hoek

Een poolcoördinaat typt u als `@afstand<hoek`. Hoeken zijn in graden, gemeten tegen de klok in vanaf de positieve X-richting: 0 is rechts, 90 is omhoog, 180 is links, 270 (of -90) is omlaag.

14. Typ `L` en druk op {{key:Enter}}.
15. Typ `6000,0` en druk op {{key:Enter}} om te beginnen bij de rechter onderhoek.
16. Typ `@2500<-30` en druk op {{key:Enter}}. Een lijn van 2500 vertrekt vanuit de hoek, omlaag en naar rechts, onder 30 graden onder de horizontale.
17. Druk op {{key:Enter}} om de opdracht te beëindigen.

Een poolcoördinaat zonder `@`, zoals `2500<30`, wordt gemeten vanaf de oorsprong in plaats van vanaf het laatste punt.

## Dezelfde omtrek als één polylijn

Zes afzonderlijke lijnen zijn voor veel werk prima, maar een polylijn is één object: hij wordt als geheel verschoven, gemeten en geselecteerd. Gebruik {{cmd:PLINE}} met dezelfde invoer.

1. Typ `PL` en druk op {{key:Enter}}.
2. Typ `0,-6000` en druk op {{key:Enter}} om onder de eerste omtrek te beginnen.
3. Typ `@6000,0`, en druk daarna op {{key:Enter}}.
4. Typ `@0,3000`, en druk daarna op {{key:Enter}}.
5. Typ `@-2000,0`, en druk daarna op {{key:Enter}}.
6. Typ `@0,1500`, en druk daarna op {{key:Enter}}.
7. Typ `@-4000,0`, en druk daarna op {{key:Enter}}.
8. Typ `C` en druk op {{key:Enter}}. De polylijn sluit en de opdracht eindigt.
9. Klik op de nieuwe omtrek. Het rechterpaneel toont "Polylijn", de {{ui:Hoekpunten}}, de {{ui:Lengte}} en, omdat hij gesloten is, de {{ui:Oppervlakte}}.

De oppervlakte moet 24000000 tonen (mm², wat 24 m² is).

## Opties tijdens het tekenen

- In {{cmd:LINE}} en {{cmd:PLINE}} typt u `U` en drukt u op {{key:Enter}} om het laatste segment terug te nemen zonder de opdracht te verlaten.
- In {{cmd:LINE}} sluit `C` terug naar het eerste punt zodra er minstens twee segmenten zijn.
- In {{cmd:PLINE}} schakelt `A` over naar boogsegmenten (elke boog loopt glad door vanaf het vorige segment), en `L` schakelt terug naar lijnen. In de boogmodus is de sluitoptie `CL`.
- Druk op {{key:Enter}} bij `Specify first point:` in {{cmd:LINE}} om te beginnen vanaf het laatste punt dat u gaf, zodat u verdergaat waar u gestopt was.

## Veelvoorkomende fouten

- **`6000,0` typen terwijl u `@6000,0` bedoelde.** Zonder `@` wordt het punt gemeten vanaf de oorsprong, niet vanaf het laatste punt, dus de lijn schiet naar een onverwachte plek. In CadCraft is `x,y` altijd absoluut. Typ `U` en druk op {{key:Enter}} om het terug te nemen.
- **Een komma als decimaalteken.** Decimalen gebruiken een punt: `1250.5`. Een komma scheidt altijd X van Y.
- **De directe afstand ging de verkeerde kant op.** Een los getal volgt het kruishaar. Beweeg het kruishaar naar de kant waar u heen wilt voordat u op {{key:Enter}} drukt, en zet {{ui:Ortho}} aan voor rechte lijnen.
- **"Point or option keyword required."** CadCraft begreep niet wat u typte. Controleer op spaties in het getal of een ontbrekende komma, en typ het opnieuw.
- **Voet en inch.** CadCraft leest alleen gewone getallen. Typ `150` voor 12'-6" in een inch-tekening, of `12.5` in een voettekening.
