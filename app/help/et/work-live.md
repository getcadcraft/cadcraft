---
title: Ühe joonise koostöö Live TeamWorkiga
summary: Mis muutub CadCraftis, kui oled CadCraft Studios Live TeamWorki seansis: teiste inimeste kursorid ja valikud, objektid, mida keegi redigeerib, korraldaja lukud, sinu enda tagasivõtmine ning ühinemine brauserist samas võrgus.
keywords: live, live teamwork, studio live, koos, koostöö, samaaegne redigeerimine, seanss, jaga live, ühine, kursor, hoitud, redigeerimine, lukk, livelock, liveunlock, livehold, kihi hoidmine, ala hoidmine, tagasivõtmine, korraldaja, assistent, sama fail, palju inimesi, aeglane, piirang, kes muutis, viimased muudatused, muudatuste logi
from: 0497d2a3
---

## Mida sa õpid

Mida näed ja mis juhtub sinu muudatustega, kui mitu inimest töötavad samal ajal ühe joonisega. CadCraft Studio alustab Live TeamWorki seansi ja liitub sellega (Jaga live, Ühenda); see lehekülg käsitleb joonist ennast.

## Kõik joonistavad korraga

Joonista ja muuda nagu tavaliselt. Sinu enda muudatused näidatakse kohe, isegi enne, kui teistel need on, ja nende muudatused ilmuvad sinu ekraanile hetk pärast seda, kui nad need teevad. Iga käsk töötab: joonistamine, muutmine, kihid, plokid, lehed, mõõdud, piirangud.

Kaks inimest võivad muuta sama objekti. Kui muudad erinevaid asju, näiteks ühe joone värvi ja otsapunkti, jäävad mõlemad muudatused alles. Kui muudad sama asja, võidab hilisem muudatus.

Ainult sinu jääb: praegune kiht, uute objektide värv ja teksti kõrgus, sinu mõõtmiste sätted, sinu vaade, jagatud ekraan ja UCS. Joonis on jagatud; see, kuidas sina seda vaatad, ei ole.

## Teised inimesed sinu joonisel

- **Kursorid:** iga inimese osuti näidatakse tema nime ja oma värviga ning käsuga, mida ta käivitab. Näed kursoreid inimestelt, kes töötavad ekraanil oleva asja lähedal.
- **Valikud:** see, mille keegi on valinud, on joonistatud tema värviga.
- **Redigeerimisel:** objektil, mille keegi on valinud, on silt nagu „Ana redigeerib“. Sa saad seda ikka veel värvida või liigutada, kuid ei saa seda kustutada, lahti võtta ega uuesti sisestada, kuni nad vabastavad. Valimine ütleb sulle, kellel see on.
- **Kes muutis viimati:** vali üks objekt, mida keegi teine on selles seansis muutnud, ja käsurida ütleb, kes ja mida muudeti („Ben muutis seda viimati: CIRCLE.“). Studio Live-paneel loetleb iga hiljutise muudatuse jaotises {{ui:Viimased muudatused}}. Sellest midagi ei salvestata joonisesse: see kestab seansi kestel.

## Hoia kihti või ala, kui seal töötad

Suurel joonisel, kus on mitu inimest, ütle, milline osa on praegu sinu:

1. Kirjuta `LIVEHOLD` ja vajuta {{key:Enter}}.
2. Vali `L` ja kirjuta kihi nimi (Enter jätab praeguse kihi), või vali `A` ja määra ala kaks nurka.
3. Teiste muudatused sellel kihil või selle ala objektidel võetakse tagasi ning neile öeldakse, et sa seal töötad. Sina näed oma ala kriipsjoonelise raamina; teised näevad seda sinu värvis koos sinu nimega, ja kihid, mida hoiad, on loetletud nende joonise vasakus ülanurgas.
4. `LIVEHOLD`, seejärel `R`, vabastab kõik, mida hoiad. Seansist lahkumine vabastab selle samuti.

Seansis saab hoida igaüks, korraldaja kaasa arvatud; korraldaja lukud kehtivad siiski peal. Hoidmist ei salvestata kunagi faili.

## Kui muudatus võetakse tagasi

Korraldaja joonise koopia kontrollib iga muudatust. Mõned neist ei saa sisse, ja CadCraft võtab need sinu ekraanil tagasi ning ütleb käsureal, miks, näiteks:

- keegi kustutas objekti või kihi või ploki, mida see vajab, just enne sind;
- keegi redigeerib seda objekti või hoiab selle kihti või ala, kus see on;
- korraldaja lukustas selle;
- plokk, mille paigutad, on puhastatud, või kiht, mille kustutad, on veel objekte täis.

## Tagasivõtmine võtab tagasi sinu enda töö

{{key:Mod+Z}} ja {{ui:Undo}} võtavad tagasi sinu viimase käsu tervikuna ning jätavad kõigi teiste töö puutumata. Kui keegi on sama asja hiljem muutnud, ei võeta midagi tagasi ja käsurida ütleb, kes selle muutis. {{key:Mod+Y}} teeb uuesti.

## Lukud (korraldaja)

Korraldaja saab kaitsta objekte või kogu kihti nii, et keegi neid ei muuda, korraldaja kaasa arvatud, kuni need lukust vabastatakse:

1. Vali objektid, seejärel kirjuta `LIVELOCK` ja vajuta {{key:Enter}}. Või kirjuta `LIVELOCK` ilma valikuta ja vali `L`, et lukustada kiht nime järgi: sellele kihile hiljem lisatud objektid lukustatakse samuti.
2. Lukustatud objektid joonistatakse kriipsjoonena ja kõigi ekraanil on silt „Korraldaja lukustatud“.
3. `LIVEUNLOCK` vabastab need samamoodi.

Lukud kuuluvad seansile: need lõpevad, kui see lõpeb, ja neid ei salvestata kunagi faili.

## Liitu sama failiga

Kui avasid just selle faili, mille korraldaja avas (jagatud kaustast või samast koopiast), liitu oma CadCrafti aknast Studios: ava paneel {{ui:Live}} ja kasuta {{ui:Liitu siin}} korraldaja koodiga. Liiguvad ainult muudatused, mis on tehtud pärast seda, kui korraldaja faili avas, nii et suur joonis on kohe valmis. Kui sinu fail on teine, asendab korraldaja joonis selle sinu ekraanil (sinu fail jääb samaks). See töötab ainult siis, kui sinu joonis on pärast avamist muutumata.

## Assistendid live-seansis

Sinu CadCrafti aknaga ühendatud assistent (vt abi tehisintellekti assistentidega töötamise kohta) liitub seansiga oma osalejana, mida kõigile näidatakse nimega „Assistent (läbi <sinu nimi>)“. Korraldaja lubab selle sisse nagu inimese; korraldaja enda assistent liitub kohe. Selle muudatustel on oma tagasivõtmine: sinu {{key:Mod+Z}} võtab tagasi sinu töö ja assistendi tagasivõtmine ainult selle oma. See lahkub seansist, kui katkestad selle ühenduse või lahkud, ning see saab seansis töötada ainult siis, kui sina saad muuta.

## Liitu brauserist

Meeskonnakaaslane, kellel Studiot pole, saab skannida korraldaja koodi all oleva pildi telefoni, tahvelarvuti või arvutiga samas võrgus. CadCraft avaneb brauseris, küsib sinu nime käsureal ja täitub korraldaja joonisega, kui korraldaja su sisse laseb. Kutselink laseb kellelgi liituda teisest võrgust: korraldajal peab olema rakenduse jaoks Team Cloud Plan koht, kõik teised liituvad tasuta ning link töötab ainult siis, kui korraldaja seanss on avatud.

## Palju inimesi ühel joonisel

Iga muudatus läheb kõigile seansis, nii et mida rohkem inimesi, seda kauem jõuab iga muudatus igaühele, ja aeglasemad sülearvutid ning ühendused jäävad maha esimesena. Seansi tavaline suurus on 20 inimest; korraldaja võib ühe seansi jaoks lubada rohkem (vt abi live-koostöö kohta). Kui joonis tundub paljude inimestega aeglane, aitavad vähem inimesi, vähem neist samal ajal redigeerimas või parem ühendus.

## Kui seanss lõpeb

Joonist salvestab ainult korraldaja. Kui korraldaja lõpetab seansi, jääb kõigil teistel salvestamata koopia: salvesta see, kui tahad seda alles hoida.

:::note
Tagasi võetud asi joonistatakse sinu enda ekraanil ümbritsevate objektide peale, kuni avad joonise uuesti. Üksteisega kattuvad viirutused ja täidetud objektid võivad välja näha teistmoodi kui korraldaja koopias; joonis ise on sama.
:::
