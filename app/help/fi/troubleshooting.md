---
title: Vianmääritys
summary: CadCraftin näyttämät viestit ja ongelmat, joita saatat kohdata, kunkin syy ja korjaus.
keywords: ongelma, virhe, ei toimi, viesti, ei voi avata, tuntematon komento, ei tapahdu mitään, jumissa, näppäimet eivät toimi, tyhjä, puuttuva, korjaus
from: 8299b222
---

## Tiedostojen avaaminen

| Viesti tai oire | Syy | Korjaus |
|---|---|---|
| "CadCraft avaa DWG- ja DXF-piirustuksia. "…" ei ole kumpaakaan." | Tiedosto ei ole `.dwg` eikä `.dxf`. | Avaa itse piirustustiedosto. PDF voidaan tuoda (Avaa kysyy: tuodaanko vai liitetäänkö, katso [PDF-taustakuvat](topic:pdf-underlay)); kuvat lisätään komennolla `IMAGEATTACH`. |
| "Tämä binäärinen DXF päättyy kesken kohdetta: tiedosto on katkaistu tai vaurioitunut." | Binäärinen DXF loppuu ennen loppuaan. | Kirjoita RECOVER, jotta luettavissa oleva osa avautuu, tai pyydä tiedosto uudelleen. |
| "Tämä tiedosto ei ole luettava DXF (virheellinen ryhmäkoodi rivillä …)." | DXF on vaurioitunut tai ei ole oikeasti DXF. | Pyydä tiedosto uudelleen tai pyydä DWG. |
| "Tätä piirustusta ei voitu lukea. Se saattaa olla vaurioitunut tai tallennettu versiossa, jota lukija ei vielä käsittele (…)." | DWG-lukija ei pystynyt lukemaan sitä. | Pyydä DWG, joka on tallennettu vanhempaan versioon, tai DXF. |
| "Tämä piirustus on AutoCAD R11 / R12 -versiosta (DWG AC1009), joka on vanhempi kuin CadCraft lukee …" | DWG-tiedostot versiosta 12 ja sitä vanhemmat käyttävät muotoa, jota CadCraft ei lue. | Tallenna se ohjelmassa, joka sen teki, DXF-muodossa (mikä tahansa versio) tai uudempana DWG-tiedostona, ja avaa se. CadCraftin oma Tallenna nimellä tarjoaa DXF R12 -muodon ohjelmille, jotka tarvitsevat sen vanhan muodon. |
| "Ei voitu avata …" ja verkkoviesti ensimmäisessä DWG-tiedostossa | DWG-lukijaa ei voitu ladata: olet offline-tilassa, eikä CadCraft ole tallennettu offline-käyttöön, tai yhteys katkesi. | Siirry verkkoon ja yritä uudelleen, tai avaa DXF. Napsauta {{ui:Tallenna offline-käyttöön}} ja odota, kunnes näkyy "Offline-valmis", jotta DWG-tiedostot avautuvat offline seuraavalla kerralla. Katso [Työskentely offline-tilassa](common:offline). |
| Offline-painike sanoo "Ei voitu tallentaa" | Osa tiedostoista ei latautunut. | Tarkista yhteys ja napsauta painiketta uudelleen. |
| Offline-painike sanoo "Offline ei käytettävissä" | Yksityiset ikkunat ja jotkin hallitut tietokoneet eivät voi säilyttää offline-kopiota. | Käytä tavallista ikkunaa tai pysy verkossa. |
| CadCraft ei avaudu ilman yhteyttä | Sitä ei ole tallennettu offline-käyttöön tässä selaimessa, tai selain tyhjensi sen. | Kun seuraavan kerran olet verkossa, napsauta {{ui:Tallenna offline-käyttöön}} ja odota, kunnes näkyy "Offline-valmis". |
| Piirustus avautuu, mutta osia puuttuu | CadCraft ei vielä pysty piirtämään joitakin kohteita, tai tiedoston tasot ovat pois päältä tai jäädytettyinä. | Lue vasemman paneelin "Tietoja tiedostosta". Tarkista {{ui:Tasot}}-paneeli. |
| Teksti rivittyy kahdelle riville | CadCraft piirtää tekstin Helvetica-tyyppisellä fontilla, joka on leveämpi kuin jotkin CAD-fontit. | Lyhennä tekstiä Ominaisuudet-kohdassa tai hyväksy ylimääräinen rivi. |
| Ympyrä näkyy ellipsinä, tai peilattu teksti on luettavissa oikein päin | Kohde piirrettiin kallistetulle tasolle tai nähtiin alhaalta päin ohjelmassa, joka tiedoston teki. CadCraft näyttää kohteen ylhäältä päin, kuten kyseisen ohjelman pohjakuva; teksti pidetään luettavana. | Ei korjattavaa. Jos haluat nähdä sen toisen ohjelman tavalla, pyydä piirustus litistettynä tai kohteet piirrettyinä ylhäältä. |
| Lohko, ympyrä tai mitoitus on muualla kuin tiedoston tehneessä ohjelmassa | CadCraft lukee väärin piirustustapauksen. | Kerro meille Discordissa ja liitä tiedosto, jos voit jakaa sen. |

