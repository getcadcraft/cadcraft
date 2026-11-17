---
title: Teken met koördinate
summary: Teken 'n presiese vloerontwerp deur absolute, relatiewe en polêre koördinate te tik, en deur direkte afstandinvoer.
keywords: lyn, pline, polilyn, koördinate, relatief, polêr, absoluut, direkte afstand, @, punte tik, presies, ortho
from: 19e82350
---

## Wat jy gaan maak

Die omtrek van 'n L-vormige kamer, 6000 by 4500 met 'n 2000 by 1500 inkeping, presies geteken, plus 'n muur teen 30 grade. Jy gebruik al vier maniere om 'n punt te tik. Werk in millimeter: een tekeneenheid staan vir een millimeter.

Die vinnige verwysing vir elke formaat is in [Koördinaat- en afstandinvoer](topic:coordinate-entry).

## Voor jy begin

1. Maak CadCraft oop. As 'n tekening oop is, klik eers op {{ui:Nuut}}.
2. Druk {{key:Esc}} sodat niks gekies is nie. Die regterpaneel lees {{ui:Huidige instellings}}.
3. Stel {{ui:Eenhede}} op {{ui:Millimeter}}. Niks word verander nie; dit sê net vir blaaie en drukke wat 'n eenheid beteken.

## Absolute koördinate: die eerste punt

'n Absolute koördinaat is 'n posisie gemeet vanaf die oorsprong, getik as `x,y`.

1. Tik `L` en druk {{key:Enter}}. Die prompt lees `Specify first point:`.
2. Tik `0,0` en druk {{key:Enter}}.

Die lyn trek nou van die oorsprong na die kruisdraad. Die koördinate in die statusbalk wys die afstand en hoek vanaf die beginpunt soos jy beweeg.

## Relatiewe koördinate: @dx,dy

'n Relatiewe koördinaat word getik as `@dx,dy`: so ver oor, so ver op, vanaf die laaste punt. Negatiewe getalle gaan links of af.

3. Tik `@6000,0` en druk {{key:Enter}}. 'n Lyn van 6000 loop na regs.
4. Tik `@0,3000` en druk {{key:Enter}}.
5. Tik `@-2000,0` en druk {{key:Enter}}.
6. Tik `@0,1500` en druk {{key:Enter}}.

Jy behoort vier aaneengeskakelde lyne te sien wat teen die regterkant van die kamer opklim.

## Direkte afstandinvoer: 'n kaal getal

Wanneer jy 'n enkele getal tik, gaan CadCraft daardie afstand in die rigting van die kruisdraad. Skakel Ortho aan sodat die rigting na horisontaal of vertikaal vasvang.

7. Druk {{key:F8}}, of klik {{ui:Ortho}} in die statusbalk. Die statusbalk sê "Ortho on".
8. Beweeg die kruisdraad links van die laaste punt. Die rekkoord bly horisontaal.
9. Tik `4000` en druk {{key:Enter}}. Die lyn gaan 4000 na links.
10. Beweeg die kruisdraad onder die laaste punt.
11. Tik `4500` en druk {{key:Enter}}. Jy is terug by die beginpunt.
12. Druk {{key:Enter}} op die leë prompt om die opdrag te beëindig.

:::mac
F8 kan mediabeheer op 'n Mac-sleutelbord beheer. Hou **fn** vas en druk F8, of klik {{ui:Ortho}}. Sien [Sleutels, muise en raakpanele](common:keys).
:::

Jy het nou 'n geslote L-vormige omtrek wat uit ses aparte lyne bestaan.

13. Klik {{ui:Omvang}} om alles te sien.

## Polêre koördinate: @afstand<hoek

'n Polêre koördinaat word getik as `@afstand<hoek`. Hoeke is in grade, gemeet teen die wysers van die horlosie in vanaf die positiewe X-rigting: 0 is regs, 90 is op, 180 is links, 270 (of -90) is af.

14. Tik `L` en druk {{key:Enter}}.
15. Tik `6000,0` en druk {{key:Enter}} om by die onderregterhoek te begin.
16. Tik `@2500<-30` en druk {{key:Enter}}. 'n Lyn van 2500 vertrek vanaf die hoek, na onder en regs teen 30 grade onder horisontaal.
17. Druk {{key:Enter}} om die opdrag te beëindig.

'n Polêre koördinaat sonder `@`, soos `2500<30`, word vanaf die oorsprong gemeet in plaas van vanaf die laaste punt.

## Dieselfde omtrek as een polilyn

Ses aparte lyne is goed vir baie werk, maar 'n polilyn is een voorwerp: dit kan as geheel verskuif, gemeet en gekies word. Gebruik {{cmd:PLINE}} met dieselfde invoer.

1. Tik `PL` en druk {{key:Enter}}.
2. Tik `0,-6000` en druk {{key:Enter}} om onder die eerste omtrek te begin.
3. Tik `@6000,0`, en druk dan {{key:Enter}}.
4. Tik `@0,3000`, en druk dan {{key:Enter}}.
5. Tik `@-2000,0`, en druk dan {{key:Enter}}.
6. Tik `@0,1500`, en druk dan {{key:Enter}}.
7. Tik `@-4000,0`, en druk dan {{key:Enter}}.
8. Tik `C` en druk {{key:Enter}}. Die polilyn sluit en die opdrag eindig.
9. Klik op die nuwe omtrek. Die regterpaneel wys "Polyline", sy {{ui:Hoekpunte}}, {{ui:Lengte}} en, omdat dit gesluit is, sy {{ui:Oppervlakte}}.

Die oppervlakte behoort 24000000 te wys (vierkante millimeter, wat 24 vierkante meter is).

## Opsies tydens tekening

- In {{cmd:LINE}} en {{cmd:PLINE}}, tik `U` en druk {{key:Enter}} om die laaste segment terug te neem sonder om die opdrag te verlaat.
- In {{cmd:LINE}}, `C` sluit terug na die eerste punt sodra daar minstens twee segmente is.
- In {{cmd:PLINE}}, `A` skakel oor na boogsegmente (elke boog gaan glad voort vanaf die segment voor dit), en `L` skakel terug na lyne. In boogmodus is die sluitopsie `CL`.
- Druk {{key:Enter}} by `Specify first point:` in {{cmd:LINE}} om vanaf die laaste punt wat jy gegee het te begin, sodat jy kan voortgaan waar jy opgehou het.

## Algemene foute

- **Tik `6000,0` as jy `@6000,0` bedoel het.** Sonder `@` word die punt vanaf die oorsprong gemeet, nie vanaf die laaste punt nie, so die lyn skiet na 'n onverwagte plek. In CadCraft is `x,y` altyd absoluut. Druk `U` en {{key:Enter}} om dit terug te neem.
- **'n Komma getik as 'n desimale punt.** Desimale gebruik 'n punt: `1250.5`. 'n Komma skei altyd X van Y.
- **Die direkte afstand het die verkeerde kant toe gegaan.** 'n Kaal getal volg die kruisdraad. Beweeg die kruisdraad na die kant waarheen jy wil hê voordat jy {{key:Enter}} druk, en skakel {{ui:Ortho}} aan vir reguit lyne.
- **"Point or option keyword required."** CadCraft het nie verstaan wat jy getik het nie. Kyk na spasies binne die getal of 'n ontbrekende komma, en tik dit weer.
- **Voet en duim.** CadCraft lees net gewone getalle. Tik `150` vir 12'-6" in 'n duimtekening, of `12.5` in 'n voettekening.
