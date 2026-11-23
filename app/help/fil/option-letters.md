---
title: Bigyan ang mga command option ng sarili mong mga letra
summary: Sagutin ang mga option ng command gamit ang mga letrang pipiliin mo, sa anumang wika, mula sa iisang text file na maaari mong i-edit, i-import, at i-export.
keywords: option letters, optionkeys, optkeys, option keyword, keyword, remap, mapping, i-customize, sariling letra, polar, array, P, PO, wika, isalin ang options, maikling anyo, import, export, magkapareho
from: 7c8328c6
---

## Ano ang matututunan mo

Paano baguhin ang mga letrang tina-type mo para sumagot sa mga option ng isang command. Halimbawa, nagtatanong ang {{cmd:ARRAY}} ng `[Rectangular/POlar]` at tumatanggap ng `PO` para sa Polar; puwede mong gawing `P` o ibang letra ang sumagot nito, sa sarili mong wika kung gusto mo.

## Paano sinasagot ang mga option

Kapag may option ang command na nasa square bracket, ang malalaking letra ang tina-type: ang `POlar` ay `PO`, ang `eXit` ay `X`.

Puwede ring mas kaunting letra ang i-type. Kapag ang tina-type mo ay tumutugma lamang sa isang option na nakalista, tinatanggap ito ng CadCraft: sa `[Rectangular/POlar]`, ang nag-iisang `P` ay Polar. Kapag tumutugma ito sa dalawa, sinasabi ng command line ang dalawa at humihingi ulit:

```
C could be COUnt, COLumns. Type more letters.
```

Hindi kailanman hinuhulaan ang mga numero, kaya laging binabasa bilang numero ang distansya o bilang na tina-type mo.

## Magdagdag ng sarili mong letra

Pinananatili ng bawat command ang sarili nitong built-in na letra. Idinadagdag mo ang sa iyo sa ibabaw ng mga iyon, kaya ang listahan mo ay naglalaman lamang ng binago mo.

1. Buksan ang {{ui:Mga setting}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Mga letra ng option}} at i-click ang {{ui:I-edit…}}. O i-type ang {{cmd:OPTIONKEYS}} at pindutin ang {{key:Enter}}.
2. Sa ilalim ng {{ui:Command}}, piliin ang command, halimbawa `ARRAY`. Nakalista rito ang bawat command na humihingi ng option, at nagsisimula ito sa command na ginamit mo huli.
3. Sa ilalim ng {{ui:Option}}, piliin ang option. Ipinapakita ng bawat isa ang built-in na letra nito sa loob ng bracket, halimbawa `POlar (PO)`.
4. Sa {{ui:Sarili mong letra}}, i-type ang mga letrang gusto mo, halimbawa `P`, at i-click ang {{ui:Idagdag}}.
5. Lalabas na ang option sa ilalim ng {{ui:Sarili mong letra}} kasama ang built-in na letra nito at ang sa iyo. I-click ang {{ui:I-save}}.

Simulan ang {{cmd:ARRAY}}, pumili ng object, at pindutin ang {{key:Enter}}. Ipinapakita ng prompt ang sarili mong letra pagkatapos ng option, `POlar (P)`, at sinasagot ito ng `P`.

Para alisin ang isa, i-click ang x sa dulo ng row nito at pagkatapos ang {{ui:I-save}}. Babalik ang option sa built-in na letra lamang.

## Mga letrang hindi mo magagamit

Tinatanggihan ng editor ang mga letrang magtatago sa anumang binabasa na ng command line, at sinasabi kung bakit:

- ang built-in na letra ng ibang option ng parehong command (`R` para sa Polar sa `ARRAY`, kung saan ang `R` ay Rectangular);
- salitang object snap na tatlong letra o higit pa, gaya ng `END`, `MID` o `CEN`, at ang mga salitang `ALL` at `LAST`;
- ang parehong letra para sa dalawang magkaibang option ng isang command.

Habang may nakalistang pula, naka-off ang {{ui:I-save}}: ayusin ang linya o alisin ito, at babalik ito. Palaging nananaig ang mga built-in na letra ng prompt kaysa sa sa iyo, kaya hindi kailanman mapipigilan ng listahan mo ang built-in na sagot sa paggana. Ang mga letrang kapareho ng pangalan ng command, gaya ng `L` o `C`, ay ayos lang: sa prompt ng option, sinasagot ng command line ang isang sagot, hindi nagsisimula ng command.

Ang mga option na nakalista para sa isang command ay galing sa mga command na nagbabahagi ng mga prompt nito, kaya paminsan-minsan ay may nakalistang option ang isang command na hinihingi lamang nito sa ilang kaso.