## Komentorivi

| Viesti tai oire | Syy | Korjaus |
|---|---|---|
| "Tuntematon komento "…". Kirjoita HELP nähdäksesi luettelon." | Tällä nimellä ei ole komentoa tai lyhennettä. | Kirjoita `HELP` tai katso [Komentoviite](topic:commands). Jotkin tutut komennot eivät ole [vielä toteutettuja](topic:not-built-yet). |
| "Ei tällaista komentoa" komentorivin vieressä kirjoittaessa | Kirjoittamasi ei vastaa vielä mitään. | Jatka kirjoittamista tai tarkista oikeinkirjoitus. |
| "Vaaditaan piste tai valinnan avainsana." | Kirjoittamasi ei ole piste eikä valinta. | Tarkista muoto: `x,y`, `@dx,dy`, `@d<a` tai yksi luku. Katso [Koordinaattien ja etäisyyksien syöttö](topic:coordinate-entry). |
| "Vaatii positiivisen luvun tai kaksi pistettä." | Etäisyys oli negatiivinen tai ei luku. | Kirjoita positiivinen luku tai napsauta kaksi pistettä. |
| "Vaatii kulman asteina tai kaksi pistettä." | Kulma ei ollut luku. | Kirjoita asteet pelkkänä lukuna. |
| "Vaatii luvun." | Odotettiin lukua. | Kirjoita pelkkiä numeroita. |
| "Virheellinen valinnan avainsana." | Kirjaimet eivät vastaa mitään valintaa. | Kirjoita hakasulkeissa näkyvät isot kirjaimet. |
| `*Cancel*` | Painoit {{key:Esc}}, tai painoit {{key:Enter}} kohdassa, jossa piste vaadittiin. | Aloita komento uudelleen. |
| Kirjoittaminen ei siirry komentoriville | Paneelin tai valintaikkunan ruudussa on kohdistin. | Paina {{key:Enter}} tai {{key:Esc}}, tai napsauta piirustusta. |
| Komento käyttää kohteita, joita et valinnut | Ne valittiin ennen kuin aloitit komennon. | Paina {{key:Esc}} ennen komentoa. |
| Viiva meni odottamattomaan paikkaan | `x,y` on absoluuttinen. | Käytä `@dx,dy` suhteellisille pisteille. |
| "Viimeistele tai peruuta nykyinen komento ensin (Esc)." | Painoit {{key:Mod+S}}, kun komento oli käynnissä. | Paina {{key:Esc}} ja tallenna sitten. |
| "Tallennus DWG-muodossa (AutoCAD 2000) ei onnistu: … Kokeile Tallenna nimellä, sitten DXF." | Piirustuksessa olevaa jotakin ei voitu kirjoittaa DWG-muodossa. | Paina {{key:Mod+Shift+S}}, valitse {{ui:DXF R12}} ja napsauta {{ui:Tallenna}}. |
| "Ei tallennettu." | Suljit {{ui:Tallenna kopio nimellä}} -valintaikkunan painamalla {{ui:Peruuta}} tai {{key:Esc}}. | Paina {{key:Mod+Shift+S}} uudelleen ja napsauta {{ui:Tallenna}}. |

## Muokkaus

