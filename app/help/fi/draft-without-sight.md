---
title: Piirtäminen ilman näköä
summary: Kun Saavutettavuus on päällä, CadCraft lukee jokaisen komennon ja tuloksen ruudunlukijan kautta, kuvailee piirustuksen ja kohdistimen lähellä olevat kohteet, antaa siirtää kohdistinta näppäimistöllä, toistaa äänen jokaiselle tartunnalle ja otteelle sekä ottaa komentoja vastaan äänellä, kun selaimesi pystyy siihen tietokoneellasi.
keywords: saavutettavuus, ruudunlukija, sokea, heikkonäköinen, NVDA, VoiceOver, JAWS, Orca, näppäimistökohdistin, äänikomennot, puhe, äänet, tartuntaäänet, kuvaile piirustus, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Saavutettavuus** antaa sinun piirtää ilman, että näet ruudun. Se on pois päältä, kunnes kytket sen päälle, joten kukaan ei saa sitä vahingossa.

## Kytke päälle

Avaa **Asetukset** (rattaikoni tai Ctrl+,), etsi **Piirtäminen ilman näköä** ja valitse **Päällä**. Tai kirjoita `ACCESS` komentoriville ja vastaa `Päällä`. Asetus muistetaan tällä tietokoneella.

Kun Saavutettavuus on päällä:

- **Kaikki, mitä komentorivi sanoo, luetaan ääneen** ruudunlukijan kautta: kirjoittamasi teksti, kysymys, vastaus ja jokainen virhe. CadCraft käyttää omia kohteliaita ja kiireellisiä live-alueitaan, joten ruudunlukija, joka lukee live-alueita, ei tarvitse mitään erillisiä asetuksia. Virheet ja peruutukset keskeyttävät puheen; kaikki muu odottaa vuoroaan.
- **Piirustusalueeseen pääsee käsiksi.** Paina Sarkainta, kunnes kuulet "Piirustus", tai paina Shift+Sarkain komentoriviltä. Se on alue, joka välittää näppäimet CadCraftille.

## Näppäimet piirustuksella

| Näppäin | Mitä se tekee |
|---|---|
| Nuolinäppäimet | Siirtävät näppäimistökohdistinta. Askel on noin sadasosa siitä, mitä ruutu näyttää, pyöristettynä arvoon 1, 2 tai 5. Shift liikuttaa kymmenen kertaa pidemmälle, Ctrl kymmenesosan. |
| Enter | Valitsee kohdistimen alla olevan pisteen aivan kuten napsautus. |
| Space | Painaa Enter-näppäintä komentorivillä: lopettaa LINE-komennon, ottaa oletuksen. |
| Tab, Shift+Tab | Siirtyy seuraavaan tai edelliseen tartuntapisteeseen kohdistimen lähellä, lähimmästä alkaen. |
| G | Käy läpi valittujen kohteiden otteet. |
| D | Kuvailee piirustuksen: montako kohdetta, minkälaisia, kuinka isoja ja mikä on valittu. |
| W | Kertoo, missä kohdistin on ja kuinka kaukana se on edellisestä pisteestä. |
| N | Kertoo, mitä kohdistimen lähellä on, lähimmästä alkaen, etäisyys ja puoli mukaan lukien. |
| S | Kuvailee valitut kohteet. |
| R | Toistaa viimeisen asian uudelleen. |
| V | Ääni päälle tai pois. |
| / | Siirtyy komentoriville. |
| ? | Luettelee nämä näppäimet. |

Näppäimillä liikkuessa kerrotaan, mihin kohtaan päädyit. Kun komento odottaa pistettä, kerrotaan myös, kuinka kaukana ja mihin suuntaan olet edellisestä pisteestä, esimerkiksi "2400 edellisestä pisteestä, oikealle, 0 asteessa".

## Komennot

- {{cmd:ACCESS}} kytkee Saavutettavuuden, tartuntaäänet ja äänen päälle tai pois ja kertoo tilan.
- {{cmd:DESCRIBE}} kertoo, mitä piirustus sisältää.
- {{cmd:WHEREAMI}} kertoo, missä kohdistin on.
- {{cmd:NEARBY}} kertoo, mitä kohdistimen lähellä on.
- {{cmd:SAYSEL}} kertoo, mikä on valittu, yksi lause kutakin kohdetta kohden.
- {{cmd:VOICE}} kytkee puhutut komennot päälle tai pois.

Nämä viisi lukevat piirustusta ja tulostavat vastauksen; ne eivät muuta mitään.

## Äänet tartunnoille ja otteille

Kytke **Tartunta- ja otesäänet** päälle Asetuksissa. Jokaisella tartuntatyypillä on oma sävelkorkeus ja äänensä, jotta erotat päätepisteen, keskikohdan, keskipisteen, leikkauspisteen ja muut, ja otteella on kaksoisnaksahdus. Ääni panoroituu vasemmalle tai oikealle kohdistimen mukaan ruudulla. Äänet tuotetaan tietokoneellasi; mitään ei ladata.

## Komennot äänellä

Kytke **Komennot äänellä** päälle Asetuksissa. Sano komennon nimi ("line", "circle", "move") ja sano numerot niin kuin ne luettaisiin: "piste kolmesataa pilkku neljäsataa", "etäisyys kaksitoistasataa", "kulma neljäkymmentäviisi". "Enter", "cancel", "undo" ja "redo" tekevät sen, mitä sanovat. Kuultu teksti toistetaan takaisin, ja lause, joka ei ole komento, ilmoitetaan eikä arvata.

**Missä puhe tunnistetaan.** CadCraftilla ei ole omaa puhepalvelua, eikä se lähetä ääntä minnekään. Se pyytää selainta tunnistamaan puheen tällä tietokoneella. Jos selain pystyy siihen, valinta on **Tällä tietokoneella**, eikä ääni poistu koneelta. Jos ei pysty, ääni pysyy pois päältä, ellet valitse **Selaimen verkkopalvelu**, mikä antaa selaimen lähettää äänen sen valmistajan puhepalveluun. Asetukset kertoo, mikä koskee sinua, ennen kuin päätät.

## Mitä se ei vielä tee

- Vain CadCraftilla on Saavutettavuus. Muut kahdeksan sovellusta seuraavat samoilla näppäimillä ja äänillä.
- Piirustuksen teksti (merkintä, lohkon nimi) luetaan sellaisenaan kuten se on kirjoitettu; sitä ei koskaan oteta ohjeeksi.
- Sitä on kokeiltu synteettisillä tarkistuksilla ja selaintesteillä; käsin tehtävät tarkistukset NVDA:lla, VoiceOverilla ja sokean tai heikkonäköisen testaajan kanssa ovat vielä tulossa. Jos kokeilet sitä, kerro meille, mitä siitä puuttuu.
