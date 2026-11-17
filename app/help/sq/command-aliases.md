---
title: Redakto aliaset e komandave
summary: Mbaj aliaset e tua të komandave në një skedar teksti në formatin e njohur, importo dhe eksporto një skedar .pgp, dhe ringarkoje me REINIT.
keywords: alias, aliase, pgp, shkurtore, emër i shkurtër, reinit, tastierë, personalizo, redakto aliaset, redakto aliase
from: 6ab6fa0e
---

## Çfarë do të mësosh

Si të shtosh emra të tu të shkurtër për komandat, për shembull `LL` për {{cmd:LINE}}, të gjitha në një skedar teksti.

## Shto një alias

1. Hap {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Redakto aliaset…}}, ose shkruaj {{cmd:ALIASEDIT}} dhe shtyp {{key:Enter}}.
2. Shto një rresht me aliasin, një presje dhe komandën pas një ylli:

```
LL,     *LINE
```

3. Kliko {{ui:Ruaj}}. Rreshti i komandave thotë sa nga aliaset e tua janë në përdorim.
4. Shkruaj `LL` dhe shtyp {{key:Enter}}: LINE fillon.

Aliaset e tua qëndrojnë mbi ato të CadCraft. Një rresht yti fiton mbi një alias të integruar me të njëjtin emër; hiq rreshtin tënd dhe ai i integruari kthehet.

## Rreshtat që CadCraft refuzon

Redaktuesi liston çdo problem me numrin e rreshtit ndërsa shkruan:

- komanda nuk ekziston;
- aliasi është vetë emri i një komande (`LINE, *CIRCLE` do ta fshihte LINE);
- rreshti nuk është `ALIAS, *COMMAND`;
- i njëjti alias është në dy rreshta (rreshti i fundit fiton).

Rreshtat që nisin një program në kompjuterin tënd, si `NOTEPAD, START, 1, *File to edit: ,`, anashkalohen me një shënim: një aplikacion në shfletues nuk mund të nisë programe.

## Importo aliaset nga një program tjetër

1. Te redaktuesi i aliasve, kliko {{ui:Importo .pgp…}} dhe zgjidh skedarin. Mund ta lësh edhe një skedar `.pgp` mbi vizatim.
2. Kontrollo problemet e listuara (komandat që CadCraft nuk i ka refuzohen, pjesa tjetër funksionon).
3. Kliko {{ui:Ruaj}}.

{{ui:Eksporto .pgp}} ruan aliaset e CadCraft dhe të tutë si një skedar të vetëm, në të njëjtin format.

## Ringarko skedarin

Shkruaj {{cmd:REINIT}} dhe shtyp {{key:Enter}} për të aplikuar përsëri skedarin e aliasve. Mbahet në këtë shfletues; aplikacioni desktop do ta mbajë në dosjen e vet, dhe shërbimi cloud do ta sinkronizojë.

## Tastet e shkurtores për çdo komandë

Një alias shkruhet; një shkurtore është një tast. Për t'i dhënë një komande një tast të vetin:

1. Kliko {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Tastet e shkurtores…}}, ose shkruaj `KEYS` dhe shtyp {{key:Enter}}.
2. Kliko kutinë {{ui:Tasti}} dhe shtyp tastet, për shembull {{key:Alt+Shift+C}}.
3. Te {{ui:Ekzekuton}}, shkruaj komandën, dhe, nëse do, atë që duhet shkruar pas saj: `CIRCLE`, ose `ZOOM E`.
4. Kliko {{ui:Shto (A)}}.

Një tast kërkon {{key:Mod}} ose {{key:Alt}} me një shkronjë ose shifër, ose një tast funksioni të lirë ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Tastet që CadCraft, aplikacioni ose shfletuesi i përdorin tashmë, dhe tastet që ka një buton Veglat e mia (shih [Butonat e tu](topic:my-tools)), refuzohen, dhe kutia thotë pse. Shkurtoret mbahen në këtë shfletues (ose aplikacion desktop); {{ui:Hiq (R)}} heq një.
