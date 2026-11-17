---
title: Voeg teks en etikette by
summary: Plaas kameretikette met enkelreëlteks, skryf omloop-notas met paragraafteks wat direk op die tekening getik word, en wysig teks daarna.
keywords: teks, dtext, mtext, mleader, multileader, leier, revcloud, hersieningswolk, wolk, soek, vervang, soek en vervang, paragraaf, omloop, lynspasiëring, etiket, nota, annotasie, hoogte, justeer, textmask, agtergrondmasker, masker, wipeout, rotasie, wysig teks, ddedit, textedit, lettertipe
from: 4b76be99
---

## Wat jy gaan maak

Twee kameretikette, gesentreer in hul kamers, 'n nota wat by sy breedte omloop, en dan 'n regstelling aan een van die etikette.

## Teksthoogte en tekeningskaal

Teksthoogte is in tekeningseenhede. In 'n tekening in millimeter wat teen 1:50 uitgedruk gaan word, is teks 2.5 mm hoog op papier, dit moet 2.5 × 50 = 125 eenhede hoog in die model wees. Op 'n bladoortjie teken jy in papiereenhede, so 2.5 daar is 2.5 mm op papier.

## Plaas 'n gesentreerde etiket

1. Tik `DT` en druk {{key:Enter}} (of klik {{ui:Teks}} in die nutsbalk). Die prompt lees `Spesifiseer die beginpunt van teks [Justeer]:`.
2. Tik `J` en druk {{key:Enter}}.
3. By `Kies 'n opsie [Links/Middelpunt (C)/Regs/Middel/TL/MC] <L>:`, tik `MC` en druk {{key:Enter}}.
4. By `Spesifiseer die invoegpunt van teks`, klik die middel van 'n kamer.
5. By `Spesifiseer hoogte`, tik `250` en druk {{key:Enter}}.
6. By `Spesifiseer die rotasiehoek van teks <0>`, druk {{key:Enter}}.
7. By `Voer teks in`, tik `KOMBUIS` en druk {{key:Enter}}.

Die etiket verskyn, gesentreer op die punt waarop jy geklik het.

8. Druk {{key:Enter}} op die leë `Voer teks in`-prompt om die opdrag te beëindig.

## Skryf 'n nota wat omloop

Paragraafteks ({{cmd:MTEXT}}) omloop by 'n breedte en word direk op die tekening getik.

1. Tik `T` en druk {{key:Enter}}, of klik {{ui:Paragraaf}} in die nutsbalk.
2. By `Spesifiseer die eerste hoek`, klik waar die nota se boonste linkerhoek moet wees.
3. Om eers die hoogte te verander, tik `H`, druk {{key:Enter}}, tik `250` en druk {{key:Enter}}.
4. By `Spesifiseer die teenoorgestelde hoek [Hoogte/Justeer/Lynspasiëring/Rotasie/Breedte (W)]`, klik regs van die eerste hoek. Die afstand oor is die breedte waarby die teks omloop; hoe ver af jy klik, beperk dit nie.
5. 'n Boks maak oor die tekening oop met die kursor daarin. Tik `ALLE MAATE IS IN MILLIMETER TENSY ANDERS AANGETEK`. Die woorde omloop by die breedte soos jy tik.
6. Druk {{key:Enter}} om 'n nuwe paragraaf te begin en tik `KONTROLEER OP DIE TERREIN`.
7. Druk {{key:Mod+Enter}}, klik {{ui:OK}}, of klik enige plek buite die boks. Die nota is een voorwerp.

Die balk bo die boks verander {{ui:Hoogte}}, {{ui:Lynspasiëring}} (1 is normaal, 1.5 is anderhalf keer so veel), {{ui:Breedte}} (0 = geen omloop) en {{ui:Justeer}} terwyl jy tik. {{key:Esc}} of {{ui:Kanselleer}} maak dit toe sonder om iets by te voeg.

