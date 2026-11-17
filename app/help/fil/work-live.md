---
title: Gumawa sa iisang drawing nang sabay gamit ang Live TeamWork
summary: Ano ang nagbabago sa CadCraft habang nasa Live TeamWork session ka mula sa CadCraft Studio: mga cursor at selection ng ibang tao, mga object na ine-edit ng isang tao, ang mga lock ng host, ang sarili mong undo, at pagsali mula sa browser sa parehong network.
keywords: live, live teamwork, studio live, magkasama, collaborate, co-edit, session, i-share ang live, join, cursor, hawak, editing, lock, livelock, liveunlock, livehold, hawakan ang layer, hawakan ang area, padlock, undo, host, assistant, parehong file, maraming tao, mabagal, limit, sino ang nagbago, kamakailang edit, edit log
from: 0497d2a3
---

## Ano ang matututunan mo

Ang makikita mo at kung ano ang mangyayari sa iyong mga edit habang maraming tao ang nagtatrabaho sa iisang drawing nang sabay. Sinisimulan at sinasalihan ng CadCraft Studio ang sesyon ng Live TeamWork (I-share ang live, Join); ang pahinang ito ay tungkol sa mismong drawing.

## Sabay-sabay na gumuguhit ang lahat

Gumuhit at mag-edit gaya ng dati. Agad na lumalabas ang sarili mong mga edit, kahit bago pa makuha ng iba, at lumalabas sa screen mo ang sa kanila ilang sandali pagkatapos nilang gawin ang mga ito. Gumagana ang bawat command: pagguhit, pagbabago, layer, block, sheet, dimension, constraint.

Puwedeng baguhin ng dalawang tao ang iisang object. Kapag magkaibang bagay ang binago ninyo, tulad ng kulay at isang dulo ng isang linya, parehong pagbabago ay mananatili. Kapag ang iisang bagay ang binago ninyo, ang huling pagbabago ang mananaig.

Sa iyo lamang nananatili: ang kasalukuyang layer, kulay at taas ng teksto para sa mga bagong object, ang mga setting ng dimension mo, ang iyong view, split screen at UCS. Shared ang drawing; hindi shared kung paano mo ito tinitingnan.

## Ang ibang tao sa iyong drawing

- **Cursor:** lumalabas ang pointer ng bawat tao kasama ang pangalan nila sa sarili nilang kulay, at ang command na ginagamit nila. Nakikita mo ang mga cursor ng mga taong nagtatrabaho malapit sa nasa screen mo.
- **Mga selection:** ang pinili ng isang tao ay may balangkas sa kulay nila.
- **Ine-edit:** ang object na napili ng isang tao ay may label gaya ng "Ana ang nag-e-edit". Puwede mo pa ring baguhin ang kulay o ilipat ito, pero hindi mo ito mabubura, ma-explode o ma-retype hanggang bitawan nila ito. Kapag pinili mo ito, sinasabi nito kung sino ang may hawak.
- **Sino ang huling nagbago:** pumili ng isang object na binago ng ibang tao sa sesyong ito, at sasabihin ng command line kung sino at kung ano ang pagbabago ("Si Ben ang huling nagbago: CIRCLE."). Inililista ng panel na Live ng Studio ang bawat kamakailang edit sa ilalim ng {{ui:Mga kamakailang edit}}. Walang nise-save nito sa drawing: tatagal lamang ito habang tumatakbo ang sesyon.

## Hawakan ang isang layer o area habang nagtatrabaho doon

Sa malaking drawing na maraming tao, sabihin kung aling bahagi ang sa iyo sa ngayon:

1. I-type ang `LIVEHOLD` at pindutin ang {{key:Enter}}.
2. Piliin ang `L` at i-type ang pangalan ng layer (Enter ang nagpapanatili ng kasalukuyang layer), o piliin ang `A` at pumili ng dalawang sulok ng isang area.
3. Binabawi ang mga edit ng ibang tao sa layer na iyon, o sa mga object sa area na iyon, at sinasabihan silang nagtatrabaho ka roon. Nakikita mo ang iyong area bilang dashed na frame; nakikita ito ng iba sa kulay mo kasama ang pangalan mo, at nakalista sa itaas-kaliwa ng drawing nila ang mga layer na hawak mo.
4. Ang `LIVEHOLD`, saka ang `R`, ay bumibitaw sa lahat ng hawak mo. Ang pag-alis sa sesyon ay bumibitaw din dito.

Puwedeng humawak ang sinumang nasa sesyon, kasama ang host; nalalapat pa rin ang mga lock ng host sa ibabaw nito. Hindi kailanman nise-save sa file ang hawak.

## Kapag binawi ang isang edit

Sinusuri ng kopya ng drawing ng host ang bawat edit. May ilan na hindi maisasama, at binabawi ito ng CadCraft sa screen mo at sinasabi sa command line kung bakit, halimbawa:

