---
title: Redigeer met gryppunte en Eienskappe
summary: Rek, skuif en verander die grootte van voorwerpe met hul gryppunte, en tik presiese lengtes, radiusse, hoeke en koördinate in die Eienskappe-paneel.
keywords: gryppunte, eienskappe, rek, lengte, radius, koördinate, redigeer, vinnige eienskappe, eienskappe-paneel, verander, laag, kleur, color
from: f22541ba
---

## Wat jy sal leer

Twee vinnige maniere om 'n voorwerp te verander sonder 'n opdrag: sleep sy **gryppunte**, of tik nuwe waardes in die **Eienskappe**-paneel aan die regterkant.

## Gryppunte

Wanneer jy voorwerpe kies (tot 200 op 'n slag) sonder dat 'n opdrag loop, verskyn klein vierkantjies op hulle. Dit is gryppunte:

| Voorwerp | Gryppunte |
|---|---|
| Lyn | Albei punte, en die middelpunt (skuif die hele lyn) |
| Sirkel | Die middelpunt (skuif dit) en vier punte op die sirkel (verander die radius) |
| Boog | Die middelpunt, en albei punte (verander waar dit begin en ophou) |
| Polilyn | Elke hoekpunt |
| Teks, punt, blokverwysing | Die invoegpunt |
| Ellips | Die middelpunt |
| Maat | Sy definiërende punte en die posisie van die maatlyn |
| Aansigvenster | Die middelpunt (skuif dit) en die vier hoeke (verander die grootte) |

### Skuif 'n gryppunt

1. Teken 'n lyn en klik dit. Drie gryppunte verskyn.
2. Klik die gryppunt aan een punt. Die statusbalk sê "Klik waar hierdie gryppunt heen moet (Esc om te kanselleer). Vasvang en Ortho geld."
3. Beweeg die kruisdraad. 'n Voorskou volg.
4. Klik die nuwe posisie, of vasvang aan 'n punt op 'n ander voorwerp en klik.

Die punt skuif en die res van die lyn bly staan. Jy kan ook op 'n gryppunt druk en dit sleep, en dan los waar dit moet wees.

:::note
Jy kan nie 'n koördinaat vir 'n gryppunt tik nie. Vir 'n presiese posisie, vasvang aan 'n punt, of tik die waarde in Eienskappe.
:::

Druk {{key:Esc}} of regsklik om 'n gryppuntskuif te kanselleer.

## Eienskappe

Die regterpaneel wys die eienskappe van wat gekies is.

1. Klik 'n lyn. Die paneel se opskrif lees "Lyn".
2. Klik in {{ui:Lengte}}, tik `2500` en druk {{key:Enter}}.

Die lyn is nou presies 2500 lank en behou sy beginpunt en hoek. {{key:Enter}} of klik elders pas 'n waarde toe; {{key:Esc}} sit die ou waarde terug. Elke verandering is een ontdoen-stap, ook wanneer baie voorwerpe op 'n slag verander.

Velde neem uitdrukkings (`=2*45`) en lengtes met eenhede (`3'6"`, `900mm`), elke punt het X, Y en Z, en verskeie voorwerpe kan saam verander word. Alles hiervan is in [Die Eienskappe-paneel](topic:properties-panel).

## Algemene foute

- **Geen gryppunte verskyn nie.** 'n Opdrag loop (druk {{key:Esc}}), of meer as 200 voorwerpe is gekies, of die voorwerp is op 'n gesluite laag.
- **Die gryppunt het op die verkeerde plek beland.** 'n Vasvang het dit gevang. Hou {{key:Shift}} vas terwyl jy klik om vasvangs te ignoreer.
- **Tik in Eienskappe het niks gedoen nie.** Druk {{key:Enter}} of klik elders om toe te pas. 'n Geweierde invoer (nul of negatiewe lengtes en radiusse, teks wat nie 'n waarde is nie) maak die veld rooi en sê waarom.
- **Getikte letters het in 'n Eienskappe-veld beland.** Solank 'n veld die kursor het, tik sleutels daar. Druk {{key:Enter}} of {{key:Esc}}, en tik dan die opdrag.
