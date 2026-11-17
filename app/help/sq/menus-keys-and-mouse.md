---
title: Menutë, tastet dhe miu
summary: Zgjidhni një stil menuje që përputhet me mënyrën tuaj të punës, i jepni çdo komande tastin tuaj ose një taste që shkruan një komandë, zhvendosni komandat mes skedave të shiritit, dhe vendosni çfarë bëjnë rrota dhe butonat e miut.
keywords: stili i menusë, menu, shirit, shiriti i veglave, rreshti i komandave, shkurtore tastiere, tastet e shkurtra, taste, personalizo, ridrejto tastet, shkurtore, tekst tastesh, miu, rrota, përmbys, drejtimi i zmadhimit, butoni i mesit, butoni i djathtë, lëviz, eksporto, importo, ndërrim, i njohur, hartim klasik
from: 8bbf4f88
---

Komandat e CadCraft janë të njëjta sido që t'i arrini, dhe rreshti i komandave është gjithmonë aty me aliaset e tij (`L`, `C`, `TR` …). Një **stil menuje** vendos vetëm ku ndodhen butonat në ekran, si quhen aty dhe cilat taste i ekzekutojnë. Zgjidheni te {{ui:Cilësimet}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menutë, tastet dhe miu}}; ndryshimi bëhet menjëherë, dhe ky shfletues e mban mend.

## Tre stilet

| Stili | Çfarë merrni |
|---|---|
| {{ui:CadCraft}} | Veglat e vetë CadCraft: Skedar, Vizato, Ndrysho, Shëno, Parametrike, Blloqe, Fletët, Redakto dhe Pamja, secila me një menu {{ui:Më shumë}}. Fillimi. |
| {{ui:Hartim klasik}} | Një shirit i rregulluar si programet klasike të hartimit 2D: një menu {{ui:Skedar}} dhe butona të shpejtë, pastaj skedat {{ui:Kryefaqja}} (Vizato, Ndrysho, Shënimet, Shtresat, Blloku, Vetitë, Shërbimet, Kopjimi), {{ui:Fut}}, {{ui:Shëno}}, {{ui:Parametrike}}, {{ui:Pamja}}, {{ui:Menaxho}}, {{ui:Dalja}} dhe {{ui:3D}}. Shkruani komandat si gjithmonë. Butoni i mesit lëviz; klikimi me të djathtën është {{key:Enter}}, dhe tërheqja me butonin e djathtë nuk bën asgjë. |
| {{ui:Shirit}} | Një shirit me skeda të thjeshta detyrash: {{ui:Vizato}}, {{ui:Ndrysho}}, {{ui:Shëno}}, {{ui:Parametrike}}, {{ui:Blloqe}}, {{ui:Fletët}}, {{ui:Pamja}}, {{ui:3D}} dhe {{ui:Mjetet}}, me një menu {{ui:Skedar}} dhe butona të shpejtë në të djathtë. Butonat e mesit dhe të djathtë lëvizin, si në stilin e vetë CadCraft. |

Çdo stil i mban tastet e CadCraft: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, dhe {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} për ndihmësit e hartimit. Shkronjat nuk janë kurrë taste: CadCraft i shkruan ato në rreshtin e komandave.

Shiritat mbajnë edhe veglat e panelit të Shtresave dhe ndihmësit e hartimit të shiritit të statusit. Skeda {{ui:3D}} plotësohet pasi të hapet skeda 3D nën vizatim; një vegël 3D e zgjedhur në skedën Model hap fillimisht skedën 3D, dhe një vegël 2D e zgjedhur në skedën 3D kthehet fillimisht në skedën Model.

:::tip
Një tast që i takon paraqitjes së vetë CadCraft, por që stili juaj ia ka dhënë një komande tjetër, nuk bën asgjë, dhe shiriti i statusit thotë ku shkoi komanda e tij ("Te Tastet e mia, Ortho është Ctrl+Alt+O"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} dhe shigjetat e mbajnë gjithmonë kuptimin e tyre. Ndërsa një komandë ekzekutohet, ose ndërsa shkruhen shkronja në rreshtin e komandave, tastet i përkasin rreshtit të komandave.
:::