Die opsies by die tweede hoek: `H` hoogte, `J` justering (`TL` linkerbo … `BR` regteronder: die hoek of middelpunt van die boks wat op sy plek bly), `L` lynspasiëring, `R` rotasie, `W` 'n getikte breedte in plaas van die tweede hoek.

:::note
Terwyl die boks oop is, tik {{key:Space}} 'n spasie en {{key:Enter}} begin 'n nuwe paragraaf. 'n Gestoorde DWG hou paragraafteks as MTEXT; 'n DXF R12 het geen paragraafteks nie, so elke reël word as sy eie teks gestoor.
:::

### Verskeie enkelreëls in plaas daarvan

{{cmd:TEXT}} (`DT`) vra een reël op 'n slag: elke {{key:Enter}} begin die volgende reël, 1.667 keer die teksthoogte laer, en elke reël is sy eie voorwerp. Druk {{key:Enter}} op 'n leë reël om klaar te maak.

## Justeeropsies

| Opsie | Die punt waarop jy klik is |
|---|---|
| Links (standaard) | Die linkerkant van die basislyn |
| Middelpunt | Die middel van die basislyn |
| Regs | Die regterkant van die basislyn |
| Middel, MC | Die middel van die teks, horisontaal sowel as vertikaal |
| TL | Die boonste linkerhoek |

## Wysig teks

1. Dubbelklik 'n teksvoorwerp. Dit open in dieselfde boks as nuwe paragraafteks, met die kursor aan die einde.
2. Verander die woorde.
3. Druk {{key:Mod+Enter}} of klik buite die boks. Die teks op die tekening verander; {{key:Esc}} laat dit soos dit was.

{{cmd:TEXTEDIT}} (`ED`) doen dieselfde: kies een teks na die ander, en druk {{key:Enter}} wanneer jy klaar is.

Kies 'n teks om dit eerder in die regterpaneel te verander: {{ui:Teks}}, {{ui:Hoogte}}, {{ui:Omloopbreedte}} (0 = geen omloop), {{ui:Lynspasiëring}}, {{ui:Rotasie}}, die X- en Y-posisie en {{ui:Justeer}}. Die {{ui:Justeer}}-lys bied ook Onder links aan, wat teks van ander programme soms gebruik.

## Opmaak binne paragraafteks uit ander programme

Paragraafteks in 'n DWG of DXF kan kodes binne-in hê: kleure per woord, vet en skuins, onderstreping, bostreping en deurstreping, gestapelde breuke soos 1/2, en 'n ander hoogte vir 'n woord. CadCraft hou daardie kodes, teken dit (op die skerm en in 'n uitgedrukte PDF) en stoor dit onveranderd terug.

Wanneer jy so 'n teks wysig (dubbelklik, {{cmd:TEXTEDIT}}, die Teksveld van die regterpaneel, of {{cmd:FIND}} met Vervang), wysig jy sy gewone woorde. 'n Woord wat jy tik, gaan in die reeks naas dit en neem sy kleur en styl oor; die ander kodes bly waar hulle is. As jy die getalle van 'n gestapelde breuk oortik, word daardie breuk gewone teks. Die hele teks instel vanaf die Teksveld hou die kodes net waar dit kan sien watter woorde gebly het.

Lettertipename (`\F`) word behou en gestoor, maar alles word in die een Helvetica-agtige lettertipe geteken. Daar is nog geen nutsbalk om kodes te tik nie.

## Wys na iets: meervoudige leiers

{{ui:Leier}} in die {{ui:Annoteer}}-groep ({{cmd:MLEADER}}, `MLD`) teken 'n pyl, 'n leierlyn, 'n kort landing en 'n nota, as een voorwerp.

1. Klik {{ui:Leier}}. By `Spesifiseer die pylkopligging van die leier`, klik waarna die nota verwys.
2. By `Spesifiseer die landingsligging van die leier`, klik waar die nota moet kom. Die landing draai na die kant waarop jy geklik het.
3. Tik die nota in die boks wat oopmaak, en druk {{key:Mod+Enter}}.

