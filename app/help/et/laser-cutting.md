---
title: Saada joonis laserisse
summary: Ava Laser-paneel, vali, mida iga kiht teeb (lõika, kriipsuta, graveeri, täida, pilt), vaata pea liikumisi eelvaates, salvesta GRBL laserrežiimi G-kood või saada see brauserist pärast töö raamimist.
keywords: laser, laserlõikur, laser-graveerija, GRBL, G-kood, gcode, graveeri, täida, dither, pildi graveerimine, kriipsuta, lõika, Web Serial, raami töö, võimsus, kiirus, läbid, LASER, LASERCUT, CNC
from: 72b56db0
---

{{ui:Laser}} paneel muudab joonise kihid programmiks laserile, mis töötab GRBL-iga (enamik hobi- ja väikeettevõtete dioodi- ja CO2-juhtseadmeid). Trüki `LASER` (või `LASERCUT`) ja vajuta {{key:Enter}}, või vali rühmas {{ui:View}} menüüst {{ui:More}} käsk {{ui:Laser…}}. Lintstiilides on see menüüs {{ui:File}} ja {{ui:Plot}} kõrval. Paneel avaneb joonise peale ja jääb lahti, kui joonistad: eelvaade järgib iga muudatust.

:::warning
Proovi iga seadet esmalt jäätmematerjalil, kanna oma laserile sobivaid kaitseprille, hoia kaas kinni seal, kus see on, ja ära jäta töötavat laserit järelevalveta. Kihi algsed numbrid on kohatäiteid, mitte soovitusi mis tahes materjali jaoks.
:::

## Mida saadetakse

Paneel loeb mudelit (mitte lehti), kihtidel, mis on sisse lülitatud ja sulatatud:

- Jooned, kaared, ringid, murdjooned (kaarelõigud jäävad kaareks), ellipsid ja splainid. Kuju, mis lõpeb seal, kus algab, loetakse suletuks.
- Plokid lõhutakse osadeks: kihil 0 olev objekt ploki sees läheb kaasa ploki viite kihi väärtusega.
- Viirutus saadab oma piiri, nii et viirutatud logo kihil **Täida** on täidetud.
- Pilt (`IMAGEATTACH`) graveeritakse kihil, mis on seatud **Graveeri pilt** väärtusele, kui see on risti (mitte pööratud ega kaldu) ja selle fail on avatud CadCraftis.
- Teksti, mõõtmeid, viiteid, punkte ja konstruktsioonijooni ei saadeta; paneel ütleb, mitu neist jäeti välja. Teksti põletamiseks joonista tähed kujunditena või viirutage need.

Suurused lähevad millimeetrites joonise ühikutest (`UNITS`): tollides joonis korrutatakse 25,4-ga. Joonis, millel ühikuid pole määratud, saadetakse nii, et üks ühik on üks millimeeter. Märgi {{ui:Only the selected objects}}, et saata osa joonisest.

## Vali, mida iga kiht teeb

Iga kiht, millel on midagi, on rida. {{ui:Does}} seab selle väärtuseks **Lõika**, **Kriipsuta**, **Graveeri jooned**, **Täida kujundid**, **Graveeri pilt** või **Ei saadeta**, koos {{ui:Power %}}, {{ui:Speed mm/min}} ja {{ui:Passes}} arvuga. Iga muudatus on üks võtmise samm ja salvestatakse joonisesse: DWG (iga versioon, mille CadCraft salvestab) ja DXF säilitavad seaded, nii et joonis avaneb järgmisel korral nendega. Teised programmid avavad faili nagu varem; need näevad ühte kasutamata plokki nimega CADCRAFT_LASER (selle kustutamine seal eemaldab seaded).

- **Täida** põletab suletud kujundite sisemuse joontega, mis on {{ui:Line spacing}} kaugusel, {{ui:Angle}} nurga all, kahes suunas või ühes, koos ülelõikega, nii et pea on kiiruses, kui laser sisse lülitub; ristviirutus lisab teise läbi 90° nurga all. Kuju, millel on auk, jääb augu kohalt avatuks.
- **Graveeri pilt** muudab pildi punktideks (Floyd–Steinberg, Atkinson, järjestatud või lihtsalt must-valge künnisega) või koos *Halltoonidega* muutuva võimsusega.
- Järjekord: esmalt pildid ja täited, seejärel joonte graveerimine, siis kriipsud, seejärel lõiked, nii et väljalõigatud detail ei liigu enne graveerimist. Ühe kihi sees käivad teed **seest-esimesena** (auk enne plaati, mille sees ta on), lähimat järgmisena.

## Eelvaade, seejärel salvesta

Eelvaade joonistab, mida pea teeb: põletavad jooned värviga, kiired liikumised hallina ning rohelise kasti kõige ümber, mis põleb. Selle all on suurus, põletuse pikkus ja ajahinnang (ilma kiirenduseta; päris masin võtab kauem). {{ui:Save G-code…}} kirjutab GRBL laserrežiimi G-koodi: `$32=1`, `M4` (või `M3`) koos S-väärtustega, `G0` ja `G1` liigutused, lõpus `M5`. X0 Y0 on töö alumine vasak nurk, kui sa ei vali joonise algpunkti: sea oma masina töönull sinna.

## Saada brauserist

Chrome'is ja Edge'is küsib {{ui:Connect…}} laseri USB-porti valimist. Miski ei ühendu ega saadeta enne, kui vajutad nuppu. Vajuta esmalt {{ui:Frame the job}}: pea joonistab töö kasti laseriga **välja lülitatult** (või pointeri jaoks seatud madala võimsusega), nii et näed, kuhu see põleb. Alles siis aktiveerub {{ui:Send job}}, ja see lülitub uuesti välja, kui midagi muudad. {{ui:Pause}} peatab pea, {{ui:Stop}} peatab selle samuti, lähtestab juhtseadme (laser lülitub välja) ja saadab `M5`. Kus Web Serial puudub (Firefox, Safari ja CadCraft Studio, millel Web Serial veel pole), pakub paneel ainult salvestamist: salvesta G-kood ja saada see oma laseri enda programmiga.

## Pole veel valmis

Pole veel valmis: teiste juhtseadmete formaadid (Ruida, Marlini laserid, tootjate failid), sillad ja sissejooksud, lõike nihe, materjaliteegid, pöörleva ja Z-telje tugi, kaamera joondamine, tekst kontuuridena.