| Viesti tai oire | Syy | Korjaus |
|---|---|---|
| Kohdetta ei voi valita | Sen taso on lukittu, pois päältä tai jäädytetty; tai olet arkilla ja kohde on näkymäruudun sisällä oleva malli. | Avaa tason lukitus tai siirry {{ui:Malli}}-välilehdelle. |
| "Siinä ei löytynyt mitään." | Napsautuksen alla ei ole kohdetta. | Zoomaa lähemmäs ja napsauta itse viivaa. |
| "Siinä kohdassa mikään ei leikkaa tuota kohdetta." | {{cmd:TRIM}} ei löytänyt kohdetta, joka leikkaisi valitsemasi osan. | Tarkista, että leikkausviiva todella leikkaa sen. |
| "Tätä kohdetta ei voi typistää." | Typistys toimii viivoille, kaarille, ympyröille ja viivaketjuille. | Hajota lohkot ensin tai poista kohde ja piirrä se uudelleen. |
| "Tuossa suunnassa ei ole rajaa." | {{cmd:EXTEND}} ei löytänyt mitään, mihin ulottua. | Valitse lähempänä sitä päätä, jonka pitäisi kasvaa. |
| "Tätä kohdetta ei voi siirtää." | Siirtymä toimii viivoille, kaarille, ympyröille ja viivaketjuille. | Hajota se ensin tai piirrä yhdensuuntainen viiva. |
| "Siirtymä ei onnistu niin kauas." | Siirtymä kääntäisi muodon ylösalaisin. | Käytä pienempää etäisyyttä. |
| "Säde on liian suuri." tai "Etäisyys on liian suuri." | Pyöristys tai viiste menisi viivan pään ohi. | Aseta pienempi säde `R`:llä tai pienemmät etäisyydet `D`:llä. |
| "Vain avoimen viivaketjun ensimmäinen tai viimeinen osa voidaan katkaista takaisin." | Kulma leikkaisi viivaketjun keskelle. | Valitse kaksi viereistä viivaketjun osaa tai käytä `P`:tä jokaiselle kulmalle. |
| "Valitse toinen, eri viiva." | Toinen valinta oli sama viiva tai ei viiva. | Valitse toinen viiva. |
| "Vain viivaketjut, lohkoviittaukset ja mitoitukset hajoavat." | Valinnassa ei ollut hajotettavaa. | Valitse viivaketju, lohkoviittaus tai mitoitus. |
| "Tämä on nykyinen taso. Tee ensin toinen taso nykyiseksi." | Yritit kytkeä pois päältä nykyisen tason. | Napsauta toisen tason nimeä ja kytke sitten tämä pois päältä. |
| "Tason nimellä … on jo olemassa." | Tasojen nimien on oltava yksilöllisiä. | Valitse toinen nimi. |
| "Kumottavaa ei ole." | Kumottavaa ei ole enää, tai avasit tai aloitit piirustuksen, mikä tyhjentää historian. | — |

## Mitoitukset ja lohkot

| Viesti tai oire | Syy | Korjaus |
|---|---|---|
| Mitoitusteksti ja nuolet ovat pieniä tai valtavia | Koot ovat piirustusyksiköissä; kokonaismittakaava ei sovi piirustukseen. | Aseta {{cmd:DIMSCALE}} tulostusmittakaavaan; katso [Mitoituskokojen asettaminen](topic:dimension-settings). |
| "Valitse piste kulman sisältä, jonka haluat mitata." | Kulmamitoituksen sijainti on jalalla. | Napsauta kulman sisälle. |
| "Nuo viivat ovat yhdensuuntaiset." | Yhdensuuntaisten viivojen välillä ei ole kulmaa. | Valitse kaksi viivaa, jotka kohtaavat. |
| "Valitse vaaka-/pystymitoitus tai tasattu mitoitus." | {{cmd:DIMCONTINUE}} tai {{cmd:DIMBASELINE}} tarvitsee lähtökohdan. | Valitse vaaka- tai pystymitoitus tai tasattu mitoitus. |
| "Tässä piirustuksessa ei ole vielä lohkoja: F lisää yhden tiedostosta, L kirjastosta …" | Piirustuksessa ei ole omia lohkoja. | Kirjoita `F` tai `L`, tai tee lohko komennolla {{cmd:BLOCK}}. |
| "Lohkoa nimeltä "…" ei ole." | Nimi on väärin. | Viesti luettelee olemassa olevat lohkot. |
| "Lohkon nimi ei voi alkaa merkillä * eikä käyttää …" ja merkkiluettelo | Nimessä on merkki, jota lohkot eivät voi käyttää. | Käytä kirjaimia, numeroita, `-` ja `_`. |
| "Lohko ei voi sisältää itseään." | Valinnassa on viittaus lohkoon, jota ollaan tekemässä. | Jätä se viittaus pois. |
| "Ei valittuja kohteita; mitään ei tehty." | Painoit {{key:Enter}} ennen valintaa. | Suorita {{cmd:BLOCK}} uudelleen ja valitse kohteet. |

## Arkit ja plottaus

