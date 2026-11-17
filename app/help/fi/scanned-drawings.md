---
title: Skannatut piirustukset ja jäljitys
summary: Tuo skannattu arkki, skaalaa ja suorista se, siivoa, poista siitä osia, tartu sen viivoihin ja jäljitä se viivoiksi ja kaariksi.
keywords: skannaus, skannattu piirustus, rasteri, tiff, jpeg, png, mittakaava, kohdistus, suoristus, pilkkujen poisto, kynnysarvo, mustavalkoinen, rajaus, poisto, jäljitys, vektorointi, tartunta, kaaret, viivoitus, paperipiirustukset, vanhat piirustukset, scanattach, scantrace
from: 36227e5b
---

## Paperiarkista piirustuskohteiksi

Skannattu piirustus on kuva. CadCraft säilyttää antamasi kuvan eikä koskaan muuta sitä: jokainen puhdistusvaihe luo uuden kuvan, yhden kumoamisvaiheen kerrallaan, ja {{cmd:SCANINFO}} luettelee alkuperäisen tiedoston ja siitä lähtien tehdyt vaiheet. Mitään ei lähetetä minnekään, eikä mitään arvata koulutetulla mallilla: puhdistus ja jäljitys ovat tavallista kuvankäsittelyä, ja ne ajetaan omalla tietokoneellasi.

1. **Lisää se.** {{cmd:SCANATTACH}} lukee PNG-, JPEG- tai TIFF-tiedoston (yksi sivu tai monisivuisen tiedoston kaikki sivut) tai PDF-sivun, joka on kuva. Se kysyy sivun, vasemman alakulman ja leveyden. PDF-sivulle se kysyy lisäksi, kuinka monta pikseliä tuumalla sivu piirretään.
2. **Skaalaa se.** {{cmd:SCANSCALE}}: valitse skannauksesta kaksi pistettä ja kirjoita niiden todellinen etäisyys. Arkki skaalataan ensimmäisen pisteen suhteen.
3. **Kohdista se.** {{cmd:SCANALIGN}}: valitse skannauksesta kaksi pistettä ja ne kohdat, joihin ne kuuluvat; arkki siirtyy ja kääntyy sopiakseen, ja se skaalautuu myös, ellet vastaa No.
4. **Suorista se.** {{cmd:SCANDESKEW}} mittaa kulman, jossa arkin pitkät viivat ovat, ja näyttää sen sekä varmuuden. Hyväksy se tai kirjoita oma, ja arkki käännetään. Arkki, jossa on vähän pitkiä viivoja, saa varoituksen: tarkista kulma ennen hyväksymistä.
5. **Puhdista se.** {{cmd:SCANCLEAN}} muuttaa arkin mustavalkoiseksi (Auto tasoittaa paperin ensin; Adaptive seuraa paperin muutoksia tarkemmin; Level on yksi luku koko arkille) ja poistaa pilkut asettamasi kokoon asti.
6. **Rajaa ja poista.** {{cmd:SCANCROP}} säilyttää ikkunan. {{cmd:SCANERASE}} poistaa suorakulmion, monikulmion tai lassovalinnan (paina ja vedä): leimat, merkinnät, kahvirenkaan.

Puhdistettu kuva on se, minkä tallennettu DWG pitää (IMAGE ja sen IMAGEDEF, kuvatiedosto piirustuksen vieressä kuten mikä tahansa kuva).

## Tartu skannauksen viivoihin

Kun {{cmd:RASTERSNAP}} on päällä (oletus), kohteiden tartunta löytää myös mustavalkoisen skannauksen viivat: viivojen päät, keskikohdat, kulmat ja risteykset, näytettyinä tavanomaisilla tartuntamerkeillä. Osoittimen alla oleva osa arkista jäljitetään, kun liikutat sitä; zoomaa niin lähelle, että yksi pikseli on muutama näytön pikseli. Viiva, joka on pidempi kuin jäljitettävä osa, seurataan sen päihin asti.

## Jäljitys

{{cmd:SCANTRACE}} muuttaa arkin viivat viivoiksi ja kaariksi uudelle tasolle (SCAN-TRACE), yhtenä kumoamisvaiheena, skannaus yhä niiden alla. Asetat:

- **Toleranssi:** kuinka kaukana jäljitetty viiva tai kaari saa olla skannauksen viivoista piirustusyksiköissä (raportti antaa myös pikselit). Tiukka toleranssi seuraa jokaista heittoa; löysä tuottaa vähemmän ja suoramman palasia.
- **Ikkuna:** arkin kulma tai koko arkki.
- **Kaaret:** pois päältä tekee vain viivoja.
- **Jäännökset:** se, minkä jäljitys jätti koskematta, piirretään laatikoina tasolle, jonka voit sammuttaa, tai ei piirretä.

Jäljitys löytää kunkin vedon keskikohdan, seuraa sitä, sovittaa siihen suoria viivoja ja ympyräkaaria, yhdistää juoksut, jotka katkesivat, kun toinen viiva ristesi, tekee lähes vaakasuorista ja lähes pystysuorista viivoista täysin vaakasuoria ja pystysuoria ja sulkee kulmat.

**Teksti ja viivoitus pysyvät rasterina:** kirjainkokoiset palat jätetään sivuun, ja lyhyiden rinnakkaisten viivojen nipun tulkitaan viivoitukseksi ja jätetään sivuun.

Kun se valmistuu, se kertoo, kuinka monta viivaa ja kaarta se teki, toleranssin ja kuinka monta palaa se jätti rasteriksi. **Tämä on se, mitä pikselit antoivat tuolla toleranssilla, eikä väite siitä, että tulos on oikein.** Vertaa sitä arkkiin: jäljitys voi ohittaa himmeän viivan, yhdistää kaksi hyvin lähellä olevaa viivaa tai piirtää viivan, jossa on vain tahra. Puhdista skannaus ensin (suoristettu, mustavalkoinen, pilkut poissa), niin tulos on paljon parempi.

## Mitä se ei lue

TIFF-tiedostot, jotka on tallennettu laattoina, BigTIFF, TIFF, jossa on JPEG- tai deflate-pakkaus, Group 3 -faksikoodaus ja erillisiin tasoihin tallennetut värit hylätään viestillä; tallenna ne uudelleen raitoina LZW-, PackBits-, Group 4- tai ilman pakkausta. Lomitetut PNG-tiedostot hylätään myös. Yli 128 MB:n tai 100 miljoonan pikselin tiedostot hylätään, ja jäljitysikkuna voi sisältää enintään 64 miljoonaa pikseliä.
