---
title: Piirrä teksti omilla SHX-fonteilla
summary: Anna CadCraftille kansio SHX-fontteja (tai valitse tiedostot), ja tekstityylit, jotka nimeävät ne, piirretään niillä näytöllä sekä plotissa tai PDF:ssä, tyylin korkeudella, leveyskertoimella ja kallistuksella.
keywords: shx, fontit, fontti, muotofontti, iso fontti, bigfont, unifont, perintö, persia, farsi, arabia, tekstityyli, puuttuva fontti, fontti korvattu, SHXFONTS, kansio, käännä, visuaalinen järjestys, simplex, isocp
from: 14b0a4ab
---

Piirustukset muista ohjelmista nimeävät usein tekstityyleissään **SHX-fontteja**, eikä DWG-tiedosto kanna niitä mukanaan. Ilman fonttia CadCraft piirtää tuon tekstin omalla kasvollaan, mikä on kunnossa tavalliselle latinankieliselle tekstille, mutta ei vanhoille fonteille, jotka kuvaavat tavallisia merkkikoodeja muille kirjainmuodoille, kuten vanhat persialaiset merkintäfontit.

Anna CadCraftille fontit, niin se piirtää tekstin niillä.

## Lataa fonttisi

Kirjoita {{cmd:SHXFONTS}} (`SHX`) ja valitse:

- {{ui:Kansio}} (CadCraft Studio): valitse kansio. Jokainen `.shx`-tiedosto siinä luetaan heti ja uudelleen joka kerta, kun CadCraft käynnistyy.
- {{ui:Tiedostot}} (selain): valitse yksi tai useampi `.shx`-tiedosto. Ne säilytetään tässä selaimessa eikä niitä koskaan lähetetä mihinkään.
- {{ui:Luettele}}: ladatut fontit ja ne, jotka avoin piirustus nimeää mutta joita et ole ladannut.
- {{ui:Poista}} ja {{ui:Tyhjennä}}: unohda yksi fontti tai kaikki.

CadCraft ei voi sisältää kolmannen osapuolen fontteja, joten se ei koskaan toimita niitä mukanaan: ne tulevat sinulta. Piirustus vain nimeää fonttinsa eikä säilytä niistä kopiota.

## Mitä tapahtuu

Tekstityylin fonttinimi vastaa ladattua fonttia nimellään, välittämättä kirjainkoosta, kansiosta ja `.shx`-päätteestä (`SIMPLEX.SHX` löytää `simplex`). Tällaisessa tyylissä oleva teksti piirretään viivoina näytöllä, plotissa ja PDF:ssä, tekstin omalla paikalla, korkeudella, kierrolla, leveyskertoimella ja kallistuskulmalla. Sen leveys on fontin oma, joten {{ui:Keskipiste}}- ja {{ui:Oikea}}-tasaus, rivitys ja valinta vastaavat sitä, mitä näet. Tyyli, jonka fonttia ei ole ladattu, säilyttää sisäänrakennetun kasvonsa, ja kun avaat piirustuksen, joka nimeää fontteja, joita et ole ladannut, komentorivi kertoo siitä.

Standard-tyyli lasketaan myös: piirustus, jonka Standard-tyyli nimeää oman fonttinsa, säilyttää sen.

## Fontit jo visuaalisessa järjestyksessä

Monet vanhat persialaiset ja arabialaiset SHX-fontit sisältävät kirjaimet jo näytölle muotoiltuina ja piirrettyinä vasemmalta oikealle, joten loogisessa järjestyksessä kirjoitettu teksti tulee takaperin. Kirjoita {{cmd:SHXFONTS}}, valitse {{ui:Käännä}} ja nimeä fontti: sen teksti asetellaan viimeinen kirjain ensin. Aja se uudelleen kumotaksesi. Kytkin kuuluu fontille, säilyy tässä selaimessa eikä tallennu piirustukseen.

## Mitä ei vielä kata

- Teksti, jossa on sisäisiä muotoilukoodeja (värejä, pinoja MTEXT-tekstissä), säilyy sisäänrakennetussa kasvossa.
- Isot fontit (kaksitavuiset) täydentävät koodit, joita pääfontilta puuttuu, mutta teksti itä-aasialaisella koodisivulla, jonka CadCraft on jo muuntanut Unicode-muotoon, ei muunnu takaisin fontin kaksitavuisiksi koodeiksi.
- Fonttilukija seuraa julkaistua formaatin kuvausta ja on testattu CadCraftille tehdyillä fonteilla. Jos jokin omasi piirtyy väärin, lähetä meille fontti ja piirustus.