| Viesti tai oire | Syy | Korjaus |
|---|---|---|
| "Näkymäruudut sijoitetaan asetteluun. Avaa ensin asetteluvälilehti (tai tee sellainen komennolla LAYOUT)." | {{cmd:MVIEW}} välilehdellä {{ui:Malli}}. | Napsauta ensin arkkivälilehteä. |
| "Avaa asettelu näkymäruudun kanssa ensin." | {{cmd:VPVIEW}} välilehdellä {{ui:Malli}}. | Napsauta ensin arkkivälilehteä. |
| Näkymäruudun mittakaava näyttää kymmenen kertaa väärältä | Piirustuksen yksiköt ovat väärin. | Aseta {{ui:Yksiköt}} kohdassa {{ui:Nykyiset asetukset}}. |
| "Plottaamista ei vielä ole." | Malli on tyhjä. | Piirrä jotain tai avaa piirustus. |
| "Valitse plottauksen ikkuna." | {{ui:Ikkuna…}} on valittu, mutta ikkunaa ei ole valittu. | Napsauta {{ui:Valitse}} ja valitse kaksi kulmaa. |
| "… suurempi kuin paperi: reunat leikkautuvat pois." | Alue ei mahdu tuohon mittakaavaan. | Valitse pienempi mittakaava, suurempi paperi tai {{ui:Sovita paperille}}. |
| "Selain esti uuden välilehden, joten PDF ladattiin sen sijaan." | Ponnahdusikkunat on estetty sivustolle. | Avaa ladattu PDF tai salli ponnahdusikkunat sivustolle. |
| Merkit tulostuvat "?"-merkkeinä | PDF:n fonteissa ei ole kirjainta niille (harvinaiset ideogrammit, hindi ja muut kirjoitukset, jotka vaativat monimutkaista muotoilua …), tai suurempaa fonttia ei voitu hakea (offline). Eurooppalaiset kirjoitukset, kyrillinen, kreikkalainen, heprea, arabia, persia, urdu, thai, kiina, japani ja korea tulostuvat sellaisinaan. | Arabia-, thai-, kiina-, japani- tai korea-kirjoituksille tulosta uudelleen yhteyden kanssa. Muita kirjoituksia ei ole vielä toteutettu. |
| Apuviivat näkyvät PDF-tiedostossa | Niiden taso tulostuu. | Napsauta tason tulostuspainiketta. |
| Kaikki viivat ovat yhtä paksuja | Niiden viivanpaksuus on {{ui:Oletus}}, joten ne tulostuvat valintaikkunan kynän leveydellä. | Anna tasoille tai kohteille {{ui:Viivanpaksuus}} oikeasta paneelista tai valitse {{ui:Viivanpaksuus}} valintaikkunassa. Nähdäksesi viivanpaksuudet näytöllä, paina tilarivin {{ui:LWT}}-painiketta. |

## Näppäimet ja näyttö

| Oire | Syy | Korjaus |
|---|---|---|
| F3, F7 tai F8 muuttaa äänenvoimakkuutta tai avaa Mission Controlin | Macin toimintonäppäimet. | Pidä **fn** painettuna tai käytä tilarivin painikkeita. Katso [Näppäimet, hiiret ja kosketuslevyt](common:keys). |
| F7 kysyy kursoriselauksesta | Firefoxin oma F7-toiminto. | Valitse Ei; käytä {{ui:Ruudukko}}-painiketta. |
| {{key:Mod+N}} avasi selainikkunan | Selain varaa tämän näppäimen. | Napsauta {{ui:Uusi}} tai kirjoita `NEW`. |
| {{key:Mod+A}} valitsi komentorivin tekstin | Komentorivillä oli kohdistin. | Napsauta ensin kohdetta, tai kirjoita `ALL` kehotteessa `Select objects`. |
| {{key:Delete}} ei poista | Komentorivillä oli kohdistin. | Kirjoita `E` ja paina {{key:Enter}}. |
| Oikea napsautus ei tee mitään Macin kosketuslevyllä | Control-napsautus voi kelvata tavalliseksi napsautukseksi. | Napsauta kahdella sormella. |
| Mikään ei panoroidu kosketuslevyllä | Keskipainiketta ei ole, eikä välilyönti panoroi. | Pyyhkäise kahdella sormella: 2D-näkymä panoroituu (nipistys ja hiiren rulla zoomaavat). Tai vedä oikea painike pohjassa. |
| Ensimmäinen {{key:Esc}} poisti koko näytön tilan | Selain käyttää Esc-näppäintä koko näytön tilasta poistumiseen. | Paina {{key:Esc}} uudelleen peruuttaaksesi komennon. |
| {{key:F1}} ei tee mitään Macilla | F1 on kirkkausnäppäin. | Pidä **fn** painettuna tai napsauta {{ui:Ohje}}. |
| Kirjoittaminen menee ohjeen hakukenttään | Ohjepaneelissa on kohdistin. | Napsauta piirustusta. |
| Piirustus tyhjeni | Zoomasit kauas. | Napsauta {{ui:Laajuus}} tai kaksoisnapsauta rullaa. |
| "Poistu sivustolta?" välilehteä suljettaessa | Tallentamattomia muutoksia. | Jää paikalleen, tallenna painamalla {{key:Mod+S}} ja sulje sitten. |