## Bëjeni të tuajin

1. Zgjidhni stilin më të afërt me atë që doni, pastaj klikoni {{ui:Personalizo…}}.
2. Te {{ui:Tastet dhe menutë}}, gjeni një komandë (kutia e kërkimit ndihmon). Klikoni {{ui:Shto një çelës}} dhe shtypni tastin. Klikoni një taste për ta hequr.
3. Me një shirit, {{ui:Ku ndodhet}} e zhvendos komandën në një skedë dhe panel tjetër, në menunë {{ui:Skedar}}, ose te {{ui:Vetëm tastet}}.
4. Te {{ui:Miu}}, vendosni rrotën dhe butonat që lëvizin vizatimin.
5. Jepini një emër dhe klikoni {{ui:Ruaj}}.

Ruajtja e një stili të integruar krijon kopjen tuaj ("Hartim klasik im"); stili i integruar nuk ndryshon kurrë. Një tast i dhënë dy komandave shfaqet me të kuqe dhe duhet rregulluar përpara se ta ruani.

## Tastet që shkruajnë një komandë

{{cmd:SHORTCUTS}} (Pamja › Më shumë › {{ui:Tastet e shkurtores…}}) i jep një tasti një rresht të tërë komande, si {{key:Ctrl+Alt+L}} për `LINE` ose {{key:F9}} për `ZOOM E`. Këto taste i përkasin stilit në përdorim: herën e parë që hapet kjo version, tastet që keni bërë në një version më të vjetër kalojnë në stilin tuaj "Tastet e mia CadCraft", një herë, dhe funksionojnë si më parë. Eksportimi i stilit i merr ato me vete.

## Miu

- **Rrota e mausit**: {{ui:Lëvizja lart zmadhon}} (fillimi) ose {{ui:Lëvizja lart zvogëlon}}, dhe sa shpejt. Një ngjitje me gishtat në trackpad zmadhon gjithmonë në drejtimin që lëvizin gishtat tuaj.
- **Lëvizni vizatimin me**: butonin e mesit, butonin e djathtë, ose të dyja. Një klikim me të djathtën pa tërheqje është gjithmonë {{key:Enter}}. Butoni i majtë zgjedh dhe vizaton gjithmonë në CadCraft, kështu që ta zgjidhni nuk ndryshon asgjë këtu.
- **Tërheqja në pamjet 3D**: skeda 3D mban butonat e vet në çdo stil (e majta rrotullon, mesi dhe e djathta lëvizin).

## Merreni me vete

{{ui:Eksporto}} e ruan stilin në përdorim si një skedar të vogël `.ccinput.json`; {{ui:Importo…}} shton një të tillë, nga një kompjuter tjetër ose nga një koleg. Një skedar i importuar mund të tregojë vetëm te komandat e vetë CadCraft: çdo gjë tjetër në të lihet jashtë dhe numërohet në shiritin e statusit. {{ui:Fshi këtë stil}} heq një nga stilet tuaja.

:::note
Këto cilësime mbeten në këtë shfletues. {{ui:Përdore këtë stil në çdo aplikacion}} nën kartat e stileve e bën çdo aplikacion të hapet në stilin e vet përkatës (veglat e tij, një shirit ose Hartim klasik), me ndryshimet që keni bërë në secilin aplikacion. CadCraft nuk ka stil me shirit menuje: kur shiriti i menusë së një aplikacioni tjetër zgjidhet për çdo aplikacion, CadCraft mban veglat e veta.
:::

Të lidhura: [Tastiera dhe miu](topic:keyboard) · [Cilësimet e CadCraft](topic:settings) · [Nga programe të tjera hartimi](topic:coming-from) · [Aliaset e komandave](topic:command-aliases)
