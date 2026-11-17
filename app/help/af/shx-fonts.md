---
title: Teks in jou eie SHX-lettertipes
summary: Gee CadCraft 'n gids met SHX-lettertipes (of kies die lêers) en die teksstyle wat hulle noem word in hulle geteken, op die skerm en in 'n plot of PDF, met die styl se hoogte, breedtefaktor en skuinshoek.
keywords: shx, lettertipes, lettertipe, vormlettertipe, groot lettertipe, bigfont, unifont, verouderd, persies, farsi, arabies, teksstyl, ontbrekende lettertipe, lettertipe vervang, SHXFONTS, gids, omkeer, visuele volgorde, simplex, isocp
from: 14b0a4ab
---

Tekeninge van ander programme noem dikwels **SHX-lettertipes** in hul teksstyle, en 'n DWG hou nie self daardie lettertipes nie. Sonder die lettertipe teken CadCraft daardie teks in sy eie letter, wat goed is vir gewone Latynse teks maar nie vir ou lettertipes wat gewone karakterkodes na ander letter-vorms afbeeld nie, soos verouderde Persiese annoteringsteks.

Gee CadCraft die lettertipes, en dit teken die teks daarin.

## Laai jou lettertipes

Tik {{cmd:SHXFONTS}} (`SHX`) en kies:

- {{ui:Vouer}} (CadCraft Studio): kies 'n vouer. Elke `.shx`-lêer daarin word nou gelees, en weer elke keer as CadCraft begin.
- {{ui:Lêers}} (die blaaier): kies een of verskeie `.shx`-lêers. Hulle word in hierdie blaaier gehou en nooit opgelaai nie.
- {{ui:Lys}}: die lettertipes wat gelaai is, en die wat die oop tekening noem maar jy nie gelaai het nie.
- {{ui:Verwyder}} en {{ui:Maak skoon}}: vergeet een lettertipe, of almal.

CadCraft kan nie derdeparty-lettertipes insluit nie, so dit lewer nooit enige nie: hulle kom van jou. 'n Tekening noem net sy lettertipes, en hou geen kopie daarvan nie.

## Wat gebeur

'n Teksstyl se lettertipe-naam word aan 'n gelaaide lettertipe gepaar volgens sy naam, ongeag hoofletters, die vouer en `.shx` (`SIMPLEX.SHX` vind `simplex`). 'n Teks in so 'n styl word as lyne geteken, op die skerm, in 'n plot en in 'n PDF, op die teks se eie plek, hoogte, rotasie, breedtefaktor en skuinshoek. Die breedte is die lettertipe s'n eie, so {{ui:Middelpunt}}- en {{ui:Regs}}-uitlyning, omwikkeling en pik pas by wat jy sien. 'n Styl waarvan die lettertipe nie gelaai is nie, hou die ingeboude letter, en wanneer jy 'n tekening oopmaak wat lettertipes noem wat jy nie gelaai het nie, sê die opdragreël dit.

Die Standaard-styl tel ook: 'n tekening waarvan die Standaard-styl 'n eie lettertipe noem, hou dit.

## Lettertipes wat reeds in visuele volgorde is

Baie ou Persiese en Arabiese SHX-lettertipes hou letters wat reeds vir die skerm gevorm is en van links na regs geteken word, so 'n teks wat in logiese volgorde getik word, kom agtertoe uit. Tik {{cmd:SHXFONTS}}, kies {{ui:Omkeer}}, en noem die lettertipe: die teks word dan laaste letter eerste uitgelê. Voer dit weer uit om dit ongedaan te maak. Die skakelaar hoort by die lettertipe, word in hierdie blaaier gehou, en word nie in die tekening gestoor nie.

## Wat nog nie gedek word nie

- Teks met ingebedde formaatkodes (kleure, stapels in 'n MTEXT) bly in die ingeboude letter.
- Groot lettertipes (die dubbelgreep-soort) vul in vir kodes wat die hoofletter nie het nie, maar 'n teks in 'n Oos-Asiatiese kodebladsy wat CadCraft reeds na Unicode omgeskakel het, word nie terug na die lettertipe se dubbelgreep-kodes gekarteer nie.
- Die lettertipe-leser volg die gepubliseerde beskrywing van die formaat en is getoets op lettertipes wat vir CadCraft gemaak is. As een van jou s'n verkeerd teken, stuur vir ons die lettertipe en die tekening.
