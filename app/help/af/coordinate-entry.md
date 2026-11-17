---
title: Koördinaat- en afstandinvoer
summary: Elke manier om 'n punt, 'n afstand, 'n hoek of 'n getal op die CadCraft-opdragreël in te tik, met voorbeelde.
keywords: dinamiese invoer, dyn, f12, tab, koördinate, absoluut, relatief, poolkoördinaat, @, direkte afstand, hoek, grade, laaste punt, lastpoint, punte intik, invoer, rekenkunde, berekening, sakrekenaar, cal, plus, breuk, uitdrukking
from: 7de9252d
---

## Punte

Wanneer die opdrag 'n punt vra, tik een van hierdie in en druk {{key:Enter}}:

| Jy tik | Betekenis | Voorbeeld |
|---|---|---|
| `x,y` | Absoluut: gemeet vanaf die oorsprong 0,0 | `2500,1200` |
| `#x,y` | Ook absoluut (aanvaar uit gewoonte) | `#2500,1200` |
| `@dx,dy` | Relatief: dwars en op vanaf die laaste punt | `@600,0` |
| `@d<a` | Relatiewe pool: afstand en hoek vanaf die laaste punt | `@1500<45` |
| `d<a` | Absolute pool: afstand en hoek vanaf die oorsprong | `3000<90` |
| 'n enkele getal | Direkte afstand: so ver vanaf die basispunt, na die kruisdraad toe | `1200` |
| `*x,y`, `@*dx,dy` | Wêreldkoördinate terwyl 'n UCS ingestel is | `*0,0` |

Met 'n UCS ingestel ({{cmd:UCS}}) word `x,y`, `@dx,dy` en die hoek in `d<a` langs die UCS-asse gemeet. Sien [Draai die aansig en gebruik jou eie koördinate](topic:ucs-and-turned-view).

Of klik in die tekening; voorwerpvangste en Ortho geld vir klikke.

Reëls:

- 'n Komma skei X van Y. Desimale gebruik 'n punt: `1250.75,300`.
- Negatiewe waardes gaan links en af: `@-600,0`.
- Moenie spasies intik nie: {{key:Space}} stuur die lyn, soos {{key:Enter}}.
- Getalle kan eksponente gebruik: `1e3` is 1000.
- Geen eenhede word getik nie, en geen voet-en-duim-notasie nie. Tik gewone getalle in tekeningeenhede.

## Die laaste punt

`@` tel vanaf die **laaste punt wat jy by enige puntvraag gegee het**, in enige opdrag: 'n klik, 'n vangs of 'n getikte punt. Dit word tussen opdragte onthou, sodat jy 'n nuwe lyn `@0,500` weg van waar die vorige geëindig het, kan begin. Voordat jy enige punt gegee het, tel `@` vanaf 0,0.

Sommige plekke waar dit saak maak:

- In {{cmd:COPY}}, na die eerste kopie is die laaste punt daardie kopie se punt. `@600,0` twee keer plaas kopieë 600 en 1200 vanaf die oorspronklike.
- Nadat jy 'n maat geplaas het, is die laaste punt waar jy die maatlyn geplaas het, nie die maat se einde nie.

As jy twyfel, gebruik 'n absoluute punt, 'n vangs of 'n direkte afstand.

## Direkte afstandinvoer

'n Kaal getal is 'n afstand vanaf die opdrag se **basispunt** (die punt waar die rekkoord begin) na die kruisdraad toe:

1. Skuif die kruisdraad in die rigting wat jy wil hê.
2. Tik die afstand in en druk {{key:Enter}}.

Met {{ui:Ortho}} aan, snap die rigting na reguit dwars of reguit op en af, wat dit die vinnigste manier maak om vierkantige mure te teken. As daar geen basispunt is nie, of die kruisdraad presies daarop is, word die getal geweier met "Punt of opsiesleutelwoord vereis."

## Hoeke

- In grade, as 'n gewone getal: `30`, `-45`, `112.5`.
- Gemeet antikloksgewys vanaf die positiewe X-rigting (wys regs): 0 is regs, 90 op, 180 links, 270 of -90 af.
- Waar 'n hoek gevra word (rotasie, tekshoek), kan jy ook klik: die hoek word gemeet vanaf die basispunt na die klik. Voordat 'n basispunt bestaan, stel die eerste klik dit en vra die vraag vir 'n tweede punt.

## Afstande

Waar 'n afstand gevra word (radius, verplasing, tekshoogte, skaalfaktor):

