---
title: History: mga bersyon at mga pagbabago
summary: Tingnan ang mga bersyon ng isang drawing (mga kopyang iniingatan ng Studio kapag nag-save ka, at ang nasa cloud), buksan o ibalik ang isa, at ikumpara ang dalawa na may pagbabagong nakikita sa kulay.
keywords: history, versions, version history, ibalik, nakaraang bersyon, i-undo ang save, compare, ikumpara ang mga drawing, dwgcompare, mga pagbabago, idinagdag, tinanggal, binago, snapshot, backup, mga bersyon sa cloud
from: 141d37b3
---

## Ang gagawin mo

Pagtingin sa naunang bersyon ng isang drawing, at listahan ng pagkakaiba nito sa kasalukuyan: ano ang idinagdag, ano ang tinanggal at ano ang binago, na minarkahan sa kulay sa drawing.

## Buksan ang History

I-type ang `HISTORY` (o `HIST`) at pindutin ang {{key:Enter}}, o piliin ang {{ui:History…}} sa {{ui:More}} menu ng {{ui:View}} group. Bubukas ang panel sa tabi ng drawing at nananatiling bukas habang nagtatrabaho ka, kaya maaari mong i-pan at i-zoom ang drawing kasama ang mga kulay dito.

Gumagana ang History sa CadCraft Studio. Sa browser, sinasabi lang ito ng panel.

## Saan galing ang mga bersyon

- **Sa computer na ito.** Sa bawat pagbubukas ng drawing mula sa file sa Studio, at sa bawat pag-save nito, nag-iingat ang Studio ng kopya ng file sa sarili nitong storage sa computer na ito. Ang unang kopya ay ang {{ui:Gaya ng binuksan}}: ang file bago ang una mong save dito. Itinatago ng Studio ang pinakabagong 25 kopya ng bawat drawing, at ang pinakamatanda ang unang nauuna kapag lumampas sa 400 MB ang lahat ng kopya. Ang save na walang nabago ay walang itinatago. Walang ina-upload.
- **Sa cloud.** Kapag nagbukas ka ng drawing mula sa iyong cloud files sa Studio, nakalista rin sa panel ang {{ui:Sa cloud}}: bawat bersyong hawak ng cloud, kasama ang numero nito, kung sino ang nag-save, at ang note. Binabasa lang ng panel ang mga ito. Hindi pa naipapadala ng CadCraft ang sarili nitong save sa cloud, kaya ang mga ito ay mga bersyong na-save mula sa ibang device at sa web. Mag-sign in ulit sa Studio kapag sinabi nitong natapos na ang sign-in.

Ang drawing na hindi mo pa na-save ay walang kopya: i-save muna ito.

## Buksan o ibalik ang isang bersyon

- {{ui:Buksan}} ay inilalagay ang bersyong iyon sa sarili nitong tab. Hindi nagagalaw ang drawing mo.
- {{ui:Ibalik}} ay pinapalitan ang drawing na ito ng bersyong iyon. Nagtatanong muna ito. Bago ito gawin, nag-iingat ang Studio ng kopya ng drawing sa kasalukuyan nitong estado sa History (minarkahang {{ui:Bago ang isang restore}}), at walang nasusulat sa file hangga't hindi ka nagse-save. Hindi maibabalik ang restore gamit ang {{key:Mod+Z}}; gamitin ang kopyang iyon.

## Ikumpara

1. I-click ang {{ui:Ikumpara}} sa isang bersyon. Ikinukumpara ito sa {{ui:Ang drawing sa kasalukuyang estado nito}}; para ikumpara sa ibang bersyon, piliin muna ito sa {{ui:Ikumpara sa}}.
2. Basahin ang resulta sa ilalim ng listahan: ilang object ang idinagdag, tinanggal at binago, at ang listahan ng mga ito. I-click ang isang item sa listahan para ilipat ang view dito.
3. Sa drawing:
   - **berde** ang mga object na idinagdag,
   - **pula** ang mga object na tinanggal (nasa mas lumang bersyon lang sila),
   - **orange** ang mga object na binago: solid ang bagong hugis at dashed ang luma.
4. Ang {{ui:Ipakita sa drawing}} ay nagpapatay at nagpapaandar ng mga kulay; ang {{ui:I-clear ang mga kulay}} ay inaalis ang resulta. Kapag isinara mo ang panel, nawawala rin ang mga kulay.

Sinasabi ng listahan kung ano ang nagbago sa isang binagong object: ang text nito, na gumalaw ito, ang hugis nito, ang layer, kulay, linetype o lineweight nito. Ikinukumpara ang bawat sheet nang hiwalay; ang mga kulay ay nakikita sa sheet na bukas.

:::note
Walang permanenteng numero ang bawat object sa isang drawing, kaya itinutugma ng CadCraft ang mga object ayon sa kung ano sila: ang parehong object sa magkabilang panig ay hindi nagbago; ang object na kaparehong uri at layer at nasa loob ng sarili nitong sukat mula sa lumang object ay ang parehong object, na binago; ang natitira ay idinagdag o tinanggal. Ang object na nalipat nang malayo sa dating lugar ay lalabas bilang tinanggal sa isang lugar at idinagdag sa kabila. Binibilang ng block reference ang nilalaman ng block nito.
:::

## Mga karaniwang pagkakamali

- **"No copies yet."** Wala pang kopya. Nagtatago ang Studio ng kopya sa bawat pagbukas at pag-save ng drawing na may file sa computer na ito. Ang drawing na binuksan mula sa browser tab, o hindi pa na-save, ay walang kopya.
- **Wala ang listahan sa cloud.** Lumalabas ito para sa drawing na binuksan mula sa cloud sa Studio; ang file na binuksan mula sa disk ay hindi cloud drawing.
- **Mukhang lahat ay nabago.** Ang dalawang bersyong na-save ng magkaibang programa ay nagsusulat ng parehong drawing sa magkaibang paraan (mga pangalan ng anonymous block, rounding). Ikumpara ang mga bersyong na-save ng CadCraft.
