---
title: Butona të tuajt (Veglat e mia)
summary: Shto butona në shiritin e veglave që ekzekutojnë makrot e tua, jepu atyre tasta shkurtoresh, ndaji si skedar dhe merr butona nga një skedar personalizimi CUIx.
keywords: veglat e mia, butona të personalizuar, butona të shiritit, makro, makrot, cui, cuix, personalizo, meny, tasta shkurtoresh, diesel, ^c^c, importo butona, eksporto butona
from: 36618802
---

## Çfarë do të mësosh

Si të vendosësh butona të tu në shirit, secili që ekzekuton një makro të shkruar siç i shkruan AutoCAD, si t'i japësh një butoni një tast, dhe si t'i sjellësh butonat e një skedari CUIx.

## Shto një buton

1. Hap {{ui:Cilësimet}} ({{key:Mod+,}}) dhe qëndro te skeda {{ui:CadCraft}}. Zbrit deri te {{ui:Veglat e mia}}.
2. Kliko {{ui:Shto një buton…}}.
3. Plotëso kutinë:
   - {{ui:Grupi}}: grupi i shiritit ku shkon, p.sh. `My tools`. Një emër i ri bën një grup të ri.
   - {{ui:Etiketa}}: fjalët në buton.
   - {{ui:Makroja}}: çfarë shkruan, p.sh. `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Tasti i shkurtores}}: kliko kutinë dhe shtyp tastet, p.sh. {{key:Ctrl+Alt+B}}.
   - {{ui:Ikona}}: një imazh PNG ose SVG deri në 64 KB, ose asnjë (shfaqet një yll).
4. Kliko {{ui:Ruaj}}.

Butoni shfaqet në fund të shiritit, në grupin e vet. Kliko atë, ose shtyp tastin e tij, për ta ekzekutuar. {{ui:Redakto}} dhe {{ui:Fshi}} në listë e ndryshojnë ose e heqin.

## Shkruaj një makro

Një makro është ajo që do të shkruaje në rreshtin e komandave, me disa shenja:

| Shenja | Do të thotë |
|---|---|
| `^C` | Ndërpret atë që po ekzekutohet (`^C^C` është fillimi i zakonshëm) |
| `;` ose një hapësirë | {{key:Enter}} |
| `\` | Pret ty: një klikim ose një përgjigje e shkruar, pastaj makroja vazhdon |
| `_` ose `.` para një komande | Pranohet dhe injorohet (emra ndërkombëtarë dhe të integruar) |
| `*` në fillim të plotë | Ekzekutohet përsëri sa herë mbaron, deri sa shtyp {{key:Esc}} |
| `^O`, `^G` | Ndez ose fik Ortho, rrjetën |
| `$M=` | Pjesa tjetër është DIESEL. Lexohen vetëm `$(if,…)`, `$(getvar,…)`, `$(=,…)` dhe `$(eq,…)`; një buton që përdor diçka tjetër e thotë këtë dhe nuk bën asgjë |

Shembuj:

- `^C^C_line;0,0;@100,0;;` vizaton një vijë 100 të gjatë nga origjina.
- `^C^C_circle;\25;` të pyet për qendrën, pastaj vizaton një rreth me rreze 25 atje.
- `^C^C_turnright` e kthen pamjen 90° djathtas.

## Tastet shkurtore

Një tast kërkon {{key:Mod}} (Ctrl, ose Cmd në Mac) ose {{key:Alt}} me një shkronjë ose shifër, ose një nga tastet e lira funksionale {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Shkronjat e veçuara shkojnë te rreshti i komandave. Tastet që CadCraft, aplikacioni ose shfletuesi i përdor tashmë (si {{key:Ctrl+S}} ose {{key:Ctrl+Z}}) dhe tastet që ka një buton tjetër refuzohen, dhe kutia tregon arsyen.

## Ndaj butonat e tu

- {{ui:Eksporto…}} ruan çdo grup dhe buton (me ikona dhe tasta) si `my-tools.json`.
- {{ui:Importo…}} shton grupet e një skedari të tillë pas tyre. Një emër grupi që ke përdorur tashmë merr "(2)"; një tast që do të përplasej lihet jashtë, dhe paneli e thotë këtë.

## Merr butona nga një skedar CUIx

1. Kliko {{ui:Importo CUIx…}} dhe zgjidh skedarin `.cuix`.

Shiritat dhe panelet e shiritit të tij bëhen grupe, secili buton me makron dhe imazhin e vet (PNG, ose BMP i kthyer në PNG). Tastet e tij të shkurtores vijnë në një grup të vetin, secili buton me tastin e vet; aliaset e komandave që mund të mbajë vijnë në një grup {{ui:Aliaset}}. Paneli liston çfarë u sollë.

:::note
Skedari vetëm lexohet. Komandat që CadCraft nuk i ka listohen me emër, nuk merren me hamendje: butonat e tyre e thonë këtë kur klikohen. DIESEL përtej disa funksioneve të lartpërmendura, menutë, butonat e mausit dhe hapësirat e punës nuk lexohen.
:::

## Gjëra të dobishme

- Butonat mbahen në këtë shfletues (ose në këtë aplikacion desktop), jo në vizatime.
- Një buton ekzekutohet përmes rreshtit të komandave, kështu që zhbëhet si çdo gjë që shkruan: një {{key:Mod+Z}} për çdo komandë që ekzekutoi.
