---
title: Provjera mjernih jedinica crteža
summary: Saznajte je li otvoreni crtež u milimetrima, inčima ili nečem drugom, provjerite to mjerenjem i saznajte zašto drugi program može navesti različite jedinice za isti DXF.
keywords: jedinice, koje jedinice, provjeri jedinice, milimetri, mm, inči, metrički, imperijalni, DXF jedinice, STEP u DXF, pogrešne jedinice, inči ili mm, INSUNITS, MEASUREMENT, jedinice crteža, PartCraft DXF
from: c0ee75bb
---

## Što ćete učiniti

Saznati što jedna jedinica u otvorenom crtežu predstavlja i provjeriti da brojevi koje čitate imaju veličinu koju očekujete.

## Koraci

1. Otvorite crtež, zatim pritisnite {{key:Esc}} da ništa ne bude odabrano, na kartici {{ui:Model}}.
2. U desnom oknu, ispod {{ui:Trenutne postavke}}, pročitajte {{ui:Jedinice}}. Piše što jedna jedinica crteža predstavlja: {{ui:Milimetri}}, {{ui:Inči}}, {{ui:Stope}} i tako dalje. DXF spremljen u programu PartCraft piše {{ui:Milimetri}}.
3. Provjerite to mjerenjem nečega čiju veličinu znate. Upišite {{cmd:DIST}} i odaberite dva kraja brida ili rupe. Ako dio koji znate kao 25 mm pokazuje `25`, crtež je u milimetrima; ako pokazuje oko `0.98`, u inčima.

{{ui:Bez jedinica}} znači da datoteka to ne navodi. CadCraft tada to smatra jedinicom papira (milimetri na ISO papiru, inči na američkom papiru), a brojevi su točni samo koliko i program koji ih je zapisao.

## Ako su jedinice pogrešne

Promjena {{ui:Jedinice}} **ne mijenja veličinu ničemu**: brojevi ostaju isti, mijenja se samo ono što znače. Zato je postavite samo da opišete što crtež stvarno jest. Ako su brojevi u milimetrima, a {{ui:Jedinice}} piše {{ui:Inči}}, odaberite {{ui:Milimetri}}. Ako geometriju trebate u drugim jedinicama, skalirajte je naredbom {{cmd:SCALE}} (25.4 za prelazak iz inča u milimetre, 1/25.4 za obrnuto), pa tek onda postavite {{ui:Jedinice}}.

Kako se duljine zapisuju (decimalno, stope i inči, razlomci) zasebna je postavka, {{ui:Oblik duljine}}: pogledajte [Jedinice, veličine papira i mjerila](topic:units-papers-scales).

## Zašto drugi program može reći inči

DXF u svojem zaglavlju navodi svoje jedinice. Najstarija vrsta DXF-a, R12, nije imala varijablu jedinica, pa program koji strogo čita R12 ignorira onu koja je tamo zapisana i uzima vlastitu zadanu vrijednost, što je često inči. Geometrija u datoteci je u oba slučaja ista: razlikuje se samo oznaka. PartCraft piše DXF datoteke kao R12 i navodi milimetre na dva načina (`$INSUNITS` 4 i `$MEASUREMENT` 1), kako bi ih više programa ispravno čitalo. Ako program i dalje kaže inči, postavite mu jedinice na milimetre kada otvorite datoteku.

Uvoz datoteke u crtež (umjesto njezina otvaranja) pretvara njezine jedinice: pogledajte [Jedinice pri uvozu](topic:units-on-import).