## Isang pagpipilian para sa bawat command

Sa ilalim ng {{ui:Command}}, piliin ang {{ui:Bawat command}}. Ang mga option ay magiging lahat ng option na mayroon ang anumang command, gaya ng eXit o Undo. Ang mga letrang idinagdag mo roon ay sumasagot sa option na iyon saanman ito inaalok ng command. Nananaig ang mga letrang idinagdag para sa isang command kaysa sa mga ito.

## Mga letra sa sarili mong wika

Maaaring galing sa anumang alpabeto ang mga letra, kaya masasagot mo ang mga option nang hindi nagpapalit ng keyboard: magdagdag ng `З` para sa Close sa ilalim ng {{ui:Bawat command}}, o `П` para sa POlar sa `ARRAY`.

Ang CadCraft ay may English na letra lamang. Ang sarili mong listahan ang paraan para ikaw, ang opisina mo, o ang mga taong may parehong wika ang mag-ayos ng iba, at ang {{ui:I-export}} ay gumagawa ng file na maaari mong ipasa.

## I-edit bilang text

Ipinapakita ng {{ui:I-edit bilang text}} sa editor ang parehong listahan bilang mga linya ng text, isa para sa bawat option, at ito rin ang sine-save ng {{ui:I-export}}:

```
ARRAY.PO,  P
*.X,       Q
```

Ang bawat linya ay ang command, isang tuldok, ang built-in na letra ng option, isang kuwit, at ang sarili mong letra. Ang star sa halip na command ay nangangahulugang bawat command. Ang linyang nagsisimula sa `;` ay tala.

## Ano ang nananatiling pareho

- Patuloy na gumagana ang mga built-in na letra sa tabi ng sa iyo.
- Patuloy na gumagamit ang mga routine at toolbar button ng mga built-in na letra, kaya walang nasisira sa anumang na-load mo. Para i-type mismo ang mga built-in na letra kapag nakakasagabal ang sa iyo, maglagay ng underscore sa unahan: `_PO`.
- Iba ang maikling pangalan ng command: tingnan ang [I-edit ang mga command alias](topic:command-aliases).

## Mga linyang tinatanggihan ng CadCraft

Kapag nag-e-edit ka bilang text o nag-i-import ng file, inililista ng editor ang bawat problema kasama ang numero ng linya:

- hindi umiiral ang command (tanggap ang alias ng command: ang `AR.PO` ay binabasa bilang `ARRAY.PO`);
- hindi `COMMAND.OPTION, LETTERS` ang linya;
- may espasyo o senyas ang mga letra (letra at digit lamang, hanggang 16);
- nasa dalawang magkaibang option ng isang command ang parehong letra.

## Import at export

Ang {{ui:I-export}} ay nagse-save ng mga letra mo bilang text file, para itago o ibigay sa iba. Ang {{ui:I-import…}} ay nagbabasa ng ganoong file. Pareho silang nasa editor at sa {{ui:Mga setting}} › {{ui:CadCraft}} › {{ui:Mga letra ng option}}.

Sa Mga setting, pinapalitan ng {{ui:I-import…}} ang file mo ng piliin mong file. Hindi tinatanggap ang file na may linyang nagbabanggaan o hindi magamit; buksan ang editor at i-import doon para makita ang mga linya. Sa editor, pinupuno lamang nito ang kahon: walang magbabago hanggang i-click mo ang {{ui:I-save}}.

## I-reload o alisin

I-type ang {{cmd:REINIT}} at pindutin ang {{key:Enter}} para muling ilapat ang file mo. Para alisin ang isang letra, burahin ang linya nito at i-click ang {{ui:I-save}}.

## Sumusunod ang mga letra mo sa account mo

Kapag naka-sign in ka sa getcadcraft.com, nakatago ang mga letra mo sa account mo. Buksan ang CadCraft sa ibang browser o sa ibang computer gamit ang parehong account at kusa itong darating; sinasabi ng command line na `Option letters from your account`. Kung binago mo ang mga ito sa dalawang lugar, mananaig ang pinakabagong kopya at isang beses lamang itatago ang pinalitan nito.

Sinasabi ng {{ui:Mga setting}} › {{ui:CadCraft}} › {{ui:Mga letra ng option}} kung nasaan sila. Kapag naka-sign out ka o offline, nananatili sila sa browser na ito at mapupunta sa account mo sa susunod mong pag-save habang naka-sign in.

Kaugnay: [I-edit ang mga command alias](topic:command-aliases) · [Mga setting ng CadCraft](topic:settings) · [Mga command](topic:commands)