`A` en `L` by die eerste vraag stel die pylkopgrootte en die lengte van die landing in; die teksthoogte kom van die {{ui:Tekshoogte}} vir nuwe afmetings, maal {{ui:Algemene skaal}}. Dubbelklik 'n meervoudige leier om die woorde te verander. Handvatsels skuif die pylkop en die landing; die nota volg die landing. In {{ui:Eienskappe}}: {{ui:Teks}}, {{ui:Hoogte}}, {{ui:Omloopbreedte}}, {{ui:Pylkopgrootte}} en {{ui:Landingsafstand}}.

:::note
Meervoudige leiers word as ware meervoudige leiers in DWG gestoor. DXF het geen meervoudige leier in R12 of 2000 nie, so word hulle daar gestoor as die lyne, pylkop en teks wat hulle teken.
:::

## Merk veranderinge met 'n hersieningswolk

{{ui:Annoteer}} › {{ui:Meer}} › {{ui:Hersieningswolk}} ({{cmd:REVCLOUD}}, `RC`) teken 'n wolk van boë rondom wat verander het. Die geskiedenis wys die boglengte en die tipe wat dit sal gebruik.

- **Reghoekig** (die eerste keer): klik twee hoeke.
- `P` **Veelhoekig**: klik die hoeke, {{key:Enter}} sluit die wolk.
- `F` **Vryhand**: klik waar dit begin en beweeg die aanwyser rondom die gebied sonder om te klik; 'n boog word by elke boglengte bygevoeg. Klik of druk {{key:Enter}} om dit te sluit.
- `O` **Voorwerp**: kies 'n geslote polilyn, sirkel of ellips (of 'n lyn, boog of oop polilyn); dit word die wolk. `Keer rigting om?` `Y` draai die boë na binne.
- `A` **Boglengte**: die lengte van elke boog. Kies een wat by die drukskaal pas.

Die wolk is 'n geslote polilyn van boë, so dit word in elke formaat gestoor.

## Soek en vervang woorde

{{ui:Redigeer}} › {{ui:Meer}} › {{ui:Soek en vervang}} ({{cmd:FIND}}) soek deur teks, die waardes van blookeienskappe en maatteks op die oop oortjie (of net in die gekose voorwerpe).

1. Tik die woorde in {{ui:Soek}}. Die lys wys elke plek waar hulle is, en die telling.
2. Kies {{ui:Pas hoofletters aan}}, {{ui:Slegs hele woorde}} of {{ui:Gebruik wildkaarte (* en ?)}} as jy hulle nodig het, en ontmerk wat nie gesoek moet word nie.
3. Klik {{ui:Kies gevondenes}} om daardie voorwerpe te kies, of tik die nuwe woorde in {{ui:Vervang met}} (die lys wys wat elkeen word) en klik {{ui:Vervang alles}}. Een {{key:Mod+Z}} ontdoen elke vervanging.

'n Maat se gemete waarde is nie teks nie, so dit word nooit vervang nie: in `<> TYP.` kan net `TYP.` vervang word.

## Verberg die lyne agter 'n etiket

1. Kies die tekste, tik {{cmd:TEXTMASK}} en druk {{key:Enter}}.
2. `B` verf die tekening se agtergrond agter hulle; `C` vra vir 'n kleurnommer. `O` haal die masker weg.
3. `Rand-verskuiwingsfaktor`: {{key:Enter}} hou 1.5, 'n halwe teksthoogte rondom die teks.

Die masker bedek lyne onder die teks, op die skerm en wanneer jy uitdruk. DWG 2004 of later en DXF 2000 hou dit; die DWG 2000-formaat en DXF R12 kan nie, en die stoor sê dit.

## Lettertipe