- binura ng isang tao ang object, o ang layer o block na kailangan nito, ilang sandali bago ka;
- may nag-e-edit sa object na iyon, o may humahawak sa layer nito o sa area kung nasaan ito;
- na-lock ito ng host;
- na-purge ang block na inilagay mo, o may object pa rin ang layer na binubura mo.

## Ang undo ay nagbabawi lamang ng sarili mong gawa

Binabawi ng {{key:Mod+Z}} at ng {{ui:I-undo}} ang sarili mong huling command, lahat nito, at iniiwan ang gawa ng iba. Kapag may nagbago na ng parehong bagay mula noon, walang nababawi at sinasabi ng command line kung sino ang nagbago. Ang {{key:Mod+Y}} ay nag-re-redo.

## Mga lock (ang host)

Puwedeng protektahan ng host ang mga object o ang buong layer para walang makabago nito, kasama ang host mismo, hanggang sa ma-unlock ang mga ito:

1. Piliin ang mga object, saka i-type ang `LIVELOCK` at pindutin ang {{key:Enter}}. O i-type ang `LIVELOCK` nang walang napiling anuman at piliin ang `L` para i-lock ang isang layer ayon sa pangalan: ma-lolock din ang mga object na idadagdag sa layer na iyon mamaya.
2. Iginuguhit na dashed ang mga naka-lock na object na may label na "Naka-lock ng host" sa screen ng lahat.
3. Inia-unlock ng `LIVEUNLOCK` ang mga ito sa parehong paraan.

Nabibilang sa sesyon ang mga lock: nagtatapos ang mga ito kapag nagtapos ang sesyon at hindi kailanman nise-save sa file.

## Sumali gamit ang parehong file

Kung binuksan mo ang mismong file na binuksan ng host (mula sa shared folder o sa parehong kopya), sumali mula sa sarili mong window ng CadCraft sa Studio: buksan ang panel na {{ui:Live}} at gamitin ang {{ui:I-join dito}} kasama ang code ng host. Ang mga pagbabagong ginawa mula nang buksan ito ng host lamang ang nililipat, kaya handa agad ang malaking drawing. Kung ibang file ang sa iyo, papalitan ng drawing ng host ang nasa screen mo (mananatili ang file mo gaya ng dati). Gumagana lamang ito habang hindi nababago ang drawing mo mula nang buksan mo ito.

## Mga assistant sa live na sesyon

Ang assistant na nakakonekta sa window mo ng CadCraft (tingnan ang tulong tungkol sa pagtatrabaho kasama ng mga AI assistant) ay sumasali sa sesyon bilang sarili nitong kalahok, na ipinapakita sa lahat bilang "Assistant (via <pangalan mo>)". Pinapapasok ito ng host, gaya ng sa isang tao; agad sumasali ang sariling assistant ng host. May sariling undo ang mga pagbabago nito: binabawi ng iyong {{key:Mod+Z}} ang gawa mo, at binabawi ng undo ng assistant ang sarili lamang nitong gawa. Umaalis ito sa sesyon kapag i-disconnect mo ito o umalis ka, at puwede lamang itong gumana sa sesyon habang may pahintulot kang mag-edit.

## Sumali mula sa browser

Puwedeng i-scan ng kasamahang walang Studio ang larawan sa ilalim ng code ng host gamit ang telepono, tablet o computer sa parehong network. Magbubukas ang CadCraft sa browser, hihingin ang pangalan mo sa command line, at mapupunan ng drawing ng host kapag pinapasok ka na ng host. Pinapayagan ng invite link na makasali ang isang tao mula sa ibang network: kailangan ng host ng seat ng Team Cloud Plan para sa app, libre namang sumali ang lahat ng iba, at gumagana lamang ang link habang bukas ang sesyon ng host.

## Maraming tao sa iisang drawing

Napupunta ang bawat edit sa lahat ng nasa sesyon, kaya kung mas maraming tao, mas matagal bago maabot ng bawat pagbabago ang bawat isa sa kanila, at ang mas mabagal na laptop at koneksyon ang nahuhuli muna. Karaniwang 20 tao ang laki ng sesyon; puwedeng payagan ng host ang mas marami para sa isang sesyon (tingnan ang tulong tungkol sa sabayang pagtatrabaho nang live). Kung mabagal ang drawing kapag maraming tao, makatutulong ang mas kaunting tao, mas kaunting nag-e-edit nang sabay-sabay, o mas magandang koneksyon.

## Kapag nagtapos ang sesyon

Ang host lamang ang nagse-save ng drawing. Kapag tinapos ng host ang sesyon, may hawak ang lahat ng iba na hindi naka-save na kopya: i-save ito kung gusto mong itago.

:::note
Ang binawing bagay ay iginuguhit sa ibabaw ng mga object sa paligid nito sa sarili mong screen hanggang buksan mong muli ang drawing. Maaaring magmukhang iba ang mga hatch at may-fill na object na nagkakapatong kaysa sa kopya ng host; pareho pa rin ang mismong drawing.
:::
