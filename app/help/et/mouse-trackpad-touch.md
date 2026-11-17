---
title: Hiir, puuteplaat ja puuteekraan
summary: Kuidas CadCraftis suumida, vaadet nihutada, parema klõpsuga klõpsata ja punkte valida hiire ratta, Mac- või PC-puuteplaadi või puuteekraaniga ning mis erineb brauseriti.
keywords: puuteplaat, trackpad, magic mouse, puuteekraan, tahvel, ipad, nihuta, suumi, näpitse, parem klõps, kahe sõrmega, keskmine nupp, brauser, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft on mõeldud hiirele rattaga. Kõik töötab ka puuteplaadiga, mõne harjumusega, mida tuleb õppida. Puuteekraanid sobivad punktide valimiseks, kuid piiratult.

## Hiir rattaga

- **Suumi:** keera ratast. Joonis suumib ristkursori ümber, seega osuta sellele, mida soovid näha.
- **Nihuta:** hoia ratas all ja lohista, või lohista parema nupuga.
- **Suumi kõigele:** topeltklõps rattal või klõpsa {{ui:Ulatus}}.
- **Tagasi eelmisesse vaatesse:** klõpsa rühmas Vaade nuppu {{ui:Eelmine}} või sisesta `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Rattasammude jada loeb üheks vaateks, nii et üks {{ui:Eelmine}} võtab selle tagasi. Vaated, mille juurde tahad tagasi tulla, salvesta käsuga {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** parem klõps.

## Puuteplaat

:::mac
- **Nihuta:** liiguta kahte sõrme puuteplaadil mis tahes suunas: joonis liigub sõrmede järgi. Võid lohistada ka kahe sõrmega klõpsates ja all hoides (parema nupu lohistus).
- **Suumi:** näpitse kahe sõrmega. Suumimine järgib ristkursorit.
- **Parem klõps (Enter):** klõpsa kahe sõrmega. Kui see ei tee midagi, lülita sisse „Sekundaarne klõps“ jaotises **Süsteemisätted**, seejärel **Puuteplaat**. Control-klõps võib CadCraftis loetuda tavaliseks klõpsuks, mitte paremaks klõpsuks, seega kasuta kahe sõrmega klõpsu.
- **Suumi alale:** klõpsa rühmas Vaade nuppu {{ui:Aken}} ja klõpsa kahte nurka.
:::

:::windows linux
- **Nihuta:** liiguta kahte sõrme puuteplaadil mis tahes suunas: joonis liigub sõrmede järgi. Võid lohistada ka parema nupu all hoides.
- **Suumi:** näpitse kahe sõrmega. Suumimine järgib ristkursorit.
- **Parem klõps (Enter):** klõpsa kahe sõrmega või puuteplaadi paremat alumist nurka, olenevalt puuteplaadi sätetest.
- **Suumi alale:** klõpsa rühmas Vaade nuppu {{ui:Aken}} ja klõpsa kahte nurka.
:::

{{key:Space}} all hoidmine ja lohistamine CadCraftis **ei** nihuta: {{key:Space}} on {{key:Enter}}.

Hiire ratas suumib endiselt, sammu haaval. Puuteplaat, mis saadab kerimise terve sammudena nagu ratas, suumib kahe sõrmega kerimisel, mitte ei nihuta: suumi välja, osuta alale, mida soovid, ja suumi tagasi sisse. 3D-vaheleht säilitab oma puuteplaadi liigutused (vaata [Mudeli vaatamine 3D-s](topic:3d-solids#look-around)).

## Puuteekraanid ja tahvelarvutid

CadCraft loeb sõrme hiireklõpsuna:

- Puudutus valib punkti või objekti ehk valib.
- Sõrme lohistamine tühjal alal joonistab lasso (paremale liikudes esmalt aken, vasakule esmalt ristaken; vaata [Lassovalik](topic:lasso-selection)).
- Käskudes {{cmd:TRIM}} ja {{cmd:EXTEND}} lõikab või pikendab sõrme lohistamine läbi tükkide need kõik.
- Valitud objekti käepideme lohistamine liigutab käepidet (käepidemed ja valikukast on sõrme jaoks suuremad).
- **Näpitse** kahe sõrmega, et suumida nende vahelise punkti ümber; liiguta kahte sõrme koos, et **nihutada**. Teine sõrm tühistab selle, mida esimene alustas, nii et näpitsemine ei jäta kunagi jälge.
- **Pikk vajutus** (hoia paigal umbes pool sekundit) on parem klõps: {{key:Enter}}. See lõpetab käsu, lõpetab valiku või kordab viimast käsku.

Käsurea all ilmub **klahvirida**: {{ui:Esc}}, {{ui:Võta tagasi}}, {{ui:Tee uuesti}}, märgid, mida tahvelarvuti klaviatuur peidab (`@` `,` `<` `'` `"` `-`), {{ui:Püüdmine}}, {{ui:Ortho}}, klaviatuurinupp ja suur {{ui:Enter}}. Käsu või numbri sisestamiseks puuduta klaviatuurinuppu (või käsurida).

Hõljumist ei ole, seega püüdmismärgised ilmuvad ainult sinu sõrme asukohta.

:::touch
Kasutad puuteekraani. Rohkema kui kiire vaatamise jaoks muudab CadCraft kasutamise palju lihtsamaks ühendatud klaviatuur ning hiir või puuteplaat.
:::

## Brauserid

CadCraft töötab ühtemoodi Chrome'is, Edge'is, Firefoxis ja Safaris, Macis, Windowsis ja Linuxis. Erinevused on väikesed:

| Teema | Mida teada |
|---|---|
| DWG avamine | Suured joonised loetakse igas brauseris paar sekundit; selle ajal näitab olekurida „Loen …“ |
| Allalaadimised | Iga brauser otsustab, kuhu allalaadimised lähevad ja kas enne küsida; vaata [Brauserid ja arvutid](common:browsers) |
| Ava printimiseks | Avab PDF-i uuel vahelehel. Kui brauser blokeerib hüpikaknad, laadib CadCraft selle asemel PDF-i alla |
| F7 | Firefox võib pakkuda kursorinavigeerimist; vali Ei |
| Lahkumine salvestamata muudatustega | Iga brauser näitab oma küsimust „Kas lahkud lehelt?“, mida CadCraft muuta ei saa |

:::safari
Safaris võib PDF, mis avati nupuga {{ui:Ava printimiseks}}, näidata vahelehel ilma printimata: kasuta **Fail**, seejärel **Prindi**.
:::

:::firefox
Firefox võib küsida, mida iga allalaadimisega teha. Vali faili salvestamine või muuda seda üks kord Firefoxi sätetes jaotises Allalaadimised.
:::
