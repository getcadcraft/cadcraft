---
title: Proverite u kojim su jedinicama crtež
summary: Proverite da li je otvoreni crtež u milimetrima, inčima ili nečem drugom, proverite ga merenjem i saznajte zašto drugi program može da navede drugačije jedinice za isti DXF.
keywords: jedinice, koje jedinice, proveri jedinice, milimetri, mm, inči, metrički, imperijalni, DXF jedinice, STEP u DXF, pogrešne jedinice, inči ili mm, INSUNITS, MEASUREMENT, jedinice crteža, PartCraft DXF
from: c0ee75bb
---

## Šta ćete uraditi

Saznajte šta jedna jedinica u otvorenom crtežu predstavlja i uverite se da su brojevi koje čitate veličine koju očekujete.

## Koraci

1. Otvorite crtež, zatim pritisnite {{key:Esc}} da ništa ne bude izabrano, na kartici {{ui:Model}}.
2. U desnom panelu, pod {{ui:Trenutna podešavanja}}, pročitajte {{ui:Jedinice}}. Tu piše šta jedna jedinica crteža predstavlja: {{ui:Milimetri}}, {{ui:Inči}}, {{ui:Stope}} i tako dalje. DXF sačuvan iz PartCraft-a kaže {{ui:Milimetri}}.
3. Proverite merenjem nečega čiju veličinu znate. Ukucajte {{cmd:DIST}} i izaberite dva kraja ivice ili rupe. Ako deo za koji znate da ima 25 mm pokazuje `25`, crtež je u milimetrima; ako pokazuje oko `0.98`, u inčima je.

{{ui:Bez jedinica}} znači da datoteka to ne navodi. CadCraft tada koristi jedinicu papira (milimetre na ISO papiru, inče na US papiru), a brojevi su tačni samo koliko je tačan program koji ih je zapisao.

## Ako su jedinice pogrešne

Promena {{ui:Jedinice}} **ne menja veličinu ničemu**: brojevi ostaju isti, a menja se samo ono što znače. Zato je postavite samo da kažete šta crtež zaista jeste. Ako su brojevi u milimetrima, a {{ui:Jedinice}} kaže {{ui:Inči}}, izaberite {{ui:Milimetri}}. Ako su vam potrebne geometrije u drugim jedinicama, skalirajte ih komandom {{cmd:SCALE}} (25.4 od inča do milimetara, 1/25.4 obrnuto), pa zatim postavite {{ui:Jedinice}}.

Način na koji se dužine pišu (decimalno, stope i inči, razlomci) je zasebno podešavanje, {{ui:Format dužine}}: pogledajte [Jedinice, veličine papira i razmere](topic:units-papers-scales).

## Zašto drugi program može da kaže inči

DXF u svom zaglavlju navodi jedinice. Najstarija vrsta DXF-a, R12, nema promenljivu za jedinice, pa program koji striktno čita R12 ignoriše onu koja je tamo zapisana i uzima svoju podrazumevanu, što su često inči. Geometrija u datoteci je u oba slučaja ista; razlikuje se samo oznaka. PartCraft piše svoje DXF datoteke kao R12 i navodi milimetre na dva načina (`$INSUNITS` 4 i `$MEASUREMENT` 1) da bi ih više programa pravilno čitalo. Ako program i dalje kaže inči, pri otvaranju datoteke postavite njegove jedinice na milimetre.

Uvoženje datoteke u crtež (umesto otvaranja) pretvara njene jedinice: pogledajte [Jedinice pri uvozu](topic:units-on-import).
