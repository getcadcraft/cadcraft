---
title: Redakto aliaset e komandave
summary: Mbaj aliaset e tua të komandave në një skedar teksti, në formatin e njohur, importo dhe eksporto një skedar .pgp dhe ringarkoje me REINIT.
keywords: alias, aliases, aliasedit, pgp, emër i shkurtër, shkurtore, reinit, tastierë, personalizo, redakto aliaset
from: 2282d36f
---

## Çfarë do të mësosh

Si të shtosh emrat e tu të shkurtër për komandat, për shembull `LL` për {{cmd:LINE}}, të gjitha në një skedar teksti.

## Shto një alias

1. Hap {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Redakto aliaset…}}, ose shkruaj {{cmd:ALIASEDIT}} dhe shtyp {{key:Enter}}.
2. Shto një rresht me aliasin, një presje dhe komandën pas një ylli:

```
LL,     *LINE
```

3. Kliko {{ui:Ruaj}}. Rreshti i komandës thotë sa nga aliaset e tua janë në përdorim.
4. Shkruaj `LL` dhe shtyp {{key:Enter}}: LINE fillon.

Aliaset e tua qëndrojnë mbi ato të CadCraft. Një rresht yti fiton mbi një alias të integruar me të njëjtin emër; hiq rreshtin tënd dhe aliasi i integruar kthehet.

## Rreshtat që CadCraft refuzon

Editori liston çdo problem me numrin e rreshtit ndërsa shkruan:

- komanda nuk ekziston;
- aliasi është vetë emri i një komande (`LINE, *CIRCLE` do ta fshihte LINE);
- rreshti nuk është `ALIAS, *KOMANDA`;
- i njëjti alias është në dy rreshta (i fundit fiton).

Rreshtat që nisin një program në kompjuterin tënd, si `NOTEPAD, START, 1, *File to edit: ,`, anashkalohen me një shënim: një aplikacion në shfletues nuk mund të nisë programe.

## Sill aliaset nga një program tjetër

1. Në editorin e aliaseve, kliko {{ui:Importo .pgp…}} dhe zgjidh skedarin. Mund ta lëshosh edhe një skedar `.pgp` mbi vizatim.
2. Kontrollo problemet e listuara (komandat që CadCraft nuk i ka refuzohen, pjesa tjetër punon).
3. Kliko {{ui:Ruaj}}.

{{ui:Eksporto .pgp}} ruan aliaset e CadCraft dhe ato të tuat si një skedar të vetëm, në të njëjtin format.

## Ringarko skedarin

Shkruaj {{cmd:REINIT}} dhe shtyp {{key:Enter}} për të aplikuar përsëri skedarin e aliaseve. Ai mbahet në këtë shfletues; aplikacioni desktop do ta mbajë në dosjen e vet, dhe shërbimi në re do ta sinkronizojë.

## Shkronjat për opsionet e një komande

Një alias emëron një komandë. Për të ndryshuar shkronjat që përgjigjen opsioneve të një komande (`P` për Polar te {{cmd:ARRAY}}), shih [Jep opsioneve të komandave shkronjat e tua](topic:option-letters).

## Tastet e shkurtores për çdo komandë

Një alias shkruhet; një shkurtore është një tast. Për t'i dhënë një komande tastin e vet:

1. Kliko {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Tastet e shkurtores…}}, ose shkruaj `KEYS` dhe shtyp {{key:Enter}}.
2. Kliko kutinë {{ui:Tasti}} dhe shtyp tastet, për shembull {{key:Alt+Shift+C}}.
3. Te {{ui:Ekzekuton}}, shkruaj komandën, dhe nëse dëshiron, edhe çfarë shkruhet pas saj: `CIRCLE`, ose `ZOOM E`.
4. Kliko {{ui:Shto (A)}}.

Një tast duhet të ketë {{key:Mod}} ose {{key:Alt}} me një shkronjë ose shifër, ose një tast funksioni të lirë ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Tastet që CadCraft, aplikacioni ose shfletuesi i përdorin tashmë, dhe tastet që ka një buton i Mjeteve të mia (shih [Butona të tuaj](topic:my-tools)), refuzohen, dhe kutia thotë pse. Shkurtoret mbahen në këtë shfletues (ose në aplikacionin desktop); {{ui:Hiq (R)}} heq një shkurtore.
