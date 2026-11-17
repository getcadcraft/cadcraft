---
title: PDF-alátétek és PDF-importálás
summary: Helyezzen egy PDF-oldalt a rajz alá, hogy átrajzolhassa és kinyomtathassa, vagy alakítsa az oldal vonalait és szövegét rajzobjektumokká.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, alátét, átrajzolás, pdf importálása, beolvasás, alaprajz, halványítás, levágás, rétegek, fogás, PDF megnyitása
from: aa301d0f
---

## Két mód egy PDF-oldal behozatalához

- **Csatolás** ({{cmd:PDFATTACH}}) a PDF-et képként tartja a rajz alatt. Átrajzolhatja, fogást használhat a vonalaihoz, halványíthatja, levághatja, és a rajzlappal együtt nyomtatódik. A rajz csak a fájl nevét tárolja.
- **Importálás** ({{cmd:PDFIMPORT}}) az oldal vonalait, íveit, kitöltéseit és szövegét szokásos rajzobjektumokká alakítja, a PDF nevével elnevezett rétegeken. Ezek szabadon szerkeszthetők, és utána nincs szükség a PDF-re.

A PDF {{ui:Megnyitás}} gombbal történő megnyitásakor a program megkérdezi, melyik módot választja.

## Oldal csatolása

1. Írja be a `PDFATTACH` (vagy `PDFATT`) parancsot, és válassza ki a PDF-et. Ha több oldala van, írja be az oldal számát.
2. Kattintson a beszúrási pontra (az oldal bal alsó sarkára).
3. Nyomja meg az {{key:Enter}} billentyűt az oldal valódi méretéhez, vagy írja be a léptéket: rajzegység PDF-pontonként (egy pont 1/72 hüvelyk, tehát milliméteres rajzban 0.3528).
4. Nyomja meg az {{key:Enter}} billentyűt, ha nincs elforgatás, vagy írjon be egy szöget.

Az oldal olyan objektum, mint egy blokkhivatkozás: mozgatható, forgatható, méretezhető, másolható, törölhető, és rétegre tehető. Kapcsolja ki a rétegét, és eltűnik. Nagyítson rá, és az oldal élesen újrarajzolódik.

## Átrajzolás

Ha a {{ui:Fogás}} be van kapcsolva, a kurzor a PDF saját vonalaihoz igazodik: végpontokhoz, felezőpontokhoz és metszéspontokhoz (és a {{ui:Legközelebbi}} fogáshoz is, ha az be van kapcsolva). Az oldalon betűkként rajzolt szöveg nem fogható meg.

## Beállítás

- `PDFADJUST`: **Halványítás** (0-tól 80 százalékig), **Kontraszt** (0-tól 100-ig), **Egyszínű**, és **Be/ki**, amellyel elrejtheti anélkül, hogy törölné.
- `PDFCLIP`: csak az oldal egy téglalapját vagy sokszögét mutatja; a **Törlés** eltávolítja a levágást.
- `PDFLAYERS`: a PDF-nek saját rétegei lehetnek. A parancs felsorolja őket; írjon be egy számot, hogy ehhez az alátéthez be- vagy kikapcsolja az adott réteget. A fájlban kikapcsolt rétegek kikapcsolva indulnak.

## Plottolás és mentés

A PLOT az oldalt vonalaiként, kitöltéseiként és szövegeként nyomtatja (így éles és kereshető marad). A PDF-ben lévő képek a képernyőn látszanak, de egyelőre nem nyomtatódnak.

A DWG vagy DXF 2000 az alátétet hivatkozásként tartja meg: a fájl nevét, az oldalt, a helyét, a léptékét, az elforgatását, a levágását, a halványítását és a kontrasztját. Magát a PDF-et a rajz nem tartalmazza. Nyissa meg újra a rajzot, írja be a `PDF` parancsot, és válassza ki újra a fájlt; addig az oldalak keretként látszanak, és csak akkor veszik fel valódi méretüket. A régebbi DXF (R12) nem ismeri az alátéteket: csak a keretet és a nevet tárolja. Azt még nem ellenőriztük, hogy más programok hogyan olvassák a mentett levágást és léptéket.

## Oldal importálása

1. Írja be a `PDFIMPORT` (vagy `PDFIM`) parancsot, és válassza ki a PDF-et és az oldalt.
2. Kattintson arra a helyre, ahová az oldal bal alsó sarka kerül.
3. Nyomja meg az {{key:Enter}} billentyűt a valódi méretért, írjon be léptéket, vagy válassza a **Két pont** lehetőséget: az oldal valódi méretben rajzolódik, majd kattintson két pontra egy ismert távolságon, és írja be a valódi távolságot; minden ennek megfelelően lesz méretezve.

A vonalak vonalakká és polivonalakká válnak, a köröket és íveket felismeri, a kitöltött alakzatok tömör sraffozássá, a szöveg pedig a `-TEXT` végződésű rétegen lévő szöveggé. Ez egy visszavonási lépés. A PDF-ben lévő képek nem importálódnak: ehelyett csatolja az oldalt. A beolvasás (olyan oldal, amely csak kép) nem tartalmaz importálható vonalakat.

A PDF-eket nem megbízható fájlként olvassuk: szkriptek nem futnak, és a nagyon nagy oldalt a program levágja, erről pedig tájékoztat.
