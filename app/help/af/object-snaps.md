---
title: Vang vas op punte op voorwerpe
summary: Gebruik voorwerpvangpunte, Ortho en die rooster om presiese eindpunte, middelpunte, sentrums en snypunte met die muis te kies.
keywords: osnap, voorwerpvangpunt, eindpunt, midpunt, sentrum, snypunt, loodreg, kwadrant, naaste, knoop, invoegpunt, ortho, rooster, f3, f8, f7, poolopvolging, polêr, polarang, voorwerpvangpuntopvolging, otrack, opvolging, f10, f11
from: 3cf17f94
---

## Wat jy gaan maak

'n Reghoek met sy twee diagonale, 'n sirkel gesentreer waar hulle kruis, en 'n lyn van die middel van een sy-kant na die sirkel. Elke punt word met die muis gekies, en elke punt is presies.

## Hoe vasvang werk

Terwyl 'n opdrag 'n punt vra, soek CadCraft na vangpunte binne ongeveer 10 pixels van die kruisdraad. Wanneer dit een vind, verskyn 'n merker en 'n etiket ("Eindpunt", "Snypunt"), en 'n klik land **presies** op daardie punt, nie waar die kruisdraad is nie.

Vasvang is aan wanneer {{ui:Vasvang}} in die statusbalk ingedruk is. {{key:F3}} skakel dit aan en af.

Die vangpunte wat jy kan gebruik, is:

| Vangpunt | Land op |
|---|---|
| Eindpunt | Die einde van lyne, boë en polilynsegmente |
| Midpunt | Die middel van lyne, boë en polilynsegmente |
| Sentrum | Die sentrum van sirkels en boë, en van polilyn-boogsegmente |
| Kwadrant | Die 0-, 90-, 180- en 270-grade punte van sirkels en boë |
| Snypunt | Waar twee voorwerpe kruis |
| Loodreg | Die punt op 'n voorwerp reghoekig tot die laaste punt (benodig 'n basispunt) |
| Raaklyn | Die punt op 'n sirkel of boog waar 'n lyn vanaf die laaste punt dit net raak. Met geen laaste punt nog nie ('n lyn se eerste punt), sê die merker "uitgestel": die raakpunt word bereken sodra die volgende punt bekend is, so 'n lyn van Raaklyn na Raaklyn raak albei sirkels |
| Naaste | Die naaste punt op enige voorwerp |
| Knoop | Puntvoorwerpe |
| Invoegpunt | Die invoegpunt van teks en blokverwysings |

Almal is standaard aan behalwe Raaklyn en Naaste. Naaste wen dikwels wanneer jy iets anders wil hê; skakel Raaklyn aan wanneer jy dit nodig het.

## Kies jou vangpunte

1. Klik die klein pyltjie langs {{ui:Vasvang}} in die statusbalk. Die lys {{ui:Voorwerpvangpunte}} oopmaak.
2. Merk of ontmerk vangpunte. Veranderinge geld dadelik.
3. Klik die pyltjie weer om die lys te sluit.

CadCraft onthou jou keuse, en die instellings {{ui:Rooster}}, {{ui:Ortho}} en {{ui:Vasvang}}, in hierdie blaaier.

## Stappe

1. Tik `REC` en druk {{key:Enter}}.
2. Tik `0,0` en druk {{key:Enter}}.
3. Tik `@4000,3000` en druk {{key:Enter}}. 'n Reghoek verskyn.
4. Klik {{ui:Omvang}}.
5. Tik `L` en druk {{key:Enter}}.
6. Beweeg die kruisdraad na die linkeronderhoek. Die merker wys "Eindpunt". Klik.
7. Beweeg na die regterbovehoek totdat "Eindpunt" wys. Klik.
8. Druk {{key:Enter}} om die lyn te beëindig.
9. Druk {{key:Enter}} weer om {{cmd:LINE}} te herhaal, en trek die ander diagonaal van die regteronderhoek na die linkerbovehoek op dieselfde manier.
10. Tik `C` en druk {{key:Enter}} om 'n sirkel te begin.
11. Beweeg die kruisdraad na waar die diagonale kruis. Die merker wys "Snypunt". Klik.
12. Tik `800` en druk {{key:Enter}}.

Jy behoort 'n sirkel te sien wat presies op die kruising gesentreer is.

13. Tik `L` en druk {{key:Enter}}.
14. Beweeg na die middel van die linkersy van die reghoek totdat "Midpunt" wys. Klik.
15. Beweeg die kruisdraad op die sirkel, op sy linkerkant. Die merker wys "Loodreg" of "Kwadrant"; albei is hier dieselfde punt. Klik.
16. Druk {{key:Enter}}.

Die nuwe lyn loop vanaf die middel van die linkersy en stop presies op die sirkel.

## Slaan 'n vangpunt oor vir een klik

Hou {{key:Shift}} vas terwyl jy klik. Voorwerpvangpunte word vir daardie klik geïgnoreer, en die punt gaan presies waar die kruisdraad is (of langs die Ortho-rigting, as Ortho aan is).

## Ortho

{{ui:Ortho}} ({{key:F8}}) hou die volgende punt reguit oor of reguit op en af vanaf die basispunt. Dit geld vir klikke en vir direkte afstandinvoer ('n kaal getal wat by die prompt getik word). Voorwerpvangpunte wen oor Ortho: as 'n vangmerker wys, gaan die klik na die vangpunt.

## Poolopvolging

{{ui:Polêr}} ({{key:F10}}) is Ortho by meer hoeke. Terwyl 'n opdrag 'n basispunt het (die laaste punt van 'n lyn, of 'n skuif se basispunt), lyn die wyser op wanneer dit naby 'n straal daarvandaan kom by 'n veelvoud van die poolstap: 'n stippellyn wys, en 'n etiket by die kruisdraad lees `Polar: 1200 < 30°`. Klik om daardie punt te gebruik, of tik 'n afstand: `1200` gaan presies 1200 langs die straal.

Die stap is 90° totdat jy dit verander: tik {{cmd:POLARANG}}, druk {{key:Enter}}, en tik `30` (of 45, 22.5, 15 …). Polêr en Ortho sluit mekaar uit: as een aangeskakel word, skakel die ander af.

## Voorwerpvangpunt-opvolging

{{ui:Spoor}} ({{key:F11}}) lyn die wyser op met vangpunte waarop jy gerus het, sodat jy 'n punt op dieselfde vlak as een hoek en bo 'n ander kan kies sonder om hulplyne te teken.

1. Skakel {{ui:Vasvang}} en {{ui:Spoor}} aan, en begin 'n opdrag wat 'n punt vra (`L`).
2. Rus die wyser op 'n vangpunt, soos 'n hoek, vir 'n halwe sekonde, sonder om te klik. 'n Klein kruis merk dit: dit is verkry. Rus weer op dit om dit te laat val.
3. Beweeg die wyser reguit daarvandaan weg, horisontaal of vertikaal. 'n Stippellyn volg die wyser en die etiket lees `Track: 600 < 90°`. Klik, of tik 'n afstand.
4. Verkry 'n tweede punt, en beweeg na waar die vertikale deur die een en die horisontale deur die ander kruis: die wyser vang vas by daardie kruising (`Track: where two lines meet`).

Met {{ui:Polêr}} ook aan, volg verkrygde punte by elke poolhoek. Tot sewe punte word behou, totdat die opdrag eindig. {{key:Shift}} skakel opvolging vir een klik af, soos vangpunte.

## Rooster

{{ui:Rooster}} ({{key:F7}}) wys 'n rooster van lyne agter die tekening, met swaarder lyne elke vyfde lyn; die afstand verander soos jy zoem. Dit is net 'n gids totdat jy {{ui:Rooster-vaslegging}} ({{key:F9}}) aanskakel: dan land klikke op die naaste roosterpunt, tensy 'n voorwerpvangpunt die punt eerste neem.

## Funksiesleutels op jou rekenaar

{{key:F9}} is Rooster-vaslegging, {{key:F10}} is Polêr en {{key:F11}} is Spoor.

:::mac
Op 'n Mac beheer F3, F7, F8 en F9 gewoonlik Mission Control en media. Hou **fn** met die sleutel vas, of skakel standaard funksiesleutels aan, soos beskryf in [Sleutels, muise en raakpanele](common:keys). Die statusbalkknoppies werk altyd.
:::

:::firefox
In Firefox is F7 ook die sleutel vir bladerpuntnavigasie. As Firefox vra of bladerpuntnavigasie aangeskakel moet word, kies **Nee**. Gebruik die knoppie {{ui:Rooster}} as die vraag aanhou terugkom.
:::

:::touch
Op 'n raakskerm is daar geen sweef nie, so die vangmerker verskyn net waar jou vinger raak. Zoem na binne vir klein teikens, of tik koördinate.
:::

## Algemene foute

- **Die klik het na die verkeerde punt gegaan.** Kyk na die merkeretiket voordat jy klik: Eindpunt wen oor Midpunt as albei naby is. Zoem in, of ontmerk vangpunte wat jy nie nodig het nie.
- **Geen merker verskyn nie.** {{ui:Vasvang}} is af, of die vangpunt wat jy wil hê is ontmerk, of die voorwerp is op 'n laag wat af of bevries is.
- **Vangpunte gryp die verkeerde ding in 'n besige tekening.** Zoem in. Die vangafstand word in skermpixels gemeet, so inzoem maak dit kleiner op die tekening.
- **Verwag dat Shift 'n reguit lyn gee.** In CadCraft skakel Shift vangpunte vir een klik af. Gebruik {{ui:Ortho}} vir reguit lyne.
- **Verwag dat punte op roosterpunte land.** Skakel {{ui:Rooster-vaslegging}} aan ({{key:F9}}), of tik koördinate vir ronde getalle.
