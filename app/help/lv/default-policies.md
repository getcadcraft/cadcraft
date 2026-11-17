---
title: "Noklusējuma politikas: iestatiet, ar ko sākas jauns zīmējums"
summary: Vienreiz pasakiet, ar kādām vienībām, garuma formātu, precizitāti, teksta augstumu un lapas papīru sākas jauns zīmējums, metriskajam un imperiālajam darbam, un dalieties ar politikām visā birojā kā nelielu failu.
keywords: noklusējums, noklusējumi, noklusējuma politikas, politika, biroja standarts, biroja noklusējumi, veidne, jauns zīmējums, vienības, insunits, garuma formāts, arhitektūras, precizitāte, luprec, teksta augstums, lapas papīrs, a1, dalīties, eksportēt, importēt, json
from: 7b80fd13
---

## Ko jūs darīsiet

Pasakiet CadCraft, ar ko jauns zīmējums jāsāk, lai neviens birojā nebūtu jāpalaiž UNITS un jāmaina tās pašas lietas katru reizi. Tas ir papildinājums: tas ir izslēgts, kamēr to neieslēdzat, un politika, ko neiestatāt, atstāj CadCraft paša noklusējumu nemainītu.

:::note
Tie ir noklusējumi **jauniem** zīmējumiem un **jaunām** lapām. Zīmējums, ko jau sākāt, netiek mainīts, un atvērts zīmējums arī ne.
:::

## Soļi

1. Atveriet Iestatījumus, dodieties uz {{ui:Add-ons}} (Papildinājumi) un ieslēdziet Noklusējuma politikas.
2. Iestatījumos atveriet cilni **CadCraft** un kreisajā sarakstā izvēlieties Noklusējuma politikas.
3. Iestatiet politikas, kuras vēlaties. Katra sākas ar **CadCraft paša** vērtību. Politika ar lodziņiem **Metriskā** un **Imperiālā** prasa vienu vērtību katram zīmējuma veidam; aizpildiet tikai tos, kas vajadzīgi.
4. Saglabāšanas pogas nav: katra izmaiņa tiek saglabāta, tiklīdz to veicat.
5. Sāciet jaunu zīmējumu. Tam ir vienības, garuma formāts, precizitāte un teksta augstums, ko iestatījāt, un tā pirmā jaunā lapa ir uz papīra, ko izvēlējāties.

## Politikas

- **Jauna zīmējuma vienības**: nav, milimetri, centimetri, metri, collas vai pēdas.
- **Garuma formāts** un **Garuma precizitāte**: ko komanda UNITS iestata jaunam zīmējumam.
- **Jauna teksta augstums** zīmējuma vienībās.
- **Jaunas lapas papīrs**: papīrs, ko izmanto Jauna lapa.
- **Anotāciju izmēri uz papīra** (Iestatījumi › Vispārīgi › Noklusējuma politikas): biroja augstumi milimetros, kā tie drukāti. CadCraft izmanto to piezīmēm un uzrakstiem: {{cmd:ANNOSCALE}} iestata jaunā teksta augstumu, kas atbilst šim augstumam anotācijas mērogā. Skatiet [Vienības, papīri un mērogi](topic:units-papers-scales#annotate-by-scale).

Zīmējums collās vai pēdās izmanto imperiālās vērtības; jebkurš cits zīmējums izmanto metriskās. Zīmējums bez vienībām izmanto vienību sistēmu, kas iestatīta Iestatījumos › Vispārīgi › Noklusējuma politikas, vai metrisko, ja nekas nav iestatīts.

## Dalieties ar tām visā birojā

1. Iestatījumos atveriet cilni **Vispārīgi** un izvēlieties Noklusējuma politikas.
2. Noklikšķiniet {{ui:Save to a file}} (Saglabāt failā). Iegūsiet nelielu failu, kas beidzas ar `.ccdefaults.json`.
3. Citā datorā ieslēdziet papildinājumu, atveriet to pašu vietu un noklikšķiniet {{ui:Load from a file}} (Ielādēt no faila). Faila politikas aizstāj tās, kas ir tajā datorā.

Viens fails satur visu CadCraft lietotņu politikas, tāpēc tas pats fails darbojas arī BimCraft.

## Vērts zināt

- Lapas mērogam politikas nav: jaunas lapas skats tiek piemērots zīmējumam, un mērogu iestatāt lapā.
- Izmēru stilam politikas nav: jaunam zīmējumam nav nosaukto izmēru stilu. Iestatiet izmērus ar DIMSTYLE vai sāciet no zīmējuma, kuram tie jau ir.
- Fails ir vienkāršs, atverams JSON. Politika, ko fails nosauc, bet šī versija nepazīst, tiek izlaista un nosaukta ziņojumā; pārējās ielādējas.
- Politikas tiek glabātas šajā pārlūkprogrammā, nevis zīmējumā. Izslēdziet papildinājumu, un viss atkal ir CadCraft pašas.
