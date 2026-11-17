---
title: Rajz kényszerezése
summary: Tartsa a vonalakat vízszintesen, a végpontokat egybeesően és a méreteket rögzítetten geometriai és méretkényszerekkel, és hagyja, hogy a rajz kövesse a méret változását.
keywords: kényszer, kényszerek, paraméteres, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, szabadsági fokok, teljesen kényszerezett
from: f8f21fa4
---

## Mit fog készíteni

Egy lemezt, amelynek szélességét egy helyen változtatja: oldalai derékszögben maradnak, egy sarka helyben marad, magassága pedig mindig a szélesség fele.

A kényszerek a vonalakon, polivonalakon, köröken, íveken és pontokon működnek a Modell lapon. Minden hozzáadott kényszer egy visszavonási lépés.

## A körvonal megrajzolása és kényszerezése

1. Írja be a `REC` parancsot, és nyomja meg az {{key:Enter}} billentyűt. Írja be: `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Írja be az `AUTOCONSTRAIN` parancsot, és nyomja meg az {{key:Enter}} billentyűt. Írja be: `ALL`, {{key:Enter}}, majd ismét {{key:Enter}}.

   Az előzmények szerint: „4 kényszer alkalmazva”. Az oldalak mellett kis dobozok jelennek meg, **H** és **V** betűkkel: ezek a kényszersávok.
3. Írja be a `GCFIX` parancsot, és nyomja meg az {{key:Enter}} billentyűt. Kattintson a bal alsó sarok közelébe. Megjelenik egy ⊕ jelű doboz: ez a sarok helyben marad.

Az `AUTOCONSTRAIN` egybeeső kényszereket ad oda, ahol a végpontok majdnem találkoznak, és vízszintes vagy függőleges kényszereket oda, ahol a vonalak majdnem vízszintesek vagy függőlegesek. Az indulási küszöb 0,05 rajzegység és 1°; ezt a parancs kérdésénél az `S` beírásával módosíthatja.

## A méretek megadása

1. Írja be a `DCHORIZONTAL` parancsot, és nyomja meg az {{key:Enter}} billentyűt.
2. Kattintson a bal alsó sarok közelébe, majd a jobb alsó sarok közelébe.
3. A méretvonalhoz kattintson a téglalap alá.
4. A parancssor ezt mutatja: `Dimension text <d1=100>`. Írja be: `width=120`, és nyomja meg az {{key:Enter}} billentyűt.

   A téglalap most 120 széles, a felirat pedig `width=120`.
5. Írja be a `DCVERTICAL` parancsot, és nyomja meg az {{key:Enter}} billentyűt, írja be az `O` betűt, és nyomja meg az {{key:Enter}} billentyűt, majd kattintson a jobb oldalra.
6. Kattintson a jobb oldaltól kifelé, írja be: `width/2`, és nyomja meg az {{key:Enter}} billentyűt.

   A magasság 60. A felirat: `fx: d1=width/2`: egy kifejezés vezérli.

Az előzmények szerint a körvonal most teljesen kényszerezett. A méret megváltoztatásához módosítsa a `width` értéket (lásd: [Paraméterek és egyenletek használata](topic:parameters)), vagy kattintson duplán a `width=120` feliratra, írjon be új értéket, és válassza az {{ui:Alkalmaz}} gombot.

## Kényszerezett objektumok mozgatása

A mozgatás, forgatás, léptékezés, fogópontok és a Tulajdonságok panel mind megtartják a kényszereket: amit mozgatott, az rögzítve marad, a többi pedig követi. Ha a kényszerek nem tudnak követni, a szerkesztés nem történik meg, és az előzmények megmondják az okát, például: „Nincs végrehajtva: a kényszerek az objektumot helyben tartják”. Objektum törlésekor a kényszereit is eltávolítja.

## Kényszerezett objektumok tükrözése és vágása

- Az {{cmd:MIRROR}} a tükrözött objektumok közötti kényszereket átmásolja a másolatokra. A érintők oldalai (melyik oldalon érint az érintő, melyik oldalra mérjen a távolság) a tükrözött másolathoz újra kiszámítódnak, a másolt méretek pedig a beillesztéshez hasonlóan saját nevet kapnak. Ha az `Erase source objects` `Y`, a kényszerek a tükrözött objektumokon maradnak. Az előzmények megmondják, hány kényszer került át.
- A {{cmd:TRIM}} a vonal vagy ív kényszereit a megmaradt részre viszi: a végponton lévő kényszer ahhoz a darabhoz kerül, amelyik még tartalmazza azt a végpontot; az irányra vonatkozó szabály ({{ui:Vízszintes}}, {{ui:Függőleges}}, {{ui:Párhuzamos}}, {{ui:Merőleges}}) minden darabon érvényes marad; a két külső végpont közötti méret továbbra is ezeket méri. A levágott rész kényszerei, vagy a vágás által megváltoztatott hossz ({{ui:Egyenlő}}, egy ív szöge) megszűnnek. A vágott kör megtartja a középpontjára és sugarára vonatkozó kényszereit. A vágott polivonalak elveszítik a kényszereiket.

## A kényszerek

| Parancs | Megtartja |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | egy vonalat vagy szakaszt vízszintesen vagy függőlegesen (`2P`: két pontot vízszintesen vagy függőlegesen) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | két vonal párhuzamos, merőleges vagy egy egyenesen van |
| {{cmd:GCCOINCIDENT}} | két pont egybeesik; `O`: egy pont egy vonalon, körön vagy íven |
| {{cmd:GCTANGENT}} | egy vonal és egy kör vagy ív, vagy kettő közülük, érintkezik |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | két kör vagy ív közös középponton; két hossz vagy két sugár egyenlő |
| {{cmd:GCSYMMETRIC}} | két pont, vonal vagy kör tükrözött egy vonalra nézve |
| {{cmd:GCFIX}} | egy pont (kattintson a közelébe) vagy egy egész objektum (`O`) helyben marad |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | egy távolságot |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | egy sugarat, egy átmérőt, két vonal közötti szöget vagy egy ív szögét |

A {{cmd:GEOMCONSTRAINT}} és a {{cmd:DIMCONSTRAINT}} megkérdezi, melyiket kívánja; a {{ui:Kényszerezés}} és a {{ui:Méret}} a {{ui:Parametrikus}} csoportban futtatja ezeket, a {{ui:További}} gomb alatt pedig mindegyik listázva van. Az határozza meg a részt, ahová kattint: a végpont, a felezőpont vagy a középpont közeli kattintás az adott pontot választja; a polivonalra kattintás az alatta lévő szakaszt. Az első objektum helyben marad, a második ahhoz igazodik.

Az a kényszer, amely másokkal ütközik, vagy semmit sem ad hozzá, mert a többi már magában foglalja, üzenettel elutasításra kerül, és semmi nem mozdul.

## Megtekintés, kijelölés és eltávolítás

- Kattintson egy kényszersáv dobozára (vagy egy egybeeső négyzetre, vagy egy méretfeliratra), hogy kijelölje a kényszert; az előzmények megnevezik. Az eltávolításhoz nyomja meg a {{key:Delete}} billentyűt.
- A {{cmd:DELCONSTRAINT}} eltávolítja az összes kényszert a kijelölt objektumokról.
- A {{cmd:CONSTRAINTBAR}}: az `S` minden sávot megjelenít, a `H` elrejti őket; előbb jelölje ki az objektumokat, ha csak azok sávjait szeretné megjeleníteni vagy elrejteni. A {{ui:További}} alatt megtalálhatók a {{ui:Kényszersávok megjelenítése}} és a {{ui:Kényszersávok elrejtése}} parancsok.
- A {{cmd:DCDISPLAY}} megjeleníti vagy elrejti a méretkényszereket. Nyomtatáskor soha nem jelennek meg.
- A {{cmd:DCCONVERT}} a vonalakra, körökre és ívekre rajzolt méreteket méretkényszerré alakítja.

:::note
Ha használta az AutoCAD paraméteres rajzolását, a parancsnevek és a kérdések ugyanazok. A kényszerek és paraméterek DWG és DXF fájlba más programok számára figyelmen kívül hagyott formában kerülnek mentésre; lásd: [Fájlok](topic:files#constraints-in-files).
:::
