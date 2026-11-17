---
title: Tarkista toteutuneet pisteet
summary: Lue pisteet, jotka mittausryhmä mittasi, ja vertaa niitä piirustuksen pisteisiin ja lohkoihin: toleranssin sisällä tai ulkopuolella, mittaamatta tai ylimääräisinä. Merkitse ne piirustukseen ja kirjoita CSV-raportti.
keywords: toteutunut, as built, as-built, asbuilt, mittaus, kokonaisasema, kohdistus, pistetiedosto, csv, txt, pnezd, penzd, xyz, toleranssi, poikkeama, tarkistus, vertaa, exportpoints, asettelupisteet
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) on toinen puoli komennosta {{cmd:EXPORTPOINTS}}. Vie piirustuksen pisteet kentälle, ryhmä asettaa ne maastoon ja mittaa, mitä rakennettiin, ja ASBUILT vertaa heidän tiedostoaan piirustukseen.

1. Kirjoita {{cmd:ASBUILT}} ja valitse samat pisteet ja lohkot, jotka vietiin (Enter ottaa kaikki POINT-kohteet, kuten EXPORTPOINTS tekee).
2. **Pari toteutuneet pisteet** **Numeron** mukaan (ryhmä säilytti pistenumerosi: anna ensimmäinen numero, josta vietiin) tai **Lähimmän** mukaan (ryhmä numeroi omat mittauksensa: jokainen suunnittelupiste saa lähimmän).
3. Anna tiedoston yksiköt ja koordinaatit samoin kuin ne vietiin (Piirustus, metrit tai jalat; maailma (WCS) tai UCS) sekä **toleranssi** piirustusyksiköissä.
4. Valitse ryhmän CSV- tai TXT-tiedosto. CadCraft lukee sen samalla tavalla kuin CivilCraft: pilkut, sarkaimet, puolipisteet tai välilyönnit, sarakkeet nimeävä otsikkorivi tai PNEZD sarakemäärän mukaan.

Komentorivi kertoo, montako pistettä parittiin, montako on toleranssin sisällä, ulkopuolella, mittaamatta ja ylimääräisiä, sekä suurimman etäisyyden. **Merkitäänkö ne piirustukseen?** Kyllä asettaa ne tasolle **AS-BUILT** yhtenä kumoamisvaiheena: piste jokaiselle mittaukselle, sen numero ja etäisyys viereen sekä punainen viiva suunnittelupisteestä jokaiseen toleranssin ulkopuoliseen mittaukseen. CSV-raportti ladataan kaikkine pisteineen: suunnittelun ja toteutuneen koordinaatit, erot itään, pohjoiseen ja korkeudessa sekä tulos.

Katso myös [Pisteet BIM-ohjelmille](topic:points-for-bim).