Alle teks word in 'n Helvetica-agtige lettertipe geteken, op die skerm en in PDF's. Teks uit oop tekeninge behou sy woorde, hoogte en posisie, maar nie sy oorspronklike lettertipe nie (die naam van 'n lettertipe binne paragraafteks word in die lêer behou, sien hierbo).

In uitgedrukte PDF's word teks in enige Europese skrif, Kirillies of Grieks as homself gedruk (die PDF dra die letters wat dit nodig het, en jy kan die teks steeds kies en soek). Chinese, Japannese en Koreaanse teks word ook as homself gedruk (die druk haal die eerste keer 'n groter lettertipe wanneer dit nodig is). Arabiese, Persiese, Urdu- en Hebreeuse teks word ook as homself gedruk (sien die volgende afdeling). Karakters waarvoor geen lettertipe 'n letter het nie, word as "?" gedruk, en die geskiedenis sê hoeveel daar was.

## Teks van regs na links: Arabies, Persies, Urdu, Hebreeus

Tik die teks soos jy enige plek anders sou doen: {{cmd:TEXT}} en {{cmd:MTEXT}} teken elke reël in leesvolgorde. 'n Reël waarvan die eerste letter Arabies of Hebreeus is, lees van regs na links; getalle en Latynse woorde binne dit behou hul eie volgorde van links na regs, en letters in Arabiese skrif word verbind. 'n Reël wat met 'n Latynse letter begin, bly van links na regs, met die regs-na-links woorde op hul plek binne-in. Elke paragraaf van 'n meerreëlteks het sy eie rigting, en 'n omloopparagraaf behou dit op elke reël.

Die teks word gestoor soos jy dit getik het, so DWG- en DXF-lêers ruil dit onveranderd met ander programme uit. Die invoegpunt en die justering ({{ui:Links}}, {{ui:Middelpunt}}, {{ui:Regs}}) beteken dieselfde kant as vir enige teks: 'n regs-na-links nota wat aan sy regterkant moet hang, benodig {{ui:Regs}}.

Op die skerm kom die letters uit jou stelsel se lettertipes. In 'n uitgedrukte PDF gebruik Hebreeus dieselfde ingebedde lettertipe as Latynse teks; teks in Arabiese skrif laat die druk een meer lettertipe haal (minder as 1 MB, een keer), en die hele PDF word dan in daardie lettertipe gedruk. Daardie lettertipe het geen eie vorm vir drie Urdu-karakters nie (heh goal, yeh barree en die Urdu-volstop): hulle word in die naaste Arabiese letter se vorm gedruk. 'n Tekening wat sowel Arabiese-skrif as Chinese, Japannese of Koreaanse teks het, druk een van die twee as "?", omdat 'n druk een lettertipe dra. Teks in 'n gelaaide SHX-lettertipe word in volgorde gesit en verbind wanneer die lettertipe die letters op hul Unicode-plekke het; vir ou lettertipes waarvan die letters reeds gevorm is, gebruik {{ui:Omkeer}} in {{cmd:SHXFONTS}} soos voorheen.

## Algemene foute

- **Die teks is te klein om te sien.** Die hoogte is in tekeningseenhede. In 'n groot tekening, gebruik 'n groot hoogte (sien hierbo), of zoem in.
- **Die opdrag het na een reël geëindig.** Jy het {{key:Enter}} op 'n leë reël in {{cmd:TEXT}} gedruk. Begin dit weer, of gebruik paragraafteks (`T`), waar {{key:Enter}} 'n nuwe paragraaf begin.
- **`T` het 'n boks oopgemaak in plaas van om 'n reël te vra.** Soos in AutoCAD is `T` paragraafteks ({{cmd:MTEXT}}); enkelreëlteks is `DT`.
- **Die teks omloop op 'n ander plek in AutoCAD.** CadCraft omloop met Helvetica-breedtes; 'n ander lettertipe kan 'n woord meer of minder op 'n reël pas.
- **Teks in 'n gespieëlde kopie.** Dit word gespieël geplaas, maar bly van links na regs leesbaar.
