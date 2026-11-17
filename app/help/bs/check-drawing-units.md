---
title: Provjeri u kojim su jedinicama crtež
summary: Vidi je li otvoreni crtež u milimetrima, inčima ili nečemu drugom, provjeri to mjerenjem i shvati zašto drugi program može navesti drugačije jedinice za isti DXF.
keywords: jedinice, koje jedinice, koje su jedinice, provjeri jedinice, milimetri, mm, inči, metrički, imperijalni, DXF jedinice, STEP u DXF, pogrešne jedinice, inči ili mm, INSUNITS, MEASUREMENT, jedinice crteža, PartCraft DXF
from: c0ee75bb
---

## Šta ćeš raditi

Saznaj šta jedna jedinica u otvorenom crtežu znači i provjeri da su brojevi koje čitaš one veličine koju očekuješ.

## Koraci

1. Otvori crtež, zatim pritisni {{key:Esc}} da ništa ne bude odabrano, na kartici {{ui:Model}}.
2. U desnom panelu, ispod {{ui:Trenutne postavke}}, pročitaj {{ui:Jedinice}}. Kaže šta jedna jedinica crteža znači: {{ui:Milimetri}}, {{ui:Inči}}, {{ui:Stope}} i tako dalje. DXF sačuvan iz PartCraft-a kaže {{ui:Milimetri}}.
3. Provjeri mjerenjem nečega čija je veličina poznata. Ukucaj {{cmd:DIST}} i izaberi dva kraja ivice ili rupe. Ako dio za koji znaš da ima 25 mm pokazuje `25`, crtež je u milimetrima; ako pokazuje oko `0.98`, u inčima.

{{ui:Bez jedinica}} znači da datoteka ne kaže. CadCraft tada koristi jedinicu papira (milimetre na ISO papiru, inče na US papiru), a brojevi su tačni koliko i program koji ih je napisao.

## Ako su jedinice pogrešne

Promjena {{ui:Jedinice}} **ne mijenja veličinu ničemu**: brojevi ostaju isti i mijenja se samo njihovo značenje. Zato je postavi samo da kažeš šta crtež zaista jeste. Ako su brojevi milimetri, a {{ui:Jedinice}} kaže {{ui:Inči}}, izaberi {{ui:Milimetri}}. Ako ti je potrebna geometrija u drugim jedinicama, skaliraj je s {{cmd:SCALE}} (25.4 za prelazak iz inča u milimetre, 1/25.4 obrnuto), pa tek onda postavi {{ui:Jedinice}}.

Način pisanja dužina (decimalno, stope i inči, razlomci) je zasebna postavka, {{ui:Format dužine}}: vidi [Jedinice, formati papira i razmjere](topic:units-papers-scales).

## Zašto drugi program može reći inči

DXF navodi svoje jedinice u zaglavlju. Najstarija vrsta DXF-a, R12, nije imala nikakvu promjenljivu za jedinice, pa program koji strogo čita R12 ignoriše onu koja je zapisana i koristi vlastitu podrazumijevanu vrijednost, koja je često inči. Geometrija u datoteci je u oba slučaja ista: razlikuje se samo oznaka. PartCraft piše DXF datoteke kao R12 i navodi milimetre na dva načina (`$INSUNITS` 4 i `$MEASUREMENT` 1) kako bi ih više programa ispravno čitalo. Ako program i dalje kaže inče, postavi mu jedinice na milimetre kad otvoriš datoteku.

Ubacivanje datoteke u crtež (umjesto njenog otvaranja) pretvara njene jedinice: vidi [Jedinice pri uvozu](topic:units-on-import).
