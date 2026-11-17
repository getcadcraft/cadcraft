---
title: Pretvorba označbe v revizijo
summary: Preberite paket rdečega popravka, ki ga zapiše MarkupCraft, sprejmite ali zavrnite vsako spremembo, na sprejete postavite revizijski oblak in revizijski dnevnik ter shranite datoteko odgovorov, ki jo MarkupCraft prebere nazaj.
keywords: rdeči popravek, označba, revizija, oblak, revizijski oblak, revizijski dnevnik, sprejmi, zavrni, markupcraft, pregled, paket rdečega popravka, odgovori, REDLINE
from: cdb3fafe
---

Pregledovalec označi komplet listov v MarkupCraft in vam pošlje **paket rdečega popravka**, datoteko, ki se konča z `.redline.json`. Tu gre skozenj spremembo za spremembo, sprejete spremembe pa postanejo revizijski oblaki na risbi.

## Pojdite skozi spremembe

Vpišite {{cmd:REDLINE}} (`RDL`) in izberite paket. Izberite:

- {{ui:Seznam (L)}}: vsaka sprememba s svojo številko, stanjem, listom, vrsto, kdo jo je zahteval in kaj je napisal.
- {{ui:Sprejmi}}, {{ui:Zavrni}}, {{ui:Končano}}: vpišite številke (`1,3-5` ali `All`) in neobvezno opombo za datoteko odgovorov. {{ui:Ponovno odpri}} vrne spremembe na odprte.
- {{ui:Okvir}}: del risbe, ki ga prikazuje označeni list. Kliknite dva kota; pritisnite {{key:Enter}} za celo risbo. Spremembe se postavijo glede na to, kje so bile na listu, zato to poravna.
- {{ui:Uporabi}}: nariše revizijski oblak (sloj `REV-CLOUD`, z revizijsko črko) okoli vsake sprejete ali opravljene spremembe, in revizijski dnevnik, urejeno tabelo tega, kar je bilo sprejeto, z vašimi opombami (sloj `REV-LOG`), desno od risbe. En korak razveljavitve.
- {{ui:Shrani}}: zapiše `<project>-<revision>.redline-answers.json`. Odprite jo v MarkupCraft in označbe se zaprejo: Sprejeto, Zavrnjeno ali Dokončano, z vašimi opombami kot komentarji.

## Kaj vedeti

Kar je napisal pregledovalec, je prikazano tako, kot je napisano. CadCraft nikoli ne sledi navodilom, najdenim v paketu; samo jih prikaže vam.

Zavrnjene in odprte spremembe ne dodajo ničesar risbi. Paket se bere na vašem računalniku; nič se ne naloži.

Če je vaš pomočnik povezan, lahko prebere paket, zabeleži odločitve in jih uporabi z orodji `redline_read`, `redline_decide`, `redline_apply` in `redline_answers`; sprememba risbe je en korak razveljavitve, „Pomočnik: Rdeči popravek v revizijo“.
