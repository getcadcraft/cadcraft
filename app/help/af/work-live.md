---
title: Werk aan een tekening saam met Live TeamWork
summary: Wat in CadCraft verander terwyl jy in 'n Live TeamWork-sessie vanaf CadCraft Studio is: ander mense se wysers en seleksies, voorwerpe wat iemand wysig, die gasheer se slotte, jou eie ontdoen, en aansluiting vanaf 'n blaaier op dieselfde netwerk.
keywords: live, live teamwork, studio live, saam, samewerk, saam wysig, sessie, deel live, sluit aan, wyser, vashou, wysig, slot, livelock, liveunlock, livehold, laag vashou, gebied vashou, hangslot, ontdoen, gasheer, assistent, dieselfde lêer, baie mense, stadig, limiet, wie het verander, onlangse wysigings, wysigingslogboek
from: 0497d2a3
---

## Wat jy sal leer

Wat jy sien, en wat met jou wysigings gebeur terwyl verskeie mense tegelyk aan een tekening werk. CadCraft Studio begin en sluit aan by die Live TeamWork-sessie (Deel live, Sluit aan). Hierdie bladsy gaan oor die tekening self.

## Almal teken tegelyk

Teken en wysig soos gewoonlik. Jou eie wysigings wys dadelik, selfs voordat die ander dit het, en hulle s'n verskyn op jou skerm 'n oomblik nadat hulle dit maak. Elke opdrag werk: teken, wysig, lae, blokke, blaaie, maat, beperkings.

Twee mense kan dieselfde voorwerp verander. Wanneer jy verskillende dinge verander, soos die kleur en 'n eindpunt van een lyn, word albei veranderinge behou. Wanneer jy dieselfde ding verander, wen die latere verandering.

Wat net joune bly: die huidige laag, kleur en teksthoogte vir nuwe voorwerpe, jou maatinstellings, jou aansig, verdeelde skerm en UCS. Die tekening is gedeel; hoe jy daarna kyk, is nie.

## Ander mense op jou tekening

- **Wysers:** elke persoon se wyser wys met hul naam in hul eie kleur, en die opdrag wat hulle uitvoer. Jy sien die wysers van mense wat naby is aan wat op jou skerm is.
- **Seleksies:** wat iemand gekies het, word in hul kleur omlyn.
- **Word gewysig:** 'n voorwerp wat iemand gekies het, dra 'n etiket soos "Ana wysig". Jy kan steeds sy kleur verander of dit skuif, maar jy kan dit nie uitvee, ontbind of weer tik nie totdat hulle loslaat. Om dit te kies, sê vir jou wie dit het.
- **Wie het laas verander:** kies een voorwerp wat iemand anders in hierdie sessie verander het, en die opdraglyn sê wie, en wat die verandering was ("Ben het dit laas verander: CIRCLE."). Studio se Veranderlik-paneel lys elke onlangse wysiging onder {{ui:Recent edits}}. Niks hiervan word in die tekening gestoor nie: dit duur so lank as die sessie.

## Hou 'n laag of 'n gebied vas terwyl jy daar werk

Op 'n groot tekening met verskeie mense, sê watter deel vir nou joune is:

1. Tik `LIVEHOLD` en druk {{key:Enter}}.
2. Kies `L` en tik 'n laagnaam (Enter behou die huidige laag), of kies `A` en klik twee hoeke van 'n gebied.
3. Ander mense se wysigings op daardie laag, of aan voorwerpe in daardie gebied, word teruggeneem, en hulle word laat weet dat jy daar werk. Jy sien jou gebied as 'n gestippelde raam. Ander sien dit in jou kleur met jou naam, en die lae wat jy vashou, word bo links in hul tekening gelys.
4. `LIVEHOLD`, dan `R`, laat alles los wat jy vashou. Om die sessie te verlaat, laat dit ook los.

Enigiemand in die sessie kan vashou, ook die gasheer. Die gasheer se slotte geld steeds bo-op. 'n Vashouding word nooit in die lêer gestoor nie.

## Wanneer 'n wysiging teruggeneem word

Die gasheer se kopie van die tekening kontroleer elke wysiging. Enkele kan nie ingaan nie. CadCraft neem hulle op jou skerm terug en sê op die opdraglyn waarom, byvoorbeeld:

- iemand het die voorwerp uitgevee, of die laag of blok wat dit nodig het, net voor jou;
- iemand wysig daardie voorwerp, of hou sy laag of die gebied waarin dit is, vas;
- die gasheer het dit gesluit;
- die blok wat jy plaas, is uit die tekening verwyder, of 'n laag wat jy uitvee, het nog voorwerpe op.

## Ontdoen ontdoen jou eie werk

{{key:Mod+Z}} en {{ui:Undo}} ontdoen jou eie laaste opdrag, heeltemal, en laat almal anders se werk met rus. Wanneer iemand sedertdien dieselfde ding verander het, word niks ontdoen nie, en die opdraglyn sê wie dit verander het. {{key:Mod+Y}} herdoen.

## Slotte (die gasheer)

Die gasheer kan voorwerpe of 'n hele laag beskerm sodat niemand dit verander nie, ook nie die gasheer self nie, totdat dit ontsluit word:

1. Kies die voorwerpe, tik dan `LIVELOCK` en druk {{key:Enter}}. Of tik `LIVELOCK` sonder seleksie en kies `L` om 'n laag by naam te sluit: voorwerpe wat later by daardie laag gevoeg word, is ook gesluit.
2. Gesluite voorwerpe word gestippel geteken, met 'n "Gesluit deur die gasheer"-etiket op almal se skerms.
3. `LIVEUNLOCK` ontsluit hulle op dieselfde manier.

Slotte hoort by die sessie: hulle eindig wanneer dit eindig, en word nooit in die lêer gestoor nie.

## Sluit aan by dieselfde lêer

As jy presies die lêer oopgemaak het wat die gasheer oopgemaak het (uit 'n gedeelde vouer of dieselfde kopie), sluit aan vanaf jou eie CadCraft-venster in Studio: maak die {{ui:Live}}-paneel oop en gebruik {{ui:Join here}} met die gasheer se kode. Net die veranderinge wat sedert die gasheer dit oopgemaak het, reis, so 'n groot tekening is dadelik gereed. As jou lêer 'n ander een is, vervang die gasheer se tekening dit op jou skerm (jou lêer bly soos dit is). Dit werk net solank jou tekening onveranderd is sedert jy dit oopgemaak het.

## Assistente in 'n lewendige sessie

'n Assistent wat aan jou CadCraft-venster gekoppel is (sien die hulp oor werk met KI-assistente), sluit by die sessie aan as sy eie deelnemer, aan almal gewys as "Assistent (via <jou naam>)". Die gasheer laat dit in, soos vir 'n persoon. Die gasheer se eie assistent sluit dadelik aan. Sy veranderinge het hul eie ontdoen: jou {{key:Mod+Z}} ontdoen jou werk, en die assistent se ontdoen ontdoen slegs sy eie. Dit verlaat die sessie wanneer jy dit ontkoppel of jy vertrek, en dit kan slegs in die sessie werk terwyl jy kan wysig.

## Sluit aan vanaf 'n blaaier

'n Spanmaat sonder Studio kan die prent onder die gasheer se kode met 'n foon, tablet of rekenaar op dieselfde netwerk skandeer. CadCraft maak in die blaaier oop, vra jou naam op die opdraglyn, en vul met die gasheer se tekening sodra die gasheer jou inlaat. 'n Uitnodigingskakel laat iemand van 'n ander netwerk aansluit: die gasheer het 'n Team Cloud Plan-plek vir die program nodig, almal anders sluit gratis aan, en die skakel werk slegs solank die gasheer se sessie oop is.

## Baie mense op een tekening

Elke wysiging gaan na almal in die sessie. Hoe meer mense daar is, hoe langer neem elke verandering om elkeen te bereik, en stadiger rekenaars en verbindings raak eerste agter. 'n Sessie se gewone grootte is 20 mense; die gasheer kan meer toelaat vir een sessie (sien die hulp oor saam werk lewendig). As die tekening met baie mense stadig voel, help minder mense, minder wat op dieselfde oomblik wysig, of 'n beter verbinding.

## Wanneer die sessie eindig

Net die gasheer stoor die tekening. Wanneer die gasheer die sessie beëindig, hou almal anders 'n ongestoorde kopie: stoor dit as jy dit wil behou.

:::note
Iets wat teruggeneem is, word op die voorwerpe rondom getrek op jou eie skerm totdat jy die tekening weer oopmaak. Oorvleuelende arseringe en gevulde voorwerpe kan anders lyk as die gasheer se kopie; die tekening self is dieselfde.
:::
