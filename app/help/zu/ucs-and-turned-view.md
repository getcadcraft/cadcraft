---
title: Phendulela ukubuka futhi usebenzise amaphuzu akho (UCS)
summary: Phendulela ukubuka ngo-90° noma ngalo naliphi ikona ngaphandle kokuhambisa lutho kudwebo, bese usetha uhlelo lwamaphuzu lomsebenzisi (UCS) ukuze amaphuzu, ortho, ukulandelela kwepolar, igridi nombhalo omusha kulandele amazinga esakhiwo.
keywords: ucs, uhlelo lwamaphuzu lomsebenzisi, ipulani, phendulela ukubuka, zungezisa ukubuka, ukupheka kokubuka, ucs z, ucs 3point, ucs object, ucs world, named ucs, ucsfollow, turnleft, turnright, turnworld, isakhiwo esithambekile, igridi ejikelezisiwe
from: 6f152c65
---

## Okuzofunda

Ukuthi ungabuka kanjani udwebo ophenduliwe, ukuze isakhiwo esidwetshwe ngokuthambeka sibe sengqo esikrinini, nokuthi uthayipha kanjani amaphuzu ngamagatsha alo. Akukho okunyakaza kudwebo lapho wenza lokhu: izinto zigcina izindawo zazo, ukuphendulwa akusona ukuhlela, futhi udwebo akumakwa njengoshintshiwe.

## Phendulela ukubuka ngekota

1. Chofoza {{ui:Ukubuka}} › {{ui:Okuningi}} › {{ui:Phendulela ukubuka ngo-90° kwesobunxele}} noma {{ui:Phendulela ukubuka ngo-90° kwesokudla}}.

Udwebo luyaphenduka esikrinini mayelana nomaphakathi wendawo yodwebo. Yenza futhi ukuze uqhubeke uphendula.

2. Chofoza {{ui:Ukubuka}} › {{ui:Okuningi}} › {{ui:Buyela emhlabeni}} ukuze uliphindisele libe lilingene.

Imiyalo ezingemuva kwazo ngu-{{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} no-{{cmd:TURNWORLD}}. Ukuze unikeze enye yazo ikhiye, engeza umugqa onjengo `TL=TURNLEFT` ku-aliases yakho nge-{{cmd:ALIASEDIT}}.

## Hlanganisa nesakhiwo esithambekile

1. Thayipha `UCS` bese ucindezela {{key:Enter}}, bese `OB` bese {{key:Enter}}.
2. Chofoza umugqa wodonga eduze kwalokho okufanele kube yimvelaphi.

Manje i-UCS iqala kulowo mkhawulo ne-X axis yayo ihamba nodonga, nokubuka kuyaphenduka ukuze udonga lube ngesimo esilingene esikrinini. Isithonjana se-axis ekhoneni elingaphansi kwesobunxele sikhombisa lapho ama-UCS axes abheka khona.

3. Dweba njengokujwayelekile. Nge-UCS isethiwe:
   - `x,y` ne-`@dx,dy` zilinganiswa ngama-UCS axes; `d<a` ilinganisa i-engeli kusuka ku-X axis ye-UCS.
   - {{ui:Ortho}}, ukulandelela kwepolar negridi kulandela ama-UCS axes, nakanjalo nesikhonkwane.
   - Umbhalo omusha namaphuzu amasha asebenza ngomugqa we-X axis ye-UCS; {{cmd:DIMLINEAR}} ukuma nokuthi kwayo nakho kuyalandela.
   - Amaphuzu emugqeni wesimo nasokusuka ku-{{cmd:ID}} ayi-UCS.
4. Ukuthayipha iphuzu lomhlaba lapho i-UCS isethiwe, faka `*` phambili: `*0,0` noma `@*100,0`.
5. Thayipha `UCS`, {{key:Enter}}, bese {{key:Enter}} futhi ukuze ubuyele emhlabeni.

## Ezinye izindlela zokusetha i-UCS

Emyalweni we-{{cmd:UCS}}:

| Uthayipha | Okwenzayo |
|---|---|
| iphuzu | Imvelaphi entsha; bese uchofoza iphuzu ku-X axis entsha, noma cindezela {{key:Enter}} ukugcina i-engeli |
| `Z` | Phendula i-UCS ngokuzungeza imvelaphi yayo ngo-engeli oyithayipha (amadigri, ngokuphambene nowotshe) noma ukhethe |
| `3` (3point) | Imvelaphi, iphuzu ngaphezu kwe-X axis eyihlobo, nephuzu eliseceleni elihle le-Y |
| `OB` (OBject) | Kumugqa, i-arc, indilinga, isegimenti se-polyline, umbhalo, inkomba yebhlokhi, iphuzu noma umugqa wokwakha |
| `P` (Previous) | I-UCS yangaphambilini (ezine-ten zokugcina ziyagcinwa ngenkathi udwebo livulekile) |
| `W` (World) | Buyela emhlabeni |
| `NA` (NAmed) | `S` igcina i-UCS yamanje ngegama, `R` ibuyisela enye, `D` isusa enye, `?` ibala zona |

Yonke inguquko iphendula ukubuka ukuze i-X axis entsha ye-UCS ibe ngesimo esilingene. {{cmd:PLAN}} iphendula ukubuka ngaphandle kokushintsha i-UCS: {{key:Enter}} ye-UCS yamanje, `U` eyodwa elondoloziwe, `W` yomhlaba.

## Okufanele ukwazi

- Iphaneli ngayinye yesikrini esihlukaniswe yigcina ukuphendula kwayo. I-UCS yodwebo.
- Amashidi asebenza ngamaphuzu ephepha; setha i-UCS ethebhini le-{{ui:Imodeli}}, noma ngaphakathi kwe-viewport.
- Amawindi okukhetha adonswe ekubukeni okuphenduliwe akhetha okungaphakathi kuwo esikrinini.
- Izinkambo ze-LISP zithola amaphuzu ku-UCS kusuka ku-`getpoint`, zingafunda `UCSORG`, `UCSXDIR`, `UCSYDIR` no-`VIEWTWIST`, futhi `trans` iguqula phakathi komhlaba, i-UCS nesikrini.

:::note
Ifayela elilondoloziwe ligcina i-UCS nokuphendula kokubuka kusakhiwo esizayo; kuze kube lapho, ziyahlala kuze udwebo livulekile.
:::