- tik 'n positiewe getal (in 'n voet-en-duim-tekening ook `12'6"` of `6-1/2`: sien [Voete en duime](topic:units-papers-scales#feet-and-inches-and-fractions)), of
- klik 'n punt: die afstand vanaf die opdrag se basispunt tot daar, of
- klik twee punte wanneer daar geen basispunt is nie: die vraag verander na `Specify second point`.

"Vereis 'n positiewe getal of twee punte." beteken die waarde was nie 'n getal nie, of was negatief.

## Rekenkunde in 'n getikte waarde

Waar 'n lengte, 'n koördinaat, 'n hoek of 'n getal getik word (die opdragreël, dinamiese invoer, Eienskappe-blokkies en dialoë), kan jy 'n berekening met `+`, `-`, `*`, `/` en hakies intik in plaas van om dit eers uit te werk:

| Tik | Gee |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (in 'n voet-en-duim-tekening) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, in die tekening se eenhede (wanneer die eenhede ingestel is) |
| `@4+7/16,0` | 'n punt 4.4375 regs van die laaste een |
| `360/7` | 'n hoek van 51.43 grade |

- 'n Koppelteken wat in 'n lengte geskryf is, is steeds deel daarvan: `4-7/16` is 4 7/16 en `24'-6"` is 24 voet 6 duim. Om na 'n voetmerk af te trek, voltooi eers die lengte, `24'-0"-6"`, of plaas die berekening in hakies met spasies rondom die koppelteken, `(24' - 6")` (binne hakies is 'n spasie 'n spasie; elders druk dit {{key:Enter}}).
- 'n Gewone getal wat by 'n lengte getel word, is in tekeningeenhede; vermenigvuldig of deel met een skaal die lengte. Twee lengtes wat vermenigvuldig word, maak 'n oppervlakte, dus word `2'*3'` geweier.
- `abs`, `round`, `ceil` en `floor` werk ook: `round(10/3)`.
- 'n Berekening wat nie gelees kan word nie, word geweier met waar dit verkeerd gegaan het, byvoorbeeld "Die berekening eindig te vroeg (karakter 3): 'n waarde ontbreek." Niks word ooit as 0 gelees nie. {{cmd:CAL}} druk 'n berekening se waarde uit.

## Dinamiese invoer

{{ui:Dyn}} ({{key:F12}}, in die statusbalk) plaas die waardes by die kruisdraad terwyl 'n opdrag 'n punt vra.

- Met geen basispunt nog nie (die eerste punt van 'n lyn), is die twee velde **X** en **Y**.
- Daarna is dit die **afstand** en die **hoek** vanaf die laaste punt.

Tik gaan steeds na die opdragreël; die veld by die kruisdraad wys dit, en die rekkoord volg dit.

1. Tik 'n waarde: dit gaan in die uitgelighte veld.
2. Druk {{key:Tab}} (of 'n komma na X). Die waarde word vasgesluit (in vet gewys) en die volgende veld word uitgelig. 'n Vasgesluite afstand hou die rekkoord so lank terwyl jy met die muis mik.
3. Tik die tweede waarde, of mik net, en druk {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} trek 50 reguit op vanaf die laaste punt.

Om {{key:Enter}} na een waarde te druk sonder {{key:Tab}} werk soos direkte afstandinvoer. Voet en duim werk ook in die velde (`12'6"`). Afstand- en hoekvrae (die radius van 'n sirkel, 'n rotasie) wys hul waarde ook by die kruisdraad.

## Opsies en verstek

- Opsies verskyn in vierkantige hakies. Tik die hoofletters van 'n opsie (`D` vir `[Diameter]`, `CL` vir `CLose`) en druk {{key:Enter}}. Langer beginne van die woord werk ook (`DIA`).
- 'n Verstek verskyn in punthakies, soos `<500>`. Druk {{key:Enter}} of regsklik om dit te gebruik.

## Ander sleutelborduitlegte en die sleutelbord

Opdragname, kort name en opsieletters is Latynse letters. Met 'n Grieks-, Sirillies- (Russies, Oekraïens, Belarussies, Serwies, Masedonies, Bulgaars), Hebreeus-, Arabies-, Persies-, Thai- of Koreaanse uitleg aktief hoef jy nie uitlegte te verander nie: wanneer die woord wat jy getik het nie as wat dit staan 'n opdrag, kort naam of opsie is nie, lees CadCraft dit volgens die sleutels wat jy gedruk het. Die sleutel met `L` op 'n Latynse sleutelbord begin steeds `LINE`, en die `C`-sleutel antwoord steeds `Close`, wat ook al die letter op die uitleg is. Die lys van ooreenstemmende opdragte bo die opdragreël volg dieselfde reël. Teks wat jy tik waar 'n opdrag teks vra (die inhoud van {{cmd:TEXT}}, 'n naam) word nooit verander nie.

Op uitlegte waarvan die sleutelbord se desimale sleutel 'n komma gee, tik daardie sleutel 'n punt in die opdragreël en in getalblokkies, sodat `12.5` op die sleutelbord getik kan word. Die kommasleutel van die hoofsleutelbord skei steeds `x,y`.

Albei kan afgeskakel word in {{ui:Settings}}: {{ui:Commands on a non-Latin keyboard layout}} en {{ui:Keypad decimal key}}.

## Die koördinaatvertoning

Die statusbalk wys die kruisdraad se X en Y (in die UCS wanneer een ingestel is), na vangste en Ortho. Terwyl 'n opdrag 'n basispunt het, voeg dit `Δ` by met die afstand en hoek vanaf daardie punt, byvoorbeeld `Δ 1500 < 30°`: die getalle wat jy as `@1500<30` sou tik.

Gebruik {{cmd:ID}} om 'n punt se koördinate uit te druk en {{cmd:DIST}} om tussen twee punte te meet.
